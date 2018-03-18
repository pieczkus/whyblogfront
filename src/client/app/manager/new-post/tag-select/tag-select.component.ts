import { Component, EventEmitter, Output } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'tag-select',
  templateUrl: 'tag-select.component.html',
  styleUrls: ['tag-select.component.css']
})
export class TagSelectComponent {

  tags: String[] = [];
  separatorKeysCodes = [ENTER, COMMA];

  @Output() tagsUpdated: EventEmitter<String[]> = new EventEmitter<String[]>();

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.tagsUpdated.emit(this.tags);
  }

  remove(fruit: any): void {
    const index = this.tags.indexOf(fruit);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
