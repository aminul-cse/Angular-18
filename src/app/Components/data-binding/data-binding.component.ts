import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  //string, number, boolean, date

  courseName: string = 'Angular 18';
  stateName: string = 'Dhaka';
  inputType = 'checkbox';
  myClassName: string = 'bg-blue-700';
  textFormat: string = 'text-yellow-500 font-bold text-xl';
  rollNo: number = 123;
  isBangladeshi: boolean = true;
  currentDate: Date = new Date();

  firstName = signal("Aminul Islam");

  constructor() {}

  changeCourseName() {
    this.courseName = 'React Js';
    this.firstName.set("nickName Sakib");
  }

  showAlert(message: string) {
    alert(message);
  }
}
