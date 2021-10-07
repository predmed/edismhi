
function indice() {
	  var select = document.getElementById("opciones");
	  var indatribut = select.options[select.selectedIndex].value; // = atribut buscat  

if (indatribut == "bible") {
	var textind= "Citas bíblicas cristianas en el sermón: " + "<br/>";
	  var llista = document.querySelectorAll("cit[type='bible']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].getAttribute("source");
	  
//	  ms1.sort (a, b);
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "christian") {
	  var textind= "Otras citas cristianas en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("cit[type='christian']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].getAttribute("source");
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "muslim") {
	  var textind= "Citas islámicas en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("cit[type='muslim']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].getAttribute("source");
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "jewish") {
	  var textind= "Citas hebreas en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("cit[type='jewish']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].getAttribute("source");
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "other") {
	  var textind= "Otras citas en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("cit[type='other']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].getAttribute("source");
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "exemplum") {
	  var textind= "Ejemplos en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("index[indexName='exemplum']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].innerHTML;
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "distinctio") {
	  var textind= "Distinctiones en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("index[indexName='distinctio']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].innerHTML;
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "similitudo") {
	  var textind= "Similitudines en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("index[indexName='similitudo']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].innerHTML;
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "evidentia") {
	  var textind= "Evidentiae en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("index[indexName='evidentia']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].innerHTML;
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "quaestio") {
	  var textind= "Quaestiones en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("index[indexName='quaestio']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].innerHTML;
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "character") {
	  var textind= "Personajes en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("term[type='character']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].innerHTML;
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "place") {
	  var textind= "Lugares en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("term[type='place']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].innerHTML;
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

if (indatribut == "etim") {
	  var textind= "Etimologías en el sermón:" + "<br/>";
	  var llista = document.querySelectorAll("index[indexName='etim']");
	  for (s = 0; s < llista.length; s++) {
	  var ms1 =  llista[s].innerHTML;
	  textind += (s+1) + ". " + ms1 + "<br/>";
				 }
			 }

document.getElementById("respind").innerHTML = textind;
}

function mostrar() {
		document.getElementById('info').style.display='block';
		document.getElementById('mostrar').style.display='none';
		document.getElementById('ocultar').style.display='block';
} 
 
function ocultar() {
  		document.getElementById('info').style.display="none";
		document.getElementById('ocultar').style.display='none';
		document.getElementById('mostrar').style.display='block';
}

function showindex() {
		document.getElementById('idx').style.display='block';
		document.getElementById('respind').style.display='block';
		document.getElementById('showidx').style.display='none';
		document.getElementById('hideidx').style.display='block';
} 
 
function hideindex() {
		document.getElementById('idx').style.display='none';
		document.getElementById('respind').style.display='none';
		document.getElementById('showidx').style.display='block';
		document.getElementById('hideidx').style.display='none';
}

function showoptions() {
		document.getElementById('options').style.display='block';
		document.getElementById('showoptns').style.display='none';
		document.getElementById('hideoptns').style.display='block';
} 
 
function hideoptions() {
		document.getElementById('options').style.display='none';
		document.getElementById('showoptns').style.display='block';
		document.getElementById('hideoptns').style.display='none';
}

