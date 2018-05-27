Rails.application.routes.draw do
  resources :services
  resources :case_studies
  get 'about' => 'pages#about'
  get 'services' => 'pages#services'
  get 'projects' => 'pages#projects'
  get 'publications' => 'pages#publications'
  get 'contact' => 'pages#contact'

  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
