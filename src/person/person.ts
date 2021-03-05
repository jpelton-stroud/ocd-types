import { Link, Identifier, CommonMetadata } from "../shared/shared";

interface IPerson extends CommonMetadata {
    name: string;

    image?: null | string;
    contact_details?: ContactDetail[];
    links?: Link[];
    sort_name?: null | string;
    family_name?: null | string;
    given_name?: null | string;
    gender?: null | string;
    summary?: null | string;
    national_identity?: null | string;
    biography?: null | string;
    birth_date?: null | string;
    death_date?: null | string;
    identifiers?: Identifier[];
    other_names?: OtherName[];
}

type ContactDetail = {
    name: string;
    note: null | string;
    start_date: null | string;
    end_date: null | string;
};

type OtherName = {
    name: string;
    note: null | string;
    start_date: null | string;
    end_date: null | string;
};

export class Person {
    name: string;
    sources: Link[];
    image: null | string;
    contact_details: ContactDetail[];
    links: Link[];
    sort_name: null | string;
    family_name: null | string;
    given_name: null | string;
    gender: null | string;
    summary: null | string;
    national_identity: null | string;
    biography: null | string;
    birth_date: null | string;
    death_date: null | string;
    identifiers: Identifier[];
    other_names: OtherName[];
    updated_at: null | string;
    created_at: null | string;

    constructor(d: IPerson) {
        this.name = d.name;
        if (d.sources.length > 0) this.sources = d.sources;
        else throw new Error("Must include at least one source URL");

        this.image = d.image ? d.image : null;
        this.contact_details = d.contact_details ? d.contact_details : [];
        this.links = d.links ? d.links : [];
        this.sort_name = d.sort_name ? d.sort_name : null;
        this.family_name = d.family_name ? d.family_name : null;
        this.given_name = d.given_name ? d.given_name : null;
        this.gender = d.gender ? d.gender : null;
        this.summary = d.summary ? d.summary : null;
        this.national_identity = d.national_identity
            ? d.national_identity
            : null;
        this.biography = d.biography ? d.biography : null;
        this.birth_date = d.birth_date ? d.birth_date : null;
        this.death_date = d.death_date ? d.death_date : null;
        this.identifiers = d.identifiers ? d.identifiers : [];
        this.other_names = d.other_names ? d.other_names : [];
        this.updated_at = d.updated_at ? d.updated_at : null;
        this.created_at = d.created_at ? d.created_at : null;
    }
}
