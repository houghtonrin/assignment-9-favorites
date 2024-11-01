let books = [
    {name: "Wuthering Heights",
    type: "Fiction",
    year: 1847
    }
];

window.onload = function(){
    addBook();
};

document.getElementById("addValue").onclick = function(){
   let bname = document.getElementById("txtName").value;
   let btype = document.getElementById("txtType").value;
   let byear = document.getElementById("txtYear").value;
   let obj = {
    name: bname,
    type: btype,
    year: byear
   };
   books.push(obj);
   addBook();
};

function addBook(){
    let i = books.length-1;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = books[i].name;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = books[i].type;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.textContent = books[i].year;
    tr.appendChild(td3);
    document.getElementById("tbl").appendChild(tr);
}; 