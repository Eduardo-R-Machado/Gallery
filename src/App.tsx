import { useState, useEffect } from 'react';

import * as C from './App.styles';
import * as Photos from './services/photos';

const App = () => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() =>{
    const getPhotos = async () => {
      setLoading(true);
      let photos = await Photos.getAll();
      setLoading(false);
    }
    getPhotos();

  }, []);

  return(
  <C.Container>
    <C.Area>
      <C.Header>
        Galeria 
      </C.Header>
    </C.Area>
    ...
  </C.Container>
  );
}

export default App;