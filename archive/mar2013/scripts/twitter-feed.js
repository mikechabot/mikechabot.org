function twitterCallback2(twitters) {
  var statusHTML = [];
  var lastUpdtHTML = [];
  for (var i=0; i < twitters.length; i++){
    var username = twitters[i].user.screen_name;
    var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
      return '<a href="'+url+'">'+url+'</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
    });
    statusHTML.push(status);
    lastUpdtHTML.push('<a href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'">'+relative_time(twitters[i].created_at)+'</a>');
    
    switch(i) {
	    case 0:
	    	document.getElementById('twitter-update-list-1').innerHTML = statusHTML.join('');
	    	document.getElementById('last-updated-1').innerHTML = lastUpdtHTML.join('');
	    	break;
	    case 1:
	    	document.getElementById('twitter-update-list-2').innerHTML = statusHTML.join('');
	    	document.getElementById('last-updated-2').innerHTML = lastUpdtHTML.join('');
	    	break;
	    case 2:
	    	document.getElementById('twitter-update-list-3').innerHTML = statusHTML.join('');
	    	document.getElementById('last-updated-3').innerHTML = lastUpdtHTML.join('');
	    	break;
	    case 3:
	    	document.getElementById('twitter-update-list-4').innerHTML = statusHTML.join('');
	    	document.getElementById('last-updated-4').innerHTML = lastUpdtHTML.join('');
	    	break;
	    case 4:
	    	document.getElementById('twitter-update-list-5').innerHTML = statusHTML.join('');
	    	document.getElementById('last-updated-5').innerHTML = lastUpdtHTML.join('');
	    	break;
	    default:
	    	break;
    }    
    statusHTML = [];
    lastUpdtHTML = [];
  }
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  if (delta < 60) {
    return 'just now';
  } else if(delta < 120) {
    return 'about a minute ago';
  } else if(delta < (60*60)) {
    return (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (120*60)) {
    return 'about an hour ago';
  } else if(delta < (24*60*60)) {
    return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
    return '1 day ago';
  } else {
    return (parseInt(delta / 86400)).toString() + ' days ago';
  }
}