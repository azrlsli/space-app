import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Popular from "./Popular"
import Image from "./image"

const GalleryContainer = styled.div`
    display: flex;
    gap: 24px;
`

const FluidSection = styled.section`
    flex-grow: 1;
`

const ImageContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Gallery = ({ photos = [], onSelectedPhoto, onToggleFavorite, setTag }) => {
    return(
        <>
            <Tags setTag={setTag}/>
            <GalleryContainer>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>
                    <ImageContainer>
                        {photos.map( photo => <Image 
                        onZoomRequested={onSelectedPhoto}
                        onToggleFavorite={onToggleFavorite}
                        key={photo.id} 
                        photos={photo}/> )}
                    </ImageContainer>
                </FluidSection>
            <Popular />
            </GalleryContainer>
        </>
    )
}

export default Gallery