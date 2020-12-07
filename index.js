
function abfragen(frage1,frage2,frage3,frage4,frage5){
    var Punktestand = 0;
    if (frage1 == "Fielmann" || frage1 == "fielmann"){
        Punktestand ++;
        document.getElementById("frage1").style.backgroundColor = "green";
    }
    else {
        document.getElementById("frage1").style.backgroundColor = "red";
    }
       
    if (frage2 == "Perlenbacher" || frage2 == "perlenbacher"){
        Punktestand ++; 
        document.getElementById("frage2").style.backgroundColor = "green";
    }
    else {
        document.getElementById("frage2").style.backgroundColor = "red";
    }
      
    if (frage3 == "selber" || frage3 == "Selber"){
        Punktestand ++;
        document.getElementById("frage3").style.backgroundColor = "green";
    }
    else {
        document.getElementById("frage3").style.backgroundColor = "red";
    }
      
    if (frage4 == "?" || frage4 == "ja" || frage4 == "Ja" || frage4 == "nein" || frage4 == "Nein"){
        Punktestand ++;
        document.getElementById("frage4").style.backgroundColor = "green";
    }
    else {
        document.getElementById("frage4").style.backgroundColor = "red";
          
    }
       
    if (frage5 == "nicht Mischa" || frage5 == "Nicht Mischa" || frage5 == "nicht mischa" || frage5 == "mischa" || frage5 == "myscha" || frage5 == "Myscha"){
        Punktestand ++;
        document.getElementById("frage5").style.backgroundColor = "green";
    }
    else{
        document.getElementById("frage5").style.backgroundColor = "red";
    }

    if (Punktestand>= 3 && Punktestand != 5 ){
        window.open("https://www.youtube.com/watch?v=6Qv09W6a-ho"); 
    } 
    else if (Punktestand == 5){
        window.open("http://www.youtube.com/watch?v=SLP9mbCuhJc&t=0m27s");
    }
    else{
        window.open("https://www.youtube.com/watch?v=hnYwsXoXZlw");
    }    
}

// 
            
