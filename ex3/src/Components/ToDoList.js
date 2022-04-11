import React from 'react';
import WithFetching from './WithFetching';

const ToDoList = ({data}) => {
    return <ul>
        {data.map(item =>{
           return <li key={item.id}>{item.title}</li>
        })}
    </ul>;
}



export default WithFetching(ToDoList , "todos") ;