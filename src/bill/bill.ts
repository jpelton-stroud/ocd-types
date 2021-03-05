// https://opencivicdata.readthedocs.io/en/latest/data/bill.html

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

class Source {
    url: string;
    note?: string | null;
    constructor(url: string, note: string = null) {
        this.note = note ? note : null;
        this.url = url;
    }
}

interface IBill {
    session: string;
    name: string;
    title: string;
    sources: Source[];

    organization?: string | null;
    organization_id?: string | null;
    chamber?: Chamber | null;
    type?: string[];
    subject?: string[];
    summaries?: BillSummary[];

    updated_at?: string;
    created_at?: string;

    other_titles?: OtherTitle[];
    other_names?: OtherName[];
    related_bills?: RelatedBill[];

    sponsors?: BillSponsor[];
    actions?: BillAction[];

    documents?: BillVersion[];
    versions?: BillVersion[];
}

class Bill implements IBill {
    readonly _type: string = "bill";

    name: string;
    session: string;
    title: string;
    sources: Source[];

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

    constructor(bill: IBill) {
        this.name = bill.name;
        this.session = bill.session;
        this.title = bill.title;
        if (bill.sources.length > 0) this.sources = bill.sources;
        else throw new Error("Must include at least one source URL");

        this.organization = bill.organization ? bill.organization : null;
        this.organization_id = bill.organization_id
            ? bill.organization_id
            : null;
        this.chamber = bill.chamber ? bill.chamber : null;
        this.type = bill.type ? bill.type : [];
        this.subject = bill.subject ? bill.subject : [];
        this.summaries = bill.summaries ? bill.summaries : [];
        this.other_titles = bill.other_titles ? bill.other_titles : [];
        this.other_names = bill.other_names ? bill.other_names : [];
        this.related_bills = bill.related_bills ? bill.related_bills : [];
        this.sponsors = bill.sponsors ? bill.sponsors : [];
        this.actions = bill.actions ? bill.actions : [];
        this.documents = bill.documents ? bill.documents : [];
        this.versions = bill.versions ? bill.versions : [];

        this.updated_at = bill.updated_at ? bill.updated_at : null;
        this.created_at = bill.created_at ? bill.created_at : null;
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
