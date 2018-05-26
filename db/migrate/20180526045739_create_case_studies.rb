class CreateCaseStudies < ActiveRecord::Migration[5.1]
  def change
    create_table :case_studies do |t|

      t.timestamps
    end
  end
end
