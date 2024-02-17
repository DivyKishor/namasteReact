import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../utils/UserContext";


const Body = () =>{
    const[listOfRestaurant, setListOfRestaurant] = useState([]);
    const[filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const url = 'https://corsproxy.org/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.756728&lng=76.638159&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await fetch(url);
        
        const json = await data.json();
        
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const {loggedInUser, setUserName} = useContext(UserContext);

    return (
        filteredListOfRestaurant.length === 0?<Shimmer/>:
        <div className="body">
            <div className="m-4">
                <input className="rounded-lg border w-96 p-2" type="text" value={searchText} onChange={(e) =>{ setSearchText(e.target.value)}} />
                <button className="ring-2 ring-offset-2 hover:bg-blue-400 bg-blue-500 text-white rounded-lg px-4 py-2 mx-2 shadow-sm" onClick={()=>{
                    const filteredRestaurant = listOfRestaurant.filter((res)=>{
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    //console.log(filteredRestaurant);
                    setFilteredListOfRestaurant(filteredRestaurant);
                }}>Search</button>

                <button className="ring-2 ring-slate-200 rounded-full px-4 py-2 mx-2 shadow-sm" onClick={()=>{
                    const filteredRestaurant = listOfRestaurant.filter((res)=>{
                        return res.info.avgRating >= 4.0;
                    });
                    //console.log(filteredRestaurant);
                    setFilteredListOfRestaurant(filteredRestaurant);
                }}>Rating 4.0+</button>
            </div>
            <div className="">
                <label>Username</label>
                <input
                value={loggedInUser}
                onChange={(e)=> setUserName(e.target.value)}
                className="p-2 border border-black"
                />
            </div>
            <div className="flex flex-wrap justify-center ">
            {filteredListOfRestaurant.map((res) => (
                
                <Link key={res.info.id}  to={"/restaurants/"+ res.info.id}>
                    {res.info.sla.deliveryTime <30 ?
                    <RestaurantCardPromoted data={res}/> 
                    :<RestaurantCard data={res} />}
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Body;