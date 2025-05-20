// Задача #3: Функция редактирования задачи

// Массив задач (имитация хранилища)
const tasks = [
  { id: 1, content: 'Сделать домашнее задание' },
  { id: 2, content: 'Погулять с собакой' },
];

// Функция для получения задачи по id
function getTaskById(taskId) {
  return tasks.find((task) => task.id === taskId);
}

// Функция для редактирования задачи
function editTask(taskId, newContent) {
  if (!newContent) {
    return { error: 'Новое содержание задачи не может быть пустым' }; // editTask function "throw new Error"
  }

  const task = getTaskById(taskId);
  if (!task) {
    return { error: `Задача с id ${taskId} не найдена` }; // editTask function "throw new Error"
  }

  task.content = newContent;
  return task;
}

// Экспортируем функцию
export default editTask;
