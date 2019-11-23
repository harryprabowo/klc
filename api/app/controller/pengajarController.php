<?php
class PengajarController extends Controller{
	public function registrasi()
	{
		$query = "INSERT INTO pengajar VALUES (:nama, :gender, :universitas, :jurusan, :id_line, :wa)";
		$this->db->query($query);
		$this->db->bind('nama', $_POST['nama']);
		$this->db->bind('gender', $_POST['gender']);
		$this->db->bind('universitas', $_POST['universitas']);
		$this->db->bind('jurusan', $_POST['jurusan']);
		$this->db->bind('id_line', $_POST['id_line']);
		$this->db->bind('nomor_wa', $_POST['nomor_wa']);
		$this->db->execute();
		$pengajar = $this->db->result();
		[$pengajar] = $pengajar;
		$query = "INSERT INTO mata_pelajaran VALUES (:id_pengajar, :nama_mata_pelajaran)";
		$this->db->query($query);
		$this->db->bind('id_pengajar', $pengajar['id_pengajar']);
		$this->db->bind('nama_mata_pelajaran', $_POST['nama_mata_pelajaran']);
		$this->db->execute();
		$query = "INSERT INTO jadwal_pengajar VALUES (:id_pengajar, :jadwal)";
		$this->db->query($query);
		$this->db->bind('id_pengajar', $pengajar['id_pengajar']);
		$this->db->bind('jadwal', $_POST['jadwal']);
		$this->db->execute();
	}

	public function addmapel()
	{
		$query = "INSERT INTO mata_pelajaran VALUES (:id_pengajar, :nama_mata_pelajaran)";
		$this->db->query($query);
		$this->db->bind('id_pengajar', $_POST['id_pengajar']);
		$this->db->bind('nama_mata_pelajaran', $_POST['nama_mata_pelajaran']);
		$this->db->execute();
	}

	public function evalsiswa()
	{
		$query = "INSERT INTO evalsiswa VALUES (:id_pengajar, :id_siswa, :eval)";
		$this->db->query($query);
		$this->db->bind('id_pengajar', $_POST['id_pengajar']);
		$this->db->bind('id_siswa', $_POST['id_siswa']);
		$this->db->bind('eval', $_POST['eval']);
		$this->db->execute();
	}

	public function login()
	{
		$query = "SELECT * FROM pengajar WHERE id_pengajar=:id and password=:psw";
		$this->db->query($query);
		$this->db->bind('id', $_POST['id']);
		$this->db->bind('psw', $_POST['password']);
		$this->db->execute();
		echo json_encode($this->db->result());
	}

	public function getjadwal()
	{
		$query = "SELECT * FROM jadwalpengajar WHERE id_pengajar=:id";
		$this->db->query($query);
		$this->db->bind('id', $_GET['id']);
		$this->db->execute();
		echo json_encode($this->db->result());
	}
}
