import { Routes, Route } from 'react-router-dom';

import { Details } from '../pages/Details';
import { Portifolio } from '../pages/Portifolio';
import { Java } from '../pages/Java';

export function AppRoutes() {

  return (
    <Routes>
      <Route path='/' element={<Details />} />
      <Route path='/portifolio' element={<Portifolio />} />
      <Route path='/to-do-list-java-17' element={<Java />} />
    </Routes>
  );
}