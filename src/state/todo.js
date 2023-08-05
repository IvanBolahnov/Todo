import { useState } from "react"

const useTodoState = (value) => {
  const [todos, setTodos] = useState(value)
  const [active, setActive] = useState(null)

  return {
    todos, // Возвращает массив Todo
    active, // Возвращает индекс активного (выбранного) Todo
    
    // Добавление Todo
    add: (text) => {
      if (text) {
        setTodos([{text, status: '0', description: ''}, ...todos])
        if (active !== null) {
          setActive(active+1)
        }
      }
    },

    // Удаление Todo
    del: (index) => {
      setTodos(todos.filter((el, elIndex) => {return elIndex !== index}))
      if (index < active) {
        setActive(active - 1)
      } else {
        setActive(null)
      }
    },

    // Изменение статуса Todo
    setStatus: (index, status) => {
      todos[index].status = status
      setTodos([...todos])
    },

    // Изменение описание Todo
    setDescription: (index, description) => {
      todos[index].description = description
      setTodos([...todos])
    },

    // Изменение текста Todo
    setText: (index, text) => {
      todos[index].text = text
      setTodos([...todos])
    },

    // Изменение активного Todo
    setActive: (index) => {
      setActive(index)
    },
  }
}

export default useTodoState