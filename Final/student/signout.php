<?php
session_start();
session_destroy();
unlink("stud.txt");
header("Location: ../index.php");
?>
