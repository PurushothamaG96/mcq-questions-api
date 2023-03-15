
import { useState } from 'react';
import './App.css';

function App() {
  const [pageNo, setPageNo] = useState(0)
  const [result, setResult] = useState(false)
  const [score, setScore] = useState(0)
  let questionArr = [
    {
      question:"Which one is the capital of India",
      option:["Bengaluru", "Hyderabadh", "Mumbai", "Delhi"],
      answer:"Delhi"
    },
    {
      question:"Silicon city of India",
      option:["Hyderabadh", "Mumbai", "Delhi", "Bengaluru"],
      answer:"Bengaluru"
    },
    {
      question:"On What date independence day celebrate in India",
      option:["15/08/1948", "15/07/1946", "14/08/1947", "15/08/1947"],
      answer:"15/08/1947"
    },
    {
      question:"Current prime minister of London",
      option:["Boris Johnson", "Rishi Sunak", "Élisabeth Borne", "Jair Messias Bolsonaro"],
      answer:"Rishi Sunak"
    }

  ]

  const handleAnswer =(e, i)=> {
    if(pageNo+1===questionArr.length){
      if(questionArr[i].answer===questionArr[i].option[e.target.id]){
        setScore((old)=>old+1)
      }
      setPageNo((old)=>old+1)
      setResult(true)
    }
    else{
      if(questionArr[i].answer===questionArr[i].option[e.target.id]){
        setScore((old)=>old+1)
      }
      setPageNo((old)=>old+1)
    }
  }
  return (
    <div className="App">
        {
          questionArr.map((val, i)=>{
            return(
              (pageNo===i)?<div className='main-container'>
                <div className='sub-container left'>
                  <h1>Question-{pageNo+1}/{questionArr.length}</h1>
                  <h3>{val.question}</h3>
                </div>
                <div className='sub-container right'>
                  <button id='0' onClick={(e)=>handleAnswer(e,i)} >{val.option[0]}</button>
                  <button id='1' onClick={(e)=>handleAnswer(e,i)}>{val.option[1]}</button>
                  <button id='2' onClick={(e)=>handleAnswer(e,i)}>{val.option[2]}</button>
                  <button id='3' onClick={(e)=>handleAnswer(e,i)}>{val.option[3]}</button>
                </div>
              </div>:""
            )
          })
        }
        {result&&<div className='main-container'>
                <div className='result'>
                  <h1>You scored {score} out of {questionArr.length}</h1>
                </div>
              </div>}
    </div>
  );
}

export default App;