function carregatext() {
if (document.getElementById('bible') !=null) {document.getElementById("bible").checked = false;}
if (document.getElementById('christian') !=null) {document.getElementById("christian").checked = false;}
if (document.getElementById('muslim') !=null) {document.getElementById("muslim").checked = false;}
if (document.getElementById('jewish') !=null) {document.getElementById("jewish").checked = false;}
if (document.getElementById('other') !=null) {document.getElementById("other").checked = false;}
if (document.getElementById('exempla') !=null) {document.getElementById("exempla").checked = false;}
if (document.getElementById('distinctiones') !=null) {document.getElementById("distinctiones").checked = false;}
if (document.getElementById('similitudines') !=null) {document.getElementById("similitudines").checked = false;}
if (document.getElementById('evidentia') !=null) {document.getElementById("evidentia").checked = false;}
if (document.getElementById('quaestio') !=null) {document.getElementById("quaestio").checked = false;}
if (document.getElementById('character') !=null) {document.getElementById("character").checked = false;}
if (document.getElementById('places') !=null) {document.getElementById("places").checked = false;}
if (document.getElementById('etimology') !=null) {document.getElementById("etimology").checked = false;}
if (document.getElementById('pb') !=null) {document.getElementById("pb").checked = false;}
if (document.getElementById('perdida') !=null) {document.getElementById("perdida").checked = false;}
if (document.getElementById('rayado') !=null) {document.getElementById("rayado").checked = false;}
if (document.getElementById('ilegible') !=null) {document.getElementById("ilegible").checked = false;}
if (document.getElementById('error') !=null) {document.getElementById("error").checked = false;}
if (document.getElementById('omitido') !=null) {document.getElementById("omitido").checked = false;}
if (document.getElementById('repetido') !=null) {document.getElementById("repetido").checked = false;}
if (document.getElementById('afegit') !=null) {document.getElementById("afegit").checked = false;}
if (document.getElementById('abrev') !=null) {document.getElementById("abrev").checked = false;}
if (document.getElementById('oculto') !=null) {document.getElementById("oculto").checked = false;}
if (document.getElementById('apparat') !=null) {document.getElementById("apparat").checked = false;}

  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }	
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
		xmlDoc=xhttp.responseText;
		document.getElementById("aquiva").innerHTML = xmlDoc;
		document.getElementById("aquiva2").innerHTML = xmlDoc;
	  var x = document.getElementsByTagName("pb");
	  var xi = 0;
	  for (xi = 0; xi < x.length; xi++) { x[xi].style.display="none"; }
	
	  var deleted = document.getElementsByTagName("del");
	  var deletedi = 0;
	  for (deletedi = 0; deletedi < deleted.length; deletedi++) {
		  deleted[deletedi].style.display="none";
	     }	
	  var abreviat = document.getElementsByTagName("abbr");
	  var abreviati = 0;
	  for (abreviati = 0; abreviati < abreviat.length; abreviati++) {
		  abreviat[abreviati].style.display="none";
	     }
	var sicut = document.getElementsByTagName("sic");
	var sicuti=0;
	for (sicuti = 0; sicuti < sicut.length; sicuti++) {
		sicut[sicuti].style.display="none";
	}
		 
	  }
   };

  xhttp.open("POST", elsermo, true);
  xhttp.send();
}

function carregaxml() {	
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }	
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        xmlData=xml.responseXML;
	  }
   };
  xhttp.open("POST", elsermo, true);
  xhttp.send();
}

function latin() {
   var currentvalue = document.getElementById('latin').value;
   var paraula = document.querySelectorAll("[lang='la']");
   var paraules = paraula.length;   
   var s="0";
   
if ((paraules == "0") && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "No se han encontrado fragmentos en Latín en el texto"; 
	document.getElementById("latin").value="Show";
	} 

if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("latin").value="Hide";
	} 

if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
		paraula[s].style.fontSize="x-large";
		paraula[s].style.fontWeight="Bold";
		document.getElementById("ww").innerHTML = paraules + "fragmentos en latín en el texto";
	    document.getElementById("latin").value="Show";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
		paraula[s].style.fontSize="medium";
		paraula[s].style.fontWeight="normal";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("latin").value="Hide";
		}
     } 
}

function catalan() {
   var currentvalue = document.getElementById('catalan').value;
   var paraula = document.querySelectorAll("[lang='ca']");
   var paraules = paraula.length;   
   var s="0";

if ((paraules == "0") && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "No se han encontrado elementos en Catalán"; 
	document.getElementById("catalan").value="Show";
	} 

if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("catalan").value="Hide";
	} 

if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
		paraula[s].style.fontSize="x-large";
		paraula[s].style.fontWeight="Bold";
		document.getElementById("ww").innerHTML = paraules + "fragmentos en catalán en el texto";
	    document.getElementById("catalan").value="Show";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
		paraula[s].style.fontSize="medium";
		paraula[s].style.fontWeight="normal";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("catalan").value="Hide";
		}
     } 
}

function bibles() {
   var currentvalue = document.getElementById('bible').value;
   var paraula = document.querySelectorAll('cit[type="bible"]');
   var paraules = paraula.length;   
   var s="0";
   var textcharacter = paraules + " fuente(s) bíblica(s) encontrada(s).";

if ((paraules == "0") && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = paraules + " fuentes bíblicas encontradas"; 
	document.getElementById("bible").value="Show";
	} 

if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("bible").value="Hide";
	} 

