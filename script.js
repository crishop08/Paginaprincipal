/* ==================================================
   PRODUCTOS
================================================== */

const productos = [

    {

        nombre:
            "Bean Essence-Mixsoon",

        precio:
            "320.00 MXN",


        imagenes: [

            "imagenes/bean.jpg",

            "imagenes/bean1.jpg",

            "imagenes/bean2.jpg",

            "imagenes/bean3.jpg"

        ],


        descripcion:
            "La Esencia Bean Essence de mixsoon contiene fermento de soya, extractos de cebada, granada y pera coreana para aportar abundantes nutrientes y antioxidantes que se entregan profundamente en la piel.",


        material:
            "Extracto de frijol fermentado",


        medidas:
            "50 ml.",


        fabricacion:
            "Todo tipo de piel"

    },


    {

        nombre:
            "Bean Sun Serum-Mixsoon",

        precio:
            "220.00 MXN",


        imagenes: [

            "imagenes/beansun.jpg",

            "imagenes/beansun1.jpg",

            "imagenes/beansun2.jpg",

            "imagenes/beansun3.jpg"

        ],


        descripcion:
            "¿Buscas un protector solar ligero que deje tu piel radiante y con efecto glowy? No busques más, el Protector Solar en Sérum de mixsoon tiene una fórmula suave que está enriquecida con extractos fermentados de soya, cebada, granada y pera, que hidratan, calman y nutren la piel.",

        material:
            "Niacinamida",


        medidas:
            "50 ml.",


        fabricacion:
            "Todo tipo de piel"

    },

    {

        nombre:
            "SKIN1004 - Sérum Solar Madagascar Centella Hyalu-Cica Water-Fit",

        precio:
            "340.00 MXN",


        imagenes: [

            "imagenes/1004ps.jpg",

            "imagenes/1004ps1.jpg",

            "imagenes/1004ps2.jpg",

            "imagenes/1004ps3.jpg"

        ],


        descripcion:
            "Protector solar orgánico con FPS 50+ PA++++, formulado con una proporción ideal de ácido hialurónico y extracto de centella asiática para calmar e hidratar la piel sin dejar residuos blancos.",


        material:
            "Acido hialuronico, centella asiatica",


        medidas:
            "100 ml.",


        fabricacion:
            "Todo tipo de piel"

    },

    {
        nombre: "Bálsamo Labial Vegano Nutritivo-Mixsoon",

        precio: "195.00 MXN",

        imagenes: [
            "imagenes/balsamomix.jpg",
            "imagenes/balsamomix1.jpg",
            "imagenes/balsamomix2.jpg",
            "imagenes/balsamomix3.jpg"
        ],

        colores: [
            "#01 Clear",
            "#02 Dry Rose"
        ],

        descripcion:
            "El mixsoon Bálsamo Labial Vegano Nutritivo Karité hidrata y suaviza los labios, aportando un acabado brillante y un aspecto saludable. Su fórmula con manteca de karité y ceras vegetales nutre profundamente, ayudando a mantener los labios suaves, protegidos y confortables durante todo el día.",

        material: 
        "Mantequilla illipe, mantequilla de karité y cera de semilla de girasol",

        medidas: "4.1 gr.",

        fabricacion: "Todo tipo de piel"
    },


    {
        nombre: "Tónico Rice 70 Glow Milky-Anua",

        precio: "320.00 MXN",

        imagenes: [
            "imagenes/riceanua.jpg",
            "imagenes/riceanua1.jpg",
            "imagenes/riceanua2.jpg",
            "imagenes/riceanua3.jpg",
            "imagenes/riceanua4.jpg"
        ],


        descripcion:
            "Potencia el glow de tu piel con el Tónico Rice 70 Glow Milky de Anua de agua de salvado de arroz y extracto de arroz que revive la piel apagada. La niacinamida en la fórmula ayuda a equilibrar la producción excesiva de sebo para mantener los brotes a raya. El tónico ligero hidrata mientras fortalece tu barrera cutánea con hialuronato de sodio, betaína y ceramidas.",

        material:
            "70% Agua de salvado de arroz, niacinamida, ceramidas y pantenol",

        medidas:
            "250 ml",

        fabricacion:
            "Todo tipo de piel"
    },

    {
        nombre: "Crema Hidratante Bean-Mixsoon",

        precio: "315.00 MXN",

        imagenes: [
            "imagenes/beancream.jpg",
            "imagenes/beancream1.jpg",
            "imagenes/beancream2.jpg",
            "imagenes/beancream3.jpg",
            
        ],


        descripcion:
            "Crema altamente hidratante y rica en nutrientes que contiene extracto de soja fermentada para nutrir la piel y mantener los niveles de humedad y aceite.",
        material:
            "Extracto de frijoles fermentados, pera coreana fermentada, granada fermentada, cebada fermentada",

        medidas:
            "50 ml",

        fabricacion:
            "Piel seca y aspera"
    },

     {
        nombre: "Gentle Vitamin C Serum-Dr. Althea",

        precio: "410.00 MXN",

        imagenes: [
            "imagenes/vitc.jpg",
            "imagenes/vitc1.jpg",
            "imagenes/vitc2.jpg",
            "imagenes/vitc3.jpg",
            "imagenes/vitc4.jpg",
            
        ],


        descripcion:
            "Sérum facial enriquecido con niacinamida, ácido ascórbico 3-O etílico y extracto de fruta de espino amarillo rico en vitamina C, para iluminar la piel. El sérum atenúa la hiperpigmentación, dejando la piel suave y con un brillo radiante. También contiene agua de hoja de camellia sinensis para calmar la piel.",
        material:
            "Ácido 3-O-Etil Ascórbico: Un, niacinamida, agua de espino amarillo",

        medidas:
            "30 ml",

        fabricacion:
            "Todo tipo de piel"

              },






];


