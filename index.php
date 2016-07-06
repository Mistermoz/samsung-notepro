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

		<link rel="stylesheet" type="text/css" href="/css/jpreloader.css" />
		<link rel="stylesheet" type="text/css" href="/css/reset.css" />
		<link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css" />
		<link rel="stylesheet" type="text/css" href="/css/default.css" />
		<link rel="stylesheet" type="text/css" href="/css/view/pages_home.css" />
		<link rel="stylesheet" type="text/css" href="/css/view/pages_spen.css" />
		<link rel="stylesheet" type="text/css" href="/css/view/pages_screen12.css" />
		<link rel="stylesheet" type="text/css" href="/css/view/pages_office.css" />
		<link rel="stylesheet" type="text/css" href="/css/view/pages_view360.css" />
		<link rel="stylesheet" type="text/css" href="/css/view/pages_video.css" />

		<script type="text/javascript" src="/js/vendor/jquery/jquery.js"></script>
		<script type="text/javascript" src="/js/vendor/jquery/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="/js/vendor/jpreloader/jpreloader.min.js"></script>
		<script type="text/javascript" src="/js/vendor/jquery/jquery-ui-1.10.4.custom.min.js"></script>
		<script type="text/javascript" src="/js/vendor/skrollr/skrollr.min.js"></script>
		<script type="text/javascript" src="/js/vendor/skrollr/skrollr.menu.js"></script>
		<script type="text/javascript" src="/js/vendor/selectivizr/selectivizr.js"></script>
		<script type="text/javascript" src="/js/vendor/css3finalize/css3finalize.js"></script>
		<script type="text/javascript" src="/js/vendor/sketch/sketch.min.js"></script>
		<script type="text/javascript" src="/js/view/pages_home.js"></script>
		<script type="text/javascript" src="/js/view/pages_screen12.js"></script>
		<script type="text/javascript" src="/js/view/pages_office.js"></script>
		<script type="text/javascript" src="/js/view/pages_spen.js"></script>
		<script type="text/javascript" src="/js/default.js"></script>

		<!--[if lt IE 10]>
			<script type="text/javascript" src="/js/vendor/nwmatcher/nwmatcher.js"></script>
			<script type="text/javascript" src="/js/vendor/modernizr/modernizr.js"></script>
			<link rel="stylesheet" href="/css/ie9.css">
		<![endif]-->

		<meta name="viewport" content="width=1200, user-scalable=no"/>

		<meta property="og:title" content="Samsung - Note PRO" />
		<meta property="og:type" content="website" />
		<meta property="og:image" content="http://www.samsungnote.cl/img/facebook.jpg" />
		<meta property="og:description" content="Es hora de ser PRO. Te presentamos el note más grande del mercado con una increíble pantalla de 12.2'' y S-pen. Con Hancom Office que permite editar textos a un click" />

		<meta http-equiv="X-UA-Compatible" content="IE=edge" />

<meta name="twitter:card" content="photo">
<meta name="twitter:site" content="@SamsungChile">
<meta name="twitter:creator" content="@SamsungChile">
<meta name="twitter:title" content="¡Gana un #GalaxyNotePro!">
<meta name="twitter:image:src" content="http://www.samsungnote.cl/img/concurso.jpg">
<meta name="twitter:domain" content="">
<meta name="twitter:app:name:iphone" content="">
<meta name="twitter:app:name:ipad" content="">
<meta name="twitter:app:name:googleplay" content="">
<meta name="twitter:app:url:iphone" content="">
<meta name="twitter:app:url:ipad" content="">
<meta name="twitter:app:url:googleplay" content="">
<meta name="twitter:app:id:iphone" content="">
<meta name="twitter:app:id:ipad" content="">
<meta name="twitter:app:id:googleplay" content=""><meta name="twitter:card" content="photo">
<meta name="twitter:site" content="@SamsungChile">
<meta name="twitter:creator" content="@SamsungChile">
<meta name="twitter:title" content="¡Gana un #GalaxyNotePro!">
<meta name="twitter:image:src" content="http://www.samsungnote.cl/img/concurso.jpg">
<meta name="twitter:domain" content="">
<meta name="twitter:app:name:iphone" content="">
<meta name="twitter:app:name:ipad" content="">
<meta name="twitter:app:name:googleplay" content="">
<meta name="twitter:app:url:iphone" content="">
<meta name="twitter:app:url:ipad" content="">
<meta name="twitter:app:url:googleplay" content="">
<meta name="twitter:app:id:iphone" content="">
<meta name="twitter:app:id:ipad" content="">
<meta name="twitter:app:id:googleplay" content="">

		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-50081040-1', 'samsungnote.cl');
		  ga('send', 'pageview');

		</script>

		<script>(function() {
		  var _fbq = window._fbq || (window._fbq = []);
		  if (!_fbq.loaded) {
		    var fbds = document.createElement('script');
		    fbds.async = true;
		    fbds.src = '//connect.facebook.net/en_US/fbds.js';
		    var s = document.getElementsByTagName('script')[0];
		    s.parentNode.insertBefore(fbds, s);
		    _fbq.loaded = true;
		  }
		  _fbq.push(['addPixelId', "1418195178438064"]);
		})();
		window._fbq = window._fbq || [];
		window._fbq.push(["track", "PixelInitialized", {}]);
		</script>
		<noscript><img height="1" width="1" border="0" alt="" style="display:none" src="https://www.facebook.com/tr?id=1418195178438064&amp;ev=NoScript" /></noscript>

	<!-- Google Code for Visitates Samsung Note Pro (Viena) -->
	<!-- Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. For instructions on adding this tag and more information on the above requirements, read the setup guide: google.com/ads/remarketingsetup -->
	<script type="text/javascript">
	/* <![CDATA[ */
	var google_conversion_id = 1018260314;
	var google_conversion_label = "IB8cCK7QkwcQ2tbF5QM";
	var google_custom_params = window.google_tag_params;
	var google_remarketing_only = true;
	/* ]]> */
	</script>
	<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
	</script>
	<noscript>
	<div style="display:inline;">
	<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1018260314/?value=1.000000&amp;label=IB8cCK7QkwcQ2tbF5QM&amp;guid=ON&amp;script=0"/>
	</div>
	</noscript>

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

		<section id="preload">
				<div class="loading"></div>
		</section>

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

