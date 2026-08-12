import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Body from '../components/Body.jsx'
import About from '../components/About';
import Contact from '../components/Contact';
import Error from '../components/Error';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
        {
            path: '/',
            element: <Body />,
            errorElement: <Error />
        },
        {
            path: '/about',
            element: <About />,
            errorElement: <Error />
        },
        {
            path: '/contact',
            element: <Contact />,
            errorElement: <Error />
        }
        ],
        errorElement: <Error />
    },
    
]);