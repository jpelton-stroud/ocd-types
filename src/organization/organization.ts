import {
    CommonMetadata,
    ContactDetail,
    Identifier,
    Link,
    OtherName,
    Post,
} from "../shared/shared";

type Classification =
    | "legislature"
    | "executive"
    | "upper"
    | "lower"
    | "party"
    | "committee"
    | "commission"
    | "corporation"
    | "agency"
    | "department";

interface IOrganization extends CommonMetadata {
    name: string;
    classification?: null | Classification;
    parent_id?: null | string;
    contact_details?: ContactDetail[];
    links?: Link[];
    posts?: Post[];
    image?: null | string;
    founding_date?: null | string;
    dissolution_date?: null | string;
    identifiers?: Identifier[];
    other_names?: OtherName[];
}

export class Organization implements IOrganization {
    name: string;
    sources: Link[];
    classification: null | Classification;
    parent_id: null | string;
    contact_details: ContactDetail[];
    links: Link[];
    posts: Post[];
    image: null | string;
    founding_date: null | string;
    dissolution_date: null | string;
    identifiers: Identifier[];
    other_names: OtherName[];
    updated_at: null | string;
    created_at: null | string;

    constructor(d: IOrganization) {
        this.name = d.name;
        if (d.sources.length > 0) this.sources = d.sources;
        else throw new Error("Must include at least one source URL");

        this.classification = d.classification ? d.classification : null;
        this.parent_id = d.parent_id ? d.parent_id : null;
        this.contact_details = d.contact_details ? d.contact_details : [];
        this.links = d.links ? d.links : [];
        this.posts = d.posts ? d.posts : [];
        this.image = d.image ? d.image : null;
        this.founding_date = d.founding_date ? d.founding_date : null;
        this.dissolution_date = d.dissolution_date ? d.dissolution_date : null;
        this.identifiers = d.identifiers ? d.identifiers : [];
        this.other_names = d.other_names ? d.other_names : [];
        this.updated_at = d.updated_at ? d.updated_at : null;
        this.created_at = d.created_at ? d.created_at : null;
    }
}
