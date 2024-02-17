const RestaurantCard = (props) => {
    const resData = props;
   
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
    } = resData?.data?.info;

    return (<div className="hover:bg-slate-100 w-48 m-2 p-2 rounded rounded-lg">
        <img alt="resturant logo" className="rounded rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} /> 
        <h3 className="font-bold ">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h5>{costForTwo}</h5>
        <h5>{sla.slaString}</h5>
    </div>);
}

//Higher order component

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Fast Delivery</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
export default RestaurantCard;