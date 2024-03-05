'use server';
import { addCookie, getCookie } from '../utils/cookies';

export const removeToDo = (id: number, formData: FormData) => {
  const cookie = getCookie('todo-list-tdd');
  const toDoList = [];
  if (cookie && cookie.value) {
    toDoList.push(...JSON.parse(cookie.value));
  }
  const newList = toDoList.filter((t) => t.id !== id);
  addCookie('todo-list-tdd', newList);
};
