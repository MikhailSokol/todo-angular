require 'json'
class ProjectsController < ApplicationController
  def index
    @cats= Category.all
  end 
    def update
      todoUpdate = Todo.find_by(id: params[:id])
     if todoUpdate.isCompleted == true 
      todoUpdate.isCompleted = false
      todoUpdate.isChecked='false'
      todoUpdate.save
     else 
      todoUpdate.isCompleted = true
      todoUpdate.isChecked='checked'
      todoUpdate.save
     end
     render json:[params[:id],todoUpdate.isCompleted]
    end
end

