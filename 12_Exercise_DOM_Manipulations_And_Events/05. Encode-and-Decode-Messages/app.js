function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(e) {
        let newMsg = "";
        let currentText = e.target.parentElement.children[1].value;

        for (let i = 0; i < currentText.length; i++) {
            let currentCh = currentText[i].charCodeAt();
            newMsg += String.fromCharCode(currentCh + 1);
        }

        let textAreas = document.querySelectorAll('textarea');
        let resultTextArea = textAreas[1];
        resultTextArea.value = newMsg;
        let currentTextArea = textAreas[0];
        currentTextArea.value = "";
    }

    function decode(e) {
       let currentArea = e.target.parentElement.children[1];
       let currentText = currentArea.value;
       let resultMsg = "";

       for (let i = 0; i < currentText.length; i++) {
        let ch = currentText[i].charCodeAt();
        resultMsg += String.fromCharCode(ch - 1);
       }
       
       currentArea.value = resultMsg;
    }
}

// function encodeAndDecodeMessages() {
//     document.getElementById('main').addEventListener('click', (e) => {
//         if (e.target.tagName !== 'BUTTON') {
//             return;
//         }
 
//         let decodedMessage = document.getElementsByTagName('textarea')[0];
//         let encodedMessage = document.getElementsByTagName('textarea')[1];
 
//         if (e.target.textContent.includes('Encode')) {
//             let message = decodedMessage.value;
//             let encoded = [];

//             for (let i = 0; i < message.length; i++) {
//                 let currSymbol = message.charCodeAt(i);
//                 encoded.push(String.fromCharCode(currSymbol + 1));
//             }

//             decodedMessage.value = '';
//             encodedMessage.value = encoded.join('');
//         } else if (e.target.textContent.includes('Decode')) {
//             let message = encodedMessage.value;
//             let decoded = [];

//             for (let i = 0; i < message.length; i++) {
//                 let currSymbol = message.charCodeAt(i);
//                 decoded.push(String.fromCharCode(currSymbol - 1));
//             }
//             encodedMessage.value = decoded.join('');
//         }
//     });
// }