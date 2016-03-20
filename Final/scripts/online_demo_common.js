
//Upload
var DW_ServerName = location.hostname; //Demo: "www.dynamsoft.com";
var DW_strPort = location.port == "" ? 80 : location.port; //Demo: 80;

//Online Demo
var DW_ActionPage = "SaveToFile.php";
var DW_DynamsoftInner = "<div style='height:40px;width:350px;position:relative;'><span style='height:40px;'><a href=\"http://www.dynamsoft.com/\" style='padding-right:60px'><img src=\"Images/logo.gif\" alt=\"Dynamsoft: provider of version control solution and TWAIN SDK\" name=\"logo\" width=\"159\" height=\"34\" border=\"0\" align=\"left\" id=\"logo\" title=\"Dynamsoft: provider of version control solution and TWAIN SDK\" /></a></span><div id='divLogo' style='height:30px;padding-left:48px; position:absolute; top:-5px; left:180px;'></div>";
var DW_Dynamsoft = DW_DynamsoftInner + "</div>";
var DW_DynamsoftWithClose = DW_DynamsoftInner + "<div style='height:30px;padding-left:48px; position:absolute; top:-5px; left:100px;'><a href='javascript: void(0)' style='text-decoration:none; padding-left:230px' class='ClosetblCanNotScan'>X</a></div></div>";
var DW_DynamsoftWithCloseForInstall = DW_DynamsoftInner + "<div style='height:30px;padding-left:48px; position:absolute; top:-5px; left:100px;'><a href='javascript: void(0)' style='text-decoration:none; padding-left:200px' class='ClosetblCanNotScan'>X</a></div></div>";
var DW_CanNotScanDetail = "<div class=\"D-dailog-body-Scan\" style=\"width:380px\">" + DW_DynamsoftWithClose + "<div class=\"box_title_scan\">Fail to use your scanner on the demo? Please try:</div><ul>"
+ "<li><div class=\"box_scan_subtitle\">Add the website to the zone of trusted sites.</div><div class=\"box_scan_detail\">IE | Tools | Internet Options | Security | Trusted Sites.</div></li>"
+ "<li><div class=\"box_scan_subtitle\">Turn Protected Mode off. </div><div class=\"box_scan_detail\">To turn off the protected mode of IE, you can go to Tools | Internet Options | Security and uncheck \"Enable Protected Mode(requires restarting Internet Explorer)\" option.</div></li>"
+ "<li><div class=\"box_scan_subtitle\">If the issue persists, please contact us at live chat. </div><div class=\"box_scan_detail\">You can click the \"LIVE CHAT\" button on the top right corner. Or you can send an email to TWAINsupport@dynamsoft.com</div></li>"
+"</ul></div>";
var DW_CanNotScanDialogHeigth = 282;

