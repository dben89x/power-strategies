# == Schema Information
#
# Table name: requests
#
#  id         :bigint(8)        not null, primary key
#  type       :string
#  name       :string
#  email      :string
#  number     :string
#  message    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Request < ApplicationRecord
end
