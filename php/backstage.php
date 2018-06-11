<?php
	header ( "Content-type:text/html;charset=utf-8" );

	$action = $_GET['action'];
	switch ($action) {
		case 'getdocumentlist':
			GetDocumentList();
			break;

		case 'getfileinfomation':
			GetFileInfomation();
			break;
	}

	function CompanySqlInit(){
		$DB_HOST = "localhost";
		$DB_USER = "root";
		$DB_PWD = "123456";
		$DB_DBNAME = "dsppasmartdocument";

		$link = mysqli_connect($DB_HOST,$DB_USER,$DB_PWD,$DB_DBNAME);
		if(!$link){
			print_r(json_encode(array('code'=>0,'msg'=>'数据库连接失败')));
			return;
		}
		mysqli_set_charset($link,"utf8");
		return $link;
	}

	function GetDocumentList(){
		$documentinfo = array();
		$link = CompanySqlInit();
		if($link ==null){
			return;
		}

		$sql = "SELECT * FROM dsppasmartdocument.companydocument LEFT OUTER JOIN dsppasmartdocument.dirinfo on dsppasmartdocument.dirinfo.iddir = dsppasmartdocument.companydocument.iddir order by dsppasmartdocument.companydocument.idfile asc";
		$result = mysqli_query($link,$sql);
		while(($oneinfo = mysqli_fetch_assoc($result)) != false){
			$documentinfo[] = $oneinfo;
		}

		if(!empty($documentinfo)){
			print_r(json_encode($documentinfo));
			mysqli_free_result($result);
		}
		mysqli_close($link);
	}

	function GetFileInfomation(){
		$iddir = intval($_POST['iddir']);
		$idfile = intval($_POST['idfile']);

		$link = CompanySqlInit();
		if($link ==null){
			return;
		}

		$sqlone = "select * from dsppasmartdocument.dirinfo where iddir = '$iddir'";
		$result = mysqli_query($link,$sqlone);
		if(($oneinfo = mysqli_fetch_assoc($result)) != false){
			$filedir = $oneinfo['dirpath'].$oneinfo['dirname'];
		}

		$sqltwo = "select * from dsppasmartdocument.companydocument where idfile = '$idfile'";
		$result = mysqli_query($link,$sqltwo);
		if(($twoinfo = mysqli_fetch_assoc($result)) != false){
			$completefileinfo = $filedir.'/'.$twoinfo['documentname'];
			$twoinfo['fileparth'] = $completefileinfo;
			print_r(json_encode($twoinfo));
		}
		mysqli_close($link);
	}
?>