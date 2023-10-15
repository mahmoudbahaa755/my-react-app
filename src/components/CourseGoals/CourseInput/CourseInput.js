import React, { useState } from 'react';
import EmptyGoalEror from '../../FloatingWindow/EmptyGoalEror';
import './CourseInput.css';
import useHttp from '../../../hooks/useHttp';
const CourseInput = (props) => {
  const {
    sendRequest:sendTaskRequest
  } = useHttp();

const [inputGoal, setInputGoal] = useState('');
const [emptyGoalError, setEmptyGoalError] = useState(false);
const addClosureGoal = e =>{
  setInputGoal(e.target.value);

};

const submitClosureGoal =async (e) =>{
  const createTask = (task) => {
    props.addGoal(task);
    setInputGoal('');
  };
  if(inputGoal.trim().length === 0){
    setEmptyGoalError(true);
  }
  else{
  setEmptyGoalError(false);

  }
 
  if(inputGoal.trim().length > 0){
     sendTaskRequest({
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: {
         text: inputGoal,
         done: false,
         id:Math.random
       },
       url: 'https://react-first-project-dbb54-default-rtdb.firebaseio.com/task.json'
     }, createTask.bind(null, inputGoal));
 
  }
};
// const loadData =e =>{
//   props.loadData();
// };
      return (

        <div className='course-input'>
    {emptyGoalError === true ?( <EmptyGoalEror errorOrNot={emptyGoalError} />) : (<span></span>)}
          <h2>Day Goals</h2>
         
          <input type='text' className='input-goal' value={inputGoal} onChange={addClosureGoal} placeholder='Enter your day goal' />
           <button onClick={submitClosureGoal}  type='submit'  className="button" >
        Add Goal
    </button>
    
        </div>
      );
}

export default CourseInput;
