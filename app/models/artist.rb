class Artist < ApplicationRecord
    belongs_to :user
    has_many :albums
    has_many :songs, through: :albums
end
