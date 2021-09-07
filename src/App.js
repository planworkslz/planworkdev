import './App.css';
import React, { useState, Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';


import Logo from '../src/logoPlanWork.jpeg';

const Button = styled.button `
  height: 50px;
  width: 100px;
  background-color: #4169E1;
  color: #FFF;
  border-radius: 20px;
  border: 1px solid blue;
  font-weight: bold;

`;



function App() {


  const [selectedFile, setSelectedFile] = useState();
  const [status, setStatus] = useState('Aguardando envio da planta!');



  const onFileUpload = () => {
    const formData = new FormData();

    try {

      formData.append(
        "planta",
        selectedFile,
        selectedFile.name
      );

      console.log(selectedFile);

      axios.post("http://localhost:3001/", formData);
      setStatus('Planta Enviada!');

    }
    catch (e) {
      setStatus('Falha ao enviar, por favor faça o upload do arquivo!');
    }
  };

  const onFileChange = event => {
    setSelectedFile(event.target.files[0])
  };



  return (



    <body>

    <div className="Container">

      <div className="App">
    
          <img src={Logo} className="App-logo" />
          
      </div>

      <div className="TextFile">    
          <div>
            <label>
              <input type="file" name="planta" required onChange={onFileChange} />
            </label>
            <br />
            <br />
            <div>{status}</div>
            <br/>
            
          </div>
          <Button onClick={onFileUpload}>ENVIAR PDF</Button>
      
      </div>

    </div>

    </body>


  );
}

export default App;