//Sample
/*var DW_ActionPage = "SaveToFile.aspx";
var DW_Dynamsoft = "<div style='height:40px'><a href=\"http://www.dynamsoft.com/\" style='padding-right:60px'><img src=\"Images/logo.gif\" alt=\"Dynamsoft: provider of version control solution and TWAIN SDK\" name=\"logo\" width=\"159\" height=\"34\" border=\"0\" align=\"left\" id=\"logo\" title=\"Dynamsoft: provider of version control solution and TWAIN SDK\" /></a></div>";
var DW_DynamsoftWithClose = "<div style='height:40px'><a href=\"http://www.dynamsoft.com/\" style='padding-right:60px'><img src=\"Images/logo.gif\" alt=\"Dynamsoft: provider of version control solution and TWAIN SDK\" name=\"logo\" width=\"159\" height=\"34\" border=\"0\" align=\"left\" id=\"logo\" title=\"Dynamsoft: provider of version control solution and TWAIN SDK\" /></a><div style='height:30px;padding-left:48px; position:absolute; top:5px; left:110px'><a href='javascript: void(0)' style='text-decoration:none; padding-left:230px' class='ClosetblCanNotScan'>X</a></div></div>";

var DW_CanNotScanDetail = "<div class=\"D-dailog-body-Scan-sample\" style=\"width:380px\">" + DW_DynamsoftWithClose + "<div class=\"box_title_scan\">Fail to use your scanner on the demo? Please try:</div><ul>"
    + "<li><div class=\"box_scan_subtitle\">Add the website to the zone of trusted sites.</div><div class=\"box_scan_detail\">IE | Tools | Internet Options | Security | Trusted Sites.</div></li>"
    + "<li><div class=\"box_scan_subtitle\">Turn Protected Mode off. </div><div class=\"box_scan_detail\">To turn off the protected mode of IE, you can go to Tools | Internet Options | Security and uncheck \"Enable Protected Mode(requires restarting Internet Explorer)\" option.</div></li>"
    + "</ul></div>";
var DW_CanNotScanDialogHeigth = 242;

*/
function DW_PageonloadInner() {
    // Get User Agent Value
    ua = (navigator.userAgent.toLowerCase());
    if (ua.indexOf("wow64") == -1) {
        var samplesource32bitCtr = document.getElementById("samplesource32bit");
        if (samplesource32bitCtr)
            samplesource32bitCtr.href = "http://www.dynamsoft.com/demo/DWT/Sources/twainkit.exe";
    }

    // Set the Explorer Type
    if (ua.indexOf("msie") != -1)
        DW_InIE = true;
    else
        DW_InIE = false;

    // Set the Operating System Type
    if (ua.indexOf("macintosh") != -1)
        DW_InWindows = false;
    else
        DW_InWindows = true;

    // Set the x86 and x64 type
    if (ua.indexOf("win64") != -1 && ua.indexOf("x64") != -1)
        DW_InWindowsX86 = false;
    else
        DW_InWindowsX86 = true;

    var varShowDetail = document.getElementById("showDetail");
    if (varShowDetail && DW_InIE == true) {
        varShowDetail.style.display = "";
    }
}


