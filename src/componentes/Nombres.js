import React, {useState, useEffect} from 'react'
import axios from "axios";
import { List, ListItem } from '@mui/material';



function Nombres(props) {
  const [valores, setValoresNombres] = useState([]);

  useEffect(() => {
     axios.get("https://60dcb7a3c2b6280017febc27.mockapi.io/api/tabla/nombreApi")
          .then(res => {
             const data = res.data;
             setValoresNombres(data.serie);
             console.log(data);
          }); 
  }, [])

  return (
    <List>
          {valores?.map( v => (<ListItem>Nombre: {v.nombre}</ListItem>))}
    </List>      
  );
}

export default Nombres;