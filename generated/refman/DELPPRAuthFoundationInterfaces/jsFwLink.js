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
 objet["function"]["GetPPRSystemOrOperationOutputCompute"]=0;
objet["function"][0]="../DELPPRAuthFoundationInterfaces/function_GetPPRSystemOrOperationOutputCompute_235886.htm";
objet["function"]["GetPPRUIServices"]=1;
objet["function"][1]="../DELPPRAuthFoundationInterfaces/function_GetPPRUIServices_104346.htm";
objet["interface"]["CATIDELPPRAuthFoundationWksConfiguration"]=0;
objet["interface"][0]="../DELPPRAuthFoundationInterfaces/interface_CATIDELPPRAuthFoundationWksConfiguration_129429.htm";
objet["interface"]["DELIPPRLivePPREditorWkbAddin"]=1;
objet["interface"][1]="../DELPPRAuthFoundationInterfaces/interface_DELIPPRLivePPREditorWkbAddin_85108.htm";
objet["interface"]["DELIPPRSystemOrOperationOutputCompute"]=2;
objet["interface"][2]="../DELPPRAuthFoundationInterfaces/interface_DELIPPRSystemOrOperationOutputCompute_118920.htm";
objet["interface"]["DELIPPRUIServices"]=3;
objet["interface"][3]="../DELPPRAuthFoundationInterfaces/interface_DELIPPRUIServices_61950.htm";
objet["interface"]["DELIPPRUIServices2"]=4;
objet["interface"][4]="../DELPPRAuthFoundationInterfaces/interface_DELIPPRUIServices2_62800.htm";
objet["typedef"]["PPRRootType"]=0;
objet["typedef"][0]="../DELPPRAuthFoundationInterfaces/typedef_PPRRootType_52816.htm";
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