function DW_CreateControl(bNeebBack) {
    var objString = "";
    var DWTContainer;

    // For IE, render the ActiveX Object
    if (DW_InIE) {
        objString = "<object classid='clsid:" + DW_PROCLASSID + "' style='display:none;'><param name='LPKPath' value='" + DW_LPKPath + "'/></object>";
        objString += "<object id='" + DW_ObjectName + "' style='width:" + DW_Width + "px;height:" + DW_Height + "px'";

        if (DW_InWindowsX86)
            objString += "codebase='" + DW_CABX86Path + "#version=" + DW_VersionCode + "' ";
        else
            objString += "codebase='" + DW_CABX64Path + "#version=" + DW_VersionCode + "' ";

        var temp = DW_IsTrial ? DW_TRAILCLASSID : DW_FULLCLASSID;
        objString += " classid='clsid:" + temp + "' viewastext>";
        objString += " <param name='Manufacturer' value='DynamSoft Corporation' />";
        objString += " <param name='ProductFamily' value='" + DW_ProductName + "' />";
        objString += " <param name='ProductName' value='" + DW_ProductName + "' />";
        //objString += " <param name='wmode' value='transparent'/>  ";
        objString += " </object>";
    }   
    // For non-IE, render the embed object
    else {
        objString = " <embed id='" + DW_ObjectName + "'style='display: inline; width:" + DW_Width + "px;height:" + DW_Height + "px' id='" + DW_ObjectName + "' type='" + DW_MIMETYPE + "'";
        objString += " OnPostTransfer='Dynamsoft_OnPostTransfer' OnPostAllTransfers='Dynamsoft_OnPostAllTransfers'";
        objString += " OnMouseClick='Dynamsoft_OnMouseClick'  OnPostLoad='Dynamsoft_OnPostLoadfunction'";
        objString += " OnImageAreaSelected = 'Dynamsoft_OnImageAreaSelected'";
        objString += " OnImageAreaDeSelected = 'Dynamsoft_OnImageAreaDeselected'";
        objString += " OnMouseDoubleClick = 'Dynamsoft_OnMouseDoubleClick'";
        objString += " OnMouseRightClick = 'Dynamsoft_OnMouseRightClick'";
        objString += " OnTopImageInTheViewChanged = 'Dynamsoft_OnTopImageInTheViewChanged'";
        if (DW_InWindows)
            objString += " pluginspage='" + DW_MSIPath + "'></embed>";
        else
            objString += " pluginspage='" + DW_PKGPath + "'></embed>";
    }

    // The container for navigator, view mode and remove button
    objString += "<div style='text-align:center; width:" + DW_Width + "px; background-color:#FFFFFF;";
    if (DW_IfShowNavigatorPanel)
        objString += "display:block'>";
    else
        objString += "display:none'>";
    objString += "<div style='position:relative; background:white; float:left; width:430px; height:35px; z-index:2;'>";
    objString += "<input id='DW_btnFirstImage' onclick='DW_btnFirstImage_onclick()' type='button' value=' |&lt; '/>&nbsp;";
    objString += "<input id='DW_btnPreImage' onclick='DW_btnPreImage_onclick()' type='button' value=' &lt; '/>&nbsp;&nbsp;";
    objString += "<input type='text' size='2' id='DW_CurrentImage' readonly='readonly'/>/";
    objString += "<input type='text' size='2' id='DW_TotalImage' readonly='readonly'/>&nbsp;&nbsp;";
    objString += "<input id='DW_btnNextImage' onclick='DW_btnNextImage_onclick()' type='button' value=' &gt; '/>&nbsp;";
    objString += "<input id='DW_btnLastImage' onclick='DW_btnLastImage_onclick()' type='button' value=' &gt;| '/></div>";
    objString += "<div style='position:relative; background:white; float:left; width:150px; height:35px;z-index:2;'>Preview Mode";
    objString += "<select size='1' id='DW_PreviewMode' onchange ='DW_slPreviewMode();'>";
    objString += "    <option value='0'>1X1</option>";
    objString += "</select><br /></div>";
    objString += "<div style='position:relative;'><input id='DW_btnRemoveCurrentImage' onclick='DW_btnRemoveCurrentImage_onclick()' type='button' value='Remove Selected Images'/>";
    if (bNeebBack) {
        objString += "<input id='DW_btnRemoveAllImages' onclick='DW_btnRemoveAllImages_onclick()' type='button' value='Remove All Images'/><br /><br />";
        objString += "<span style=\"font-size:larger\"><a href =\"online_demo_list.aspx\"><b>Back</b></a></span><br /></div>";
    }
    else
        objString += "<input id='DW_btnRemoveAllImages' onclick='DW_btnRemoveAllImages_onclick()' type='button' value='Remove All Images'/><br /></div>";
    objString += "</div>";

    // The container for the error message
    objString += "<div id='DWTdivMsg' style='width:" + DW_Width + "px;";
    if (DW_IfShowMessagePanel)
        objString += "display:inline'>";
    else
        objString += "display:none'>";
    objString += "Message:<br />"
    objString += "<div id='DWTemessage' style='width:" + DW_Width + "px;height:80px; overflow:scroll; background-color:#ffffff; border:1px #303030; border-style:solid; text-align:left; position:relative' >";
    objString += "</div></div>";

    DWTContainer = document.getElementById(DW_DWTContainerID);
    DWTContainer.innerHTML = objString;
    DWObject = document.getElementById(DW_ObjectName);
}

function DW_Pause() {
    clearInterval(DW_Seed);
}

