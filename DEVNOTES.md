

________________________

Google Drive response object:

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

downloadUrl:"https://www.googleapis.com/drive/v2/files/1Pi7K0By1_S2Sl_C2OSBmYDY0llzS1Yz0?key=${google api key}&alt=media&source=downloadUrl"

embedLink: "https://drive.google.com/file/d/1Pi7K0By1_S2Sl_C2OSBmYDY0llzS1Yz0/preview?usp=drivesdk"

__________________________________

## Post request


default artist_id: 
default album_id: 
default album_order: null
audio: downloadUrl
name: originalFilename
date_created: createdDate
user_id: 

## Patch Request

# Existing album Exisitng Artist
Song album_id:
# New Album Existing Artist
album = Album.create(name)
Song album_id(album.id)
# New album New Artist
artist = Artist.create(artist_name)
album = Album.create(artist_id: artist.id)
Song album_id(album.id)
__________________________________
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


