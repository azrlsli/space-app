import styled from "styled-components";
import Image from "../Gallery/image";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const StylizedDialog = styled.dialog`
    position: absolute;
    top: 294px;
    width: 1156px;
    background: transparent;
    border: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    form {
      button {
        position: relative;
        top: 20px;
        right: 60px;
        background-color: transparent;
        border: 0;
        cursor: pointer;
      }
    }
`

const ModalZoom = ({ photo, onClose, onToggleFavorite }) => {
  return (
    <>
      {photo && <>
        <Overlay />
        <StylizedDialog open={!!photo} onClose={onClose}>
          <Image photos={photo} expandida={true} onToggleFavorite={onToggleFavorite} />
          <form method="dialog">
            <button onClick={onClose}><img src="/icones/fechar.png" alt="Icone de fechar" /></button>
          </form>
        </StylizedDialog>
      </>}
    </>
  );
};

export default ModalZoom;
