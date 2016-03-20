/*
var DW_ProductName = "ImageCapture Suite";
var DW_ObjectName = "ImageCaptureSuiteObject";
var DW_IsTrial = true;     // If this is a trial version. User can change it.
var DW_VersionCode = "9,0"; // The version of ICS. ActiveX will use this to determin if it is necessary to upgrade the client. Use ',' to separate the numbers. 
var DW_Version = "9.0"; 
var DW_Width = 580;        // The width of the main control. User can change it.
var DW_Height = 610;       // The width of the main control. User can change it.
var DW_LPKPath = "Resources/ImageCaptureSuite.lpk";     // The relative path of the LPK file. User can change it.
var DW_PKGPath = "Resources/ImageCaptureSuiteMacEditionTrial.pkg";
var DW_MSIPath = "Resources/ImageCaptureSuitePlugIn.msi";         //The relative path of the MSI file. User need to change it.
var DW_CABX86Path = "Resources/ImageCaptureSuite.cab";          //The relative path of the x86 cab file. User need to change it.
var DW_CABX64Path = "Resources/ImageCaptureSuitex64.cab";      //The relative path of the x64 cab file. User need to change it.
var DW_MIMETYPE = "Application/ImageCaptureSuite-Plugin";
var DW_PROCLASSID = "5220cb21-c88d-11cf-b347-00aa00a28331";  
var DW_FULLCLASSID = "D6D6D32A-E059-4174-88F3-5853EB11DE3F"; 
var DW_TRAILCLASSID = "E61B84D6-979B-4864-91B7-B8C140B58D54";
var DW_DemoPath = "";//"http://www.dynamsoft.com/demo/DWT/";
var DW_DefaultSaveImageName = "ICSImage";
var DW_NoDrivers = "No webcams or TWAIN compatible drivers detected:";

function InitContrlDetail() {
    var ObjString = "<ul id='divTwainType' style='display:none; height:70px; background:#f0f0f0;'> ";
    ObjString += "<li style='padding-left:12px;'>";
    ObjString += "<label for = 'ShowUI'><input type='checkbox' id='ShowUI' />Show UI&nbsp;</label>";
    ObjString += "<label for = 'ADF'><input type='checkbox' id='ADF' />ADF&nbsp;</label>";
    ObjString += "<label for = 'Duplex'><input type='checkbox' id='Duplex'/>Duplex</label></li>";
    ObjString += "<li style='padding-left:15px;'>Pixel Type:";
    ObjString += "<label for='BW'><input type='radio' id='BW' name='PixelType'/>B&amp;W </label>";
    ObjString += "<label for='Gray'><input type='radio' id='Gray' name='PixelType'/>Gray</label>";
    ObjString += "<label for='RGB'><input type='radio' id='RGB' name='PixelType'/>Color</label></li>";
    ObjString += "<li style='padding-left:15px;'>";
    ObjString += "<label for='Resolution'>Resolution:<select size='1' id='Resolution'><option value = ''></option></select></label></li>";
    ObjString += "</ul>";
    ObjString += "<ul id='divWebcamType' style='display:none; height:100px; background:#f0f0f0;'>";
    ObjString += "<li style='padding-left:12px;'>";
    ObjString += "<label for = 'ShowUIForWebcam'><input type='checkbox' id='ShowUIForWebcam' />Show UI&nbsp;</label></li>";
    ObjString += "<li style='padding-left:15px;'>";
    ObjString += "<label for='MediaType'>Media Type:<select size='1' id='MediaType'><option value = ''></option></select></label></li>";
    ObjString += "<li style='padding-left:15px;'>";
    ObjString += "<label for='Resolution'>Resolution:&nbsp;<select size='1' id='ResolutionWebcam'><option value = ''></option></select></label></li>";
    ObjString += "</ul>";
    document.getElementById("divProductDetail").innerHTML = ObjString;
}

function ShowMessage() {
}

function InitUpgrade() {
}

function InitiateInputs() {
    var allinputs = document.getElementsByTagName("input");
    for (var i = 0; i < allinputs.length; i++) {
        if (allinputs[i].type == "checkbox") {
            allinputs[i].checked = false;
        }
        else if (allinputs[i].type == "text") {
            allinputs[i].value = "";
        }
    }
    document.getElementById("Gray").checked = true;
    document.getElementById("imgTypejpeg2").checked = true;
    document.getElementById("imgTypejpeg").checked = true;
    
    if (!DW_InWindows) {
        document.getElementById("btnEditor").style.display = "none";
        document.getElementById("tblLoadImage").style.height = "170";
        document.getElementById("notformac1").style.display = "none";
    }
}

function OnchangeInner() {
    var iSelectedIndex = document.getElementById(DW_DWTSourceContainerID).selectedIndex;
    if (iSelectedIndex < 0) {
        DWObject.CloseSource();
        document.getElementById("MediaType").length = 0;
        document.getElementById("ResolutionWebcam").length = 0;
        return;
    }

    var iTwainType = DWObject.GetSourceType(iSelectedIndex);
    if(iTwainType == 0)
    {
       document.getElementById("divTwainType").style.display = "";
       document.getElementById("btnScan").value = "Scan";
       document.getElementById("divWebcamType").style.display = "none" ;
    }
    else
    {
        document.getElementById("divTwainType").style.display = "none";
        document.getElementById("divWebcamType").style.display = "" ;
        document.getElementById("btnScan").value = "Grab";
       
        DWObject.SelectSourceByIndex(document.getElementById(DW_DWTSourceContainerID).selectedIndex);
                  
        DWObject.OpenSource();
        var MediaType = document.getElementById("MediaType");
        MediaType.options.length = 0;
        var count = DWObject.MediaTypeListCount;
        var i;
        var value;
        for (i = 0; i < count; i++) {
            value = DWObject.GetMediaTypeByIndex(i);
            MediaType.options.add(new Option(value, value));
        }

        var ResolutionWebcam = document.getElementById("ResolutionWebcam");
        ResolutionWebcam.options.length = 0;
        count = DWObject.ResolutionForCamListCount;
        for (i = 0; i < count; i++) {
            value = DWObject.GetResolutionForCamByIndex(i);
            ResolutionWebcam.options.add(new Option(value, value));
        }
    }
}

function ControlInit() {
    Resolution = document.getElementById("Resolution");
    Resolution.options.length = 0;
    Resolution.options.add(new Option("100", 100));
    Resolution.options.add(new Option("150", 150));
    Resolution.options.add(new Option("200", 200));
    Resolution.options.add(new Option("300", 300));
    
    document.getElementById("ADF").checked = true;
}



function AcquireImageInner(){
    if (DW_DWTSourceContainerID == "")
        DWObject.SelectSource();
    else
        DWObject.SelectSourceByIndex(document.getElementById(DW_DWTSourceContainerID).selectedIndex);
    DWObject.CloseSource();
    DWObject.OpenSource();
    var iSelectedIndex = document.getElementById(DW_DWTSourceContainerID).selectedIndex;
    var iTwainType = DWObject.GetSourceType(iSelectedIndex);
    
    if(iTwainType == 0)
    {
        DWObject.IfShowUI = document.getElementById("ShowUI").checked;

        var i;
        for(i=0;i<3;i++)
        {
            if(document.getElementsByName("PixelType").item(i).checked==true)
            DWObject.PixelType = i;
        }  
        DWObject.Resolution = Resolution.value;
        DWObject.IfFeederEnabled = document.getElementById("ADF").checked ;
        DWObject.IfDuplexEnabled = document.getElementById("Duplex").checked ;
        AppendMessage("Pixel Type: " + DWObject.PixelType + "<br />Resolution: " + DWObject.Resolution + "<br />");
    }
    else
    {
        DWObject.IfShowUI = document.getElementById("ShowUIForWebcam").checked;
        
        DWObject.SelectMediaTypeByIndex(document.getElementById("MediaType").selectedIndex);
        DWObject.SelectResolutionForCamByIndex(document.getElementById("ResolutionWebcam").selectedIndex);

        AppendMessage("MediaType: " + DWObject.MediaType + "<br />Resolution: " + DWObject.ResolutionForCam + "<br />");  
    }
    DWObject.IfDisableSourceAfterAcquire = true;
    DWObject.AcquireImage();
}

function ShowtblLoadImage_onclick() {
    switch (document.getElementById("tblLoadImage").style.visibility) {
        case "hidden": document.getElementById("tblLoadImage").style.visibility = "visible";
            document.getElementById("Resolution").style.visibility = "hidden";
            document.getElementById("MediaType").style.visibility = "hidden";
            document.getElementById("ResolutionWebcam").style.visibility = "hidden";
            break;
        case "visible":     
            document.getElementById("tblLoadImage").style.visibility = "hidden";
            document.getElementById("Resolution").style.visibility = "visible";
            document.getElementById("MediaType").style.visibility = "visible";
            document.getElementById("ResolutionWebcam").style.visibility = "visible";
            break;
        default: break;
    }
    document.getElementById("tblLoadImage").style.top = ds_gettop(document.getElementById("pNoScanner")) + pNoScanner.offsetHeight + "px";
    document.getElementById("tblLoadImage").style.left = ds_getleft(document.getElementById("pNoScanner")) + 0 + "px";
    return false;
}
function ClosetblLoadImage_onclick() {
    document.getElementById("tblLoadImage").style.visibility = "hidden";
    document.getElementById("Resolution").style.visibility = "visible";
    document.getElementById("MediaType").style.visibility = "visible";
    document.getElementById("ResolutionWebcam").style.visibility = "visible";
    return false;
}


*/


