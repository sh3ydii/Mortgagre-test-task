import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type MortgageProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$MortgageProfilePayload>;
export type AggregateMortgageProfile = {
    _count: MortgageProfileCountAggregateOutputType | null;
    _avg: MortgageProfileAvgAggregateOutputType | null;
    _sum: MortgageProfileSumAggregateOutputType | null;
    _min: MortgageProfileMinAggregateOutputType | null;
    _max: MortgageProfileMaxAggregateOutputType | null;
};
export type MortgageProfileAvgAggregateOutputType = {
    id: number | null;
    propertyPrice: number | null;
    downPaymentAmount: number | null;
    matCapitalAmount: number | null;
    loanTermYears: number | null;
    interestRate: number | null;
    loanAmount: number | null;
};
export type MortgageProfileSumAggregateOutputType = {
    id: number | null;
    propertyPrice: number | null;
    downPaymentAmount: number | null;
    matCapitalAmount: number | null;
    loanTermYears: number | null;
    interestRate: number | null;
    loanAmount: number | null;
};
export type MortgageProfileMinAggregateOutputType = {
    id: number | null;
    propertyPrice: number | null;
    downPaymentAmount: number | null;
    matCapitalAmount: number | null;
    loanTermYears: number | null;
    interestRate: number | null;
    loanAmount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MortgageProfileMaxAggregateOutputType = {
    id: number | null;
    propertyPrice: number | null;
    downPaymentAmount: number | null;
    matCapitalAmount: number | null;
    loanTermYears: number | null;
    interestRate: number | null;
    loanAmount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MortgageProfileCountAggregateOutputType = {
    id: number;
    propertyPrice: number;
    downPaymentAmount: number;
    matCapitalAmount: number;
    loanTermYears: number;
    interestRate: number;
    loanAmount: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MortgageProfileAvgAggregateInputType = {
    id?: true;
    propertyPrice?: true;
    downPaymentAmount?: true;
    matCapitalAmount?: true;
    loanTermYears?: true;
    interestRate?: true;
    loanAmount?: true;
};
export type MortgageProfileSumAggregateInputType = {
    id?: true;
    propertyPrice?: true;
    downPaymentAmount?: true;
    matCapitalAmount?: true;
    loanTermYears?: true;
    interestRate?: true;
    loanAmount?: true;
};
export type MortgageProfileMinAggregateInputType = {
    id?: true;
    propertyPrice?: true;
    downPaymentAmount?: true;
    matCapitalAmount?: true;
    loanTermYears?: true;
    interestRate?: true;
    loanAmount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MortgageProfileMaxAggregateInputType = {
    id?: true;
    propertyPrice?: true;
    downPaymentAmount?: true;
    matCapitalAmount?: true;
    loanTermYears?: true;
    interestRate?: true;
    loanAmount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MortgageProfileCountAggregateInputType = {
    id?: true;
    propertyPrice?: true;
    downPaymentAmount?: true;
    matCapitalAmount?: true;
    loanTermYears?: true;
    interestRate?: true;
    loanAmount?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MortgageProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MortgageProfileWhereInput;
    orderBy?: Prisma.MortgageProfileOrderByWithRelationInput | Prisma.MortgageProfileOrderByWithRelationInput[];
    cursor?: Prisma.MortgageProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MortgageProfileCountAggregateInputType;
    _avg?: MortgageProfileAvgAggregateInputType;
    _sum?: MortgageProfileSumAggregateInputType;
    _min?: MortgageProfileMinAggregateInputType;
    _max?: MortgageProfileMaxAggregateInputType;
};
export type GetMortgageProfileAggregateType<T extends MortgageProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateMortgageProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMortgageProfile[P]> : Prisma.GetScalarType<T[P], AggregateMortgageProfile[P]>;
};
export type MortgageProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MortgageProfileWhereInput;
    orderBy?: Prisma.MortgageProfileOrderByWithAggregationInput | Prisma.MortgageProfileOrderByWithAggregationInput[];
    by: Prisma.MortgageProfileScalarFieldEnum[] | Prisma.MortgageProfileScalarFieldEnum;
    having?: Prisma.MortgageProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MortgageProfileCountAggregateInputType | true;
    _avg?: MortgageProfileAvgAggregateInputType;
    _sum?: MortgageProfileSumAggregateInputType;
    _min?: MortgageProfileMinAggregateInputType;
    _max?: MortgageProfileMaxAggregateInputType;
};
export type MortgageProfileGroupByOutputType = {
    id: number;
    propertyPrice: number;
    downPaymentAmount: number;
    matCapitalAmount: number | null;
    loanTermYears: number;
    interestRate: number;
    loanAmount: number;
    createdAt: Date;
    updatedAt: Date;
    _count: MortgageProfileCountAggregateOutputType | null;
    _avg: MortgageProfileAvgAggregateOutputType | null;
    _sum: MortgageProfileSumAggregateOutputType | null;
    _min: MortgageProfileMinAggregateOutputType | null;
    _max: MortgageProfileMaxAggregateOutputType | null;
};
type GetMortgageProfileGroupByPayload<T extends MortgageProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MortgageProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MortgageProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MortgageProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MortgageProfileGroupByOutputType[P]>;
}>>;
export type MortgageProfileWhereInput = {
    AND?: Prisma.MortgageProfileWhereInput | Prisma.MortgageProfileWhereInput[];
    OR?: Prisma.MortgageProfileWhereInput[];
    NOT?: Prisma.MortgageProfileWhereInput | Prisma.MortgageProfileWhereInput[];
    id?: Prisma.IntFilter<"MortgageProfile"> | number;
    propertyPrice?: Prisma.FloatFilter<"MortgageProfile"> | number;
    downPaymentAmount?: Prisma.FloatFilter<"MortgageProfile"> | number;
    matCapitalAmount?: Prisma.FloatNullableFilter<"MortgageProfile"> | number | null;
    loanTermYears?: Prisma.IntFilter<"MortgageProfile"> | number;
    interestRate?: Prisma.FloatFilter<"MortgageProfile"> | number;
    loanAmount?: Prisma.FloatFilter<"MortgageProfile"> | number;
    createdAt?: Prisma.DateTimeFilter<"MortgageProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MortgageProfile"> | Date | string;
    MortgageCalculations?: Prisma.MortgageCalculationListRelationFilter;
};
export type MortgageProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    propertyPrice?: Prisma.SortOrder;
    downPaymentAmount?: Prisma.SortOrder;
    matCapitalAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    loanTermYears?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    loanAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    MortgageCalculations?: Prisma.MortgageCalculationOrderByRelationAggregateInput;
};
export type MortgageProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MortgageProfileWhereInput | Prisma.MortgageProfileWhereInput[];
    OR?: Prisma.MortgageProfileWhereInput[];
    NOT?: Prisma.MortgageProfileWhereInput | Prisma.MortgageProfileWhereInput[];
    propertyPrice?: Prisma.FloatFilter<"MortgageProfile"> | number;
    downPaymentAmount?: Prisma.FloatFilter<"MortgageProfile"> | number;
    matCapitalAmount?: Prisma.FloatNullableFilter<"MortgageProfile"> | number | null;
    loanTermYears?: Prisma.IntFilter<"MortgageProfile"> | number;
    interestRate?: Prisma.FloatFilter<"MortgageProfile"> | number;
    loanAmount?: Prisma.FloatFilter<"MortgageProfile"> | number;
    createdAt?: Prisma.DateTimeFilter<"MortgageProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MortgageProfile"> | Date | string;
    MortgageCalculations?: Prisma.MortgageCalculationListRelationFilter;
}, "id">;
export type MortgageProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    propertyPrice?: Prisma.SortOrder;
    downPaymentAmount?: Prisma.SortOrder;
    matCapitalAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    loanTermYears?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    loanAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MortgageProfileCountOrderByAggregateInput;
    _avg?: Prisma.MortgageProfileAvgOrderByAggregateInput;
    _max?: Prisma.MortgageProfileMaxOrderByAggregateInput;
    _min?: Prisma.MortgageProfileMinOrderByAggregateInput;
    _sum?: Prisma.MortgageProfileSumOrderByAggregateInput;
};
export type MortgageProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.MortgageProfileScalarWhereWithAggregatesInput | Prisma.MortgageProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.MortgageProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MortgageProfileScalarWhereWithAggregatesInput | Prisma.MortgageProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MortgageProfile"> | number;
    propertyPrice?: Prisma.FloatWithAggregatesFilter<"MortgageProfile"> | number;
    downPaymentAmount?: Prisma.FloatWithAggregatesFilter<"MortgageProfile"> | number;
    matCapitalAmount?: Prisma.FloatNullableWithAggregatesFilter<"MortgageProfile"> | number | null;
    loanTermYears?: Prisma.IntWithAggregatesFilter<"MortgageProfile"> | number;
    interestRate?: Prisma.FloatWithAggregatesFilter<"MortgageProfile"> | number;
    loanAmount?: Prisma.FloatWithAggregatesFilter<"MortgageProfile"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MortgageProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MortgageProfile"> | Date | string;
};
export type MortgageProfileCreateInput = {
    propertyPrice: number;
    downPaymentAmount: number;
    matCapitalAmount?: number | null;
    loanTermYears: number;
    interestRate: number;
    loanAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    MortgageCalculations?: Prisma.MortgageCalculationCreateNestedManyWithoutMortgageProfileInput;
};
export type MortgageProfileUncheckedCreateInput = {
    id?: number;
    propertyPrice: number;
    downPaymentAmount: number;
    matCapitalAmount?: number | null;
    loanTermYears: number;
    interestRate: number;
    loanAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    MortgageCalculations?: Prisma.MortgageCalculationUncheckedCreateNestedManyWithoutMortgageProfileInput;
};
export type MortgageProfileUpdateInput = {
    propertyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    downPaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    matCapitalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    loanTermYears?: Prisma.IntFieldUpdateOperationsInput | number;
    interestRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    loanAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MortgageCalculations?: Prisma.MortgageCalculationUpdateManyWithoutMortgageProfileNestedInput;
};
export type MortgageProfileUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    propertyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    downPaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    matCapitalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    loanTermYears?: Prisma.IntFieldUpdateOperationsInput | number;
    interestRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    loanAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MortgageCalculations?: Prisma.MortgageCalculationUncheckedUpdateManyWithoutMortgageProfileNestedInput;
};
export type MortgageProfileCreateManyInput = {
    id?: number;
    propertyPrice: number;
    downPaymentAmount: number;
    matCapitalAmount?: number | null;
    loanTermYears: number;
    interestRate: number;
    loanAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MortgageProfileUpdateManyMutationInput = {
    propertyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    downPaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    matCapitalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    loanTermYears?: Prisma.IntFieldUpdateOperationsInput | number;
    interestRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    loanAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MortgageProfileUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    propertyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    downPaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    matCapitalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    loanTermYears?: Prisma.IntFieldUpdateOperationsInput | number;
    interestRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    loanAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MortgageProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyPrice?: Prisma.SortOrder;
    downPaymentAmount?: Prisma.SortOrder;
    matCapitalAmount?: Prisma.SortOrder;
    loanTermYears?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    loanAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MortgageProfileAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyPrice?: Prisma.SortOrder;
    downPaymentAmount?: Prisma.SortOrder;
    matCapitalAmount?: Prisma.SortOrder;
    loanTermYears?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    loanAmount?: Prisma.SortOrder;
};
export type MortgageProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyPrice?: Prisma.SortOrder;
    downPaymentAmount?: Prisma.SortOrder;
    matCapitalAmount?: Prisma.SortOrder;
    loanTermYears?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    loanAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MortgageProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyPrice?: Prisma.SortOrder;
    downPaymentAmount?: Prisma.SortOrder;
    matCapitalAmount?: Prisma.SortOrder;
    loanTermYears?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    loanAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MortgageProfileSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyPrice?: Prisma.SortOrder;
    downPaymentAmount?: Prisma.SortOrder;
    matCapitalAmount?: Prisma.SortOrder;
    loanTermYears?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    loanAmount?: Prisma.SortOrder;
};
export type MortgageProfileScalarRelationFilter = {
    is?: Prisma.MortgageProfileWhereInput;
    isNot?: Prisma.MortgageProfileWhereInput;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type MortgageProfileCreateNestedOneWithoutMortgageCalculationsInput = {
    create?: Prisma.XOR<Prisma.MortgageProfileCreateWithoutMortgageCalculationsInput, Prisma.MortgageProfileUncheckedCreateWithoutMortgageCalculationsInput>;
    connectOrCreate?: Prisma.MortgageProfileCreateOrConnectWithoutMortgageCalculationsInput;
    connect?: Prisma.MortgageProfileWhereUniqueInput;
};
export type MortgageProfileUpdateOneRequiredWithoutMortgageCalculationsNestedInput = {
    create?: Prisma.XOR<Prisma.MortgageProfileCreateWithoutMortgageCalculationsInput, Prisma.MortgageProfileUncheckedCreateWithoutMortgageCalculationsInput>;
    connectOrCreate?: Prisma.MortgageProfileCreateOrConnectWithoutMortgageCalculationsInput;
    upsert?: Prisma.MortgageProfileUpsertWithoutMortgageCalculationsInput;
    connect?: Prisma.MortgageProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MortgageProfileUpdateToOneWithWhereWithoutMortgageCalculationsInput, Prisma.MortgageProfileUpdateWithoutMortgageCalculationsInput>, Prisma.MortgageProfileUncheckedUpdateWithoutMortgageCalculationsInput>;
};
export type MortgageProfileCreateWithoutMortgageCalculationsInput = {
    propertyPrice: number;
    downPaymentAmount: number;
    matCapitalAmount?: number | null;
    loanTermYears: number;
    interestRate: number;
    loanAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MortgageProfileUncheckedCreateWithoutMortgageCalculationsInput = {
    id?: number;
    propertyPrice: number;
    downPaymentAmount: number;
    matCapitalAmount?: number | null;
    loanTermYears: number;
    interestRate: number;
    loanAmount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MortgageProfileCreateOrConnectWithoutMortgageCalculationsInput = {
    where: Prisma.MortgageProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.MortgageProfileCreateWithoutMortgageCalculationsInput, Prisma.MortgageProfileUncheckedCreateWithoutMortgageCalculationsInput>;
};
export type MortgageProfileUpsertWithoutMortgageCalculationsInput = {
    update: Prisma.XOR<Prisma.MortgageProfileUpdateWithoutMortgageCalculationsInput, Prisma.MortgageProfileUncheckedUpdateWithoutMortgageCalculationsInput>;
    create: Prisma.XOR<Prisma.MortgageProfileCreateWithoutMortgageCalculationsInput, Prisma.MortgageProfileUncheckedCreateWithoutMortgageCalculationsInput>;
    where?: Prisma.MortgageProfileWhereInput;
};
export type MortgageProfileUpdateToOneWithWhereWithoutMortgageCalculationsInput = {
    where?: Prisma.MortgageProfileWhereInput;
    data: Prisma.XOR<Prisma.MortgageProfileUpdateWithoutMortgageCalculationsInput, Prisma.MortgageProfileUncheckedUpdateWithoutMortgageCalculationsInput>;
};
export type MortgageProfileUpdateWithoutMortgageCalculationsInput = {
    propertyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    downPaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    matCapitalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    loanTermYears?: Prisma.IntFieldUpdateOperationsInput | number;
    interestRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    loanAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MortgageProfileUncheckedUpdateWithoutMortgageCalculationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    propertyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    downPaymentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    matCapitalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    loanTermYears?: Prisma.IntFieldUpdateOperationsInput | number;
    interestRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    loanAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MortgageProfileCountOutputType = {
    MortgageCalculations: number;
};
export type MortgageProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MortgageCalculations?: boolean | MortgageProfileCountOutputTypeCountMortgageCalculationsArgs;
};
export type MortgageProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageProfileCountOutputTypeSelect<ExtArgs> | null;
};
export type MortgageProfileCountOutputTypeCountMortgageCalculationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MortgageCalculationWhereInput;
};
export type MortgageProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    propertyPrice?: boolean;
    downPaymentAmount?: boolean;
    matCapitalAmount?: boolean;
    loanTermYears?: boolean;
    interestRate?: boolean;
    loanAmount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    MortgageCalculations?: boolean | Prisma.MortgageProfile$MortgageCalculationsArgs<ExtArgs>;
    _count?: boolean | Prisma.MortgageProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mortgageProfile"]>;
export type MortgageProfileSelectScalar = {
    id?: boolean;
    propertyPrice?: boolean;
    downPaymentAmount?: boolean;
    matCapitalAmount?: boolean;
    loanTermYears?: boolean;
    interestRate?: boolean;
    loanAmount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MortgageProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "propertyPrice" | "downPaymentAmount" | "matCapitalAmount" | "loanTermYears" | "interestRate" | "loanAmount" | "createdAt" | "updatedAt", ExtArgs["result"]["mortgageProfile"]>;
export type MortgageProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MortgageCalculations?: boolean | Prisma.MortgageProfile$MortgageCalculationsArgs<ExtArgs>;
    _count?: boolean | Prisma.MortgageProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MortgageProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MortgageProfile";
    objects: {
        MortgageCalculations: Prisma.$MortgageCalculationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        propertyPrice: number;
        downPaymentAmount: number;
        matCapitalAmount: number | null;
        loanTermYears: number;
        interestRate: number;
        loanAmount: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["mortgageProfile"]>;
    composites: {};
};
export type MortgageProfileGetPayload<S extends boolean | null | undefined | MortgageProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MortgageProfilePayload, S>;
export type MortgageProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MortgageProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MortgageProfileCountAggregateInputType | true;
};
export interface MortgageProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MortgageProfile'];
        meta: {
            name: 'MortgageProfile';
        };
    };
    findUnique<T extends MortgageProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, MortgageProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MortgageProfileClient<runtime.Types.Result.GetResult<Prisma.$MortgageProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MortgageProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MortgageProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MortgageProfileClient<runtime.Types.Result.GetResult<Prisma.$MortgageProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MortgageProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, MortgageProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__MortgageProfileClient<runtime.Types.Result.GetResult<Prisma.$MortgageProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MortgageProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MortgageProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MortgageProfileClient<runtime.Types.Result.GetResult<Prisma.$MortgageProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MortgageProfileFindManyArgs>(args?: Prisma.SelectSubset<T, MortgageProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MortgageProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MortgageProfileCreateArgs>(args: Prisma.SelectSubset<T, MortgageProfileCreateArgs<ExtArgs>>): Prisma.Prisma__MortgageProfileClient<runtime.Types.Result.GetResult<Prisma.$MortgageProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MortgageProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, MortgageProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MortgageProfileDeleteArgs>(args: Prisma.SelectSubset<T, MortgageProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__MortgageProfileClient<runtime.Types.Result.GetResult<Prisma.$MortgageProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MortgageProfileUpdateArgs>(args: Prisma.SelectSubset<T, MortgageProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__MortgageProfileClient<runtime.Types.Result.GetResult<Prisma.$MortgageProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MortgageProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, MortgageProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MortgageProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, MortgageProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MortgageProfileUpsertArgs>(args: Prisma.SelectSubset<T, MortgageProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__MortgageProfileClient<runtime.Types.Result.GetResult<Prisma.$MortgageProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MortgageProfileCountArgs>(args?: Prisma.Subset<T, MortgageProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MortgageProfileCountAggregateOutputType> : number>;
    aggregate<T extends MortgageProfileAggregateArgs>(args: Prisma.Subset<T, MortgageProfileAggregateArgs>): Prisma.PrismaPromise<GetMortgageProfileAggregateType<T>>;
    groupBy<T extends MortgageProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MortgageProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: MortgageProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MortgageProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMortgageProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MortgageProfileFieldRefs;
}
export interface Prisma__MortgageProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MortgageCalculations<T extends Prisma.MortgageProfile$MortgageCalculationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MortgageProfile$MortgageCalculationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MortgageCalculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MortgageProfileFieldRefs {
    readonly id: Prisma.FieldRef<"MortgageProfile", 'Int'>;
    readonly propertyPrice: Prisma.FieldRef<"MortgageProfile", 'Float'>;
    readonly downPaymentAmount: Prisma.FieldRef<"MortgageProfile", 'Float'>;
    readonly matCapitalAmount: Prisma.FieldRef<"MortgageProfile", 'Float'>;
    readonly loanTermYears: Prisma.FieldRef<"MortgageProfile", 'Int'>;
    readonly interestRate: Prisma.FieldRef<"MortgageProfile", 'Float'>;
    readonly loanAmount: Prisma.FieldRef<"MortgageProfile", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"MortgageProfile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MortgageProfile", 'DateTime'>;
}
export type MortgageProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageProfileSelect<ExtArgs> | null;
    omit?: Prisma.MortgageProfileOmit<ExtArgs> | null;
    include?: Prisma.MortgageProfileInclude<ExtArgs> | null;
    where: Prisma.MortgageProfileWhereUniqueInput;
};
export type MortgageProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageProfileSelect<ExtArgs> | null;
    omit?: Prisma.MortgageProfileOmit<ExtArgs> | null;
    include?: Prisma.MortgageProfileInclude<ExtArgs> | null;
    where: Prisma.MortgageProfileWhereUniqueInput;
};
export type MortgageProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageProfileSelect<ExtArgs> | null;
    omit?: Prisma.MortgageProfileOmit<ExtArgs> | null;
    include?: Prisma.MortgageProfileInclude<ExtArgs> | null;
    where?: Prisma.MortgageProfileWhereInput;
    orderBy?: Prisma.MortgageProfileOrderByWithRelationInput | Prisma.MortgageProfileOrderByWithRelationInput[];
    cursor?: Prisma.MortgageProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MortgageProfileScalarFieldEnum | Prisma.MortgageProfileScalarFieldEnum[];
};
export type MortgageProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageProfileSelect<ExtArgs> | null;
    omit?: Prisma.MortgageProfileOmit<ExtArgs> | null;
    include?: Prisma.MortgageProfileInclude<ExtArgs> | null;
    where?: Prisma.MortgageProfileWhereInput;
    orderBy?: Prisma.MortgageProfileOrderByWithRelationInput | Prisma.MortgageProfileOrderByWithRelationInput[];
    cursor?: Prisma.MortgageProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MortgageProfileScalarFieldEnum | Prisma.MortgageProfileScalarFieldEnum[];
};
export type MortgageProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageProfileSelect<ExtArgs> | null;
    omit?: Prisma.MortgageProfileOmit<ExtArgs> | null;
    include?: Prisma.MortgageProfileInclude<ExtArgs> | null;
    where?: Prisma.MortgageProfileWhereInput;
    orderBy?: Prisma.MortgageProfileOrderByWithRelationInput | Prisma.MortgageProfileOrderByWithRelationInput[];
    cursor?: Prisma.MortgageProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MortgageProfileScalarFieldEnum | Prisma.MortgageProfileScalarFieldEnum[];
};
export type MortgageProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageProfileSelect<ExtArgs> | null;
    omit?: Prisma.MortgageProfileOmit<ExtArgs> | null;
    include?: Prisma.MortgageProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MortgageProfileCreateInput, Prisma.MortgageProfileUncheckedCreateInput>;
};
export type MortgageProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MortgageProfileCreateManyInput | Prisma.MortgageProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MortgageProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageProfileSelect<ExtArgs> | null;
    omit?: Prisma.MortgageProfileOmit<ExtArgs> | null;
    include?: Prisma.MortgageProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MortgageProfileUpdateInput, Prisma.MortgageProfileUncheckedUpdateInput>;
    where: Prisma.MortgageProfileWhereUniqueInput;
};
export type MortgageProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MortgageProfileUpdateManyMutationInput, Prisma.MortgageProfileUncheckedUpdateManyInput>;
    where?: Prisma.MortgageProfileWhereInput;
    limit?: number;
};
export type MortgageProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageProfileSelect<ExtArgs> | null;
    omit?: Prisma.MortgageProfileOmit<ExtArgs> | null;
    include?: Prisma.MortgageProfileInclude<ExtArgs> | null;
    where: Prisma.MortgageProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.MortgageProfileCreateInput, Prisma.MortgageProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MortgageProfileUpdateInput, Prisma.MortgageProfileUncheckedUpdateInput>;
};
export type MortgageProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageProfileSelect<ExtArgs> | null;
    omit?: Prisma.MortgageProfileOmit<ExtArgs> | null;
    include?: Prisma.MortgageProfileInclude<ExtArgs> | null;
    where: Prisma.MortgageProfileWhereUniqueInput;
};
export type MortgageProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MortgageProfileWhereInput;
    limit?: number;
};
export type MortgageProfile$MortgageCalculationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MortgageProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MortgageProfileSelect<ExtArgs> | null;
    omit?: Prisma.MortgageProfileOmit<ExtArgs> | null;
    include?: Prisma.MortgageProfileInclude<ExtArgs> | null;
};
export {};
