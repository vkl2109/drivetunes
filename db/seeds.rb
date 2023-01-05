# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all
Playlist.destroy_all

user1 = User.create(name: "Drive Tunes", email: "drivetunes2023@gmail.com", google_id: '107017103327767072988')

artist1 = Artist.create(name: "The Beatles", image: "https://i.scdn.co/image/ab6761610000e5ebe9348cc01ff5d55971b22433", user_id: user1.id)
artist2 = Artist.create(name: "Cannonball Adderley", image: "https://i.scdn.co/image/c9ac5f2db563d4c6635882e09ab6373b871a7c7a", user_id: user1.id)
artist3 = Artist.create(name: "Elvis Presley", image: "https://i.scdn.co/image/ab6761610000e5eb9a93e273380982dff84c0d7c", user_id: user1.id)
artist4 = Artist.create(name: "Madonna", image: "https://i.scdn.co/image/ab6761610000e5eb034a19a2d576c696b5be94a5", user_id: user1.id)
artist5 = Artist.create(name: "Drake", image: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9", user_id: user1.id)
unknownArtist = Artist.create(name: 'Unknown Artist', user_id: user1.id)

album1 = Album.create(name: "Abbey Road", artist_id: artist1.id)
unknownAlbum = Album.create(name: 'Unknown Album', artist_id: unknownArtist.id)

song1 = Song.create(name: "Here Comes the Sun", album_order: 1, album_id: album1.id, audio: "https://p.scdn.co/mp3-preview/54cc460f2c430b83b018f540c8a8c33539c1c393?cid=ba90c62fa82b413bb4e3e0d879afdd65")