/* ==================================================
   VARIABLES
================================================== */

let productoActual = 0;

let imagenActual = 0;

let cantidadActual = 1;

let colorActual = "";


/* ==================================================
   ELEMENTOS DEL HTML
================================================== */

const modal =
    document.getElementById("modalProducto");

const modalImagen =
    document.getElementById("modalImagen");

const modalNombre =
    document.getElementById("modalNombre");

const modalPrecio =
    document.getElementById("modalPrecio");

const modalDescripcion =
    document.getElementById("modalDescripcion");

const modalMaterial =
    document.getElementById("modalMaterial");

const modalMedidas =
    document.getElementById("modalMedidas");

const modalFabricacion =
    document.getElementById("modalFabricacion");

const cantidad =
    document.getElementById("cantidad");

const mensajeCarrito =
    document.getElementById("mensajeCarrito");

const contadorCarrito =
    document.getElementById("contadorCarrito");

const contenidoCesta =
    document.getElementById("contenidoCesta");

const notificacion =
    document.getElementById("notificacion");

const indicadores =
    document.getElementById("indicadores");


/* ==================================================
   CARRITO
================================================== */

let carrito =
    JSON.parse(
        localStorage.getItem("criShopCarrito")
    ) || [];

    /* =========================================
   CÓDIGOS DE DESCUENTO
========================================= */

const codigosDescuento = {

    "BIENVENIDA10": 10,

    "VERANO15": 15,

    "CLIENTE20": 20

};


/*
   Guardamos el código que está aplicado.
*/

let codigoAplicado = "";


/*
   Guardamos el porcentaje de descuento.
*/

let porcentajeDescuento = 0;


/* ==================================================
   ABRIR PRODUCTO
================================================== */

function abrirProducto(id) {

    productoActual = id;

    imagenActual = 0;

    cantidadActual = 1;

    colorActual = "";

    const producto =
        productos[productoActual];


    modalImagen.src =
        producto.imagenes[imagenActual];

    modalImagen.alt =
        producto.nombre;


    modalNombre.textContent =
        producto.nombre;

    modalPrecio.textContent =
        producto.precio;

    modalDescripcion.textContent =
        producto.descripcion;

    modalMaterial.textContent =
        producto.material;

    modalMedidas.textContent =
        producto.medidas;

    modalFabricacion.textContent =
        producto.fabricacion;


    cantidad.textContent =
        cantidadActual;


    mensajeCarrito.textContent =
        "";


    /* CREAR COLORES */

    crearColores();


    /* CREAR PUNTITOS */

    crearIndicadores();


    /* ABRIR MODAL */

    modal.classList.add("activo");

    document.body.style.overflow =
        "hidden";
}


/* ==================================================
   CREAR SELECTOR DE COLORES
================================================== */

