import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null); 

    useEffect(() => {
        fetchMenu();

    },[]);

    const fetchMenu = async () =>{
        const url = 'https://corsproxy.org/?' + encodeURIComponent('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.62993&lng=77.140996&restaurantId=104689&submitAction=ENTER');
        const data = await fetch(url);
        
        const json = await data.json();

        //console.log(json);
        setResInfo(json.data);
    }
    
    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>Menu</h4>
            <ul>
                {itemCards.map((item) =>{
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;