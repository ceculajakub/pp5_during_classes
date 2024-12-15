"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(_company, _nip, _city, _comments, _street, _active, _industry) {
        this.company = _company;
        this.nip = _nip;
        this.comments = _comments;
        this.street = _street;
        this.industry = _industry;
        this.active = _active;
        this.city = _city;
    }
    getData() {
        return `${this.company} (${this.nip})`;
    }
    getAddress() {
        return `${this.city} ${this.street} ${this.industry}`;
    }
}
exports.Client = Client;
