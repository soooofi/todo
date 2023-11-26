let add = document.getElementById("add")
let input = document.getElementById("input")
let ul = document.getElementById("items")

add.addEventListener("click", (e) => {
    e.preventDefault()
    if(ul.children[0].className =="emptymsg"){
        ul.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling.value
    // console.log(currentInput);

    let newLi = document.createElement("li")
    // newLi.classList.add("list-group-item")
    newLi.className = "list-group-item d-flex justify-content-between"
    // newLi.textContent = currentInput
    newLi.innerHTML = `
                        <h4>${currentInput}</h4>
                        <button id="edit" type="button" class="btn btn-success"
                        onclick="editItem(this)">Edit</button>
                        <button id="remove" type="button" class="btn btn-danger"
                        onclick="removeItem(this)">Remove</button>`
    ul.appendChild(newLi)
})
function removeItem(currElement){
     currElement.parentElement.remove()
     if(ul.children.length <=0){
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.classList.add("emptymsg")
        newEmptyMsg.textContent = "nothing to add"

        ul.appendChild(newEmptyMsg)
     }
}

function editItem(currElement){
     
    if(currElement.textContent == "update")
    {
        currElement.textContent = "Edit"
        let curItemName = currElement.previousElementSibling.value
        let currHeading = document.createElement("h4")
        currHeading.textContent = curItemName
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)
    }
    else 
    {
    currElement.textContent = "update"
    let currentItem = currElement.previousElementSibling.textContent
    let currInput = document.createElement("input")
    currInput.type = "text"
    currInput.placeholder = "add edited work"
    // currInput.type = "text"
    currInput.value = currentItem

    currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }

    


}

// function addToDo(e){
//     let currentBtn = e.currentTarget;
//     let currentInput = currentBtn.previousElementSibling
//     console.log(currentInput);
// }
