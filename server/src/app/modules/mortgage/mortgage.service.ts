import { Injectable } from '@nestjs/common';
import { MortgageRequestDto } from './dto/mortgage-request.dto';
import { PrismaService } from 'prisma/prisma.service';
import { MonthlyMortgagePayments, MortgagePaymentSchedule, MortgageResponseDto } from './dto/mortgage-response.dto';

@Injectable()
export class MortgageService {
    constructor(private readonly prisma : PrismaService) {}


    async createMortgageCalculation(request: MortgageRequestDto): Promise<MortgageResponseDto> {
        console.log(request)
        const { propertyPrice, downPaymentAmount, matCapitalAmount, matCapitalIncluded, loanTermYears, interestRate } = request;
    
        const motherCapital = matCapitalIncluded && matCapitalAmount ? matCapitalAmount : 0;
        const loanAmount = propertyPrice - downPaymentAmount - motherCapital;
        const totalMonths = loanTermYears * 12;
        const monthlyRate = interestRate / 12 / 100;
    
        const monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
        const totalPayment = monthlyPayment * totalMonths;
        const totalOverpayment = totalPayment - loanAmount;
    
        const taxDeductionProperty = Math.min(propertyPrice, 2_000_000) * 0.13;
        const taxDeductionInterest = Math.min(totalOverpayment, 3_000_000) * 0.13;
        const totalTaxDeduction = taxDeductionProperty + taxDeductionInterest;
    
        const schedule: MortgagePaymentSchedule = {};
        let remainingDebt = loanAmount;
    
        for (let year = 1; year <= loanTermYears; year++) {
            const monthlyPayments: MonthlyMortgagePayments = {};
    
        for (let month = 1; month <= 12; month++) {
            const interestPayment = remainingDebt * monthlyRate;
            const principalPayment = monthlyPayment - interestPayment;
            remainingDebt -= principalPayment;
    
            monthlyPayments[month.toString()] = {
                totalPayment: monthlyPayment,
                repaymentOfMortgageBody: principalPayment,
                repaymentOfMortgageInterest: interestPayment,
                mortgageBalance: remainingDebt > 0 ? remainingDebt : 0,
            };
    
            if (remainingDebt <= 0) break;
        }
    
        schedule[year.toString()] = monthlyPayments;
        if (remainingDebt <= 0) break;
        }
    
        const profile = await this.prisma.mortgageProfile.create({
            data: {
                propertyPrice,
                downPaymentAmount,
                matCapitalAmount: motherCapital,
                loanTermYears,
                interestRate,
                loanAmount,
            },
        });
    
        await this.prisma.mortgageCalculation.create({
            data: {
                mortgageProfileId: profile.id,
                monthlyPayment,
                totalPayment,
                totalOverpaymentAmount: totalOverpayment,
                possibleTaxDeduction: totalTaxDeduction,
                savingsDueMotherCapital: motherCapital,
                recommendedIncome: monthlyPayment * 3, 
                paymentSchedule: JSON.parse(JSON.stringify(schedule)), 
            },
        });
    
        return {
            monthlyPayment,
            totalPayment,
            totalOverpaymentAmount: totalOverpayment,
            possibleTaxDeduction: totalTaxDeduction,
            savingsDueMotherCapital: motherCapital,
            recommendedIncome: monthlyPayment * 3,
            mortgagePaymentSchedule: schedule,
        };
    }
}
