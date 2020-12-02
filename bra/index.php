<?php
require_once 'connect.php';

$langTable = mysqli_query($link, "SELECT DISTINCT Code FROM languages");
$langTest = false;

if(empty($_GET['ln'])){
	$_GET['ln'] = 'et';
}

while($oneLang = mysqli_fetch_assoc($langTable)){
	if($_GET['ln'] == $oneLang['Code']) {
		$langTest = true;
	}
}
if($langTest == false){
	$_GET['ln'] = 'et';
}
$pageLang = '';
if(empty($_GET['ln'])){ $pageLang='et'; }
else{ $pageLang = $_GET['ln']; } //page lang detecting and setting

$termsTable = mysqli_query($link, "SELECT * FROM terms WHERE Lang='$pageLang'");
$terms = array();
while($oneTerm = mysqli_fetch_assoc($termsTable)){
	$terms[$oneTerm['Code']] = $oneTerm['Value'];
}

$setTable = mysqli_query($link, "SELECT * FROM settings");
$pics = array();
while($set = mysqli_fetch_assoc($setTable)){
	$pics[$set['Code']] = $set['Value'];
}
?>
<!DOCTYPE html>
<html lang="zxx">
  <head>
    <?php include 'blocks/meta.php'; ?>
    <?php include 'blocks/styles.php'; ?>
  </head>
  <body>
    <?php include 'blocks/preloader.php'; ?>
    <!-- content wraper -->
    <div class="content-wrapper">
      <?php include 'blocks/header.php';
      include 'blocks/home.php';
      include 'blocks/sectionAbout.php';
      include 'blocks/service.php';
      //include 'blocks/projects.php'; 
	  //include 'blocks/yellow2.php'; 
	  include 'blocks/contactFull.php';
	  include 'blocks/footer.php';
	  ?>
      <!-- ScrolltoTop -->
      <div id="totop">
        <i class="fa fa-angle-up"></i>
      </div>
    </div>
    <!-- content wraper end -->
    
    <!-- Subscribe start -->
    <div class="white-popup-block mfp-hide animbouncefall" data-time="0" id="subwrap">
      <h5>PLEASE FILL <span class="color">YOUR EMAIL</span> BELOW</h5>
      <div class="space-half"></div>
      <form action="subscribe.php" id="subscribe" method="post" name="subscribe">
        <input class="subscribfield subscribeemail" id="subscribeemail" name="subscribeemail" type="text"> 
        <button class="btn-form" id="submit-2" type="submit">Subscribe</button>
      </form>
      <div class="subscribesuccess">Thank you for fill your email</div>
    </div>
    <!-- Subscribe end -->
    
    <?php include 'blocks/scripts.php'; ?>
  </body>
</html>