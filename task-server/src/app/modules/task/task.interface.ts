// types/task.ts
export interface CreateTaskPayload {
    title?: string;
    description?: string;
    deadline?: string | Date;
    priority?: 'LOW' | 'MEDIUM' | 'HIGH';
    userId?: string;
    searchTerm?: string | undefined;

  }
  