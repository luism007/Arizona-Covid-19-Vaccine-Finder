import { VaccineAppointment } from './VaccineAppointment';

export class VaccineSite {
    id: number;
    name: string;
    address: string;
    addressUrl: string;
    appointments: VaccineAppointment[];
    // tslint:disable-next-line:variable-name
    registration_url: string;
    lastCheck: string;
    county: string;

    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    // tslint:disable-next-line:max-line-length
    constructor(id: number, name: string, address: string, addressUrl: string, appointments: VaccineAppointment[] , registration_url: string, lastCheck: string, county: string){
        this.id = id;
        this.name = name;
        this.address = address;
        this.addressUrl = addressUrl;
        this.appointments = appointments;
        this.registration_url = registration_url;
        this.lastCheck = lastCheck;
        this.county = county;
    }
}

