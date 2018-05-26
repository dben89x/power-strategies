class PagesController < ApplicationController
  def home
    @caseStudies = [{
      id: 1,
      slug: 1,
      title: Faker::Lorem.words(2).join(' ').titleize,
      overview: Faker::Lorem.words(15).join(' ').capitalize,
      url: 'assets/stock/gambling.jpg'
    },{
      id: 2,
      slug: 2,
      title: Faker::Lorem.words(2).join(' ').titleize,
      overview: Faker::Lorem.words(15).join(' ').capitalize,
      url: 'assets/stock/gambling.jpg'
    },{
      id: 3,
      slug: 3,
      title: Faker::Lorem.words(2).join(' ').titleize,
      overview: Faker::Lorem.words(15).join(' ').capitalize,
      url: 'assets/stock/gambling.jpg'
    },{
      id: 4,
      slug: 4,
      title: Faker::Lorem.words(2).join(' ').titleize,
      overview: Faker::Lorem.words(15).join(' ').capitalize,
      url: 'assets/stock/gambling.jpg'
    }]
  end

  def who_we_are

  end

  def what_we_do

  end

  def projects_partners

  end

  def publications

  end

  def contact_us

  end

end
