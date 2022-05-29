let $ = document

let inputElem = $.querySelector("#input-field")
let colorBox = $.querySelectorAll(".color-box")
let btnSaveElem = $.querySelector("#btn-save")
let btnDeletElem = $.querySelector("#btn-delete")
let noteContainer = $.querySelector("#listed")

colorBox.forEach(function (items) {
    items.addEventListener('click' , function (event) {
        let mainColor = event.target.style.backgroundColor
        inputElem.style.backgroundColor = mainColor
    })
})

function generateNewNote () {
    let newNoteDivElem = $.createElement('div')
    newNoteDivElem.className = "card shadow-sm rounded"

    let newNoteP = $.createElement("p")
    newNoteP.className = "card-text p-3"
    newNoteP.innerHTML = inputElem.value

    let inputBg = inputElem.style.backgroundColor
    newNoteDivElem.style.backgroundColor = inputBg
    newNoteDivElem.addEventListener("click" , removeNote)

    newNoteDivElem.append(newNoteP)

    noteContainer.append(newNoteDivElem)

    inputElem.value = ''
    inputElem.style.backgroundColor = "#fff"

    // console.log(newNoteP)
}

function  removeNote(e) {
    e.target.parentElement.remove()
}

btnDeletElem.addEventListener("click" , function () {
    inputElem.value = ''
    inputElem.style.backgroundColor = "#fff"
})

inputElem.addEventListener('keydown' , function (e) {
  if(inputElem.value ) {
    if (e.keyCode === 13 ) {
        generateNewNote()
    }
  }
})


btnSaveElem.addEventListener("click", function () {
    generateNewNote()
})