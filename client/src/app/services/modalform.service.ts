import { HttpClient } from "@angular/common/http";
import { Injectable, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { tap } from "rxjs/internal/operators/tap";

export interface Todo{
  id:number,
  title:string
  todos:any[]
}
@Injectable({providedIn:'root'})
export class ModalformService implements OnInit{
  constructor(private http:HttpClient){
  }
  public todos:Todo[]=[]
  size = 400
  fetch ():Observable<Todo[]>{
      return this.http.get<Todo[]>('http://localhost:3000/projects')
         .pipe(tap((todos)=>{
           this.todos=todos
          }))
        
    }
  updateFetch(idCat:number,idText:number){
      const target= this.todos.filter((el)=>el.id === idCat)[0]
      const targetText = target.todos.filter((el)=>el.id === idText )[0]
      const body = {
        isCompleted:!targetText.isCompleted,
        isChecked:targetText.isChecked
      }
      return this.http.patch(`http://localhost:3000/projects/${idCat}/todo/${idText}`,body).subscribe((data:any={})=>{
         this.todos.map((el)=>{
          if(el.id === idCat){
            el.todos.map((elem)=>{
              if(elem.id === idText){
                elem.isCompleted= data.isCompleted
                elem.isChecked = data.isChecked
              }
            })
          }
        })
      })
    }
    checkingLengthOfArrayTodo(){
      this.todos.map((el)=>{
        if(el.todos.length>7){
          this.size = 400 +  (el.todos.length - 6 ) * 75
        }
      })
    }
  ngOnInit(){
  }
}

