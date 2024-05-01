document.addEventListener("DOMContentLoaded", function(){
    fetchUsers();
})
let users=[];

async function fetchUsers(){
    const response=await fetch("https://lucifer-quotes.vercel.app/api/quotes/25")
    users=await response.json();
    // console.log("users lists:",users);
    renderUsers();
}
// fetchUsers();
function renderUsers(){
    const userList=document.getElementById("userList");
    userList.innerHTML="";
    users.forEach((user,index)=>{
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${index + 1}</td>
        <td style="color:darkblue">${user.quote}</td>
        <td style="color:green">${user.author}</td>`
        userList.appendChild(row);
    });
}