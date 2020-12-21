import {Action} from '@ngrx/store';

import {Todo} from '../../shared/models';

export const LOAD_TODOS = '[todos] Load Todos';
export const LOAD_TODOS_FAIL = '[todos] Load Todos Fail';
export const LOAD_TODOS_SUCCESS = '[todos] Load Todos Success';

export class LoadTodos implements Action {
    readonly type = LOAD_TODOS;
}

export class LoadTodosFail implements Action {
    readonly type = LOAD_TODOS_FAIL;
    constructor (public payload: any) {}
}

export class LoadTodosSuccess implements Action {
    readonly type = LOAD_TODOS_SUCCESS;
    constructor (public payload: Todo[]) {}
}

export const CREATE_TODO = '[Todos] Create Todo';
export const CREATE_TODO_SUCCESS = '[Todos] Create Todo Success';

export class CreateTodo implements Action {
    readonly type = CREATE_TODO;
    constructor (public payload: Todo) {}
}

export class CreateTodoSuccess implements Action {
    readonly type = CREATE_TODO_SUCCESS;
    constructor (public payload: Todo) {}
}

export const UPDATE_TODO = '[Todos] Update Todo';
export const UPDATE_TODO_SUCCESS = '[Todos] Update Todo Success';

export class UpdateTodo implements Action {
    readonly type = UPDATE_TODO;
    constructor (public payload: Todo) {}
}

export class UpdateTodoSuccess implements Action {
    readonly type = UPDATE_TODO_SUCCESS;
    constructor (public payload: Todo) {}
}

export const REMOVE_TODO = '[Todos] Remove Todo';
export const REMOVE_TODO_SUCCESS = '[Todos] Remove Todo Success';

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO;
    constructor (public payload: Todo) {}
}

export class RemoveTodoSuccess implements Action {
    readonly type = REMOVE_TODO_SUCCESS;
    constructor (public payload: Todo) {}
}

export type TodosAction = 
    | LoadTodos
    | LoadTodosFail
    | LoadTodosSuccess
    | CreateTodo
    | CreateTodoSuccess
    | UpdateTodo
    | UpdateTodoSuccess
    | RemoveTodo
    | RemoveTodoSuccess;
