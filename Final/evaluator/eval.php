<?php
//include("header.php");
session_start();
require("../database.php");

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
<SCRIPT LANGUAGE="JavaScript">
function pop(nam) {


alert(nam);
document.form2.get.value=nam;

}
</SCRIPT>
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
        <li><a href="login.php">Evaluator</a></li>
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
      <li ><a href="login.php">Home</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>
      <li class="active"><a href="eval.php">Evaluate</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>
      <li><a href="submit1.php">Display</a>
        <ul>
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
<H1> Evaluation of Papers</H1>

<br></br>

  <table border="2" cellspacing="7" cellpadding="7">
<tr>
<th><font face="Arial, Helvetica, sans-serif">Sl No</font></th>
<th><font face="Arial, Helvetica, sans-serif">Paper ID</font></th>
<th><font face="Arial, Helvetica, sans-serif">Status</font></th>

</tr>

<?php
$file = fopen("test.txt", "r") or exit("Unable to open file!");
//Output a line of the file until the end is reached
while(!feof($file))
  {
 $qq=fgets($file);
  }
fclose($file);







$r=mysql_query( ("SELECT DISTINCT exam_section.Paper_id,Batch_no,path
FROM  `exam_section` ,  `evaluator` ,  `marks`
WHERE exam_section.Sub_id = evaluator.Sub_id
AND evaluator.evaluator_id =  '$qq' AND marks.Paper_id=exam_section.Paper_id
AND marks.status =0") )or die("<div class=wrapper col6>
  <div id=copyright><h1> files already uploaded </h1> <br class=clear />
  </div>
</div>");
$sl=0;
while($row=mysql_fetch_row($r))
{


?>

<tr>
<td><font face="Arial, Helvetica, sans-serif"><?php echo ++$sl ?></font></td>
<td><font face="Arial, Helvetica, sans-serif"><?php echo $row[0]; ?></font></td>
<td><font face="Arial, Helvetica, sans-serif"><?php echo "Evaluate"."<form name=form2 align=center method=post action=display1.php>
    <input type=submit name=get onclick=pop('$row[2]'); value=$row[0]>



</form>";
 ?></font></td>
</tr>


<?php
}
?>

 </div>
    </div>

</body>
</html>