function crearColores() {

    const producto =
        productos[productoActual];

    const selector =
        document.getElementById(
            "selectorColores"
        );

    const select =
        document.getElementById(
            "selectColor"
        );


    select.innerHTML = "";


    /* OPCIÓN INICIAL */

    const opcionInicial =
        document.createElement("option");

    opcionInicial.value = "";

    opcionInicial.textContent =
        "Selecciona un color";

    select.appendChild(
        opcionInicial
    );


    /* SI NO TIENE COLORES */

    if (
        !producto.colores ||
        producto.colores.length === 0
    ) {

        selector.style.display =
            "none";

        colorActual = "";

        return;
    }


    /* MOSTRAR SELECTOR */

    selector.style.display =
        "block";


    /* CREAR OPCIONES */

    producto.colores.forEach(
        function(color) {

            const opcion =
                document.createElement(
                    "option"
                );

            opcion.value =
                color;

            opcion.textContent =
                color;

            select.appendChild(
                opcion
            );
        }
    );


    /* CUANDO SELECCIONA UN COLOR */

    select.onchange =
        function() {

            colorActual =
                select.value;

        };
}


/* ==================================================
   CERRAR PRODUCTO
================================================== */

function cerrarProducto() {

    modal.classList.remove("activo");

    document.body.style.overflow =
        "auto";
}


/* ==================================================
   CERRAR AL HACER CLICK FUERA
================================================== */

modal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === modal
        ) {

            cerrarProducto();

        }

    }
);


/* ==================================================
   CERRAR CON ESC
================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            cerrarProducto();

        }

    }
);


/* ==================================================
   SIGUIENTE IMAGEN
================================================== */

function imagenSiguiente() {

    const producto =
        productos[productoActual];

    imagenActual++;

    if (
        imagenActual >=
        producto.imagenes.length
    ) {

        imagenActual = 0;

    }

    mostrarImagen();
}


/* ==================================================
   IMAGEN ANTERIOR
================================================== */

function imagenAnterior() {

    const producto =
        productos[productoActual];

    imagenActual--;

    if (
        imagenActual < 0
    ) {

        imagenActual =
            producto.imagenes.length - 1;

    }

    mostrarImagen();
}


/* ==================================================
   MOSTRAR IMAGEN
================================================== */

function mostrarImagen() {

    const producto =
        productos[productoActual];

    modalImagen.style.opacity = "0";


    setTimeout(
        function() {

            modalImagen.src =
                producto.imagenes[
                    imagenActual
                ];

            modalImagen.style.opacity =
                "1";

            actualizarIndicadores();

        },
        100
    );
}


/* ==================================================
   CREAR INDICADORES
================================================== */

function crearIndicadores() {

    const producto =
        productos[productoActual];

    indicadores.innerHTML = "";


    producto.imagenes.forEach(
        function(imagen, index) {

            const punto =
                document.createElement(
                    "button"
                );

            punto.className =
                "indicador";


            if (
                index === imagenActual
            ) {

                punto.classList.add(
                    "activo"
                );

            }


            punto.onclick =
                function() {

                    imagenActual =
                        index;

                    mostrarImagen();

                };


            indicadores.appendChild(
                punto
            );

        }
    );
}


/* ==================================================
   ACTUALIZAR INDICADORES
================================================== */

function actualizarIndicadores() {

    const puntos =
        document.querySelectorAll(
            ".indicador"
        );


    puntos.forEach(
        function(punto, index) {

            punto.classList.toggle(
                "activo",
                index === imagenActual
            );

        }
    );
}


/* ==================================================
   CAMBIAR CANTIDAD
================================================== */

function cambiarCantidad(valor) {

    cantidadActual += valor;


    if (
        cantidadActual < 1
    ) {

        cantidadActual = 1;

    }


    if (
        cantidadActual > 10
    ) {

        cantidadActual = 10;

    }


    cantidad.textContent =
        cantidadActual;
}


/* ==================================================
   AÑADIR AL CARRITO
================================================== */

