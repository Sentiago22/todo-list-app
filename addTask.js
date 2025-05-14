// Task #2: Add Task functionality

function addTask(taskContent) {
  if (!taskContent) {
    throw new Error('Task content cannot be empty.');
  }

  return `New task added: ${taskContent}`;
}

export default addTask;
