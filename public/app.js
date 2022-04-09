   const select = document.getElementById('select')
   const visibleDiv = document.getElementById('inputCat')
   const inputTodo = document.getElementById('inputTodo')
   const inputCategory = document.getElementById('inputCategory')
   const btnSubmit = document.getElementById('btnSubmit')
   const addNewTodo = document.getElementById('add')
   

   select.addEventListener('click',(e)=>{
    if(e.target.value === "0"){
      visibleDiv.style.visibility="visible"
    }else{
     visibleDiv.style.visibility="hidden"
    }
   })
  
 
 btnSubmit?.addEventListener('click',async(e)=>{
      if( !inputTodo.value.match(/[A-Za-zА-Яа-яЁё0-9]{3,}/)   ){
        alert("Введите хотя бы три символа")
      }else if(!inputCategory.value.match(/[A-Za-zА-Яа-яЁё0-9]{3,}/) && select.value ==='0'){
        alert("Введите хотя бы три символа")
      }else{
        const responce = await fetch('/todos',{ 
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({text:inputTodo.value,title:inputCategory.value?inputCategory.value:select.value,isCompleted:false}),
        
        })
          const data = await responce.json()
          const zeroOption = document.getElementById('zero')
          const option = document.createElement('option')
          option.innerText=data[1]
          option.setAttribute('value',`${data[1]}`)
          zeroOption.after(option)
          window.location="/projects"
      }
       
    })
 
  