function agregarAlCarrito() {

    const producto =
        productos[productoActual];


    /*
       COMPROBAR COLOR
    */

    if (
        producto.colores &&
        producto.colores.length > 0 &&
        colorActual === ""
    ) {

        mensajeCarrito.textContent =
            "Por favor selecciona un color.";

        return;
    }


    /*
       BUSCAR PRODUCTO + COLOR
    */

    const productoExistente =
        carrito.find(
            function(item) {

                return (
                    item.nombre ===
                    producto.nombre
                    &&
                    item.color ===
                    colorActual
                );

            }
        );


    /*
       SI YA EXISTE
    */

    if (
        productoExistente
    ) {

        productoExistente.cantidad +=
            cantidadActual;

    }


    /*
       SI ES NUEVO
    */

    else {

        carrito.push({

            nombre:
                producto.nombre,

            precio:
                producto.precio,

            imagen:
                producto.imagenes[0],

            cantidad:
                cantidadActual,

            color:
                colorActual

        });

    }


    guardarCarrito();

    actualizarCarrito();

    mostrarNotificacion();


    mensajeCarrito.textContent =
        "¡Producto añadido a la cesta!";
}


/* ==================================================
   GUARDAR CARRITO
================================================== */

function guardarCarrito() {

    localStorage.setItem(
        "criShopCarrito",
        JSON.stringify(carrito)
    );

}


/* ==================================================
   ACTUALIZAR CARRITO
================================================== */

function actualizarCarrito() {

    let total = 0;


    carrito.forEach(
        function(item) {

            total +=
                item.cantidad;

        }
    );


    contadorCarrito.textContent =
        total;


    mostrarCesta();
}


/* =========================================
   MOSTRAR CESTA + DESCUENTO + TOTAL
========================================= */

