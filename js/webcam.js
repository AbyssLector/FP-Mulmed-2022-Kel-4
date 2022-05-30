const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 5000))
}

webcam.start()
    .then(result => {
        console.log("webcam started");
        // sleep();
        // alert("take picture");
    })
    .catch(err => {
        console.log(err);
    });
function takePhoto() {
    let picture = webcam.snap();

    document.querySelector('#download-photo').href = picture;
    // C:\Users\IHSAN\Downloads
    downloadImage('pic', picture)
    $.ajax({
        type: 'GET',
        url: "http://localhost:3000",
        success: (response) => {
            document.querySelector('#text').innerHTML = response;
        }

    });
}

const downloadImage = function (name, datauri) {
    var a = document.createElement('a');
    a.setAttribute('download', name + '.png');
    a.setAttribute('href', datauri);
    a.click();
}