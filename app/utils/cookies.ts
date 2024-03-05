import { cookies } from 'next/headers';

export const addCookie = (field: string, value: unknown) => {
  cookies().set(field, JSON.stringify(value));
};

export const getCookie = (field: string) => cookies().get(field);
