may want to add date created to song migration for sorting purposes.

Google Drive response object

link to the file or folder
alternateLink: 
"https://drive.google.com/drive/folders/1uwGA5u2FnKdXp2fMmLe7YnQsT_ztF3H8"

date created in googleDrive
createdDate:
"2023-01-03T15:26:38.618Z"

file extension
fileExtension: "mp3"

google's id for the file
id:
"13QmMG4YIFAI_7X66csVmsXRfgfYIzwT3"

googles name for the file:
originalFilename:
"woohoo roses.mp3"


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


