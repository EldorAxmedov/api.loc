<?php
header('Content-type: json/aplication');
require 'connect.php';

$type = $_GET['q'];

if ($type==='posts') {
	$posts = mysqli_query($connect, "SELECT * FROM `post`");
$postsList=[];

while ($post=mysqli_fetch_assoc($posts)) {
	$postsList[]=$post;
}
echo(json_encode($postsList));
}

?>