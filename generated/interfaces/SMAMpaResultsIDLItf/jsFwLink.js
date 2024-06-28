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
 objet["enum"]["SimAveraging"]=0;
objet["enum"][0]="../SMAMpaResultsIDLItf/enum_SimAveraging_23827.htm";
objet["enum"]["SimComplexValues"]=1;
objet["enum"][1]="../SMAMpaResultsIDLItf/enum_SimComplexValues_29679.htm";
objet["enum"]["SimLocation"]=2;
objet["enum"][2]="../SMAMpaResultsIDLItf/enum_SimLocation_22790.htm";
objet["enum"]["SimProcessingTypes"]=3;
objet["enum"][3]="../SMAMpaResultsIDLItf/enum_SimProcessingTypes_33330.htm";
objet["enum"]["SimSymbolicFrameRangesEnum"]=4;
objet["enum"][4]="../SMAMpaResultsIDLItf/enum_SimSymbolicFrameRangesEnum_50086.htm";
objet["enum"]["SimTransformTypes"]=5;
objet["enum"][5]="../SMAMpaResultsIDLItf/enum_SimTransformTypes_31606.htm";
objet["interface"]["SimExportField"]=0;
objet["interface"][0]="../SMAMpaResultsIDLItf/interface_SimExportField_29339.htm";
objet["interface"]["SimFieldPlot"]=1;
objet["interface"][1]="../SMAMpaResultsIDLItf/interface_SimFieldPlot_26794.htm";
objet["interface"]["SimFramesSelection"]=2;
objet["interface"][2]="../SMAMpaResultsIDLItf/interface_SimFramesSelection_36034.htm";
objet["interface"]["SimFrequencySensor"]=3;
objet["interface"][3]="../SMAMpaResultsIDLItf/interface_SimFrequencySensor_36388.htm";
objet["interface"]["SimLegend"]=4;
objet["interface"][4]="../SMAMpaResultsIDLItf/interface_SimLegend_23636.htm";
objet["interface"]["SimResultantSensor"]=5;
objet["interface"][5]="../SMAMpaResultsIDLItf/interface_SimResultantSensor_36461.htm";
objet["interface"]["SimResultsAnalysisCase"]=6;
objet["interface"][6]="../SMAMpaResultsIDLItf/interface_SimResultsAnalysisCase_43911.htm";
objet["interface"]["SimResultsAnalysisCases"]=7;
objet["interface"][7]="../SMAMpaResultsIDLItf/interface_SimResultsAnalysisCases_46441.htm";
objet["interface"]["SimResultsManager"]=8;
objet["interface"][8]="../SMAMpaResultsIDLItf/interface_SimResultsManager_34158.htm";
objet["interface"]["SimResultsSet"]=9;
objet["interface"][9]="../SMAMpaResultsIDLItf/interface_SimResultsSet_28292.htm";
objet["interface"]["SimResultsStep"]=10;
objet["interface"][10]="../SMAMpaResultsIDLItf/interface_SimResultsStep_29733.htm";
objet["interface"]["SimResultsSteps"]=11;
objet["interface"][11]="../SMAMpaResultsIDLItf/interface_SimResultsSteps_31343.htm";
objet["interface"]["SimSensor"]=12;
objet["interface"][12]="../SMAMpaResultsIDLItf/interface_SimSensor_23895.htm";
objet["interface"]["SimSensorBase"]=13;
objet["interface"][13]="../SMAMpaResultsIDLItf/interface_SimSensorBase_27936.htm";
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