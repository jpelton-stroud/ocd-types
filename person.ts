import {
  OpenStatesExtras,
  OpenStatesIdentifier,
  OpenStatesLink,
  OpenStatesRole,
} from "./common.js";
import { OpenStatesJurisdiction } from "./jurisdiction.js";

export interface OpenStatesPerson {
  id: string;
  name: string;
  party: string;
  current_role: OpenStatesRole;
  jurisdiction: OpenStatesJurisdiction;
  given_name: string;
  family_name: string;
  image: string;
  email: string;
  gender: string;
  birth_date: string;
  death_date: string;
  extras: OpenStatesExtras;
  created_at: string;
  updated_at: string;
  openstates_url: string;
  other_idenifiers?: OpenStatesIdentifier[];
  other_names?: {
    name: string;
    note: string;
  }[];
  links?: OpenStatesLink[];
  sources?: OpenStatesLink[];
  offices?: {
    name: string;
    fax: string;
    voice: string;
    address: string;
    classification: string;
  }[];
}