if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="Silver";
		document.getElementById("ww").innerHTML = textcharacter;
	    document.getElementById("bible").value="Show";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("bible").value="Hide";
		}
     }
}

function christians() {
   var currentvalue = document.getElementById('christian').value;
   //document.getElementById("christian").innerHTML = currentvalue;
   var paraula = document.querySelectorAll('cit[type="christian"]');
   var paraules = paraula.length;   
   var s="0";
   var textcharacter = paraules + " fuente(s) cristiana(s) encontrada(s).";

if ((paraules == "0") && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "No se han encontrado fuentes cristianas no bíblicas"; 
	document.getElementById("christian").value="Show";
	} 

if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("christian").value="Hide";
	} 

if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="Salmon";
		document.getElementById("ww").innerHTML = textcharacter;
	    document.getElementById("christian").value="Show";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("christian").value="Hide";
		}
     } 
}

function muslims() {
   var currentvalue = document.getElementById('muslim').value;
   var paraula = document.querySelectorAll('cit[type="muslim"]');
   var paraules = paraula.length;   
   var s="0";
   var textcharacter = paraules + " fuente(s) musulmanas(s) encontrada(s).";

if ((paraules == "0") && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "No se han encontrado fuentes musulmanas"; 
	document.getElementById("muslim").value="Show";
	} 

if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("muslim").value="Hide";
	} 

if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="#BDB76B";
		document.getElementById("ww").innerHTML = textcharacter;
	    document.getElementById("muslim").value="Show";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("muslim").value="Hide";
		}
     } 
}

function hebrews() {
   var currentvalue = document.getElementById('jewish').value;
   var paraula = document.querySelectorAll('cit[type="jewish"]');
   var paraules = paraula.length;   
   var s="0";
   var textcharacter = paraules + " fuente(s) hebrea(s) encontrada(s).";

if ((paraules == "0") && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "No se han encontrado fuentes hebreas"; 
	document.getElementById("jewish").value="Show";
	} 

if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("jewish").value="Hide";
	} 

if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="#808000";
		document.getElementById("ww").innerHTML = textcharacter;
	    document.getElementById("jewish").value="Show";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("jewish").value="Hide";
		}
     } 
}

function clasic() {
   var placesvalue = document.getElementById('other').value;
   var parplace =  document.querySelectorAll('cit[type="other"]');
   var parplaces = parplace.length;
   var d="0";

if ((parplaces == "0")  && (placesvalue == "Hide"))  {
	document.getElementById("ww").innerHTML = parplaces + " coincidencias encontradas";
	document.getElementById("other").value="Show";
	}

if ((parplaces == "0")  && (placesvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("other").value="Hide";
	} 

if ((parplaces > "0") && (placesvalue == "Hide")) {
     for (d = 0; d < parplaces; d++) {
	    parplace[d].style.backgroundColor="#CD853F";
	    document.getElementById("ww").innerHTML = parplaces + " coincidencia(s) encontrada(s)";
	    document.getElementById("other").value="Show";
	 }
  } 
  if ((parplaces > "0") && (placesvalue == "Show")) {
     for (d = 0; d < parplaces; d++) {
	    parplace[d].style.backgroundColor="transparent";
	    document.getElementById("ww").innerHTML = "";
        document.getElementById("other").value="Hide";
		   }
     }
}

function exemplae() {
   var currentvalue = document.getElementById('exempla').value;
   var paraula = document.querySelectorAll('index[indexName="exemplum"]');
   var paraules = paraula.length;   
   var s="0";
   var textcharacter = paraules + " Exempla encontrados.";

if ((paraules == "0") && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "No se han encontrado Examplae"; 
	document.getElementById("exempla").value="Show";
	} 

if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("exempla").value="Hide";
	} 

if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="Pink";
		document.getElementById("ww").innerHTML =  textcharacter;
	    document.getElementById("exempla").value="Show";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("exempla").value="Hide";
		}
     } 
}

