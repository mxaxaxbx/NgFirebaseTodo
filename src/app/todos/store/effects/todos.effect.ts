import { Injectable } from '@angular/core';

import {Effect, Actions, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, switchMap, catchError} from 'rxjs/operators';

import * as todoAction from '../actions/todos.action';
import * as fromServices from '../../shared/services';
import {Todo} from '../../shared/models';

@Injectable()
export class TodosEffect {

    constructor (
        private action$: Actions,
        private todosService: fromServices.TodoService
    ) {}

    @Effect()
    loadTodo$ = this.action$
        .pipe(
            ofType(todoAction.LOAD_TODOS),
            switchMap(() => {
                return this.todosService
                    .getTodos()
                    .pipe(
                        map(todos => new todoAction.LoadTodosSuccess(todos)),
                        catchError(error => of (new todoAction.LoadTodosFail(error)))
                    )
            })
        );

    @Effect()
    createTodo$ = this.action$
        .pipe(
            ofType(todoAction.CREATE_TODO),
            map((action: todoAction.CreateTodo) => action.payload),
            switchMap((todo: Todo) => {
                return this.todosService
                    .addTodo(todo)
                    .pipe(
                        map(createdTodo => new todoAction.CreateTodoSuccess(createdTodo))
                        // catch error
                    )
            })
        );

    @Effect()
    updateTodo$ = this.action$
        .pipe(
            ofType(todoAction.UPDATE_TODO),
            map((action: todoAction.UpdateTodo) => action.payload),
            switchMap((todo: Todo) => {
                return this.todosService
                    .updateTodo(todo._id, todo)
                    .pipe(
                        map(() => new todoAction.UpdateTodoSuccess(todo))
                        // catch error
                    )
            })
        );

    @Effect()
    removeTodo$ = this.action$
        .pipe(
            ofType(todoAction.REMOVE_TODO),
            map((action: todoAction.RemoveTodo) => action.payload),
            switchMap((todo: Todo) => {
                return this.todosService
                    .removeTodo(todo._id)
                    .pipe(
                        map(() => new todoAction.RemoveTodoSuccess(todo))
                    )
            })
        );

}
