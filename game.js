
var j=0;
var k=1;

//********** BUTTON CLICK-event******************


  $(".btn").click(function()
  {
  var c="#"+$(this).attr("id");
    //document.querySelector(c).classList.add("pressed");
    $(c).addClass("pressed");
    setTimeout(function(){
    $(c).removeClass("pressed");
    },200);
  var v=$(this).attr("id");
    if(v==simon[j])
    {
      var sound=simon[j]+".mp3"
      var s=new Audio(sound);
      s.play();
    }
    else
    {
      var w=new Audio("wrong.mp3");
      w.play();
      $("body").addClass("game-over");
      setTimeout(function(){
      $("body").removeClass("game-over");
      },200);
      k=1;
      $("h1").text("***Game-Over!!***");

            setTimeout(function(){
              $("h1").text("Restart the game by pressing a key");
            },1000);
    }
    j+=1;
    if(j==simon.length)
    {
      $("h1").text("Level "+(k+1))

      setTimeout(function(){
        Randomsound();
      },1000);
      k+=1;
    }

  });



//*********** KEYPRESS EVENT**************************



arr=["green","red","yellow","blue"];
simon=[];

$(".btton").click(function(){
  $("h1").text("Level 1");
   Randomsound();

});






// function random sound*******************

function Randomsound()
{
  var r=Math.random();
  r=Math.floor(r=(r*4));
  var t="#"+arr[r];
  j=0;
  switch(arr[r])
  {
    case "green":
    var g=new Audio("green.mp3");
    g.play();
    break;
    case "red":
    var re=new Audio("red.mp3");
    re.play();
    break;
    case "yellow":
    var y=new Audio("yellow.mp3");
    y.play();
    break;
    case "blue":
    var b=new Audio("blue.mp3");
    b.play();
    break;
    default:
    var w=new Audio("blue.mp3");
    w.play();
    break;
  }
  simon.push(arr[r]);
  $(t).addClass("first");
  setTimeout(function(){
  $(t).removeClass("first");
  },10);

}