function distinctio() {
   var similvalue = document.getElementById('distinctiones').value;
   var simili = document.querySelectorAll("index[indexName='distinctio']");
   var simili2 = simili.length;
   var sim="0";

if ((simili2 == "0")  && (similvalue == "Hide"))  {
	document.getElementById("ww").innerHTML = "No se han encontrado Distinctiones";
	document.getElementById("distinctiones").value="Show";
	}

if ((simili2 == "0")  && (similvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("distinctiones").value="Hide";
	} 

if ((simili2 > "0") && (similvalue == "Hide")) {
     for (sim = 0; sim < simili2; sim++) {
	    simili[sim].style.backgroundColor="LightGreen";
		document.getElementById("ww").innerHTML = simili2 + " Distinctiones encontradas";
	    document.getElementById("distinctiones").value="Show";
	 }
  } 
  if ((simili2 > "0") && (similvalue == "Show")) {
     for (sim = 0; sim < simili2; sim++) {
	    simili[sim].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("distinctiones").value="Hide";
		   }
     }
}

function similitudo() {
   var similvalue = document.getElementById('similitudines').value;
   var simili = document.querySelectorAll("[indexName='similitudo']");
   var simili2 = simili.length;
   var sim="0";

if ((simili2 == "0")  && (similvalue == "Hide"))  {
	document.getElementById("ww").innerHTML = "No se han encontrado Similitudines";
	document.getElementById("similitudines").value="Show";
	}

if ((simili2 == "0")  && (similvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("similitudines").value="Hide";
	} 

if ((simili2 > "0") && (similvalue == "Hide")) {
     for (sim = 0; sim < simili2; sim++) {
	    simili[sim].style.backgroundColor="Tan";
		document.getElementById("ww").innerHTML = simili2 + " Similitudines encontradas";
	    document.getElementById("similitudines").value="Show";
	 }
  } 
  if ((simili2 > "0") && (similvalue == "Show")) {
     for (sim = 0; sim < simili2; sim++) {
	    simili[sim].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("similitudines").value="Hide";
		   }
     }
}

function evident() {
   var currentvalue = document.getElementById('evidentia').value;
   var paraula = document.querySelectorAll('index[indexName="evidentia"]');
   var paraules = paraula.length;   
   var s="0";
   var textcharacter = paraules + " elemento(s) Evidentia encontrados:";

if ((paraules == "0") && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "No se han encontrado elementos Evidentia"; 
	document.getElementById("evidentia").value="Show";
	} 

if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("evidentia").value="Hide";
	} 

if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="lavender";
		document.getElementById("ww").innerHTML =  textcharacter;
	    document.getElementById("evidentia").value="Show";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("evidentia").value="Hide";
		}
     } 
}

function quaestiones() {
   var similvalue = document.getElementById('quaestio').value;
   var simili = document.querySelectorAll("[indexName='quaestio']");
   var simili2 = simili.length;
   var sim="0";

if ((simili2 == "0")  && (similvalue == "Hide"))  {
	document.getElementById("ww").innerHTML = "No se han encontrado Quaestiones";
	document.getElementById("quaestio").value="Show";
	}

if ((simili2 == "0")  && (similvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("quaestio").value="Hide";
	} 

if ((simili2 > "0") && (similvalue == "Hide")) {
     for (sim = 0; sim < simili2; sim++) {
	    simili[sim].style.backgroundColor="white";
		document.getElementById("ww").innerHTML = simili2 + " Quaestiones encontradas";
	    document.getElementById("quaestio").value="Show";
	 }
  } 
  if ((simili2 > "0") && (similvalue == "Show")) {
     for (sim = 0; sim < simili2; sim++) {
	    simili[sim].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("quaestio").value="Hide";
		   }
     }
}

function personaje() {
   var placesvalue = document.getElementById('character').value;
   var parplace = document.querySelectorAll("term[type='character']");
   var parplaces = parplace.length;
   var d="0";

if ((parplaces == "0")  && (placesvalue == "Hide"))  {
	document.getElementById("ww").innerHTML = "No se han encontrado Personajes";
	document.getElementById("character").value="Show";
	}

if ((parplaces == "0")  && (placesvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("character").value="Hide";
	} 

if ((parplaces > "0") && (placesvalue == "Hide")) {
     for (d = 0; d < parplaces; d++) {
	    parplace[d].style.backgroundColor="yellow";
		document.getElementById("ww").innerHTML = parplaces + " Personajes encontrados";
	    document.getElementById("character").value="Show";
	 }
  } 
  if ((parplaces > "0") && (placesvalue == "Show")) {
     for (d = 0; d < parplaces; d++) {
	    parplace[d].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("character").value="Hide";
		   }
     }
}

function place() {
   var placesvalue = document.getElementById('places').value;
   var parplace = document.querySelectorAll("term[type='place']");
   var parplaces = parplace.length;
   var d="0";

if ((parplaces == "0")  && (placesvalue == "Hide"))  {
	document.getElementById("ww").innerHTML = "No se han encontrado Lugares";
	document.getElementById("places").value="Show";
	}

if ((parplaces == "0")  && (placesvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("places").value="Hide";
	} 

if ((parplaces > "0") && (placesvalue == "Hide")) {
     for (d = 0; d < parplaces; d++) {
	    parplace[d].style.backgroundColor="DeepSkyBlue";
		document.getElementById("ww").innerHTML = parplaces + " Lugares encontrados.";
	    document.getElementById("places").value="Show";
	 }
  } 
  if ((parplaces > "0") && (placesvalue == "Show")) {
     for (d = 0; d < parplaces; d++) {
	    parplace[d].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("places").value="Hide";
		   }
     }
}

function etimologia() {
   var currentvalue = document.getElementById('etimology').value;
   var paraula = document.querySelectorAll("index[indexName='etim']");
   var paraules = paraula.length;   
   var s="0";

if ((paraules == "0")  && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "No se han encontrado Etimologías";
    document.getElementById("etimology").value="Show";
	}
if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("etimology").value="Hide";
	}

if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="orange";
		document.getElementById("ww").innerHTML = paraules + " Etimologías encontradas";
	    document.getElementById("etimology").value="Show";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("etimology").value="Hide";
		}
     } 
}

