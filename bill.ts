import {
  OpenStatesExtras,
  OpenStatesIdentifier,
  OpenStatesLink,
} from "./common.js";
import { OpenStatesJurisdiction } from "./jurisdiction.js";
import { OpenStatesOrganization } from "./organization.js";
import { OpenStatesPerson } from "./person.js";

export interface OpenStatesBill {
  id: string;
  session: string;
  jurisdiction: OpenStatesJurisdiction;
  from_organization: OpenStatesOrganization;
  identifier: string;
  title: string;
  classification: string[];
  subject: [];
  extras: OpenStatesExtras;
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
  other_titles?: [];
  other_identifiers?: OpenStatesIdentifier[];
  sponsorships?: {
    id: string;
    name: string;
    entity_type: "person" | "organization";
    person?: OpenStatesPerson;
    organization?: OpenStatesOrganization;
    primary?: boolean;
    classification?: string;
  }[];
  sources?: OpenStatesLink[];
  versions?: [];
}
