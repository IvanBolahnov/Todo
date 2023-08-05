import React from 'react'
import '../styles/rightBar.scss'

const RightBar = ({todoState}) => {
  // Активный Todo
  const todo = todoState.todos[todoState.active]
  
  // Если нет активного Todo
  if (todoState.active === null) {
    return (
      <section className='right-bar'>
        <h3 className='right-bar__title'>Задача не выбрана</h3>
      </section>    
    )
  }
  
  // Если есть активный Todo
  return (
    <section className='right-bar'>
      <label className='right-bar__title'>
        <h3 className='right-bar__title'>{`Задача:`}</h3>
        <input type="text"
        value={todo.text} onChange={(e) => {
          todoState.setText(todoState.active, e.target.value)
        }}/>
      </label>
      <span className='right-bar__status'>{`Статус: `}</span>
      <select className='right-bar__status-select' value={todo.status} onChange={(e) => {todoState.setStatus(todoState.active, e.target.value)}}>
        <option className='right-bar__status-select--item' value='0'>Ожидает</option>
        <option className='right-bar__status-select--item' value='1'>В процессе</option>
        <option className='right-bar__status-select--item' value='2'>Выполнена</option>
      </select>
      <textarea className='right-bar__description' value={todo.description} onChange={(e) => {
        todoState.setDescription(todoState.active, e.target.value)
      }}>
        {todo.description}
      </textarea>
    </section>
  )
}

export default RightBar