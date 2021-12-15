import { collection, doc, getDoc } from "firebase/firestore/lite";
import  React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import { ItemDetail } from "../ItemDetail/itemDetail";



export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const {itemId} = useParams()
    
    useEffect(() => {
        const productosReferencia = collection(db, "productos")
        const docRef = doc(productosReferencia, itemId)

        getDoc(docRef)
            .then((doc)=> {
                setItem( {
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(()=> {
                
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

