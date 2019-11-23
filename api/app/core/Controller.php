<?php 

class Controller {
    protected $db;

    public function __construct()
    {
        $this->db = new Database;
    }

    public function fail()
    {
    	$response = [
			"status" => "404",
			"message" => "Error API not found"
		];
		echo json_encode($response);
    }
}