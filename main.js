// global variable
var typeArray = [
	{type:"Expresso", description:"The espresso (aka “short black”) is the foundation and the most important part to every espresso based drink. So much so that there is a written guide on how to make the perfect espresso shot."},
	{type:"Iced Coffee", description:"Iced coffee is cold coffee with ice. The iced latte and iced mocha are examples. There are various brewing methods, with the fundamental division being cold brew – brewing the coffee cold will yield different flavor."},
	{type:"Americano", description:"Americano is a style of coffee prepared by adding hot water to an espresso, giving it a similar strength to, but different flavor from traditionally brewed coffee. The strength of an Americano varies with the number of shots of espresso and the amount of water added. "},
	{type:"Caffè Latte", description:"A café latte, or “latte” for short, is an espresso based drink with steamed milk and micro-foam added to the coffee. This coffee is much sweeter compared to an espresso due to the steamed milk."},
	{type:"Long Black", description:"A long black is a style of coffee, commonly found in Australia and New Zealand. A long black is made by pouring a double-shot of espresso or ristretto over hot water. This order of preparation is the opposite of the Americano (where water is added to the cup containing espresso)."},
	{type:"Caffè Mocca", description:"A mocha is a mix between a cappuccino and a hot chocolate. It is made by putting mixing chocolate powder with an espresso shot and then adding steamed milk and micro-foam into the beverage."},
	{type:"Cappuccino", description:"A cappuccino is similar to a latte. However the key difference between a latte and cappuccino is that a cappuccino has more foam and chocolate placed on top of the drink. Further a cappuccino is made in a cup rather than a tumbler glass."},
  {type:"Decaf Coffee", description:"The processes of making decaffeinated coffee mean that more than 95 percentage of caffeine was removed from coffee beans. However, decaffeinated coffee still contains caffeine."},
	{type:"Chocolate", description:"It's essentially chocolate and we all secretly know that it is not coffee..."},
	{type:"Caffè Frappe", description:"Frappé coffee also known as Greek frappé is a foam-covered iced coffee drink made from instant coffee (generally, spray-dried). It is very popular in Greece and Cyprus, especially during the summer, but has now spread to other countries."},
]

function valueChange(){
    

    var general_change = anime({
                        targets: '.number',
                        
                        value: 60,
                        round: 1,
                        easing: 'easeInOutExpo',
                        autoplay: false
                        });
    general_change.play();

}

// number animation for expresso
function valueChange_espresso(){
    

    var expresso_change = anime({
                        targets: '#expresso_value',
                        
                        value: 30,
                        round: 1,
                        easing: 'easeInOutExpo',
                        autoplay: false
                        });
    expresso_change.play();

}

// number animation for latte
function valueChange_latte(){
    

    var coffee_change = anime({
                        targets: '#expresso_value',
                        
                        value: 60,
                        round: 1,
                        easing: 'easeInOutExpo',
                        autoplay: false
                        });
    coffee_change.play();

    var milk_change = anime({
                        targets: '#milk_value',
                        
                        value: 300,
                        round: 1,
                        easing: 'easeInOutExpo',
                        autoplay: false
                        });
    milk_change.play();

}

 function valueReset(){
    var general_reset = anime({
                        targets: '.number',
                        
                        value: 0,
                        round: 1,
                        duration:0,
                        autoplay: false
                        });
    general_change.play();
 }

function jumpingArrow(){
      var jumpingArrow = anime({
        targets: '#down_arrow',
        translateY: '10vh',
        duration: 400,
        loop: true,
        direction: 'alternate',
        easing: 'easeInCubic'
      });
}



/////////////////////load document///////////////////
$(document).ready(function() {
    console.log( "ready!" );

    jumpingArrow();
    
    $('.fade_hov').hover(function(){
    					// greyscale other icons when one coffee icon is hovered
                        $(this).siblings().addClass('fade');

                        var x = parseInt($(this).attr('id'))-1;
                        console.log("this is coffee" + x);
                        $('#hovered_text').text(typeArray[x].type);
                        // show the coffee type
                        $('#hovered_text').css("visibility","visible");
                }, function(){
                        $(this).siblings().removeClass('fade');
                        $('#hovered_text').css("visibility","hidden");
                        
                });


 
    $( ".fade_hov" ).each(function() {
      $(this).on("click", function(){
    // $('.fade_hov').on('click', function(){
                        $('.overlap').css("visibility","visible");


                        var y = parseInt($(this).attr('id'))-1;
                        console.log("this is coffee" + y);
                        $('#coffee_title').text(typeArray[y].type);
                        $('#coffee_details').text(typeArray[y].description);

                        
                        if((y==1) || (y==2) || (y==4) || (y==7)){
                          $('.right').hide();

                          $(function(){
                          valueChange();
                          });

                        }
                        else if(y==0){
                          $('.right').hide();

                          $(function(){
                          valueChange_espresso();
                          });

                        }
                        else if(y==3){
                          $('.right').show();

                          $(function(){
                            valueChange_latte();
                          });

                          $("#milk_value").css("width","40%");
                        }
                        else{
                          $('.right').show();

                          $(function(){
                            valueChange();
                          });

                        }                         

    });
    });
                       
  //back button//
  $('.overlay__back').on('click', function(){
                        $('.overlap').css("visibility","hidden");
                        valueReset();

  });

  //////////////quiz section one/////////
  $('.selectorOne').on('click', function(){

    console.log($(this).attr('value'));

    if($(this).attr('value') == 'brazil'){
      $('#correct_one').css("visibility","visible");
      $('#correct_one').text("YES! You know too much!");
      $('#answerOne').css("visibility","visible");
      

    }
    else{
      $('#correct_one').css("visibility","visible");
      $('#correct_one').text("Oops, try again!");
      $('#answerOne').css("visibility","hidden");
    }

  });

  //////////////quiz section two/////////
  $('.selectorTwo').on('click', function(){

    console.log($(this).attr('value'));

    if($(this).attr('value') == 'minutes'){
      $('#correct_two').css("visibility","visible");
      $('#correct_two').text("YES! You know too much!");
      $('#answerTwo').css("visibility","visible");
    }
    else{
      $('#correct_two').css("visibility","visible");
      $('#correct_two').text("Oops, try again!");
      $('#answerTwo').css("visibility","hidden");
    }

  });

  //////////////quiz section three/////////
  $('.selectorThree').on('click', function(){

    console.log($(this).attr('value'));

    if($(this).attr('value') == 'less'){
      $('#correct_three').css("visibility","visible");
      $('#correct_three').text("YES! You know too much!");
      $('#answerThree').css("visibility","visible");
    }
    else{
      $('#correct_three').css("visibility","visible");
      $('#correct_three').text("Oops, try again!");
      $('#answerThree').css("visibility","hidden");
    }

  });



});

