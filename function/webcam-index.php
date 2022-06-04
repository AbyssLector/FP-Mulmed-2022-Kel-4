<!DOCTYPE html>
<html lang="en" dir="ltr">
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
        <!-- <a href="image.php"><button type="button" name="button">Go To Image Database Page</button></a> -->
    </div>
    

    <!--script-->
    <script type="text/javascript" src="../js/webcam.min.js"></script>
    <script type="text/javascript" src="../js/webcam.js"></script>
</body>
</html>