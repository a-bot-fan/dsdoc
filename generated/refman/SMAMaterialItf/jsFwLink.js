var objet=new Array; 
     objet["class"]=new Array; 
     objet["exception"]=new Array; 
     objet["collection"]=new Array; 
     objet["notification"]=new Array; 
     objet["interface"]=new Array; 
     objet["struct"]=new Array; 
     objet["enum"]=new Array; 
     objet["define"]=new Array; 
     objet["typedef"]=new Array; 
     objet["function"]=new Array; 
 	var DSCharacteristic=new Array ; 
 objet["interface"]["SMAIMatAcousticAbsorption"]=0;
objet["interface"][0]="../SMAMaterialItf/interface_SMAIMatAcousticAbsorption_44398.htm";
objet["interface"]["SMAIMatBulkModulus"]=1;
objet["interface"][1]="../SMAMaterialItf/interface_SMAIMatBulkModulus_28737.htm";
objet["interface"]["SMAIMatCastIronPlasticity"]=2;
objet["interface"][2]="../SMAMaterialItf/interface_SMAIMatCastIronPlasticity_44239.htm";
objet["interface"]["SMAIMatDamping"]=3;
objet["interface"][3]="../SMAMaterialItf/interface_SMAIMatDamping_21900.htm";
objet["interface"]["SMAIMatDensity"]=4;
objet["interface"][4]="../SMAMaterialItf/interface_SMAIMatDensity_22277.htm";
objet["interface"]["SMAIMatElastic"]=5;
objet["interface"][5]="../SMAMaterialItf/interface_SMAIMatElastic_21926.htm";
objet["interface"]["SMAIMatExpansion"]=6;
objet["interface"][6]="../SMAMaterialItf/interface_SMAIMatExpansion_25313.htm";
objet["interface"]["SMAIMatFailStrain"]=7;
objet["interface"][7]="../SMAMaterialItf/interface_SMAIMatFailStrain_26504.htm";
objet["interface"]["SMAIMatFailStress"]=8;
objet["interface"][8]="../SMAMaterialItf/interface_SMAIMatFailStress_26790.htm";
objet["interface"]["SMAIMatGasketMembraneElastic"]=9;
objet["interface"][9]="../SMAMaterialItf/interface_SMAIMatGasketMembraneElastic_51145.htm";
objet["interface"]["SMAIMatGasketThicknessBehavior"]=10;
objet["interface"][10]="../SMAMaterialItf/interface_SMAIMatGasketThicknessBehavior_57767.htm";
objet["interface"]["SMAIMatGasketTransverseShearElastic"]=11;
objet["interface"][11]="../SMAMaterialItf/interface_SMAIMatGasketTransverseShearElastic_74044.htm";
objet["interface"]["SMAIMatHashinDamage"]=12;
objet["interface"][12]="../SMAMaterialItf/interface_SMAIMatHashinDamage_29561.htm";
objet["interface"]["SMAIMatHyperelasticity"]=13;
objet["interface"][13]="../SMAMaterialItf/interface_SMAIMatHyperelasticity_37455.htm";
objet["interface"]["SMAIMatInelasticHeatFraction"]=14;
objet["interface"][14]="../SMAMaterialItf/interface_SMAIMatInelasticHeatFraction_51312.htm";
objet["interface"]["SMAIMatLatentHeat"]=15;
objet["interface"][15]="../SMAMaterialItf/interface_SMAIMatLatentHeat_26358.htm";
objet["interface"]["SMAIMatMaterialBehavior"]=16;
objet["interface"][16]="../SMAMaterialItf/interface_SMAIMatMaterialBehavior_38690.htm";
objet["interface"]["SMAIMatMaterialDomain"]=17;
objet["interface"][17]="../SMAMaterialItf/interface_SMAIMatMaterialDomain_33979.htm";
objet["interface"]["SMAIMatMaterialTable"]=18;
objet["interface"][18]="../SMAMaterialItf/interface_SMAIMatMaterialTable_31730.htm";
objet["interface"]["SMAIMatPlastic"]=19;
objet["interface"][19]="../SMAMaterialItf/interface_SMAIMatPlastic_22003.htm";
objet["interface"]["SMAIMatSpecificHeat"]=20;
objet["interface"][20]="../SMAMaterialItf/interface_SMAIMatSpecificHeat_29672.htm";
objet["interface"]["SMAIMatVolumetricDrag"]=21;
objet["interface"][21]="../SMAMaterialItf/interface_SMAIMatVolumetricDrag_34150.htm";
function getDsCharacteristic(name,itype) { 
     var dsCh = null; 
     if (name!=null && itype!=null && itype == "class") { 
         dsCh = DSCharacteristic[name]; 
     } 
     if (dsCh == null) { 
        dsCh=itype; 
    }   
    return dsCh; 
 } 
 function locateObject(name,itype,NorP){ 
 if(name==null || itype==null || NorP==null) return 0; 
 var type = getDsCharacteristic(name,itype);    
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){      
   return 1; 
 }else{ 
    return 0; 
 } 
 } 
 function openLinkNP(name,itype,NorP){ 
 if(name==null || itype==null || NorP==null) return 0; 
 var type = getDsCharacteristic(name,itype);    
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){ 
     this.location=findobj; 
 } 
 }