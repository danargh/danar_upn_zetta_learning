import { Component } from '@angular/core';

@Component({
   selector: 'zetta-app',
   templateUrl: './zetta.component.html',
})
// yang punya tanda @ namanya decoratore untuk enhance class
export class ZettaComponent {
   title: string = 'Card Title';

   onAddTitle() {
      this.title = 'Title Changed';
   }
}
