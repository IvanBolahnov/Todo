import React from 'react'

const List = ({todoState}) => {

  return (
    <ul className='todos'>
      {
        todoState.todos.map((todo, index) => {
          return (
            <li key={index.toString()} className={`todo todo--status${todo.status}`}>
              <button className='todo__content' onClick={() => todoState.setActive(index)}>{todo.text}</button>
              <button className='todo__ready' onClick={() => {todoState.setStatus(index, 2)}}>
                <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 11L14 23L8 17" strokeWidth="3"/>
                </svg>
              </button>
              <button className='todo__delete' onClick={() => {todoState.del(index)}}>
                <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 11L23 23M23 11L11 23" strokeWidth="3"/>
                </svg>
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default List