if Rails.env.development?
  TeamMember.delete_all
  Project.delete_all
end


10.times do
  TeamMember.create(
    name: Faker::GameOfThrones.character,
    image: 'https://s3.amazonaws.com/power-strategies/stock/jeslyn-chanchaleune.png',
    description: Faker::Lorem.paragraph
  )
end

Project.create(
  title: Faker::Lorem.words(2).join(' ').titleize,
  image: 'https://s3.amazonaws.com/power-strategies/stock/casino.jpg',
  overview: Faker::Lorem.words(20).join(' ').capitalize,
  client_text: Faker::Lorem.words(50).join(' ').capitalize,
  solution_text: Faker::Lorem.words(50).join(' ').capitalize,
)
Project.create(
  title: Faker::Lorem.words(2).join(' ').titleize,
  image: 'https://s3.amazonaws.com/power-strategies/stock/gambling.jpg',
  overview: Faker::Lorem.words(20).join(' ').capitalize,
  client_text: Faker::Lorem.words(50).join(' ').capitalize,
  solution_text: Faker::Lorem.words(50).join(' ').capitalize,
)
Project.create(
  title: Faker::Lorem.words(2).join(' ').titleize,
  image: 'https://s3.amazonaws.com/power-strategies/stock/wires.jpg',
  overview: Faker::Lorem.words(20).join(' ').capitalize,
  client_text: Faker::Lorem.words(50).join(' ').capitalize,
  solution_text: Faker::Lorem.words(50).join(' ').capitalize,
)
