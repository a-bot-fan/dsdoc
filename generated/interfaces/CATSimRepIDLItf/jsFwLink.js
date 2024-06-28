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
 objet["enum"]["SimXRepRelationType"]=0;
objet["enum"][0]="../CATSimRepIDLItf/enum_SimXRepRelationType_28051.htm";
objet["interface"]["SimAbstractions"]=0;
objet["interface"][0]="../CATSimRepIDLItf/interface_SimAbstractions_24554.htm";
objet["interface"]["SimBehaviors"]=1;
objet["interface"][1]="../CATSimRepIDLItf/interface_SimBehaviors_20318.htm";
objet["interface"]["SimFemRoot"]=2;
objet["interface"][2]="../CATSimRepIDLItf/interface_SimFemRoot_17904.htm";
objet["interface"]["SimGroup"]=3;
objet["interface"][3]="../CATSimRepIDLItf/interface_SimGroup_16254.htm";
objet["interface"]["SimGroups"]=4;
objet["interface"][4]="../CATSimRepIDLItf/interface_SimGroups_17174.htm";
objet["interface"]["SimImportExportArgs"]=5;
objet["interface"][5]="../CATSimRepIDLItf/interface_SimImportExportArgs_31262.htm";
objet["interface"]["SimLinkAccess"]=6;
objet["interface"][6]="../CATSimRepIDLItf/interface_SimLinkAccess_21177.htm";
objet["interface"]["SimMCXProperties"]=7;
objet["interface"][7]="../CATSimRepIDLItf/interface_SimMCXProperties_25817.htm";
objet["interface"]["SimManagerSIMExport"]=8;
objet["interface"][8]="../CATSimRepIDLItf/interface_SimManagerSIMExport_30466.htm";
objet["interface"]["SimManagerSIMImport"]=9;
objet["interface"][9]="../CATSimRepIDLItf/interface_SimManagerSIMImport_30364.htm";
objet["interface"]["SimMeshElement"]=10;
objet["interface"][10]="../CATSimRepIDLItf/interface_SimMeshElement_22663.htm";
objet["interface"]["SimMeshNode"]=11;
objet["interface"][11]="../CATSimRepIDLItf/interface_SimMeshNode_18722.htm";
objet["interface"]["SimMeshPart"]=12;
objet["interface"][12]="../CATSimRepIDLItf/interface_SimMeshPart_18900.htm";
objet["interface"]["SimMeshParts"]=13;
objet["interface"][13]="../CATSimRepIDLItf/interface_SimMeshParts_20165.htm";
objet["interface"]["SimMeshSet"]=14;
objet["interface"][14]="../CATSimRepIDLItf/interface_SimMeshSet_17811.htm";
objet["interface"]["SimMeshSpecification"]=15;
objet["interface"][15]="../CATSimRepIDLItf/interface_SimMeshSpecification_33068.htm";
objet["interface"]["SimMeshSpecifications"]=16;
objet["interface"][16]="../CATSimRepIDLItf/interface_SimMeshSpecifications_35368.htm";
objet["interface"]["SimNumbering"]=17;
objet["interface"][17]="../CATSimRepIDLItf/interface_SimNumbering_20176.htm";
objet["interface"]["SimParameterSet"]=18;
objet["interface"][18]="../CATSimRepIDLItf/interface_SimParameterSet_24136.htm";
objet["interface"]["SimPrdRepFactory"]=19;
objet["interface"][19]="../CATSimRepIDLItf/interface_SimPrdRepFactory_25770.htm";
objet["interface"]["SimProperties"]=20;
objet["interface"][20]="../CATSimRepIDLItf/interface_SimProperties_21671.htm";
objet["interface"]["SimRepServices"]=21;
objet["interface"][21]="../CATSimRepIDLItf/interface_SimRepServices_22779.htm";
objet["interface"]["SimResultRepManager"]=22;
objet["interface"][22]="../CATSimRepIDLItf/interface_SimResultRepManager_30732.htm";
objet["interface"]["SimScenarioResult"]=23;
objet["interface"][23]="../CATSimRepIDLItf/interface_SimScenarioResult_27723.htm";
objet["interface"]["SimScenarioResults"]=24;
objet["interface"][24]="../CATSimRepIDLItf/interface_SimScenarioResults_29678.htm";
objet["interface"]["SimSeamWeld"]=25;
objet["interface"][25]="../CATSimRepIDLItf/interface_SimSeamWeld_18725.htm";
objet["interface"]["SimSpecsRepManager"]=26;
objet["interface"][26]="../CATSimRepIDLItf/interface_SimSpecsRepManager_28728.htm";
objet["interface"]["SimTopologySpecification"]=27;
objet["interface"][27]="../CATSimRepIDLItf/interface_SimTopologySpecification_42317.htm";
objet["interface"]["SimTopologySpecifications"]=28;
objet["interface"][28]="../CATSimRepIDLItf/interface_SimTopologySpecifications_45077.htm";
objet["interface"]["SimVisualization"]=29;
objet["interface"][29]="../CATSimRepIDLItf/interface_SimVisualization_26235.htm";
objet["interface"]["SimXRep"]=30;
objet["interface"][30]="../CATSimRepIDLItf/interface_SimXRep_15313.htm";
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