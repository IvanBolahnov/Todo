import React from 'react'

import List from './list'
import InputTodo from './input'
import '../styles/leftBar.scss'

const LeftBar = ({todoState}) => {
  return (
    <aside className='left-bar'>
      <h3>Список задач</h3>
      <InputTodo todoState={todoState}></InputTodo>
      <List todoState={todoState}></List>
    </aside>
  )
}

export default LeftBar