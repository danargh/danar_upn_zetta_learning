import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   taskList = [
      { taskName: 'Mengerjakan MHP', taskDesc: 'deadline jam 12 malam' },
   ];
   onAddTask(taskData: { task_name: any; task_desc: any }) {
      this.taskList.push({
         taskName: taskData.task_name,
         taskDesc: taskData.task_desc,
      });
   }
}
