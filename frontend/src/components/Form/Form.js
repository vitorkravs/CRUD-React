import React, { useRef } from "react";
import {FormContainer, InputArea, Label, Input, Button} from'./styles'

function Form(onEdit){
    const ref = useRef()

    return(
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome"/>
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email"/>
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="fone"/>
            </InputArea>
            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="data_nascimento" type="date"/>
            </InputArea>
            <Button type="submit">Salvar</Button>
        </FormContainer>
    )
}

export default Form;