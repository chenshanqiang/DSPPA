<?php
header ( "Content-type:text/html;charset=utf-8" );
$ua = $_SERVER['HTTP_USER_AGENT'];

$filename = $_GET['fileurl'];
$currentname = $_GET['filename'];
$filename  = iconv('UTF-8','GB2312',$filename);
$currentname = iconv("utf-8","gb2312",$currentname);
if(!file_exists($filename)){
	echo "文件不存在";
	return;
}

$file=fopen($filename,"r");
$encoded_filename = urlencode($currentname);
$encoded_filename = str_replace("+", "%20", $encoded_filename);
header('Content-Type: application/octet-stream');
header("Accept-Ranges: bytes");
header("Accept-Length: ".filesize($filename));
if (preg_match("/MSIE/", $ua)) {
  header('Content-Disposition: attachment; filename="' . $encoded_filename . '"');
} else if (preg_match("/Firefox/", $ua)) {
  header('Content-Disposition: attachment; filename*="utf8\'\'' . $currentname . '"');
} else {
  header('Content-Disposition: attachment; filename="' . $currentname . '"');
}
$buffer = 1024;
while(!feof($file)){
    $file_data = fread($file,$buffer);
    echo $file_data;
}
fclose($file);
?>