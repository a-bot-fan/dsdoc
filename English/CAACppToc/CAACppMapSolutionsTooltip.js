function createMap() {
	//var docBody = document.body;
	//var docTab  = document.getElementById("mapTab");
	var i = 0;
	var j = 0;
	var k = 0;

	var xmlMap = new Object();
	var xmlToc = new Object();
	/* 3D Modeling Apps */
	/* 2D Layout for 3D Design*/
	xmlMap.xdl = "../CAA2DLayout/CATIA_Dft_2DLayoutFeature.xml";
	xmlToc.xdl = "../CAA2DLayout/CAA2DLTcToc.htm";
	/* 3D Tolerance & Annotation*/
	xmlMap.Tpi = "../CAATpiTolerancing/CATIA_FTA_TPSModeler.xml";
	xmlToc.Tpi = "../CAATpiTolerancing/CAATpiTcToc.htm";
	/* Accommodation Design*/
	xmlMap.Agt = "../CAAAgtDoc/CAAAgt.xml";
	xmlToc.Agt = "../CAAAgtDoc/CAAAgtTcToc.htm";
	/* Assembly Design*/
	xmlMap.Aui = "../CAAAuiAssembly/CATIA_AssemblyDesign_Modeler.xml";
	xmlToc.Aui = "../CAAAuiAssembly/CAAAuiTcToc.htm";
	/* BioSystems Design */
	xmlMap.Bio = "../CAABioSysModeler/CAA_BioSys_Modeler.xml";
	xmlToc.Bio = "../CAABioSysModeler/CAABioSysModelerTcPathwayModel.htm";
	/* Composites Design */
	xmlMap.Cci = "../CAACciCompositesUse/CATIA_CompositesUse.xml";
	xmlToc.Cci = "../CAACciCompositesUse/CAACciTcToc.htm";
	/* Data Exchange Interfaces */
	xmlMap.Die = "../CAADieInterfaces/CATIA_Die_Interfaces.xml";
	xmlToc.Die = "../CAADieInterfaces/CAADieTcToc.htm";
	/* Digitized Shape to Surface */
	xmlMap.Cld = "../CAACldCloud/CAA_QSR_Modeler.xml";
	xmlToc.Cld = "../CAACldCloud/CAACldTcCloudToc.htm";
	/* Drafting */
	xmlMap.Dri = "../CAADriDrafting/CATIA_Dft_DrawingBaseFeature.xml";
	xmlToc.Dri = "../CAADriDrafting/CAADriTcDraftingToc.htm";
	/* Dymola Behavior Modeling */
	xmlMap.Sys = "../CAASysDynamicBehavior/CATIA_Sys_Behavior_Modeler.xml";
	xmlToc.Sys = "../CAASysDynamicBehavior/CAASysTcToc.htm";
	/* Electrical 3D Design / Part Design */
	xmlMap.Eli = "../CAAEliElectrical/CATIA_Ele_ModelerCommon.xml";
	xmlToc.Eli = "../CAACppToc/CAACppTc3DDPDToc.htm";
	/* Electrical Manufacturing Preparation */
	xmlMap.Ehf = "../CAAEhfElecFlattening/CATIA_Ele_FlatteningModeler.xml";
	xmlToc.Ehf = "../CAACppToc/CAACppTcEMPToc.htm";
	/* Electrical System Design*/
	xmlMap.Ele = "../CAAEleElecLogical/CATIA_Ele_ElecLogicalModeler.xml";
	xmlToc.Ele = "../CAACppToc/CAACppTcESDToc.htm";
	/* Fastening */
	xmlMap.Fma = "../CAAFMAMdl/CATIA_PLMFastener_Authoring_APIs.xml";
	xmlToc.Fma = "../CAAFMAMdl/CAAFmaTcToc.htm";
	/* Generative Shape Design */
	xmlMap.Gsi = "../CAAGsiGSM/CATIA_Advanced_Shape_Design_Modeler.xml";
	xmlToc.Gsi = "../CAAGsiGSM/CAAGsiTcToc.htm";
	/* HVAC 3D Design / Part Design */
	xmlMap.Hva = "../CAAHvacDesign/CAA_HvacDesign.xml";
	xmlToc.Hva = "../CAAHvacDesign/CAA_HvacDesignToc.htm";
	/* Knowledge Basics */
	xmlMap.Kni = "../CAAKniKnowledgeAdvisor/CAAKniKnowledgeAdvisor.xml";
	xmlToc.Kni = "../CAAKniKnowledgeAdvisor/CAAKniTcKnowledgeAdvisorToc.htm";
	/* Know-how Apps Components */
	xmlMap.Obm = "../CAAOBMAutomatedDesignProcess/CAAOBMAutomatedDesignProcess.xml";
	xmlToc.Obm = "../CAAOBMAutomatedDesignProcess/CAAOBMTcAutoDesignProcessToc.htm";
	/* Know-how Reuse */
	xmlMap.Khw = "../CAAKnhKnowledgeExpert/CAAKnhKnowledgeExpert.xml";
	xmlToc.Khw = "../CAAKnhKnowledgeExpert/CAAKnhTcKnowledgeExpertToc.htm";
	/* Mechanical Systems Design / Experience */
	xmlMap.Kin = "../CAAKinDoc/PLM_Kin_Mechanism.xml";
	xmlToc.Kin = "../CAAKinDoc/CAAKinToc.htm";
	/* Part Design */
	xmlMap.Pri = "../CAAPriPartDesign/CATIA_PDG_Interfaces.xml";
	xmlToc.Pri = "../CAAPriPartDesign/CAAPriTcToc.htm";
	/* Piping & Tubing 3D Design */
	xmlMap.Pip = "../CAAPipeTubeDesign/CATIA_Pip_FluidSystemsDesign.xml";
	xmlToc.Pip = "../CAAPipeTubeDesign/CAAPipTcFluidSystemsDesignToc.htm";
	/* Sheet Metal for Hydro-formed Parts */
	xmlMap.Asi = "../CAAAslAeroSheetMetal/CATIA_SheetMetal_ASL_Modeler.xml";
	xmlToc.Asi = "../CAAAslAeroSheetMetal/CAAAslTcToc.htm";
	/* Sketcher */
	xmlMap.Ski = "../CAASkiSketcher/CATIA_SKT_Modeler.xml";
	xmlToc.Ski = "../CAASkiSketcher/CAASkiTcToc.htm";
	/* Space Allocation */
	xmlMap.Spl = "../CAASplSpaceAllocation/CAA_SpaceAllocation.xml";
	xmlToc.Spl = "../CAASplSpaceAllocation/CAASplTcSpaceAllocationToc.htm";
	/* Space Reference System */
	xmlMap.Srs = "../CAASrsSpaceReferenceSystem/CAA_SpaceReferenceSystem.xml";
	xmlToc.Srs = "../CAASrsSpaceReferenceSystem/CAASrsTcSpaceReferenceSystemToc.htm";
	/* Structure Design */
	xmlMap.Sdd = "../CAASddDetDesign/CATIA_SDD_Modeler.xml";
	xmlToc.Sdd = "../CAASddDetDesign/CAASddTcDetDesignToc.htm";
	/* Structure Functional Design */
	xmlMap.Sfd = "../CAASfdFuncDesign/CATIA_SFD_Modeler.xml";
	xmlToc.Sfd = "../CAASfdFuncDesign/CAASfdTcFuncDesignToc.htm";

	/* Social and Collaborative Apps */
	/* Coexistence and Transition */
	xmlMap.V4i = "../CAAV4iCoExistence/INFRA_V4Integration.xml";
	xmlToc.V4i = "../CAACppToc/CAACppTcCTToc.htm";
	/* Design Synthesis */
	xmlMap.Anm = "../CAAAnmAnimationStandard/DELMIA_GenericAnimation_AsIs.xml";
	xmlToc.Anm = "../CAACppToc/CAACppTcDSToc.htm";
	/* Mechanical Interference Check */
	xmlMap.Itf = "../CAAItfClashCheck/CATIA_Interference.xml";
	xmlToc.Itf = "../CAAItfClashCheck/CAAItfTcToc.htm";

	/* Contents and Simulation Apps */
	/* Assembly Evaluation */
	xmlMap.Fit = "../CAAFittingUse/DELMIA_Fit_AssemblyValidationFeatures.xml";
	xmlToc.Fit = "../CAAFittingUse/CAAFittingUseToc.htm";
	/* Ergonomics at Work */
	xmlMap.Htd = "../CAAHtdHumanTaskDefAsIs/DELMIA_HumanTask_AsIs.xml";
	xmlToc.Htd = "../CAAHtdHumanTaskDefAsIs/CAAHtdTcToc.htm";
	/* Manufactured Item Definition */
	xmlMap.Lip = "../CAAPPRLiveProcessEditor/CAAPPRLiveProcessEditor.xml";
	xmlToc.Lip = "../CAAPPRLiveProcessEditor/CAAPPRTcLiveProcessEditorToc.htm";
	/* Marine Manufacturing */
	xmlMap.Shi = "../CAADELShipMfg/CAAShipMfg.xml";
	xmlToc.Shi = "../CAADELShipMfg/CAAShipMfgTcToc.htm";
	/* Marine Structure Fabrication */
	xmlMap.Str = "../CAADELStrMfg/CAAStrMfg.xml";
	xmlToc.Str = "../CAADELStrMfg/CAAStrMfgTcToc.htm";
	/* Material Definition */
	xmlMap.Mat = "../CAAMatDoc/CATIA_Material.xml";
	xmlToc.Mat = "../CAAMatDoc/CAAMaterialOverviewToc.htm";
	/* Milling Machining */
	xmlMap.Mfg = "../CAAMfgUseBase/CAA_DELMIA_MachiningBase.xml";
	xmlToc.Mfg = "../CAAMfgUseBase/CAAMfgTcMachiningToc.htm";
	/* Model Assembly Design */
	xmlMap.Fm2 = "../CAAFmtModelAssemblyDoc/CAAFmtModelAssembly.xml";
	xmlToc.Fm2 = "../CAAFmtModelAssemblyDoc/CAAFmtModelAssemblyToc.htm";
	/* Multiphysics Common Services */
	xmlMap.Sim = "../CAASimScenarioDoc/CAAScenario.xml";
	xmlToc.Sim = "../CAASimScenarioDoc/CAASimTcMPAToc.htm";
	/* Mesh Creation */
	xmlMap.Fmt = "../CAAFmtDoc/PLM_Meshing.xml";
	xmlToc.Fmt = "../CAAFmtDoc/CAAFEMOverviewToc.htm";
	/* Multiphysics Scenario Creation */
	xmlMap.Fea = "../CAASMAFeaPreProcessingDoc/CAASMAMpaPreProc.xml";
	xmlToc.Fea = "../CAASMAFeaPreProcessingDoc/CAASMAMpaPreProcToc.htm";
	/* Physics Results Explorer */
	xmlMap.Fem = "../CAASMAMpaResultsDoc/CAASMAMpaResults.xml";
	xmlToc.Fem = "../CAASMAMpaResultsDoc/CAASMAMpaResultsToc.htm";
	/* Structural Model Creation */
	xmlMap.Fm3 = "../CAAFmtModelDoc/CAAStructuralModelCreation.xml";
	xmlToc.Fm3 = "../CAAFmtModelDoc/CAAFEMModelOverviewToc.htm";

	/* Information Intelligence Apps */
	/* Weight Analysis */
	xmlMap.Wcg = "../CAAWeightEqvlt/CAA_WCG_Model.xml";
	xmlToc.Wcg = "../CAAWeightEqvlt/CAAWCGTcToc.htm";

	var tdList  = document.getElementsByTagName("td");
//	alert('length = '+tdList.length);

	while (i<tdList.length) {
//		var num = tdList[i].id.substring(2, tdList[i].id.length);
//		if (i<11)
//			alert('i = '+i+' - num = '+num);
		var tdId = tdList[i].id;
		if (tdId != "") {
			//alert ('tdId = '+tdId+'\n'+xmlMap[tdId]);
			var testNode = null;
			var ms = "yes";
			try {
				testNode = loadXML(xmlMap[tdId]).getElementsByTagName('Root')[0];
				while (testNode.firstChild != null) { // To force the exception to be thrown
					break;
				}
			} catch(e) { ms = "no"; }
			//alert('ms = '+ms);
			if (ms == "no") { // If the product is not installed, display gray images
				//alert('Not installed = '+tdId);
				tdList[i].className = "mapDimmed";
			} else {
				tdList[i].className = "mapDimmed";
				var tocLink = document.createElement("A");
				tocLink.innerHTML = tdList[i].innerHTML;
				tdList[i].innerHTML = "";
				tocLink.href = xmlToc[tdId];
				tocLink.className = "map";
				var prompt = document.getElementById("prompt"+tdId).innerHTML;
				tocLink.innerHTML = tocLink.innerHTML+'<em><span></span>'+prompt+'</em>';
				tdList[i].appendChild(tocLink);
			}
		}
		i++;
	}
}
