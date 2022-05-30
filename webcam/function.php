<?php
if(isset($_FILES["webcam"]["tmp_name"])){
    move_uploaded_file($_FILES['webcam']['tmp_name'], 'img/webcam.jpg');
}
