// Manager Dashboard Types

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  accountType: string;
  personalTrainerId?: string;
}

export interface DashboardData {
  trainers: User[];
  clients: User[];
  stats: {
    trainers: number;
    clients: number;
    total: number;
  };
  user: {
    firstName: string;
    lastName: string;
    accountType: string;
  };
}

export type SortField = 'name' | 'email' | 'clients' | 'trainer' | null;
export type SortOrder = 'asc' | 'desc';

export interface SortState {
  field: SortField;
  order: SortOrder;
}

