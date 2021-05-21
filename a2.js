

//let n=1; 
  
let div1 = document.getElementById('contenedor1');

 
for (var k = 1 ; k <= 82; k++) {

	div1.innerHTML += 
    '<div class="numero" id="num'+k+'">'+k+'</div>'+
    '<div class="imagen"><img id="img'+k+'" alt="" width="100%" onClick="copy('+k+')"></div>'+
    '<div class="texto" id="txt'+k+'" ></div>'+
    '<div class="cbox"><input class="unpresed" id="checkbox'+n+'#'+k+'" type="checkbox" onClick="clickboton('+k+')"></div>';

 }   
  
  
  

function clickboton(i) { 
    //var cbox = "checkbox"+i;      
    var checkbox = document.getElementById("checkbox"+n+"#"+i);
    localStorage.setItem("checkbox"+n+"#"+i, checkbox.checked);  
  
  
  
  if (document.getElementById("checkbox"+n+"#"+i).checked == true)
  {
    var hoy = new Date();
  	var dia = hoy.getDate();
  	var mes = hoy.getMonth() + 1;
    
    localStorage.setItem("diachecked"+n+"#"+i,dia);
  	localStorage.setItem("meschecked"+n+"#"+i,mes);
    
  	//console.log("diacheckedu"+i+dia);
  }	
  else
  {
  	
  }   
  
 
  
}
  
  
var hoy = new Date();
var dia = hoy.getDate();
var mes = hoy.getMonth() + 1;  
  
for (var j = 1; j <= 82; j++) {
  
	var checked = JSON.parse(localStorage.getItem("checkbox"+n+"#"+j));
    if (checked == true)
    {
    	document.getElementById("checkbox"+n+"#"+j).checked = true;

      
  	}
  	else
    {
    
    	document.getElementById("checkbox"+n+"#"+j).checked = false;
    } 
  
  
	if (checked == true)
    {
          

          
        var diachecked = localStorage.getItem('diachecked'+n+'#'+j);
        var meschecked = localStorage.getItem('meschecked'+n+'#'+j);
          
        /*  
    	if (meschecked == mes)
        {
         	if ( (dia - diachecked) > 10)
            {
              	localStorage.setItem("checkbox"+n+"#"+j,false);
                
            }  
            
        }
        else if (Math.abs(meschecked-mes)==1)
        {
          	//if ( ( (dia + 31) - diachecked ) > 10)
          	if (((31-diachecked)+dia)>10) 
            {
             	localStorage.setItem("checkbox"+n+"#"+j,false);
                
            }             
            
        }
      	else if (Math.abs(meschecked-mes)>1)
	*/
	if (Math.abs(meschecked-mes)>1)	
        {
        	localStorage.setItem("checkbox"+n+"#"+j,false);	
        
        }  
      
      
    		//console.log("dia"+j+"="+localStorage.getItem('diachecked'+n+'#'+j) );
      		//console.log("mes"+j+"="+localStorage.getItem('meschecked'+n+'#'+j) );
    }  
  
  
}

document.getElementById("img1").src= "imgv/1.png"; 
document.getElementById("txt1").innerHTML = "➡Como cargar la BATERÍA DE TU AUTO |Comprobado con el Tester‼️😮✅<br>"+
												"Di GRACIAS y aqui les dejo el video completo👇<br>"+
												"https://youtu.be/AskGSMS0xAM";

   
document.getElementById("img2").src= "imgv/2.png"; 
document.getElementById("txt2").innerHTML = "✅💥Aprenda a reparar focos ahorradores con este video‼️😮<br>"+
												"Di GRACIAS y aqui les dejo el video completo👇<br>"+
												"https://youtu.be/jbDmqIyh5es";
  
document.getElementById("img3").src= "imgv/3.png";
document.getElementById('txt3').innerHTML =	"💥Reparación protector de sobre tensión quemado Solución muy fácil‼️😮💥<br>"+
												"Di GRACIAS y aqui les dejo el video completo⬇️ <br>"+
												"https://youtu.be/y73Xz7oesb0"; 
  
