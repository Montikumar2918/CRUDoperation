async function getUser(){
   const data = await fetch(
      "https://611f26469771bf001785c72e.mockapi.io/users",
      {method: "GET"}
      );
   const users = await data.json();
   //console.log(users);
   document.querySelector(".user-list").innerHTML = ``;
   users.forEach((user) => createUser(user));
}
function createUser({name, avatar, createdAt, id}){
   const info = document.createElement("div");
   info.setAttribute("class", "container");
 
           info.innerHTML +=` 
          <div class="avtar-container">
          
          <img class="avatar" src=${avatar} width="75px" height="75px" />
          </div>

          <div class="details">
         <h3>${name}</h3>
         <p>${new Date(createdAt).toDateString()}</p>
         <button onclick="editUser(${id})">Edit User</button>
         <button onclick="deleteUser(${id})">Delete</button>
         
         </div>
         </div>`;
         document.querySelector(".user-list").append(info)
         document.body.append(info);                 
         }
         getUser();
         // Delete user
         async function deleteUser(id){
            const data = await fetch(
           `https://611f26469771bf001785c72e.mockapi.io/users/${id}`,

            //"https://611f26469771bf001785c72e.mockapi.io/users" + id,
            //"https://611f26469771bf001785c72e.mockapi.io/users/11",

            {method: "DELETE"}
           );
           const user = await data.json();
           console.log(user);
         }
         //Add user
         
            async function addUser() {
               const name = document.querySelector(".add-username").value;
               const avatar = document.querySelector(".add-avatar").value;
               console.log(name,avatar);
               const data = await fetch(
                  "https://611f26469771bf001785c72e.mockapi.io/users",
                  {
                     method: "POST",
                     headers: {
                        "Content-Type": "application/json"
                     },
                     body:JSON.stringify(
                        {
                           name: name,
                           avatar: avatar,
                           createdAt: new Date().toISOString()
                        }
                     ),
                  }
               );
               datas = await data.json();
               getUser()
                document.querySelector(".add-username").value = "";
                document.querySelector(".add-avatar").value = " ";
                datas.forEach((update) => {
                createProfile(update);
                });
                }
                //Edit user
                async function editUser(id) {
                  const name = document.querySelector(".add-username").value;
                  const avatar = document.querySelector(".add-avatar").value;
                  console.log(name,avatar);
                  const data = await fetch(
                     `https://611f26469771bf001785c72e.mockapi.io/users/${id}`,
                     {
                        method: "PUT",
                        headers: {
                           "Content-Type": "application/json"
                        },
                        body:JSON.stringify(
                           {
                              name: name,
                              avatar: avatar,
                              createdAt: new Date().toISOString()
                           }
                        ),
                     }
                  );
                  datas = await data.json();
                  getUser()
                  document.querySelector(".add-username").value = "";
                  document.querySelector(".add-avatar").value = " ";
                  datas.forEach((update) => {
                    createProfile(update);
                  });
                }
              
         
        

      