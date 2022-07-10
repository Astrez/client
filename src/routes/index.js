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

// page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const CreateDeployment = Loadable(lazy(() => import('views/pages/deployment/create')));
const CreateDeploymentFile = Loadable(lazy(() => import('views/pages/deployment/create/upload')));
const CreateDeploymentForm = Loadable(lazy(() => import('views/pages/deployment/create/form')));
const DeploymentDetails = Loadable(lazy(() => import('views/pages/deployment/details')));
const PodDetails = Loadable(lazy(() => import('views/dashboard/details/pod')));
const Metrics = Loadable(lazy(() => import('views/dashboard/details/metrics')));
const AutoScalar = Loadable(lazy(() => import('views/pages/autoscaler')));
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user);
    return useRoutes([
        {
            path: '/',
            element: isLoggedIn ? <MainLayout /> : <Navigate to="/login" />,
            children: [
                {
                    path: '/',
                    element: <Metrics />
                },

                {
                    path: '/dashboard',
                    element: <Metrics />
                },
                {
                    path: '/deployment/create',
                    element: <CreateDeployment />
                },
                {
                    path: '/deployment/create/form',
                    element: <CreateDeploymentForm />
                },
                {
                    path: '/deployment/create/file',
                    element: <CreateDeploymentFile />
                },
                {
                    path: '/deployment/details',
                    element: <DeploymentDetails />
                },
                {
                    path: '/deployment/pod',
                    element: <PodDetails />
                },
                {
                    path: '/deployment/autoscaler',
                    element: <AutoScalar />
                },
                {
                    path: '/register',
                    element: user && user.role === 'U' ? <Navigate to="/dashboard" /> : <AuthRegister />
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

                { path: '404', element: <SamplePage /> },
                { path: '*', element: <Navigate to="/404" /> }
            ]
        }
    ]);
}
