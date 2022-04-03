class TodosController < ApplicationController
  def create
    isExist = Category.where("title = ?" ,params[:title])
    if isExist[0] == nil 
        id = Category.create({title:params[:title]})
        Todo.create({text:params[:text],category_id:id.id,isCompleted:false,isChecked:'false'})
    end
    if (isExist[0] != nil) == true
       Todo.create({text:params[:text],category_id:isExist[0].id,isCompleted:false,isChecked:'false'})
    end
    lastTodo= Todo.joins(:category).last
    cateroryFromTodo = Category.where("id = ?" ,lastTodo.category_id)
    render json:[lastTodo,cateroryFromTodo[0].title]
    end 
end
