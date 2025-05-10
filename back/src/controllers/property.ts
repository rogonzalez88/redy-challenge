import "reflect-metadata";

import {
  JsonController,
  Get,
  QueryParams,
  Post,
  Param,
  Delete,
  NotFoundError,
  Body,
  Put,
} from "routing-controllers";

import { PropertyService } from "../services";
import { Property } from "../entities";
import { CreatePropertyDto, PropertyQuery } from "../dtos";
import { createQueryOptions } from "../utils";

@JsonController("/api")
export class PropertyController {
  private readonly service = new PropertyService();

  @Get("/properties")
  getAll(@QueryParams() query: PropertyQuery): Promise<Property[]> {
    const { where, pagination } = createQueryOptions(
      PropertyQuery,
      query as unknown as Record<string, string>,
    );
    return this.service.findAll({
      where: { ...where },
      pagination,
    });
  }

  @Post("/properties")
  post(@Body() property: CreatePropertyDto): Promise<Property> {
    return this.service.create(property);
  }

  @Get("/properties/:id")
  getOne(@Param("id") id: string): Promise<Property | null> {
    return this.service.findOne(id).then((property) => {
      if (!property) {
        throw new NotFoundError("Property not found");
      }
      return property;
    });
  }

  @Delete("/properties/:id")
  delete(@Param("id") id: string): Promise<Property> {
    return this.service.findOne(id).then(async (property) => {
      if (!property) {
        throw new NotFoundError("Property not found");
      }
      await this.service.delete(id);
      return property;
    });
  }

  @Put("/properties/:id")
  update(
    @Param("id") id: string,
    @Body() property: Partial<CreatePropertyDto>,
  ): Promise<Property> {
    return this.service.findOne(id).then((propertyFound) => {
      if (!propertyFound) {
        throw new NotFoundError("Property not found");
      }
      return this.service.update(id, property);
    });
  }
}
