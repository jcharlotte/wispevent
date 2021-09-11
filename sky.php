<?php
require_once "bdd.php";

if (isset($_POST['pickWinner'])) {

    $sql = "SELECT * FROM participants, skybuilder WHERE participant = id_player";
    $request = $pdo->query($sql);

    if(!empty($pickWinner = $request->fetchAll(PDO::FETCH_ASSOC))){
        $winner = array_rand($pickWinner);
    
        $nameWinner = $pickWinner[$winner]['name'];
        $idwinner = $pickWinner[$winner]['id_player'];
    
        // CURRENT PRIZE
        $delete = "DELETE FROM skybuilder WHERE participant = '$idwinner' ";
        $pdo->query($delete);
        unset($delete);
        // BIG PRIZES
        $delete = "DELETE FROM chocorpokkur WHERE participant = '$idwinner' ";
        $pdo->query($delete);
        unset($delete);
        $delete = "DELETE FROM emotes WHERE participant = '$idwinner' ";
        $pdo->query($delete);
        unset($delete);
        $delete = "DELETE FROM minion WHERE participant = '$idwinner' ";
        $pdo->query($delete);
        unset($delete);
        $delete = "DELETE FROM picture WHERE participant = '$idwinner' ";
        $pdo->query($delete);
        unset($delete);
        //OTHER PRIZES
        $delete = "DELETE FROM cushions WHERE participant = '$idwinner' ";
        $pdo->query($delete);
        unset($delete);
        $delete = "DELETE FROM replicas WHERE participant = '$idwinner' ";
        $pdo->query($delete);
        unset($delete);
    
        echo $nameWinner;
    }else{
        echo "Donated as contest prize.";
    }
}
