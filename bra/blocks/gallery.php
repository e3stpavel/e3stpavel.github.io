<?php
require_once('connect.php');
?>
<!-- service gallery -->
        <div class="container">
          <div class="row">
            <div class="onStep" data-animation="fadeInUp" data-time="600" id="services">
              <div class="col-md-12 col-xs-12">
                <div class="service webdesign text-center">
                  <h2 style="color: #fff;"><?php echo $terms['about']; ?></h2><span class="devider-black"></span>
					<div class="space-single"></div>
                  <p style="font-size: 16px;">
                    <?php 
					echo $terms['boutText'];
					echo '<br><br><span class="color" style="font-weight:900 !important; text-transform: uppercase;">'.$terms['boutText2'].'</span>';
					echo '<br><button class="scroll-link btn-home" data-id="contactus">'.$terms['order'].'</button>';
					?>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-double"></div>
        </div>
        <!-- service gallery end -->