<?php
$search = $_GET["s"];
?>
<!DOCTYPE HTML>
<html style="overflow: hidden;">
<head>
<title>Locations</title>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<link href="css/main.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/style.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="css/search.css" media="screen"/>


<script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>
<script src="https://cdn.firebase.com/libs/geofire/4.1.0/geofire.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="js/jquery.paginate.js" type="text/javascript"></script>
<script src="js/jquery.color.js"></script>
<script src="js/search.js"></script>
<script src="js/player.js" charset="UTF-8" ></script>


<style>
.checkbox-grid li {
	display: block;
	float: left;
	width: 33%;
}
.pagedemo{
	border: 1px solid #CCC;
	width:310px;
	margin:2px;
	padding:50px 10px;
	text-align:center;
	background-color:white;
}
</style>
</head>

<body>

    <div id="paginationdemo" class="demo">
        <h1>刊登使用者</h1>
        
        <form id="searchForm">
            <fieldset>
                <div class="input">
                	<input type="text" name="s" id="s" value="請輸入使用者名稱" />
                </div>
                <input type="submit" id="searchSubmit" value="" />
            </fieldset>
        </form>
        
        
        <div id="pagination_div"></div>
        
        <ul id="players" class="list-group"></ul>
    </div>

	<script type="text/javascript">
	$(document).ready(function(e) {
		
		if("<?=$search?>" != "") {

			showPlayer("<?=$search?>");
		} else {

			showAllPlayer();
		}
	});
	</script>

</body>
</html>
