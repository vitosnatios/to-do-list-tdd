'use server';
import { IToDo } from '@/types/ToDo';
import { addCookie, getCookie } from '../utils/cookies';

export const submitNewToDo = (formData: FormData) => {
  const title = String(formData.get('title'));
  const description = String(formData.get('description'));
  const form: IToDo = { id: 0, title, description };
  let toDoCookies = getCookie('todo-list-tdd')?.value;
  if (toDoCookies) {
    toDoCookies = JSON.parse(toDoCookies as string);
    if (toDoCookies && Array.isArray(toDoCookies) && toDoCookies.length) {
      const newToDo = { ...form, id: (toDoCookies as any).at(-1).id + 1 };
      toDoCookies.push(newToDo);
      addCookie('todo-list-tdd', toDoCookies);
      return newToDo;
    }
  }
  addCookie('todo-list-tdd', [form]);
  return form;
};
