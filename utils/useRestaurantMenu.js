import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

    //fetchData
    useEffect(() => {
        fetchMenu();

    },[]);

    const fetchMenu = async () =>{
        const url = 'https://corsproxy.org/?' + encodeURIComponent('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.62993&lng=77.140996&restaurantId='+ resId +'&submitAction=ENTER');
        const data = await fetch(url);
        
        const json = await data.json();

        //console.log(json);
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;