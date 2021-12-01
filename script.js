function AddTask(x,y,z)
{
    
    var todayDate = new Date().toISOString().slice(0, 10);
    let result = todayDate.match(/-\d\d/g);
    let update=y.match(/-\d\d/g);
    if(x!="")
    {
        if(y!="")
        {
            if(z!="")
            {
                if(result[1]===update[1] && result[0] === update[0])
                {
                    document.getElementById("ptdy").style.display="none";
                    
                    document.getElementById("Time").value="";
                    document.getElementById("Date").value="";
                    document.getElementById("task").value="";

                    
                    var radio = document.createElement("INPUT");
                    radio.setAttribute("type", "radio");
                    radio.id="rdio";
                    document.getElementById("Tsktdy").append(radio);
                    
                   
        
                    var label1 = document.createElement("label");
                    label1.innerHTML = x+"<br>";      
                    label1.className="Label";
                    document.getElementById("Tsktdy").append(label1);

        
                    var label2 = document.createElement("label");
                    label2.innerHTML = "2021"+update[0]+update[1]+" at ";      
                    label2.className="Label";
                    document.getElementById("Tsktdy").append(label2);

                    var label3 = document.createElement("label");
                    label3.innerHTML = z+"<br>";      
                    label3.className="Label";
                    document.getElementById("Tsktdy").append(label3);

                    radio.onclick= function(){
                        radio.remove();
                        label1.remove();
                        label2.remove();
                        label3.remove();
                       
                       
                        document.getElementById("pctdy").style.display="none";
                        document.getElementById("ptsktdy").append(label1);
                        document.getElementById("ptsktdy").append(label2);
                        document.getElementById("ptsktdy").append(label3);
                        document.getElementById("Cmplt").style.display = "none";
                    }
                }
                else if( ( result[1]<=update[1]  && result[0] < update[0])|| ( result[1] < update[1] && result[0] <= update[0]) )
                {

                    document.getElementById("ptmro").style.display="none";
                    document.getElementById("Time").value="";
                    document.getElementById("Date").value="";
                    document.getElementById("task").value="";

                    var radio = document.createElement("INPUT");
                    radio.id="rdio";
                    radio.setAttribute("type", "radio");
                    document.getElementById("Tsktmro").appendChild(radio);
        
                    var label1 = document.createElement("label");
                    label1.innerHTML = x+"<br>";   
                    label1.className="Label";
                    document.getElementById("Tsktmro").appendChild(label1);
        
                    var label2 = document.createElement("label");
                    label2.innerHTML = "2021"+update[0]+update[1]+" at ";           
                    label2.className="Label";
                    document.getElementById("Tsktmro").appendChild(label2);

        
                    var label3 = document.createElement("label");
                    label3.innerHTML = z+"<br>";      
                    label3.className="Label";
                    document.getElementById("Tsktmro").appendChild(label3);
            


                    radio.onclick= function(){
                        radio.remove();
                        label1.remove();
                        label2.remove();
                        label3.remove();
                        
                       
            
                        document.getElementById("pctmro").style.display="none";
                        document.getElementById("ptsktmro").append(label1);
                        document.getElementById("ptsktmro").append(label2);
                        document.getElementById("ptsktmro").append(label3);
                        document.getElementById("Cmplt").style.display = "none";


                    }

                }
                else if((result[1]<=update[1] && result[0] > update[0] )|| result[1] > update[1] )
                {

                    document.getElementById("pystd").style.display="none";
                    document.getElementById("Time").value="";
                    document.getElementById("Date").value="";
                    document.getElementById("task").value="";

                    var radio = document.createElement("INPUT");
                    radio.setAttribute("type", "radio");
                    radio.id="rdio";
                    document.getElementById("Tskystd").append(radio);

        
                    var label1 = document.createElement("label");
                    label1.innerHTML = x+"<br>";      
                    label1.className="Label";
                    document.getElementById("Tskystd").append(label1);

        
                    var label2 = document.createElement("label");
                    label2.innerHTML = "2021"+update[0]+update[1]+" at ";          
                    label2.className="Label";
                    document.getElementById("Tskystd").append(label2);

                    var label3 = document.createElement("label");
                    label3.innerHTML = z+"<br>";      
                    label3.className="Label";
                    document.getElementById("Tskystd").append(label3);

                    radio.onclick= function(){
                        radio.remove();
                        label1.remove();
                        label2.remove();
                        label3.remove();
                        
                        
                        document.getElementById("pcystd").style.display="none";
                        document.getElementById("ptskystd").append(label1);
                        document.getElementById("ptskystd").append(label2);
                        document.getElementById("ptskystd").append(label3);
                        document.getElementById("Cmplt").style.display = "none";

                    }

                }
        
            }
            else
            {
                alert("Please Select Time.");
            }
        }
        else
        {
            alert("Please Select Date.");
        }
    }
    else
    {
        alert("Please Write The Task.");
    }

}

var menuState = 0;
function w3_open() 
{
    
    if (menuState === 0) 
    {
        menuState = 1;
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("completed").style.display = "none";
        document.getElementById("Dummy").style.marginLeft = "160px";
        document.getElementById("Tasks").style.marginLeft = "160px";
        document.getElementById("Cmplt").style.marginLeft = "160px";
    } 
    else 
    {
        menuState = 0;
        document.getElementById("Tasks").style.display = "block";
        document.getElementById("Tsktmro").style.display = "block";
        document.getElementById("Tskystd").style.display = "block";
        document.getElementById("Tsktdy").style.display = "block";
        document.getElementById("completed").style.display = "none";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("Tasks").style.marginLeft = "5px";
        document.getElementById("Dummy").style.marginLeft = "0px";
        document.getElementById("Cmplt").style.display = "none";
    }
}

function today()
{
    document.getElementById("Tsktdy").style.display = "block";
    document.getElementById("Tsktmro").style.display = "none";
    document.getElementById("Tskystd").style.display = "none";
    document.getElementById("Tasks").style.display = "block";
    document.getElementById("Cmplt").style.display = "none";
    document.getElementById("completed").style.display = "none";

    
}
function after()
{
    document.getElementById("Tsktmro").style.display = "block";
    document.getElementById("Tsktdy").style.display = "none";
    document.getElementById("Tskystd").style.display = "none";
    document.getElementById("Tasks").style.display = "block";
    document.getElementById("Cmplt").style.display = "none";
    document.getElementById("completed").style.display = "none";


}
function before()
{
    document.getElementById("Tskystd").style.display = "block";
    document.getElementById("Tsktmro").style.display = "none";
    document.getElementById("Tsktdy").style.display = "none";
    document.getElementById("Tasks").style.display = "block";
    document.getElementById("Cmplt").style.display = "none";
    document.getElementById("completed").style.display = "none";

  
}

function Complete(){
    document.getElementById("completed").style.marginLeft = "0px";
    document.getElementById("Cmplt").style.marginLeft = "170px";


    document.getElementById("Cmplt").style.display = "block";
    document.getElementById("completed").style.display = "block";
    
    document.getElementById("Tasks").style.display = "none";
    
}