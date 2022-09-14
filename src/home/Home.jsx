import { Link } from 'react-router-dom';
import Purin from '../assets/pompompurin.gif';
import { Container } from './style';

export default function Home(){
  return(
    <Container>
        <div className='box-text-redirection'>
        <Link to='dogpage'> <img src={Purin} alt='Purin Crying' /> </Link>
          <div>
            <p> VI QUE NÃO ESTÁ TENDO UM BOM DIA... ENTÃO VEJAMOS... QUE TAL UMA SURPRESINHA PARA TE ANIMAR NESSE DIA RUIM? </p>
            <p> CUTUQUE O PURIN, E TE LEVAREI ATÉ A SURPRESA! </p>
          </div>
        </div>
    </Container>
  )
}