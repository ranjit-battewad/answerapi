import { Enumeration as TEnumeration } from "../api/enumeration/Enumeration";

export const ENUMERATION_TITLE_FIELD = "name";

export const EnumerationTitle = (record: TEnumeration): string => {
  return record.name || String(record.id);
};
