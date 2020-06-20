
export const ADD = "todo/ADD"
export const REMOVE = "todo/REMOVE"
export const UPDATE_TODO = "todo/UPDATE_TODO";

export interface Obj {
    id: string,
    title: string
}


interface addTodo {
    type: typeof ADD,
    payload: Obj,
}

interface deleteTodo {
    type: typeof REMOVE,
    payload: string,
}

interface edit {
    type: typeof UPDATE_TODO,
    payload:Obj
}

export type TodoActionInterfase = addTodo | deleteTodo | edit
