import  React, { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/askData";
import { ItemDetail } from "../ItemDetail/itemDetail";


function apiDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const error = false;
            if(!(error)){
                resolve( pedirDatos() )
            }
        }, 300)
        reject("error")
    })
}

console.log(apiDatos())


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    let requestData = apiDatos();
    

    useEffect(() => {
        console.log(requestData)
        requestData.then(function(valor_resolucion){
            setItem(valor_resolucion)
            
        })
        .catch( (err) => {
            console.log(err)
        })
        .finally(() => {
            console.log("promesa terminada")
            
        })
    
    }, [])

    console.log(item)

    return (
 
        <div className="container-fluid">    
            < ItemDetail idSelected={item[0]} />   
        </div>
  
    )
}

