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

// page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const CreateDeployment = Loadable(lazy(() => import('views/pages/deployment/create')));
const DeploymentDetails = Loadable(lazy(() => import('views/pages/deployment/details')));
const ReplaceReplicas = Loadable(lazy(() => import('views/pages/deployment/replace-replica')));
const PodDetails = Loadable(lazy(() => import('views/pages/details/pod')));
const Metrics = Loadable(lazy(() => import('views/pages/details/metrics')));
const AutoScalar = Loadable(lazy(() => import('views/pages/autoscaler')));
const UpdateDeployment = Loadable(lazy(() => import('views/pages/deployment/update')));
const DeleteDeployment = Loadable(lazy(() => import('views/pages/deployment/delete')));
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
                    path: '/deployment/create',
                    element: <CreateDeployment />
                },
                {
                    path: '/deployment/details',
                    element: <DeploymentDetails />
                },
                {
                    path: '/deployment/replace-replicas',
                    element: <ReplaceReplicas />
                },
                {
                    path: '/deployment/pod',
                    element: <PodDetails />
                },
                {
                    path: '/deployment/update',
                    element: <UpdateDeployment />
                },
                {
                    path: '/deployment/delete',
                    element: <DeleteDeployment />
                },
                {
                    path: '/deployment/autoscaler',
                    element: <AutoScalar />
                },
                {
                    path: '/deployment/metrics',
                    element: <Metrics />
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
        }
    ]);
}
