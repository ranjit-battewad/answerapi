import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "Name";

export const TaskTitle = (record: TTask): string => {
  return record.Name || String(record.id);
};
