import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {


  const deleteGoal = (id) => {
    props.deleteSelectedGoalByID(id);
  }
   const taskDone = (id ,done) => {
    props.selectedTaskDoneByID(id,done);
  }
  props.courseGoals.sort(((a, b) => (a.done > b.done ? 1 : -1))
  )

  return (
      <ul>
      {props.courseGoals.map(e => {
        return(
          <CourseGoalItem goal={e.goal}taskDone={taskDone} deleteGoal={deleteGoal} key={e.id} id={e.id} />
        )
      })}
      </ul>
  );
}

export default CourseGoalList;
