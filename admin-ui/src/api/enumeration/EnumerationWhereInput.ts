import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type EnumerationWhereInput = {
  category?: StringFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringFilter;
  value?: StringFilter;
};
