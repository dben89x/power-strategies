Rails.application.routes.draw do
  resources :case_studies
  get 'pages/home'
  get 'pages/who-we-are' => 'pages#who_we_are'
  get 'pages/what-we-do' => 'pages#what_we_do'
  get 'pages/projects-partners' => 'pages#projects_partners'
  get 'pages/publications' => 'pages#publications'
  get 'pages/contact-us' => 'pages#contact_us'

  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
