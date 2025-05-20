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
    throw new Error('Новое содержание задачи не может быть пустым');
  }

  const task = getTaskById(taskId);
  if (!task) {
    throw new Error(`Задача с id ${taskId} не найдена`);
  }

  task.content = newContent;
  return task;
}

// Экспортируем функцию
export default editTask;
