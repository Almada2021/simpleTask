import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { v4 as uuid  } from 'uuid';
const FormTask = ({Task, changeTask}) => {
    const [inputTask, changeInputTask] =useState("")
    const handleInput = (e) =>{
        changeInputTask(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        changeTask([...Task,
            {
                id: uuid(),
                text: inputTask,
                ready:false
            }
        ]);
        changeInputTask('');
    }
    return (  

        <form className='form-task' onSubmit={handleSubmit}>
            <input
                type='text'
                className='form-task__input'
                placeholder='add task'
                value={inputTask}
                onChange={(e) => handleInput(e)}
            />
            <button type='submit' className='form-task__btn'>
                <FontAwesomeIcon icon={faPlusSquare} className='form-task__icon-btn'></FontAwesomeIcon>
            </button>
        </form>
    );
}
 
export default FormTask;