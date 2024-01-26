import { getImages } from '../../services/utils/getImages'

import { Container } from "./styles"

function Card({item}) {
    return (
        <Container>
            <div>
                <img src={getImages (item.poster_path || item.profile_path || '')} />
                <h3> {item.title}</h3>
            </div>
        </Container>
    )
}
export default Card