<?php
require __DIR__ . '/../vendor/autoload.php';
$client = new MongoDB\Client("mongodb+srv://<username>:<password>@cluster.mongodb.net");
$db = $client->marine;
$collection = $db->seafarers;
?>
