import { UseDispatch, useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const Itemlist = ({items}) =>{
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an action
        dispatch(addItem(item));
    }
    //console.log(items);
    return <div>{
        items.map((item)=>{
            return(
            <div key={item.card.info.id} className="p-2 rounded-md group hover:bg-slate-500 odd:bg-white even:bg-slate-50 border-b-2 last:border-b-0 text-left flex justify-between">
                <div className="w-10/12">
                    <div className="py-2 group-hover:text-white">{item.card.info.name} - ₹{item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</div>
                    <p className="text-xs group-hover:text-white">{item.card.info.description}</p>
                </div>
                <div className="w-2/12">
                    
                    <button onClick={() => handleAddItem(item)}
                    className="p-2 bg-white shadow-lg hover:bg-slate-50 focus:bg-slate-100 absolute rounded-md mx-10 my-2">Add +</button>
                    <img alt="dish logo" className="w-40 rounded rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId} /> 
                </div>
            </div>
            )
        
        })}</div>;
}

export default Itemlist;