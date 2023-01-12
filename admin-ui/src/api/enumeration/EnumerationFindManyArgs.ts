import { EnumerationWhereInput } from "./EnumerationWhereInput";
import { EnumerationOrderByInput } from "./EnumerationOrderByInput";

export type EnumerationFindManyArgs = {
  where?: EnumerationWhereInput;
  orderBy?: Array<EnumerationOrderByInput>;
  skip?: number;
  take?: number;
};
