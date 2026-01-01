export interface Link {
  url: string;
  note: string;
}

export interface Identifier {
  identifier: string;
  scheme: string;
}

export interface Extras {
  [key: string]: string;
}

export interface Role {
  title: string;
  org_classification: string;
  district: string;
  division_id: string;
}
