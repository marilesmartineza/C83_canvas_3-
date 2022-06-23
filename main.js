var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
    if(width < 992) //922 sería para tableta o celular
    {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden"; //Evita el desplazamiento
    }
    canvas.addEventListener("touchstart", my_touchstart); //Quiere decir que ya esta activado el boocstrop (como se escriba :)

function my_touchstart(e) 
{
    console.log("my_touchstart");
  //Actividad adicional
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  //Final de la actividad adicional
         
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove); 

function my_touchmove(e) 
{

    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // old same old as the paint web app
    ctx.beginPath(); //Empieza a dibujar
    ctx.strokeStyle = color; //el color que vimos en la act adicional
    ctx.lineWidth = width_of_line; //Acho de la linea

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke(); //PInta

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
    // end of old same old as the paint web app
}

    // old same old as the paint web app
function clearArea() { //Borrar
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // end of old same old as the paint web app