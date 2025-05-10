import {
  Entity,
  ObjectIdColumn,
  ObjectId,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Transform } from "class-transformer";

@Entity("properties")
export class Property {
  @Transform(({ value }: { value: ObjectId }) => value.toHexString(), {
    toPlainOnly: true,
  })
  @ObjectIdColumn()
  _id: ObjectId | string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  type: "Apartment" | "House" | "Condo" | "Land" | "Commercial";

  @Column("double")
  price: number;

  @Column({ nullable: true })
  street?: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  state?: string;

  @Column({ nullable: true })
  zipCode?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  location?: {
    type: "Point";
    coordinates: [number, number]; // [longitude, latitude]
  };

  @Column({ nullable: true })
  bedrooms?: number;

  @Column({ nullable: true })
  bathrooms?: number;

  @Column({ nullable: true })
  squareFeet?: number;

  @Column({ nullable: true })
  yearBuilt?: number;

  @Column({ nullable: true })
  amenities?: string[];

  @Column({ nullable: true })
  images?: string[];

  @Column({
    default: "Available",
  })
  status?: "Available" | "Sold" | "Pending" | "Rented";

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
