// write js code here corresponding to index.html
// You should add submit event on the form


var form=document.querySelector("#masaiForm")
    form.addEventListener("submit",subfunc)
var dataArr= JSON.parse(localStorage.getItem("schedule")) || [];
    
function subfunc(){
        event.preventDefault()
        var matchdata={
            matchNumber : form.matchNum.value,
            teamA : form.teamA.value,
            teamB : form.teamB.value,
            date : form.date.value,
            venue : form.venue.value,
        }
       
        dataArr.push(matchdata);
        localStorage.setItem("schedule",JSON.stringify(dataArr))
        window.location.reload();
  
    }
    