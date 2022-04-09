import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {ModalFormComponent} from './modal-form/modal-form.component';
import { ModalformService } from './services/modalform.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
 
 constructor(private http:HttpClient,public dialog: MatDialog,public TodoServices:ModalformService){
   }

  openDialog() {
      this.dialog.open(ModalFormComponent);
      
  }
  ngOnInit(){
    this.TodoServices.fetch().subscribe((val)=>{
      this.TodoServices.checkingLengthOfArrayTodo()
    })
    
  }
}
