import React from 'react';
import './App.css';
import BarEcharts from './componentes/BarEcharts';
import DataFormatter from './componentes/DataFormatter';
import PieEcharts from './componentes/PieEcharts';


function App() {
  return (
    <div className="App">
        <BarEcharts />
        <PieEcharts />
        <DataFormatter />
    </div>
  );
}

export default App;
