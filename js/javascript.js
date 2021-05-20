function verifForm(f)
{
   var prenom = verifPrenom(f.prenom);
   var nom = verifNom(f.nom);
   var date_nes = verifDate(f.date_nes);
   var wilaya = verifWilaya(f.wilaya);
   var email = verifEmail(f.email);
   var password = verifPseudo(f.password);
   var password1 = verifPseudo1(f.password1);
   
   if(nom && prenom && date_nes && wilaya && email && password && password1)
      return true;
   else
   {
      alert("!„‰ ›÷·ﬂ ≈„·∆ ﬂ· «·⁄‰«’—");
      return false;
   }
}
function verifPrenom(champ){
		    var nom = champ.value;
        if(!nom)
		   {return true;}
		else{ return false;}
}
function verifNom(champ){
		    var nom = champ.value;
        if(!nom)
		   {return true;}
		else{ return false;}
}
function verifPseudo(champ){
		    var password = champ.value;
        if(!password)
		   {return true;}
		else{ return false;}
}
function verifPseudo1(champ){
		    var password1 = champ.value;
        if(!password1)
		   {return true;}
		else{ return false;}
}


function verifEgalPass(p)
{
    var password = verifPseudo(f.password);
    var password1 = verifPseudo(f.password1);
        if(password != password1){
            alert("! √ﬂœ „‰ ﬂ·„… «·„—Ê—");
        }
}				