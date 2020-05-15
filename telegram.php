<?php
//https://api.telegram.org/bot1164893261:AAEX95zSRtQ4cYIfpymVd8koXW9A3IzAmk0/getUpdates
$name = $_POST["name"];
$contact = $_POST["contact"];
$token = "1164893261:AAEX95zSRtQ4cYIfpymVd8koXW9A3IzAmk0";
$chat_id = "-449029576";
$arr = array(
	"Имя клиента: " => $name,
	"Контакт: " => $contact
);

foreach ($arr as $key => $value) {
	$txt .= "<d>".$key."</d> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
	echo '<h2 class="succes">Спасибо, с вами свяжуться в ближайшее время</h2>';
} else {
	echo "Error";
}
?>