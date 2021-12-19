import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Student } from '../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public student: Student;
  public edit: boolean = false;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.edit = true
      this.student = this.data.getMessageById(parseInt(id, 10));
      return
    }
    this.student = {id: this.data.getNewId(),
      studentName:"",
      career: "",
      controlNumber: "",
      group: "",
      semester: 1,
      read: true
    }
  }

  addStudent(){
    this.data.addStudent(this.student)
    this.location.back()
  }

  updateStudent(){
    this.data.updateStudent(this.student)
    this.location.back()
  }
  deleteStudent(){
    this.data.deleteStudent(this.student)
    this.location.back()
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Lista de estudiantes' : '';
  }
}
