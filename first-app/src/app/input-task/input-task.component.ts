import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
   selector: 'app-input-task',
   templateUrl: './input-task.component.html',
   styleUrls: ['./input-task.component.css'],
})
export class InputTaskComponent implements OnInit {
   taskName: string = '';
   taskDesc: string = '';

   @Output('itCreated') itemCreated = new EventEmitter<{
      task_name: string;
      task_desc: string;
   }>();
   constructor() {}

   ngOnInit(): void {}

   onAddTask() {
      this.itemCreated.emit({
         task_name: this.taskName,
         task_desc: this.taskDesc,
      });
      this.taskName = '';
      this.taskDesc = '';
   }
}
