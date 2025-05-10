import { AppDataSource } from "../db";
import { Property } from "../../entities/property";

async function seed() {
  await AppDataSource.initialize();
  const repo = AppDataSource.getMongoRepository(Property);

  const demoProperty = repo.create({
    title: "Modern 3BR Condo",
    description: "A modern 3-bedroom condo with sea view.",
    type: "Condo",
    price: 350000,
    street: "123 Ocean Drive",
    city: "Miami",
    state: "FL",
    zipCode: "33139",
    country: "USA",
    location: {
      type: "Point",
      coordinates: [-80.13, 25.79],
    },
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1400,
    yearBuilt: 2018,
    amenities: ["Pool", "Garage", "Balcony"],
    images: ["https://picsum.photos/200/300"],
    status: "Available",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  await repo.save(demoProperty);
  console.log("✅ Seed completed");
  await AppDataSource.destroy();
}

seed().catch(console.error);
