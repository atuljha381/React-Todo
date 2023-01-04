import React from 'react'
import './Landing.css'
import Todolist from './Todolist'
export default function Landing(props) {

    const todolist = ['Learn Javascript', 'Learn React', 'Build React App']

    return (
        <>
            <div className='container'>
                <h1>
                    THINGS TO DO
                </h1>
                <div class="input-group mb-3 my-5">
                    <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder='Add New' />
                </div>
                <Todolist todo={todolist} />
            </div>
        </>
    )
}
