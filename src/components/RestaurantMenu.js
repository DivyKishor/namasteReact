import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{
    const [showIndex, setShowIndex] = useState(0); 

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    
    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(showIndex);
    return  (
        <div className=" text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <ul>
                {categories.map((category, index) => {
                    return <RestaurantCategory key={category.card.card.title} 
                        data={category} 
                        showItems={index === showIndex? true : false}
                        setShowIndex={() => setShowIndex(index)} />
                    })
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;