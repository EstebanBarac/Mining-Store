import { carritoIndex } from "./carritoIndex.js";
import { getData } from "./getData.js";

export const mostrarProductos = async () => {

  const contenedorProductos = document.getElementById("producto-contenedor");
  const productos = await getData();

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="container fluid">
                      <div class="row">
                        <div class="card bg-dark text-white">
                            <img src=${producto.img} class="card-img-top">
                          </div>  
                          <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                              <p>${producto.desc}</p>
                              <p>${producto.precio_visible}</p>
                            <a class="btn btn-secondary" id="boton${producto.id}">Añadir al carrito</a>
                          </div>  
                        </div>
                       </div>
                      </div>   `

                      
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
      boton.addEventListener('click', () => {
      carritoIndex(producto.id);
      swal({
        title: '',
        text: `El producto ${producto.nombre} se ha añadido al carrito`,
        icon: 'success',
        confirm: 'Ok',
        timer: 3000
      })
    });
  });
};