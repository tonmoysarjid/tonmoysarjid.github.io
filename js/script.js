$(function() {

    $.ajax({
        url: 'intro.txt',
        success: function(data) {
            type(data);
        }
    });
});

function type(response) {
    var app = document.getElementById('app');
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: 45,
        cursor: ''
    });
    typewriter.typeString(response)
        .start()
        .callFunction(terminal);
}

function terminal() {

    setTimeout(function() {
        $('#terminal').addClass('term');
        $('#terminal').terminal({
            help: function() {
                this.echo(color(res));
            }
        }, {
            checkArity: false,
            greetings: false,
            prompt: color('>')
        });
    }, 500);
}

function color(message) {
    return "[[;#00FF41;black]" + message + "]";
}