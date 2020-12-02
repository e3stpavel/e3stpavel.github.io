<?php
session_start();

    $email_to = "pavel.mayorov@tptlive.ee";
    $name     = $_POST['name'];  
    $email    = $_POST['email'];
    $subject   = /*$_POST['subject']*/ "Brantus Notification";
    $message    = $_POST['message'];
    
    $headers  = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    if(mail($email_to, $subject, $message, $headers)){
        echo "success";       
    } 
    else{
        echo "failed";     
    }  
?>
