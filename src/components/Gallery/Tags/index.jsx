import styled from 'styled-components'
import tags from './tags.json'

const StyledContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 56px;
`

const StyledTitleTags = styled.h3`
    width: 219px;
    font-size: 24px;
    color: #D9D9D9;
    margin: 0;
`

const StyledButton = styled.button`
    padding: 12px 16px;
    border-radius: 8px;
    background: rgba(217, 217, 217, 0.3);
    color: #FFFFFF;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border: 2px solid #C98CF1;
    }
`

const Tags = ({ setTag }) => {
    return <StyledContainer>
        <StyledTitleTags>Busque por tags:</StyledTitleTags>
        {tags.map(tag => <StyledButton key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</StyledButton>)}
    </StyledContainer>
}

export default Tags