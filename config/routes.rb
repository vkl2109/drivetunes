Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/users', to: 'users#index'
  get '/users/:google_id', to: 'users#show'
  post '/users', to: 'users#create'
  patch '/users/:name/update', to: 'users#update'
  delete '/users/:name/delete', to: 'users#destroy'


end
