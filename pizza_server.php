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
		header('Access-Control-Allow-Origin: *');
		return $_POST;
		$action = $_POST['ACTION'];
		switch ($action) {
			case 'save_order':
				saveOrder($_POST);
				break;
			
			default:
				break;
		}
	}

function saveOrder($POST_PARAMS)
{
	$sql = "INSERT INTO pizza_orders (id, cust_name, cust_tel, cust_email, pizza_size, pizza_topping, delivery_time, delivery_instructions)
	VALUES ('John', 'Doe', 'john@example.com')";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
}	