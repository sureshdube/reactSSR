import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPage';
import App from './App';
export default [
    {
        ...App,
        routes:[{
            ...HomePage,
            path : "/",
            exact : true
        },
        {
            ...UsersListPage,
            path : "/users",
        },
        {
            ...AdminPage,
            path : "/admins",
        },
        {
            ...NotFoundPage
        },
    ]
    }
]