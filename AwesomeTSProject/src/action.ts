import {ADD, REMOVE, Obj, TodoActionInterfase, UPDATE_TODO} from './Types';

export const addTodo = (value: Obj): TodoActionInterfase => ({
  type: ADD,
  payload: value,
});

export const removeTodo = (id: string): TodoActionInterfase => ({
  type: REMOVE,
  payload: id,
});

export const editTodos = (id: string, title: string): TodoActionInterfase => ({
  type: UPDATE_TODO,
  payload: {id, title}
});
