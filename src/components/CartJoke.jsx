const CartJoke = (item) => {

    // const { created_at, id, url, value, categories } = item
    // let created = new Date(String(created_at))
    // let hours = parseInt((Date.now() - created) / (1000 * 60 * 60), 10)
    // const template = document.createElement('div')

  return (
   
    //    <div class="card">
    //       <div class="icon">
    //           <div class="circle"><i class="fa-sharp fa-solid fa-comment gray"></i></div>
    //       </div>
    //       <div class="info">    
    //       <div class="hard icon_hard ${id}">
    //       <button class="like-button">
    //         ${
    //         isFavorite(id)
    //           ? '<i class="fa-solid fa-heart no_like red" id="${id}"></i>'
    //           : '<i class="fa-regular fa-heart like red" id="${id}"></i>' 
    //          }
    //       </button>
    //       </div>
    //           <div class="id">ID: <a href="${url}">${id}</a>
    //               <i class="fa-solid fa-arrow-up-right-from-square blue"></i>
    //           </div>
              <div>{item.value}</div>
    //           <div class="text_info">   
    //               <div class="date">Last update: <span>${hours} hours ago</span></div>                        
    //               <div class="celebrity">${categories}</div>
    //           </div>
    //       </div> 
    //   </div> 
    
  )
}

export default CartJoke