<?php
class KelasController extends Controller{
	public function create()
	{
		$query = "INSERT INTO kelas VALUES (:tipe)";
		$this->db->query($query);
		$this->db->bind('tipe', $_POST['tipe']);
		$this->db->execute();
	}
}