var DW_ProductName = "Dynamic Web TWAIN";
var DW_ObjectName = "DynamicWebTWAINObject";
var DW_IsTrial = true;     // If this is a trial version. User can change it.
var DW_VersionCode = "9,0"; // The version of DWT. ActiveX will use this to determin if it is necessary to upgrade the client. Use ',' to separate the numbers. 
var DW_Version = "9.0"; 
var DW_Width = 580;        // The width of the main control. User can change it.
var DW_Height = 600;       // The width of the main control. User can change it.
var DW_LPKPath = "Resources/DynamicWebTwain.lpk";     // The relative path of the LPK file. User can change it.
var DW_PKGPath = "Resources/DynamicWebTWAINMacEditionTrial.pkg";     //The relative path of the PKG file. User need to change it.
var DW_MSIPath = "Resources/DynamicWebTWAINPlugIn.msi";         //The relative path of the MSI file. User need to change it.
var DW_CABX86Path = "Resources/DynamicWebTWAIN.cab";         //The relative path of the x86 cab file. User need to change it.
var DW_CABX64Path = "Resources/DynamicWebTWAINx64.cab";      //The relative path of the x64 cab file. User need to change it.
var DW_MIMETYPE = "Application/DynamicWebTwain-Plugin";
var DW_PROCLASSID = "5220cb21-c88d-11cf-b347-00aa00a28331";  
var DW_FULLCLASSID = "E7DA7F8D-27AB-4EE9-8FC0-3FEC9ECFE758"; 
var DW_TRAILCLASSID = "FFC6F181-A5CF-4ec4-A441-093D7134FBF2";    
var DW_DemoPath = "http://www.dynamsoft.com/demo/DWT/";
var DW_DefaultSaveImageName = "WebTWAINImage";
var DW_NoDrivers = "No TWAIN compatible drivers detected:";

