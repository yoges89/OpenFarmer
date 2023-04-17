import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateFarmDto {
    @IsString()
    name: string;

    @IsNumber()
    area: number;

    @IsString()
    areaUnit: string;

    @IsBoolean()
    irrigated: boolean;
}