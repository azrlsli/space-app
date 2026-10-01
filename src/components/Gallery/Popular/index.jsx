import styled from "styled-components"
import Title from "../../Title"

import photos from "./fotos-populares.json"

const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const StyledImages = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const StyledButton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`

const Popular = () => {
    return (<section>
        <Title $alinhamento="center">Popular</Title>
        <StyledAside>
           {photos.map(photo => <StyledImages key={photo.id} src={photo.path} alt={photo.alt} />)}
        </StyledAside>
        <StyledButton>Ver Mais</StyledButton>
    </section>)
}

export default Popular