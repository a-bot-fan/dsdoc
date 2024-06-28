//alert ("call me=WAFData");

 
 var conttab = new Array;
    var unsconttab = new Array;
    var objmod = new Object;
    objmod.conttab = conttab;
    objmod.unsconttab = unsconttab; //unsolve container 
    modstab["WAFData"] = objmod;
	var strtmp; var strtmp2;
	//var childctor=null;	var child2=null; 	
	var child=null;	



	child=null;
	
	 
	child=new Object; child.dsid='7338'; child.name='authenticatedRequest'; child.longname='module:DS/WAFData/WAFData.authenticatedRequest';	child.outdirfromdoc='generated/js/WebAppsFoundations-WAFData'; child.htmlFileName='WAFData.htm#authenticatedRequest';	child.summary='';   child.kind="function";	
	if(null != child){
		if (null!=(objtmp=conttab["module:DS/WAFData/WAFData"])){ 
		 	objtmp.childs.push(child);
		}else{contObj=new Object;  contObj.dsid="2795"; contObj.longname="module:DS/WAFData/WAFData"; contObj.type="module"; contObj.childs=[]; contObj.childs.push(child); 
			conttab["module:DS/WAFData/WAFData"]=contObj; }		
	} 
	

	child=null;
	
	 
	child=new Object; child.dsid='6929'; child.name='proxifiedRequest'; child.longname='module:DS/WAFData/WAFData.proxifiedRequest';	child.outdirfromdoc='generated/js/WebAppsFoundations-WAFData'; child.htmlFileName='WAFData.htm#proxifiedRequest';	child.summary='';   child.kind="function";	
	if(null != child){
		if (null!=(objtmp=conttab["module:DS/WAFData/WAFData"])){ 
		 	objtmp.childs.push(child);
		}else{contObj=new Object;  contObj.dsid="2795"; contObj.longname="module:DS/WAFData/WAFData"; contObj.type="module"; contObj.childs=[]; contObj.childs.push(child); 
			conttab["module:DS/WAFData/WAFData"]=contObj; }		
	} 
	




