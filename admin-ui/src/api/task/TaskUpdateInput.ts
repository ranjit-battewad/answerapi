import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  createdBy?: UserWhereUniqueInput | null;
  Description?: string | null;
  isCompleted?: boolean | null;
  Name?: string | null;
};
