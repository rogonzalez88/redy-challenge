import { Repository } from "typeorm";
import { plainToClass } from "class-transformer";
import { ObjectId } from "mongodb";

import { AppDataSource as db } from "../db/db";
import { Property } from "../entities/property";

export class PropertyService {
  private readonly repository: Repository<Property>;

  constructor() {
    this.repository = db.getRepository(Property);
  }

  async create(
    data: Omit<Property, "_id" | "createdAt" | "updatedAt">,
  ): Promise<Property> {
    const res = await this.repository.insert(data);
    return this.repository
      .findOne({ where: { _id: res.identifiers[0]._id } })
      .then((property) => plainToClass(Property, property));
  }

  findAll({
    where,
    pagination,
  }: {
    where?: Record<string, string | number>;
    pagination?: { skip: number; take: number };
  }): Promise<Property[]> {
    return this.repository
      .find({
        ...(where && { where }),
        ...(pagination && { ...pagination }),
      })
      .then((favorites) =>
        favorites.map((favorite) => plainToClass(Property, favorite)),
      );
  }

  findOne(id: string): Promise<Property | null> {
    return this.repository
      .findOne({ where: { _id: new ObjectId(id) } })
      .then((property) => property && plainToClass(Property, property));
  }

  async update(
    id: string,
    data: Partial<Omit<Property, "_id" | "createdAt" | "updatedAt">>,
  ): Promise<Property> {
    await this.repository.update(id, data);
    return this.findOne(id).then((property) =>
      plainToClass(Property, property),
    );
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
