import { Body, Controller, Post } from '@nestjs/common';
import { MortgageService } from './mortgage.service';
import { MortgageRequestDto } from './dto/mortgage-request.dto';
import { MortgageResponseDto } from './dto/mortgage-response.dto';

@Controller('mortgage')
export class MortgageController {
  constructor(private readonly mortgageService: MortgageService) {}

  @Post()
  async mortgageProfiles(@Body() data: MortgageRequestDto):  Promise<MortgageResponseDto> {
    console.log(data)
    return this.mortgageService.createMortgageCalculation(data);
  }
}
