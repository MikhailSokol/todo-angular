Rails.application.routes.draw do
  get "/" , to: redirect('/projects')
  get "/projects", to: "projects#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
