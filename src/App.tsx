import { type ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/components/Layout';
import { type Crumb } from '@/components/Breadcrumb';
import Home from '@/pages/Home';
import Strategy from '@/pages/Strategy';
import TherapyAreas from '@/pages/TherapyAreas';
import Cardiovascular from '@/pages/Cardiovascular';
import Averto from '@/pages/Averto';
import Rosuvastatin from '@/pages/Rosuvastatin';
import Diabetes from '@/pages/Diabetes';
import Ebers from '@/pages/Ebers';

function Page({
  crumbs,
  children,
}: {
  crumbs: Crumb[];
  children: ReactNode;
}) {
  return <Layout crumbs={crumbs}>{children}</Layout>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Page crumbs={[]}>
              <Home />
            </Page>
          }
        />
        <Route
          path="/strategy"
          element={
            <Page crumbs={[{ label: 'Strategy', to: '/strategy' }]}>
              <Strategy />
            </Page>
          }
        />
        <Route
          path="/ebers"
          element={
            <Page crumbs={[{ label: 'Ebers', to: '/ebers' }]}>
              <Ebers />
            </Page>
          }
        />
        <Route
          path="/therapy-areas"
          element={
            <Page crumbs={[{ label: 'Therapy Areas', to: '/therapy-areas' }]}>
              <TherapyAreas />
            </Page>
          }
        />
        <Route
          path="/therapy-areas/cardiovascular"
          element={
            <Page
              crumbs={[
                { label: 'Therapy Areas', to: '/therapy-areas' },
                { label: 'Cardiovascular', to: '/therapy-areas/cardiovascular' },
              ]}
            >
              <Cardiovascular />
            </Page>
          }
        />
        <Route
          path="/therapy-areas/cardiovascular/averto"
          element={
            <Page
              crumbs={[
                { label: 'Therapy Areas', to: '/therapy-areas' },
                { label: 'Cardiovascular', to: '/therapy-areas/cardiovascular' },
                {
                  label: 'Averto',
                  to: '/therapy-areas/cardiovascular/averto',
                },
              ]}
            >
              <Averto />
            </Page>
          }
        />
        <Route
          path="/therapy-areas/cardiovascular/rosuvastatin-ezetimibe"
          element={
            <Page
              crumbs={[
                { label: 'Therapy Areas', to: '/therapy-areas' },
                { label: 'Cardiovascular', to: '/therapy-areas/cardiovascular' },
                {
                  label: 'Rosuvastatin + Ezetimibe',
                  to: '/therapy-areas/cardiovascular/rosuvastatin-ezetimibe',
                },
              ]}
            >
              <Rosuvastatin />
            </Page>
          }
        />
        <Route
          path="/therapy-areas/diabetes"
          element={
            <Page
              crumbs={[
                { label: 'Therapy Areas', to: '/therapy-areas' },
                { label: 'Diabetes', to: '/therapy-areas/diabetes' },
              ]}
            >
              <Diabetes />
            </Page>
          }
        />
        <Route
          path="*"
          element={
            <Page crumbs={[]}>
              <Home />
            </Page>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
