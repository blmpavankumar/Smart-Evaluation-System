<?php
//include("header.php");
session_start();
require("../database.php");

?>

<?php

extract($_POST);
if(isset($submit))
{
	include("../database.php");
	$rs=mysql_query("select * from login where user='$loginid' and pass='$pass'",$cn) or die(mysql_error());
	if(mysql_num_rows($rs)<1)
	{
		echo "<BR><BR><BR><BR><div class=head1> Invalid User Name or Password<div>";
		exit;

	}
	$_SESSION[@alogin]="true";

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

 <SCRIPT TYPE="text/javascript">
            <!--
            //Disable right click script
            //visit http://www.rainbow.arch.scriptmania.com/scripts/
            var message="Sorry, right-click has been disabled";
            ///////////////////////////////////
            function clickIE() {if (document.all) {(message);return false;}}
            function clickNS(e) {if
                (document.layers||(document.getElementById&&!document.all)) {
                    if (e.which==2||e.which==3) {(message);return false;}}}
            if (document.layers)
            {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
            else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
            document.oncontextmenu=new Function("return false")
            // -->
        </SCRIPT>
<SCRIPT LANGUAGE="JavaScript">
function check() {
mt=document.form1.pa.value;

mt2=document.form1.f.value;
if (mt.length<1) {
alert("Please Enter password");
document.form1.pa.focus();
return false;
}
if (mt2.length<1) {
alert("Please choose a file");
document.form1.f.focus();
return false;
}


return true;
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
        <li class="last"><a href="#">Search</a></li>
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
      <li><a href="index.php">Home</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>
        <li class="active"><a href="../../scannew/online_demo_scan.php">Scan</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>
      <li><a href="up.php">Upload</a>
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
<form action="upload.php" name="form1" method="post" enctype="multipart/form-data" onSubmit="return check();">
   <b>Select pdf </b> <input type="file" name="ufile" id="f" onfocus="alreadyFocused=true;" /><br></br>
   <b>Passcode </b>&nbsp;<input type="password" name="pass" id="pa" onfocus="alreadyFocused=true;" /><br><br>
           &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <input type="submit" value="Upload" />
</form>

  </div>
    </div>
<div class="wrapper col6">
  <div id="copyright">
    <p class="fl_left">Copyright &copy; 2013 - All Rights Reserved - <a href="#">neosoft.bvbcte.org</a></p>
    <p class="fl_right">Designed by <a href="http://www.os-templates.com/" title="Free Website Templates">Neosoft</a></p>
    <br class="clear" />
  </div>
</div>
</body>
</html>


