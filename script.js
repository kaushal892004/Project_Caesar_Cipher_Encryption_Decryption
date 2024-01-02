
function encrypt() {
    var message = document.getElementById('message').value;
    var shift = parseInt(document.getElementById('shift').value);
    // 65 TO 90 FOR A-Z
   //97 TO 122 FOR a-z
    var encryptedMessage = '';
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (65 <= charCode && charCode <= 90) {
            encryptedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (97 <= charCode && charCode <= 122) {
            encryptedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            displayResults(message, shift, 'Invalid Character: ' + message[i]);
            return; 
        }
    }

    displayResults(message, shift, encryptedMessage);
}

function decrypt() {
    var message = document.getElementById('message').value;
    var shift = parseInt(document.getElementById('shift').value);

    var decryptedMessage = '';
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (65 <= charCode && charCode <= 90) {
            decryptedMessage += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (97 <= charCode && charCode <= 122) {
            decryptedMessage += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            displayResults(message, shift, 'Invalid Character: ' + message[i]);
            return; 
        }
    }

    displayResults(message, shift, decryptedMessage);
}

function displayResults(originalMessage, shift, resultMessage) {
    document.getElementById('originalMessage').innerText = 'Original Message: ' + originalMessage;
    document.getElementById('shiftValue').innerText = 'Shift Value: ' + shift;
    document.getElementById('encryptedMessage').innerText = 'Encrypted/Decrypted Message: ' + resultMessage;
}
