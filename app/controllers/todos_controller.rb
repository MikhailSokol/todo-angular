class TodosController < ApplicationController
  def create
    isExist = Category.where("title = ?" ,params[:title]).all
    if isExist[0] == nil 
        id = Category.create({title:params[:title]})
        Todo.create({text:params[:text],category_id:id.id,isCompleted:false,isChecked:'false'})
        category = Category.last
        render json: category 
    end
    if (isExist[0] != nil) == true
       Todo.create({text:params[:text],category_id:isExist[0].id,isCompleted:false,isChecked:'false'})
       lastTodo= Todo.last
       render json: lastTodo  
    end
    # lastTodo= Category.last
    # # cateroryFromTodo = Category.where("id = ?" ,lastTodo.category_id)
    # category = Category.last
    # render json: lastTodo  
    
    
    end 
end
