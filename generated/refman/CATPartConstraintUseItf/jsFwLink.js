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
 objet["enum"]["CATCstElemValidity"]=0;
objet["enum"][0]="../CATPartConstraintUseItf/enum_CATCstElemValidity_42659.htm";
objet["enum"]["CATCstStatus"]=1;
objet["enum"][1]="../CATPartConstraintUseItf/enum_CATCstStatus_33789.htm";
objet["interface"]["CATIPartConstraint"]=0;
objet["interface"][0]="../CATPartConstraintUseItf/interface_CATIPartConstraint_45965.htm";
objet["interface"]["CATIPartConstraintManager"]=1;
objet["interface"][1]="../CATPartConstraintUseItf/interface_CATIPartConstraintManager_60756.htm";
objet["typedef"]["CATCstAttrType"]=0;
objet["typedef"][0]="../CATPartConstraintUseItf/typedef_CATCstAttrType_37702.htm";
objet["typedef"]["CATCstAttrVal"]=1;
objet["typedef"][1]="../CATPartConstraintUseItf/typedef_CATCstAttrVal_36097.htm";
objet["typedef"]["CATCstMode"]=2;
objet["typedef"][2]="../CATPartConstraintUseItf/typedef_CATCstMode_32666.htm";
objet["typedef"]["CATCstType"]=3;
objet["typedef"][3]="../CATPartConstraintUseItf/typedef_CATCstType_32874.htm";
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