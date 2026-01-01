export type OrganizationStub = {
  id: string;
  name: string;
  classification: string;
};

export interface Organization extends OrganizationStub {
  districts?: [];
}