function pagebreak() {
var x = document.getElementsByTagName("pb");
var xi="0";
var saltsdelinia = document.getElementsByTagName("lb");
var salti="0";
if (document.getElementById("pb").checked == true) {
	  for (xi = 0; xi < x.length; xi++) {
			x[xi].style.display="inline";
			x[xi].style.backgroundColor="Mediumorchid";
		  }
	for (salti = 0; salti < saltsdelinia.length; salti++) {saltsdelinia[salti].innerHTML="<br/>" + saltsdelinia[salti].innerHTML;}	  
	}
if (document.getElementById("pb").checked == false) {
	  for (xi = 0; xi < x.length; xi++) {
			x[xi].style.display="none";
		  }
	for (salti = 0; salti < saltsdelinia.length; salti++) {
			saltsdelinia[salti].removeChild(saltsdelinia[salti].childNodes[0]);
		  }	
     }
}

function perdido() {
var perd = document.querySelectorAll("[reason='lost']");
var perdi="0";
if (document.getElementById("perdida").checked == true) {
	  
	  for (perdi = 0; perdi < perd.length; perdi++) {
		 perd[perdi].style.backgroundColor="seagreen";
		  }
	}
if (document.getElementById("perdida").checked == false) {
	  for (perdi = 0; perdi < perd.length; perdi++) {
			perd[perdi].style.backgroundColor="transparent";
		  }
    }
}

function tachado() {
var tacha = document.getElementsByTagName("del");
var tachai="0";
if (document.getElementById("rayado").checked == true) {
	  for (tachai = 0; tachai < tacha.length; tachai++) {
			tacha[tachai].style.display="inline";
			tacha[tachai].style.backgroundColor="powderblue";
		  }
	}
if (document.getElementById("rayado").checked == false) {
	  // document.getElementById("ww").innerHTML = document.getElementById("rayado").checked;
	  for (tachai = 0; tachai < tacha.length; tachai++) {
			tacha[tachai].style.display="none";
		  }
    }
}

function illegible() {
  var currentvalue = document.getElementById('ilegible').value;
   var paraula = document.getElementsByTagName("gap");
   var paraules = paraula.length;   
   var s="0";

if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "No se han encontrado fragmentos ilegibles";
    document.getElementById("ilegible").value="Hide";
	}
if ((paraules == "0")  && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("ilegible").value="Show";
	}

if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="thistle";
		document.getElementById("ww").innerHTML = paraules + " fragmento(s) ilegible(s)";
	    document.getElementById("ilegible").value="Hide";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("ilegible").value="Show";
		}
     } 
}

