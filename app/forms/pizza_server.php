<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "test";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	    $data = json_decode(file_get_contents('php://input'), true);
		$action = $data['ACTION'];
		switch ($action) {
			case 'save_order':
//				saveOrder($data);
				break;

			default:
				break;
		}
	}

function saveOrder($POST_PARAMS)
{
    global $conn;
    $cust_name = $POST_PARAMS['custname'];
	$sql = "INSERT INTO pizza_orders (cust_name, cust_tel, cust_email, pizza_size, pizza_topping, delivery_time, delivery_instructions) VALUES ('$cust_name', '', '', '', '', '', '')";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
}