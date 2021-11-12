

    // DEBUT DECLARATION DES VARIABLES /////////////////////////////////////

    // debut partie Ajouter  ///////////////
    var txtInput = document.querySelector('input[type="text"]');
    var list = document.querySelector('ul');
    var addBtn = document.querySelector('button#ajouter');
    // fin partie Ajouter //////////////
    
    
    // debut partie supprimer ///////////////
    var delBtn = document.querySelector('#supprimer'); 
    // fin partie supprimer ///////////////
    
    // FIN DECLARATION DES VARIABLES /////////////////////////////////////
    
    
    
    
    
    
    
    // // DEBUT DECLARATION DES FUNCTIONS /////////////////////////////////////
    
    // // debut partie Ajouter  ///////////////
    var ajouter = function(){
      var valeur = txtInput.value;
    
      if (valeur.trim() == ""){
        alert("Le champ est vide");
      } else {
    
        //ajouter une ligne
        list.insertAdjacentHTML('beforeend', '<li><input type="checkbox">'+ valeur + '</li>');
      }
    }
    addBtn.addEventListener('click', ajouter);
    // fin partie Ajouter //////////////
    
    
    
    
    // // debut partie Supprimer ///////////////
    var supprimer = function(){
    
      var items = list.querySelectorAll('li'); 
    
      for (i=0; i<items.length; i++){
        var li = items[i]; 
    
        var checkbox = li.querySelector('input'); 
        var isChecked = checkbox.checked; 
    
        if(isChecked){ 
          list.removeChild(li); 
        }
      }
      if(items.length == 0){
        alert("List vide !");
      }
    }
    delBtn.addEventListener('click', supprimer) 
    // // fin partie Supprimer ///////////////
    
    
    
    
    
    // // FIN DECLARATION DES FUNCTIONS /////////////////////////////////////
