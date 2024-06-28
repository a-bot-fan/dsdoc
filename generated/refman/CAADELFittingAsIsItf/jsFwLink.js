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
 objet["function"]["DELGetFitTrackFactory"]=0;
objet["function"][0]="../CAADELFittingAsIsItf/function_DELGetFitTrackFactory_71815.htm";
objet["interface"]["DELIFitTrackFactory"]=0;
objet["interface"][0]="../CAADELFittingAsIsItf/interface_DELIFitTrackFactory_39629.htm";
objet["interface"]["DELIFitTrajectory"]=1;
objet["interface"][1]="../CAADELFittingAsIsItf/interface_DELIFitTrajectory_36410.htm";
objet["interface"]["DELIFitTrajectoryOperations"]=2;
objet["interface"][2]="../CAADELFittingAsIsItf/interface_DELIFitTrajectoryOperations_59376.htm";
objet["interface"]["DELIFitTrajectoryVisu"]=3;
objet["interface"][3]="../CAADELFittingAsIsItf/interface_DELIFitTrajectoryVisu_44287.htm";
objet["interface"]["DNBIProductionSystemFITTrack"]=4;
objet["interface"][4]="../CAADELFittingAsIsItf/interface_DNBIProductionSystemFITTrack_59633.htm";
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