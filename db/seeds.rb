10.times do
  TeamMember.create(
    name: Faker::GameOfThrones.character,
    image: 'https://s3.amazonaws.com/power-strategies/stock/jeslyn-chanchaleune.png',
    description: Faker::Lorem.paragraph
  )
end

4.times do
  CaseStudy.create(
    title: Faker::Lorem.words(2).join(' ').titleize,
    overview: Faker::Lorem.words(15).join(' ').capitalize,
    url: 'https://s3.amazonaws.com/power-strategies/stock/gambling.jpg'
  )
end
