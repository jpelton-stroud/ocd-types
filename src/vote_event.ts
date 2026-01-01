import { Extras, Link } from "./common.js";
import { OrganizationStub } from "./organization.js";
import { PersonStub } from "./person.js";

export type VoteEventStub = {
  id: string;
  motion_text: string;
};

export interface VoteEvent extends VoteEventStub {
  motion_classification?: string[];
  start_date: string;
  result: string;
  identifier: string;
  extras: Extras;
  organization: OrganizationStub;
  votes: {
    id: string;
    option: string;
    voter_name: string;
    voter: PersonStub;
  }[];
  counts: {
    option: string;
    value: number;
  }[];
  sources: Link[];
}
