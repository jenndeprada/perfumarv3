

export const ItemDetail = ( {idSelected} ) => {
    console.log(idSelected)
    return (
        <div className="row">
            <div className="col-6">
                <figure className="figure text-center">
                    <img src={`${idSelected.imagen}`} className="figure-img img-fluid rounded" alt="..."/>
                    <figcaption className="figure-caption">{idSelected.descripcion}</figcaption>
                </figure>
            </div>
            <div className="col-6 pt-4">
                <ul className="list-group">
                    <li className="list-group-item active bg-dark" aria-current="true">Nombre: {idSelected.nombre}</li>
                    <li className="list-group-item"> Marca: {idSelected.marca}</li>
                    <li className="list-group-item">Tipo: {idSelected.tipo}</li>
                    <li className="list-group-item">ID: {idSelected.id}</li>
                </ul> 
            </div>

        </div>

    )
}