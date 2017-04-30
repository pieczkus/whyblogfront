import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'wb-manager-post-list',
  templateUrl: 'manager-post-list.component.html',
  styleUrls: ['manager-post-list.component.css'],
})
export class ManagerPostListComponent {
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
}