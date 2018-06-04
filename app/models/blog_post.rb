# == Schema Information
#
# Table name: blog_posts
#
#  id               :bigint(8)        not null, primary key
#  title            :string
#  image            :string
#  overview         :string
#  content          :text
#  slug             :string
#  blog_category_id :bigint(8)
#  blog_author_id   :bigint(8)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class BlogPost < ApplicationRecord
end
