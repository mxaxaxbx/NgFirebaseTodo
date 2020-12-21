import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Output,EventEmitter, SimpleChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Todo} from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnChanges {

  @Input()
  item: Todo;

  @Output()
  remove = new EventEmitter<Todo>();

  @Output()
  update = new EventEmitter<Todo>();

  isEditing = false;

  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.todoForm.valid) {
      const {description} = this.todoForm.value,
        todo = {...this.item, description};

      this.update.emit(todo);
    }
  }

  toggleIsCompleted() {
    this.update.emit({
      ...this.item,
      isCompleted: !this.item.isCompleted
    });
  }

  toggleIsEditing() {
    this.isEditing = !this.isEditing;
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item && changes.item.firstChange) {
      this.todoForm = this.formBuilder.group({
        description: [this.item.description, Validators.required]
      });
    }
  }

}