function mostrarCesta() {


    /*
       Si el carrito está vacío.
    */

    if (carrito.length === 0) {


        /*
           También eliminamos cualquier
           descuento que estuviera aplicado.
        */

        codigoAplicado = "";

        porcentajeDescuento = 0;


        contenidoCesta.innerHTML = `

            <p class="cesta-vacia">

                Tu cesta está vacía.

            </p>

        `;


        return;

    }



    /*
       Variable para guardar
       el subtotal general.
    */

    let subtotalGeneral = 0;


    /*
       Limpiamos el contenido anterior.
    */

    contenidoCesta.innerHTML = "";



    /*
       Recorremos todos los productos.
    */

    carrito.forEach(
        function(item, index) {


            /*
               Convertimos el precio a número.

               Ejemplo:

               "330.00 MXN"

               se convierte en:

               330.00
            */

            const precioNumero =
                parseFloat(
                    item.precio
                        .replace("MXN", "")
                        .replace("$", "")
                        .trim()
                );


            /*
               Calculamos el subtotal
               de este producto.
            */

            const subtotal =
                precioNumero *
                item.cantidad;


            /*
               Sumamos al subtotal general.
            */

            subtotalGeneral +=
                subtotal;


            /*
               Creamos el producto.
            */

            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "producto-cesta";


            elemento.innerHTML = `

                <img
                    src="${item.imagen}"
                    alt="${item.nombre}">


                <div class="producto-cesta-info">

                    <h3>
                        ${item.nombre}
                    </h3>


                    <p>
                        Precio: ${item.precio}
                    </p>


                    <p>
                        Cantidad:
                        ${item.cantidad}
                    </p>


                    <p>
                        Color:
                        ${item.color || "Único"}
                    </p>


                    <p class="subtotal-producto">

                        Subtotal:
                        $${subtotal.toFixed(2)} MXN

                    </p>

                </div>


                <button
                    class="btn-eliminar"
                    type="button"
                    onclick="eliminarProducto(${index})">

                    Eliminar

                </button>

            `;


            contenidoCesta.appendChild(
                elemento
            );

        }
    );



    /* =========================================
       CÓDIGO DE DESCUENTO
    ========================================= */


    const descuentoElemento =
        document.createElement(
            "div"
        );


    descuentoElemento.className =
        "seccion-descuento";


    descuentoElemento.innerHTML = `

        <div class="descuento-titulo">

            ¿Tienes un código de descuento?

        </div>


        <div class="descuento-controles">

            <input
                type="text"
                id="inputCodigoDescuento"
                placeholder="Escribe tu código"
                value="${codigoAplicado}">


            <button
                type="button"
                class="btn-aplicar-descuento"
                onclick="aplicarCodigoDescuento()">

                Aplicar

            </button>

        </div>


        <div
            id="mensajeDescuento"
            class="mensaje-descuento">

        </div>

    `;


    contenidoCesta.appendChild(
        descuentoElemento
    );



    /*
       Calculamos cuánto dinero
       se descontará.
    */

    const cantidadDescuento =
        subtotalGeneral *
        (porcentajeDescuento / 100);



    /*
       Calculamos el total final.
    */

    const totalFinal =
        subtotalGeneral -
        cantidadDescuento;



    /*
       Si hay un código aplicado,
       mostramos el mensaje.
    */

    if (
        codigoAplicado !== ""
        &&
        porcentajeDescuento > 0
    ) {


        setTimeout(
            function() {


                const mensajeDescuento =
                    document.getElementById(
                        "mensajeDescuento"
                    );


                if (mensajeDescuento) {


                    mensajeDescuento.innerHTML = `

                        ✓ Código
                        <strong>
                            ${codigoAplicado}
                        </strong>
                        aplicado correctamente.

                        <br>

                        🏷️ Descuento:
                        <strong>
                            ${porcentajeDescuento}%
                        </strong>

                        <br>

                        💸 Ahorras:
                        <strong>
                            $${cantidadDescuento.toFixed(2)} MXN
                        </strong>

                    `;


                    mensajeDescuento.className =
                        "mensaje-descuento exito";

                }

            },
            0
        );

    }



    /* =========================================
       RESUMEN DEL PRECIO
    ========================================= */


    const totalElemento =
        document.createElement(
            "div"
        );


    totalElemento.className =
        "total-cesta";


    /*
       Si hay descuento mostramos:
       Subtotal
       Descuento
       Total

       Si no hay descuento mostramos
       solamente el total.
    */

    if (
        porcentajeDescuento > 0
    ) {


        totalElemento.innerHTML = `

            <div class="linea-resumen">

                <span>
                    Subtotal:
                </span>

                <span>
                    $${subtotalGeneral.toFixed(2)} MXN
                </span>

            </div>


            <div class="linea-resumen linea-descuento">

                <span>
                    Descuento (${porcentajeDescuento}%):
                </span>

                <span>
                    -$${cantidadDescuento.toFixed(2)} MXN
                </span>

            </div>


            <div class="linea-total"></div>


            <div class="linea-resumen total-final">

                <h3>
                    Total:
                </h3>

                <p>
                    $${totalFinal.toFixed(2)} MXN
                </p>

            </div>

        `;


    } else {


        totalElemento.innerHTML = `

            <div class="linea-total"></div>


            <div class="linea-resumen total-final">

                <h3>
                    Total:
                </h3>

                <p>
                    $${subtotalGeneral.toFixed(2)} MXN
                </p>

            </div>

        `;

    }


    contenidoCesta.appendChild(
        totalElemento
    );



    /* =========================================
       BOTÓN FINALIZAR PEDIDO
    ========================================= */


    const botonFinalizar =
        document.createElement(
            "button"
        );


    botonFinalizar.className =
        "btn-finalizar-pedido";


    botonFinalizar.type =
        "button";


    botonFinalizar.textContent =
        "Finalizar pedido";


    botonFinalizar.onclick =
        function() {

            abrirPedido();

        };


    contenidoCesta.appendChild(
        botonFinalizar
    );

}


/* ==================================================
   ELIMINAR PRODUCTO
================================================== */

function eliminarProducto(index) {

    carrito.splice(
        index,
        1
    );

    guardarCarrito();

    actualizarCarrito();
}


/* ==================================================
   NOTIFICACIÓN
================================================== */

function mostrarNotificacion() {

    notificacion.classList.add(
        "mostrar"
    );


    setTimeout(
        function() {

            notificacion.classList.remove(
                "mostrar"
            );

        },
        2500
    );
}


/* ==================================================
   TODOS LOS PRODUCTOS
================================================== */

function mostrarTodosLosProductos() {

    const seccion =
        document.getElementById(
            "productos"
        );


    seccion.scrollIntoView({
        behavior: "smooth"
    });
}


/* ==================================================
   INICIAR CARRITO
================================================== */

actualizarCarrito();

/* ==================================================
   CATÁLOGO COMPLETO
================================================== */


/* ABRIR CATÁLOGO */

function abrirCatalogo() {

    const modalCatalogo =
        document.getElementById(
            "modalCatalogo"
        );


    modalCatalogo.classList.add(
        "activo"
    );


    document.body.style.overflow =
        "hidden";


    crearCatalogo();

}


