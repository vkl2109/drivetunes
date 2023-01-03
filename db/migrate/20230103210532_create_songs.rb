class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.integer :album_id
      t.integer :album_order
      t.string :audio
      t.string :name

      t.timestamps
    end
  end
end
