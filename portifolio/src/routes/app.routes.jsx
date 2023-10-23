import { Routes, Route } from 'react-router-dom';

import { Details } from '../pages/Details';
import { Portifolio } from '../pages/Portifolio';
import { Java } from '../pages/Java';
import { AccessControl } from '../pages/AccessControl';
import { UploadAI } from '../pages/UploadAI';

export function AppRoutes() {

  return (
    <Routes>
      <Route path='/' element={<Details />} />
      <Route path='/portifolio' element={<Portifolio />} />
      <Route path='/to-do-list-java-17' element={<Java />} />
      <Route path='/controle-de-acesso' element={<AccessControl />} />
      <Route path='/upload-ai' element={<UploadAI />} />
    </Routes>
  );
}