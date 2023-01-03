class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :profile_img, default: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e7981d38-6ee3-496d-a6c0-8710745bdbfc/db6zlbs-68b8cd4f-bf6b-4d39-b9a7-7475cade812f.png"
      t.string :google_id

      t.timestamps
    end
  end
end
