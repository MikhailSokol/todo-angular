require 'json'
class ProjectsController < ApplicationController
  def index
    file = File.read('app/controllers/message.json')
    @data_hash = JSON.parse(file)
    #puts data_hash
    #render json:data_hash 
  end 
end
