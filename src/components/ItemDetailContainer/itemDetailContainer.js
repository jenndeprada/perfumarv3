import  React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { pedirItem } from "../../utils/askData";
import { ItemDetail } from "../ItemDetail/itemDetail";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const {itemId} = useParams()
    
    useEffect(() => {
        pedirItem(Number(itemId)).then(function(valor_resolucion){
            setItem(valor_resolucion)
            
        })
        .catch( (err) => {
            console.log(err)
        })
        .finally(() => {
            console.log("promesa terminada")
            
        })
    
    }, [])


    return (
               <div className="container-fluid"> 
                {   !item
                    ?   <div className="d-flex justify-content-center p-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> 
                    : < ItemDetail idSelected={item} />   
                }
                     
                </div>
    )
}

