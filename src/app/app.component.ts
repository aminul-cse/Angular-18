import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { StructuralDirComponent } from './Components/directive/structural-dir/structural-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddEmployeeComponent,EmployeeListComponent,DataBindingComponent,StructuralDirComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
