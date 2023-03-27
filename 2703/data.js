fetch('https://fakestoreapi.com/products')
.then((data)=>{
    return data.json()
})
.then((objdata)=>{
    let trdata="";
    const newarr=objdata.map((cval)=>{
          trdata+=`<tr>
          <td>${cval.id}</td>
          <td>${cval.title}</td>
          <td>${cval.price}</td>
          <td>${cval.category}</td>
          <td>${cval.description}</td>
          <td><img src="${cval.image}"height="75px"width="75px"></td>
      </tr>`;
      // console.log(cval.title);
    
  })
  document.getElementById("data").innerHTML=trdata;
    
})

 
  