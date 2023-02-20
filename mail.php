<?php

$recepient = "your@mail.ru";
$siteName = "Egorov_Agency_Test";

$email = trim($_POST["email"]);

$message = "Имейл: $email";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>