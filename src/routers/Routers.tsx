import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LodingComponent from '../container/LodingContainer';

const MainPage = lazy(() => import('../pages/MainPage'));

const Router = () => {
  return (
    <Suspense fallback={<LodingComponent />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
