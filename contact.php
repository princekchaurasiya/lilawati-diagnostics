<?php
session_start();
if(empty($_POST['name'])     ||
   empty($_POST['email'])    ||
   empty($_POST['phone']))
	{
    header('Location: /');
    exit();
  }

$name = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['name'])));
$email = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['email'])));
$phone = rawurlencode(strip_tags(htmlspecialchars_decode("91".$_POST['phone'])));
$form_id = rawurlencode(strip_tags(htmlspecialchars_decode("91".$_POST['form_id'])));

$qs = strip_tags(htmlspecialchars_decode($_SESSION['qstr']));

$formq = "name=".$name."&email=".$email."&phone=".$phone."&".$qs;

// $link = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjIwNTY5MDYzMjA0MzU1MjZlNTUzNiI_3D_pc?";


$zapq = $link.$formq;

// echo $zapq;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $zapq);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
$response = curl_exec($ch);
curl_close($ch);

// print_r($response);

if(strpos( $response, "success" ) !== false)
{
  header('Location: ./ifh-thank-you.php');
  exit();
}
else
{
  header('Location: ./form-submit-failed.php');
  exit();
}

?>
