import React from 'react';
import '../stylesheets/Homework.css';
import {AiOutlineCloseCircle} from "react-icons/ai";

export default function Homework( {id,texto, completed, completeAssignment, eliminateAssignment} ) {
    return(
        <div className={completed ? 'homework-container completed' : 'homework-container'}>
            <div className='homework-text' 
                onClick={() => completeAssignment(id)}>
                {texto}
            </div>
            <div className='homework-container-icons'
            onClick={() => eliminateAssignment(id)}>
                <AiOutlineCloseCircle className='homework-icon'/>
            </div>
        </div>
    )
}
