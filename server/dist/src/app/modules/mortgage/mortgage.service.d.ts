import { MortgageRequestDto } from './dto/mortgage-request.dto';
import { PrismaService } from 'prisma/prisma.service';
import { MortgageResponseDto } from './dto/mortgage-response.dto';
export declare class MortgageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createMortgageCalculation(request: MortgageRequestDto): Promise<MortgageResponseDto>;
}
