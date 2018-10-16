<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

if ($method == 'GET') {
    $products_arr = [
              array("id" => 1,
                "name" => "book1",
                "author" => "author1",
                "publishDate" => "22.03.2017",
                "pageNumber" => 124,
                ),
              array("id" => 2,
                "name" => "book2",
                "author" => "author2",
                "publishDate" => "19.03.2016",
                "pageNumber" => 344,
                ),
              array("id" => 3,
                "name" => "book3",
                "author" => "author3",
                "publishDate" => "11.02.2013",
                "pageNumber" => 108,
                ),
                ];

    http_response_code(200);
	echo json_encode($products_arr);
}
?>