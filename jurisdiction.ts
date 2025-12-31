import { OpenStatesLegislativeSession } from "./legislative_session";
import { OpenStatesOrganization } from "./organization";

export interface OpenStatesJurisdiction {
  id: string;
  name: string;
  classification: "country" | "state" | "municipality";
  division_id?: string;
  url?: string;
  latest_bill_update?: string;
  latest_people_update?: string;
  organizations?: OpenStatesOrganization[];
  legislative_sessions?: OpenStatesLegislativeSession[];
  latest_runs?: {
    success: boolean;
    start_time: string;
    end_time: string;
  }[];
}
