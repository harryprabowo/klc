<?php
	header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
	require_once "app/init.php";
	$request = $_SERVER['REQUEST_URI'];
	$request = trim($request, '/');
	$get = explode('?', $request);
	$url = explode('/', $get[0]);
	switch ($url[0]) {
		case 'siswa':
		case 'pengajar':
		case 'kelas':
		case 'jadwal':
			$controller = $url[0].'Controller';
			require_once 'app/controller/'.$controller.'.php';
			$controller = new $controller();
			$method = 'fail';
			if(isset($url[1]) ) {
	            if(method_exists($controller, $url[1]) ) {
	                $method = $url[1];
	            }
	        }
			call_user_func_array([$controller, $method], []);
			break;
		default:
			$response = [
				"status" => "404",
				"message" => "Error API not found"
			];
			echo json_encode($response);
			break;
	}
?>