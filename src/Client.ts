export class Client {
  constructor(_company, _nip, _city, _comments, _street, _active, _industry) {
    this.company = _company;
    this.nip = _nip;
    this.comments = _comments;
    this.street = _street;
    this.industry = _industry;
    this.active = _active;
    this.city = _city;
  }
  company: string;
  city: string;
  nip: string;
  comments: string;
  street: string;
  active: string;
  industry: string ;

  getData()
  {
    return `${this.company} (${this.nip})`
  }

  getAddress()
  {
    return `${this.city} ${this.street} ${this.industry}`
  }

}

