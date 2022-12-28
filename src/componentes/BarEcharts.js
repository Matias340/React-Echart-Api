import React, {useState, useEffect} from 'react'
import axios from "axios";
import ReactEcharts from "echarts-for-react";


function BarEcharts(){
  const [items, setItems] = useState([]);
  const [values, setValues] = useState([]);

  const peticionApi=async()=>{
   await axios.get("https://60dcb7a3c2b6280017febc27.mockapi.io/api/tabla/barCharts")
         .then(response => {
            const respuesta = response.data;
            console.log(respuesta);
            const auxItems=[], auxValues=[];
            respuesta.map(elemento=>{
                auxItems.push(elemento.items);
                auxValues.push(elemento.values);
            });
            setItems(auxItems);
            setValues(auxValues);
            
         }) 
}

useEffect(()=>{
   peticionApi();
},[])

 const options = {
 
    grid: { top:20, bottom: 20, left: 40, right: 40 },
    
    xAxis: {
        
      type: "category",
    
      data: items
    },

    yAxis: {
      type: "value"
    },
    series: [
      {
        data: values,
        type: "bar",
        smooth: true
      }
    ],
    tooltip: {
      trigger: "axis"
    }
  }
  

  return (
    <div>
     <ReactEcharts
      option={options}
      style={{ marginTop:'20px', marginLeft: "350px" ,width: "600px", height: "300px" }}/> 
    </div>
  )
}

export default BarEcharts;