import { LegislativeSession } from "./legislative_session.js";
import { Organization } from "./organization.js";

export type Jurisdiction = {
  id: string;
  name: string;
  classification: "country" | "state" | "municipality";
  division_id?: string;
  url?: string;
  latest_bill_update?: string;
  latest_people_update?: string;
  organizations?: Organization[];
  legislative_sessions?: LegislativeSession[];
  latest_runs?: {
    success: boolean;
    start_time: string;
    end_time: string;
  }[];
};