document.getElementById("img4").src= "imgv/4.png"; 
document.getElementById('txt4').innerHTML =	"✅💥Como desarmar mini laptop Asus fácil y rápido!💥💡😮 <br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br>"+
												"https://youtu.be/_d9CzsMlPps";  
  
  
document.getElementById("img5").src= "imgv/5.png"; 
document.getElementById('txt5').innerHTML =	"🔌💥Como desarmar mini laptop siragon fácil y rápido‼️💥✅<br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br>"+
												"https://youtu.be/331nBXIlRL0"; 

document.getElementById("img6").src= "imgv/6.png";
document.getElementById('txt6').innerHTML = "✅Como hacer foco LED con materiales reciclados‼️💥😮<br />"+
											"Di GRACIAS y aqui les dejo el video completo👇<br />"+
											"https://youtu.be/-Wh-YNfErbI"; 
  
document.getElementById("img7").src= "imgv/7.png";
document.getElementById('txt7').innerHTML = "✅💥Como hacer Antena WIFI paso a paso Fácil y gratis‼️💥😮<br />"+
											"Di GRACIAS y aqui les dejo el video completo⬇️<br />"+
											"https://youtu.be/9FvZoNaEkrY";
  
document.getElementById("img8").src= "imgv/8.png";
document.getElementById('txt8').innerHTML = "✅💥Como reparar cargador de laptop cuando se rompe el cable en el peor lugar‼️💥<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/EdLBapN4uQw"; 
  
document.getElementById("img9").src= "imgv/9.png";
document.getElementById('txt9').innerHTML = "✅💥Reparación bombilla LED, no enciende! Aquí te explico‼️💥<br />"+
											"Di GRACIAS y aqui les dejo el video completo👇<br>"+
											"https://youtu.be/yHBoeH0h7HI"; 
  
document.getElementById("img10").src= "imgv/10.png";
document.getElementById('txt10').innerHTML = "✅💥Reparación lampara ahorradora con método sencillo‼️💥😮<br />"+
											"Di GRACIAS y aqui les dejo el video completo👇<br>"+
											"https://youtu.be/dHl61IFQpqc";
  
document.getElementById("img11").src= "imgv/11.png";
document.getElementById('txt11').innerHTML =  "✅💥Ahorra dinero con este invento, batería infinita‼️💥😮<br />"+
											"Di GRACIAS y aqui les dejo el video completo👇<br />"+
											"https://youtu.be/jxYyIS8DOlQ";
  
document.getElementById("img12").src= "imgv/12.png";
document.getElementById('txt12').innerHTML = "✅💥Convierte tu disco duro viejo en una memoria USB de gran capacidad‼️💥😮<br />"+
											"Di GRACIAS y aqui les dejo el video completo⬇️<br />"+
											"https://youtu.be/HarLsyCsXeo"; 
  
document.getElementById("img13").src= "imgv/13.png";
document.getElementById('txt13').innerHTML = "🔥✅Reparación protector de sobre tensión Se queda en led amarillo‼️⚡💡👷<br />"+
											"Di GRACIAS y aqui les dejo el video👇<br />"+
											"https://youtu.be/MlJHk7tdYdw";
  
document.getElementById("img14").src= "imgv/14.png";
document.getElementById('txt14').innerHTML =  "🔥⚠️Tutorial Reparación Foco Ahorrador de Bajo Consumo 1/2‼️💥😮<br />"+
											"Di GRACIAS y aqui les dejo el video completo👇<br />"+
											"https://youtu.be/tnglAlS1zW4"; 
  
