<?php
//include("header.php");
session_start();
require("../database.php");

?>

<?php

extract($_POST);
if(isset($submit))
{
    $sty=md5("$pass");
	
	
    $rs=mysql_query("select * from students where USN='$loginid' and password='$sty'",$cn) or die(mysql_error());
    
	if(mysql_num_rows($rs)<1)
	{
            echo "<br><br>invalid username and password";
		echo "<a href=../index.php ><BR><BR><BR><BR><div class=head1>Click here to login again<div></a>";
                
		exit;

	}
	$_SESSION[@alogin]="true";

        $myFile = "stud.txt";
        $fh = fopen($myFile, 'w') or die("can't open file");
        $stringData = $loginid;
        fwrite($fh, $stringData);
        fclose($fh);
}
else if(!isset($_SESSION[@alogin]))
{
	echo "<BR><BR><BR><BR><div class=head1> Your are not logged in<br> Please <a href=index.php>Login</a><div>";
		exit;
}
?>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="EN" lang="EN" dir="ltr">
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
        <li><a href="login.php">Student</a></li>
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
      <li class="active"><a href="login.php">Home</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>

         <li><a href="news.php">News</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>
     

    </ul>
  </div>
</div>

<div class="wrapper col6">
  <div id="copyright">
 <H1> Student Details </H1>
 <?php
$result1 = mysql_query("select * from students where USN='$stringData'");
while ($row1 = mysql_fetch_array($result1)) {

    echo <<<UPLS

<table cellpadding="5" width="300">
<tr>
    <td align="Center" colspan="2"><font color="#009900"><b></b></font></td>
</tr>
    <tr>
    <td align="left"><b>USN: </b></td>
    <td align="left">$row1[0]</td>
</tr>
<tr>
    <td align="left"><b>Name: </b></td>
    <td align="left">$row1[1]</td>
</tr>
<tr>
    <td align="left"><b>Semester: </b></td>
    <td align="left">$row1[3]</td>
</tr>
<tr>
    <td align="left"><b>Department: </b></td>
    <td align="left">$row1[2]</td>
</tr>

<tr>
    <td align="left"><b>Date of Birth: </b></td>
    <td align="left">$row1[4]</td>
</tr>
</table>


UPLS;




}
?>



 <H1> Marks </H1>
  <table border="2" cellspacing="7" cellpadding="7">
<tr>
<th><font face="Arial, Helvetica, sans-serif">Sl No</font></th>
<th><font face="Arial, Helvetica, sans-serif">Course</font></th>
<th><font face="Arial, Helvetica, sans-serif">Marks</font></th>

</tr>

<?php
$file = fopen("stud.txt", "r") or exit("Unable to open file!");

while(!feof($file))
  {
 $qq5=fgets($file);
  }


fclose($file);

$result = mysql_query("SELECT DISTINCT subjects.sub_id,marks.marks
FROM  `subjects` ,  `students` , `marks`
WHERE subjects.dept_id = students.dept_id
AND subjects.sem = students.semester AND marks.sub_id=subjects.sub_id
AND students.usn =  '$qq5'");
$sl1=0;
while ($row = mysql_fetch_array($result)) {

?>

<tr>
<td><font face="Arial, Helvetica, sans-serif"><?php echo ++$sl1; ?></font></td>
<td><font face="Arial, Helvetica, sans-serif"><?php echo $row[0]; ?></font></td>
<td><font face="Arial, Helvetica, sans-serif"><?php echo $row[1]; ?></font></td>

</tr>


<?php
}
?>



<br class="clear" />
  </div>
</div>




</body>
</html>
   

