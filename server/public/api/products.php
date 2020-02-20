<?php

require_once 'functions.php';
require_once 'db_connection.php';

startup();

if(!$conn) {
  throw new Exception(mysqli_connect_error());
}

$whereClause = ''; 
$id = false;
if(!empty($_GET['id'])) { 
  if(!is_numeric($_GET['id'])) { 
    throw new Exception('id must be an int');
  }
  $id = (int)$_GET['id']; 
  $whereClause = " WHERE id = $id";
}

$query = "SELECT * FROM `products` $whereClause"; 
$result = mysqli_query($conn, $query);

if(!$result) {
  throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($result) === 0 && $id !== false) { 
  throw new Exception("Invalid id: {$id}");
}

$output = [];
while($row = mysqli_fetch_assoc($result)) { 
  $row['price'] = intval($row['price']); 
  $row['id'] = (int)$row['id']; 
  $output[] = $row; 
}

print_r(json_encode($output));

?>