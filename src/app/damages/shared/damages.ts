export class AddDamages
    {
        UserID!: number;
        CarID!: any;
        CarBrand!: string;
        CarYear!: number;
        DateReported!: Date;
    }

    export class AddTypeOfDamage
    {
        UserID!: number;
        CarID!: any;
        Type!: string;
        Description!: string;
        Severity!: 'low'| 'medium'| 'high';
    }



export class CalculateDamages 
     {  CarID!: any;
        laborCost!: number;
        partsCost!: number;
        totalCost!: number;
        insuranceCoverage!: number;
        userPayable!: number;
     }