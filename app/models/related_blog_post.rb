# == Schema Information
#
# Table name: related_blog_posts
#
#  id              :bigint(8)        not null, primary key
#  blog_post_id    :bigint(8)
#  related_post_id :bigint(8)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class RelatedBlogPost < ApplicationRecord
end
