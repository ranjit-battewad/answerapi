import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  createdBy?: User | null;
  Description: string | null;
  id: string;
  isCompleted: boolean | null;
  Name: string | null;
  updatedAt: Date;
};
