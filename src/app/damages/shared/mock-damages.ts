import { AddDamages } from "./damages";
export const ADDDAMAGES : AddDamages[]=[
    {
        UserID: 12345,
        CarID: 'A12B',
        CarBrand: 'audi',
        CarYear: 2020,
        DateReported: new Date(),
       
    }
]

import { AddTypeOfDamage } from "./damages";
export const ADDTYPEOFDAMAGE : AddTypeOfDamage[]=[
    {
        UserID: 12345,
        CarID: 'A12B',
        Type: 'Collision',
        Description: 'blablabalbalablablab',
        Severity: 'medium'
    }
]

import { CalculateDamages } from "./damages";
export const CALCULATEDAMAGES : CalculateDamages[]=[
    {
        CarID: 'A12B',
        laborCost: 1500,
        partsCost: 1300,
        totalCost: 2800,
        insuranceCoverage: 2000,
        userPayable: 800
    }
]