function errada() {
   var mistak = document.getElementsByTagName("sic");
   var correc = document.getElementsByTagName("corr");
   var paraules = mistak.length; 
   var mistaki="0";
if (document.getElementById("error").checked == true) {
	  for (mistaki = 0; mistaki < mistak.length; mistaki++) {
			mistak[mistaki].style.display="inline";
			mistak[mistaki].style.backgroundColor="rosybrown";
			correc[mistaki].style.display="none";
			document.getElementById("ww").innerHTML = paraules + " errores de escritura encontrados";
		  }
	}
if (document.getElementById("error").checked == false) {
	  for (mistaki = 0; mistaki < mistak.length; mistaki++) {
			mistak[mistaki].style.display="none";
			correc[mistaki].style.display="inline";
			document.getElementById("ww").innerHTML = "";
		  }
    }
}

function omitidos() {
   var currentvalue = document.getElementById('omitido').value;
   var paraula = document.querySelectorAll("[reason='omitted']");
   var paraules = paraula.length;   
   var s="0";

if ((paraules == "0")  && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "No se han encontrado fragmentos omitidos por el autor";
    document.getElementById("omitido").value="Show";
	}
if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("omitido").value="Hide";
	}

if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="violet";
		document.getElementById("ww").innerHTML = paraules + " fragmento(s) omitido(s) por el autor";
	    document.getElementById("omitido").value="Show";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("omitido").value="Hide";
		}
     } 
}

function repetidos() {
var repe = document.querySelectorAll("[reason='repeated']");
var repei="0";
if (document.getElementById("repetido").checked == true) {
	  for (repei = 0; repei < repe.length; repei++) {
			repe[repei].style.display="inline";
			repe[repei].style.backgroundColor="brown";
		  }
	}
if (document.getElementById("repetido").checked == false) {
	  // document.getElementById("ww").innerHTML = document.getElementById("rayado").checked;
	  for (repei = 0; repei < repe.length; repei++) {
			repe[repei].style.display="none";
		  }
    }
}

