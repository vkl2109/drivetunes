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
artist6 = Artist.create(name: "Fleetwood Mac", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Fleetwood_Mac_Billboard_1977.jpg/640px-Fleetwood_Mac_Billboard_1977.jpg", user_id: user1.id)
artist8 = Artist.create(name: "Beyonce", image: "https://assets.vogue.com/photos/58fb9469195827410027527e/master/pass/00-square-beyonce.jpg", user_id: user1.id)
artist7 = Artist.create(name: "DJ Novak", image: "https://i.insider.com/573f33c730830915008b4a2f?width=1136&format=jpeg", user_id: user1.id)
unknownArtist = Artist.create(name: 'Unknown Artist', user_id: user1.id)

album1 = Album.create(name: "Abbey Road", artist_id: artist1.id, image: "https://m.media-amazon.com/images/I/516d1jud2FL._SY1000_.jpg")
album3 = Album.create(name: "Sgt. Peppers", artist_id: artist1.id, image: "https://images.theconversation.com/files/168828/original/file-20170510-21596-13cqs18.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop")
album2 = Album.create(name: "Rumours", artist_id: artist6.id, image: "https://i.redd.it/rj2piyam31991.jpg")
album4 = Album.create(name: "Mashups", artist_id: artist7.id, image: "https://thinkcomputers.org/wp-content/uploads/2014/03/cablemess-2.jpg")
album5 = Album.create(name: "Beyonce", artist_id: artist8.id, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Beyonc%C3%A9_-_Beyonc%C3%A9.svg/1200px-Beyonc%C3%A9_-_Beyonc%C3%A9.svg.png")

unknownAlbum = Album.create(name: 'Unknown Album', artist_id: unknownArtist.id)

song1 = Song.create(name: "Here Comes The Sun", album_order: 1, album_id: album1.id, audio: "https://p.scdn.co/mp3-preview/54cc460f2c430b83b018f540c8a8c33539c1c393?cid=ba90c62fa82b413bb4e3e0d879afdd65")
song2 = Song.create(name: "Come Together", album_order: 2, album_id: album1.id, audio: "https://p.scdn.co/mp3-preview/60a66cd5118516bace2f5c3d3769082aae321983?cid=ba90c62fa82b413bb4e3e0d879afdd65")
song3 = Song.create(name: "Something", album_order: 3, album_id: album1.id, audio: "https://p.scdn.co/mp3-preview/00ed14c534c140db5d6f718d4b427261beb59a8a?cid=ba90c62fa82b413bb4e3e0d879afdd65")
song4 = Song.create(name: "Octopus's Garden", album_order: 4, album_id: album1.id, audio: "https://p.scdn.co/mp3-preview/fa41dbad21f17e74fb91346e283289e286e77218?cid=ba90c62fa82b413bb4e3e0d879afdd65")
song5 = Song.create(name: "Because", album_order: 5, album_id: album1.id, audio: "https://p.scdn.co/mp3-preview/c22b5733dc5826042eca160d5d9faba539a63e1c?cid=ba90c62fa82b413bb4e3e0d879afdd65")

song6 = Song.create(name: "Empty song", album_order: 1, album_id: unknownAlbum.id, audio: "")