function InitContrlDetail() {
    var ObjString = "<ul id='divTwainType' style='height:70px; background:#f0f0f0;'> ";
    ObjString += "<li style='padding-left:12px;'>";
    ObjString += "<label for = 'ShowUI'><input type='checkbox' id='ShowUI' />Show UI&nbsp;</label>";
    ObjString += "<label for = 'ADF'><input type='checkbox' id='ADF' />ADF&nbsp;</label>";
    ObjString += "<label for = 'Duplex'><input type='checkbox' id='Duplex'/>Duplex</label></li>";
    ObjString += "<li style='padding-left:15px;'>Pixel Type:";
    ObjString += "<label for='BW'><input type='radio' id='BW' name='PixelType'/>B&amp;W </label>";
    ObjString += "<label for='Gray'><input type='radio' id='Gray' name='PixelType'/>Gray</label>";
    ObjString += "<label for='RGB'><input type='radio' id='RGB' name='PixelType'/>Color</label></li>";
    ObjString += "<li style='padding-left:15px;'>";
    ObjString += "<label for='Resolution'>Resolution:<select size='1' id='Resolution'><option value = ''></option></select></label></li>";
    ObjString += "</ul>";
    document.getElementById("divProductDetail").innerHTML = ObjString;
}

function ShowMessage() {
}

