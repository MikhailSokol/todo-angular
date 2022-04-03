const check = document.querySelectorAll('.form-check-input')
const arrOfNode = [...check]
arrOfNode.forEach((el)=>{
el.addEventListener('click',async(e)=>{
  const responce = await fetch(`/projects/${el.closest('.p-3').id}/todo/${e.target.id} `,{
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({isCompleted:e.target.value, idChecked:e.target.value}),
  })
    const data = await responce.json()
    console.log(data)
    if (data[1]==true){
      el.nextSibling.nextSibling.style.textDecoration="line-through"
    }else if(data[1]==false){
      el.nextSibling.nextSibling.style.textDecoration="none"
    }
})
})

