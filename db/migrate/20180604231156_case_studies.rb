class CaseStudies < ActiveRecord::Migration[5.1]
  def change
    add_column :case_studies, :title, :string
    add_column :case_studies, :overview, :string
    add_column :case_studies, :url, :string
    add_column :case_studies, :slug, :string
  end
end
