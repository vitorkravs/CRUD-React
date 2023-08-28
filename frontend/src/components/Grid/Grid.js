import React from 'react'
import axios from 'axios'
import {Table, Thead, Tbody, Tr, Th, Td} from './styles'
import {FaTrash, FaEdit} from 'react-icons/fa'
import {toast} from 'react-toastify'


function Grid({users}){
    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th $onlyWeb>fone</Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) =>(
                    <Tr key={i}>
                        <Td width='30%'>{item.nome}</Td>
                        <Td width='30%'>{item.email}</Td>
                        <Td width='20%' $onlyWeb>{item.fone}</Td>
                        <Td $aligncenter width='5%'><FaEdit /></Td>
                        <Td $aligncenter width='5%'><FaTrash /></Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
};

export default Grid;