export enum PropertyType {
    APARTMENT_IN_NEW_BUILDING = 'apartment_in_new_building',
    APARTMENT_IN_SECONDARY_BUILDING = 'apartment_in_secondary_building',
}

export class MortgageRequestDto {
    propertyPrice: number;
    propertyType: 'apartment_in_new_building' | 'apartment_in_secondary_building';
    downPaymentAmount: number;
    matCapitalAmount?: number | null;
    matCapitalIncluded: boolean;
    loanTermYears: number;
    interestRate: number;
}