function afegits() {
  var currentvalue = document.getElementById('afegit').value;
   var paraula = document.getElementsByTagName("add");
   var paraules = paraula.length;   
   var s="0";

if ((paraules == "0")  && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "No se han encontrado fragmentos en el margen o entre líneas";
    document.getElementById("afegit").value="Show";
	}
if ((paraules == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("afegit").value="Hide";
	}

if ((paraules > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="gold";
		document.getElementById("ww").innerHTML = paraules + " fragmentos añadidos al margen o entre líneas";
	    document.getElementById("afegit").value="Show";
	 }
  } 
  if ((paraules > "0") && (currentvalue == "Show")) {
     for (s = 0; s < paraules; s++) {
	    paraula[s].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("afegit").value="Hide";
		}
     } 
}

function ocultos() {
  var currentvalue = document.getElementById('oculto').value;
   var ocult = document.querySelectorAll("[reason='hidden']");
   var oculti = ocult.length;   
   var s="0";

if ((oculti == "0")  && (currentvalue == "Hide")) {
	document.getElementById("ww").innerHTML = "No se ha encontrado texto oculto";
    document.getElementById("oculto").value="Show";
	}
if ((oculti == "0")  && (currentvalue == "Show")) {
	document.getElementById("ww").innerHTML = "";
    document.getElementById("oculto").value="Hide";
	}

if ((oculti > "0") && (currentvalue == "Hide")) {
     for (s = 0; s < oculti; s++) {
	    ocult[s].style.backgroundColor="crimson";
		document.getElementById("ww").innerHTML = oculti + " fragmento(s) oculto(s)";
	    document.getElementById("oculto").value="Show";
	 }
  } 
  if ((oculti > "0") && (currentvalue == "Show")) {
     for (s = 0; s < oculti; s++) {
	    ocult[s].style.backgroundColor="transparent";
		document.getElementById("ww").innerHTML = "";
        document.getElementById("oculto").value="Hide";
		}
     } 
}

function apparatus(){
	var apparatus = document.getElementsByTagName("app");
	var apparats ="0";

	if (document.getElementById("apparat").checked == true) {
	  for (apparats = 0; apparats < apparatus.length; apparats++) {
			apparatus[apparats].style.background = "white";
//			apparatus[apparats].style.color = "yellow";
			
		  }
	}
	if (document.getElementById("apparat").checked == false) {
		for (apparats = 0; apparats< apparatus.length; apparats++) {
			apparatus[apparats].style.background = "transparent";
//			apparatus[apparats].style.color = "black";
		  }
	 }	
}

function abreviaturas() {
var abrev = document.getElementsByTagName("expan");
var abri="0";
if (document.getElementById("abrev").checked == true) {
	  for (abri = 0; abri < abrev.length; abri++) {
			abrev[abri].style.fontStyle="italic";
		  }
	}
if (document.getElementById("abrev").checked == false) {
	  for (abri = 0; abri < abrev.length; abri++) {
			abrev[abri].style.fontStyle="normal";
		  }
	}
}

function abreviat() {
var abrevia = document.getElementsByTagName("expan");
var abreviati="0";
if (document.getElementById("abrev").checked == true) {
	  for (abreviati = 0; abreviati < abrevia.length; abreviati++) {
			abrevia[abreviati].style.fontStyle="italic";
		  }
	}
if (document.getElementById("abrev").checked == false) {
	  for (abreviati = 0; abreviati < abrevia.length; abreviati++) {
			abrevia[abreviati].style.fontStyle="normal";
		  }
	}

var perd = document.querySelectorAll("[reason='lost']");
var perdi="0";
if (document.getElementById("abrev").checked == true) {
	  
	  for (perdi = 0; perdi < perd.length; perdi++) {
		 perd[perdi].style.display="none";
		  }
	}
if (document.getElementById("abrev").checked == false) {
	  for (perdi = 0; perdi < perd.length; perdi++) {
			perd[perdi].style.display="inline";
		  }
    }

var omit = document.querySelectorAll("[reason='omitted']");
var omiti="0";
if (document.getElementById("abrev").checked == true) {
	  
	  for (omiti = 0; omiti < omit.length; omiti++) {
		 omit[omiti].style.display="none";
		  }
	}
if (document.getElementById("abrev").checked == false) {
	  for (omiti = 0; omiti < omit.length; omiti++) {
			omit[omiti].style.display="inline";
		  }
    }
}

function variostextos() {
var sermones ="0basexml.xml";

  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }	
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
		var xmlDoc=xhttp.responseText;
		document.getElementById("aquiva").innerHTML = xmlDoc;
		
		//document.getElementById("ww").innerHTML = elsermo; 
	  var x = document.getElementsByTagName("pb");
	  var xi = 0;
	  for (xi = 0; xi < x.length; xi++) { x[xi].style.display="none"; }
	
	  var deleted = document.getElementsByTagName("del");
	  var deletedi = 0;
	  for (deletedi = 0; deletedi < deleted.length; deletedi++) {
		  deleted[deletedi].style.display="none";
	     }	
	  var abreviat = document.getElementsByTagName("abbr");
	  var abreviati = 0;
	  for (abreviati = 0; abreviati < abreviat.length; abreviati++) {
		  abreviat[abreviati].style.display="none";
	     }
	var sicut = document.getElementsByTagName("sic");
	var sicuti=0;
	for (sicuti = 0; sicuti < sicut.length; sicuti++) {
		sicut[sicuti].style.display="none";
	}
		 
	  }
   };

  xhttp.open("POST", sermones, true);
  xhttp.send();
}

function showbest() {
var best = document.querySelectorAll("lem");
var besti="0";
	  for (besti = 0; besti < best.length; besti++) {
		 best[besti].style.display="inline";
		 best[besti].style.background = "transparent";
		  }

var rdg1 = document.querySelectorAll("rdg");
var rdg1i="0";
	  for (rdg1i = 0; rdg1i < rdg1.length; rdg1i++) {
		 rdg1[rdg1i].style.display="none";
		  }
document.getElementById("lem").value="Mostrando mejores lecciones";
document.getElementById("B").value="Mostrar ms. B";
document.getElementById("G").value="Mostrar ms. G";
document.getElementById("M").value="Mostrar ms. M";
}

