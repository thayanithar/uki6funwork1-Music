var context = document.querySelector('.music-container');
var controls = document.querySelector('.controls');
CLIENTID: '340f063c670272fac27cfa67bffcafc4'
SC.initialize({
  client_id: CLIENTID,
  redirectURI: 'http://localhost:9001' 

});


$(document).ready(function()   {

  SC.stream('/tracks/1326276/', function(sound) {
  $('#start1').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop1').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

 SC.stream('/tracks/345527848', function(sound) {
  $('#start2').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop2').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

 SC.stream('/tracks/364718444', function(sound) {
  $('#start3').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop3').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

SC.stream('/tracks/194149990', function(sound) {
 $('#start4').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop4').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/345528518', function(sound) {
 $('#start5').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop5').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/238075643', function(sound) {
 $('#start6').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop6').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/105278929', function(sound) {
 $('#start7').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop7').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/318053145', function(sound) {
 $('#start8').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop8').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});
});
