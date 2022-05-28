<!DOCTYPE html>
<html lang="en" dir="ltr>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webcam</title>
</head>
<body onload="configure();">
    <div class="container">
        <div id="my_camera">

        </div>
        <div id="result" style="visibility: hidden; position: absolute;"></div>
        <br>
        <button type="button" onclick="saveSnap();">Save</button>
        <br>
        <a href="image.php"><button type="button" name="button">Go To Image Database Page</button></a>
    </div>
    

    <!--script-->
    <script type="text/javascript" src="assets/webcam.min.js"></script>
    <script type="text/javascript">
        function configure(){
            Webcam.set({
                width: 480,
                height: 360,
                image_format: 'jpeg',
                jpeg_quality: 90
            });

            Webcam.attach('#my_camera');
        }

        function saveSnap(){
            Webcam.snap(function(data_uri){
                document.getElementByID('results').innerHTML=
                    '<img id="webcam" src="'+data_uri+'">';
            });

        Webcam.reset();

        var base64image = document.getElementById("webcam").src;
        Webcam.upload(base64image, 'function.php', function(code,text){
            alert('Save Successfully');
            document.location.href = "image.php"
        })
        }
    </script>
</body>
</html>