document.getElementById("img15").src= "imgv/15.png";
document.getElementById('txt15').innerHTML ="💥✅Tutorial Reparación Foco Ahorrador de Bajo Consumo 2/2‼️💥😮<br/>"+
											"Di GRACIAS y aqui les dejo el video completo⬇️<br />"+
											"https://youtu.be/IaLPqXzSt-I";
  
document.getElementById("img16").src= "imgv/16.png";
document.getElementById('txt16').innerHTML = "💥✅Tutorial Electrónica Básica #1 resistencias capacitores inductores y diodos💥😮<br />"+
											"Di Gracias y aqui les dejo video👇<br />"+
											"https://youtu.be/vJnGSqnFgvw";
  
document.getElementById("img17").src= "imgv/17.png";
document.getElementById('txt17').innerHTML = "💥Como Reparar cargador de celular gratis, solución muy fácil!💥😁💡🏠<br />"+  
											"Di Gracias y aqui les dejo video💡<br />"+
											"https://youtu.be/4Pzwuz5PH7Y";  
  
document.getElementById("img18").src= "imgv/18.png";
document.getElementById('txt18').innerHTML = "💥✅Como hacer una antena wifi de largo alcance fácil en 5 Minutos‼️💥😮<br />"+
											"Di Gracias y aqui les dejo video⬇️<br />"+
											"https://youtu.be/RAQ6czAUuK8"; 
  
document.getElementById("img19").src= "imgv/19.png";
document.getElementById('txt19').innerHTML = "👍💥Reparación Lampara LED capacitor dañado! No enciende🏠🔌👷<br />"+ 
												"Di Gracias y aqui les dejo video👇<br />"+
												"https://youtu.be/LYQeU9iXKcw";
  
document.getElementById("img20").src= "imgv/20.png";
document.getElementById('txt20').innerHTML = "✅💥Truco para reparar foco ahorrador con filamento dañado Di Gracias y aqui les dejo video!💡🔌<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/J91Liyz9bts"; 
  
document.getElementById("img21").src= "imgv/21.png";
document.getElementById('txt21').innerHTML =  "✅Reparación protector de voltaje se queda en led rojo Di Gracias y aqui les dejo video‼️💥😁💡💯<br />"+ 
											"Di Gracias y aqui les dejo video👇<br />"+
											"https://youtu.be/lV6gXAfDbzQ";
  
document.getElementById("img22").src= "imgv/22.png";
document.getElementById('txt22').innerHTML = "✅💥Tutorial Electrónica Básica #2 transistores y reguladores 😁💯<br />"+ 
											"Di Gracias y aqui les dejo video‼️💥<br />"+
											"https://youtu.be/lN0AfX0XI8s";
  
document.getElementById("img23").src= "imgv/23.png";
document.getElementById('txt23').innerHTML ="✅Tutorial Electrónica Básica #3 Circuitos Integrados, Triac y SCR 😁💯 <br/>"+ 
											"Di Gracias y aqui les dejo video‼️💥👇<br />"+ 
											"https://youtu.be/CorHHjOc2RQ";
											
document.getElementById("img24").src= "imgv/24.png";
document.getElementById('txt24').innerHTML = "👉✅Tutorial Fuentes Conmutadas Switching Power Suply 💯<br />"+
											"Di Gracias y aqui les dejo video‼️🔥👇<br />"+
											"https://youtu.be/Tqhh2-jZkWg";	

document.getElementById("img25").src= "imgv/25.png";
document.getElementById('txt25').innerHTML =	"👉✅Como reparar reproductor de DVD cuando no enciende‼️💥😁💯 <br />"+
											"Di GRACIAS y aqui les dejo el video completo👇<br>"+
											"https://youtu.be/dFWP0JreIqg";	
											
document.getElementById("img26").src= "imgv/26.png";
document.getElementById('txt26').innerHTML = "🔌😮Como hacer un MEDIDOR DE NIVEL AGUA ELECTRÓNICO‼️👍💥💯 <br />"+
										"Di Gracias y aqui les dejo video‼️🔥⬇️<br />"+
										"https://youtu.be/XCWuPe21Lyo";
											
