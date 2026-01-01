import { Document, Extras, Identifier, Link } from "./common.js";
import { Jurisdiction } from "./jurisdiction.js";
import { Organization, OrganizationStub } from "./organization.js";
import { Person, PersonStub } from "./person.js";

export type Bill = {
  id: string;
  session: string;
  jurisdiction: Jurisdiction;
  from_organization: Organization;
  identifier: string;
  title: string;
  classification: string[];
  subject: unknown[];
  extras: Extras;
  created_at: string;
  updated_at: string;
  openstates_url: string;
  first_action_date: string;
  latest_action_date: string;
  latest_action_description: string;
  latest_passage_date: string;
  related_bills?: {
    identifier: string;
    legislative_session: string;
    relation_type: string;
  }[];
  abstracts?: {
    abstract: string;
    note: string;
  }[];
  other_titles?: unknown[];
  other_identifiers?: Identifier[];
  sponsorships?: {
    id: string;
    name: string;
    entity_type: "person" | "organization";
    primary: boolean;
    classification: string;
    person?: Person;
    organization?: Organization;
  }[];
  actions: {
    id: string;
    organization: OrganizationStub;
    description: string;
    date: string;
    classification: string[];
    order: number;
    related_entities?: {
      name: string;
      entity_type: string;
      organization?: OrganizationStub;
      person?: PersonStub;
    }[];
  }[];
  sources?: Link[];
  versions?: Document[];
  documents?: Document[];
  votes?: unknown[];
};
