import { IToDo } from '@/types/ToDo';
import MainPage from './components/pages/MainPage';

export default async function Home() {
  const toDoList: IToDo[] = [
    { id: 1, title: 'ToDo 1', description: 'description from ToDo 1' },
    { id: 2, title: 'ToDo 2', description: 'description from ToDo 2' },
    { id: 1, title: 'ToDo 3', description: 'description from ToDo 3' },
  ];

  return <MainPage ToDos={toDoList} />;
}
