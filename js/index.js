document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}



//reconocimiento de voz
let rec;
let microfono = document.getElementById("microfono");

    if(!("webkitSpeechRecognition" in window)){
        alert("Disculpas, no puedes usar la API");
    }
    else{
        rec = new webkitSpeechRecognition();
        rec.lang = "es-AR";
        rec.continuous = true;
        rec.iterim = true;
        rec.addEventListener("result",iniciar);
    }

    function iniciar(event){
        for(i=event.resultIndex; i<event.results.length; i++){
            document.getElementById('reconocimiento').innerHTML = event.results[i][0].transcript;
        }
    }
    
    function speak(){
        rec.start();
    }
   