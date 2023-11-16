import React, {useState} from 'react';
import HomeworkForm from './HomeworkForm';
import '../stylesheets/ToDoList.css'
import Homework from './Homework';


export default function ToDoList(){

    const [assignments, setAssignments] = useState([]);

    const addAssignment = assignment => {
      if (assignment.texto.trim()){
        assignment.texto = assignment.texto.trim(); /* With trim we are clearing the unnecessary spaces */

        const assignmentsSubmitted = [assignment, ...assignments]; /* With this function an assignment is added as the first of the list */
        setAssignments(assignmentsSubmitted); /* New state update */
      }
    };

    const eliminateAssignment = id => {
      const assignmentsSubmitted = assignments.filter(assignment => assignment.id !== id);
      setAssignments(assignmentsSubmitted);
   
    };

    const completeAssignment= id => {
      const assignmentsSubmitted = assignments.map(assignment =>{
        if (assignment.id === id){
          assignment.completed = !assignment.completed;
        }
        return assignment;
      } );
      setAssignments(assignmentsSubmitted); /* more than submitted is assignment updated */
    
    };

    return (
        <>
            <HomeworkForm onSubmit={addAssignment} />
            <div className='homework-list-container'>
                {
                  assignments.map((assignment) =>
                    <Homework
                      key={assignment.id}
                      id={assignment.id} /* we have to inclue key in order to submit a form */
                      texto={assignment.texto} 
                      completed= {assignment.completed}
                      eliminateAssignment={eliminateAssignment}
                      completeAssignment={completeAssignment}
                    />
                  )
                }

            </div>
        </>
    )
}