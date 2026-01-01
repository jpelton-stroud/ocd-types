export type Link = {
  url: string;
  note: string;
};

export type Identifier = {
  identifier: string;
  scheme: string;
};

export type Extras = {
  [key: string]: string;
};

export type Role = {
  title: string;
  org_classification: string;
  district: string;
  division_id: string;
};
