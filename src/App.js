import React,{lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from './components/Cart';

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

// code splitting/ Dynamic Bundling/ Lazy loading/ on Demand loading/ chunking/ dynamic import
const About = lazy(()=> import("./components/About"));


const AppLayout = () => {
    const [userName, setUserName] = useState("Divy Kishor");

    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
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
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<RouterProvider router={appRouter} />);