import  React, { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/askData";
import { ItemDetail } from "../ItemDetail/itemDetail";

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {

        setLoading(true)
        pedirDatos().then((valor_resolucion)=> {
            setItem(valor_resolucion)
        })
        .catch( (err) => {
            console.log("promesa rechazada")
        })
        .finally(() => {
            setLoading(false)
        })
    
    }, [])

    console.log(item)

    return (
        <div className="container-fluid">    
                < ItemDetail idSelected = {item[0]} />   
        </div>
        
  
    )
}