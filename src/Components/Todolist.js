import React from 'react'

export default function Todolist(props) {
    const todos = props.todo
    const listItems = todos.map((todos) => <li className="list-group-item"><input type="checkbox" className='mx-1' />{todos}</li>)
    return (
        <>
            <div className='container'>
                <ul className="list-group list-group-flush">
                    {listItems}
                </ul>
            </div>
        </>
    )
}
