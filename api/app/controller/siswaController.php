<?php
class SiswaController extends Controller{
	public function registrasi()
	{
		$query = "INSERT INTO siswa VALUES (:nama, :status, :jenis_kelamin, :alamat, :asal_sekolah, :jurusan, :kelas, :program, :id_line, :nomor_wa, :email, :no_hp_ortu, :password)";
		$this->db->query($query);
		$this->db->bind('nama', $_POST['nama']);
		$this->db->bind('status', $_POST['status']);
		$this->db->bind('jenis_kelamin', $_POST['jenis_kelamin']);
		$this->db->bind('alamat', $_POST['alamat']);
		$this->db->bind('asal_sekolah', $_POST['asal_sekolah']);
		$this->db->bind('jurusan', $_POST['jurusan']);
		$this->db->bind('kelas', $_POST['kelas']);
		$this->db->bind('program', $_POST['program']);
		$this->db->bind('id_line', $_POST['id_line']);
		$this->db->bind('nomor_wa', $_POST['nomor_wa']);
		$this->db->bind('email', $_POST['email']);
		$this->db->bind('no_hp_ortu', $_POST['no_hp_ortu']);
		$this->db->bind('password', $_POST['password']);
		$this->db->execute();
	}

	public function konfirmasi()
	{
		$query = "UPDATE siswa SET status = 'active' WHERE id_siswa = :id";
		$this->db->query($query);
		$this->db->bind('id', $_POST['id']);
		$this->db->execute();
	}

	public function evalpengajar()
	{
		$query = "INSERT INTO evalpengajar VALUES (:id_siswa, :id_pengajar, :eval)";
		$this->db->query($query);
		$this->db->bind('id_siswa', $_POST['id_siswa']);
		$this->db->bind('id_pengajar', $_POST['id_pengajar']);
		$this->db->bind('eval', $_POST['eval']);
		$this->db->execute();
	}

	public function login()
	{
		$query = "SELECT * FROM siswa WHERE email=:email and password=:psw";
		$this->db->query($query);
		$this->db->bind('email', $_POST['email']);
		$this->db->bind('psw', $_POST['password']);
		$this->db->execute();
		echo json_encode($this->db->result());
	}

	public function getjadwal()
	{
		$query = "SELECT * FROM jadwalsiswa WHERE id_siswa=:id";
		$this->db->query($query);
		$this->db->bind('id', $_GET['id']);
		$this->db->execute();
		echo json_encode($this->db->result());
	}

	public function testimoni()
	{
		$query = "INSERT INTO testimoni VALUES (:id_siswa, :sekolah_diterima, :testimoni, :saran)";
		$this->db->query($query);
		$this->db->bind('id_siswa', $_POST['id_siswa']);
		$this->db->bind('sekolah_diterima', $_POST['sekolah_diterima']);
		$this->db->bind('testimoni', $_POST['testimoni']);
		$this->db->bind('saran', $_POST['saran']);
		$this->db->execute();
	}
}
