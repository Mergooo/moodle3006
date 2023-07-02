
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="mathGame.css">
    <title>Document</title>
</head>

<body>





<?php

echo "brooooo";


if(isset($_POST['name'])){
    $name = $_POST['name'];
    $pointsresult = $_POST['endPoints'];
    


    include "connection.php";
  
    $sql = "INSERT INTO highscore (names, punkte)
    VALUES('$name','$pointsresult')";

    $stmt = $pdo->query($sql);
    
    $sql = "SELECT * From highscore 
            ORDER BY punkte DESC";

    $stmt = $pdo->query($sql);


$bestenliste = $stmt->fetchAll(PDO::FETCH_ASSOC);







?>

<table>
    <tr>
        <th>Name</th>
        <th>Punkte</th>
        <th>Zeitstempel</th>
     
           
    </tr>
    <?php

foreach ($bestenliste as $beste) {
    ?>
            <tr>
                <td><?php echo $beste['names']; ?></td>
                <td><?php echo $beste['punkte']; ?></td>
                <td><?php echo $beste['datum']; ?></td>
                
            </tr>
            <?php } ?>
        
        </table>
        
    </body>
    </html>
  
    

 <a href="index.html">Zurück zum Start</a>
    <?php
}





die();
?>


</body>
</html>