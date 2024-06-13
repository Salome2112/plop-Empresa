import { PartialType } from '@nestjs/swagger';
import { CreateChupeteDto } from './create-chupete.dto';

export class UpdateChupeteDto extends PartialType(CreateChupeteDto) {}
