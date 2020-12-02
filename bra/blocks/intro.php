<?php
require_once('connect.php');


?>
<!-- intro -->
        <div class="overlay-main v-align text-center">
          <div class="col-md-10 col-xs-11">
			<div class="space-double"></div><div class="space-double"></div>
            <h1 class="onStep" data-animation="fadeInUp" data-time="300">
              <span class="color"><?php echo $terms['header1']; ?></span> <?php echo $terms['header2']; ?></h1>
            <span class="devider-center onStep" data-animation="fadeInUp" data-time="400"></span>
            <div class="onStep" data-animation="fadeInUp" data-time="600" id="slidertext">
				<?php 
					for($i=1; $i < 7; $i++){
						echo '<h3 class="main-text">'.$terms['motto'.$i].'</h3>';
					}
				?>
            </div>
			<div class="space-double"></div><div class="space-double"></div>
            <div class="btn-home onStep scroll-link" data-animation="fadeInUp" data-id="about" data-time="800">
              <a class="link-class" href="#"><?php echo $terms['more']; ?></a>
            </div>
            
          </div>
        </div>
        <!-- intro end -->