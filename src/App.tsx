import { Route, Routes } from 'react-router-dom';
import { DashboardHomePage } from './features/overview/DashboardHomePage';
import { AnalyticsPage } from './features/analytics/AnalyticsPage';

export default function App() {
  return (
    <Routes>
      <Route index element={<DashboardHomePage />} />
      <Route path="analytics" element={<AnalyticsPage />} />
    </Routes>
  );
}
