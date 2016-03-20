<?php
session_start();
require("database.php");
//include("header.php");
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
<link rel="stylesheet" href="styles/layout.css" type="text/css" />
<script type="text/javascript" src="scripts/jquery-1.4.1.min.js"></script>
<script type="text/javascript" src="scripts/jquery.slidepanel.setup.js"></script>
<script type="text/javascript" src="scripts/jquery-ui-1.7.2.custom.min.js"></script>
<script type="text/javascript" src="scripts/jquery.tabs.setup.js"></script>
</head>
<body>
<div class="wrapper col0">
  <div id="topbar">
    <div id="slidepanel">
      <div class="topbox">
        <h2>Admin Login</h2>
        <form action="admin/login.php" method="post">
          <fieldset>
            <legend>Admin Login</legend>
            <label for="teachername">Username:
              <input type="text" name="loginid" id="loginid" value="" />
            </label>
            <label for="teacherpass">Password:
              <input type="password" name="pass" id="pass" value="" />
            </label>
            <label for="teacherremember">
              <input class="checkbox" type="checkbox" name="teacherremember" id="teacherremember" checked="checked" />
              Remember me</label>
            <p>
              <input type="submit" name="submit" id="submit" value="Login" />
              &nbsp;
              <input type="reset" name="teacherreset" id="teacherreset" value="Reset" />
            </p>
          </fieldset>
        </form>
      </div>
      <div class="topbox">
        <h2>Evaluator Login</h2>
        <form action="evaluator/login.php" method="post">
          <fieldset>
            <legend>Evaluator login</legend>
            <label for="teachername">Username:
              <input type="text" name="loginid" id="loginid" value="" />
            </label>
            <label for="teacherpass">Password:
              <input type="password" name="pass" id="pass" value="" />
            </label>
            <label for="teacherremember">
              <input class="checkbox" type="checkbox" name="teacherremember" id="teacherremember" checked="checked" />
              Remember me</label>
            <p>
              <input type="submit" name="submit" id="submit" value="Login" />
              &nbsp;
              <input type="reset" name="teacherreset" id="teacherreset" value="Reset" />
            </p>
          </fieldset>
        </form>
      </div>
           <div class="topbox last">
        <h2>Student Login</h2>
        <form action="student/login.php" method="post">
          <fieldset>
            <legend>Admin Login</legend>
            <label for="teachername">USN:
              <input type="text" name="loginid" id="loginid" value="" />
            </label>
            <label for="teacherpass">Password:
              <input type="password" name="pass" id="pass" value="" />
            </label>
            <label for="teacherremember">
              <input class="checkbox" type="checkbox" name="teacherremember" id="teacherremember" checked="checked" />
              Remember me</label>
            <p>
              <input type="submit" name="submit" id="submit" value="Login" />
              &nbsp;
              <input type="reset" name="teacherreset" id="teacherreset" value="Reset" />
            </p>
          </fieldset>
        </form><fieldset>
         <form  method="post" action="student/register.php">
             <p>
             New Student ?? &nbsp;<input type="submit" name="reg" value="Register"/></p></form></fieldset>
      </div>
      <br class="clear" />
    </div>
    <div id="loginpanel">
      <ul>
        <li class="left">Click here to </li>
        <li class="right" id="toggle"><a id="slideit" href="#slidepanel">&raquo; Login</a><a id="closeit" style="display: none;" href="#slidepanel">Close Panel</a></li>
      </ul>
    </div>
    <br class="clear" />
  </div>
