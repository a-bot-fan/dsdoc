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
 objet["class"]["CATConfigLoadingServices"]=0;
objet["class"][0]="../CATPLMConfigUseItf/class_CATConfigLoadingServices_44538.htm";
objet["collection"]["CATLISTP(CATIConfigDictionary)"]=0;
objet["collection"][0]="../CATPLMConfigUseItf/class_CATLISTP(CATIConfigDictionary)_57023.htm";
objet["collection"]["CATLISTP(CATIConfigFilterable)"]=1;
objet["collection"][1]="../CATPLMConfigUseItf/class_CATLISTP(CATIConfigFilterable)_56209.htm";
objet["collection"]["CATLISTP(CATIConfigPLMEntity)"]=2;
objet["collection"][2]="../CATPLMConfigUseItf/class_CATLISTP(CATIConfigPLMEntity)_52539.htm";
objet["collection"]["CATLISTP(CATIConfiguration)"]=3;
objet["collection"][3]="../CATPLMConfigUseItf/class_CATLISTP(CATIConfiguration)_48981.htm";
objet["collection"]["CATLISTV(CATConfigXMLExpressionStruct)"]=4;
objet["collection"][4]="../CATPLMConfigUseItf/class_CATLISTV(CATConfigXMLExpressionStruct)_84792.htm";
objet["enum"]["CATConfigCriteria"]=0;
objet["enum"][0]="../CATPLMConfigUseItf/enum_CATConfigCriteria_29532.htm";
objet["enum"]["CATConfigEffectivityView"]=1;
objet["enum"][1]="../CATPLMConfigUseItf/enum_CATConfigEffectivityView_44611.htm";
objet["interface"]["CATConfigExpressionFactory"]=0;
objet["interface"][0]="../CATPLMConfigUseItf/interface_CATConfigExpressionFactory_53060.htm";
objet["interface"]["CATConfigXMLExpressionServices"]=1;
objet["interface"][1]="../CATPLMConfigUseItf/interface_CATConfigXMLExpressionServices_63860.htm";
objet["interface"]["CATConfigXMLExpressionStruct"]=2;
objet["interface"][2]="../CATPLMConfigUseItf/interface_CATConfigXMLExpressionStruct_58320.htm";
objet["interface"]["CATIConfigDictionary"]=3;
objet["interface"][3]="../CATPLMConfigUseItf/interface_CATIConfigDictionary_38472.htm";
objet["interface"]["CATIConfigEffectivityExpression"]=4;
objet["interface"][4]="../CATPLMConfigUseItf/interface_CATIConfigEffectivityExpression_68201.htm";
objet["interface"]["CATIConfigFilterExpression"]=5;
objet["interface"][5]="../CATPLMConfigUseItf/interface_CATIConfigFilterExpression_52949.htm";
objet["interface"]["CATIConfigFilterable"]=6;
objet["interface"][6]="../CATPLMConfigUseItf/interface_CATIConfigFilterable_37910.htm";
objet["interface"]["CATIConfigPLMEntity"]=7;
objet["interface"][7]="../CATPLMConfigUseItf/interface_CATIConfigPLMEntity_35613.htm";
objet["interface"]["CATIConfiguredEntity"]=8;
objet["interface"][8]="../CATPLMConfigUseItf/interface_CATIConfiguredEntity_38626.htm";
objet["struct"]["CATConfigXMLContentError"]=0;
objet["struct"][0]="../CATPLMConfigUseItf/struct_CATConfigXMLContentError_44754.htm";
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