function InitUpgrade() {
     var MessageBody = document.getElementById("divUpgrade");
    if (MessageBody)
    {       
        var ObjString = "<div>";
        ObjString += "<a href='http://www.dynamsoft.com/Products/Upgrade-Web-TWAIN-to-Image-Capture-SDK.aspx'>How to upgrade from Dynamic Web TWAIN to ImageCapture Suite?";
		ObjString += "</a>";
		ObjString += "</div>";

        MessageBody.innerHTML = ObjString;
    }
}

function InitiateInputs() {
    var allinputs = document.getElementsByTagName("input");
    for (var i = 0; i < allinputs.length; i++) {
        if (allinputs[i].type == "checkbox") {
            allinputs[i].checked = false;
        }
        else if (allinputs[i].type == "text") {
            allinputs[i].value = "";
        }
    }
    document.getElementById("Gray").checked = true;
    document.getElementById("imgTypejpeg2").checked = true;
    document.getElementById("imgTypejpeg").checked = true;
    
    if (!DW_InWindows) {
        document.getElementById("btnEditor").style.display = "none";
        document.getElementById("tblLoadImage").style.height = "170";
        document.getElementById("notformac1").style.display = "none";
    }
}

function OnchangeInner() {
    document.getElementById("divTwainType").style.display = "";
    document.getElementById("btnScan").value = "Scan";
}

function ControlInit() {
    Resolution = document.getElementById("Resolution");
    Resolution.options.length = 0;
    Resolution.options.add(new Option("100", 100));
    Resolution.options.add(new Option("150", 150));
    Resolution.options.add(new Option("200", 200));
    Resolution.options.add(new Option("300", 300));
    
    document.getElementById("ADF").checked = true;
}


function AcquireImageInner() {
    if (DW_DWTSourceContainerID == "")
        DWObject.SelectSource();
    else
        DWObject.SelectSourceByIndex(document.getElementById(DW_DWTSourceContainerID).selectedIndex);
    DWObject.CloseSource();
    DWObject.OpenSource();
    DWObject.IfShowUI = document.getElementById("ShowUI").checked;

    var i;
    for (i = 0; i < 3; i++) {
        if (document.getElementsByName("PixelType").item(i).checked == true)
            DWObject.PixelType = i;
    }
    DWObject.Resolution = Resolution.value;
    DWObject.IfFeederEnabled = document.getElementById("ADF").checked;
    DWObject.IfDuplexEnabled = document.getElementById("Duplex").checked;
    AppendMessage("Pixel Type: " + DWObject.PixelType + "<br />Resolution: " + DWObject.Resolution + "<br />");

    DWObject.IfDisableSourceAfterAcquire = true;
    DWObject.AcquireImage();
}

function ShowtblLoadImage_onclick() {
    switch (document.getElementById("tblLoadImage").style.visibility) {
        case "hidden": document.getElementById("tblLoadImage").style.visibility = "visible";
            document.getElementById("Resolution").style.visibility = "hidden";
            break;
        case "visible":
            document.getElementById("tblLoadImage").style.visibility = "hidden";
            document.getElementById("Resolution").style.visibility = "visible";
            break;
        default: break;
    }
    document.getElementById("tblLoadImage").style.top = ds_gettop(document.getElementById("pNoScanner")) + pNoScanner.offsetHeight + "px";
    document.getElementById("tblLoadImage").style.left = ds_getleft(document.getElementById("pNoScanner")) + 0 + "px";
    return false;
}
function ClosetblLoadImage_onclick() {
    document.getElementById("tblLoadImage").style.visibility = "hidden";
    document.getElementById("Resolution").style.visibility = "visible";
    return false;
}


