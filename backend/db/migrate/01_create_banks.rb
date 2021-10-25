class CreateBanks < ActiveRecord::Migration[6.1]
    def change
      create_table :banks do |t|
        t.string :name
        t.string :gender
        t.integer :fund
  
        t.timestamps
      end
    end
  end
  