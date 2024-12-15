import { Client } from "./Client";

export class Supplier extends Client {
  constructor(
    accountNumber,
    company,
    city,
    nip,
    comments,
    street,
    active,
    industry
  ) {
    super(company, nip, city, comments, street, active, industry);
    this.accountNumber = accountNumber;
    this.invoices = [];
  }
  accountNumber: string;
  invoices: string[];
}
