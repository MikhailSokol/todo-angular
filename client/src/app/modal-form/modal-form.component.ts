import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { ModalformService, Todo } from '../services/modalform.service';
import { serialize } from 'class-transformer';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {
  constructor(public dialog: MatDialog ,public TodoServices:ModalformService,private http:HttpClient) {}
  
  public todo: FormGroup;
  visible: boolean
  text:any
  category:any
  obj:any
  categoryTitle:string
  status:string
  selectOption(title:string){
     if(title === '0'){
       this.categoryTitle=title
       this.visible=true
     }else{
      this.visible=false
      this.categoryTitle=title
     }
  }
  
  createFetch(){
    console.log(this.status)
   if(this.categoryTitle === '0' && this.status === 'VALID'){
    const body={
      text:this.text,
      title:this.category
   }
    this.http.post('http://localhost:3000/todos',body).subscribe((res)=> {
      this.obj = res
      this.TodoServices.todos.push(this.obj)
      this.TodoServices.checkingLengthOfArrayTodo()
  });
   }else if(this.categoryTitle !== '0' && this.categoryTitle && this.text.length>2){
    const body={
      text:this.text,
      title:this.categoryTitle
   }
    this.http.post('http://localhost:3000/todos',body).subscribe((res:any={})=>{
     this.obj = res ;
      this.TodoServices.todos.map((el)=>{
        if(el.id === res.category_id){
          el.todos.push(res)
        }
        this.TodoServices.checkingLengthOfArrayTodo()
    })
    })
  }else if(this.status!=='VALID'){
    alert('Введите задачу и/или категорию')
  }
}
 ngOnInit() {
     this.todo = new FormGroup({
       text:new FormControl('',[Validators.required,Validators.minLength(3)]),
       category:new FormControl('',[Validators.required,Validators.minLength(3)])
     })
     this.todo.valueChanges.subscribe((el)=>{
        this.text=el.text
        this.category=el.category
     this.todo.statusChanges.subscribe((stat:string)=>{
       this.status = stat
     })
    })
    
 }
}
