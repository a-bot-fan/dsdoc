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
 objet["interface"]["MachiningCell"]=0;
objet["interface"][0]="../MachiningUseItf/interface_MachiningCell_22231.htm";
objet["interface"]["ManufacturingAPTGenerator"]=1;
objet["interface"][1]="../MachiningUseItf/interface_ManufacturingAPTGenerator_44893.htm";
objet["interface"]["ManufacturingActivity"]=2;
objet["interface"][2]="../MachiningUseItf/interface_ManufacturingActivity_36929.htm";
objet["interface"]["ManufacturingActivityCompensation"]=3;
objet["interface"][3]="../MachiningUseItf/interface_ManufacturingActivityCompensation_70654.htm";
objet["interface"]["ManufacturingActivityParameters"]=4;
objet["interface"][4]="../MachiningUseItf/interface_ManufacturingActivityParameters_63760.htm";
objet["interface"]["ManufacturingActivitySyntax"]=5;
objet["interface"][5]="../MachiningUseItf/interface_ManufacturingActivitySyntax_52193.htm";
objet["interface"]["ManufacturingAgregate"]=6;
objet["interface"][6]="../MachiningUseItf/interface_ManufacturingAgregate_36092.htm";
objet["interface"]["ManufacturingContainer"]=7;
objet["interface"][7]="../MachiningUseItf/interface_ManufacturingContainer_38732.htm";
objet["interface"]["ManufacturingFactories"]=8;
objet["interface"][8]="../MachiningUseItf/interface_ManufacturingFactories_38736.htm";
objet["interface"]["ManufacturingFactories2"]=9;
objet["interface"][9]="../MachiningUseItf/interface_ManufacturingFactories2_39836.htm";
objet["interface"]["ManufacturingFeatureContainer"]=10;
objet["interface"][10]="../MachiningUseItf/interface_ManufacturingFeatureContainer_56844.htm";
objet["interface"]["ManufacturingGeneratorData"]=11;
objet["interface"][11]="../MachiningUseItf/interface_ManufacturingGeneratorData_47799.htm";
objet["interface"]["ManufacturingGeometryDefinition"]=12;
objet["interface"][12]="../MachiningUseItf/interface_ManufacturingGeometryDefinition_63482.htm";
objet["interface"]["ManufacturingMOLocalMachiningAxisSystem"]=13;
objet["interface"][13]="../MachiningUseItf/interface_ManufacturingMOLocalMachiningAxisSystem_90616.htm";
objet["interface"]["ManufacturingMountPoint"]=14;
objet["interface"][14]="../MachiningUseItf/interface_ManufacturingMountPoint_41311.htm";
objet["interface"]["ManufacturingNCRepManagement"]=15;
objet["interface"][15]="../MachiningUseItf/interface_ManufacturingNCRepManagement_52648.htm";
objet["interface"]["ManufacturingOutput"]=16;
objet["interface"][16]="../MachiningUseItf/interface_ManufacturingOutput_33032.htm";
objet["interface"]["ManufacturingOutputGenerator"]=17;
objet["interface"][17]="../MachiningUseItf/interface_ManufacturingOutputGenerator_54747.htm";
objet["interface"]["ManufacturingPartOperation"]=18;
objet["interface"][18]="../MachiningUseItf/interface_ManufacturingPartOperation_48698.htm";
objet["interface"]["ManufacturingPartOperationPosition"]=19;
objet["interface"][19]="../MachiningUseItf/interface_ManufacturingPartOperationPosition_73957.htm";
objet["interface"]["ManufacturingPartOperationPositionMngt"]=20;
objet["interface"][20]="../MachiningUseItf/interface_ManufacturingPartOperationPositionMngt_88425.htm";
objet["interface"]["ManufacturingProgram"]=21;
objet["interface"][21]="../MachiningUseItf/interface_ManufacturingProgram_34462.htm";
objet["interface"]["ManufacturingSequentialMotions"]=22;
objet["interface"][22]="../MachiningUseItf/interface_ManufacturingSequentialMotions_60709.htm";
objet["interface"]["ManufacturingToolCompensation"]=23;
objet["interface"][23]="../MachiningUseItf/interface_ManufacturingToolCompensation_57466.htm";
objet["interface"]["ManufacturingToolCorrector"]=24;
objet["interface"][24]="../MachiningUseItf/interface_ManufacturingToolCorrector_48861.htm";
objet["interface"]["ManufacturingView"]=25;
objet["interface"][25]="../MachiningUseItf/interface_ManufacturingView_28765.htm";
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