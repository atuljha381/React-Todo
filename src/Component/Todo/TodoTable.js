import React from 'react'
import TodoPopulate from './TodoPopulate'
export default function TodoTable(props) {

    
    return (
        <section>
            <table className='table'>
                <thead className='thead-dark'>
                    <tr >
                        <th>#Id</th>
                        <th>Work</th>
                        <th>Status</th>
                        <th colspan='2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <TodoPopulate />
                </tbody>
            </table>
        </section>
    )
}
