import React from "react";
import {
  number,
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
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

const messageMinTitulo = "Título deve conter pelo menos 10 caracteres.";
const messageMaxTitulo = "Título não pode exceder 100 caracteres.";
const messageMinResumo = "Resumo deve conter pelo menos 20 caracteres.";
const messageMaxResumo = "Resumo não pode exceder 400 caracteres.";
const numeros = "O valor deve estar entre 0 e 6.";

const validateTitulo = [
  required("Campo obrigatório."),
  minLength(10, messageMinTitulo),
  maxLength(100, messageMaxTitulo)
];
const validateResumo = [
  required("Campo obrigatório."),
  minLength(20, messageMinResumo),
  maxLength(400, messageMaxResumo)
];
const validateNumeros = [
  required("Campo obrigatório."),
  minValue(0, numeros),
  maxValue(6, numeros),
  number()
];
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
      <ReferenceInput
        source="areaId"
        reference="Areas"
        validate={required("Campo obrigatório.")}
      >
        <SelectInput label="Área" optionText="nome" />
      </ReferenceInput>
      <ReferenceInput
        source="subareaId"
        reference="Subareas"
        validate={required("Campo obrigatório.")}
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
        <TextInput source="tipo" validate={required("Campo obrigatório.")} />
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
        <DateInput
          source="dataInicio"
          validate={required("Campo obrigatório.")}
        />
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
        <DateInput
          source="dataTermino"
          validate={required("Campo obrigatório.")}
        />
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
          validate={required("Campo obrigatório.")}
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
          validate={validateNumeros}
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
          validate={validateNumeros}
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
        <LongTextInput source="resumo" validate={validateResumo} />
      </Tooltip>
    </SimpleForm>
  </Create>
);
