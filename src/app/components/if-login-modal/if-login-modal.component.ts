import { Component } from '@angular/core';

@Component({
  selector: 'app-if-login-modal',
  templateUrl: './if-login-modal.component.html',
  styleUrls: ['./if-login-modal.component.less'],
})
export class IfLoginModalComponent {
  public isVisible: boolean = false;
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
