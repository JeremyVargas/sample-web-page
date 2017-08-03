 // Web Worker
 var w;

function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("worker.js");
    }
    
    w.addEventListener("message", function(event) {
      document.getElementById("result").innerHTML = "Live date: " + event.data;    
    });
  
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
  }

  function getDateTime() {
    var date = new Date();
    postMessage(date.toLocaleString());
    setTimeout("getDateTime()", 1000);
  }

  function stopWorker() { 
    w.terminate();
    w = undefined;
  }

  getDateTime();