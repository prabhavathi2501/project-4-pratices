async function foo(){
    try {
     const res = fetch("https://jsonplaceholder.typicode.com/users");
   res
     .then((data) => data.json())
     .then((data1) => {
       //console.log(result)
        for (var i = 0; i < 16; i++) {
         //console.log(data1[i])
         const div = document.createElement("div");
         div.innerHTML = `<div class="row row-cols-1 row-cols-md-4 ">
           <div class="col">
             <div class="card">
               
               <div class="card-body">
                 <h5 class="card-title">name:${data1[0].name}</h5>
                 <p class="card-text"><b><i>email: ${data1[0].email}</i></b></p>
                 <p class="card-text"><b><i>street: ${data1[0].address.street}</i></b></p>
                 <p class="card-text"><b><i>city: ${data1[0].address.city}</i></b></p>
                 
               </div>
             </div>
           </div>
           </div>`;
         document.body.append(div);
       }
     });
   } catch (error) {
       console.log(error)
    }
   }
   foo();
  