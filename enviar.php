<?php

include 'lib/MailChimp.php';

use \DrewM\MailChimp\MailChimp;

$api_key = '218c8121a5a76956938e587cdfe050b2-us18';
$list_id = '7c9d4404ab';

$MailChimp = new MailChimp($api_key);

if($_POST){
	$name = $_POST["caida"];
	$edad = $_POST["edad"];
	$email = $_POST["correo"];
}


$result = $MailChimp->post("lists/$list_id/members", [
				'email_address' => $email,
				'merge_fields' => ['NAME'=>$name, 'DATA'=>$edad],
				'status'        => 'subscribed',
			]);

if ($MailChimp->success()) {
	header("location:gracias.html");

} else {
	echo $MailChimp->getLastError();
}

?>