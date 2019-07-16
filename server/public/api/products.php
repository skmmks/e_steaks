<?php
header('Content-Type: application/json');
require('functions.php');
set_exception_handler('error_handler');
require_once('db_connection.php');
startup();
if(empty($_GET['id'])) {
    $query = "SELECT * FROM products";
    $result = mysqli_query($conn, $query);
    if(!$result) {
        throw new Exception('error with query: ' . mysqli_connect_error($conn));
    }
    $data = [];
    while($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    print(json_encode($data));
} else {
    readfile('dummy-product-details.json');
}
?>
