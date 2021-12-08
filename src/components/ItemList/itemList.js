import React from "react";
import { Item } from "../Item/Item"

export const ItemList = ({items}) => {
    return (
       <div className="container">
           <div className="row">
                { items.map((el) => <Item item={el} key={el.id}/>) }
           </div>
           
       </div> 
    )
    
}