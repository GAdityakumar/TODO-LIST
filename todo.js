document.querySelector('#push').onclick = function(){
    
    
    if(document.querySelector('#newtask input').value.length === 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">delete</button>   
            </div>
        `
        ;
        document.querySelector('#newtask input').value = '';
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
function s(){
    var i=document.getElementById("abc");
    if(i.value=="")
        {
        document.getElementById("push").style.background = "#0d75ec";
        document.getElementById("push").disabled=true;
        
        }
      else if (i.value==0) {
    document.getElementById("push").style.background = "#0d75ec";
        document.getElementById("push").disabled=false;     
        }
      else{
        document.getElementById("push").style.background = "green";
        document.getElementById("push").disabled=false;  
      }

   }
  
