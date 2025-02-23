import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";
  @Input() btnText: string = "";
  @Output("submit") onSubmit = new EventEmitter();
  
  submit() {
    this.onSubmit.emit();
  }
}
