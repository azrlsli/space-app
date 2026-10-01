import styled from "styled-components";
import TextField from "../TextField";

const HeaderEstilizado = styled.header`
  display: flex;
  padding: 60px 0;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Header = ({ setFilter }) => {
  return (
    <HeaderEstilizado>
      <img src="images/logo.png" alt="Logo" />
      <TextField setFilter={setFilter} />
    </HeaderEstilizado>
  );
};

export default Header;
