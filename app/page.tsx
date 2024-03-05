import MainPage from './components/pages/MainPage';
import { getCookie } from './utils/cookies';

export default async function Home() {
  const cookie = getCookie('todo-list-tdd');
  const toDoList = [];
  if (cookie && cookie.value) {
    toDoList.push(...JSON.parse(cookie.value));
  }
  return <MainPage ToDos={toDoList} />;
}
