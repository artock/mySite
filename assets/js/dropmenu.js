     $(document).ready(function(){
         
          
//          nav category dropmenu
          $(".lmgzn-menu-btn").click(function(){
             $(".lmgzn-menu-bar-one").show();
             $(".lmgzn-menu-bar-one").animate({"height":"30vh","width":"26vw"},250);
             $("#lmgzn-ctg-button4").mouseover(function(){
                 $(".lmgzn-menu-bar-three").hide();
                 $(".lmgzn-menu-bar-three").animate({"height":"0","width":"0"},50);
                 $(".lmgzn-menu-bar-two").show();
                 $(".lmgzn-menu-bar-two").animate({"height":"36vh","width":"26.15vw"},200);
                 $("#lmgzn-ctg-button3").mouseover(function(){
                     $(".lmgzn-menu-bar-two").hide();
                     $(".lmgzn-menu-bar-two").animate({"height":"0","width":"0"},50);
                     $(".lmgzn-menu-bar-three").show();
                     $(".lmgzn-menu-bar-three").animate({"height":"42vh","width":"26.15vw"});
                 });
                 $(".lmgzn-menu-container").mouseleave(function(){
                        $(".lmgzn-menu-bar-three").hide();
                        $(".lmgzn-menu-bar-three").animate({"height":"0","width":"0"},50);
                 });
             });
             $(".lmgzn-menu-container").mouseleave(function(){
                 $(".lmgzn-menu-bar-two").hide();
                 $(".lmgzn-menu-bar-two").animate({"height":"0","width":"0"},50);
             }); 
          });
          $(".lmgzn-menu-container").mouseleave(function(){
             $(".lmgzn-menu-bar-one").hide();
             $(".lmgzn-menu-bar-one").animate({"height":"0","width":"0"},50);
          });
          $("#lmgzn-ctg-button3").mouseover(function(){
              $(".lmgzn-menu-bar-three").show();
              $(".lmgzn-menu-bar-three").animate({"height":"42vh","width":"26.15vw"});
              $("#lmgzn-ctg-button2").mouseover(function(){
                  $(".lmgzn-menu-bar-three").hide();
                  $(".lmgzn-menu-bar-three").animate({"height":"0","width":"0"},50);
              });
          });
          $(".lmgzn-menu-container").mouseleave(function(){
              $(".lmgzn-menu-bar-three").hide();
              $(".lmgzn-menu-bar-three").animate({"height":"0","width":"0"},50);
          });
      });
//    конец скрипта