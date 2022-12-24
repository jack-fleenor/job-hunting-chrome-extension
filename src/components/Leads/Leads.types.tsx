interface Lead {
  id: string;
  name: string;
  company: string;
  notes: string;
  createdAt: Date;
}

interface Leads { [index: string]: Lead; }

export type { Lead, Leads };