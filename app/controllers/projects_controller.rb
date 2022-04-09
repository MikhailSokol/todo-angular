require 'json'
class ProjectsController < ApplicationController
  def index
     arr = Category.all
    render json:arr
    
  end 
    def update
      puts params
      todoUpdate = Todo.find_by(id: params[:id])
      todoUpdate.isCompleted = params[:isCompleted]
      todoUpdate.isChecked = params[:isChecked]
      todoUpdate.save
    #  if todoUpdate.isCompleted == true 
    #   todoUpdate.isCompleted = false
    #   todoUpdate.isChecked='false'
    #   todoUpdate.save
    #  else 
    #   todoUpdate.isCompleted = true
    #   todoUpdate.isChecked='checked'
    #   todoUpdate.save
    #  end
    #  render json:[params[:id],todoUpdate.isCompleted]
      render json: todoUpdate
   end
end

