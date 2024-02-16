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

    return (<div className="res-card">
        <img alt="resturant logo" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} /> 
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h5>{costForTwo}</h5>
        <h5>{sla.slaString}</h5>
    </div>);
}

export default RestaurantCard;