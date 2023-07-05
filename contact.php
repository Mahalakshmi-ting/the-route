<?php
/**
* Contact Form Processing
*
* Send user's message to the corresponding mail id
*
* @author Manoj Rajendiran <manoj@tingmail.in>
* @version 1.0
*/

// header("Access-Control-Allow-Origin: *");

/*	Validate input data
@param string $data Form Input Data
*/
function process_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

/* Contact Configuration */
$yourMail = "manoj@tingmail.in";
$yourName = "The Route";
$subject = "Message from The Route Website";
$message = '<html><body>';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';

if(!empty($_POST)){
  if(!empty($_POST["name"])) {
      $name = process_input($_POST["name"]);
      $message .= "<tr><td><strong>Name:</strong> </td><td>" . $name . "</td></tr>";
  } else {
      echo json_encode(array('error' => true, 'message' => 'Please enter your name'));
      exit;
  }

  if(!empty($_POST["company"])) {
      $company = process_input($_POST["company"]);
      $message .= "<tr><td><strong>Company:</strong> </td><td>" . $company . "</td></tr>";
  }

  if(isset($_POST["email"])) {
      $email = process_input($_POST["email"]);
      $message .= "<tr><td><strong>Email:</strong> </td><td>" . $email . "</td></tr>";
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          echo json_encode(array('error' => true, 'message' => 'Please enter a valid email address'));
          exit;
      }
  } else {
      echo json_encode(array('error' => true, 'message' => 'Please enter a valid email address'));
      exit;
  }

  if(!empty($_POST["contact"])) {
      $contact = process_input($_POST["contact"]);
      $message .= "<tr><td><strong>Contact Number :</strong> </td><td>" . $contact . "</td></tr>";
  }

  if(!empty($_POST["message"])) {
      $usermessage = process_input($_POST["message"]);
      $message .= "<tr><td><strong>Contact Number :</strong> </td><td>" . $usermessage . "</td></tr>";
  }

  $message .= "</table>";
  $message .= "</body></html>";

  $mailer = SimpleMail::make()
  ->setTo($yourMail, $yourName)
  ->setFrom("webmaster@tinglabs.in", "The Route")
  ->setCc(['Jagan Arasu' => 'jagan@tingmail.in', 'Manoj Rajendiran' => 'manoj@tingmail.in'])
  ->setSubject($subject)
  ->setMessage($message)
  ->setHTML()
  ->send();

  if($mailer) {
      echo json_encode(array('error' => false, 'message' => 'Thanks for contacting us. We will revert to you shortly.'));
      exit;
  } else {
      echo json_encode(array('error' => true, 'message' => 'Problem connecting to the server. Please try again later'));
      exit;
  }
}
?>
