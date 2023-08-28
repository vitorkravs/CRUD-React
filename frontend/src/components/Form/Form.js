import React, { useRef, useEffect } from "react";

import { FormContainer, InputArea, Label, Input, Button } from './styles'

import {toast}  from "react-toastify";
import axios from "axios";

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();
  
    useEffect(() => {
      if (onEdit) {
        const user = ref.current;
  
        user.nome.value = onEdit.nome;
        user.email.value = onEdit.email;
        user.fone.value = onEdit.fone;
        user.data_nascimento.value = onEdit.data_nascimento;
      }
    }, [onEdit]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const user = ref.current;
  
      if (
        !user.nome.value ||
        !user.email.value ||
        !user.fone.value ||
        !user.data_nascimento.value
      ) {
        return toast.warn("Preencha todos os campos!");
      }
  
      if (onEdit) {
        await axios
          .put("http://localhost:8800/" + onEdit.id, {
            nome: user.nome.value,
            email: user.email.value,
            fone: user.fone.value,
            data_nascimento: user.data_nascimento.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      } else {
        await axios
          .post("http://localhost:8800", {
            nome: user.nome.value,
            email: user.email.value,
            fone: user.fone.value,
            data_nascimento: user.data_nascimento.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      }
  
      user.nome.value = "";
      user.email.value = "";
      user.fone.value = "";
      user.data_nascimento.value = "";
  
      setOnEdit(null);
      getUsers();
    };
  
    return (
      <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
          <Label>Nome</Label>
          <Input name="nome" />
        </InputArea>
        <InputArea>
          <Label>E-mail</Label>
          <Input name="email" type="email" />
        </InputArea>
        <InputArea>
          <Label>Telefone</Label>
          <Input name="fone" />
        </InputArea>
        <InputArea>
          <Label>Data de Nascimento</Label>
          <Input name="data_nascimento" type="date" />
        </InputArea>
  
        <Button type="submit">SALVAR</Button>
      </FormContainer>
    );
  };
  
  export default Form;