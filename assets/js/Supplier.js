"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplier = void 0;
const Client_1 = require("./Client");
class Supplier extends Client_1.Client {
    constructor(accountNumber, company, city, nip, comments, street, active, industry) {
        super(company, nip, city, comments, street, active, industry);
        this.accountNumber = accountNumber;
        this.invoices = [];
    }
}
exports.Supplier = Supplier;