document.getElementById("img27").src= "imgv/27.png";
document.getElementById('txt27').innerHTML ="✅💥Como cambiar voltaje de un cargador de celular muy fácil‼️👍💥💯 <br />"+
										"Di Gracias y aqui les dejo video‼️🔥👇<br />"+
										"https://youtu.be/UGS3tjaMkUc";
											
document.getElementById("img28").src= "imgv/28.png";
document.getElementById('txt28').innerHTML ="✅💥Como hacer un cargador de baterías con una fuente de PC antigua‼️😁💥💯 <br />"+
										"Di Gracias y aqui les dejo video‼️⬇️<br />"+
										"https://youtu.be/qLfsMqewlnI";	
											
document.getElementById("img29").src= "imgv/29.png" ;
document.getElementById('txt29').innerHTML ="✅💥Como Hacer un Duplicador el voltaje con pocos elementos‼️😁💥💯 <br />"+
										"Di Gracias y aqui les dejo video‼️👇<br />"+
										"https://youtu.be/VQa_K2l6xP0";	
											
document.getElementById("img30").src= "imgv/30.png";
document.getElementById('txt30').innerHTML ="🔌😮✅Mira que pasa si conectas un capacitor invertido por error‼️💥💯 <br />"+
											"Di Gracias y aqui les dejo experimento‼️⬇️<br />"+
											"https://youtu.be/sfAbv-0hQsU";	
											
document.getElementById("img31").src= "imgv/31.png";
document.getElementById('txt31').innerHTML ="🔌😮✅Reparación foco ahorrador filamento dañado (caso 2)‼️💥💯😁<br />"+
											"Di Gracias y aqui les dejo la reparación‼️👇<br />"+
											"https://youtu.be/Pa8fvImwkto";

document.getElementById("img32").src= "imgv/32.png";
document.getElementById('txt32').innerHTML = 	"✅🔌Como cargar la BATERÍA DE TU AUTO | con sencillo invento‼️✌️🔧😁<br />"+
												"Di Gracias y aqui les dejo la solución‼️👇<br />"+
												"https://youtu.be/bWwWLM_GIJA";

document.getElementById("img33").src= "imgv/33.png";
document.getElementById('txt33').innerHTML = 	"😮✅Potente ANTENA CASERA de largo alcance, fácil de hacer‼️💥💯😁<br />"+
												"Di Gracias y aqui les dejo la solución‼️⬇️<br />"+
												"https://youtu.be/sXA460nTMbQ";
											
document.getElementById("img34").src= "imgv/34.png";
document.getElementById('txt34').innerHTML =	"😮✅Ahorra dinero con este Invento Recicla tus baterías agotadas‼️💥💯😁<br />"+
												"Di Gracias y aqui les dejo la solución‼️👇<br />"+
												"https://youtu.be/6kV2mxCA1bU";
											
document.getElementById("img35").src= "imgv/35.png";
document.getElementById('txt35').innerHTML = 	"😮✅Como hacer Cargador Universal para Baterías de celular‼️💥💯😁<br />"+
												"Di Gracias y aqui les dejo la solución‼️⬇️<br />"+
												"https://youtu.be/C0is4jnWRpQ";
											
document.getElementById("img36").src= "imgv/36.png";
document.getElementById('txt36').innerHTML =	"✅🔌Reparación DVD no lee DISCO Solución muy fácil‼️✌️<br />"+
												"Di Gracias y aqui les dejo la solución‼️👇<br />"+
												"https://youtu.be/8WvdzlkESf4";
											
document.getElementById("img37").src= "imgv/37.png";
document.getElementById('txt37').innerHTML =	"✅Como hacer aire acondicionado casero con botellas plásticas‼️⚠️💥💯 <br />"+
												"Di Gracias y aqui les dejo este genial invento⬇️<br />"+
												"https://youtu.be/iA2ux2GGHS8";
											
