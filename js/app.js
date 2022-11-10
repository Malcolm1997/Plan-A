const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show")
    })
}

window.addEventListener("scroll", checkBoxes);
checkBoxes()

let paginaElegida

if(localStorage.getItem("paginaElegida") == null){
    paginaElegida = "Hidrogenos"
} else {
    paginaElegida = localStorage.getItem("paginaElegida")
}

const tipoDePagina = (atributo, tipo) => {
    localStorage.setItem(atributo, tipo);
}

let paginasDeRecursos = {
    'renovables' : {
        'servicios': {
            'linkName': ['RSU', 'BioGas'],
            'name':['asdTratamiento de RSU', 'Planta de BioGas']
        },
        'proyectos': {
            'nuevo': {
                'linkName': ['LasJunturas', 'BioGas'],
                'name':['Las Junturas', 'Planta de BioGas']
            },
            'finalizado': {
                'linkName': ['RSU', 'BioGas'],
                'name':['Tratamientoasd de RSU', 'Planta de BioGas']
            }
        },
    },
    'hidrocarburos': {
        'servicios':{
            'linkName': ['Fracking', 'Gasoductos'],
            'name':['Fracking', 'Gasoductos']
        },
        'proyectos':{
            'nuevo':{
                'linkName': ['Nestor', 'BioGas'],
                'name':[' Nuevo Gasoducto Nestor Kirchner', 'Planta de BioGas']
            },
            'finalizado':{
                'linkName': ['Nestor', 'BioGas'],
                'name':['Viejo Gasoducto Nestor Kirchner', 'Planta de BioGas']
            }
        },
    }
}

const irA = (pagina) => {
    paginaUnica(false)
    window.open(`./Page ${paginaElegida}/${pagina}.html`, "_self");
}



const paginaUnica = esUnica => {
    localStorage.setItem("esUnica", esUnica);
}

let ulServicios = document.querySelectorAll(".servicios")
let ulProyectosNuevos = document.querySelectorAll(".proyectosNuevos")
let ulProyectosFinalizado = document.querySelectorAll(".proyectosFinalizados")
let esUnica = localStorage.getItem("esUnica")
ulServicios.innerHTML = ""

if (paginaElegida == 'Renovables') {
    // Renderiza Servicios
    for (let i = 0; i < paginasDeRecursos.renovables.servicios.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulServicios.forEach( el => el.innerHTML += `<li class="dropdown-item" ><a href="./Page Renovables/servicios${paginasDeRecursos.renovables.servicios.linkName[i]}.html" onclick="paginaUnica(false)" >${paginasDeRecursos.renovables.servicios.name[i]}</a></li>`)
        } else {
            ulServicios.forEach( el => el.innerHTML += `<li class="dropdown-item" ><a href="./servicios${paginasDeRecursos.renovables.servicios.linkName[i]}.html" >${paginasDeRecursos.renovables.servicios.name[i]}</a></li>`)
        }
    }
    // Renderiza Proyectos nuevos
    for (let i = 0; i < paginasDeRecursos.renovables.proyectos.nuevo.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulProyectosNuevos.forEach(el => el.innerHTML += `<li class="dropdown-item" ><a href="./Page Renovables/proyecto${paginasDeRecursos.renovables.proyectos.nuevo.linkName[i]}.html" onclick="paginaUnica(false)">${paginasDeRecursos.renovables.proyectos.nuevo.name[i]}</a></li>`)
        } else {
            ulProyectosNuevos.forEach(el => el.innerHTML += `<li class="dropdown-item" ><a href="./proyecto${paginasDeRecursos.renovables.proyectos.nuevo.linkName[i]}.html" >${paginasDeRecursos.renovables.proyectos.nuevo.name[i]}</a></li>`)
        }
    }
    //Renderiza Proyectos Terminados
    for (let i = 0; i < paginasDeRecursos.renovables.proyectos.finalizado.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulProyectosFinalizado.forEach(el => el.innerHTML += `<li class="dropdown-item" ><a href="./Page Renovables/proyecto${paginasDeRecursos.renovables.proyectos.finalizado.linkName[i]}.html" onclick="paginaUnica(false)">${paginasDeRecursos.renovables.proyectos.finalizado.name[i]}</a></li>`)
        } else {
            ulProyectosFinalizado.forEach(el => el.innerHTML += `<li class="dropdown-item" ><a href="./proyecto${paginasDeRecursos.renovables.proyectos.finalizado.linkName[i]}.html" >${paginasDeRecursos.renovables.proyectos.finalizado.name[i]}</a></li>`)
        }
    }
} else {
    //Renderiza Servicios
    for (let i = 0; i < paginasDeRecursos.hidrocarburos.servicios.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulServicios.forEach(el => el.innerHTML += `<li class="dropdown-item" ><a href="./Page Hidrogenos/servicios${paginasDeRecursos.hidrocarburos.servicios.linkName[i]}.html" onclick="paginaUnica(false)">${paginasDeRecursos.hidrocarburos.servicios.name[i]}</a></li>`)
        } else {
            ulServicios.forEach(el => el.innerHTML += `<li class="dropdown-item" ><a href="./servicios${paginasDeRecursos.hidrocarburos.servicios.linkName[i]}.html" >${paginasDeRecursos.hidrocarburos.servicios.name[i]}</a></li>`)
        }
    }
    //Renderiza Proyectos Nuevos
    for (let i = 0; i < paginasDeRecursos.hidrocarburos.proyectos.nuevo.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulProyectosNuevos.forEach(el => el.innerHTML += `<li class="dropdown-item" ><a href="./Page Hidrogenos/proyecto${paginasDeRecursos.hidrocarburos.proyectos.nuevo.linkName[i]}.html" onclick="paginaUnica(false)">${paginasDeRecursos.hidrocarburos.proyectos.nuevo.name[i]}</a></li>`)
        } else {
            ulProyectosNuevos.forEach(el => el.innerHTML += `<li class="dropdown-item" ><a href="./proyecto${paginasDeRecursos.hidrocarburos.proyectos.nuevo.linkName[i]}.html" >${paginasDeRecursos.hidrocarburos.proyectos.nuevo.name[i]}</a></li>`)
        }
    }
    //Renderiza Proyectos Terminados
    for (let i = 0; i < paginasDeRecursos.hidrocarburos.proyectos.finalizado.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulProyectosFinalizado.forEach(el => el.innerHTML += `<li class="dropdown-item" ><a href="./Page Hidrogenos/proyecto${paginasDeRecursos.hidrocarburos.proyectos.finalizado.linkName[i]}.html" onclick="paginaUnica(false)">${paginasDeRecursos.hidrocarburos.proyectos.finalizado.name[i]}</a></li>`)
        } else {
            ulProyectosFinalizado.forEach(el => el.innerHTML += `<li class="dropdown-item" ><a href="./proyecto${paginasDeRecursos.hidrocarburos.proyectos.finalizado.linkName[i]}.html" >${paginasDeRecursos.hidrocarburos.proyectos.finalizado.name[i]}</a></li>`)
        }
    }
}