setTimeout(function(){
    let element = document.getElementsByClassName("tp-modal");
    element.item(0).remove();
    
    let element2 = document.getElementsByClassName("tp-backdrop");
    element2.item(0).remove();
  
    document.body.className = document.body.className.replace("tp-modal-open","");
    
    alert("Xbl altnhz bt ivtoav koh :)");
  }, 6000);