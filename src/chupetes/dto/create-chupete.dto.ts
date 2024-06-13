import { ApiProperty } from "@nestjs/swagger";
export class CreateChupeteDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    flavor: string;
    @ApiProperty()
    price: number
}