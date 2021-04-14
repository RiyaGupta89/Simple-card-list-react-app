import React, { useDebugValue } from "react";
import './App.css';
import Card from './Card';
import Sdata from './Sdata';

function App() {
  return ( 
    <>
         <div className="nav">LIST OF TOP 8 NETFLIX SERIES IN 2021</div>
         <div className="container">

         { Sdata.map( (val) => {
               return(
                  <Card
                    imgsrc={val.imgsrc}
                    name={val.name}
                    href={val.href}
              />
               )
         })
        }
              
         </div>
    </>
    );
}

export default App;


// map takes three arguments: 
// 1-) Current Value
// 2-) Index Number
// 3-) Existing Array