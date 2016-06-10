<?php
header("Content-type: application/json");
/*$jsonData = '{ 
	"u1": {"user":"John", "age":22, "country":"United States"},
	"u2": {"user":"Tala", "age":29, "country":"Jordan"},
	"u3": {"user":"Andy", "age":24, "country":"New Zealand"}
}';*/
//$jsonData = file_get_contents("mylist.json");
$var1 = $_POST["var1"];
$var2 = $_POST["var2"];
$jsonData = '{"obj1":{"propertyA":"'.$var1.'", "propertyB":"'.$var2.'"}}';
echo $jsonData;
?>