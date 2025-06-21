export interface Project {
  id?: string;
  name: string;
  description: string;
  members: string[];
  startDate: Date;
  endDate: Date;
  status: 'Planned' | 'Active' | 'Completed';
  budget: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
}