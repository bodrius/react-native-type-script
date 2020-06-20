import { ADD, REMOVE,UPDATE_TODO,  Obj, TodoActionInterfase } from "./Types"

const INITIAL_STATE: Obj[] = [{id:"1286234832454", title:"Моковые данные"}]

console.log('INITIAL_STATE', INITIAL_STATE)
export default (state = INITIAL_STATE, action: TodoActionInterfase):Obj[] => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case REMOVE:
            return state.filter((todo) => todo.id !== action.payload);
            // case UPDATE_TODO:
            //     return {...state, todos: state.map((todo:any)=> {
            //           if (todo.id === action.payload.id) {
            //             todo.title = action.payload.title;
            //           }
            //           return todo;
            //         }),
            //     }
        default:
            return state;
    }
}