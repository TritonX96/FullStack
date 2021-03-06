import React from 'react';
import ReactDOM from 'react-dom';

const Header=(props)=>{
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content=(props)=>{
    return(
        <div>
            <p>{props.part} is {props.exercise}</p>
        </div>
    )
}

const Total =(props)=>{
    return(
        <div>
            <p>The total is {props.exercise}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return (
        <div>
            <Header course={course} />
            <Content exercise={exercises1} part={part1}/>
            <Content exercise={exercises2} part={part2}/>
            <Content exercise={exercises3} part={part3}/>
            <Total exercise={exercises1 + exercises2 + exercises3}/>
        </div>
      )
    }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
