import { submitNewToDo } from '@/app/server-actions/submitNewToDo';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const toDo = await req.json();
  const newToDo = submitNewToDo(toDo);
  return NextResponse.json({ message: 'New ToDo added to the list.', newToDo });
};
