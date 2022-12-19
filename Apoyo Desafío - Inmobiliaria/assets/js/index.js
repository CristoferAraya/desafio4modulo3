const filtrarPropiedades = () => {

    const cantidadDeCuartos = document.querySelector('#cuartos').value;
    const metrosDesde = document.querySelector('#metros_desde').value;
    const metrosHasta = document.querySelector('#metros_hasta').value


    if (cantidadDeCuartos && metrosDesde && metrosHasta) {
      mostrarPropiedades(cantidadDeCuartos, metrosDesde, metrosHasta)
    } else {
        alert('Todos los filtros son obligatorios')
    }


};

const mostrarPropiedades = (rooms = '+', mFrom = '+', mTo = '+') => {

    let galeria = document.querySelector('.propiedades');
    let propiedades = '';
    let cantidad = 0;

    for (const propiedad of propiedadesJSON) {  
      if (
        (propiedad.rooms == rooms && propiedad.m >= mFrom &&  propiedad.m <= mTo)||
        (rooms == '+' && mFrom == '+' && mTo == '+')
        ) {

        propiedades += `<div class="propiedad">
    <div class="img" style="background-image: url('${propiedad.src}')"></div>
    <section>
        <h5>${propiedad.name}</h5>
        <div class="d-flex justify-content-between">
            <p>Cuartos:${propiedad.rooms}</p>
            <p>Metros:${propiedad.m}</p>
        </div>
        <p class="my-3">${propiedad.description}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
</div>`
cantidad++;}
    }
    galeria.innerHTML = propiedades;
    document.querySelector('#total').innerHTML = cantidad;
};

mostrarPropiedades();