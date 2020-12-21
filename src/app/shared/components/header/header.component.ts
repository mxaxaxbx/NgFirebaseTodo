import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  isAuthenticated: boolean;

  @Output()
  signOutClicked = new EventEmitter<void>();

  readonly rParkGithubUrl = 'https://github.com/r-park';
  readonly rParkAppUrl = 'https://ng2-todo-app.firebaseapp.com/';
  readonly rAuthorGithubUrl = 'https://github.com/mxaxaxbx';
  readonly appGithubUrl = 'https://github.com/yuliankarapetkov/todo-mean-app';

  showInfo = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
  }

  signOut() {
    this.signOutClicked.emit();
  }

}
