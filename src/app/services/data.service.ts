import { Injectable } from '@angular/core';

export interface Student {
  studentName: string;
  career: string;
  controlNumber: string;
  semester: number;
  group: string
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public students: Student[] = [
    {
      studentName: 'Jaime de Jesús Pacheco Rebollar',
      career: 'Ingeniería informática',
      controlNumber: '17920350',
      group: "I9A",
      read: false,
      semester: 9,
      id: 0
    },
    
  ];
  currentId = this.students.length

  constructor() { }

  public getMessages(): Student[] {
    return this.students;
  }

  public getMessageById(id: number): Student {
    return this.students[id];
  }

  public addStudent( student: Student){
    this.students.push(student)
    this.currentId++
  }
  public deleteStudent( student: Student){
    console.log('looking for student',student);
    let index = this.students.indexOf(student)
    if (index < 0) {
      return
    }
    console.log('found at', index);
    
    this.students.splice(index, 1)
  }

  public updateStudent( student: Student){
    console.log('looking for student',student);
    let index = this.students.indexOf(student)
    if (index < 0) {
      return
    }
    console.log('found at', index);
    
    this.students[index] = student
  }

  public getNewId(){
    return this.currentId
  }

}
