import { Extras, Identifier, Link, Role } from "./common.js";
import { Jurisdiction } from "./jurisdiction.js";

export interface Person {
  id: string;
  name: string;
  party: string;
  current_role: Role;
  jurisdiction: Jurisdiction;
  given_name: string;
  family_name: string;
  image: string;
  email: string;
  gender: string;
  birth_date: string;
  death_date: string;
  extras: Extras;
  created_at: string;
  updated_at: string;
  openstates_url: string;
  other_idenifiers?: Identifier[];
  other_names?: {
    name: string;
    note: string;
  }[];
  links?: Link[];
  sources?: Link[];
  offices?: {
    name: string;
    fax: string;
    voice: string;
    address: string;
    classification: string;
  }[];
}
