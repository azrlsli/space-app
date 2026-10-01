import styled from "styled-components"
import NavigationItem from "./NavigationItem"

const StyledList = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavigationItem
                    iconeAtivo="/icones/home-ativo.png" 
                    iconeInativo="/icones/home-inativo.png"
                    ativo={true}
                    >
                        Início
                    </NavigationItem>
                    <NavigationItem 
                    iconeAtivo="/icones/mais-vistas-ativo.png" 
                    iconeInativo="/icones/mais-vistas-inativo.png">
                        Mais vistas
                    </NavigationItem>
                    <NavigationItem 
                    iconeAtivo="/icones/mais-curtidas-ativo.png" 
                    iconeInativo="/icones/mais-curtidas-inativo.png">
                        Mais curtidas
                    </NavigationItem>
                    <NavigationItem 
                    iconeAtivo="/icones/novas-ativo.png" 
                    iconeInativo="/icones/novas-inativo.png">
                        Novas
                    </NavigationItem>
                    <NavigationItem 
                    iconeAtivo="/icones/surpreenda-me-ativo.png" 
                    iconeInativo="/icones/surpreenda-me-inativo.png">
                        Surpreenda-me
                    </NavigationItem>
                </StyledList>
            </nav>
        </aside>
    )
}

export default Sidebar