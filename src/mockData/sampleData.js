const sampleData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'wake up earlys' },
    'task-2': { id: 'task-2', content: 'exercise' },
    'task-3': { id: 'task-3', content: 'eat healthy' },
    'task-4': { id: 'task-4', content: 'learn react' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: ['task-4'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-3'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default sampleData;
