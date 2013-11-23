<?php
session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library

$twitteruser = "MichaelAChabot";
$notweets = 30;
$consumerkey = "Yj6b0jSaMUZa6wVob88Fw";
$consumersecret = "nHWxKRPxiZLFYeRcN5zyTBGRfo9oTLnaoWedR5c354";
$accesstoken = "262334151-dILVX7rTCuZOjO02RuCuXv2GfxQKgalxpdZZT7Y";
$accesstokensecret = "wek9OBUTzrzuz9fLJJordXgaKhGsz0Ie3vdTfGXWA";

function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}

$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);

$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);

echo json_encode($tweets);
?>