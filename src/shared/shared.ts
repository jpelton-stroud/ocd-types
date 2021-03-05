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
}

export interface CommonMetadata {
    updated_at?: null | string;
    created_at?: null | string;
    sources: Link[];
}
