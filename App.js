import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoHeadBlock from './components/TodoHead.js';
import TodoList from './components/TodoList.js';
import TodoTemplate from './components/TodoTemplate.js';
import TodoCreate from './components/TodoCreate.js';
import { TodoProvider } from './components/TodoContext.js';

const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `;


function App() {
  return <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeadBlock/>
        <TodoList></TodoList>
        <TodoCreate/>
      </TodoTemplate>;
  </TodoProvider>
  
}

export default App;
