var formattedMessage =  $('.message-formatted');
var messageField = $('form .message-field');

function formatingText(value) {
    return value.toLowerCase()
                .trim()
                .replace(/\s+/g,' ');


}

messageField.on('input', function(){
   var value = messageField.val();
   var formattedText = formatingText(value);
   formattedMessage.text(formattedText);
})
