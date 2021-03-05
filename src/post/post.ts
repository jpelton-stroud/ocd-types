import { ContactDetail, Link } from "../shared/shared";

interface IPost {
    label: string;
    id?: null | string;
    role?: null | string;
    start_date?: null | string;
    end_date?: null | string;
    contact_details?: ContactDetail[];
    links?: Link[];
}

export class Post implements IPost {
    label: string;
    id: null | string;
    role: null | string;
    start_date: null | string;
    end_date: null | string;
    contact_details: ContactDetail[];
    links: Link[];

    constructor(d: IPost) {
        this.label = d.label;
        this.id = d.id ? d.id : null;
        this.role = d.role ? d.role : null;
        this.start_date = d.start_date ? d.start_date : null;
        this.end_date = d.end_date ? d.end_date : null;
        this.contact_details = d.contact_details ? d.contact_details : [];
        this.links = d.links ? d.links : [];
    }
}