document.getElementById("img38").src= "imgv/38.png";
document.getElementById('txt38').innerHTML = 	"✅Como hacer el motor mas simple del mundo‼️🔌💡😮<br />"+
												"Di Gracias y aqui les dejo el video‼️👇<br />"+
												"https://youtu.be/eLvZOFccYA0";
	
											
document.getElementById("img39").src= "imgv/39.png";
document.getElementById('txt39').innerHTML = 	"💥✅Como secar la ropa en Invierno fácil y rápido con este Invento‼️💥😊<br />"+
												"Di Gracias y aqui les dejo la solución‼️⬇️<br />"+
												"https://youtu.be/IgtAm5DulJ4";

document.getElementById("img40").src= "imgv/40.png";
document.getElementById('txt40').innerHTML =	"💥✅Como cargar la Batería del auto usando un Cargador de laptop‼️💥😊<br />"+
												"Di GRACIAS y aqui les dejo el video completo👇<br>"+
												"https://youtu.be/g3veBrXyjGY";											

document.getElementById("img41").src= "imgv/41.png";
document.getElementById('txt41').innerHTML =	"✅💡La acometida electrica domiciliaria a donde inicia y donde llega su conexion‼️👀😊 <br />"+
												"Di Gracias y aqui les dejo el video completo‼️👇 <br />"+
												"https://youtu.be/d7gOw09bER4";											
											
document.getElementById("img42").src= "imgv/42.png";
document.getElementById('txt42').innerHTML = 	"✅👉Nunca te quedes sin batería con este Cargador Solar Portátil‼️😊💯 <br />"+
												"Di Gracias y aqui les dejo la solución‼️⬇️ <br />"+
												"https://youtu.be/EjKyhsnk3nA";												
											
document.getElementById("img43").src= "imgv/43.png";
document.getElementById('txt43').innerHTML =	"✅👉Truco para Aumentar la Señal WIFI y Conectar con Redes a Larga Distancia😮 <br />"+
												"Di Gracias y aqui les dejo la solución‼️👇 <br />"+
												"https://youtu.be/H2kFEReckyQ";											
											
document.getElementById("img44").src= "imgv/44.png";
document.getElementById('txt44').innerHTML =	"💥✅Como Cargar tu Celular con una Batería de 9v‼️😮🔥👀 <br />"+
												"Di Gracias y aqui les dejo la solución‼️⬇️ <br />"+
												"https://youtu.be/3tS-5h-MObo";											
											
document.getElementById("img45").src= "imgv/45.png";
document.getElementById('txt45').innerHTML =	"💥✅Como Hacer un Control de temperatura para Cautin‼️😊💯 <br />"+
												"Di Gracias y aqui les dejo la solución‼️👇 <br />"+
												"https://youtu.be/q_h6VSfrrTQ";										
											
											
document.getElementById("img46").src= "imgv/46.png";
document.getElementById('txt46').innerHTML =	"💥Ahorra dinero con este Invento | Batería Infinita‼️😮✅ <br />"+
												"Di Gracias y aqui les dejo el video‼️👇 <br />"+
												"https://youtu.be/zC7k2FLgfOI";										
											
											
document.getElementById("img47").src= "imgv/47.png";
document.getElementById('txt47').innerHTML = 	"💥✅Haz tu propio cautin casero, te puede salvar de un apuro‼️😮✅ <br />"+
												"Di Gracias y aqui les dejo la solución‼️👇 <br />"+
												"https://youtu.be/KAjPSyUslL0";


document.getElementById("img48").src= "imgv/48.png";
document.getElementById('txt48').innerHTML =	"💥✅Que pasa si conecto positivo con negativo por error‼️😊💯 <br />"+
												"Di Gracias y aqui les dejo el experimnto‼️👇<br />"+
												"https://youtu.be/slWJZZQApl8";										
											

