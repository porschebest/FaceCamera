<?php
$testurl = 'https://v1-api.visioncloudapi.com/info/api?api_id=9413e4a3edbb436aa18fd5d3a7c856db&api_secret=d5d7de3a2443431b9541c9a30254a82c'; 
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $testurl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, TRUE);
//打开 SSL 验证时,需要安装 openssl 库。也可以选择关闭,关闭会有风险。 
$output = curl_exec($ch);
var_dump($output);
$output_array = json_decode($output,true);
curl_close($ch); ?>