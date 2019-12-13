import React from "react";
import {
  number,
  required,
  minLength,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  DateInput,
  BooleanInput,
  LongTextInput,
  ReferenceInput
} from "react-admin";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

{
  /* <Tooltip
  title={
    <span style={{ fontSize: "12px" }}>
      Insira o número de sua matrícula de professor
    </span>
  }
  TransitionComponent={Zoom}
  enterDelay={500}
>
  <TextInput source="titulo" validate={validateTitulo} />
</Tooltip>; */
}

const validateTitulo = [required(), minLength(3)];
const validateLimites = [required(), number()];
const postDefaultValue = { docenteId: localStorage.getItem("docenteId") };
export default props => (
  <Create {...props}>
    <SimpleForm redirect={false} defaultValue={postDefaultValue}>
      <Tooltip
        title={
          <span style={{ fontSize: "12px" }}>Insira o título do projeto</span>
        }
        TransitionComponent={Zoom}
        enterDelay={500}
      >
        <TextInput source="titulo" validate={validateTitulo} />
      </Tooltip>
      <ReferenceInput source="coorientadorId" reference="Docentes">
        <SelectInput label="Coorientador" optionText="cargo" />
      </ReferenceInput>
      <ReferenceInput source="areaId" reference="Areas" validate={required()}>
        <SelectInput label="Área" optionText="nome" />
      </ReferenceInput>
      <ReferenceInput
        source="subareaId"
        reference="Subareas"
        validate={required()}
      >
        <SelectInput label="Subárea" optionText="nome" />
      </ReferenceInput>
      <Tooltip
        title={
          <span style={{ fontSize: "12px" }}>
            Insira o tipo do projeto: PIC, PIBIC, PIBIT, ...
          </span>
        }
        TransitionComponent={Zoom}
        enterDelay={500}
      >
        <TextInput source="tipo" validate={required()} />
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "12px" }}>
            Selecione a data de início do projeto
          </span>
        }
        TransitionComponent={Zoom}
        enterDelay={500}
      >
        <DateInput source="dataInicio" validate={required()} />
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "12px" }}>
            Selecione a data de término do projeto
          </span>
        }
        TransitionComponent={Zoom}
        enterDelay={500}
      >
        <DateInput source="dataTermino" validate={required()} />
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "12px" }}>
            Selecione se o projeto já se iniciou
          </span>
        }
        TransitionComponent={Zoom}
        enterDelay={500}
      >
        <BooleanInput
          defaultValue={false}
          label="Projeto em andamento?"
          source="ativo"
          validate={required()}
        />
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "12px" }}>
            Selecione o número atual de participantes do projeto
          </span>
        }
        TransitionComponent={Zoom}
        enterDelay={500}
      >
        <NumberInput
          label="Número de participantes"
          source="atualParticipantes"
          validate={validateLimites}
        />
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "12px" }}>
            Selecione o número atual de participantes do projeto
          </span>
        }
        TransitionComponent={Zoom}
        enterDelay={500}
      >
        <NumberInput
          label="Limite de participantes"
          source="limiteParticipantes"
          validate={number()}
        />
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "12px" }}>
            Informe os requisitos necessários para os candidatos do projeto
          </span>
        }
        TransitionComponent={Zoom}
        enterDelay={500}
      >
        <LongTextInput source="requisitos" />
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "12px" }}>
            Informe um resumo sobre o projeto
          </span>
        }
        TransitionComponent={Zoom}
        enterDelay={500}
      >
        <LongTextInput source="resumo" validate={required()} />
      </Tooltip>
    </SimpleForm>
  </Create>
);
