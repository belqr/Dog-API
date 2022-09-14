import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../home/Home';
import Dog from '../dogpage/Dog';

function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dogpage' element={<Dog />} />
      </Routes>
    </Router>
  )
}
export default Rotas;