/* CERRAR CATÁLOGO */

function cerrarCatalogo() {

    const modalCatalogo =
        document.getElementById(
            "modalCatalogo"
        );


    modalCatalogo.classList.remove(
        "activo"
    );


    document.body.style.overflow =
        "auto";

}


/* ==================================================
   CREAR TODOS LOS PRODUCTOS
================================================== */

function crearCatalogo() {

    const contenedor =
        document.getElementById(
            "catalogoProductos"
        );


    /*
       Limpiamos el catálogo antes
       de volver a crearlo.
    */

    contenedor.innerHTML =
        "";


    /*
       Recorremos todos los productos
       que ya tienes en:
       const productos = [...]
    */

    productos.forEach(
        function(producto, index) {

            const tarjeta =
                document.createElement(
                    "div"
                );


            tarjeta.className =
                "catalogo-producto";


            tarjeta.innerHTML = `

                <img
                    src="${producto.imagenes[0]}"
                    alt="${producto.nombre}">


                <div
                    class="catalogo-producto-info">

                    <h3>
                        ${producto.nombre}
                    </h3>


                    <p>
                        ${producto.precio}
                    </p>

                </div>

            `;


            /*
               Al hacer clic en un producto
               se abre su ventana normal
               con todas sus imágenes,
               descripción, color y carrito.
            */

            tarjeta.onclick =
                function() {

                    abrirProducto(index);

                };


            contenedor.appendChild(
                tarjeta
            );

        }
    );

}

/* =========================================
   FINALIZAR PEDIDO
========================================= */


/*
   ABRIR VENTANA DEL PEDIDO
*/

function abrirPedido() {

    /*
       Revisamos que haya productos.
    */

    if (carrito.length === 0) {

        alert(
            "Tu cesta está vacía."
        );

        return;

    }


    const modalPedido =
        document.getElementById(
            "modalPedido"
        );


    modalPedido.classList.add(
        "activo"
    );


    document.body.style.overflow =
        "hidden";

}



/*
   CERRAR VENTANA DEL PEDIDO
*/

function cerrarPedido() {

    const modalPedido =
        document.getElementById(
            "modalPedido"
        );


    modalPedido.classList.remove(
        "activo"
    );


    /*
       Desbloquear la página para
       poder seguir navegando.
    */

    document.body.style.overflow =
        "auto";

}



/* =========================================
   ENVIAR PEDIDO A WHATSAPP
========================================= */

