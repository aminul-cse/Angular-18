import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.scss'
})
export class StructuralDirComponent {

  isDiv1Visible:boolean = true;
  isDiv2visible:boolean = true;

  num1:string = '';
  num2:string = '';

  isActive:boolean = false;
  selectedState:string = '';

  cityArray:string [] = ['Dhaka','Khulna','Barishal','Chittagong','Rangpur'];
  fruitArray:string [] = ['Apple','Banana','Orange','Mango','Stoberry','Jackfruit'];

  studentList:any [] = [
    {studentId:12, name:'AA', city:'Dhaka', isActive: false},
    {studentId:23, name:'BB', city:'Khulna', isActive: false},
    {studentId:34, name:'CC', city:'Barishal', isActive: true},
    {studentId:45, name:'DD', city:'Rajshashi', isActive: false},
    {studentId:57, name:'EE', city:'Rangpur', isActive: true},
  ];

  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }
  toggleDiv2() {
    this.isDiv2visible = !this.isDiv2visible;
  }
}
