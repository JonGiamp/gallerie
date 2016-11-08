<?php
function create_file_json($file){

    $filename = 'data/data.json';

    if (!$fp = fopen($filename, 'w+')) {
        echo "Echec de l'ouverture du fichier";
        exit;
    } else {
        fwrite($fp, $file);
        fclose($fp);
        echo "<script>console.log( 'Ecriture ok.' );</script>";
    }
}

create_file_json(json_encode($res));
?>
