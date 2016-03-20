<?php
//include("header.php");
session_start();
require("../database.php");
$final=$_POST['get'];
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
<script language="javascript" type="text/javascript">
function sum(form){
a=Number(document.form1.a1.value);
b=Number(document.form1.a2.value);
c=Number(document.form1.a3.value);
d=Number(document.form1.b1.value);
e=Number(document.form1.b2.value);
f=Number(document.form1.b3.value);
g=Number(document.form1.c1.value);
h=Number(document.form1.c2.value);
i=Number(document.form1.c3.value);

z=a+b+c+d+e+f+g+h+i;
document.form1.tot.value=z;
alert("Total Marks are  "+z);
var r=confirm("Submit ??");
if (r==true)
  {
      form.submit();
  }
else
  {
  return false;
  }
}
</script>
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
      <li><a href="login.php">Home</a>
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


<?php

extract($_POST);
$f=  mysql_query("select path from exam_section where Paper_id='$final'");
$myFile = "text.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = $final;
fwrite($fh, $stringData);
    fclose($fh);
while($row=mysql_fetch_row($f))
{
$final1=$row[0];
 }





echo "<BR>";
if (!isset($_SESSION[@alogin]))
{
	echo "<br><h2><div  class=head1>You are not Logged On Please Login to Access this Page</div></h2>";
	echo "<a href=eval.php><h3 align=center>Click Here for Login</h3></a>";
	exit();
}

?>

<embed align="left" src="abc.pdf" width="800" height="700" ></embed>

<form name="form1" align="right" method="post" action="submit.php">

  <tr>
    <td width="106"><span class="style2"></span></td>
    <td width="132"><span class="style2"><span class="head1"></span></span></td>
    <td width="238"><table width="219" border="0" align="center">
  <tr>
    <td width="163" class="style2">1:A</td>
    <td width="149"><input name="a1" type="text" id="loginid"></td>
  </tr>
  <tr>
    <td class="style2"> &nbsp; :B</td>
    <td><input name="a2" type="text" id="pass"></td>
  </tr>

   <tr>
    <td width="163" class="style2"> &nbsp; :C</td>
    <td width="149"><input name="a3" type="text" id="loginid"></td>
  </tr>

   <tr>
    <td class="style2">&nbsp;</td>
    <td>&nbsp;</td>
  </tr>


  <tr>
    <td class="style2">  2:A</td>
    <td><input name="b1" type="text" id="pass"></td>
  </tr>


   <tr>
    <td width="163" class="style2">&nbsp; :B</td>
    <td width="149"><input name="b2" type="text" id="loginid"></td>
  </tr>
  <tr>
    <td class="style2"> &nbsp; :C</td>
    <td><input name="b3" type="text" id="pass"></td>
  </tr>

   <tr>
    <td class="style2">&nbsp;</td>
    <td>&nbsp;</td>
  </tr>




   <tr>
    <td width="163" class="style2">3:A</td>
    <td width="149"><input name="c1" type="text" id="loginid"></td>
  </tr>
  <tr>
    <td class="style2"> &nbsp; :B</td>
    <td><input name="c2" type="text" id="pass"></td>
  </tr>

  <tr>
    <td class="style2"> &nbsp; :C</td>
    <td><input name="c3" type="text" id="pass"></td>
  </tr>


  <tr>
    <td class="style2">&nbsp;</td>
    <td>&nbsp;</td>
  </tr>

  <tr>
    <td class="style2"> &nbsp;Total</td>
    <td><input name="tot" type="text" id="pass"></td>
  </tr>

  <tr>
    <td class="style2">&nbsp;</td>
    <td><input name="submit" type="submit" id="submit" value="Submit" onclick="return sum(this.form);"></td>
  </tr>
</table></td>
  </tr>


</form>







</body>
</html>


