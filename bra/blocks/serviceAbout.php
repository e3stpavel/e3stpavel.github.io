<?php
require_once('connect.php');
?>
<!-- service-about -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div id="service-about">
				<?php
				$serTable = mysqli_query($link, "SELECT * FROM services WHERE Lang='$pageLang' ORDER BY ListOrder");
				while($ser = mysqli_fetch_assoc($serTable)){
					//$lead = array_filter(explode(";", $ser['Lead']), 'strlen');
					$lead = array_filter(explode(";", $ser['Lead']));
					
					echo '<div class="projects arc onStep col-md-6 col-xs-12" data-animation="fadeInLeft" data-time="0">
					<div class="projects arc">
					<a class="detail-page" href="#">
					<div class="hovereffect">
					  <img alt="imageportofolio" class="img-responsive" src="img/projects/'.$ser['Photo'].'">
					  <div class="overlay">
						<h3>'.$terms['more'].'</h3>
					  </div>
					</div></a>
					</div>
					<h2><span class="color" style="font-size: 20px;">'.$ser['Title'].'</span></h2>
					<div>
					<ul>';
					/*foreach($lead as $leadEl){
						echo '<li>'.$leadEl.'<li>';
					}*/
					for($i = 0; $i < count($lead); $i++){
						echo '<li style="font-size: 14px;">'.$lead[$i].'<li>';
					}
					echo '</ul></div>
					<a class="detail-page" href="#"><button class="btn-home-help">'.$terms['more'].'</button></a>
					</div>';
				}
				?>
              </div>
            </div>
          </div>
        </div>
        <!-- service-about end -->