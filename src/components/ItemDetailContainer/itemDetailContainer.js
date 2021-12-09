import  React, { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/askData";
import { ItemDetail } from "../ItemDetail/itemDetail";


function apiDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let error = false;
            if(!(error)){
                resolve( pedirDatos() )
                error = true;
            }
        }, 300)
        
    })
}

console.log(apiDatos())


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    
    useEffect(() => {
        apiDatos().then(function(valor_resolucion){
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
                    : < ItemDetail idSelected={item[0]} />   
                }
                     
                </div>
    )
}

