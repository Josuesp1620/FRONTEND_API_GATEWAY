import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { dashboardRoutes } from './Dashboard/routes';
import { Dashboard } from './Dashboard';

const RouteIndex = () => {
  return (
    <React.Fragment>
      <Routes>
        {dashboardRoutes.map((route: any, idx: number) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <Dashboard>
                <route.component />
              </Dashboard>
            }
          />
        ))}        
      </Routes>
    </React.Fragment>
  );
};

export default RouteIndex;
