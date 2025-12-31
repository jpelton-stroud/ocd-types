export interface OpenStatesLink {
  url: string;
  note: string;
}

export interface OpenStatesIdentifier {
  identifier: string;
  scheme: string;
}

export interface OpenStatesExtras {
  [key: string]: string;
}

export interface OpenStatesRole {
  title: string;
  org_classification: string;
  district: string;
  division_id: string;
}
