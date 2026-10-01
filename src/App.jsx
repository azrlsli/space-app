import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

import photos from './fotos.json';
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)

  useEffect(() => {
    const filteredPhotos = photos.filter(photo => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle = !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase())
      return filterByTag && filterByTitle
    })

    setGalleryPhotos(filteredPhotos)
  }, [filter, tag])

  const onToggleFavorite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }
    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favorite: galleryPhoto.id === photo.id ? !photo.favorite : galleryPhoto.favorite
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header  filter={filter} setFilter={setFilter}/>
        <MainContainer>
          <Sidebar />
          <GalleryContent>
            <Banner />
            <Gallery 
              onSelectedPhoto={photo => setSelectedPhoto(photo)} 
              photos={galleryPhotos} 
              onToggleFavorite={onToggleFavorite} 
              setTag={setTag}/>
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <Footer />
      <ModalZoom 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
        onToggleFavorite={onToggleFavorite}/>
    </FundoGradiente>
  );
}

export default App;
