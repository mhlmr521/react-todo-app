import React from 'react';
import { CheckCircle, Circle, BarChart3 } from 'lucide-react';

interface TodoStatsProps {
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

export const TodoStats: React.FC<TodoStatsProps> = ({ stats }) => {
  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="todo-stats">
      <div className="stats-header">
        <BarChart3 size={20} />
        <h3>任务统计</h3>
      </div>
      
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-icon total">
            <BarChart3 size={16} />
          </div>
          <div className="stat-content">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">总任务</span>
          </div>
        </div>
        
        <div className="stat-item">
          <div className="stat-icon active">
            <Circle size={16} />
          </div>
          <div className="stat-content">
            <span className="stat-number">{stats.active}</span>
            <span className="stat-label">进行中</span>
          </div>
        </div>
        
        <div className="stat-item">
          <div className="stat-icon completed">
            <CheckCircle size={16} />
          </div>
          <div className="stat-content">
            <span className="stat-number">{stats.completed}</span>
            <span className="stat-label">已完成</span>
          </div>
        </div>
      </div>
      
      {stats.total > 0 && (
        <div className="completion-rate">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${completionRate}%` }}
            />
          </div>
          <span className="completion-text">完成率: {completionRate}%</span>
        </div>
      )}
    </div>
  );
};