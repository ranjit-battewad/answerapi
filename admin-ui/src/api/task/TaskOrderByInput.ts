import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  Description?: SortOrder;
  id?: SortOrder;
  isCompleted?: SortOrder;
  Name?: SortOrder;
  updatedAt?: SortOrder;
};
