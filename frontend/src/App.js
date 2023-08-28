import GlobalStyle from "./styles/global";
import { Container, Title } from "./styles/appStyles";

import {toast, ToastContainer} from 'react-toastify'
import Form from "./components/Form/Form";
import Grid from "./components/Grid/Grid";

import axios from "axios";

import { useState, useEffect } from "react";


function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async() => {
    try{
      const res = await axios.get("http://localhost:8800/")
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch(error){
      toast.error(error)
    }
  };

  useEffect(() => {
    getUsers()
  }, [setUsers]);


  return (
    <>
      <Container>
        <Title>Usuários</Title>
        <Form/>
        <Grid users={users}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle />
    </>
  );
}

export default App;