var dlgScanDetail;
function ShowtblCanNotScan_onclick() {

    document.getElementById("InstallBody").innerHTML = DW_CanNotScanDetail;

    var iframeWin = document.createElement("iframe");
    iframeWin.id = "ProgressBarIframe";
    iframeWin.style.cssText = "position:absolute;top:0;left:0px;width:" + DW_Width + "px;height:" + DW_Height + "px;filter:alpha(opacity=0);opacity:0;-moz-opacity:0;z-index:19;";
    iframeWin.src = "javascript:false";
    document.getElementById(DW_DWTContainerID).appendChild(iframeWin);

    for (var i = 0; i < document.links.length; i++) {
        if (document.links[i].className == "ClosetblCanNotScan") {
            document.links[i].onclick = ClosetblCanNotScan_onclick;
        }
    }

    var logo = S.one('#divLogo');
    if (logo) {
        var vComm100 = S.one('#linkComm100');
        if (vComm100)
            vComm100.appendTo(logo);
    }

    S.use("overlay", function(S, o) {

        dlgScanDetail = new o.Dialog({
            srcNode: "#J_waiting",
            width: 422,
            height: DW_CanNotScanDialogHeigth,
            closable: false,
            mask: true,
            align: {
                points: ['cc', 'cc']
            }
        });
        dlgScanDetail.show();
    });
}

function ClosetblCanNotScan_onclick() {
    if (dlgScanDetail) {
        dlgScanDetail.hide();
    }

    var iframeWin = document.getElementById("ProgressBarIframe");
    if (iframeWin)
        document.getElementById(DW_DWTContainerID).removeChild(iframeWin);
    
    var logo = S.one('#divLiveChat');
    if (logo) {
        var vComm100 = S.one('#linkComm100');
        if (vComm100)
            vComm100.appendTo(logo);
    }
}



