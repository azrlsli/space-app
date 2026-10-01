import styled from "styled-components"

const StyledFigure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    margin: 0;
    display: flex;
    flex-direction: column;

    & > img{
        max-width: 100%;
        border-radius: 20px 20px 0 0;  
    }
`

const StyledFicaption = styled.figcaption`
    padding: 12px;
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    box-sizing: border-box;
    color: #FFFFFF;

    h3{
        font-family: 'GandhiSansBold';
    }

    h4 {
        flex-grow: 1;
    }

    h3, h4 {
        margin: 0;
        font-size: 16px;
    }
`

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StykedIconButton = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const Image = ({ photos, expandida = false, onZoomRequested, onToggleFavorite }) => {

    //const FavoriteIcon = photos.favorite ? '/icones/favorito-ativo.png' : '/icones/favorito.png'
    let FavoriteIcon = '/icones/favorito.png';
    if (photos.favorite) {
        FavoriteIcon = '/icones/favorito-ativo.png';
    }

    return(
        <StyledFigure $expandida={expandida} id={`photos-${photos.id}`}>
            <img src={photos.path} alt={photos.fonte} />
            <StyledFicaption>
                <h3>{photos.titulo}</h3>
                <StyledFooter>
                    <h4>{photos.fonte}</h4>
                    <StykedIconButton onClick={() => onToggleFavorite(photos)}>
                         <img src={FavoriteIcon} alt="Icone de favorito" />
                    </StykedIconButton>
                    {!expandida && <StykedIconButton aria-hidden={expandida} onClick={() => onZoomRequested(photos)}>
                        <img src="/icones/expandir.png" alt="Icone de expandir" />
                    </StykedIconButton>}
                </StyledFooter>
            </StyledFicaption>
        </StyledFigure>
    )
}

export default Image