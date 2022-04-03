Rails.application.routes.draw do
  get "/" , to: redirect('/projects')
  post "/todos", to: "todos#create"
  get "/projects", to: "projects#index"
  patch "/projects/:id/todo/:id", to: "projects#update"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
