// https://opencivicdata.readthedocs.io/en/latest/data/bill.html

import { CommonMetadata, Link } from "../shared/shared";

type BillSummary = {
    note: string | null;
    text: string;
};

type OtherTitle = {
    note: string | null;
    title: string;
};

type OtherName = {
    note: string | null;
    name: string;
};

type RelatedBill = {
    session: string;
    name: string;
    relation_type: "conpanion" | "prior-session" | "replaced_by" | "replaces";
};

type Chamber = "upper" | "lower" | "joint";

interface IBill extends CommonMetadata {
    session: string;
    name: string;
    title: string;

    organization?: string | null;
    organization_id?: string | null;
    chamber?: Chamber | null;
    type?: string[];
    subject?: string[];
    summaries?: BillSummary[];

    other_titles?: OtherTitle[];
    other_names?: OtherName[];
    related_bills?: RelatedBill[];

    sponsors?: BillSponsor[];
    actions?: BillAction[];

    documents?: BillVersion[];
    versions?: BillVersion[];
}

export class Bill implements IBill {
    readonly _type: string = "bill";

    name: string;
    session: string;
    title: string;
    sources: Link[];

    organization: string | null;
    organization_id: string | null;
    chamber: Chamber | null;
    type: string[];
    subject: string[];
    summaries: BillSummary[];

    updated_at?: string;
    created_at?: string;

    other_titles: OtherTitle[];
    other_names: OtherName[];
    related_bills: RelatedBill[];

    sponsors: BillSponsor[];
    actions: BillAction[];

    documents: BillVersion[];
    versions: BillVersion[];

    constructor(d: IBill) {
        this.name = d.name;
        this.session = d.session;
        this.title = d.title;
        if (d.sources.length > 0) this.sources = d.sources;
        else throw new Error("Must include at least one source URL");

        this.organization = d.organization ? d.organization : null;
        this.organization_id = d.organization_id ? d.organization_id : null;
        this.chamber = d.chamber ? d.chamber : null;
        this.type = d.type ? d.type : [];
        this.subject = d.subject ? d.subject : [];
        this.summaries = d.summaries ? d.summaries : [];
        this.other_titles = d.other_titles ? d.other_titles : [];
        this.other_names = d.other_names ? d.other_names : [];
        this.related_bills = d.related_bills ? d.related_bills : [];
        this.sponsors = d.sponsors ? d.sponsors : [];
        this.actions = d.actions ? d.actions : [];
        this.documents = d.documents ? d.documents : [];
        this.versions = d.versions ? d.versions : [];

        this.updated_at = d.updated_at ? d.updated_at : null;
        this.created_at = d.created_at ? d.created_at : null;
    }
}

class BillSponsor {
    _type: "organization" | "person" | null;
    name: string;
    sponsorship_type: string;
    primary: boolean;
    chamber: Chamber | null = null;
}

class BillAction {
    date: string;
    type: string[];
    description: string;
    actor: string | null;
    related_entities: {
        _type: "organization" | "person" | null;
        name: string;
        id: string | null;
    }[];
}

class BillVersion {
    date: string | null;
    type: string | null;
    name: string;
    links: {
        media_type: string;
        url: string;
        text: string;
    }[];
}
