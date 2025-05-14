// Task #2: Add Task functionality

function addTask(taskContent) {
  if (!taskContent) {
    alert('Please enter a task.'); // UI alert as request Hieuminh0500
    return null; // Required return so ESLint doesn't have errors
  }

  return `New task added: ${taskContent}`;
}

export default addTask;
