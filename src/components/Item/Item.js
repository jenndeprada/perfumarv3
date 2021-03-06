import React from "react";
import '../../../node_modules/bootstrap/js/src/collapse';
import {Link} from "react-router-dom"

export const Item = ({item}) => {
    let idString = String(item.id);
    let target = "#collapse"+ idString;
    let acordOpt = "#acordion" + idString;
    let acor = "acordion" + idString;
    let heading = "heading" + idString
    return (
        <div className="pt-3 col-xs-6 col-md-4 col-lg-3 d-inline-flex justify-content-center">
            <div className="px-2">
              <div className="card">
                <img src={`${item.imagen}`} className="card-img-top" alt={"perfume " + idString}/>
                <div className="card-body">
                  <div className="accordion pb-3" id={acor}>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id={heading}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target= {target} aria-expanded="true" aria-controls={"collapse"+idString}>
                          {item.nombre}
                        </button>
                      </h2>
                      <div id={"collapse"+idString} className="accordion-collapse collapse" aria-labelledby={heading} data-bs-parent={acordOpt}>
                        <div className="accordion-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">Marca: {item.marca}</li>
                            <li className="list-group-item">Tipo: {item.tipo}</li>
                            <li className="list-group-item">Precio: ${item.precio}</li>
                            <li className="list-group-item">Categoria: {item.categoria}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="card-text">{item.descripcion}</p>
                  <div className="d-flex"> 
                        <Link to={`/detail/${item.id}`}><button className="btn btn-dark">Ver mas</button></Link>
                        <h4 className="px-3 pt-1"> ${item.precio}</h4>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
    )
}