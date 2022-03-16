var newBugEl = document.getElementById("newBug");
var listBugEl = document.getElementById("listBug");
var resolvedBugEl = document.getElementById("resolvedBugs");

var openBugs = [[ 3455355 , "Jose" ,"Opened on 02/19/2022:<br> The program is not returning the right information. "],
                 [4354543, ,"Opened on 02/20/2022:<br> The GUI is not showing all the options as normal. "]
];
var closedBugs = [[ 4464646, "Eddie" , "Opened on 02/16/2022:<br> Computer keeps freezing when submitting.<br>  Fixed on : Restarted the computer."],
                   [7492103, "Jose" ,"Opened on 02/18/2022:<br> The program wont start. <br>Fixed on 02/19/2022: Restarted the computer."]];

function currentBug() {

    let textOpenBugs = "";

    for (i = 0; i < openBugs.length; i++) {
        if (openBugs[i][1] == null){
            openBugs[i][1] = "None";
        }
    textOpenBugs += "Bug ID: "+ openBugs[i][0]  +" | Assigned to: " + openBugs[i][1] +"  | "+ openBugs[i][2]  + `<div></div>
    <button class="btnUpdate" onclick="updateBug(${i});">Update </button>
    <button class="btnDelete" onclick="deleteBug(${i});">Delete </button>
    <button class="btnAssign" onclick="assignBug(${i});">Assign</button>
    <button class="btnResolve" onclick="resolvedBugs(${i});">Bug Solved</button>
    <div></div>
    <br>`;
    }
    listBugEl.innerHTML = textOpenBugs;
        
    let textClosedBugs = "";

    for (i = 0; i < closedBugs.length; i++) {
        if (closedBugs[i][1] == null){
            closedBugs[i][1] = "None";
        }
    textClosedBugs += "Bug ID: "+ closedBugs[i][0]  +" | Assigned to: " + closedBugs[i][1] +"  | "+ closedBugs[i][2]  + `<div></div>
    <div></div>
    <br>`;
    }
    resolvedBugEl.innerHTML = textClosedBugs;
}
function newBug() {

    var date = new Date() 
    var fDate = getFormattedDate(date)
    let rNum = Math.floor(Math.random() * 1000000) + 999999;
   
    let textOpenBugs = "";

    let word = newBugEl.value;
    if(word == "" || word == " " || word == null || word.length < 9) {
       
        alert("Enter a bug desciption (Minimum of 10 characters) "); 
        return null;
    }

    openBugs.push([rNum , ,"Opened on: " + fDate + ": "+newBugEl.value]);
 
    for (i = 0; i < openBugs.length; i++) {
        if (openBugs[i][1] == null){
            openBugs[i][1] = "None";
        }
    textOpenBugs += "Bug ID: "+ openBugs[i][0]  +" | Assigned to: " + openBugs[i][1] +"  | "+ openBugs[i][2]  + `<div></div>
    <button class="btnUpdate" onclick="updateBug(${i});">Update </button>
    <button class="btnDelete" onclick="deleteBug(${i});">Delete </button>
    <button class="btnAssign" onclick="assignBug(${i});">Assign</button>
    <button class="btnResolve" onclick="resolvedBugs(${i});">Bug Solved</button>
    <div></div>
    <br>`;
    }
    listBugEl.innerHTML = textOpenBugs;

    newBugEl.value = "";

}

function deleteBug(index) {

    let bugDelete = confirm("Are you sure want to delete? This cannot be undone");
    if(bugDelete == false){
        return null;
    }

    let textOpenBugs = "";
    openBugs.splice(index,1);


    for (i = 0; i < openBugs.length; i++) {
        if (openBugs[i][1] == null){
            openBugs[i][1] = "None";
        }
        
       
    textOpenBugs += "Bug ID: "+ openBugs[i][0]  +" | Assigned to: " + openBugs[i][1] +"  | "+ openBugs[i][2]  + `<div></div>
    <button class="btnUpdate" onclick="updateBug(${i});">Update </button>
    <button class="btnDelete" onclick="deleteBug(${i});">Delete </button>
    <button class="btnAssign" onclick="assignBug(${i});">Assign</button>
    <button class="btnResolve" onclick="resolvedBugs(${i});">Bug Solved</button>
    
    <div></div>
    <br>`;
 
    
    }
        
    listBugEl.innerHTML = textOpenBugs;



    /*
    openBugs.forEach(myFunction);
    listBugEl.innerHTML = textOpenBugs;
    function myFunction(item, index) {
        
        textOpenBugs +=  item + `<div></div><button class="btnUpdate" onclick="updateBug(${index});">Update </button>
        <button class="btnDelete" onclick="deleteBug(${index});">Delete </button>
        <button class="btnResolve" onclick="resolvedBugs(${index});">Bug Solved</button><div></div>
        <br>`;
    }
    */
}

