import React, { useState } from 'react';
import '../stylesheets/HomeworkForm.css';
import {v4 as uuidv4} from 'uuid';

export default function HomeworkForm(props){

  const [input, setInput] =useState('');
  const manageChange = e => {
    setInput(e.target.value);
    
  };

  const manageSend = e => {
    e.preventDefault();

    const newAssignment = {
      id: uuidv4(), /* Using the V4 id we assign an ID for the Assignment */
      texto: input, 
      completed: false
    }
    props.onSubmit(newAssignment);
  
  };

  
  return(
    <form Homework-form
      onSubmit={manageSend}>
      <input 
        className='homework-input'
        type='text'
        placeholder='Want do you want to achive?'
        name='texto'
        onChange={manageChange}
      />
      <button className='homework-button'>
        Add homework
      </button>
    </form>
  )
}