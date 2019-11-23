<?php
class JadwalController extends Controller{
	public function create()
	{
		$query = "INSERT INTO jadwal VALUES (:id_kelas, :id_pengajar)";
		$this->db->query($query);
		$this->db->bind('id_kelas', $_POST['id_kelas']);
		$this->db->bind('id_pengajar', $_POST['id_pengajar']);
		$this->db->execute();
	}
}
