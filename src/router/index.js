import Posts from "../pages/Posts";
import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";

export const publicRoutes = [
    { path: '/login', element: Login, exact: true }
];

export const privateRoutes = [
    { path: '/posts', element: Posts, exact: true },
    { path: '/posts/:id', element: PostIdPage, exact: true },
    { path: '/about', element: About, exact: true }
];