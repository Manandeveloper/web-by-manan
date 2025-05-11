import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../pages/HomePage';
import ProjectDetail from '../pages/Sections/ProjectDetail';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="project/:projectId" element={<ProjectDetail />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;