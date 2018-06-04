class CreateResources < ActiveRecord::Migration[5.1]
  def change
    create_table :blog_categories do |t|
      t.string :title
      t.timestamps
    end

    create_table :blog_authors do |t|
      t.string :name
      t.timestamps
    end

    create_table :blog_posts do |t|
      t.string :title
      t.string :image
      t.string :overview
      t.text :content
      t.string :slug
      t.belongs_to :blog_category
      t.belongs_to :blog_author
      t.timestamps
    end

    create_table :blog_tags do |t|
      t.string :name
      t.timestamps
    end

    create_table :blog_post_tags do |t|
      t.belongs_to :blog_post
      t.belongs_to :blog_tag
      t.timestamps
    end

    create_table :related_blog_posts do |t|
      t.belongs_to :blog_post
      t.references :related_post
      t.timestamps
    end

    create_table :team_members do |t|
      t.string :name
      t.string :image
      t.string :position
      t.text :description
      t.integer :order
    end

    create_table :requests do |t|
      t.string :type
      t.string :name
      t.string :email
      t.string :number
      t.text :message
      t.timestamps
    end

    create_table :projects do |t|
      t.string :name
      t.string :client
      t.text :client_text
      t.text :solution_text
      t.text :content
      t.string :slug
    end
  end
end
