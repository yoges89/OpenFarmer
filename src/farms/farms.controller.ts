import { Controller, Get, Body, Post } from "@nestjs/common";
import { FarmsService } from "./farms.service";
import { CreateFarmDto } from "./dto/create-farm.dto";

@Controller('farms')
export class FarmsController {
    constructor(private farmsService: FarmsService) {}
    @Get()
    findAll(): string {
        return this.farmsService.findAll();
    }

    @Post()
    create(@Body() createFarmDto: CreateFarmDto) {
        return this.farmsService.create(createFarmDto);
    }
}