document.getElementById("img49").src= "imgv/49.png";
document.getElementById('txt49').innerHTML =	"💥Como Hacer un Inversor de Voltaje con un transformador‼️✅😮 <br />"+
												"Di OK y mira el video completo si deseas opinar‼️👇 <br />"+
												"https://youtu.be/D8nhm7_y6PY";									
											
											
document.getElementById("img50").src= "imgv/50.png";
document.getElementById('txt50').innerHTML = 	"💥Como hacer un detector de Fase estilo bolígrafo‼️👀✅😮 <br />"+
												"Di Gracias y aqui les dejo la solución‼️⬇️ <br />"+
												"https://youtu.be/ZZicbIYAhSM";											
											
											
document.getElementById("img51").src= "imgv/51.png";
document.getElementById('txt51').innerHTML =	"💥Como Hacer Un Panel Solar Casero con materiales reciclados‼️😊💯✅ <br />"+
												"Di Gracias y aqui les dejo la solución‼️👇 <br />"+
												"https://youtu.be/lH-FLc8yI4Y";										
											
											
document.getElementById("img52").src= "imgv/52.png";
document.getElementById('txt52').innerHTML =	"💥Como Hacer un Encendedor Eléctrico Casero para la Cocina‼️😊💯💥 <br />"+
												"Di Gracias y aqui les dejo la solución‼️👇 <br />"+
												"https://youtu.be/Fv1Y-yiEw2Q";										
											
											
document.getElementById("img53").src= "imgv/53.png";
document.getElementById('txt53').innerHTML =	"✅💥Como recargar la batería de tu auto sin usar cargador‼️😮💯💥 <br />"+
												"Di Gracias y aqui les dejo la solución‼️⬇️ <br />"+
												"https://youtu.be/KW7smfZsS78";								
											
											
document.getElementById("img54").src= "imgv/54.png";
document.getElementById('txt54').innerHTML =	"✅💥Truco para eliminar el parpadeo de los focos led y ahorradores‼️😊💯💥 <br />"+
												"Di Gracias y aqui les dejo la solución‼️👇 <br />"+
												"https://youtu.be/WWXZUvsZ21M";									
											
											
document.getElementById("img55").src= "imgv/55.png";
document.getElementById('txt55').innerHTML = 	"✅💥Cómo detectar cualquier cable roto con este ingenioso invento‼️😊💯💥 <br />"+
												"Di Gracias y aqui les dejo la solución‼️⬇️ <br />"+
												"https://youtu.be/VoZHfZdVqxE";
												
												
												
document.getElementById("img56").src= "imgv/56.png";
document.getElementById('txt56').innerHTML = 	"✅💥Como hacer una antena HD Tv digital Fácil y barato‼️😊💥💯✅ <br />"+
												"Di Gracias y aqui les dejo la solución‼️👇 <br />"+
												"https://youtu.be/z1oSYepV1_g";


document.getElementById("img57").src= "imgv/57.png";
document.getElementById('txt57').innerHTML = 	"✅💥Como Hacer un Inversor de Voltaje de 12v a 120v Fácil y Rápido‼️😊💯✅ <br />"+
												"Di Gracias y aqui les dejo la solución‼️⬇️ <br />"+
												"https://youtu.be/B6RRAsBsNfA";


document.getElementById("img58").src= "imgv/58.png";
document.getElementById('txt58').innerHTML = 	"💥Como hacer un panel solar casero con materiales reciclados!(Parte 2)‼️😊💯💥 <br />"+
												"Di Gracias y aqui les dejo la solución‼️👇 <br />"+
												"https://youtu.be/HPq6rYuP5v4";	


document.getElementById("img59").src= "imgv/59.png";
document.getElementById('txt59').innerHTML = 	"✅💡Como lograr que un foco LED dure 50 años con simple truco‼️😊💯💥 <br />"+
												"Di Gracias y aqui les dejo la solución‼️⬇️ <br />"+
												"https://youtu.be/9WrYiP8AvEc";	


