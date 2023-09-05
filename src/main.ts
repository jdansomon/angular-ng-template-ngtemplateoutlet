import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: 
  `
   <div>You can see me</div>

  <ng-template #myTemplate>
      <div>You can't see me</div>
  </ng-template>

  <ng-container *ngTemplateOutlet="myTemplate">
    <p>i won't be displayed</p>
  </ng-container>


  `,
})
export class App {

}

bootstrapApplication(App);
