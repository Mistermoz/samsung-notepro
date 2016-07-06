<?php
	require_once("Mobile_Detect.php");
	$detect = new Mobile_Detect();
	if ($detect->isMobile() && !$detect->isTablet()) {
		header('Location: http://www.samsungnote.cl/m/');
	}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Samsung Galaxy Note PRO 12.2</title>
		<link href="/favicon.ico" type="image/x-icon" rel="icon" />
		<link href="/favicon.ico" type="image/x-icon" rel="shortcut icon" />

		<link rel="stylesheet" type="text/css" href="/css/styles.css" />

		<script type="text/javascript" src="/js/scripts.js"></script>

		<!--[if lt IE 10]>
			<script type="text/javascript" src="/js/vendor/nwmatcher/nwmatcher.js"></script>
			<script type="text/javascript" src="/js/vendor/modernizr/modernizr.js"></script>
			<link rel="stylesheet" href="/css/ie9.css">
		<![endif]-->

		<meta name="viewport" content="width=device-width, user-scalable=no"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />

		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-50081040-1', 'samsungnote.cl');
		  ga('send', 'pageview');

		</script>
	</head>

	<body>
		<div id="fb-root"></div>

		<script>(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=459359257500177";
			fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		</script>

		<?php include 'view/elements/header.ctp' ?>

		<div id="content">
			<?php include 'view/elements/tablet.ctp' ?>

			<?php include 'view/pages/home.ctp' ?>

			<?php include 'view/pages/spen.ctp' ?>

			<?php include 'view/pages/screen12.ctp' ?>

			<?php include 'view/pages/office.ctp' ?>

			<?php include 'view/pages/view360.ctp' ?>

			<?php include 'view/pages/video.ctp' ?>
		</div>

		<?php include 'view/elements/find.ctp' ?>
	</body>
</html>

