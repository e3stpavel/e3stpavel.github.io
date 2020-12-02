<?php
require_once('connect.php');
//require_once ('../index.php');

/*$menuTable = mysqli_query($link, "SELECT * FROM menu WHERE Lang='$pageLang' ORDER BY ListOrder");
$menu = array();
while($oneMenuEl = mysqli_fetch_assoc($menuTable)){
	$menu[$oneMenuEl['Code']] = $oneTerm['Value'];
}*/
?>
<!-- nav -->
      <div class="navbar navbar-default navbar-fixed-top onStep" data-animation="fadeInDown" data-time="0">
        <div class="container">
        
          <!-- menu mobile display -->
           <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse">
           <span class="icon icon-bar"></span> 
           <span class="icon icon-bar"></span> 
           <span class="icon icon-bar"></span></button> 
		   
		   <!-- logo --> 
			<?php 
				$setTable = mysqli_query($link, "SELECT * FROM settings WHERE Code='logo'");
				while($logo = mysqli_fetch_assoc($setTable)){
					echo '<a class="navbar-brand" href="index.php?ln='.$pageLang.'"><img alt="" src="img/'.$logo['Value'].'"></a>';
				}
			?>

          <!-- mainmenu start -->
          <div class="menu-init" id="main-menu">
            <nav>
              <ul>
				<?php
					$menuTable = mysqli_query($link, "SELECT * FROM menu WHERE Lang='$pageLang' ORDER BY ListOrder");
					
					while($oneMenuEl = mysqli_fetch_assoc($menuTable)){
						echo '<li><a class="scroll-link" data-id="'.$oneMenuEl['Link'].'">'.$oneMenuEl['Value'].'</a></li>';
					}
					$langTable = mysqli_query($link, "SELECT * FROM languages ORDER BY ListOrder");
					
					while($ln = mysqli_fetch_assoc($langTable)){
						if($ln['Code'] == $_GET['ln']){
							echo '<li><a class="btn-ln active" href="?ln='.$ln['Code'].'">'.$ln['Value'].'</a></li>';
						}
						else{
							echo '<li><a class="btn-ln" href="?ln='.$ln['Code'].'">'.$ln['Value'].'</a></li>';
						}
						
					}
					
				?>
                <!--<li><a class="scroll-link" data-id="home">Home</a></li>
                <li><a class="scroll-link" data-id="about">Who we Are</a></li>
                <li><a class="scroll-link" data-id="service-sec">services</a></li>
                <li><a class="scroll-link" data-id="projects">Projects</a></li>
                <li><a href="blog.html">Blogg</a>
                  <ul>
                    <li><a href="blog.html">Single Blog</a></li>
                    <li><a href="blog-post.html">Blog Post</a></li>
                  </ul>
                </li>
                <li><a class="scroll-link" data-id="team">Team</a></li>
                <li><a class="scroll-link" data-id="contactus">Contact</a></li>-->
              </ul>
            </nav>
          </div>
          <!-- mainmenu end -->
          
        </div>
        <!-- .container -->
      </div>
      <!-- nav end -->