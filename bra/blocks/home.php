<?php
require_once('connect.php');
?>
<!-- home -->
      <section aria-label="home" class="mainbg" id="home" 
	  <?php 
		/*$setTable = mysqli_query($link, "SELECT * FROM settings WHERE Code='banner'");
			while($banner = mysqli_fetch_assoc($setTable)){
				echo 'style="background:url(img/'.$banner['Value'].') no-repeat center center fixed;"';
			}*/
		echo 'style="background:url(img/'.$pics['banner'].') no-repeat center center fixed;"';
	  //style="background:url(img/bg-1.jpg) no-repeat center center fixed;"
	  ?>>
        <?php include 'intro.php'; ?>
        <?php //include 'yellow.php'; ?>
      </section>
      <!-- home end -->