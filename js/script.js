function yellow(message) {
return "[[;green;black]" + message + "]";
}

function callback(response) {

    var app = document.getElementById('app');
    var typewriter = new Typewriter(app, {
    loop: false ,
    delay: 100
    });
    typewriter.typeString(response)
              .start();
}

$.ajax({
    url:'intro.txt',
    success: function (data){
        callback(data);
    }
  });


    
