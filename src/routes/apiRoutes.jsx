import About from "../pages/About";
import About from "../pages/Endpoints";
import Ideas from "../pages/Ideas";

const apiRoutes = [
    {
        path: 'about',
        element: <About />,
    },
    {
        path: 'endpoints',
        element: <Endpoints />,
    },
    {
        path: 'deployed',
        element: <div><a href="https://matproverapi.wyrmlings.dk/api/routes">https://matproverapi.wyrmlings.dk/api/routes</a></div>,
    },
    {
        path: 'repository',
        element: <div><a href="https://github.com/AndyTheDragon/MatProverAPI">https://github.com/AndyTheDragon/MatProverAPI</a></div>,
    },
    {  
        path: 'ideas',
        element: <Ideas />,
    }
];
export default apiRoutes;