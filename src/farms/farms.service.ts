import { Injectable } from "@nestjs/common";
import { CreateFarmDto } from "./dto/create-farm.dto";

@Injectable()
export class FarmsService {
    findAll(): string {
        return 'Hi NestJs';
    }

    create(createFarmDto: CreateFarmDto) {
        console.log(createFarmDto);
        return "Created.";
    }
}