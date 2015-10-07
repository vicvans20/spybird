$(document).ready(function(){
	function streamUpdate(){
			console.log("Time!");
			$.ajax({
				url: "/render_tweets.json/"+gon.this_var,
				dataType: 'json',
				success:function(response){
					if (response.success == true){
						$tweet = response.text;
						$username = response.user.screen_name;
						var row = "<tr><td>["+$username+"]</td><td>"+$tweet+"</td></tr>";
						$(row).hide().appendTo("table").fadeIn(700);
					}
					else{
						console.log("Requesting....");
					}
				}
			});
	}
	var tid = setInterval(streamUpdate,6000);
	$("#btn-stop").click(function(){
		abortStream();
		alert("Stream stopped!");
	});
	function abortStream(){
		clearInterval(tid);
	}
});