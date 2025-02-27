$('h1').addClass('title');
$('h1').addClass('margin-50');

$('button').click(function() {
    $('h1').css('color', 'cyan');
});

$('input').keypress(function() {
   var text = $('input').val();
   $('h1').text(text);
})