document.getElementById("img60").src= "imgv/60.png";
document.getElementById('txt60').innerHTML = 	"✅10 cosas que puedes hacer con tus teléfonos antiguos‼️😊💯💥✅ <br />"+
												"Di Gracias y aqui les dejo el video‼️👇 <br />"+
												"https://youtu.be/w4hWibJs1Ac";	


document.getElementById("img61").src= "imgv/61.png";
document.getElementById('txt61').innerHTML = 	"💥Como convertir un foco LED de 120v a 12v con simple truco‼️😊💯💥 <br />"+
												"Di Gracias y aqui les dejo la solución‼️👇 <br />"+
												"https://youtu.be/eAwwOXcNlBk";	


document.getElementById("img62").src= "imgv/62.png";
document.getElementById('txt62').innerHTML = 	"✅💥Como identificar los cables de cualquier Transformador con simple método‼️🔌😮🔥✅ <br />"+
												"Di Gracias y aqui les dejo la solución‼️⬇️ <br />"+
												"https://youtu.be/jPK6XDBZQec";	

												
document.getElementById("img63").src= "imgv/63.png";
document.getElementById('txt63').innerHTML = 	"✅💥Cómo detectar cables dañados con este simple invento! (parte 2)‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo la solución‼️👇<br />"+
												"https://youtu.be/NGIXpY04IbM";

							
document.getElementById("img64").src= "imgv/64.png";
document.getElementById('txt64').innerHTML = 	"✅💥Como Hacer un Estabilizador de Voltaje para Proteger tus Equipos‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo el video completo‼️👇<br />"+
												"https://youtu.be/6NMqQA6pMtg";													


document.getElementById("img65").src= "imgv/65.png";
document.getElementById('txt65').innerHTML = 	"✅💥Como encender y apagar un foco desde tres lugares diferentes‼️😮💥✅<br />"+
												"Di Gracias y aqui les dejo la solución‼️👇<br />"+
												"https://youtu.be/b5vugs1xYiQ";


document.getElementById("img66").src= "imgv/66.png";
document.getElementById('txt66').innerHTML = 	"✅💥7 errores en instalaciones eléctricas caseras que debes evitar‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo el video completo‼️👇<br />"+
												"https://youtu.be/Lr09BWA6ZaA";


document.getElementById("img67").src= "imgv/67.png";
document.getElementById('txt67').innerHTML = 	"✅💥Como hallar Fase Neutro y Tierra en un toma corriente! Aquí te explico‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo la solución‼️👇<br />"+
												"https://youtu.be/EE0paCB0GCI";

document.getElementById("img68").src= "imgv/68.png";
document.getElementById('txt68').innerHTML = 	"✅💥7 errores de electricidad domiciliaria que debes evitar! (parte 2)‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo el video‼️👇<br />"+
												"https://youtu.be/qyKR5j8aw8k";													
												
												
document.getElementById("img69").src= "imgv/69.png";
document.getElementById('txt69').innerHTML = 	"✅💥Como hacer empalmes eléctricos de forma correcta‼️😮💥✅<br />"+
												"Di Gracias y aqui les dejo la solución‼️👇<br />"+
												"https://youtu.be/PNxH9dE9f98";
												
												
document.getElementById("img70").src= "imgv/70.png";
document.getElementById('txt70').innerHTML = 	"✅💥El secreto que nadie conoce sobre los focos LED‼️💡✅<br />"+
												"Di Gracias y aqui les dejo la información‼️👇<br />"+
												"https://youtu.be/Mq2XMpIEzIg";
												
												
document.getElementById("img71").src= "imgv/71.png";
document.getElementById('txt71').innerHTML = 	"✅💥Nunca acerques un Imán a tu laptop! Experimento‼️😮💥✅<br />"+
												"Di Gracias y aqui les dejo el experimento‼️👇<br />"+
												"https://youtu.be/kmUKZo2UHeY";

