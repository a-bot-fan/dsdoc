 	var objetIdx = new Array; 
	var snameIdx = new Array; 
	function activatelink4(name,anchor,style, text,solveshortname) { 
	//alert("call activatelink4"); 
    var olink; 
     if (null!=name && name.length > 0) { 
 		 var findo = objetIdx[name]; 
         if (findo != null) { 
		 var text2=null; 
         if (null != solveshortname) text2 = snameIdx[name]; 
         if (null != text2) text2 = (null != text)? text:"" ;   
		 olink = "<a href=\""+pathreltodocroot + findo + anchor + "\" "  + style  + ">" + text2 + "</a>";  
         } else { 
             olink = text; 
         } 
     } else if (anchor.length > 0) { 
         olink = "<a href=\"" + anchor + "\">" + text + "</a>"; 
     } else { 
         olink = text; 
     } 
     //alert ("activatelink name="+name+" text="+text + " link="+olink);
     //document.write("olink="+findo); 
     document.write(olink); 
 }   
 function locateshortname(lname){ 
   var sname=null; 
   if (null!=lname) sname = snameIdx[lname]; 
   if (null == sname) sname = ""; 
    return document.write(sname); 
}  
 var modstab = new Array;  
 //var conttab = new Array; 
 var contObj = new Object; 
 var child = new Object; 
 var objtmp, objtmp1; 
 function generatecontainer(modname,lgname) { 
     //document.write("start generatecontainer. </br> "); 
     //contObj.dsid = "2443"; contObj.longname = "module:DS/UIKIT/Input"; contObj.type = "function"; 
     //conttab["module:DS/UIKIT/Input"] = contObj; 
     //document.write("-------------------------- </br> "); 
     //var objmod = modstab[modname]; 
     //var conttaba = new Array; 
     var conttabc; 
     var classes = new Array; 
     var methods = new Array; 
     var typedefs = new Array; 
     var events = new Array; 
     var members = new Array; 
     var namespaces = new Array; 
	 var constructors = new Array; 
	 var nbobj = 0; 
     for (var modc in modstab ) { 
     //modstab.forEach(function (modc) {         
         if (modc == modname) { 
             conttabc = modstab[modc].conttab; 
         } else conttabc = modstab[modc].unsconttab; 
         //on met le code ici et pas ds container pour economiser de le recalculer x fois 
         if (null != conttabc && null != (objtmp = conttabc[lgname])) { 
             //document.write("-->conttab name=" + lgname + " mod=" + modc +"</br>"); 
             objtmp.childs.forEach(function (objtmp1) { 
                 if (null != objtmp1 && objtmp1.kind) { 
					nbobj++; 
                     //document.write("-->forEach child=" + objtmp1.name + " kind=" + objtmp1.kind + "</br>"); 
                     if ('function' == objtmp1.kind) { 
                         methods.push(objtmp1); 
                     } else if ('member' == objtmp1.kind) { 
                         members.push(objtmp1); 
                     } else if ('class' == objtmp1.kind) { 
                         classes.push(objtmp1); //nbobj--; 
                     } else if ('typedef' == objtmp1.kind) { 
                         typedefs.push(objtmp1); 
                     } else if ('event' == objtmp1.kind) { 
                         events.push(objtmp1); 
                     } else if ('namespace' == objtmp1.kind) { 
                         namespaces.push(objtmp1); //nbobj--; 
					 } else if ('constructor' == objtmp1.kind) { 
                          constructors.push(objtmp1); 
                      } 
                 } 
             }); 
         } 
     }; 
	       if(nbobj>0)document.write("<div id= \"floatlocation-idx\">  "); 
              if (constructors.length > 0) { 
	           document.write("<h3> Constructor Index </h3><dl>");
	           constructors.forEach(function(objtmp) {
	               document.write("<dt>o<a href=\"" + pathreltodocroot + objtmp.outdirfromdoc + "/" + 
                      objtmp.htmlFileName + "\"> " + objtmp.name + "</a><dd>"+objtmp.summary+"</dd>");
	           });
	           document.write("</dl>");
	       } 
			 if (members.length > 0) { 
                 //document.write("-------------members List------------- </br> "); 
                 document.write("<h3> Members Index </h3><dl>"); 
                 members.forEach(function (objtmp) { 
                     document.write("<dt>o<a href=\"" + pathreltodocroot + objtmp.outdirfromdoc + "/" + 
                      objtmp.htmlFileName + "\"> " + objtmp.name + "</a><dd>"+objtmp.summary+"</dd>"); 
                 }); 
                 document.write("</dl>"); 
             } 
             if (methods.length > 0) { 
                 document.write("<h3> Methods Index </h3><dl>"); 
                 methods.forEach(function (objtmp) { 
                     document.write("<dt>o<a href=\"" + pathreltodocroot + objtmp.outdirfromdoc + "/" + 
                   objtmp.htmlFileName + "\"> " + objtmp.name + "</a><dd>"+objtmp.summary+"</dd>"); 
                 }); 
                 document.write("</dl>"); 
             } 
             if (typedefs.length > 0) { 
                 document.write("<h3> Typedefs Index </h3><dl>"); 
                 typedefs.forEach(function (objtmp) { 
                     document.write("<dt>o<a href=\"" + pathreltodocroot + objtmp.outdirfromdoc + "/" + 
                   objtmp.htmlFileName + "\"> " + objtmp.name + "</a><dd>"+objtmp.summary+"</dd>"); 
                 }); 
                 document.write("</dl>"); 
             } 
             if (events.length > 0) { 
                 document.write("<h3> Events Index </h3><dl>"); 
                 events.forEach(function (objtmp) { 
                     document.write("<dt>o<a href=\"" + pathreltodocroot + objtmp.outdirfromdoc + "/" + 
                   objtmp.htmlFileName + "\"> " + objtmp.name + "</a><dd>"+objtmp.summary+"</dd>"); 
                 }); 
                 document.write("</dl>"); 
             } 
             if (classes.length > 0) { 
                 document.write("<h3> Classes Index </h3><dl>"); 
                 classes.forEach(function (objtmp) { 
                     document.write("<dt>o<a href=\"" + pathreltodocroot + objtmp.outdirfromdoc + "/" + 
                   objtmp.htmlFileName + "\"> " + objtmp.name + "</a><dd>"+objtmp.summary+"</dd>"); 
                 }); 
                 document.write("</dl>"); 
             } 
             if (namespaces.length > 0) { 
                 document.write("<h3> Namespaces Index </h3><dl>"); 
                 namespaces.forEach(function (objtmp) { 
                     document.write("<dt>o<a href=\"" + pathreltodocroot + objtmp.outdirfromdoc + "/" + 
                   objtmp.htmlFileName + "\"> " + objtmp.name + "</a><dd>"+objtmp.summary+"</dd>"); 
                 }); 
                 document.write("</dl>"); 
             }    
			  if (nbobj > 0) document.write("</div>"); 
 }  
