<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="EN" lang="EN" dir="ltr">

  <?php
session_start();
require("../database.php");
//include("header.php");?>




<head profile="http://gmpg.org/xfn/11">
    <link rel="icon"
      type="image/png"
      href="neologo11.png"></link>
<title>Smart Evaluation System</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta http-equiv="imagetoolbar" content="no" />
<link rel="stylesheet" href="../styles/layout.css" type="text/css" />
<script type="text/javascript" src="../scripts/jquery-1.4.1.min.js"></script>
<script type="text/javascript" src="../scripts/jquery.slidepanel.setup.js"></script>
<script type="text/javascript" src="../scripts/jquery-ui-1.7.2.custom.min.js"></script>
<script type="text/javascript" src="../scripts/jquery.tabs.setup.js"></script>


</head>
<body>

<!-- ####################################################################################################### -->
<div class="wrapper col1">
  <div id="header">
    <div id="logo">
      <h1><a href="#">Smart Evaluation System</a></h1>
      <p>Evaluation . Anytime . Anywhere.</p>
    </div>
    <div class="fl_right">
      <ul>
        <li class="last"><a href="#">News</a></li>
        <li><a href="login.php">Administrator</a></li>
        <li><a href="signout.php">Sign out</a></li>
      </ul>

    </div>
    <br class="clear" />
  </div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper col2">
  <div id="topnav">
    <ul>
      <li><a href="login.php">Home</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>
        <li ><a href="../../scannew/online_demo_scan.php">Scan</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>
      <li class="active"><a href="display.php">Display</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>

    </ul>
  </div>
</div>

<?php
$dir = opendir('E:/family/fest/New folder (3)');

while ($read = readdir($dir))
{

if ($read!='.' && $read!='..')
{


    $abc = $read;

$act = explode(".", $abc);
$ss = $act[0];

if ($act[1] == 'rar' || $act[1] == 'zip' || $act[1] == 'pdf' || $act[1]=='jpg') {
    $final = explode("_", $ss);
    if (count($final) == 3) {
      $usn = $final[0];
  $course = $final[1];
   $paperid = $final[2];

        $bno=12;
		$uploaddir = "E:/family/fest/New folder (3)/";
		 $path = $uploaddir . $read;
		 mysql_query("insert into exam_section(Paper_id,Batch_no,Sub_id,USN,path) values ('$paperid','$bno','$course','$usn','$path')") or die("<div class=wrapper col6>
  <div id=copyright><h1> files already uploaded </h1> <br class=clear />
  </div>
</div>");
         mysql_query("insert into marks(USN,Sub_id,Marks,Paper_id,Evaluator_id,status) values ('$usn','$course',' ','$paperid',' ',0)") or die("<div class=wrapper col6>
  <div id=copyright><h1> files already uploaded </h1> <br class=clear />
  </div>
</div>");

		 }
		 }
}

}
closedir($dir);
?>

<div class="wrapper col6">
  <div id="copyright">
 <H1> Papers uploaded </H1>
  <table border="2" cellspacing="7" cellpadding="7">
<tr>
<th><font face="Arial, Helvetica, sans-serif">Paper id</font></th>
<th><font face="Arial, Helvetica, sans-serif">Batch no</font></th>
<th><font face="Arial, Helvetica, sans-serif">Subject id</font></th>
<th><font face="Arial, Helvetica, sans-serif">USN</font></th>
<th><font face="Arial, Helvetica, sans-serif">Path</font></th>
</tr>

<?php
$result = mysql_query("select * from exam_section");
while ($row = mysql_fetch_array($result)) {

?>

<tr>
<td><font face="Arial, Helvetica, sans-serif"><?php echo $row[0]; ?></font></td>
<td><font face="Arial, Helvetica, sans-serif"><?php echo $row[1]; ?></font></td>
<td><font face="Arial, Helvetica, sans-serif"><?php echo $row[2]; ?></font></td>
<td><font face="Arial, Helvetica, sans-serif"><?php echo $row[3]; ?></font></td>
<td><font face="Arial, Helvetica, sans-serif"><?php echo $row[4]; ?></font></td>
</tr>


<?php
}
?>
  </div>
    </div>


</body>
</html>


