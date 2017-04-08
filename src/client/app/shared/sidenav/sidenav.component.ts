import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'wb-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
})
export class SidenavComponent {

  @Output() onClose = new EventEmitter();

  close(): void {
    this.onClose.emit({});
  }

}
