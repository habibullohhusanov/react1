import About from "../pages/about";
import Login from "../pages/login";
import PostIdPage from "../pages/postIdPage";
import Posts from "../pages/posts";

export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
];
export const publickRoutes = [
    {path: '/login', component: Login, exact: true},
];