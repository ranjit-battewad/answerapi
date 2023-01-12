import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  createdBy?: UserWhereUniqueInput | null;
  Description?: string | null;
  isCompleted?: boolean | null;
  Name?: string | null;
};
