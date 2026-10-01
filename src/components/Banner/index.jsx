import styled from "styled-components"

const StyledBanner = styled.div `
    position: relative;
    width: 100%;
`

const StyledImagem = styled.img`
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 328px;
    border-radius: 20px;
    max-width: 100%;
`

const StyledTitle = styled.h1 `
    position: absolute;
    top: 0;
    left: 0;
    padding: 64px;
    font-size: 40px;
    font-weight: 400;
    color: #FFFFFF;
    max-width: 300px;
`

const Banner = () => {
    return <StyledBanner>
        <StyledImagem src="images/Foto destaque.png" alt="Foto destaque" />
            <StyledTitle>A galeria mais completa de fotos do espaço!</StyledTitle>
    </StyledBanner>
}

export default Banner