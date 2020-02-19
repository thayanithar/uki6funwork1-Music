SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function()
{ SC.stream('/tracks/80651626',function(sound){
   $('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });

     $('#stop').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});

SC.stream('/tracks/699009733',function(sound){
  $('#start1').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop1').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/291358852',function(sound){
  $('#start2').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop2').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/273616392',function(sound){
  $('#start3').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop3').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/185076670',function(sound){
  $('#start4').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop4').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/190979588',function(sound){
  $('#start5').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop5').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
SC.stream('/tracks/238999695',function(sound){
  $('#start6').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop6').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
}); SC.stream('/tracks/757066927',function(sound){
   $('#start7').click(function(e) {
           e.preventDefault();
           sound.start();
         });

     $('#stop7').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
  SC.stream('/tracks/347343110',function(sound){
   $('#start8').click(function(e) {
           e.preventDefault();
           sound.start();
         });

     $('#stop8').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
//muttu
SC.stream('/tracks/107162274',function(sound){
 $('#start9').click(function(e) {
         e.preventDefault();
         sound.start();
       });

   $('#stop9').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });
});
//teejay
SC.stream('/tracks/451680189',function(sound){
 $('#start10').click(function(e) {
         e.preventDefault();
         sound.start();
       });

   $('#stop10').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });
});
//omiya
SC.stream('/tracks/181376064',function(sound){
 $('#start11').click(function(e) {
         e.preventDefault();
         sound.start();
       });

   $('#stop11').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });
});
//mcsai
SC.stream('/tracks/162228040',function(sound){
 $('#start12').click(function(e) {
         e.preventDefault();
         sound.start();
       });

   $('#stop12').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });
});


 });
