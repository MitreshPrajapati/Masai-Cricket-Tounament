// write js code here corresponding to matches.html

var dataArr=JSON.parse(localStorage.getItem("schedule")) || [];
var favArr=JSON.parse(localStorage.getItem("favourites")) || [];

display(dataArr)

// filter by Venue 
var filter=document.getElementById("filterVenue").value;
    filter.addEventListener("change",venuefilter)
    function venuefilter(dataArr){
        dataArr.forEach(function(elem){
          
            if(filter.value==elem.venue){
              display(dataArr)
            }
        })
        
    }

function display(dataArr){
   
    dataArr.forEach(function(elem){
        var tbody=document.querySelector("tbody");
        var tr=document.createElement("tr")
            
        var td1=document.createElement("td")
             td1.innerText=elem.matchNumber;
        var td2=document.createElement("td")
            td2.innerText=elem.teamA;
        var td3=document.createElement("td")
            td3.innerText=elem.teamB;
        var td4=document.createElement("td")
            td4.innerText=elem.date;
        var td5=document.createElement("td")
            td5.innerText=elem.venue;
        var td6=document.createElement("td")
            td6.innerText="Favourites"
            td6.style.color="green"
            td6.addEventListener("click",function(){
                favfunc(elem);
            })

            tr.append(td1,td2,td3,td4,td5,td6);
            tbody.append(tr);
          

    })
  
  
    function favfunc(elem){
        // event.preventDefault()
      favArr.push(elem)
      localStorage.setItem("favourites",JSON.stringify(favArr));
      window.location.reload();
    }

}

