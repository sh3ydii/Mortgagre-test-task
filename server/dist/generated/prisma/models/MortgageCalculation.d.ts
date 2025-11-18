import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type MortgageCalculationModel = runtime.Types.Result.DefaultSelection<Prisma.$MortgageCalculationPayload>;
export type AggregateMortgageCalculation = {
    _count: MortgageCalculationCountAggregateOutputType | null;
    _avg: MortgageCalculationAvgAggregateOutputType | null;
    _sum: MortgageCalculationSumAggregateOutputType | null;
    _min: MortgageCalculationMinAggregateOutputType | null;
    _max: MortgageCalculationMaxAggregateOutputType | null;
};
export type MortgageCalculationAvgAggregateOutputType = {
    id: number | null;
    mortgageProfileId: number | null;
    monthlyPayment: number | null;
    totalPayment: number | null;
    totalOverpaymentAmount: number | null;
    possibleTaxDeduction: number | null;
    savingsDueMotherCapital: number | null;
    recommendedIncome: number | null;
};
export type MortgageCalculationSumAggregateOutputType = {
    id: number | null;
    mortgageProfileId: number | null;
    monthlyPayment: number | null;
    totalPayment: number | null;
    totalOverpaymentAmount: number | null;
    possibleTaxDeduction: number | null;
    savingsDueMotherCapital: number | null;
    recommendedIncome: number | null;
};
export type MortgageCalculationMinAggregateOutputType = {
    id: number | null;
    mortgageProfileId: number | null;
    monthlyPayment: number | null;
    totalPayment: number | null;
    totalOverpaymentAmount: number | null;
    possibleTaxDeduction: number | null;
    savingsDueMotherCapital: number | null;
    recommendedIncome: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MortgageCalculationMaxAggregateOutputType = {
    id: number | null;
    mortgageProfileId: number | null;
    monthlyPayment: number | null;
    totalPayment: number | null;
    totalOverpaymentAmount: number | null;
    possibleTaxDeduction: number | null;
    savingsDueMotherCapital: number | null;
    recommendedIncome: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MortgageCalculationCountAggregateOutputType = {
    id: number;
    mortgageProfileId: number;
    monthlyPayment: number;
    totalPayment: number;
    totalOverpaymentAmount: number;
    possibleTaxDeduction: number;
    savingsDueMotherCapital: number;
    recommendedIncome: number;
    paymentSchedule: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MortgageCalculationAvgAggregateInputType = {
    id?: true;
    mortgageProfileId?: true;
    monthlyPayment?: true;
    totalPayment?: true;
    totalOverpaymentAmount?: true;
    possibleTaxDeduction?: true;
    savingsDueMotherCapital?: true;
    recommendedIncome?: true;
};
export type MortgageCalculationSumAggregateInputType = {
    id?: true;
    mortgageProfileId?: true;
    monthlyPayment?: true;
    totalPayment?: true;
    totalOverpaymentAmount?: true;
    possibleTaxDeduction?: true;
    savingsDueMotherCapital?: true;
    recommendedIncome?: true;
};
export type MortgageCalculationMinAggregateInputType = {
    id?: true;
    mortgageProfileId?: true;
    monthlyPayment?: true;
    totalPayment?: true;
    totalOverpaymentAmount?: true;
    possibleTaxDeduction?: true;
    savingsDueMotherCapital?: true;
    recommendedIncome?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MortgageCalculationMaxAggregateInputType = {
    id?: true;
    mortgageProfileId?: true;
    monthlyPayment?: true;
    totalPayment?: true;
    totalOverpaymentAmount?: true;
    possibleTaxDeduction?: true;
    savingsDueMotherCapital?: true;
    recommendedIncome?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MortgageCalculationCountAggregateInputType = {
    id?: true;
    mortgageProfileId?: true;
    monthlyPayment?: true;
    totalPayment?: true;
    totalOverpaymentAmount?: true;
    possibleTaxDeduction?: true;
    savingsDueMotherCapital?: true;
    recommendedIncome?: true;
    paymentSchedule?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MortgageCalculationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MortgageCalculationWhereInput;
    orderBy?: Prisma.MortgageCalculationOrderByWithRelationInput | Prisma.MortgageCalculationOrderByWithRelationInput[];
    cursor?: Prisma.MortgageCalculationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MortgageCalculationCountAggregateInputType;
    _avg?: MortgageCalculationAvgAggregateInputType;
    _sum?: MortgageCalculationSumAggregateInputType;
    _min?: MortgageCalculationMinAggregateInputType;
    _max?: MortgageCalculationMaxAggregateInputType;
};
export type GetMortgageCalculationAggregateType<T extends MortgageCalculationAggregateArgs> = {
    [P in keyof T & keyof AggregateMortgageCalculation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMortgageCalculation[P]> : Prisma.GetScalarType<T[P], AggregateMortgageCalculation[P]>;
};
export type MortgageCalculationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MortgageCalculationWhereInput;
    orderBy?: Prisma.MortgageCalculationOrderByWithAggregationInput | Prisma.MortgageCalculationOrderByWithAggregationInput[];
    by: Prisma.MortgageCalculationScalarFieldEnum[] | Prisma.MortgageCalculationScalarFieldEnum;
    having?: Prisma.MortgageCalculationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MortgageCalculationCountAggregateInputType | true;
    _avg?: MortgageCalculationAvgAggregateInputType;
    _sum?: MortgageCalculationSumAggregateInputType;
    _min?: MortgageCalculationMinAggregateInputType;
    _max?: MortgageCalculationMaxAggregateInputType;
};
export type MortgageCalculationGroupByOutputType = {
    id: number;
    mortgageProfileId: number;
    monthlyPayment: number;
    totalPayment: number;
    totalOverpaymentAmount: number;
    possibleTaxDeduction: number;
    savingsDueMotherCapital: number;
    recommendedIncome: number;
    paymentSchedule: runtime.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    _count: MortgageCalculationCountAggregateOutputType | null;
    _avg: MortgageCalculationAvgAggregateOutputType | null;
    _sum: MortgageCalculationSumAggregateOutputType | null;
    _min: MortgageCalculationMinAggregateOutputType | null;
    _max: MortgageCalculationMaxAggregateOutputType | null;
};
type GetMortgageCalculationGroupByPayload<T extends MortgageCalculationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MortgageCalculationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MortgageCalculationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MortgageCalculationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MortgageCalculationGroupByOutputType[P]>;
}>>;
export type MortgageCalculationWhereInput = {
    AND?: Prisma.MortgageCalculationWhereInput | Prisma.MortgageCalculationWhereInput[];
    OR?: Prisma.MortgageCalculationWhereInput[];
    NOT?: Prisma.MortgageCalculationWhereInput | Prisma.MortgageCalculationWhereInput[];
    id?: Prisma.IntFilter<"MortgageCalculation"> | number;
    mortgageProfileId?: Prisma.IntFilter<"MortgageCalculation"> | number;
    monthlyPayment?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    totalPayment?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    totalOverpaymentAmount?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    possibleTaxDeduction?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    savingsDueMotherCapital?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    recommendedIncome?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    paymentSchedule?: Prisma.JsonFilter<"MortgageCalculation">;
    createdAt?: Prisma.DateTimeFilter<"MortgageCalculation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MortgageCalculation"> | Date | string;
    MortgageProfile?: Prisma.XOR<Prisma.MortgageProfileScalarRelationFilter, Prisma.MortgageProfileWhereInput>;
};
export type MortgageCalculationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    mortgageProfileId?: Prisma.SortOrder;
    monthlyPayment?: Prisma.SortOrder;
    totalPayment?: Prisma.SortOrder;
    totalOverpaymentAmount?: Prisma.SortOrder;
    possibleTaxDeduction?: Prisma.SortOrder;
    savingsDueMotherCapital?: Prisma.SortOrder;
    recommendedIncome?: Prisma.SortOrder;
    paymentSchedule?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    MortgageProfile?: Prisma.MortgageProfileOrderByWithRelationInput;
};
export type MortgageCalculationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MortgageCalculationWhereInput | Prisma.MortgageCalculationWhereInput[];
    OR?: Prisma.MortgageCalculationWhereInput[];
    NOT?: Prisma.MortgageCalculationWhereInput | Prisma.MortgageCalculationWhereInput[];
    mortgageProfileId?: Prisma.IntFilter<"MortgageCalculation"> | number;
    monthlyPayment?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    totalPayment?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    totalOverpaymentAmount?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    possibleTaxDeduction?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    savingsDueMotherCapital?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    recommendedIncome?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    paymentSchedule?: Prisma.JsonFilter<"MortgageCalculation">;
    createdAt?: Prisma.DateTimeFilter<"MortgageCalculation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MortgageCalculation"> | Date | string;
    MortgageProfile?: Prisma.XOR<Prisma.MortgageProfileScalarRelationFilter, Prisma.MortgageProfileWhereInput>;
}, "id">;
export type MortgageCalculationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    mortgageProfileId?: Prisma.SortOrder;
    monthlyPayment?: Prisma.SortOrder;
    totalPayment?: Prisma.SortOrder;
    totalOverpaymentAmount?: Prisma.SortOrder;
    possibleTaxDeduction?: Prisma.SortOrder;
    savingsDueMotherCapital?: Prisma.SortOrder;
    recommendedIncome?: Prisma.SortOrder;
    paymentSchedule?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MortgageCalculationCountOrderByAggregateInput;
    _avg?: Prisma.MortgageCalculationAvgOrderByAggregateInput;
    _max?: Prisma.MortgageCalculationMaxOrderByAggregateInput;
    _min?: Prisma.MortgageCalculationMinOrderByAggregateInput;
    _sum?: Prisma.MortgageCalculationSumOrderByAggregateInput;
};
export type MortgageCalculationScalarWhereWithAggregatesInput = {
    AND?: Prisma.MortgageCalculationScalarWhereWithAggregatesInput | Prisma.MortgageCalculationScalarWhereWithAggregatesInput[];
    OR?: Prisma.MortgageCalculationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MortgageCalculationScalarWhereWithAggregatesInput | Prisma.MortgageCalculationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MortgageCalculation"> | number;
    mortgageProfileId?: Prisma.IntWithAggregatesFilter<"MortgageCalculation"> | number;
    monthlyPayment?: Prisma.FloatWithAggregatesFilter<"MortgageCalculation"> | number;
    totalPayment?: Prisma.FloatWithAggregatesFilter<"MortgageCalculation"> | number;
    totalOverpaymentAmount?: Prisma.FloatWithAggregatesFilter<"MortgageCalculation"> | number;
    possibleTaxDeduction?: Prisma.FloatWithAggregatesFilter<"MortgageCalculation"> | number;
    savingsDueMotherCapital?: Prisma.FloatWithAggregatesFilter<"MortgageCalculation"> | number;
    recommendedIncome?: Prisma.FloatWithAggregatesFilter<"MortgageCalculation"> | number;
    paymentSchedule?: Prisma.JsonWithAggregatesFilter<"MortgageCalculation">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MortgageCalculation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MortgageCalculation"> | Date | string;
};
export type MortgageCalculationCreateInput = {
    monthlyPayment: number;
    totalPayment: number;
    totalOverpaymentAmount: number;
    possibleTaxDeduction: number;
    savingsDueMotherCapital: number;
    recommendedIncome: number;
    paymentSchedule: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    MortgageProfile: Prisma.MortgageProfileCreateNestedOneWithoutMortgageCalculationsInput;
};
export type MortgageCalculationUncheckedCreateInput = {
    id?: number;
    mortgageProfileId: number;
    monthlyPayment: number;
    totalPayment: number;
    totalOverpaymentAmount: number;
    possibleTaxDeduction: number;
    savingsDueMotherCapital: number;
    recommendedIncome: number;
    paymentSchedule: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MortgageCalculationUpdateInput = {
    monthlyPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalOverpaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    possibleTaxDeduction?: Prisma.FloatFieldUpdateOperationsInput | number;
    savingsDueMotherCapital?: Prisma.FloatFieldUpdateOperationsInput | number;
    recommendedIncome?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentSchedule?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MortgageProfile?: Prisma.MortgageProfileUpdateOneRequiredWithoutMortgageCalculationsNestedInput;
};
export type MortgageCalculationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mortgageProfileId?: Prisma.IntFieldUpdateOperationsInput | number;
    monthlyPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalOverpaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    possibleTaxDeduction?: Prisma.FloatFieldUpdateOperationsInput | number;
    savingsDueMotherCapital?: Prisma.FloatFieldUpdateOperationsInput | number;
    recommendedIncome?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentSchedule?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MortgageCalculationCreateManyInput = {
    id?: number;
    mortgageProfileId: number;
    monthlyPayment: number;
    totalPayment: number;
    totalOverpaymentAmount: number;
    possibleTaxDeduction: number;
    savingsDueMotherCapital: number;
    recommendedIncome: number;
    paymentSchedule: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MortgageCalculationUpdateManyMutationInput = {
    monthlyPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalOverpaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    possibleTaxDeduction?: Prisma.FloatFieldUpdateOperationsInput | number;
    savingsDueMotherCapital?: Prisma.FloatFieldUpdateOperationsInput | number;
    recommendedIncome?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentSchedule?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MortgageCalculationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mortgageProfileId?: Prisma.IntFieldUpdateOperationsInput | number;
    monthlyPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalOverpaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    possibleTaxDeduction?: Prisma.FloatFieldUpdateOperationsInput | number;
    savingsDueMotherCapital?: Prisma.FloatFieldUpdateOperationsInput | number;
    recommendedIncome?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentSchedule?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MortgageCalculationListRelationFilter = {
    every?: Prisma.MortgageCalculationWhereInput;
    some?: Prisma.MortgageCalculationWhereInput;
    none?: Prisma.MortgageCalculationWhereInput;
};
export type MortgageCalculationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MortgageCalculationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mortgageProfileId?: Prisma.SortOrder;
    monthlyPayment?: Prisma.SortOrder;
    totalPayment?: Prisma.SortOrder;
    totalOverpaymentAmount?: Prisma.SortOrder;
    possibleTaxDeduction?: Prisma.SortOrder;
    savingsDueMotherCapital?: Prisma.SortOrder;
    recommendedIncome?: Prisma.SortOrder;
    paymentSchedule?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MortgageCalculationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mortgageProfileId?: Prisma.SortOrder;
    monthlyPayment?: Prisma.SortOrder;
    totalPayment?: Prisma.SortOrder;
    totalOverpaymentAmount?: Prisma.SortOrder;
    possibleTaxDeduction?: Prisma.SortOrder;
    savingsDueMotherCapital?: Prisma.SortOrder;
    recommendedIncome?: Prisma.SortOrder;
};
export type MortgageCalculationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mortgageProfileId?: Prisma.SortOrder;
    monthlyPayment?: Prisma.SortOrder;
    totalPayment?: Prisma.SortOrder;
    totalOverpaymentAmount?: Prisma.SortOrder;
    possibleTaxDeduction?: Prisma.SortOrder;
    savingsDueMotherCapital?: Prisma.SortOrder;
    recommendedIncome?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MortgageCalculationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mortgageProfileId?: Prisma.SortOrder;
    monthlyPayment?: Prisma.SortOrder;
    totalPayment?: Prisma.SortOrder;
    totalOverpaymentAmount?: Prisma.SortOrder;
    possibleTaxDeduction?: Prisma.SortOrder;
    savingsDueMotherCapital?: Prisma.SortOrder;
    recommendedIncome?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MortgageCalculationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mortgageProfileId?: Prisma.SortOrder;
    monthlyPayment?: Prisma.SortOrder;
    totalPayment?: Prisma.SortOrder;
    totalOverpaymentAmount?: Prisma.SortOrder;
    possibleTaxDeduction?: Prisma.SortOrder;
    savingsDueMotherCapital?: Prisma.SortOrder;
    recommendedIncome?: Prisma.SortOrder;
};
export type MortgageCalculationCreateNestedManyWithoutMortgageProfileInput = {
    create?: Prisma.XOR<Prisma.MortgageCalculationCreateWithoutMortgageProfileInput, Prisma.MortgageCalculationUncheckedCreateWithoutMortgageProfileInput> | Prisma.MortgageCalculationCreateWithoutMortgageProfileInput[] | Prisma.MortgageCalculationUncheckedCreateWithoutMortgageProfileInput[];
    connectOrCreate?: Prisma.MortgageCalculationCreateOrConnectWithoutMortgageProfileInput | Prisma.MortgageCalculationCreateOrConnectWithoutMortgageProfileInput[];
    createMany?: Prisma.MortgageCalculationCreateManyMortgageProfileInputEnvelope;
    connect?: Prisma.MortgageCalculationWhereUniqueInput | Prisma.MortgageCalculationWhereUniqueInput[];
};
export type MortgageCalculationUncheckedCreateNestedManyWithoutMortgageProfileInput = {
    create?: Prisma.XOR<Prisma.MortgageCalculationCreateWithoutMortgageProfileInput, Prisma.MortgageCalculationUncheckedCreateWithoutMortgageProfileInput> | Prisma.MortgageCalculationCreateWithoutMortgageProfileInput[] | Prisma.MortgageCalculationUncheckedCreateWithoutMortgageProfileInput[];
    connectOrCreate?: Prisma.MortgageCalculationCreateOrConnectWithoutMortgageProfileInput | Prisma.MortgageCalculationCreateOrConnectWithoutMortgageProfileInput[];
    createMany?: Prisma.MortgageCalculationCreateManyMortgageProfileInputEnvelope;
    connect?: Prisma.MortgageCalculationWhereUniqueInput | Prisma.MortgageCalculationWhereUniqueInput[];
};
export type MortgageCalculationUpdateManyWithoutMortgageProfileNestedInput = {
    create?: Prisma.XOR<Prisma.MortgageCalculationCreateWithoutMortgageProfileInput, Prisma.MortgageCalculationUncheckedCreateWithoutMortgageProfileInput> | Prisma.MortgageCalculationCreateWithoutMortgageProfileInput[] | Prisma.MortgageCalculationUncheckedCreateWithoutMortgageProfileInput[];
    connectOrCreate?: Prisma.MortgageCalculationCreateOrConnectWithoutMortgageProfileInput | Prisma.MortgageCalculationCreateOrConnectWithoutMortgageProfileInput[];
    upsert?: Prisma.MortgageCalculationUpsertWithWhereUniqueWithoutMortgageProfileInput | Prisma.MortgageCalculationUpsertWithWhereUniqueWithoutMortgageProfileInput[];
    createMany?: Prisma.MortgageCalculationCreateManyMortgageProfileInputEnvelope;
    set?: Prisma.MortgageCalculationWhereUniqueInput | Prisma.MortgageCalculationWhereUniqueInput[];
    disconnect?: Prisma.MortgageCalculationWhereUniqueInput | Prisma.MortgageCalculationWhereUniqueInput[];
    delete?: Prisma.MortgageCalculationWhereUniqueInput | Prisma.MortgageCalculationWhereUniqueInput[];
    connect?: Prisma.MortgageCalculationWhereUniqueInput | Prisma.MortgageCalculationWhereUniqueInput[];
    update?: Prisma.MortgageCalculationUpdateWithWhereUniqueWithoutMortgageProfileInput | Prisma.MortgageCalculationUpdateWithWhereUniqueWithoutMortgageProfileInput[];
    updateMany?: Prisma.MortgageCalculationUpdateManyWithWhereWithoutMortgageProfileInput | Prisma.MortgageCalculationUpdateManyWithWhereWithoutMortgageProfileInput[];
    deleteMany?: Prisma.MortgageCalculationScalarWhereInput | Prisma.MortgageCalculationScalarWhereInput[];
};
export type MortgageCalculationUncheckedUpdateManyWithoutMortgageProfileNestedInput = {
    create?: Prisma.XOR<Prisma.MortgageCalculationCreateWithoutMortgageProfileInput, Prisma.MortgageCalculationUncheckedCreateWithoutMortgageProfileInput> | Prisma.MortgageCalculationCreateWithoutMortgageProfileInput[] | Prisma.MortgageCalculationUncheckedCreateWithoutMortgageProfileInput[];
    connectOrCreate?: Prisma.MortgageCalculationCreateOrConnectWithoutMortgageProfileInput | Prisma.MortgageCalculationCreateOrConnectWithoutMortgageProfileInput[];
    upsert?: Prisma.MortgageCalculationUpsertWithWhereUniqueWithoutMortgageProfileInput | Prisma.MortgageCalculationUpsertWithWhereUniqueWithoutMortgageProfileInput[];
    createMany?: Prisma.MortgageCalculationCreateManyMortgageProfileInputEnvelope;
    set?: Prisma.MortgageCalculationWhereUniqueInput | Prisma.MortgageCalculationWhereUniqueInput[];
    disconnect?: Prisma.MortgageCalculationWhereUniqueInput | Prisma.MortgageCalculationWhereUniqueInput[];
    delete?: Prisma.MortgageCalculationWhereUniqueInput | Prisma.MortgageCalculationWhereUniqueInput[];
    connect?: Prisma.MortgageCalculationWhereUniqueInput | Prisma.MortgageCalculationWhereUniqueInput[];
    update?: Prisma.MortgageCalculationUpdateWithWhereUniqueWithoutMortgageProfileInput | Prisma.MortgageCalculationUpdateWithWhereUniqueWithoutMortgageProfileInput[];
    updateMany?: Prisma.MortgageCalculationUpdateManyWithWhereWithoutMortgageProfileInput | Prisma.MortgageCalculationUpdateManyWithWhereWithoutMortgageProfileInput[];
    deleteMany?: Prisma.MortgageCalculationScalarWhereInput | Prisma.MortgageCalculationScalarWhereInput[];
};
export type MortgageCalculationCreateWithoutMortgageProfileInput = {
    monthlyPayment: number;
    totalPayment: number;
    totalOverpaymentAmount: number;
    possibleTaxDeduction: number;
    savingsDueMotherCapital: number;
    recommendedIncome: number;
    paymentSchedule: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MortgageCalculationUncheckedCreateWithoutMortgageProfileInput = {
    id?: number;
    monthlyPayment: number;
    totalPayment: number;
    totalOverpaymentAmount: number;
    possibleTaxDeduction: number;
    savingsDueMotherCapital: number;
    recommendedIncome: number;
    paymentSchedule: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MortgageCalculationCreateOrConnectWithoutMortgageProfileInput = {
    where: Prisma.MortgageCalculationWhereUniqueInput;
    create: Prisma.XOR<Prisma.MortgageCalculationCreateWithoutMortgageProfileInput, Prisma.MortgageCalculationUncheckedCreateWithoutMortgageProfileInput>;
};
export type MortgageCalculationCreateManyMortgageProfileInputEnvelope = {
    data: Prisma.MortgageCalculationCreateManyMortgageProfileInput | Prisma.MortgageCalculationCreateManyMortgageProfileInput[];
    skipDuplicates?: boolean;
};
export type MortgageCalculationUpsertWithWhereUniqueWithoutMortgageProfileInput = {
    where: Prisma.MortgageCalculationWhereUniqueInput;
    update: Prisma.XOR<Prisma.MortgageCalculationUpdateWithoutMortgageProfileInput, Prisma.MortgageCalculationUncheckedUpdateWithoutMortgageProfileInput>;
    create: Prisma.XOR<Prisma.MortgageCalculationCreateWithoutMortgageProfileInput, Prisma.MortgageCalculationUncheckedCreateWithoutMortgageProfileInput>;
};
export type MortgageCalculationUpdateWithWhereUniqueWithoutMortgageProfileInput = {
    where: Prisma.MortgageCalculationWhereUniqueInput;
    data: Prisma.XOR<Prisma.MortgageCalculationUpdateWithoutMortgageProfileInput, Prisma.MortgageCalculationUncheckedUpdateWithoutMortgageProfileInput>;
};
export type MortgageCalculationUpdateManyWithWhereWithoutMortgageProfileInput = {
    where: Prisma.MortgageCalculationScalarWhereInput;
    data: Prisma.XOR<Prisma.MortgageCalculationUpdateManyMutationInput, Prisma.MortgageCalculationUncheckedUpdateManyWithoutMortgageProfileInput>;
};
export type MortgageCalculationScalarWhereInput = {
    AND?: Prisma.MortgageCalculationScalarWhereInput | Prisma.MortgageCalculationScalarWhereInput[];
    OR?: Prisma.MortgageCalculationScalarWhereInput[];
    NOT?: Prisma.MortgageCalculationScalarWhereInput | Prisma.MortgageCalculationScalarWhereInput[];
    id?: Prisma.IntFilter<"MortgageCalculation"> | number;
    mortgageProfileId?: Prisma.IntFilter<"MortgageCalculation"> | number;
    monthlyPayment?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    totalPayment?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    totalOverpaymentAmount?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    possibleTaxDeduction?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    savingsDueMotherCapital?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    recommendedIncome?: Prisma.FloatFilter<"MortgageCalculation"> | number;
    paymentSchedule?: Prisma.JsonFilter<"MortgageCalculation">;
    createdAt?: Prisma.DateTimeFilter<"MortgageCalculation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MortgageCalculation"> | Date | string;
};
export type MortgageCalculationCreateManyMortgageProfileInput = {
    id?: number;
    monthlyPayment: number;
    totalPayment: number;
    totalOverpaymentAmount: number;
    possibleTaxDeduction: number;
    savingsDueMotherCapital: number;
    recommendedIncome: number;
    paymentSchedule: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MortgageCalculationUpdateWithoutMortgageProfileInput = {
    monthlyPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalOverpaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    possibleTaxDeduction?: Prisma.FloatFieldUpdateOperationsInput | number;
    savingsDueMotherCapital?: Prisma.FloatFieldUpdateOperationsInput | number;
    recommendedIncome?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentSchedule?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MortgageCalculationUncheckedUpdateWithoutMortgageProfileInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monthlyPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalOverpaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    possibleTaxDeduction?: Prisma.FloatFieldUpdateOperationsInput | number;
    savingsDueMotherCapital?: Prisma.FloatFieldUpdateOperationsInput | number;
    recommendedIncome?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentSchedule?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MortgageCalculationUncheckedUpdateManyWithoutMortgageProfileInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monthlyPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPayment?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalOverpaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    possibleTaxDeduction?: Prisma.FloatFieldUpdateOperationsInput | number;
    savingsDueMotherCapital?: Prisma.FloatFieldUpdateOperationsInput | number;
    recommendedIncome?: Prisma.FloatFieldUpdateOperationsInput | number;
    paymentSchedule?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MortgageCalculationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mortgageProfileId?: boolean;
    monthlyPayment?: boolean;
    totalPayment?: boolean;
    totalOverpaymentAmount?: boolean;
    possibleTaxDeduction?: boolean;
    savingsDueMotherCapital?: boolean;
    recommendedIncome?: boolean;
    paymentSchedule?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    MortgageProfile?: boolean | Prisma.MortgageProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mortgageCalculation"]>;
export type MortgageCalculationSelectScalar = {
    id?: boolean;
    mortgageProfileId?: boolean;
    monthlyPayment?: boolean;
    totalPayment?: boolean;
    totalOverpaymentAmount?: boolean;
    possibleTaxDeduction?: boolean;
    savingsDueMotherCapital?: boolean;
    recommendedIncome?: boolean;
    paymentSchedule?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MortgageCalculationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "mortgageProfileId" | "monthlyPayment" | "totalPayment" | "totalOverpaymentAmount" | "possibleTaxDeduction" | "savingsDueMotherCapital" | "recommendedIncome" | "paymentSchedule" | "createdAt" | "updatedAt", ExtArgs["result"]["mortgageCalculation"]>;
export type MortgageCalculationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MortgageProfile?: boolean | Prisma.MortgageProfileDefaultArgs<ExtArgs>;
};
export type $MortgageCalculationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MortgageCalculation";
    objects: {
        MortgageProfile: Prisma.$MortgageProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        mortgageProfileId: number;
        monthlyPayment: number;
        totalPayment: number;
        totalOverpaymentAmount: number;
        possibleTaxDeduction: number;
        savingsDueMotherCapital: number;
        recommendedIncome: number;
        paymentSchedule: runtime.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["mortgageCalculation"]>;
    composites: {};
};
export type MortgageCalculationGetPayload<S extends boolean | null | undefined | MortgageCalculationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MortgageCalculationPayload, S>;
export type MortgageCalculationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MortgageCalculationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MortgageCalculationCountAggregateInputType | true;
};
export interface MortgageCalculationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MortgageCalculation'];
        meta: {
            name: 'MortgageCalculation';
        };
    };
    findUnique<T extends MortgageCalculationFindUniqueArgs>(args: Prisma.SelectSubset<T, MortgageCalculationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MortgageCalculationClient<runtime.Types.Result.GetResult<Prisma.$MortgageCalculationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MortgageCalculationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MortgageCalculationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MortgageCalculationClient<runtime.Types.Result.GetResult<Prisma.$MortgageCalculationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MortgageCalculationFindFirstArgs>(args?: Prisma.SelectSubset<T, MortgageCalculationFindFirstArgs<ExtArgs>>): Prisma.Prisma__MortgageCalculationClient<runtime.Types.Result.GetResult<Prisma.$MortgageCalculationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MortgageCalculationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MortgageCalculationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MortgageCalculationClient<runtime.Types.Result.GetResult<Prisma.$MortgageCalculationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MortgageCalculationFindManyArgs>(args?: Prisma.SelectSubset<T, MortgageCalculationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MortgageCalculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MortgageCalculationCreateArgs>(args: Prisma.SelectSubset<T, MortgageCalculationCreateArgs<ExtArgs>>): Prisma.Prisma__MortgageCalculationClient<runtime.Types.Result.GetResult<Prisma.$MortgageCalculationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MortgageCalculationCreateManyArgs>(args?: Prisma.SelectSubset<T, MortgageCalculationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MortgageCalculationDeleteArgs>(args: Prisma.SelectSubset<T, MortgageCalculationDeleteArgs<ExtArgs>>): Prisma.Prisma__MortgageCalculationClient<runtime.Types.Result.GetResult<Prisma.$MortgageCalculationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MortgageCalculationUpdateArgs>(args: Prisma.SelectSubset<T, MortgageCalculationUpdateArgs<ExtArgs>>): Prisma.Prisma__MortgageCalculationClient<runtime.Types.Result.GetResult<Prisma.$MortgageCalculationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MortgageCalculationDeleteManyArgs>(args?: Prisma.SelectSubset<T, MortgageCalculationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MortgageCalculationUpdateManyArgs>(args: Prisma.SelectSubset<T, MortgageCalculationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MortgageCalculationUpsertArgs>(args: Prisma.SelectSubset<T, MortgageCalculationUpsertArgs<ExtArgs>>): Prisma.Prisma__MortgageCalculationClient<runtime.Types.Result.GetResult<Prisma.$MortgageCalculationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MortgageCalculationCountArgs>(args?: Prisma.Subset<T, MortgageCalculationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MortgageCalculationCountAggregateOutputType> : number>;
    aggregate<T extends MortgageCalculationAggregateArgs>(args: Prisma.Subset<T, MortgageCalculationAggregateArgs>): Prisma.PrismaPromise<GetMortgageCalculationAggregateType<T>>;
    groupBy<T extends MortgageCalculationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MortgageCalculationGroupByArgs['orderBy'];
    } : {
        orderBy?: MortgageCalculationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MortgageCalculationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMortgageCalculationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MortgageCalculationFieldRefs;
}
export interface Prisma__MortgageCalculationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MortgageProfile<T extends Prisma.MortgageProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MortgageProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__MortgageProfileClient<runtime.Types.Result.GetResult<Prisma.$MortgageProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MortgageCalculationFieldRefs {
    readonly id: Prisma.FieldRef<"MortgageCalculation", 'Int'>;
    readonly mortgageProfileId: Prisma.FieldRef<"MortgageCalculation", 'Int'>;
    readonly monthlyPayment: Prisma.FieldRef<"MortgageCalculation", 'Float'>;
    readonly totalPayment: Prisma.FieldRef<"MortgageCalculation", 'Float'>;
    readonly totalOverpaymentAmount: Prisma.FieldRef<"MortgageCalculation", 'Float'>;
    readonly possibleTaxDeduction: Prisma.FieldRef<"MortgageCalculation", 'Float'>;
    readonly savingsDueMotherCapital: Prisma.FieldRef<"MortgageCalculation", 'Float'>;
    readonly recommendedIncome: Prisma.FieldRef<"MortgageCalculation", 'Float'>;
    readonly paymentSchedule: Prisma.FieldRef<"MortgageCalculation", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"MortgageCalculation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MortgageCalculation", 'DateTime'>;
}
export type MortgageCalculationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageCalculationSelect<ExtArgs> | null;
    omit?: Prisma.MortgageCalculationOmit<ExtArgs> | null;
    include?: Prisma.MortgageCalculationInclude<ExtArgs> | null;
    where: Prisma.MortgageCalculationWhereUniqueInput;
};
export type MortgageCalculationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageCalculationSelect<ExtArgs> | null;
    omit?: Prisma.MortgageCalculationOmit<ExtArgs> | null;
    include?: Prisma.MortgageCalculationInclude<ExtArgs> | null;
    where: Prisma.MortgageCalculationWhereUniqueInput;
};
export type MortgageCalculationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageCalculationSelect<ExtArgs> | null;
    omit?: Prisma.MortgageCalculationOmit<ExtArgs> | null;
    include?: Prisma.MortgageCalculationInclude<ExtArgs> | null;
    where?: Prisma.MortgageCalculationWhereInput;
    orderBy?: Prisma.MortgageCalculationOrderByWithRelationInput | Prisma.MortgageCalculationOrderByWithRelationInput[];
    cursor?: Prisma.MortgageCalculationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MortgageCalculationScalarFieldEnum | Prisma.MortgageCalculationScalarFieldEnum[];
};
export type MortgageCalculationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageCalculationSelect<ExtArgs> | null;
    omit?: Prisma.MortgageCalculationOmit<ExtArgs> | null;
    include?: Prisma.MortgageCalculationInclude<ExtArgs> | null;
    where?: Prisma.MortgageCalculationWhereInput;
    orderBy?: Prisma.MortgageCalculationOrderByWithRelationInput | Prisma.MortgageCalculationOrderByWithRelationInput[];
    cursor?: Prisma.MortgageCalculationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MortgageCalculationScalarFieldEnum | Prisma.MortgageCalculationScalarFieldEnum[];
};
export type MortgageCalculationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageCalculationSelect<ExtArgs> | null;
    omit?: Prisma.MortgageCalculationOmit<ExtArgs> | null;
    include?: Prisma.MortgageCalculationInclude<ExtArgs> | null;
    where?: Prisma.MortgageCalculationWhereInput;
    orderBy?: Prisma.MortgageCalculationOrderByWithRelationInput | Prisma.MortgageCalculationOrderByWithRelationInput[];
    cursor?: Prisma.MortgageCalculationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MortgageCalculationScalarFieldEnum | Prisma.MortgageCalculationScalarFieldEnum[];
};
export type MortgageCalculationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageCalculationSelect<ExtArgs> | null;
    omit?: Prisma.MortgageCalculationOmit<ExtArgs> | null;
    include?: Prisma.MortgageCalculationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MortgageCalculationCreateInput, Prisma.MortgageCalculationUncheckedCreateInput>;
};
export type MortgageCalculationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MortgageCalculationCreateManyInput | Prisma.MortgageCalculationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MortgageCalculationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageCalculationSelect<ExtArgs> | null;
    omit?: Prisma.MortgageCalculationOmit<ExtArgs> | null;
    include?: Prisma.MortgageCalculationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MortgageCalculationUpdateInput, Prisma.MortgageCalculationUncheckedUpdateInput>;
    where: Prisma.MortgageCalculationWhereUniqueInput;
};
export type MortgageCalculationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MortgageCalculationUpdateManyMutationInput, Prisma.MortgageCalculationUncheckedUpdateManyInput>;
    where?: Prisma.MortgageCalculationWhereInput;
    limit?: number;
};
export type MortgageCalculationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageCalculationSelect<ExtArgs> | null;
    omit?: Prisma.MortgageCalculationOmit<ExtArgs> | null;
    include?: Prisma.MortgageCalculationInclude<ExtArgs> | null;
    where: Prisma.MortgageCalculationWhereUniqueInput;
    create: Prisma.XOR<Prisma.MortgageCalculationCreateInput, Prisma.MortgageCalculationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MortgageCalculationUpdateInput, Prisma.MortgageCalculationUncheckedUpdateInput>;
};
export type MortgageCalculationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageCalculationSelect<ExtArgs> | null;
    omit?: Prisma.MortgageCalculationOmit<ExtArgs> | null;
    include?: Prisma.MortgageCalculationInclude<ExtArgs> | null;
    where: Prisma.MortgageCalculationWhereUniqueInput;
};
export type MortgageCalculationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MortgageCalculationWhereInput;
    limit?: number;
};
export type MortgageCalculationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageCalculationSelect<ExtArgs> | null;
    omit?: Prisma.MortgageCalculationOmit<ExtArgs> | null;
    include?: Prisma.MortgageCalculationInclude<ExtArgs> | null;
};
export {};
