import { useState } from 'react'
import './App.css'
// import ToDo from './ToDo.jsx'
import Food from './ToDo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Core Concept</h1>
      {/* <ToDo task="Learn React" isDone={true} /> */}
      <Food item="Pizza" isHungry={true} />
      {/* <Person />
      <Students />
      <Car />
      <Device name="iPhone" price="$999" />
      <Device name="Samsung Galaxy" price="$899" />
      <Player name="Tamim" age="40" country="Bangladesh" runs="5000" />
      <Player name="Shakib" age="35" country="Bangladesh" runs="4500" />
      <Player name="Mushfiq" age="38" country="Bangladesh" runs="4000" />
      <Sum a="20" b="30" /> */}
    </>
  )
}
function Device(info){
  return (
    <div style={{border: '2px solid blue', margin: '20px', padding: '20px'}}>
      <h2>This is a device user component</h2>
      <p>Device Name: {info.name}</p>
      <p>Device Price: {info.price}</p>
    </div>
  )
}
//const {Name, Age, Country, Runs} = {Name:"Tamim", Age:"40", Country:"Bangladesh", Runs:"5000"}
function Player({name, age, country, runs}){
  return (
    <div style={{border: '2px solid green', margin: '20px', padding: '20px'}}>
      <h2>This is a player component</h2>
      <h3>Name:{name}</h3>
      <p>Age:{age}</p>
      <p>Country:{country}</p>
      <p>Runs:{runs}</p>
    </div>
  )
}

function Person(){
  const age = 25;
  return (
    <p>hello Mr Afal Hossaing Raju, you are {age} years old!</p>
  )
}
function Students(){
  const name = "Raju";
  const age = 25;
  return (
    <div>
      <h1>This is a student component</h1>
      <p>hello Mr {name}, you are {age} years old, welcome to our website!</p>
    </div>
  )
}
function Car(){
  return (
    <div>
      <h2>This is a car component</h2>
      <div>
        <img src="./assets/react.svg" alt="Car" />
        <img src="./assets/react.svg" alt="Car" />
        <img src="./assets/react.svg" alt="Car" />
      </div>
    </div>
  );
}
function Sum({a, b}){
  const C = parseInt(a);
  const D = parseInt(b);
  const sum = C + D;
  return (
    <div style={{border: '2px solid red', margin: '20px', padding: '20px'}}>
      <h2>This is sum component</h2>
      <p>The sum of {a} and {b} is: {sum}</p>
    </div>
  );
}

export default App;
