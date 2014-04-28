<?php

  require_once "BB.php";
  require_once "SMTPValidateEmail.php";

/*
  session_start();
  if (!isset($_SESSION['user'])) {
    header('HTTP/1.1 401 Unauthorized');
    return;
  }
*/

  $bb = new BB();

  switch ($_SERVER['REQUEST_METHOD']) {
    case "GET": // get info from the database
      $id = explode("slide/", $_SERVER['REQUEST_URI']);
      if (isset($id[1])) {
        $result = array($bb->getSlide($id[1]));
      } else {
        $result = $bb->getSlides();
      }
      break;
    case "POST": // save a new record in the database
      $result = $bb->register_new_book($_POST);
      break;
    case "PUT": // add info to existing record in the database
      $data = json_decode(file_get_contents("php://input"), false);
      $result = $bb->loan_book($data);
      break;
    case "DELETE":
      $id = explode("book/", $_SERVER['REQUEST_URI']);
      if (isset($id[1])) {
        $result = $bb->delete_book($id[1]);
      }
      break;
    case "VERIFYEMAIL":
      $sve = new SMTPValidateEmail();
      $email = explode("email/", $_SERVER['REQUEST_URI']);
      if (isset($email[1])) {
        $result = $bb->verify($email[1]);
      }
      break;
    default:
      header('HTTP/1.1 405 Method Not Allowed');
      return;
  }
  
  header('Content-type: application/json');
  header('Access-Control-Allow-Origin: ' . $bb->getAccessControlAllowOrigin());
  echo json_encode($result);
?>
