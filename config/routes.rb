Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/users', to: 'users#index'
  get '/users/:google_id', to: 'users#show'
  post '/users/:google_id', to: 'users#create'
  patch '/users/:name/update', to: 'users#update'
  delete '/users/:name/delete', to: 'users#destroy'

  get '/artists', to: 'artists#index'
  get '/artists/:artist', to: 'artists#show'
  post '/artists/:artist', to: 'artists#create'
  patch '/artists/:artist/update', to: 'artists#update'
  delete '/artists/:artist/delete', to: 'artists#destroy'

  get '/albums', to: 'albums#index'
  get '/albums/:album', to: 'albums#show'
  post '/albums/:album', to: 'albums#create'
  patch '/albums/:album/update', to: 'albums#update'
  delete '/albums/:album/delete', to: 'albums#destroy'

end
