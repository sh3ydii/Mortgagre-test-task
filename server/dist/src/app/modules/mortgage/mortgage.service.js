"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MortgageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../prisma/prisma.service");
let MortgageService = class MortgageService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createMortgageCalculation(request) {
        console.log(request);
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
        const schedule = {};
        let remainingDebt = loanAmount;
        for (let year = 1; year <= loanTermYears; year++) {
            const monthlyPayments = {};
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
                if (remainingDebt <= 0)
                    break;
            }
            schedule[year.toString()] = monthlyPayments;
            if (remainingDebt <= 0)
                break;
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
};
exports.MortgageService = MortgageService;
exports.MortgageService = MortgageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MortgageService);
//# sourceMappingURL=mortgage.service.js.map