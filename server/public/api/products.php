<?php

require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');
startup();

if(empty($_GET['id'])) {
    $query = "SELECT p.id, p.name, p.price, p.shortDescription, 
        (SELECT `url` FROM `images` WHERE `productID` = p.id LIMIT 1) AS `image`
        FROM `products` AS p";
    $result = mysqli_query($conn, $query);

    if(!$result) {
        throw new Exception('error with query: ' . mysqli_connect_error($conn));
    }

    $data = [];

    while($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }

    print(json_encode($data));
    } else if (!is_numeric($_GET['id'])) {
        throw new Exception('ID needs to be a number');
    } else {
    $id = $_GET['id'];
    $query = "SELECT p.name, p.price, p.shortDescription, 
        GROUP_CONCAT(i.url) as images
        FROM `products` AS p
        JOIN `images` AS i
        ON  p.id = i.productID
        WHERE p.id = $id
        GROUP BY p.id";

    $result = mysqli_query($conn, $query);
    $data = mysqli_fetch_assoc($result);

    if ($data === null) {
        throw new Exception('invalid ID: '. $id);
    } else {
        $data['images'] = explode(",", $data['images']);
        print(json_encode($data));
    }
}
?>
