import { SortOrder } from "../../util/SortOrder";

export type EnumerationOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
