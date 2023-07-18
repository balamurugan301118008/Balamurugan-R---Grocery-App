// <----------target to the all Elements ------>


// const btn = document.querySelector('.submit-btn')
// const input = document.querySelector('form #grocery')
// const clearBtn = document.querySelector('.clear-btn')
// const list = document.querySelector('.grocery-list')
// const listCon = document.querySelector('.grocery-container')
// const alert = document.querySelector('.alert')


// window.addEventListener('DOMContentLoaded',(e)=>{
//     clearBtn.style.display = "none";
// })


// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//    let ele = document.createElement('li')
//    ele.innerText = list
// })






































// const input = document.querySelector('form #grocery')
// const btn = document.querySelector('.submit-btn')

// const listCon = document.querySelector('.grocery-list')
// const form = document.querySelector('.submit-btn')
// const removeAll = document.querySelector('.clear-btn')
// const p = document.querySelector('.alert')




// form.addEventListener('click',function(e){

//     if(input.value !== " "){
//         let list = document.createElement('li')
//         list.innerText = input.value
//         list.style.listStyle = "none";
//         listCon.append(list);
//         input.value = " ";

//         let icon = document.createElement('span');
//         icon.innerHTML ='<i class="fa-solid fa-trash"></i>'
//         list.append(icon)
//         removeAll.style.display = "block"
//         displayAlerts('item to be added')

//         icon.addEventListener('click',function(e){
//             e.target.parentElement.parentElement.remove()
//             displayAlerts('item to be deleted')const input = document.querySelector('form #grocery')
// const btn = document.querySelector('.submit-btn')

const listCon = document.querySelector('.grocery-list')
const form = document.querySelector('.submit-btn')
const removeAll = document.querySelector('.clear-btn')
const p = document.querySelector('p')

const input = document.querySelector('#grocery')



window.addEventListener('DOMContentLoaded', () => {
    removeAll.style.display = "none";
})

form.addEventListener('click', function (e) {
    e.preventDefault()

    if (input.value !== "") {
        let list = document.createElement('li')
        list.innerText = input.value
        list.style.listStyle = "none";
        listCon.append(list);
        input.value = " ";

        let icon = document.createElement('span');
        icon.innerHTML = '<i class="fa-solid fa-trash"></i>'
        list.append(icon)
        removeAll.style.display = "block"
        displayAlerts("item to be added","green","blue")

        icon.addEventListener('click', function (e) {
            e.target.parentElement.parentElement.remove()
             displayAlerts("item to be deleted","red","black")
        })
    } else {
        alert("Please enter value")
    }


})
removeAll.addEventListener('click', function (event) {
    // event.target.parentElement.remove(
    if(event.target.listCon.value !==""){
        listCon.innerText =" ";
    }
    displayAlerts("empty list","red","yellow")
    // input.value = " ";
})
// // <--------displayAlerts part --------->

function displayAlerts(e) {
    p.innerText = e
    window.setTimeout(() => {
        p.innerText = " ";
    }, 2000);
}
console.log(p);

function displayAlerts(actives,color,back){
    p.innerText = actives
    p.style.color = color
    p.style.background = back
    window.setTimeout(function(){
        p.innerText = ""
        p.style.color = ""
        p.style.background = ""
    },1000)
}