function DW_Upgrade() {

    if (!IsLatest(DW_Version)) {
        ua = (navigator.userAgent.toLowerCase());
        if (!DW_InWindows) {
            if (confirm("A new version of " + DW_ProductName + " is available.\r \nDo you want to upgrade now?")) {
                var varHref = "";
                if (location.hostname != "")
                    varHref = "http://" + location.host + location.pathname.substring(0, location.pathname.lastIndexOf('/')) + "/" + DW_PKGPath;
                else
                    varHref = DW_PKGPath;
                window.location = varHref;
            }
            DWObject.style.display = "inline";
        }
        else if (ua.match(/chrome\/([\d.]+)/) || ua.match(/opera.([\d.]+)/) || ua.match(/version\/([\d.]+).*safari/) || ua.match(/firefox\/([\d.]+)/)) {
            if (confirm("A new version of " + DW_ProductName + " is available.\r \nDo you want to upgrade now?")) {
                var varHref = "";
                if (location.hostname != "")
                    varHref = "http://" + location.host + location.pathname.substring(0, location.pathname.lastIndexOf('/')) + "/" + DW_MSIPath;
                else
                    varHref = DW_MSIPath;
                window.location = varHref;
            }
            DWObject.style.display = "inline";
        }
    }
}

var dlgInstall;
function DW_NoControl() {

    ua = (navigator.userAgent.toLowerCase());
    // For mac, create the message to tell the user to install the plugin.
    if (!DW_InWindows) {
        DW_CreateNonInstallDivMac();

        // Display the message and hide the main control
        document.getElementById(DW_DWTNonInstallContainerID).style.display = "inline";
        document.getElementById(DW_DWTContainerID).style.display = "none";

        var logo = S.one('#divLogo');
        if (logo) {
            var vComm100 = S.one('#linkComm100');
            if (vComm100)
                vComm100.appendTo(logo);
        }

        S.use("overlay", function(S, o) {

            dlgInstall = new o.Dialog({
                srcNode: "#J_waiting",
                width: 392,
                height: 287,
                closable: false,
                mask: true,
                align: {
                    points: ['cc', 'cc']
                }
            });
            dlgInstall.show();
        });
    }
    // For other browsers on Windows, create the message to tell the user to install the plugin.
    else if (ua.match(/chrome\/([\d.]+)/) || ua.match(/opera.([\d.]+)/) || ua.match(/version\/([\d.]+).*safari/) || ua.match(/firefox\/([\d.]+)/)) {
        DW_CreateNonInstallDivPlugin();

        // Display the message and hide the main control
        document.getElementById(DW_DWTNonInstallContainerID).style.display = "inline";
        document.getElementById(DW_DWTContainerID).style.display = "none";

        var divBlankCtrl = document.getElementById("divBlank");
        if (divBlankCtrl)
            divBlankCtrl.style.display = "inline";

        var logo = S.one('#divLogo');
        if (logo) {
            var vComm100 = S.one('#linkComm100');
            if (vComm100)
                vComm100.appendTo(logo);
        }

        S.use("overlay", function(S, o) {

            dlgInstall = new o.Dialog({
                srcNode: "#J_waiting",
                width: 392,
                height: 242,
                closable: false,
                mask: true,
                align: {
                    points: ['cc', 'cc']
                }
            });
            dlgInstall.show();
        });
    }
}

function IsLatest(latest) {
    current = DWObject.VersionInfo.toLowerCase().replace(DW_ProductName.toLowerCase() + " ", "");
    currentArray = current.split(".");
    latestArray = latest.split(".");

    index = currentArray.length > latestArray.length ? currentArray.length : latestArray.length;
    for (var i = 0; i < index; i++) {
        if (currentArray[i] == null)
            currentArray[i] = 0;
        if (latestArray[i] == null)
            latestArray[i] = 0;

        else if (currentArray[i] < latestArray[i])
            return false;
    }
    return true;
}



function DW_CreateNonInstallDivPlugin() {

    var varHref = "";
    if (location.hostname != "")
        varHref = "http://" + location.host + location.pathname.substring(0, location.pathname.lastIndexOf('/')) + "/" + DW_MSIPath;
    else
        varHref = DW_MSIPath;

    var ObjString = "<div class=\"D-dailog-body\" style=\"width:350px\">" + DW_DynamsoftWithCloseForInstall + "<div class=\"box_title\">" + DW_ProductName + " is not installed</div>"
    ObjString += "<ul>";
    ObjString += "<li>You need to download and install the plug-in to use this demo.</li>";
    ObjString += "<li>Please click the below button, and follow the installation.</li>";
    ObjString += "</ul>";
    ObjString += "<p class=\"red\">If you still see this dialog after the installation, please RESTART your browser.</p>";
    ObjString += "<a id='btnInstall' href='" + varHref + "' onclick='OnClickInstallButton()'><div class=\"button\"></div></a>";
     ObjString += "<P id='txtDetect' style='display:none;'>Detecting component...</p>";
     ObjString += "<img id='imgWait' src='Images/wait.gif' style='display:none;margin-left:50px;'/></div>";

    document.getElementById("InstallBody").innerHTML = ObjString;
}


