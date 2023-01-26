$(".agregar").click(AddItem)
$(".Lista").on("click", ".check", checar)
$(".Lista").on("click", ".delete", eliminar)

function AddItem(e){
    e.preventDefault()
    let newItem = $("#newText").val()
    $(".Lista").append(` <div class=recuadros> <li> <p id="item">${newItem}</p> <p></p>
    <button class="check" type="submit">Check</button> 
    <button class="delete" type="submit">Delete</button> <p></p> </li> </div> `)
}

function checar(){
    let sibling_button = $(this).siblings("#item")
    sibling_button.toggleClass('checked')
}

function eliminar(){
    let grandpa = $(this).parent().parent()
    grandpa.remove()
}

