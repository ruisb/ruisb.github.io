<?php
$handle = fopen("c.txt", "r"); if(!$handle){} else { $counter = (int ) fread($handle,20); fclose ($handle); $counter++; $handle = fopen("counter.txt", "w" ); fwrite($handle,$counter) ; fclose ($handle) ; } 
?>

