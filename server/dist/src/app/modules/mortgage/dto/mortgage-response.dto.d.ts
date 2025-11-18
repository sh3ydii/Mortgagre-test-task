export declare class MortgagePayment {
    totalPayment: number;
    repaymentOfMortgageBody: number;
    repaymentOfMortgageInterest: number;
    mortgageBalance: number;
}
export declare class MonthlyMortgagePayments {
    [month: string]: MortgagePayment;
}
export declare class MortgagePaymentSchedule {
    [year: string]: MonthlyMortgagePayments;
}
export declare class MortgageResponseDto {
    monthlyPayment: number;
    totalPayment: number;
    totalOverpaymentAmount: number;
    possibleTaxDeduction: number;
    savingsDueMotherCapital: number;
    recommendedIncome: number;
    mortgagePaymentSchedule: MortgagePaymentSchedule;
}