function OnClickInstallButton()
{
    document.getElementById("btnInstall").style.display = "none";
    document.getElementById("txtDetect").style.display = "";
    document.getElementById("imgWait").style.display = "";   
}


function DW_CreateNonInstallDivMac() {

    var varHref = "";
    if (location.hostname != "")
        varHref = "http://" + location.host + location.pathname.substring(0, location.pathname.lastIndexOf('/')) + "/" + DW_PKGPath;
    else
        varHref = DW_PKGPath;

    var ObjString = "<div class=\"D-dailog-body-Mac\" style=\"width:350px\">" + DW_DynamsoftWithCloseForInstall + "<div class=\"box_title\">" + DW_ProductName + " is not installed</div>"
    ObjString += "<ul>";
    ObjString += "<li>You need to download and install the plug-in to use this demo.</li>";
    ObjString += "<li>Please click the below button, and follow the installation.</li>";
    ObjString += "</ul>";
    ObjString += "<p class=\"red\">If you still see this dialog after the installation, please RESTART your browser.</p>";
    ObjString += "If you are using Safari 5.0, you need to <a href='http://kb.dynamsoft.com/questions/666/How+to+run+Safari+5.0+in+32-bit+mode+on+Mac+OS+X'><span class=\"link\">run the browser in 32-bit Mode</span></a>.";
    ObjString += "<a id='btnInstall' href='" + varHref + "' onclick='OnClickInstallButton()'><div class=\"button\"></div></a>";
     ObjString += "<P id='txtDetect' style='display:none;'>Detecting component...</p>";
     ObjString += "<img id='imgWait' src='Images/wait.gif' style='display:none;margin-left:50px;'/></div>";
    document.getElementById("InstallBody").innerHTML = ObjString;
}

//--------------------------------------------------------------------------------------
//************************** Used a lot *****************************
//--------------------------------------------------------------------------------------

function AppendMessage(strMessage) {
    DW_TempStr += strMessage;
    DW_MessageContainer.innerHTML = DW_TempStr;
    DW_MessageContainer.scrollTop = DW_MessageContainer.scrollHeight;
}

function DW_CheckIfImagesInBuffer() {
    if (DWObject.HowManyImagesInBuffer == 0) {
        AppendMessage("There is no image in buffer.<br />")
        return false;
    }
    else
        return true;
}


function DW_CheckErrorString() {
    if (DWObject.ErrorCode == 0) {
        AppendMessage("<span style='color:#cE5E04'><b>" + DWObject.ErrorString + "</b></span><br />");

        return true;
    }
    if (DWObject.ErrorCode == -2115) //Cancel file dialog
        return true;
    else {
        if (DWObject.ErrorCode == -2003) {
            var ErrorMessageWin = window.open("", "ErrorMessage", "height=500,width=750,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
            ErrorMessageWin.document.writeln(DWObject.HTTPPostResponseString);
        }
        AppendMessage("<span style='color:#cE5E04'><b>" + DWObject.ErrorString + "</b></span><br />");
        return false;
    }
}


//--------------------------------------------------------------------------------------
//************************** Navigator functions***********************************
//--------------------------------------------------------------------------------------

function DW_btnFirstImage_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    DWObject.CurrentImageIndexInBuffer = 0;
    DW_UpdatePageInfo();
}

