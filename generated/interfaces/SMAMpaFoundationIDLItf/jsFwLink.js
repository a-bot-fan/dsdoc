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
 objet["enum"]["SimDof"]=0;
objet["enum"][0]="../SMAMpaFoundationIDLItf/enum_SimDof_24215.htm";
objet["interface"]["SimAnalysisCase"]=0;
objet["interface"][0]="../SMAMpaFoundationIDLItf/interface_SimAnalysisCase_36520.htm";
objet["interface"]["SimAnalysisCases"]=1;
objet["interface"][1]="../SMAMpaFoundationIDLItf/interface_SimAnalysisCases_38245.htm";
objet["interface"]["SimConnectorDampings"]=2;
objet["interface"][2]="../SMAMpaFoundationIDLItf/interface_SimConnectorDampings_45714.htm";
objet["interface"]["SimConnectorElasticities"]=3;
objet["interface"][3]="../SMAMpaFoundationIDLItf/interface_SimConnectorElasticities_54967.htm";
objet["interface"]["SimExecutionService"]=4;
objet["interface"][4]="../SMAMpaFoundationIDLItf/interface_SimExecutionService_43734.htm";
objet["interface"]["SimFeatureStates"]=5;
objet["interface"][5]="../SMAMpaFoundationIDLItf/interface_SimFeatureStates_38432.htm";
objet["interface"]["SimFeatures"]=6;
objet["interface"][6]="../SMAMpaFoundationIDLItf/interface_SimFeatures_31665.htm";
objet["interface"]["SimLinearLoadCase"]=7;
objet["interface"][7]="../SMAMpaFoundationIDLItf/interface_SimLinearLoadCase_39106.htm";
objet["interface"]["SimLinearLoadCases"]=8;
objet["interface"][8]="../SMAMpaFoundationIDLItf/interface_SimLinearLoadCases_41061.htm";
objet["interface"]["SimLoadSet"]=9;
objet["interface"][9]="../SMAMpaFoundationIDLItf/interface_SimLoadSet_30270.htm";
objet["interface"]["SimMathAxis"]=10;
objet["interface"][10]="../SMAMpaFoundationIDLItf/interface_SimMathAxis_31413.htm";
objet["interface"]["SimMathPlane"]=11;
objet["interface"][11]="../SMAMpaFoundationIDLItf/interface_SimMathPlane_32411.htm";
objet["interface"]["SimMathPoint"]=12;
objet["interface"][12]="../SMAMpaFoundationIDLItf/interface_SimMathPoint_32672.htm";
objet["interface"]["SimMathVector"]=13;
objet["interface"][13]="../SMAMpaFoundationIDLItf/interface_SimMathVector_33953.htm";
objet["interface"]["SimScenarioManager"]=14;
objet["interface"][14]="../SMAMpaFoundationIDLItf/interface_SimScenarioManager_41434.htm";
objet["interface"]["SimSimulationService"]=15;
objet["interface"][15]="../SMAMpaFoundationIDLItf/interface_SimSimulationService_45740.htm";
objet["interface"]["SimStep"]=16;
objet["interface"][16]="../SMAMpaFoundationIDLItf/interface_SimStep_27970.htm";
objet["interface"]["SimSteps"]=17;
objet["interface"][17]="../SMAMpaFoundationIDLItf/interface_SimSteps_28775.htm";
objet["interface"]["SimStructuralAnalysisCase"]=18;
objet["interface"][18]="../SMAMpaFoundationIDLItf/interface_SimStructuralAnalysisCase_56842.htm";
objet["interface"]["SimThermalAnalysisCase"]=19;
objet["interface"][19]="../SMAMpaFoundationIDLItf/interface_SimThermalAnalysisCase_49400.htm";
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