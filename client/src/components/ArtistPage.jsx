import { useParams } from 'react-router-dom'

const ArtistPage = () => {

    const { artist } = useParams()
    return (
        <div>
            Artist Name: { artist }
        </div>
    )
}
export default ArtistPage