import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-back-button',
  imports: [],
  templateUrl: './back-button.html',
  styleUrl: './back-button.scss'
})
export class BackButton {
  @Output() back = new EventEmitter<void>();

  onBackClick() {
    this.back.emit();
  }
}
