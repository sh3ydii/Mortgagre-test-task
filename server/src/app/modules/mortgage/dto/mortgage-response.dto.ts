export class MortgagePayment {
    totalPayment: number;
    repaymentOfMortgageBody: number;
    repaymentOfMortgageInterest: number;
    mortgageBalance: number;
  }
  

export class MonthlyMortgagePayments {
    [month: string]: MortgagePayment;
  }

  export class MortgagePaymentSchedule {
    [year: string]: MonthlyMortgagePayments;
  }

export class MortgageResponseDto {
    monthlyPayment: number;
    totalPayment: number;
    totalOverpaymentAmount: number;
    possibleTaxDeduction: number;
    savingsDueMotherCapital: number;
    recommendedIncome: number;
    mortgagePaymentSchedule: MortgagePaymentSchedule;
  }