document.getElementById("img72").src= "imgv/72.png";
document.getElementById('txt72').innerHTML = 	"✅💥6 trucos para evitar que se dañen sus equipos electrónicos‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo la solución‼️👇<br />"+
												"https://youtu.be/TMqpT68rRfA";
												
document.getElementById("img73").src= "imgv/73.png";
document.getElementById('txt73').innerHTML = 	"✅💥Increíble truco para cambiar circuitos integrados de montaje superficial‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo la solución‼️👇<br />"+
												"https://youtu.be/uJZgPFTZpAo";													
																								
																								
document.getElementById("img74").src= "imgv/74.png";
document.getElementById('txt74').innerHTML = 	"✅💥7 errores que acortan la vida de tu móvil y que deberías evitar‼️😮✅<br />"+
												"Di Gracias y aqui les dejo la información‼️👇<br />"+
												"https://youtu.be/gIHMKUEZU6g";
																								
																								
document.getElementById("img75").src= "imgv/75.png";
document.getElementById('txt75').innerHTML = 	"✅💥Truco para recargar celular con el pin de carga dañado‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo la solución‼️👇<br />"+
												"https://youtu.be/XeL1Xw1mTjU";
																								
																								
document.getElementById("img76").src= "imgv/76.png";
document.getElementById('txt76').innerHTML = 	"✅💥10 errores de electricidad residencial que debes evitar‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo la información‼️👇<br />"+
												"https://youtu.be/nJnAfoNvmHE";


document.getElementById("img77").src= "imgv/77.png";
document.getElementById('txt77').innerHTML = 	"✅💥TRUCO para pagar menos luz y ahorrar en tu factura eléctrica‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo la solución‼️👇<br />"+
												"https://youtu.be/86dnJcN_xk4";
																																				
																																				
document.getElementById("img78").src= "imgv/78.png";
document.getElementById('txt78').innerHTML = 	"✅💥Circuito mixto en serie y paralelo. ¿Hallar el valor de la Resistencia?‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo la información‼️👇<br />"+
												"https://youtu.be/PhULJU7edd4";


document.getElementById("img79").src= "imgv/79.png";
document.getElementById('txt79').innerHTML = 	"✅💥Cómo usar el MULTÍMETRO | Tutorial básico‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo el video‼️👇<br />"+
												"https://youtu.be/hY6DBqapljo";

document.getElementById("img80").src= "imgv/80.png";
document.getElementById('txt80').innerHTML = 	"✅💥Como hacer un cautin casero super potente‼️🔌😮💥✅<br />"+
												"Di Gracias y aqui les dejo esta genial idea‼️👇<br />"+
												"https://youtu.be/nfSOs3Hus4w";

document.getElementById("img81").src= "imgv/81.png";
document.getElementById('txt81').innerHTML = 	"✅💥Como cargar una bateria con simple truco! Genial Invento!‼️🔌😮💥✅<br />"+
												"Di GRACIAS y aqui les dejo esta genial idea👇<br />"+
												"https://youtu.be/ExWs49YVd6g";	

document.getElementById("img82").src= "imgv/82.png";
document.getElementById('txt82').innerHTML = 	"✅💥7 TRUCOS para ahorrar 50% en tu factura eléctrica!!‼️🔌😮💥✅<br />"+
												"Di GRACIAS para saber que estas activo👇<br />"+
												"https://youtu.be/dKbOT3cLsRo";	


									
function copy(i) {	
	
var ACopiar = document.getElementById('txt'+i);
var seleccion = document.createRange();
seleccion.selectNodeContents(ACopiar);
window.getSelection().removeAllRanges();
window.getSelection().addRange(seleccion);
var res = document.execCommand('copy');
window.getSelection().removeRange(seleccion);	
alert("Texto copiado video "+i);
}
