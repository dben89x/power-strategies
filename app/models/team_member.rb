# == Schema Information
#
# Table name: team_members
#
#  id          :bigint(8)        not null, primary key
#  name        :string
#  image       :string
#  position    :string
#  description :text
#  order       :integer
#

class TeamMember < ApplicationRecord
end
