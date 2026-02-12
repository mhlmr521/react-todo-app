import React, { useState } from 'react';
import { Check, X, Edit2, Save } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ 
  todo, 
  onToggle, 
  onDelete, 
  onEdit 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText);
    }
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        className={`toggle-button ${todo.completed ? 'checked' : ''}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed && <Check size={16} />}
      </button>

      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleEdit}
            className="edit-input"
            autoFocus
            maxLength={100}
          />
          <button onClick={handleEdit} className="save-button">
            <Save size={16} />
          </button>
        </div>
      ) : (
        <>
          <span 
            className="todo-text"
            onDoubleClick={() => !todo.completed && setIsEditing(true)}
          >
            {todo.text}
          </span>
          <div className="todo-actions">
            {!todo.completed && (
              <button
                onClick={() => setIsEditing(true)}
                className="edit-button"
              >
                <Edit2 size={16} />
              </button>
            )}
            <button
              onClick={() => onDelete(todo.id)}
              className="delete-button"
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};