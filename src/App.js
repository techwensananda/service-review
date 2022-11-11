import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/color.css'
import { Route, Routes } from 'react-router-dom';
import Services from './layout/Services';
import ServiceDetails from './layout/ServiceDetails';
import Home from './layout/Home';
import Login from './components/Login';
import  AddReview  from './layout/AddReview';
import AddService from './layout/AddService';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Login />} />
        <Route path='/my-reviews' element={<AddReview />} />
        <Route path='/add-service' element={<AddService />} />
        <Route path='/services/:id' element={<ServiceDetails />} />

      </Routes>

    </>
  );
}

export default App;
