class AddProjectAttrs < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :image, :string
    add_column :projects, :overview, :string
    rename_column :projects, :name, :title
  end
end
