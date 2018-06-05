# == Schema Information
#
# Table name: projects
#
#  id            :bigint(8)        not null, primary key
#  name          :string
#  client        :string
#  client_text   :text
#  solution_text :text
#  content       :text
#  slug          :string
#

class Project < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: [:slugged, :finders]

end
