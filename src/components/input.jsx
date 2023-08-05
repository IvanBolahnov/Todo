import React, { useState } from 'react'

const InputTodo = ({todoState}) => {
  const [value, setValue] = useState('')
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        todoState.add(value)
        setValue('')
      }} className="left-bar__input">
      <input type="text" value={value} placeholder="Новая задача" onChange={(e) => {setValue(e.target.value)}}/>
      <button type='submit'>
        <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.97728 16.625V0.897736H10.5455V16.625H6.97728ZM0.897736 10.5455V6.97728H16.625V10.5455H0.897736Z"/>
        </svg>
      </button>
    </form>
  )
}

export default InputTodo