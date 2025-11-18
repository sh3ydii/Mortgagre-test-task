import { MortgageService } from './mortgage.service';
import { MortgageRequestDto } from './dto/mortgage-request.dto';
import { MortgageResponseDto } from './dto/mortgage-response.dto';
export declare class MortgageController {
    private readonly mortgageService;
    constructor(mortgageService: MortgageService);
    mortgageProfiles(data: MortgageRequestDto): Promise<MortgageResponseDto>;
}