function enviarPedidoWhatsApp() {


    /*
       Obtenemos los datos del cliente.
    */

    const nombre =
        document.getElementById(
            "nombreCliente"
        ).value.trim();


    const pago =
        document.getElementById(
            "metodoPago"
        ).value;


    const entrega =
        document.getElementById(
            "metodoEntrega"
        ).value;



    /*
       Validamos los datos.
    */

    if (nombre === "") {

        alert(
            "Por favor, escribe tu nombre."
        );

        return;

    }


    if (pago === "") {

        alert(
            "Por favor, selecciona un método de pago."
        );

        return;

    }


    if (entrega === "") {

        alert(
            "Por favor, selecciona un método de entrega."
        );

        return;

    }



    /*
       Número de WhatsApp de la tienda.

       México = 52
       Número = 5581567049
    */

    const numeroWhatsApp =
        "5215581567049";



    /*
       Empezamos a crear el mensaje.
    */

    let mensaje =

`¡Hola! ᯓ★

Quiero realizar el siguiente pedido:

୨ৎ Nombre: ${nombre}

୨ৎ Método de pago: ${pago}

୨ৎ Método de entrega: ${entrega}


 PRODUCTOS ⋆.𐙚 ̊
`;



    /*
       Variable para calcular
       el total general.
    */

    let total = 0;



    /*
       Recorremos el carrito.
    */

        carrito.forEach(
        function(item, index) {

            const precioNumero =
                parseFloat(
                    item.precio
                        .replace("MXN", "")
                        .replace("$", "")
                        .trim()
                );


            const subtotal =
                precioNumero *
                item.cantidad;


            total +=
                subtotal;


            mensaje += `

${index + 1}. ${item.nombre}

   Cantidad: ${item.cantidad}

   Color: ${item.color || "Único"}

   Precio unitario: $${precioNumero.toFixed(2)} MXN

   Subtotal: $${subtotal.toFixed(2)} MXN
`;

        }
    );


    /* =========================================
       CALCULAR DESCUENTO
    ========================================= */

    const cantidadDescuento =
        total * (porcentajeDescuento / 100);


    const totalFinal =
        total - cantidadDescuento;


    /* =========================================
       MOSTRAR DESCUENTO SI EXISTE
    ========================================= */

    if (
        codigoAplicado !== "" &&
        porcentajeDescuento > 0
    ) {

        mensaje += `

ೀ Código de descuento: ${codigoAplicado}

ೀ Descuento aplicado: ${porcentajeDescuento}%

ೀ Ahorras: -$${cantidadDescuento.toFixed(2)} MXN
`;

    }


    /* =========================================
       TOTAL FINAL
    ========================================= */

    mensaje += `

୨ৎ────────────୨ৎ

TOTAL DEL PEDIDO ── .✦

$${totalFinal.toFixed(2)} MXN

¡Gracias! .✦ ݁˖
`;



    /*
       Codificamos el mensaje
       para poder enviarlo por URL.
    */

    const mensajeCodificado =
        encodeURIComponent(
            mensaje
        );



    /*
       Creamos el enlace de WhatsApp.
    */

    const enlaceWhatsApp =

        `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;



    /*
       Abrimos WhatsApp.
    */

    window.open(
        enlaceWhatsApp,
        "_blank"
    );

}

/* =========================================
   PEDIDO POR INSTAGRAM
========================================= */


/*
   Guardaremos aquí el pedido que se copiará.
*/

let mensajeInstagram = "";


/*
   PREPARAR PEDIDO PARA INSTAGRAM
*/

function prepararPedidoInstagram() {


    /*
       Obtenemos los datos que el cliente escribió.
    */

    const nombre =
        document.getElementById(
            "nombreCliente"
        ).value.trim();


    const pago =
        document.getElementById(
            "metodoPago"
        ).value;


    const entrega =
        document.getElementById(
            "metodoEntrega"
        ).value;



    /*
       VALIDACIONES
    */

    if (nombre === "") {

        alert(
            "Por favor, escribe tu nombre."
        );

        return;

    }


    if (pago === "") {

        alert(
            "Por favor, selecciona un método de pago."
        );

        return;

    }


    if (entrega === "") {

        alert(
            "Por favor, selecciona un método de entrega."
        );

        return;

    }


    /*
       Empezamos el mensaje.
    */

    let mensaje =

`¡Hola! ᯓ★

Quiero realizar el siguiente pedido:

୨ৎ Nombre: ${nombre}

୨ৎ Método de pago: ${pago}

୨ৎ Método de entrega: ${entrega}


PRODUCTOS ⋆.𐙚 
`;


    /*
       Total del pedido.
    */

    let total = 0;



    /*
       Recorremos todos los productos del carrito.
    */

    carrito.forEach(
        function(item, index) {

            const precioNumero =
                parseFloat(
                    item.precio
                        .replace("MXN", "")
                        .replace("$", "")
                        .trim()
                );


            const subtotal =
                precioNumero *
                item.cantidad;


            total +=
                subtotal;


            mensaje += `

${index + 1}. ${item.nombre}

   Cantidad: ${item.cantidad}

   Color: ${item.color || "Único"}

   Precio unitario: $${precioNumero.toFixed(2)} MXN

   Subtotal: $${subtotal.toFixed(2)} MXN
`;

        }
    );


    /* =========================================
       CALCULAR DESCUENTO
    ========================================= */

    const cantidadDescuento =
        total * (porcentajeDescuento / 100);


    const totalFinal =
        total - cantidadDescuento;


    /* =========================================
       MOSTRAR DESCUENTO SI EXISTE
    ========================================= */

    if (
        codigoAplicado !== "" &&
        porcentajeDescuento > 0
    ) {

        mensaje += `

ೀ Código de descuento: ${codigoAplicado}

ೀ Descuento aplicado: ${porcentajeDescuento}%

ೀ Ahorras: -$${cantidadDescuento.toFixed(2)} MXN
`;

    }


    /* =========================================
       TOTAL FINAL
    ========================================= */

    mensaje += `

୨ৎ────────────୨ৎ

TOTAL DEL PEDIDO ── .✦

$${totalFinal.toFixed(2)} MXN

¡Gracias! .✦ ݁˖
`;



    /*
       Guardamos el mensaje globalmente
       para usarlo después.
    */

    mensajeInstagram = mensaje;


    /*
       Intentamos copiar el pedido.
    */

    navigator.clipboard.writeText(
        mensajeInstagram
    )
    .then(
        function() {


            /*
               Cerramos la ventana de pedido.
            */

            const modalPedido =
                document.getElementById(
                    "modalPedido"
                );

                document.body.style.overflow =
    "hidden";


            modalPedido.classList.remove(
                "activo"
            );


            /*
               Abrimos el aviso.
            */

            const modalInstagram =
                document.getElementById(
                    "modalInstagram"
                );


            modalInstagram.classList.add(
                "activo"
            );

        }
    )
    .catch(
        function() {


            /*
               Si el navegador no permite copiar,
               avisamos al usuario.
            */

            alert(
                "No se pudo copiar automáticamente el pedido. Inténtalo de nuevo."
            );

        }
    );

}



/* =========================================
   ABRIR INSTAGRAM
========================================= */

function abrirInstagram() {


    /*
       Cerramos el aviso.
    */

    const modalInstagram =
        document.getElementById(
            "modalInstagram"
        );


    modalInstagram.classList.remove(
        "activo"
    );


    /*
       Desbloqueamos la página.
       Ahora el usuario puede volver
       a navegar normalmente.
    */

    document.body.style.overflow =
        "auto";


    /*
       TU USUARIO DE INSTAGRAM
    */

    const enlaceInstagram =
        "https://www.instagram.com/_crishop_07/";


    /*
       Abrimos Instagram.
    */

    window.open(
        enlaceInstagram,
        "_blank"
    );

}

/* =========================================
   APLICAR CÓDIGO DE DESCUENTO
========================================= */

function aplicarCodigoDescuento() {

    const inputCodigo =
        document.getElementById(
            "inputCodigoDescuento"
        );


    const mensajeDescuento =
        document.getElementById(
            "mensajeDescuento"
        );


    /*
       Verificamos que exista el campo.
    */

    if (!inputCodigo) {

        return;

    }


    /*
       Obtenemos el código y lo convertimos
       a mayúsculas para que funcione aunque
       el cliente escriba en minúsculas.
    */

    const codigo =
        inputCodigo.value
            .trim()
            .toUpperCase();


    /*
       Si no escribió nada.
    */

    if (codigo === "") {

        mensajeDescuento.textContent =
            "Escribe un código de descuento.";

        mensajeDescuento.className =
            "mensaje-descuento error";

        return;

    }


    /*
       Revisamos si el código existe.
    */

    if (
        codigosDescuento.hasOwnProperty(
            codigo
        )
    ) {


        /*
           Guardamos el código aplicado.
        */

        codigoAplicado =
            codigo;


        /*
           Guardamos el porcentaje.
        */

        porcentajeDescuento =
            codigosDescuento[codigo];


        /*
           Actualizamos el carrito.
        */

        mostrarCesta();


    } else {


        /*
           Si el código no existe,
           quitamos cualquier descuento anterior.
        */

        codigoAplicado =
            "";


        porcentajeDescuento =
            0;


        /*
           Mostramos el mensaje de error.
        */

        mensajeDescuento.textContent =
            "✕ El código de descuento no es válido.";

        mensajeDescuento.className =
            "mensaje-descuento error";

    }

}

/* =========================================
   CARRUSEL DE PRODUCTOS DEL INICIO
========================================= */

function moverProductos(direccion) {

    const ventana =
        document.getElementById(
            "productosVentana"
        );

    if (!ventana) {
        return;
    }


    /*
       Calculamos cuánto se desplazará
       el carrusel cada vez que se presione
       una flecha.
    */

    let distancia;


    /*
       En celular mostramos menos espacio.
    */

    if (window.innerWidth <= 600) {

        distancia =
            ventana.clientWidth;

    } else if (window.innerWidth <= 900) {

        distancia =
            ventana.clientWidth / 2;

    } else {

        distancia =
            ventana.clientWidth / 4;

    }


    /*
       Movemos el scroll horizontal.
    */

    ventana.scrollBy({

        left:
            direccion * distancia,

        behavior:
            "smooth"

    });

}