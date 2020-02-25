import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Display=(props)=>{
  return(
    <div> This is the counter of {props.counter}</div>
  )
}

const Button = ({onClick,text})=>(
  <button onClick={onClick}>{text}</button>
)

const Hello = (props) => {
  // const name = props.name
  // const age = props.age
  const {name, age } = props
  const bornYear= ()=> new Date().getFullYear()-age

  // const bornYear = () =>{
  //   const yearNow = new Date().getFullYear()
  //   return yearNow - props.age
  // }

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}



const App = (props) => {
  const name = 'Isaac'
  const age = 24
  const prop = {
    name: 'ZR',
    age: 21,
  }



  // const handleClick=()=>{
  //   console.log('Clicked')
  // }
  const [counter, setCounter] = useState(0)
  const setToValue = (value) => {
    return () => {
      setCounter(value)
    }
  }
  setTimeout(
      ()=> setCounter(counter+1),
      1000
    )
    console.log('rendering....', counter)


  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello name={prop.name} age={prop.age} />
      <Display counter={counter+10}/>
      <br></br>
      
      {counter}
      <br></br>
      <br></br>
      <Button onClick={() => 
        setToValue(counter + 1)}        
        text='plus'
        />      
      <Button onClick={() => setToValue(counter - 1)}        
      text='minus'
      />      
      <Button onClick={() => setToValue(0)}
      text='zero'
      />
    </div>
    
  )
}

let counter = 1

ReactDOM.render(<App />, document.getElementById('root'));


// setInterval(()=>{
//   refresh()
//   counter += 1
// },1000)

// refresh()
// console.log(counter)
// counter+=1
// refresh()
// console.log(counter)
// counter+=1
// refresh()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
