<?php
require_once "bdd.php";

if (isset($_POST['displaywinners'])) {

    $sql = "SELECT * FROM participants, nanas WHERE participant = id_player";
    $request = $pdo->query($sql);

    while(!empty($pickWinner = $request->fetch(PDO::FETCH_ASSOC))) {
        $nameWinner = '';
        $nameWinner .= $pickWinner['name'];
        echo $nameWinner . ' -: ✧ <br>' ;
    }
}
