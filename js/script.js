

function yellow(message) {
    return "[[;green;black]" + message + "]";
}

function type(response) {

    var app = document.getElementById('app');
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: 80,
        cursor: ''
    });
    typewriter.typeString(response)
        .start()
        .callFunction(terminal);
}
$.ajax({
    url: 'intro.txt',
    success: function (data) {
        type(data);
    }
});

function terminal(){

    $('#terminal').terminal({
        hello: function () {
            this.echo('Hello, visitor' +
                '. Wellcome to this terminal.');
        }
    }, {
        checkArity: false,
        greetings: '',
        prompt: '$'
    });


}



