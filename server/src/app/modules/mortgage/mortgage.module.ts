import { Module } from '@nestjs/common';
import { MortgageService } from './mortgage.service';
import { MortgageController } from './mortgage.controller';
import { PrismaService } from '../../../../prisma/prisma.service';

@Module({
  controllers: [MortgageController],
  providers: [MortgageService, PrismaService],
})
export class MortgageModule {}
