# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180604215513) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blog_authors", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "blog_categories", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "blog_post_tags", force: :cascade do |t|
    t.bigint "blog_post_id"
    t.bigint "blog_tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["blog_post_id"], name: "index_blog_post_tags_on_blog_post_id"
    t.index ["blog_tag_id"], name: "index_blog_post_tags_on_blog_tag_id"
  end

  create_table "blog_posts", force: :cascade do |t|
    t.string "title"
    t.string "image"
    t.string "overview"
    t.text "content"
    t.string "slug"
    t.bigint "blog_category_id"
    t.bigint "blog_author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["blog_author_id"], name: "index_blog_posts_on_blog_author_id"
    t.index ["blog_category_id"], name: "index_blog_posts_on_blog_category_id"
  end

  create_table "blog_tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "case_studies", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "client"
    t.text "client_text"
    t.text "solution_text"
    t.text "content"
    t.string "slug"
  end

  create_table "related_blog_posts", force: :cascade do |t|
    t.bigint "blog_post_id"
    t.bigint "related_post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["blog_post_id"], name: "index_related_blog_posts_on_blog_post_id"
    t.index ["related_post_id"], name: "index_related_blog_posts_on_related_post_id"
  end

  create_table "requests", force: :cascade do |t|
    t.string "type"
    t.string "name"
    t.string "email"
    t.string "number"
    t.text "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "team_members", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "position"
    t.text "description"
    t.integer "order"
  end

end
