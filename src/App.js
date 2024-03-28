import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [bgColor, setbgColor] = useState({})

  const click = (color) =>{
    setbgColor(color)
  }

  useEffect(()=>{
    document.body.style.backgroundColor =bgColor
  },[bgColor])

  

  return (
    <div className="App">
      <button onClick={()=>click("red")} style={{backgroundColor:"red", color:"black",marginTop:"30px",height:"50px", width:"80px", marginRight:"5px"}}>
        <h1 style={{margin:"5px"}}>red</h1>
      </button>
      <button onClick={()=>click("blue")} style={{backgroundColor:"blue", color:"black",marginTop:"30px",height:"50px", width:"80px", marginRight:"5px"}}>
        <h1 style={{margin:"5px"}}>blue</h1>
      </button>
      <button onClick={()=>click("Yellow")} style={{backgroundColor:"yellow", color:"black",marginTop:"30px",height:"50px", width:"auto", marginRight:"5px"}}>
        <h1 style={{margin:"5px"}}>yellow</h1>
      </button>
      <button onClick={()=>click("cyan")} style={{backgroundColor:"cyan", color:"black",marginTop:"30px",height:"50px", width:"auto", marginRight:"5px"}}>
        <h1 style={{margin:"5px"}}>cyan</h1>
      </button>
      <button onClick={()=>click("purple")} style={{backgroundColor:"purple", color:"black",marginTop:"30px",height:"50px", width:"auto", marginRight:"5px"}}>
        <h1 style={{margin:"5px"}}>purple</h1>
      </button>
    </div>
  );
}

export default App;
