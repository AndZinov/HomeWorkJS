const allElements = document.querySelectorAll('*')
//Стадия всплытия
allElements.forEach((element) => {
    element.addEventListener("click", (event) =>{
        if(event.currentTarget.tagName === 'DIV'){
            event.stopPropagation()
        }
         alert(`Всплытие: ${element.tagName}`)
    })
    //Стадия погружения
    element.addEventListener("click", () =>{
        alert(`Всплытие: ${element.tagName}`)
   },true)
})

//Остановка всплытия
// div.addEventListener("click", (event) => {
//     event.stopPropagation();
//   });



// body.addEventListener("click", () => alert("body"));
// div.addEventListener("click", () => alert("div"));
// p.addEventListener("click", () => alert("p"));