function showB() {
var best = document.querySelectorAll("lem");
var besti="0";
	  for (besti = 0; besti < best.length; besti++) {
		 best[besti].style.display="none";
		  }

var rdg1 = document.querySelectorAll("rdg[wit='B']");
var rdg1i="0";
	  for (rdg1i = 0; rdg1i < rdg1.length; rdg1i++) {
		 rdg1[rdg1i].style.display="inline";
		 rdg1[rdg1i].style.background = "white";
		  }

var rdg2 = document.querySelectorAll("rdg[wit='G']");
var rdg2i="0";
	  for (rdg2i = 0; rdg2i < rdg2.length; rdg2i++) {
		 rdg2[rdg2i].style.display="none";
		  }

var rdg3 = document.querySelectorAll("rdg[wit='M']");
var rdg3i="0";
	  for (rdg3i = 0; rdg3i < rdg3.length; rdg3i++) {
		 rdg3[rdg3i].style.display="none";
		  }

document.getElementById("lem").value="Mostrar mejores lecciones";
document.getElementById("B").value="Mostrando ms. B";
document.getElementById("G").value="Mostrar ms. G";
document.getElementById("M").value="Mostrar ms. M";
}

function showG() {
var best = document.querySelectorAll("lem");
var besti="0";
	  for (besti = 0; besti < best.length; besti++) {
		 best[besti].style.display="none";
		  }

var rdg1 = document.querySelectorAll("rdg[wit='B']");
var rdg1i="0";
	  for (rdg1i = 0; rdg1i < rdg1.length; rdg1i++) {
		 rdg1[rdg1i].style.display="none";
		  }

var rdg2 = document.querySelectorAll("rdg[wit='G']");
var rdg2i="0";
	  for (rdg2i = 0; rdg2i < rdg2.length; rdg2i++) {
		 rdg2[rdg2i].style.display="inline";
		 rdg2[rdg2i].style.background = "white";
		  }
var rdg3 = document.querySelectorAll("rdg[wit='M']");
var rdg3i="0";
	  for (rdg3i = 0; rdg3i < rdg3.length; rdg3i++) {
		 rdg3[rdg3i].style.display="none";
		  }

document.getElementById("lem").value="Mostrar mejores lecciones";
document.getElementById("B").value="Mostrar ms. B";
document.getElementById("G").value="Mostrando ms. G";
document.getElementById("M").value="Mostrar ms. M";
}

function showM() {
var best = document.querySelectorAll("lem");
var besti="0";
	  for (besti = 0; besti < best.length; besti++) {
		 best[besti].style.display="none";
		  }

var rdg1 = document.querySelectorAll("rdg[wit='B']");
var rdg1i="0";
	  for (rdg1i = 0; rdg1i < rdg1.length; rdg1i++) {
		 rdg1[rdg1i].style.display="none";
		  }

var rdg2 = document.querySelectorAll("rdg[wit='G']");
var rdg2i="0";
	  for (rdg2i = 0; rdg2i < rdg2.length; rdg2i++) {
		 rdg2[rdg2i].style.display="none";
		  }
var rdg3 = document.querySelectorAll("rdg[wit='M']");
var rdg3i="0";
	  for (rdg3i = 0; rdg3i < rdg3.length; rdg3i++) {
		 rdg3[rdg3i].style.display="inline";
		 rdg3[rdg3i].style.background = "white";
		  }

document.getElementById("lem").value="Mostrar mejores lecciones";
document.getElementById("B").value="Mostrar ms. B";
document.getElementById("G").value="Mostrar ms. G";
document.getElementById("M").value="Mostrando ms. M";
}

function showM2() {
var best = document.querySelectorAll("lem");
var besti="0";
	  for (besti = 0; besti < best.length; besti++) {
		 best[besti].style.display="none";
		  }

var rdg1 = document.querySelectorAll("rdg[wit='B']");
var rdg1i="0";
	  for (rdg1i = 0; rdg1i < rdg1.length; rdg1i++) {
		 rdg1[rdg1i].style.display="none";
		  }

var rdg2 = document.querySelectorAll("rdg[wit='G']");
var rdg2i="0";
	  for (rdg2i = 0; rdg2i < rdg2.length; rdg2i++) {
		 rdg2[rdg2i].style.display="none";
		  }
var rdg3 = document.querySelectorAll("rdg[wit='M']");
var rdg3i="0";
	  for (rdg3i = 0; rdg3i < rdg3.length; rdg3i++) {
		 rdg3[rdg3i].style.display="inline";
		 rdg3[rdg3i].style.background = "white";
		  }

document.getElementById("lem2").value="Mostrar mejores lecciones";
document.getElementById("B2").value="Mostrar ms. B";
document.getElementById("G2").value="Mostrar ms. G";
document.getElementById("M2").value="Mostrando ms. M";
}


