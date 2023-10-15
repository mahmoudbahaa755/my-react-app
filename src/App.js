import React, {
  useState,
  useEffect
} from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';
import useHttp from './hooks/useHttp';
const App = () => {
    const [courseGoals, setCourseGoals] = useState([]);
    const {
      sendRequest: fetchTask
    } = useHttp();
    const deleteSelectedGoalByID = (id) => {
      console.log(courseGoals)
      setCourseGoals((prevCourseGoals) => {
        return prevCourseGoals.filter((goal) => goal.id !== id);
      });
      console.log(courseGoals)
    };

    useEffect(() => {
      const transformedData = data => {
        const loadGoals = [];
        for (const i in data) {
          loadGoals.push({
            id: i,
            goal: data[i].text,
            done: data[i].done
          });
        }
        setCourseGoals(loadGoals);
      };

      fetchTask({
        method: 'GET',
        url: 'https://react-first-project-dbb54-default-rtdb.firebaseio.com/task.json'
      }, transformedData);
    });





    const selectedTaskDoneByID = (id, done) => {
      setCourseGoals(courseGoals.map((e, i) => {
        if (e.id === id) {
          if (e.done === false) {
            e.done = true;
          } else {
            e.done = false;

          }
        }
        return e;
      }));
    };
    let content = ( < CourseGoalList courseGoals = {
          courseGoals
        }
        selectedTaskDoneByID = {
          selectedTaskDoneByID
        }
        deleteSelectedGoalByID = {
          deleteSelectedGoalByID
        }
        />);
        if (courseGoals.length === 0) {

          content = ( <p style= {{
                textAlign: 'center'
              }
            } > No goals found.Maybe start adding now ? </p>);
          }
          const addGoal = goal => {
            setCourseGoals(prevGoals => {
              return [{
                id: Math.random().toString(),
                goal: goal,
                done: false
              }, ...prevGoals];
            });
          }
          const loadData = e => {

          };


          return ( <
            div >
            <
            CourseInput addGoal = {
              addGoal
            }
            loadData = {
              loadData
            }/> {
              content
            } </div>
          );
        };

        export default App;