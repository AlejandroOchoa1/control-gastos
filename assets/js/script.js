let listaNombreGastos= [];
let listaDescripcion = [];
let listaValoresGastos= [];


function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcion = document.getElementById('descripcion').value;
    let valorGasto = document.getElementById('valorGasto').value;

    //  console.log(nombreGasto);
    //  console.log(valorGasto);
    listaNombreGastos.push(nombreGasto);
    listaDescripcion.push(descripcion);
    listaValoresGastos.push(valorGasto);
    
    // console.log('lista nombre '+listaNombreGastos);
    // console.log('lista valor ' +listaValoresGastos);
    // console.log('listaw descripcion ' + listaDescripcion);

   // alert<('Click de usuario')
    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos =  document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos')
    let htmlLista= '';
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento, posicion) =>{
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcion = listaDescripcion[posicion];
        htmlLista += `<li>${elemento}  - Descripción: ${descripcion} - $.${valorGasto.toFixed(2)}
                    <div>
                    <button class="modificaDatos"  onclick="modificarDatos(${posicion});">Modificar</button>
                    <button class="eliminarGasto"  onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </div>
                    </li>`;
        //calculamos el total de gastos
        totalGastos += Number(valorGasto);

        // console.log(totalGastos)

    });
    
    if(valorGasto > 150){
        console.log(valorGasto)
        const mensajeAlerta = document.createElement('p');
        mensajeAlerta.textContent = '¡Has superado el limite de US $ 150.00! '
        const contenedorMensaje = document.getElementById('alerta')
        contenedorMensaje.appendChild(mensajeAlerta);
    }

    
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2); 
    limpiar();


    
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('valorGasto').value = '';
   
}

function eliminarGasto(posicion){
    listaNombreGastos.splice(posicion,1);
    listaDescripcion.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();

    if((botonActualizar.style.display = 'block') && (botonFormulario.style.display = 'none')){
                botonActualizar.style.display = 'none'
                botonFormulario.style.display = 'block'
    }
}

function modificarDatos(posicion){
    let nombreGasto = document.getElementById('nombreGasto');
    let descripcion = document.getElementById('descripcion');
    let valorGasto = document.getElementById('valorGasto');

    nombreGasto.value = listaNombreGastos[posicion];
    descripcion.value = listaDescripcion[posicion];
    valorGasto.value = listaValoresGastos[posicion];

    document.getElementById('botonActualizar').addEventListener('click', () =>{
    const nuevoNombreGasto = nombreGasto.value
    const nuevaDescripcion = descripcion.value
    const nuevoValorGasto = valorGasto.value    

    listaNombreGastos[posicion] = nuevoNombreGasto;
    listaDescripcion[posicion] = nuevaDescripcion;
    listaValoresGastos[posicion] = nuevoValorGasto;

    
    document.getElementById('botonActualizar').style.display = 'none'
    document.getElementById('botonFormulario').style.display = 'block'
        

    actualizarListaGastos();
})

    cambiarBotones();
}   



function cambiarBotones(){
    botonFormulario.style.display = 'none'
    botonActualizar.style.display = 'block'
}

function calcularTotal() {
    return listaValoresGastos.reduce((total, valor) => total + valor, 0);
}



//mensaje limite gasto mayor a 150 dolares alerta
// agregar  un campo a mas a detalle
// boton modificar el valor  y actualizar
