<?php
require('php_dbinfo.php');
//Connect To Database
$hostname ='mbtagtfs.db.7564082.hostedresource.com';
$usertable ='agency';
$yourfield = 'agency_name';

mysql_connect($hostname,$username, $password) OR DIE ('Unable to connect to database! Please try again later.');
mysql_select_db($database);

$query = 'SELECT * FROM ' . $usertable;
$result = mysql_query($query);
if($result) {
    while($row = mysql_fetch_array($result)){
        $name = $row[$yourfield];
        $options.="<OPTION VALUE=\"$name\">".$name;
    }
}
?>


<html>
	<head>
		<title>Test PHP</title>
	</head>
 	<body>
		<select name=$name>
			<option value=0>Choose
			<?=$options?>
		</select>
	</body>
</html>
