Paintr::Application.routes.draw do
  root :to => 'static_pages#index'

  post '/create' => 'static_pages#create'

  get '/images' => 'static_pages#all'

  get '/image/:id' => 'static_pages#image', :as => 'image'
end
