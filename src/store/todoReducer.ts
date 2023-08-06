export type TodoType = {
  id: string;
  completed: boolean;
  title: string;
  visible: boolean;
};

type ActionConstructor<a, b> = {
  type: a;
  payload: b;
};

type State = {
  todos: Array<TodoType>;
};

enum TypeActioinsType {
  typeActionAddTodo = "ADD_TODO",
  typeActionDelTodo = "DEL_TODO",
}

type AddTodoCreatorType = ActionConstructor<
  TypeActioinsType.typeActionAddTodo,
  TodoType
>;
type DelTodoCreatorType = ActionConstructor<
  TypeActioinsType.typeActionDelTodo,
  string
>;

type ActioType = AddTodoCreatorType | DelTodoCreatorType;

const initialState: State = {
  todos: [],
};

function TodosReducer(state: State = initialState, action: ActioType): State {
  switch (action.type) {
    case TypeActioinsType.typeActionAddTodo: {
      state.todos.push(action.payload);
      return { ...state };
    }
    case TypeActioinsType.typeActionDelTodo: {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: newTodos };
    }
    default: {
      return { ...state };
    }
  }
}

export const addTodoCreator = (todo: TodoType): AddTodoCreatorType => ({
  type: TypeActioinsType.typeActionAddTodo,
  payload: todo,
});

export const delTodoCreator = (id: string): DelTodoCreatorType => ({
  type: TypeActioinsType.typeActionDelTodo,
  payload: id,
});

export default TodosReducer;
