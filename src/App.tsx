import React from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { TodoStats } from './components/TodoStats';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    todos,
    filter,
    stats,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    setFilter
  } = useTodos();

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">React Todo</h1>
        <p className="app-subtitle">高效管理你的任务清单</p>
      </header>
      
      <main className="app-content">
        <TodoInput onAdd={addTodo} />
        
        {stats.total > 0 && (
          <>
            <TodoStats stats={stats} />
            <TodoFilter
              currentFilter={filter}
              onFilterChange={setFilter}
              stats={stats}
              onClearCompleted={clearCompleted}
            />
          </>
        )}
        
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </main>
      
      <footer className="app-footer">
        <p className="beian-info">
          <a 
            href="https://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="beian-link"
          >
            陕ICP备2023000796号-1
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;