function DW_btnPreImage_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    else if (DWObject.CurrentImageIndexInBuffer == 0) {
        return;
    }
    DWObject.CurrentImageIndexInBuffer = DWObject.CurrentImageIndexInBuffer - 1;
    DW_UpdatePageInfo();
}
function DW_btnNextImage_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    else if (DWObject.CurrentImageIndexInBuffer == DWObject.HowManyImagesInBuffer - 1) {
        return;
    }
    DWObject.CurrentImageIndexInBuffer = DWObject.CurrentImageIndexInBuffer + 1;
    DW_UpdatePageInfo();
}


function DW_btnLastImage_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    DWObject.CurrentImageIndexInBuffer = DWObject.HowManyImagesInBuffer - 1;
    DW_UpdatePageInfo();
}

function DW_btnRemoveCurrentImage_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    DWObject.RemoveAllSelectedImages();
    if (DWObject.HowManyImagesInBuffer == 0) {
        document.getElementById("DW_TotalImage").value = DWObject.HowManyImagesInBuffer;
        document.getElementById("DW_CurrentImage").value = "";
        return;
    }
    else {
        DW_UpdatePageInfo();
    }
}


function DW_btnRemoveAllImages_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    DWObject.RemoveAllImages();
    document.getElementById("DW_TotalImage").value = "0";
    document.getElementById("DW_CurrentImage").value = "";
}
function DW_slPreviewMode() {
    DWObject.SetViewMode(parseInt(document.getElementById("DW_PreviewMode").selectedIndex + 1), parseInt(document.getElementById("DW_PreviewMode").selectedIndex + 1));
    if (!DW_InWindows) {
        return;
    }
    else if (document.getElementById("DW_PreviewMode").selectedIndex != 0) {
        DWObject.MouseShape = true;
    }
    else {
        DWObject.MouseShape = false;
    }
}
function DW_UpdatePageInfo() {
    document.getElementById("DW_TotalImage").value = DWObject.HowManyImagesInBuffer;
    document.getElementById("DW_CurrentImage").value = DWObject.CurrentImageIndexInBuffer + 1;
}


//--------------------------------------------------------------------------------------
//************************** Dynamic Web TWAIN Events***********************************
//--------------------------------------------------------------------------------------

function Dynamsoft_OnPostTransfer() {
    if (DW_DiscardBlankImage) {
        var NewlyScannedImage = DWObject.CurrentImageIndexInBuffer;
        if (DWObject.IsBlankImage(NewlyScannedImage)) {
            DWObject.RemoveImage(NewlyScannedImage);
        }
        DW_TempStr += "<b>Blank Discard (On PostTransfer): </b>";

        if (DW_CheckErrorString()) {
            DW_UpdatePageInfo();
        }
    }
    DW_UpdatePageInfo();
}

function Dynamsoft_OnPostLoadfunction(path, name, type) {
    if (DW_DiscardBlankImage) {
        var NewlyScannedImage = DWObject.CurrentImageIndexInBuffer;
        if (DWObject.IsBlankImage(NewlyScannedImage)) {
            DWObject.RemoveImage(NewlyScannedImage);
        }
        DW_TempStr += "<b>Blank Discard (On PostLoad): </b>";
        if (DW_CheckErrorString()) {
            DW_UpdatePageInfo();
        }
    }
    DW_UpdatePageInfo();
}

function Dynamsoft_OnPostAllTransfers() {
    DWObject.CloseSource();
    DW_UpdatePageInfo();
    DW_CheckErrorString();
}

function Dynamsoft_OnMouseClick(index) {
    DW_UpdatePageInfo();
}

function Dynamsoft_OnMouseRightClick(index) {
    // To add
}


function Dynamsoft_OnImageAreaSelected(index, left, top, right, bottom) {
    iLeft = left;
    iTop = top;
    iRight = right;
    iBottom = bottom;
}

function Dynamsoft_OnImageAreaDeselected(index) {
    iLeft = 0;
    iTop = 0;
    iRight = 0;
    iBottom = 0;
}

function Dynamsoft_OnMouseDoubleClick() {
    return;
}


function Dynamsoft_OnTopImageInTheViewChanged(index) {
    DWObject.CurrentImageIndexInBuffer = index;
    DW_UpdatePageInfo();
}
