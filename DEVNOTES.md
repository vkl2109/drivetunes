To install google sign in packages run $npm install --save gapi-script
-should i add this to client/package.json?

Google API (gapi) management
<https://www.npmjs.com/package/gapi-script>

Installed to get login button:
npm install react-google-login gapi-script



### Schema

# User.rb
name: string
email: string
profile_picture_url: string

access_token: string
google_id: string
??? id_token: string

# Artist.rb
name: string
image_url: string

# Album.rb
name: string
image_url: string
artist_id: string

belongs_to :artist
has_many :songs
# Song
album_id: string
album_order: integer
audio_link: string

belongs_to_many: playlist

# Playlist.rb
name: string
image_url: string
artist_id: string

has_many :songs


