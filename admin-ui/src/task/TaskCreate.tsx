import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="CreatedBy">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="Description" />
        <BooleanInput label="IsCompleted" source="isCompleted" />
        <TextInput label="Name" source="Name" />
      </SimpleForm>
    </Create>
  );
};
