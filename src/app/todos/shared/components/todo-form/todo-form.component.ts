import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnChanges, OnInit {

  @Input()
  isDisabled = false;

  @Output()
  addTodo = new EventEmitter<any>();

  todoForm = this.formBuilder.group({
    description: [{value: '', disabled: true}, [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.todoForm.valid) {
      const todo = {...this.todoForm.value, isCompleted: false};
      this.addTodo.emit(todo);
      this.todoForm.reset();
    }
  }

  ngOnChanges (changes: SimpleChanges) {
    if (changes.isDisabled) {
      const isDisabled = changes.isDisabled.currentValue,
        descriptionInput = this.todoForm.get('description');

      if (isDisabled) {
        descriptionInput.disable();
      } else {
        descriptionInput.enable();
      }
    }
  }

}
