import { stock } from "./../datos/stock"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            resolve(stock)
        }, 2000)
        
    })
}


export const pedirItem = (id) => {
    return new Promise (
        (resolve, reject) => {
            setTimeout(()=> {
                resolve(stock.find(el => el.id === id))
            }, 1000)
        }
    )
}