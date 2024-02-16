import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from "./components/RestaurantMenu";

// React Element

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");



// JSX (transpiled before it reaches JS engine) by  BABEL
const jsxHeading = (<h1 id="heading">
    Namaste React using JSX
    </h1>);

const HeadingComponent = () => {
    return(
        <div id="container">
            <h1>Namaste React functional component</h1>
        </div>
    );
}


const AppLayout = () => {
    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<RouterProvider router={appRouter} />);