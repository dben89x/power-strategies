Rails.application.routes.draw do
  resources :projects
  resources :requests
  resources :team_members
  resources :related_blog_posts
  resources :services
  resources :blog_post_tags
  resources :blog_tags
  resources :blog_posts
  resources :blog_authors
  resources :blog_categories
  resources :case_studies
  get 'about' => 'pages#about'
  get 'our-services' => 'pages#services'
  get 'our-projects' => 'pages#projects'
  get 'publications' => 'pages#publications'
  get 'contact' => 'pages#contact'

  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
