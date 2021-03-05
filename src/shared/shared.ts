export class Link {
    url: string;
    note?: string | null;
    constructor(url: string, note: string = null) {
        this.note = note;
        this.url = url;
    }
}

export class Identifier {
    scheme: null | string;
    identifier: string;
    constructor(parameters) {}
}

export class ContactDetail {
    type: string;
    value: string;
    note: null | string;
    label: null | string;

    constructor(parameters) {}
}
export interface CommonMetadata {
    updated_at?: null | string;
    created_at?: null | string;
    sources: Link[];
}

export class OtherName {
    name: string;
    note: null | string;
    start_date: null | string;
    end_date: null | string;

    constructor(parameters) {}
}
