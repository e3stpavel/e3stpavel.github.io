<?php
require_once('connect.php');
?>
<!-- contact form -->
            <div class="col-md-8 col-xs-12">
              <div class="onStep" data-animation="fadeInLeft" data-time="600" id="contact">
                <form action="#" class="row" id="form-contact" method="post" name="form-contact">
				  
				  <div class="form form__1">
					<label for="name" class="form__label"><?php echo $terms['fullname']; ?></label>
					<input type="text" name="name" class="form__input" placeholder="" id="name" required>
				  </div>
				
				  <div class="form form__2">
					<label for="email" class="form__label"><?php echo $terms['email']; ?></label>
					<input type="email" name="email" class="form__input" placeholder="" id="email" required>
				  </div>
				
				  <div class="form form__3">
					<label for="message" class="form__label"><?php echo $terms['message']; ?></label>
					<input type="text" name="message" class="form__input" placeholder="" id="message" required>
				  </div>
				  
				  <div class="success" id="mail_success">Thank you. Your message has been sent</div>
                  <div class="error" id="mail_failed"> Error, email not sent</div>
				
				  <button class="form__btn" id="send-contact" type="submit">
					<span class="form__btn--visible"><p><?php echo $terms['submit']; ?></p> 
					  
					</span><span class="form__btn--invisible"><?php echo $terms['okay']; ?></span>
				  </button>
			  
				<!--<div class="container-mail">
				  <div class="mail">
					<div class="mail__back"></div>
					<div class="mail__top"></div>
					<div class="mail__letter">
					  <div class="mail__letter-square">
					  </div>
					  <div class="mail__letter-lines">
					  </div>
					</div>
					<div class="mail__left"></div>
					<div class="mail__right"></div>
					<div class="mail__bottom"></div>
				  </div>
				</div>-->
				  
                  <!--<input id="name-contact" name="name" placeholder="your name" type="text"> 
                  <input id="email-contact" name="email" placeholder="your e-mail" type="text"> 
                  <textarea cols="50" id="message-contact" name="message" placeholder="your enquiry" rows="4"></textarea>
                  <div class="success" id="mail_success">Thank you. Your message has been sent</div>
                  <div class="error" id="mail_failed"> Error, email not sent</div>
                  <button class="btn" id="send-contact" type="submit">Sent Now</button>-->
                </form>
              </div>
            </div>
            <!-- contact form end -->