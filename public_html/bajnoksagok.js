/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*function GetCSName() {
  var elem = document.getElementById('http://94.177.230.203:8080/sport/rest/championship/namedescription/all');
  var rootElement = document.documentElement;
  var firstTier = rootElement.childNodes;
    var name = firstTier[0];
    var frontend= firstTier[1];
    var backend= firstTier[2];
    
}*/


            var xmlhttp = new XMLHttpRequest();
            var Exmlhttp = new XMLHttpRequest();
            //var url = "http://94.177.230.203:8080/sport/rest/championship/namedescription/all";
            var url = "http://94.177.230.203:8080/sport/rest/championship/entity/all";

            xmlhttp.onreadystatechange = function() {
                //if (this.readyState == 4 && this.status == 200) {
                
            
                    
                    /*var script = document.createElement('script');
                    script.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js";
                    script.type = 'text/javascript';
                    document.getElementsByTagName('head').appendChild(script);*/

                    if (this.readyState === 4 && this.status === 200) {
                    var myArr = JSON.parse(this.responseText);
                    myFunction(myArr);
                }
                    
                     
         $( "#accordion" ).accordion();
      
      
      $( "#tabs" ).tabs();
                    
                //}
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            
            var serialid;
                var seasonid;
            
            var filesave = new XMLHttpRequest();
            var fileseason = new XMLHttpRequest();
                var fileseason2 = new XMLHttpRequest();
                var fileserial = new XMLHttpRequest();
            var fileserial2 = new XMLHttpRequest();
            fileserial2.onreadystatechange = function() { 
                    var seriala=JSON.parse(this.responseText);
                    serialid= seriala[seriala.length-1].id;
                
            };
            fileseason2.onreadystatechange = function() {
                    var seasona = JSON.parse(this.responseText);
                    seasonid= seasona[seasona.length-1].id;
                
            };
            
            
            
            //SAVE----------------------------
            var saveurl="http://94.177.230.203:8080/sport/rest/championship/save";
            var saveserial="http://94.177.230.203:8080/sport/rest/seria/save";
            var saveseason="http://94.177.230.203:8080/sport/rest/season/save";
             var loadserial="http://94.177.230.203:8080/sport/rest/seria/entity/all";
            var loadseason="http://94.177.230.203:8080/sport/rest/season/entity/all";
            
           
            
            function Save(){
                
            
            //fileseason.open("GET", saveseason, true);
            fileseason.open("POST", saveseason);
            fileseason.setRequestHeader("accept","application/json;charset=utf-8");
            fileseason.setRequestHeader("Content-Type", "application/json");
            
            
           /* fileseason.toJSON = function() { 
                return {
                'name'     : $('#Sport_season').val(),
                'description' : 0
            };}  ;
        
            var seasonid;
        
            fileseason.onreadystatechange = function() {
                
                     seasonid = JSON.parse(this.responseText).id;
                   
            };*/
           

        
            //JSON.stringify(fileseason);
            
            var data=JSON.stringify({"name": $('#Sport_season').val(), "description": "" });
            
            fileseason.send(data);
            
           
            
            
            
            fileserial.open("POST", saveserial);
            fileserial.setRequestHeader("accept","application/json;charset=utf-8");
            fileserial.setRequestHeader("Content-Type", "application/json");
            
            
            /*fileserial.toJSON = function() { 
                return {
                'name'     : $('#Sport_seria').val(),
                'description' : 0
            };}  ;
        
            var serialid;
        
            fileserial.onreadystatechange = function() {
                
                     serialid = JSON.parse(this.responseText).id;
                   
            };
        
            JSON.stringify(fileserial);*/
            
            data=JSON.stringify({"name": $('#Sport_seria').val(), "description": "" });
            
            fileserial.send(data);
            
           
            
            filesave.open("POST", saveurl, true);
            filesave.setRequestHeader("Content-Type", "application/json");
            
            
            /*filesave.toJSON = function() { 
                
                return {
                'name'     : $('#Sport_name').val(),
                'description' : 0,
                'startDate'             : $('#Sport_sData').val(),
                'endDate'             : $('#Sport_eData').val(),
                'seasonid'             : seasonid,
                'seriaid'             : serialid,
                'conditionid'             : 0
            };}  ;

   
            JSON.stringify(filesave);*/
                
                
                fileseason2.open("GET", loadseason, true);
                
                
        
                
               
                fileserial2.open("GET", loadserial, true);
                

                
                
                data=JSON.stringify({ "name": $('#Sport_name').val(), "description": "", 
                'startDate'             : $('#Sport_sData').val(),
                'endDate'             : $('#Sport_eData').val(),
                'seasonid'             : seasonid,
                'seriaid'             : serialid,
                'conditionid'             : [0] });
            
            //filesave.send(data);
            
            }
            
            //END SAVE-----------------------
            
            Exmlhttp.onreadystatechange = function() {
                
                    var myArr = JSON.parse(this.responseText);
                    EmyFunction(myArr);
                    
            };
            Exmlhttp.open("GET", url, true);
            Exmlhttp.send();

            function myFunction(arr) {
                
                /*document.getElementById("id01").innerHTML="<div id=\"tabs1\" class=\"centered2a\">"
                    +"<ul>";
           
            //console.log(arr);
            for (i = 0; i < arr.length; i++) {
                    //document.getElementById("id01").innerHTML += "<br><a href=\"valami.html\">" + arr[i].name  + "</a>";
                    document.getElementById("id01").innerHTML +="<li><a href=\"#tabs1-"+i.toString()+"\">"+arr[i].name+"</a></li>";
                }
                
                document.getElementById("id01").innerHTML +="</ul>";
                
            for (i = 0; i < arr.length; i++) {
                    //document.getElementById("id01").innerHTML += "<br><a href=\"valami.html\">" + arr[i].name  + "</a>";
                    document.getElementById("id01").innerHTML +="<div id=\"tabs1-"+i.toString()+"\">"
                                                                    +"<p>"+arr[i].name+"</p>"
                                                                +"</div>";
                }
                document.getElementById("id01").innerHTML +="</div>";*/
                
                
               /* for(x in arr){
                var p=document.createElement("P");
                p.innerHTML=contributors[x].login;
                document.querySelector("div").appendChild(p);*/
                
                
                
                document.getElementById("tabs-1").innerHTML="<div id=\"accordion\"></div>";
                                //document.getElementById("tabs-1").innerHTML +="</div>";
            
           
            //console.log(arr);
            for (i = 0; i < arr.length; i++) {
                    //document.getElementById("id01").innerHTML += "<br><a href=\"valami.html\">" + arr[i].name  + "</a>";
                    document.getElementById("accordion").innerHTML +="<h3><a href=\"#\">"+arr[i].name+"</a></h3><div><p>"+
                    "Széria: "+arr[i].seria.name+"\nSzezon: "+arr[i].season.name
                    +"</p></div>";
                }
                
  
            }
            
            function EmyFunction(arr) {
                
                var sor="";
                
                document.getElementById("eredmeny-tabs-1").innerHTML="<div id=\'Eaccordion\'></div>";
                //document.getElementById("eredmeny-tabs-1").innerHTML +="</div>";
           
            //console.log(arr);
            /*for (i = 0; i < arr.length; i++) {
                    //document.getElementById("id01").innerHTML += "<br><a href=\"valami.html\">" + arr[i].name  + "</a>";
                    document.getElementById("Eaccordion").innerHTML +="<h3><a href=\"#\">"+arr[i].name+"</a></h3><div><p>"+
                    "<table style=\"width:100%\"><tr><th>Versenyek</th><th>Leírás</th></tr>";
                    for (j = 0; j < arr[i].event.length; j++) {
                        sor="<tr><td>"+arr[i].event[j].sport.name+"</td><td>"+arr[i].event[j].sport.description+"</td></tr>";
                        document.getElementById("Eaccordion").innerHTML +=sor;
                    }
                    document.getElementById("Eaccordion").innerHTML +="</table></p></div>";
                }*/
                
                for (i = 0; i < arr.length; i++) {
                    //document.getElementById("id01").innerHTML += "<br><a href=\"valami.html\">" + arr[i].name  + "</a>";
                    sor+="<h3><a href=\"#\">"+arr[i].name+"</a></h3><div><p>"+
                    "<table style=\"width:100%\"><tr><th>Versenyek</th><th>Leírás</th></tr>";
                    for (j = 0; j < arr[i].event.length; j++) {
                        sor+="<tr><td>"+arr[i].event[j].sport.name+"</td><td>"+arr[i].event[j].sport.description+"</td></tr>";
                        //document.getElementById("Eaccordion").innerHTML +=sor;
                    }
                    sor +="</table></p></div>";
                }
                
                document.getElementById("Eaccordion").innerHTML =sor;
                
                document.getElementById("Eaccordion").accordion({autoheight:false,collapsible:true});
  
            }
            
            
            
            /*function mySend() {
           
            document.getElementById("id01").innerHTML = "Size: " + arr.size + " / " + arr.frontend + " / " + arr.backend;
            }*/