</div>
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
        <li><a href="#">Online Support</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <p>Mob: +918892280095 | Mail: pyativinay@gmail.com</p>
    </div>
    <br class="clear" />
  </div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper col2">
  <div id="topnav">
    <ul>
      <li class="active"><a href="index.php">Home</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>
      <li><a href="index.php">Products</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>
      <li><a href="index.php">Locations</a>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li class="last"><a href="#"></a></li>
        </ul>
      </li>
      
    </ul>
  </div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper col3">
  <div id="featured_slide">
    <div id="featured_wrap">
      <ul id="featured_tabs">
        <li><a href="#fc1">BVBCTE presents E-Cell<br />
          <span></span></a></li>
        <li><a href="#fc2">BVBCET<br />
          <span></span></a></li>
        <li><a href="#fc3">Pleiades ends with grand success<br />
          <span></span></a></li>
        <li class="last"><a href="#fc4">BVBCET nominated for World Education Summit<br />
          <span></span></a></li>
      </ul>
      <div id="featured_content">
          <div class="featured_box" id="fc1"><img  src="images/demo/ecell.JPG" alt="" />
          <div class="floater"><a href="bvb.edu">Continue Reading &raquo;</a></div>
        </div>
        <div class="featured_box" id="fc2"><img src="images/demo/16.jpg" alt="" />
          <div class="floater"><a href="www.bvb.edu">Continue Reading &raquo;</a></div>
        </div>
        <div class="featured_box" id="fc3"><img src="images/demo/3.jpg" alt="" />
          <div class="floater"><a href="www.pleaides.bvb.edu">Continue Reading &raquo;</a></div>
        </div>
        <div class="featured_box" id="fc4"><img src="images/demo/116.jpg" alt="" />
          <div class="floater"><a href="www.pleaides.bvb.edu">Continue Reading &raquo;</a></div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper col4">
  <div id="container">
    <div id="hpage">
      <ul>
        <li>
          <h2>Start-Up Bazaar</h2>
          <div class="imgholder"><a href="#"><img src="images/demo/size1.jpg" alt="" height="180" width="200" /></a></div>
          <p> Platform to sell innovative products designed and made by 2nd and 4rd year students of BVBCET</p>
          <p class="readmore"><a href="http://pleiades.bvb.edu/event/online-treasure-hunt">Continue Reading &raquo;</a></p>
        </li>
        <li>
          <h2>E-Summit</h2>
          <div class="imgholder"><a href="#"><img src="images/demo/116.jpg" alt=""  height="180" width="200" /></a></div>
          <p>Vote for BVBCET thats nominated for world education summit under higher education</p>
          <p class="readmore"><a href="http://pleiades.bvb.edu/event/cipher-villa">Continue Reading &raquo;</a></p>
        </li>
        <li>
          <h2>BVBCTE</h2>
          <div class="imgholder"><a href="#"><img src="images/demo/bvb.jpg" alt=""  height="180" width="200"/></a></div>
          <p>BVB center for technological enterpreneurship to develop enterpreneurial eco-system in north karnataka</p>
          <p class="readmore"><a href="http://pleiades.bvb.edu/event/junkyard-2">Continue Reading &raquo;</a></p>
        </li>
        <li class="last">
          <h2>Neosoft</h2>
          <div class="imgholder"><a href="#"><img src="images/demo/ban.png" alt=""  height="180" width="200"/></a></div>
          <p>Neosoft a start up at BVBCTE that develops innovative and appealing websites while providing solutions. </p>
          <p class="readmore"><a href="http://pleiades.bvb.edu/event/microcodes">Continue Reading &raquo;</a></p>
        </li>
      </ul>
      <br class="clear" />
    </div>
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
    <div class="footbox">
      <h2></h2>
      <ul>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li class="last"><a href="#"></a></li>
      </ul>
    </div>
    <div class="footbox">
      <h2></h2>
      <ul>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li class="last"><a href="#"></a></li>
      </ul>
    </div>
    <div class="footbox">
      <h2></h2>
      <ul>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li class="last"><a href="#"></a></li>
      </ul>
    </div>
    <br class="clear" />
  </div>
</div>
<!-- ####################################################################################################### -->
<div class="wrapper col6">
  <div id="copyright">
    <p class="fl_left">Copyright &copy; 2013 - All Rights Reserved - <a href="#">neosoft.bvbcte.org</a></p>
    <p class="fl_right">Designed by <a href="http://www.os-templates.com/" title="Free Website Templates">Neosoft</a></p>
    <br class="clear" />
  </div>
</div>
</body>
</html>
