# == Schema Information
#
# Table name: blog_tags
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BlogTag < ApplicationRecord
end