function transferBug(index) {



    let textOpenBugs = "";
    openBugs.splice(index,1);
    
    for (i = 0; i < openBugs.length; i++) {
        if (openBugs[i][1] == null){
            openBugs[i][1] = "None";
        }
        
       
    textOpenBugs += "Bug ID: "+ openBugs[i][0]  +" | Assigned to: " + openBugs[i][1] +"  | "+ openBugs[i][2]  + `<div></div>
    <button class="btnUpdate" onclick="updateBug(${i});">Update </button>
    <button class="btnDelete" onclick="deleteBug(${i});">Delete </button>
    <button class="btnAssign" onclick="assignBug(${i});">Assign</button>
    <button class="btnResolve" onclick="resolvedBugs(${i});">Bug Solved</button>
    
    <div></div>
    <br>`;
 
    
    }
        
    listBugEl.innerHTML = textOpenBugs;
   
   
   /*
    openBugs.forEach(myFunction);
    listBugEl.innerHTML = textOpenBugs;
    function myFunction(item, index) {
        
        textOpenBugs +=  item + `<div></div><button class="btnUpdate" onclick="updateBug(${index});">Update </button>
        <button class="btnDelete" onclick="deleteBug(${index});">Delete </button>
        <button class="btnResolve" onclick="resolvedBugs(${index});">Bug Solved</button><div></div>
        <br>`;
    }

*/



}


function assignBug(index) {

    let bugAssign = prompt("Enter assigned persons name");
    if(bugAssign == "" || bugAssign == " " || bugAssign == null || bugAssign.length == 0) {
        return null;
    }
    openBugs[index][1] = bugAssign;
    let textOpenBugs = "";
    for (i = 0; i < openBugs.length; i++) {
        if (openBugs[i][1] == null){
            openBugs[i][1] = "None";
        }
        
       
    textOpenBugs += "Bug ID: "+ openBugs[i][0]  +" | Assigned to: " + openBugs[i][1] +"  | "+ openBugs[i][2]  + `<div></div>
    <button class="btnUpdate" onclick="updateBug(${i});">Update </button>
    <button class="btnDelete" onclick="deleteBug(${i});">Delete </button>
    <button class="btnAssign" onclick="assignBug(${i});">Assign</button>
    <button class="btnResolve" onclick="resolvedBugs(${i});">Bug Solved</button>
    
    <div></div>
    <br>`;

    
    }
        
    listBugEl.innerHTML = textOpenBugs;



}

function updateBug(index) {
    let date = new Date() 
    let fDate = getFormattedDate(date)
    let update = prompt("Enter bug update");
    if(update == "" || update == " " || update == null || update.length == 0) {
        return null;
    }
    let temp = openBugs[index][2]
    openBugs[index][2] = temp + "<br>Updated on "+ fDate + ": " + update;
   
   /* */
   
   let textOpenBugs = "";
   for (i = 0; i < openBugs.length; i++) {
       if (openBugs[i][1] == null){
           openBugs[i][1] = "None";
       }
       
      
   textOpenBugs += "Bug ID: "+ openBugs[i][0]  +" | Assigned to: " + openBugs[i][1] +"  | "+ openBugs[i][2]  + `<div></div>
   <button class="btnUpdate" onclick="updateBug(${i});">Update </button>
   <button class="btnDelete" onclick="deleteBug(${i});">Delete </button>
   <button class="btnAssign" onclick="assignBug(${i});">Assign</button>
   <button class="btnResolve" onclick="resolvedBugs(${i});">Bug Solved</button>
   
   <div></div>
   <br>`;

   
   }
       
   listBugEl.innerHTML = textOpenBugs;

}




function resolvedBugs(index) {
    let date = new Date() 
    let fDate = getFormattedDate(date)
    let solution = prompt("Enter the solution to the bug");
    if(solution == "" || solution == " " || solution == null || solution.length == 0) {
        return null;
    }
    openBugs[index][2] = openBugs[index][2] +  "<br>Fixed on "+ fDate + ": " + solution;
    closedBugs.push(openBugs[index]);
    transferBug(index);

    let textClosedBugs = "";

    for (i = 0; i < closedBugs.length; i++) {
        if (closedBugs[i][1] == null){
            closedBugs[i][1] = "None";
        }
    textClosedBugs += "Bug ID: "+ closedBugs[i][0]  +" | Assigned to: " + closedBugs[i][1] +"  | "+ closedBugs[i][2]  + `<div></div>
    <div></div>
    <br>`;
    }
    resolvedBugEl.innerHTML = textClosedBugs;





    

    /*
    let textResolvedBugs = "";
    closedBugs.forEach(myFunction);
    resolvedBugEl.innerHTML = textResolvedBugs;

    function myFunction(item) {
        
        textResolvedBugs += item + `<br><br>`;
    }
    */
}

function getFormattedDate(date) {
    let year = date.getFullYear();
  
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
  }

