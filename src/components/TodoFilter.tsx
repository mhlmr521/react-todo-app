import React from 'react';
import { FilterType } from '../types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
  stats,
  onClearCompleted
}) => {
  const filters: { key: FilterType; label: string; count?: number }[] = [
    { key: 'all', label: '全部', count: stats.total },
    { key: 'active', label: '进行中', count: stats.active },
    { key: 'completed', label: '已完成', count: stats.completed }
  ];

  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={`filter-button ${currentFilter === filter.key ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.key)}
          >
            {filter.label}
            {filter.count !== undefined && (
              <span className="count-badge">{filter.count}</span>
            )}
          </button>
        ))}
      </div>
      
      {stats.completed > 0 && (
        <button 
          className="clear-completed"
          onClick={onClearCompleted}
        >
          清除已完成 ({stats.completed})
        </button>
      )}
    </div>
  );
};