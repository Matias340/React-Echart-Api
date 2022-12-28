import React, {useState, useEffect} from 'react'
import ReactEcharts from "echarts-for-react";
import axios from "axios";


function PieEcharts(){
  const [items, setItems] = useState([]);
  const [values, setValues] = useState([]);

  const peticionApi=async()=>{
   await axios.get("https://60dcb7a3c2b6280017febc27.mockapi.io/api/tabla/PieCharts")
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


const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          {value: values[0], name: items[0]},
          {value: values[1], name: items[1]},
          {value: values[2], name: items[2]},
          {value: values[3], name: items[3]},
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
    ]
  };

  return (
    <div>
        <ReactEcharts
         option={option}
         style={{ marginTop: "100px" , marginLeft: "350px" ,width: "700px", height: "400px" }}/> 
    </div>
  )
}

export default PieEcharts;