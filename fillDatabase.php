<?php
require_once "bdd.php";

if (isset($_POST['submitImport'])) {
    $csvMimes = array('text/x-comma-separated-values', 'text/comma-separated-values', 'application/octet-stream', 'application/vnd.ms-excel', 'application/x-csv', 'text/x-csv', 'text/csv', 'application/csv', 'application/excel', 'application/vnd.msexcel', 'text/plain');

    //Checking if right type of file
    if (!empty($_FILES['file']['name']) && in_array($_FILES['file']['type'], $csvMimes)) {

        //If the file is downloaded
        if (is_uploaded_file($_FILES['file']['tmp_name'])) {

            // Opens the file on read-only
            $csvFile = fopen($_FILES['file']['tmp_name'], 'r');

            // Skip first line
            fgetcsv($csvFile);

            // Parsing file line by line
            while (($line = fgetcsv($csvFile)) !== FALSE) {

                if ($line[0] != '') {

                    $name = $line[0];
                    $checkParticipant = "SELECT * FROM participants WHERE `name` = '$name'";
                    $existParticipant = $pdo->query($checkParticipant);
                    if ($existParticipant->rowCount() == 0) {
                        $sql = "INSERT INTO participants (`name`) VALUES(:name)";
                        $addParticipant = $pdo->prepare($sql);

                        $addParticipant->bindParam(":name", $name);
                        $addParticipant->execute();
                        unset($sql);
                    }
                }

                $idParticipant = $pdo->query("SELECT id_player FROM participants WHERE `name` = '$name'");

                while ($details = $idParticipant->fetch(PDO::FETCH_ASSOC)) {
                    $id = $details['id_player'];
                    if ($line[1] == 1) {
                        $checkChoco = $pdo->query("SELECT participant FROM chocorpokkur WHERE participant = '$id'");
                        if ($checkChoco->rowCount() == 0) {

                            $sql = "INSERT INTO chocorpokkur (participant) VALUES (:player)";

                            $chocoP = $pdo->prepare($sql);
                            $chocoP->bindParam(":player", $id);
                            $chocoP->execute();
                            unset($sql);
                        }
                    }
                    if ($line[2] == 1) {
                        $checkEmotes = $pdo->query("SELECT participant FROM emotes WHERE participant = '$id'");
                        if ($checkEmotes->rowCount() == 0) {

                            $sql = "INSERT INTO emotes (participant) VALUES (:player)";

                            $chocoP = $pdo->prepare($sql);
                            $chocoP->bindParam(":player", $id);
                            $chocoP->execute();
                            unset($sql);
                        }
                    }
                    if ($line[3] == 1) {
                        $checkPicture = $pdo->query("SELECT participant FROM picture WHERE participant = '$id'");
                        if ($checkPicture->rowCount() == 0) {

                            $sql = "INSERT INTO picture (participant) VALUES (:player)";

                            $chocoP = $pdo->prepare($sql);
                            $chocoP->bindParam(":player", $id);
                            $chocoP->execute();
                            unset($sql);
                        }
                    }
                    if ($line[4] == 1) {
                        $checkSky = $pdo->query("SELECT participant FROM skybuilder WHERE participant = '$id'");
                        if ($checkSky->rowCount() == 0) {

                            $sql = "INSERT INTO skybuilder (participant) VALUES (:player)";

                            $chocoP = $pdo->prepare($sql);
                            $chocoP->bindParam(":player", $id);
                            $chocoP->execute();
                            unset($sql);
                        }
                    }
                    if ($line[5] == 1) {
                        $checkCushions = $pdo->query("SELECT participant FROM cushions WHERE participant = '$id'");
                        if ($checkCushions->rowCount() == 0) {

                            $sql = "INSERT INTO cushions (participant) VALUES (:player)";

                            $chocoP = $pdo->prepare($sql);
                            $chocoP->bindParam(":player", $id);
                            $chocoP->execute();
                            unset($sql);
                        }
                    }
                    if ($line[6] == 1) {
                        $checkReplicas = $pdo->query("SELECT participant FROM replicas WHERE participant = '$id'");
                        if ($checkReplicas->rowCount() == 0) {

                            $sql = "INSERT INTO replicas (participant) VALUES (:player)";

                            $chocoP = $pdo->prepare($sql);
                            $chocoP->bindParam(":player", $id);
                            $chocoP->execute();
                            unset($sql);
                        }
                    }
                    if ($line[7] == 1) {
                        $checkMinion = $pdo->query("SELECT participant FROM minion WHERE participant = '$id'");
                        if ($checkMinion->rowCount() == 0) {

                            $sql = "INSERT INTO minion (participant) VALUES (:player)";

                            $chocoP = $pdo->prepare($sql);
                            $chocoP->bindParam(":player", $id);
                            $chocoP->execute();
                            unset($sql);
                        }
                    }
                    if ($line[8] == 1) {
                        $checkNanas = $pdo->query("SELECT participant FROM nanas WHERE participant = '$id'");
                        if ($checkNanas->rowCount() == 0) {

                            $sql = "INSERT INTO nanas (participant) VALUES (:player)";

                            $chocoP = $pdo->prepare($sql);
                            $chocoP->bindParam(":player", $id);
                            $chocoP->execute();
                            unset($sql);
                        }
                    }
                }
            }
        }
    }
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wisp - New Guilde, New Friends</title>

    <link rel="stylesheet" href="css/prizes.css">


    <!-------------------- BOOTSTRAP -------------------->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-------------------- FONTAWESOME -------------------->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-------------------- FONTS -------------------->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
</head>



<body>

    <div class="container">
        <form action="" method="POST" enctype="multipart/form-data">
            <input type="file" name="file">
            <input type="submit" value="import" name="submitImport">
        </form>
    </div>


</body>

</html>