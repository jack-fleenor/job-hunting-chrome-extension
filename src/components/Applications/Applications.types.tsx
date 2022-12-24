interface Application {
  id: string;
  name: string;
  company: string;
  notes: string;
  createdAt: Date;
}

interface Applications { [index: string]: Application; }

export type { Application, Applications };