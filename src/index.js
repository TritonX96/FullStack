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
            <p> {props.parts[0].name} is {props.parts[0].exercises}</p>
            <p> {props.parts[1].name} is {props.parts[1].exercises}</p>
            <p> {props.parts[2].name} is {props.parts[2].exercises}</p>
        </div>
    )
}

const Total =(props)=>{
    const total = props.parts
                .map(part=>part.exercises)
                .reduce((acc,curr) => acc+curr);

    return(
        <p>Number of exercises {total}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
            
            {/* <Total exercises={part1.exercises + part2.exercises + part3.exercises}/>  */}
        </div>
      )
    }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
