source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.6'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'
gem "react_on_rails", "~> 11.0"

gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'

# ==========================
gem 'faker'
gem 'figaro'
gem 'annotate'

gem 'clipboard-rails'
gem 'erb2haml'
gem 'haml'
gem 'devise'
gem 'browser', '~> 2.5.2'
gem "foreman", "~> 0.64.0"

gem "friendly_id", "~> 5.2"
gem "rails_admin", "~> 1.3"
gem "toastr-rails", "~> 1.0"
gem "cancancan", "~> 2.2"
gem "gibbon", "~> 3.2"
gem "carrierwave", "~> 0.10.0"
gem "carrierwave-crop", "~> 0.1.2"
gem 'fog', require: 'fog/aws'

gem 'mini_racer', platforms: :ruby
gem 'libv8', '~> 6.3'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Added at 2018-06-24 04:34:56 -0700 by doug:
gem "meta-tags", "~> 2.10"