/*
var DW_ProductName = "Dynamic Webcam SDK";
var DW_ObjectName = "DynamicWebcamObject";
var DW_IsTrial = true;     // If this is a trial version. User can change it.
var DW_VersionCode = "8,0"; // The version of ICS. ActiveX will use this to determin if it is necessary to upgrade the client. Use ',' to separate the numbers. 
var DW_Version = "8.0"; 
var DW_Width = 580;        // The width of the main control. User can change it.
var DW_Height = 600;       // The width of the main control. User can change it.
var DW_LPKPath = "Resources/DynamicWebcam.lpk";     // The relative path of the LPK file. User can change it.
var DW_PKGPath = "";
var DW_MSIPath = "Resources/DynamicWebcamPlugIn.msi";         //The relative path of the MSI file. User need to change it.
var DW_CABX86Path = "Resources/DynamicWebcam.cab";          //The relative path of the x86 cab file. User need to change it.
var DW_CABX64Path = "Resources/DynamicWebcamx64.cab";      //The relative path of the x64 cab file. User need to change it.
var DW_MIMETYPE = "Application/DynamicWebcam-Plugin";
var DW_PROCLASSID = "5220cb21-c88d-11cf-b347-00aa00a28331";  
var DW_FULLCLASSID = "D5DD8865-F46B-41c4-98F3-6990A6AD97F5";
var DW_TRAILCLASSID = "A65BC1E1-B2CE-4251-A0CB-721AC7E02B52";
var DW_DemoPath = "";//"http://www.dynamsoft.com/demo/DWT/";
var DW_DefaultSaveImageName = "WebcamImage";
var DW_NoDrivers = "No webcams or TWAIN compatible drivers detected:";

function InitContrlDetail() {
    var ObjString = "<ul id='divWebcamType' style='height:70px; background:#f0f0f0;'>";
    ObjString += "<li style='padding-left:12px;'>";
    ObjString += "<label for = 'ShowUIForWebcam'><input type='checkbox' id='ShowUIForWebcam' />Show UI&nbsp;</label></li>";
    ObjString += "<li style='padding-left:15px;'>";
    ObjString += "<label for='MediaType'>Media Type:<select size='1' id='MediaType'><option value = ''></option></select></label></li>";
    ObjString += "<li style='padding-left:15px;'>";
    ObjString += "<label for='Resolution'>Resolution:&nbsp;<select size='1' id='ResolutionWebcam'><option value = ''></option></select></label></li>";
    ObjString += "</ul>";
    document.getElementById("divProductDetail").innerHTML = ObjString;
}

function ShowMessage() {

    $(function() {
        $('#message').fadeIn('slow');
        $('#message a.close-notify').click(function() {
            $('#message').fadeOut('slow');
            return false;
        });
    });
}

function InitUpgrade() {
    var ObjString = "<a target='_blank' href='http://www.dynamsoft.com/Products/Upgrade-Web-TWAIN-to-Image-Capture-SDK.aspx'><span>How to upgrade from Dynamic Web TWAIN to ImageCapture Suite.</span></a> <a href='#' class='close-notify'>X</a>";
    document.getElementById("MessageBody").innerHTML = ObjString;
}

function InitiateInputs() {
    var allinputs = document.getElementsByTagName("input");
    for (var i = 0; i < allinputs.length; i++) {
        if (allinputs[i].type == "checkbox") {
            allinputs[i].checked = false;
        }
        else if (allinputs[i].type == "text") {
            allinputs[i].value = "";
        }
    }
    
    document.getElementById("imgTypejpeg2").checked = true;
    document.getElementById("imgTypejpeg").checked = true;

    if (!DW_InWindows) {
        document.getElementById("btnEditor").style.display = "none";
        document.getElementById("tblLoadImage").style.height = "170";
        document.getElementById("notformac1").style.display = "none";
    }
}

function OnchangeInner() {
        var iSelectedIndex = document.getElementById(DW_DWTSourceContainerID).selectedIndex;
        if (iSelectedIndex < 0) {
        DWObject.CloseSource();
        document.getElementById("MediaType").length = 0;
        document.getElementById("ResolutionWebcam").length = 0;
        return;
    }

    document.getElementById("btnScan").value = "Grab";
           
    DWObject.SelectSourceByIndex(document.getElementById(DW_DWTSourceContainerID).selectedIndex);
                      
    DWObject.OpenSource();
    var MediaType = document.getElementById("MediaType");
    MediaType.options.length = 0;
    var count = DWObject.MediaTypeListCount;
    var i;
    var value;
    for (i = 0; i < count; i++) {
        value = DWObject.GetMediaTypeByIndex(i);
        MediaType.options.add(new Option(value, value));
    }

    var ResolutionWebcam = document.getElementById("ResolutionWebcam");
    ResolutionWebcam.options.length = 0;
    count = DWObject.ResolutionForCamListCount;
    for (i = 0; i < count; i++) {
        value = DWObject.GetResolutionForCamByIndex(i);
        ResolutionWebcam.options.add(new Option(value, value));
    }
}

function ControlInit() {

}


function AcquireImageInner(){
    if (DW_DWTSourceContainerID == "")
    DWObject.SelectSource();
    else
    DWObject.SelectSourceByIndex(document.getElementById(DW_DWTSourceContainerID).selectedIndex);
    DWObject.CloseSource();
    DWObject.OpenSource();
    DWObject.IfShowUI = document.getElementById("ShowUIForWebcam").checked;
            
    DWObject.SelectMediaTypeByIndex(document.getElementById("MediaType").selectedIndex);
    DWObject.SelectResolutionForCamByIndex(document.getElementById("ResolutionWebcam").selectedIndex);

    AppendMessage("MediaType: " + DWObject.MediaType + "<br />Resolution: " + DWObject.ResolutionForCam + "<br />");  

    DWObject.IfDisableSourceAfterAcquire = true;
    DWObject.AcquireImage();
}

function ShowtblLoadImage_onclick() {
    switch (document.getElementById("tblLoadImage").style.visibility) {
        case "hidden": document.getElementById("tblLoadImage").style.visibility = "visible";
            document.getElementById("MediaType").style.visibility = "hidden";
            document.getElementById("ResolutionWebcam").style.visibility = "hidden";
            break;
        case "visible":     
            document.getElementById("tblLoadImage").style.visibility = "hidden";
            document.getElementById("MediaType").style.visibility = "visible";
            document.getElementById("ResolutionWebcam").style.visibility = "visible";
            break;
        default: break;
    }
    document.getElementById("tblLoadImage").style.top = ds_gettop(document.getElementById("pNoScanner")) + pNoScanner.offsetHeight + "px";
    document.getElementById("tblLoadImage").style.left = ds_getleft(document.getElementById("pNoScanner")) + 0 + "px";
    return false;
}
function ClosetblLoadImage_onclick() {
    document.getElementById("tblLoadImage").style.visibility = "hidden";
    document.getElementById("MediaType").style.visibility = "visible";
    document.getElementById("ResolutionWebcam").style.visibility = "visible";
    return false;
}*/

