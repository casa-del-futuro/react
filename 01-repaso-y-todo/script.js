function logTask(){
    //capturamos el body
    const body = document.body
    //crear la alerta
    const pop = '<div id="pop" class="card"><div class="content"><span class="title">Tarea creada con exito</span><div class="actions"><button onclick="removePop()" type="button" class="close">X</button></div>    </div></div>' 
    //añadir la alerta al body 
    body.insertAdjacentHTML("afterbegin", pop)
}

function removePop() {
    //capturamos el body
    const body = document.body
    //capturo el pop de la alert
    const pop = document.getElementById('pop')
    //remover el elemento
    body.removeChild(pop)
}


function addTask() {
    // capturar el valor del input
    const input = document.querySelector("#input").value
    //capturar section donde van las cartas
    const section = document.querySelector("section")
    //Crear el task para añadirla
    const task = `<article>
                    <p>${input}</p>
                </article>`
    //crear una tarjeta para la tarea
    section.insertAdjacentHTML("beforeend", task)
    //seteo el input para agregart una tarea
    document.querySelector("#input").value = ""
    //alertar al usuario
    logTask()
}