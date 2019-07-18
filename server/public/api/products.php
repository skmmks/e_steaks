<?php

header('Content-Type: application/json');
require('functions.php');

set_exception_handler('error_handler');

require_once('db_connection.php');

startup();

if(empty($_GET['id'])) {
    $query = "SELECT p.id, p.name, p.price, p.shortDescription, 
        (SELECT `url` FROM `images` WHERE `productID` = p.id LIMIT 1) AS `image`
        FROM `products` AS p";
    $result = mysqli_query($conn, $query);
    if(!$result) {
        throw new Exception('error with query: ' . mysqli_connect_error($conn));
    }
    print(json_encode($data));
    } else if (!is_numeric($_GET['id'])) {
        throw new Exception('ID needs to be a number');
    } else {
    $id = $_GET['id'];
    $query = "SELECT p.id, p.name, p.price, p.shortDescription, 
    GROUP_CONCAT(images.url) as images
    FROM `images` AS i
    JOIN `products` AS p
    ON i.productID = p.id
    WHERE p.`id` = " . $id .
    " GROUP BY products.id
    ";
    $result = mysqli_query($conn, $query);
//    $resultRow = mysqli_fetch_assoc($result);

    $data = [];
    
    while($resultRow = mysqli_fetch_assoc($result)) {
        $data[] = $resultRow;
    }

    if ($resultRow === null && !empty($_GET['id'])) {
        throw new Exception('invalid ID: '. $id);
    } else {
        print(json_encode($resultRow));
    }
}
?>
