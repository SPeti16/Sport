            var serialid=0;
            var seasonid=0;
            var data;
            var userName="Users";
            var passWord="passwd";
            
            var filesave = new XMLHttpRequest();
            var fileseason = new XMLHttpRequest();
            var fileseason2 = new XMLHttpRequest();
            var fileserial = new XMLHttpRequest();
            var fileserial2 = new XMLHttpRequest();
            
            
            
            fileserial2.onreadystatechange = function() { 
                if(serialid===0){
                    var seriala=JSON.parse(this.responseText);
                    serialid= seriala[seriala.length-1].id;
                
            }
                
            };
            
            fileseason2.onreadystatechange = function() {
                if(seasonid===0){
                    var seasona = JSON.parse(this.responseText);
                    seasonid= seasona[seasona.length-1].id;
                }
            
            };
            
            
            
            
            var saveurl="http://94.177.230.203:8080/sport/rest/championship/save";
            var saveserial="http://94.177.230.203:8080/sport/rest/seria/save";
            var saveseason="http://94.177.230.203:8080/sport/rest/season/save";
            var loadserial="http://94.177.230.203:8080/sport/rest/seria/entity/all";
            var loadseason="http://94.177.230.203:8080/sport/rest/season/entity/all";
            
            
            fileseason.open("POST", saveseason, true);
            fileseason.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            fileseason.addEventListener('load', seasonListener);
            fileseason.setRequestHeader("Authorization", authenticateUser(userName, passWord));
            function seasonListener(){document.body.innerHTML = request.responseText;}
            

            fileserial.open("POST", saveserial, true);
            fileserial.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            fileserial.addEventListener('load', serialListener);
            fileserial.setRequestHeader("Authorization", authenticateUser(userName, passWord));
            function serialListener(){document.body.innerHTML = request.responseText;}
            
            fileseason2.open("GET", loadseason, true);
            fileserial2.open("GET", loadserial, true);
                
            filesave.open("POST", saveurl, true);
            filesave.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            filesave.addEventListener('load', fileListener);
            function fileListener(){document.body.innerHTML = request.responseText;}
            //filesave.setRequestHeader("Content-Type", "application/json");
                

                
function authenticateUser(user, password)
{
    var token = user + ":" + password;

    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    var hash = btoa(token); 

    return "Basic " + hash;
}

               

 function Save2(){
     
     data=JSON.stringify({"name": $('#Sport_season').val(), "description": "" });
            
            fileseason.send(data);
            
     
      data=JSON.stringify({"name": $('#Sport_seria').val(), "description": "" });
            
            fileserial.send(data);
            
      data=JSON.stringify({ "name": $('#Sport_name').val(), "description": "", 
                'startDate'             : $('#Sport_sData').val(),
                'endDate'             : $('#Sport_eData').val(),
                'seasonid'             : (seasonid+1),
                'seriaid'             : (serialid+1),
                'conditionid'             : [0] });
            
            filesave.send(data);
 
 }