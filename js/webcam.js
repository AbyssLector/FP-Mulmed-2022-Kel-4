function configure(){
    Webcam.set({
        width: 840,
        height: 630,
        image_format: 'jpeg',
        jpeg_quality: 90
    });

    Webcam.attach('#my_camera');
}

function saveSnap(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML=
            '<img id="webcam" src="'+data_uri+'">';
        });

    Webcam.reset();

    var base64image = document.getElementById("webcam").src;
    Webcam.upload(base64image, './function/webcam-function.php', function(code,text){
        alert('Save Successfully');
    })
}