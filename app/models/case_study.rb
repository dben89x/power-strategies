# == Schema Information
#
# Table name: case_studies
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string
#  overview   :string
#  url        :string
#  slug       :string
#

class CaseStudy < ApplicationRecord
end
