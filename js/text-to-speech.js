const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    var test = JSON.parse(this.responseText);
    // alert(test.msg)
    document.getElementById("demo").innerHTML = test.msg;
}
xhttp.open("GET", "http://localhost:3000");
xhttp.send();

function updateInput(test){
    document.getElementById("txtInput").innerHTML = document.getElementById("demo").innerHTML;
}

var txtInput = document.querySelector('#demo');
var voiceList = document.querySelector('#voiceList');
var btnSpeak = document.querySelector('#btnSpeak');
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = PopulateVoices;
}

function autoClick(){
    // document.getElementById("speak-btn").click();
    var toSpeak = new SpeechSynthesisUtterance(txtInput.innerHTML);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
        if (voice.name === selectedVoiceName) {
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
}
// btnSpeak.addEventListener('click', () => {
// function myFunction(){
//     // document.getElementById("#demo").click();
//     var toSpeak = new SpeechSynthesisUtterance(txtInput.innerHTML);
//     var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
//     voices.forEach((voice) => {
//         if (voice.name === selectedVoiceName) {
//             toSpeak.voice = voice;
//         }
//     });
//     synth.speak(toSpeak);
//     // alert("awoga")
// }
// });

function PopulateVoices() {
    voices = synth.getVoices();
    var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
    voices.forEach((voice) => {
        var listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = selectedIndex;
}