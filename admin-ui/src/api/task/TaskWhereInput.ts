import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type TaskWhereInput = {
  createdBy?: UserWhereUniqueInput;
  Description?: StringNullableFilter;
  id?: StringFilter;
  isCompleted?: BooleanNullableFilter;
  Name?: StringNullableFilter;
};
