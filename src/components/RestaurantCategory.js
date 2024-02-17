import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Itemlist from "./Itemlist";

const RestaurantCategory =({data,showItems,setShowIndex}) =>{
    //const [showItems, setShowItems] = useState(false);
    const handleClick = () =>{
        //setShowItems(!showItems);
        setShowIndex();
    }
    
    return <div className="w-8/12 mx-auto border-b-8">
        <div className="flex justify-between cursor-pointer " onClick={handleClick}>
            <span className="font-bold m-2 p-2 ">{data.card.card.title} ({data.card.card.itemCards.length})</span>
            {showItems ?<GoChevronUp className="text-2xl"/> :<GoChevronDown className="text-2xl"/>}
        </div>
        {showItems && <Itemlist items={data.card.card.itemCards}/>}
    </div>;
}

export default RestaurantCategory;