<?php
	header("Content-type: application/json");
	$folder = $_POST["folder"];
	//$folder = "gallery1";
	$jsonData = '{';
	$dir = $folder."/";
	$dirHandle = opendir($dir);
	$i = 0;
	while($file = readdir($dirHandle)){
		if(!is_dir($file) && preg_match("/.jpg|.gif|.png|.jpeg/i", $file)){
			$i++;
			$src = "$dir$file";
			$jsonData .='"img'.$i.'":{"num":"'.$i.'", "src": "'.$src.'", "name": "'.$file.'"},';
		}
	}
	closedir($dirHandle);
	$jsonData = chop($jsonData, ",");
	$jsonData .= '}';
	echo $jsonData;
?>