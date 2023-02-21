let inputTask=document.getElementById('task-input')
let addButton=document.getElementById('add-btn')
let taskList=document.getElementById('tasklist')

addButton.addEventListener('click',()=>{
    let listDiv=document.createElement('div')
    listDiv.classList.add('list-div')

    let list=document.createElement('li')
    list.innerText=`${inputTask.value}`
    list.classList.add('newtasklist')
    listDiv.appendChild(list)

    let doneButton=document.createElement("button")
    doneButton.innerHTML='<i class="fa-solid fa-check"></i>'
    doneButton.classList.add('donebtn')
    listDiv.appendChild(doneButton)

    let deleteButton=document.createElement("button")
    deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>'
    deleteButton.classList.add('deletebtn')
    listDiv.appendChild(deleteButton)

    if (inputTask.value===''){
        alert("Enter a Task")
    }else{
        taskList.appendChild(listDiv)
    }

    doneButton.addEventListener('click',function(){
        list.style.textDecoration='line-through'
    })

    deleteButton.addEventListener('click',function(){
        list.parentElement.remove()
    })
})