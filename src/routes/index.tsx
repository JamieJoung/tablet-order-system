import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import OrderPage from '../pages/OrderPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/order',
        element: <OrderPage />,
    },

]);

export default router;