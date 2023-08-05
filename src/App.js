import Header from "./components/header";
import LeftBar from "./components/leftBar";
import RightBar from "./components/rightBar";

import useTodoState from './state/todo'

function App() {
  
  const todoState = useTodoState([]) // Создание пустого массива Todo

  return (
    <div id="app">
      <Header></Header>
      <LeftBar todoState={todoState}></LeftBar>
      <RightBar todoState={todoState}></RightBar>      
    </div>
  );
}

export default App;
