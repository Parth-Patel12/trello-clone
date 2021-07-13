import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import sampleData from './mockData/sampleData';
import reportWebVitals from './reportWebVitals';
import Column from './column.jsx'

class TrelloClone extends React.Component {
  state = sampleData;

  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />;
    });
  }
}

ReactDOM.render(<TrelloClone />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
