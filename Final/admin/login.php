<?php
//include("header.php");
session_start();
require("../database.php");

?>

<?php

extract($_POST);
if(isset($submit))
{
    $ere=md5("$pass");
	include("../database.php");
	$rs=mysql_query("select * from login where user='$loginid' and pass='$ere'",$cn) or die(mysql_error());
	if(mysql_num_rows($rs)<1)
	{
            echo "<br><br>invalid username and password";
		echo "<a href=../index.php ><BR><BR><BR><BR><div class=head1>Click here to login again<div></a>";
                
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
<title>Smart Evaluation System | Home</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta http-equiv="imagetoolbar" content="no" />
<link rel="stylesheet" href="../styles/layout.css" type="text/css" />
<script type="text/javascript" src="../scripts/jquery-1.4.1.min.js"></script>
<script type="text/javascript" src="../scripts/jquery.slidepanel.setup.js"></script>
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
        <li><a href="login.php">Admin</a></li>
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
      <li><a href="../../scannew/online_demo_scan.php">Scan</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>
      <li><a href="display.php">Display</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>

    </ul>
  </div>
</div>

<div class="wrapper col4">
  <div id="container">
    <div id="content">
      <h1>Welcome Admin</h1>
      <img class="imgr" src="../images/demo/rad2.jpg" alt="" width="125" height="125" />
      <p>B V Bhoomaraddi College of Engineering and Technology has been selected as CUDA Teaching Center (2013). Under Professor Partnership Programme NVIDIA has provided Department of Information Science and Engineering with 2 (GeForce GTX 480), (1 GeForce GTX680) and one high end GPU C2075 card. NVIDIA has also provided financial support for research work in this area.</p>
      <p> Present day real time applications are compute intensive and there is increasing trend of using GPU's for these computations. Programming such many core processors is of paramount importance for improving the ecosystem of high performance computing/ parallel computing domain.</p>
      <img class="imgl" src="../images/demo/rad1.jpg" alt="" width="125" height="125" />
      <p> Citizens of Hubli will soon be able to tune into music on FM radio. A full-fledged FM radio station will be set up within two months, and will give entertainment a whole new meaning in Hubli. The FM station, slated to come up on the college premises, will be a first of a kind.</p>
      <p>Apart from providing entertainment, the focus will be on providing information about various social issues, including health, agriculture, civic and other issues, to educate the people. The programmes will be broadcast in Kannada, English and Hindi. Students, homemakers and business community will be the target audience.The FM station has a range of 11km across the city. It will be the first full-fledged FM station to be set up by an engineering college on its premises in the whole state.</p>


      <div id="comments">
        <h2>Comments</h2>
        <ul class="commentlist">
          <li class="comment_odd">
            <div class="author"><img class="avatar" src="../images/demo/avatar.gif" width="32" height="32" alt="" /><span class="name"><a href="#">A Name</a></span> <span class="wrote">wrote:</span></div>
            <div class="submitdate"><a href="#">May 16, 2013 at 8:35 pm</a></div>
            <p>Good initaitives</p>
          </li>
          <li class="comment_even">
            <div class="author"><img class="avatar" src="../images/demo/avatar.gif" width="32" height="32" alt="" /><span class="name"><a href="#">A Name</a></span> <span class="wrote">wrote:</span></div>
            <div class="submitdate"><a href="#">May 4, 2013 at 9:03 am</a></div>
            <p></p>
          </li>
          <li class="comment_odd">
            <div class="author"><img class="avatar" src="../images/demo/avatar.gif" width="32" height="32" alt="" /><span class="name"><a href="#">A Name</a></span> <span class="wrote">wrote:</span></div>
            <div class="submitdate"><a href="#">April 16, 2013 at 7:06 pm</a></div>
            <p></p>
          </li>
        </ul>
      </div>
      <h2>Write A Comment</h2>
      <div id="respond">
        <form action="#" method="post">
          <p>
            <input type="text" name="name" id="name" value="" size="22" />
            <label for="name"><small>Name (required)</small></label>
          </p>
          <p>
            <input type="text" name="email" id="email" value="" size="22" />
            <label for="email"><small>Mail (required)</small></label>
          </p>
          <p>
            <textarea name="comment" id="comment" cols="100%" rows="10"></textarea>
            <label for="comment" style="display:none;"><small>Comment (required)</small></label>
          </p>
          <p>
            <input name="submit" type="submit" id="submit" value="Submit Form" />
            &nbsp;
            <input name="reset" type="reset" id="reset" tabindex="5" value="Reset Form" />
          </p>
        </form>
      </div>
    </div>
    <div id="column">
      <div class="subnav">
        <h2>Important Links</h2>
        <ul>
          <li><a href="#">CTE-CP-2013</a></li>
          <li><a href="#">E-Cell</a>
            <ul>
              <li><a href="#">Pupa</a></li>
              <li><a href="#">Butterfly</a></li>
            </ul>
          </li>
          <li><a href="#">New Initiatives</a>
            <ul>
              <li><a href="#"> Documents</a></li>
              <li><a href="#"> Videos</a>
                <ul>
                  <li><a href="#">PPTs</a></li>
                  <li><a href="#">Photo Gallery</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Inauguration of new Mechanical building by Shri Ratan Tata</a></li>
        </ul>
      </div>
      <div class="holder">
          <h2 class="title"><img src="../images/demo/wipro.jpg" height="60" width="60" alt="" /></h2>
        <p>Wipro Technologies established prestigeous Mission 10x Technology Learning Centre called MTLC at BVB- E&C Dept.</p>
        <p class="readmore"><a href="#">Continue Reading &raquo;</a></p>
      </div>
      <div id="featured">
        <ul>
          <li>
            <h2>Mission 10x Technology Learning Centre by WIPRO</h2>
            <p class="imgholder"><img src="../images/demo/wipro.jpg" height="90" width="240" alt="" /></p>
            <p>As a part of this centre, BVB college has invested 8 Lakhs and has purchased 20 UTLP (Unified Technology Learning Platform) Kits. These Kits provide integrated development platform and can be used to develop applications/products in the various fields.</p>
            <p class="readmore"><a href="#">Continue Reading &raquo;</a></p>
          </li>
        </ul>
      </div>

    </div>
    <div class="clear"></div>
  </div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper col5">
  <div id="footer">
    <div id="newsletter">
      <h2>Stay In The Know !</h2>
      <p>Please enter your email to join our mailing list</p>
      <form action="#" method="post">
        <fieldset>
          <legend>News Letter</legend>
          <input type="text" value="Enter Email Here&hellip;"  onfocus="this.value=(this.value=='Enter Email Here&hellip;')? '' : this.value ;" />
          <input type="submit" name="news_go" id="news_go" value="GO" />
        </fieldset>
      </form>
      <p>To unsubscribe please <a href="#">click here &raquo;</a></p>
    </div>



    <br class="clear" />
  </div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper col6">
  <div id="copyright">
    <p class="fl_left">Copyright &copy; 2013 - All Rights Reserved - <a href="#">neosoft.bvbcte.org</a></p>
    <p class="fl_right">Designed by <a href="http://neosoft.bvb.edu/" title="">Neosoft</a></p>
    <br class="clear" />
  </div>
</div>
</body>
</html>


