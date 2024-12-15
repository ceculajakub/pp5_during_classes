import { Tax } from "./Tax";
import { Unit } from "./Unit";

export class Invoice{
    name: string;
    quantity: number;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}


