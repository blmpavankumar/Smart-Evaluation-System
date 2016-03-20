<?php
session_start();
session_destroy();
unlink("test.txt");
unlink("text.txt");
header("Location: ../index.php");
?>
