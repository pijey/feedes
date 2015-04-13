<?php
  if($_POST){
    $to = 'contact@feedes.fr';
    $subject = '[Feedes] Contact !';
    $from_name = $_POST['name'];
    $from_email = $_POST['liame'];
    $message = $_POST['message'];
    $robotest = $_POST['email'];
    if($robotest)
      $error = "Nous n'aimons pas les SPAMs !";
    else{
      if($from_name && $from_email && $message){
        $header = "From: $from_name <$from_email>";
        if(mail($to, $subject, $message, $header))
          $success = "Merci pour votre message !";
        else
          $error = "Il y a eu un problème lors de l'envoi du message";
      } else
        $error = "Merci de remplir tous les champs";
    }
    if($error)
      echo '<div id="error" class="msg">'.$error.'</div>';
    elseif($success)
      echo '<div id="success" class="msg">'.$success.'</div>';
  }
?>