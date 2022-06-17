import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from '../layout/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('../views/pages/authentication/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('../views/pages/authentication/authentication/Register')));

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return useRoutes([
        {
            path: '/',
            element: isLoggedIn ? <MainLayout /> : <Navigate to="/login" />,
            children: [
                {
                    path: '/',
                    element: <DashboardDefault />
                },
                {
                    path: '/dashboard',
                    element: <DashboardDefault />
                },
                {
                    path: '/utils/util-typography',
                    element: <UtilsTypography />
                },
                {
                    path: '/utils/util-color',
                    element: <UtilsColor />
                },
                {
                    path: '/utils/util-shadow',
                    element: <UtilsShadow />
                },
                {
                    path: '/icons/tabler-icons',
                    element: <UtilsTablerIcons />
                },
                {
                    path: '/icons/material-icons',
                    element: <UtilsMaterialIcons />
                },
                {
                    path: '/sample-page',
                    element: <SamplePage />
                },
                { path: '*', element: <Navigate to="/404" /> }
            ]
        },
        {
            path: '/',
            element: <MinimalLayout />,
            children: [
                {
                    path: '/login',
                    element: isLoggedIn ? <Navigate to="/dashboard" /> : <AuthLogin />
                },
                {
                    path: '/register',
                    element: isLoggedIn ? <Navigate to="/dashboard" /> : <AuthRegister />
                },
                { path: '404', element: <SamplePage /> },
                { path: '*', element: <Navigate to="/404" /> }
            ]
        },
        {
            path: '/deployment',
            element: <MainLayout />,
            children: [
                {
                    path: '/start'
                },
                {
                    path: '/register',
                    element: isLoggedIn ? <Navigate to="/dashboard" /> : <AuthRegister />
                }
            ]
        }
    ]);
}
