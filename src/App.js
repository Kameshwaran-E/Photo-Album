import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import Header from './components/navbar/Header';
import ImageGallery from './components/gallery/ImageGallery';
import HeaderCarousel from './components/carousel/HeaderCarousel';


function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">
     <Header/>

     <HeaderCarousel/>

      <Container>
        <ImageGallery page={page} setPage={setPage} />
      </Container>
    </div>
  );
}

export default App;
