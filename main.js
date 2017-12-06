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




//typing effect 
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

// number animation for iced coffee, decaf and cappuccino
function valueChange_iced(){
    

    var general_change = anime({
                        targets: '.number',
                        
                        value: 60,
                        round: 1,
                        easing: 'easeInOutExpo',
                        autoplay: false
                        });
    general_change.play();

}

// number animation for chocolate
function valueChange_choco(){
    

    var choco_change = anime({
                        targets: '.number',
                        
                        value: 120,
                        round: 1,
                        easing: 'easeInOutExpo',
                        autoplay: false
                        });
    choco_change.play();

}

// number animation for frappe
function valueChange_frappe(){
    

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
                        
                        value: 30,
                        round: 1,
                        easing: 'easeInOutExpo',
                        autoplay: false
                        });
    milk_change.play();

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

// number animation for americano and long black
function valueChange_amer(){
    

    var coffee_change = anime({
                        targets: '#expresso_value',
                        
                        value: 60,
                        round: 1,
                        easing: 'easeInOutExpo',
                        autoplay: false
                        });
    coffee_change.play();

    var water_change = anime({
                        targets: '#milk_value',
                        
                        value: 120,
                        round: 1,
                        easing: 'easeInOutExpo',
                        autoplay: false
                        });
    water_change.play();

}



 function valueReset(){
    var general_reset = anime({
                        targets: '.number',
                        
                        value: 0,
                        round: 1,
                        duration:0,
                        autoplay: false
                        });
    general_reset.play();
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

	$('.button1').on("click", function(){
		$('.cover').remove();
	});


    //typing effect on funfact page
    var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);

    //arrow jumping effect on funfact page
    jumpingArrow();


    //show names dynamically on home page
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


    //load div dynamically on home page
    $( ".fade_hov" ).each(function() {
      $(this).on("click", function(){
                        $('.overlap').css("visibility","visible");


                        var y = parseInt($(this).attr('id'))-1;
                        console.log("this is coffee" + y);
                        $('#coffee_title').text(typeArray[y].type);
                        $('#coffee_details').text(typeArray[y].description);

                        //if clicking on iced coffee or decaf
                        if((y==1)  || (y==7)){
                          $('.right').hide();
                          valueChange_iced();

                        }
                        //if clicking on expresso
                        else if(y==0){
                          $('.right').hide();

                          valueChange_espresso();

                        }
                        //if clicking on americano or long black
                        else if((y==2) || (y==4)){

                          valueChange_amer();
                          $('#milk_label').text('Hot Water');
                          $("#milk_value").css("width","40%");
                          $("#milk_img").attr('src', 'assets/kettle.png');
                          
                        }
                        //if clicking on latte
                        else if(y==3){

                            valueChange_latte();
                          
                          $("#milk_value").css("width","40%");
                        }
                        //if clicking on mocca
                        else if(y==5){
                          valueChange_iced();
                          $('#milk_label').text('Chocolate');
                          $("#milk_img").attr('src', 'assets/chocolate2.png');
                        }
                        //if clicking on cappuccino
                        else if(y==6){
                          valueChange_iced();
                        }
                        //if clicking on cappuccino
                        else if(y==9){
                          valueChange_frappe();
                        }
                        //if clicking on chocolate
                        else{
                          $('.right').hide();
                          valueChange_choco();
                          $('#expresso_label').text('Chocolate');
                          $("#expresso_img").attr('src', 'assets/chocolate2.png');
                          $("#expresso_value").css("width","40%");
                          

                        }                         

    });
    });
                       
  //back button, remove div and reset//
  $('.overlay__back').on('click', function(){
                        $('.overlap').css("visibility","hidden");
                        //reset input value to 0
                        valueReset();
                        //reset everything in the ingredient div to default
                        $('.right').show();
                        $('#expresso_label').text('Expresso');
                        $("#expresso_img").attr('src', 'assets/coffee.png');
                        $('#milk_label').text('Steam Milk');
                        $("#milk_value").css("width","30%");
                        $("#milk_img").attr('src', 'assets/milk.png');
                        console.log($('#milk_label').text());



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

