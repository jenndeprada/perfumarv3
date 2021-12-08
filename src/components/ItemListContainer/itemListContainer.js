import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/askData";
import { ItemList} from "../ItemList/itemList" 

function ItemListContainer() {

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([])

    useEffect(() => {

        setLoading(true)
        pedirDatos().then((valor_resolucion)=> {
            setItems(valor_resolucion)
        })
        .catch( (err) => {
            console.log("promesa rechazada")
        })
        .finally(() => {
            setLoading(false)
        })
    
    }, [])

    return (
        <div>
            {
                loading
                ?   <div className="d-flex justify-content-center p-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                : <ItemList items={items}/>
            }
            
        </div>
  
    )
    
}






export default ItemListContainer