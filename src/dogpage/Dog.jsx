import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from './style';
import Purin from '../assets/purin4.gif';
import Bird from '../assets/bird.png';

function Dog(){
  const [dog, setDog] = useState()

  function getDogs(){
    axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
      console.log(response.data.message)
      setDog(response.data.message)
    })
  }

  return(
    <Container>
      <div className='box-image-random-dog'>
        <div>
          <Link to='/'> <img src={Purin} alt='PomPomPurin' /> </Link>
          <p> HEY, VOCÊ CHEGOU! SE QUISER VER A SURPRESA O BIRD TE MOSTRARÁ! SE QUISER VOLTAR Á PAGINA INICIAL O PURIN TE LEVARÁ! </p>
        </div>
        <div>
          <img src={Bird} onClick={()=>{getDogs()}} alt='Bird' />
          <div className='dog-box'>
            <img src={dog} alt={dog} />
          </div>
        </div>
      </div>
    </Container>
  )
}
export default Dog;