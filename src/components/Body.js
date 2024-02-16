import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () =>{
    const[listOfRestaurant, setListOfRestaurant] = useState([]);
    const[filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

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

    return (
        filteredListOfRestaurant.length === 0?<Shimmer/>:
        <div className="body">
            <div className="search">
                <input type="text" value={searchText} onChange={(e) =>{ setSearchText(e.target.value)}} />
                <button onClick={()=>{
                    const filteredRestaurant = listOfRestaurant.filter((res)=>{
                        //search not working
                        //console.log(res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    //console.log(filteredRestaurant);
                    setFilteredListOfRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
            <div className="res-container">
            {filteredListOfRestaurant.map((res) => (
            
                <RestaurantCard key={res.info.id} data={res} />
            ))}
            </div>
        </div>
    )
}

export default Body;