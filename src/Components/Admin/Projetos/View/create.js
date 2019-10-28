import React from "react";
import {
  number,
  required,
  minLength,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  RichTextInput,
  ReferenceInput,
  SelectInput
} from "react-admin";

const validateTitulo = [required(), minLength(3)];
const validateLimites = [required(), number()];

export default props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="titulo" validate={validateTitulo} />
      <ReferenceInput source="docenteId" reference="Docentes" allowEmpty>
        <SelectInput label="Orientador" optionText="nome" />
      </ReferenceInput>
      <ReferenceInput source="coorientadorId" reference="Docentes" allowEmpty>
        <SelectInput label="Coorientador" optionText="nome" />
      </ReferenceInput>
      <ReferenceInput source="areaId" reference="Areas" allowEmpty>
        <SelectInput label="Área" optionText="nome" />
      </ReferenceInput>
      <ReferenceInput source="subareaId" reference="Subareas" allowEmpty>
        <SelectInput label="Subárea" optionText="nome" />
      </ReferenceInput>
      <TextInput source="tipo" validate={required()} />
      <DateInput source="dataInicio" validate={required()} />
      <DateInput source="dataTermino" validate={required()} />
      <TextInput source="status" validate={required()} />
      <NumberInput
        label="Número de participantes"
        source="nroParticipantes"
        validate={validateLimites}
      />
      <NumberInput
        label="Limite de participantes"
        source="limiteParticipantes"
        validate={validateLimites}
      />
      <RichTextInput source="requisitos" />
      <RichTextInput source="resumo" validate={required()} />
    </SimpleForm>
  </Create>
);
