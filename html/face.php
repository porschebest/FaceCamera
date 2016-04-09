<?php
$testurl = 'https://v1-api.visioncloudapi.com/face/detection'; 
$filePath = "/var/www/html/image/JaniceMan1.jpg"//照片路径
$fileContent = '@' . realpath($filePath);
$post_data = array ('api_id' => '9413e4a3edbb436aa18fd5d3a7c856db','api_secret' => 'd5d7de3a2443431b9541c9a30254a82c','file'=> $fileContent,'attributes'=>1); 
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $testurl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, TRUE);
//打开 SSL 验证时,需要安装 openssl 库。也可以选择关闭,关闭会有风险。 
curl_setopt($ch, CURLOPT_POST,1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data); $output = curl_exec($ch);
var_dump($output);
curl_close($ch);
// echo $_GET["filename"];
?>
