class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.integer :album_id
      t.integer :album_order
      t.string :audio
      t.string :name
      t.string :image
      t.string :file_id
      t.string :date_created

      t.timestamps
    end
  end
end
