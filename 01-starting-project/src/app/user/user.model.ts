export interface User { // With interface, you can ONLY define object types, with 'type', you can define other types.
    id: string;
    avatar: string;
    name: string;
  }

  export interface Task {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }