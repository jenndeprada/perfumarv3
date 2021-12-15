import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemList} from "../ItemList/itemList" 
import {db} from "../../firebase/config"
import {collection, getDocs, query, where} from "firebase/firestore/lite"


function ItemListContainer() {

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([])

    const {categoryId} = useParams()
    console.log(useParams())

    useEffect(()=>{

        setLoading(true)  //creo una referencia a la coleccion de mi base
        const productosReferencia = collection(db, "productos");
        const q =  categoryId ? query(productosReferencia, where("category", "==", categoryId)) : productosReferencia
        //llamo a la ref de la funcion con getDocs
        getDocs(q)
            .then(resp => {
                const productos = resp.docs.map((doc) => {
                    return {
                        id: doc.id, //para obtener el id de la base de datos
                        ...doc.data()
                    }
                })
                setItems(productos)
            })
            .finally(()=>{
                setLoading(false)
            })

    
    }, [categoryId])

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