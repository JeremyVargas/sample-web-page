 // Web Worker
 var w;

function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("worker.js");
    }
    
    w.addEventListener("message", function(event) {
      document.getElementById("result").innerHTML = event.data;    
    });
  
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
  }

  function stopWorker() { 
    w.terminate();
    w = undefined;
  }