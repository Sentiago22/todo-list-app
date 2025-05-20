// Задача #4: Функция удаления задачи

// Имитация хранилища задач
const tasks = [
  { id: 1, content: 'Сделать домашнее задание' },
  { id: 2, content: 'Погулять с собакой' },
];

// Функция для удаления задачи по id
// add logging and improve error message
function deleteTask(taskId) {
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index === -1) {
    return { error: `Задача с id ${taskId} не найдена` };
  }

  tasks.splice(index, 1);
  return { success: true, message: 'Задача успешно удалена' };
}

export default deleteTask;
