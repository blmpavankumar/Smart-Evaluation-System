//--------------------------------------------------------------------------------------
//************************** Don't change these properties *****************************
//--------------------------------------------------------------------------------------
var DWObject;            // The DWT Object
var DW_InIE;               // If it is in IE
var DW_InWindows;          // If it is in Windows OS
var DW_InWindowsX86;       // If it is in X86 platform
var DW_Seed;               // The seed used to detect the control.
var DW_Timeout;            // Used for the timer.
var DW_MessageContainer;   // For message display
var DW_TempStr = "";       // Store the temp string for display

//--------------------------------------------------------------------------------------
//****************** Default value provided. User can change it accordingly ************
//--------------------------------------------------------------------------------------
var DW_DiscardBlankImage = false;  // User can change it.
var DW_IfShowMessagePanel = true;
var DW_IfShowNavigatorPanel = true;
var DW_DWTSourceContainerID = "source";     // The ID of the container (Usually <select>) which is used to show the available sources. User must specify it.
var iLeft, iTop, iRight, iBottom; //These variables are used to remember the selected area
var firstFlag = true;
var pNoScanner, Resolution, PreviewMode, InterpolationMethod, txt_fileNameforSave, txt_fileName, MultiPageTIFF_save, MultiPagePDF_save, MultiPageTIFF, MultiPagePDF;
//--------------------------------------------------------------------------------------
//****************** User must specify it before using DWT *****************************
//--------------------------------------------------------------------------------------
var DW_DWTContainerID = "DWTContainerID"; // The ID of the container (Usually a DIV) which is used to contain DWT object. User must specify it.
var DW_DWTNonInstallContainerID = "DWTNonInstallContainerID" // The ID of the container (Usually a DIV) which is used to show a message if DWT is not installed. User must specify it.

// Assign the page onload fucntion.
function S_get(id) {
    return document.getElementById(id);
}

var S = KISSY, Event = S.Event, Dom = S.DOM;

function DW_Pageonload() {
    DW_PageonloadInner();
    InitContrlDetail();
    InitiateInputs();
    InitUpgrade();
    DW_CreateControl(false);
    
    if(DW_InIE == true && DW_InWindowsX86 == false)
    {
        document.getElementById("samplesource64bit").style.display = "inline";
        document.getElementById("samplesource32bit").style.display = "none";
    }

    // Set interval to check if the control is fully loaded.
    //DW_ControlDetect();

   ShowMessage();
    
    vShowNoControl = false;
    if (!DW_InIE) 
	vPluginLength = navigator.plugins.length;
    DW_Seed = setInterval(DW_ControlDetect, 500);
}


// Check if the control is fully loaded.
var vShowNoControl;
var vPluginLength = 0;
function DW_ControlDetect() {
    pNoScanner = document.getElementById("pNoScanner");
    // If the ErrorCode is 0, it means everything is fine for the control. It is fully loaded.
    if (DWObject.ErrorCode == 0) {
	DWObject.ProductKey = DW_LicenseKey;
        DW_Pause();
        DWObject.MaxImagesInBuffer = 64;     // This is default value. User can change this value later
	DWObject.loglevel = 1;
	DWObject.BrokerProcessType = 1;

        document.getElementById(DW_DWTSourceContainerID).options.length = 0;
        // If source list need to be displayed, fill in the source items.
        if (DW_DWTSourceContainerID != "") {
            document.getElementById(DW_DWTSourceContainerID).options.length = 0;
            DWObject.OpenSourceManager();
            if (DWObject.SourceCount == 0) {
            
                if (DW_InWindows) {
                pNoScanner.style.display = "block";
                pNoScanner.style.textAlign = "center";
                }
                else
                pNoScanner.style.display = "none";
            }
            for (var i = 0; i < DWObject.SourceCount; i++) {
                document.getElementById(DW_DWTSourceContainerID).options.add(new Option(DWObject.SourceNameItems(i), i));
            }
            
            if(DWObject.SourceCount > 0)
                source_onchange();
        }
        
        if (DW_InWindows)
            DWObject.MouseShape = false;

        // For IE, attach the events
        if (DW_InIE) {
            DWObject.attachEvent('OnPostTransfer', Dynamsoft_OnPostTransfer);
            DWObject.attachEvent('OnPostAllTransfers', Dynamsoft_OnPostAllTransfers);
            DWObject.attachEvent('OnMouseClick', Dynamsoft_OnMouseClick);
            DWObject.attachEvent('OnPostLoad', Dynamsoft_OnPostLoadfunction);
            DWObject.attachEvent('OnImageAreaSelected', Dynamsoft_OnImageAreaSelected);
            DWObject.attachEvent('OnMouseDoubleClick', Dynamsoft_OnMouseDoubleClick);
            DWObject.attachEvent('OnMouseRightClick', Dynamsoft_OnMouseRightClick);
            DWObject.attachEvent('OnTopImageInTheViewChanged', Dynamsoft_OnTopImageInTheViewChanged);
            DWObject.attachEvent('OnImageAreaDeSelected', Dynamsoft_OnImageAreaDeselected);
        }

        // Fill the init data for preview mode selection
        PreviewMode = document.getElementById("DW_PreviewMode");
        PreviewMode.options.length = 0;
        PreviewMode.options.add(new Option("1X1", 0));
        PreviewMode.options.add(new Option("2X2", 1));
        PreviewMode.options.add(new Option("3X3", 2));
        PreviewMode.options.add(new Option("4X4", 3));
        PreviewMode.options.add(new Option("5X5", 4));
        PreviewMode.selectedIndex = 0;

        DW_MessageContainer = document.getElementById("DWTemessage");
        DW_MessageContainer.ondblclick = function () {
            this.innerHTML = "";
            DW_TempStr = "";
        }

        if (DWObject.SourceCount == 0)
             document.getElementById("btnScan").disabled = true;
        else
        {
            document.getElementById("btnScan").disabled = false;
            document.getElementById("btnScan").style.color = "#FE8E14";
        }

        ControlInit();
        
        InterpolationMethod = document.getElementById("InterpolationMethod");
        InterpolationMethod.options.length = 0;
        InterpolationMethod.options.add(new Option("NearestNeighbor", 1));
        InterpolationMethod.options.add(new Option("Bilinear", 2));
        InterpolationMethod.options.add(new Option("Bicubic", 3));

        txt_fileNameforSave = document.getElementById("txt_fileNameforSave");
        txt_fileNameforSave.value = DW_DefaultSaveImageName;

        txt_fileName = document.getElementById("txt_fileName");
        txt_fileName.value = DW_DefaultSaveImageName;

        MultiPageTIFF_save = document.getElementById("MultiPageTIFF_save");
        MultiPageTIFF_save.disabled = true;
        MultiPagePDF_save = document.getElementById("MultiPagePDF_save");
        MultiPagePDF_save.disabled = true;
        MultiPageTIFF = document.getElementById("MultiPageTIFF");
        MultiPageTIFF.disabled = true;
        MultiPagePDF = document.getElementById("MultiPagePDF");
        MultiPagePDF.disabled = true;

        re = /^\d+$/;
        strre = /^[\s\w]+$/;
        refloat = /^\d+\.*\d*$/i;

        iLeft = 0;
        iTop = 0;
        iRight = 0;
        iBottom = 0;

        for (var i = 0; i < document.links.length; i++) {
            if (document.links[i].className == "ShowtblLoadImage") {
                document.links[i].onclick = ShowtblLoadImage_onclick;
            }
            if (document.links[i].className == "ClosetblLoadImage") {
                document.links[i].onclick = ClosetblLoadImage_onclick;
            }
            if (document.links[i].className == "ShowtblCanNotScan") {
                document.links[i].onclick = ShowtblCanNotScan_onclick;
            }
            if (document.links[i].className == "ClosetblCanNotScan") {
                document.links[i].onclick = ClosetblCanNotScan_onclick;
            }
        }
        if (DWObject.SourceCount == 0) {
            if (DW_InWindows) {
                document.getElementById("aNoScanner").style.color = "Red";
                document.getElementById("aNoScanner").innerHTML = "<b>" + DW_NoDrivers + "<b/>";
                document.getElementById("Resolution").style.display = "none";
                ShowtblLoadImage_onclick();
            }
            
        }
        else
            document.getElementById("divBlank").style.display = "none";
        
        DW_UpdatePageInfo();
        ua = (navigator.userAgent.toLowerCase());
        if (!ua.indexOf("msie 6.0")) {
            ShowSiteTour();
        }
    }
    else {

 	if (!DW_InIE) {
        	navigator.plugins.refresh(false);
        	if(vPluginLength != navigator.plugins.length)
        	{
        	     for(var i=0; i < navigator.mimeTypes.length; i++)
        	     {
        	         if(navigator.mimeTypes[i].type.toLowerCase().indexOf(DW_MIMETYPE.toLowerCase()) > -1)
        	         {
        	            location.reload();
        	         }
        	     }
        	 }
         }

        if (vShowNoControl == false) {
            DW_NoControl();
            vShowNoControl = true;
        }
	for (var i = 0; i < document.links.length; i++) {
            if (document.links[i].className == "ClosetblCanNotScan") {
                document.links[i].onclick = ClosetblInstall_onclick;
            }
	}
    }
    DW_Timeout = setTimeout(function () { }, 10);
}


function ClosetblInstall_onclick() {
    if (dlgInstall) {
        dlgInstall.hide();
    }

  var logo = S.one('#divLiveChat');
    if (logo) {
        var vComm100 = S.one('#linkComm100');
        if (vComm100)
            vComm100.appendTo(logo);
    }
}


//--------------------------------------------------------------------------------------
//************************** Used a lot *****************************
//--------------------------------------------------------------------------------------
function ds_getleft(el) {
    var tmp = el.offsetLeft;
    el = el.offsetParent
    while (el) {
        tmp += el.offsetLeft;
        el = el.offsetParent;
    }
    return tmp;
}
function ds_gettop(el) {
    var tmp = el.offsetTop;
    el = el.offsetParent
    while (el) {
        tmp += el.offsetTop;
        el = el.offsetParent;
    }
    return tmp;
}


//--------------------------------------------------------------------------------------
//************************** Import Image*****************************
//--------------------------------------------------------------------------------------
/*-----------------select source---------------------*/
function source_onchange() {
    OnchangeInner();
}


/*-----------------Acquire Image---------------------*/
function DW_AcquireImage(){
   AcquireImageInner();
}

/*-----------------Load Image---------------------*/
function btnLoad_onclick() {
    DWObject.IfShowFileDialog = true;
    DWObject.LoadImageEx("", 5);
}
//--------------------------------------------------------------------------------------
//************************** Edit Image ******************************
//--------------------------------------------------------------------------------------
function btnShowImageEditor_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    DWObject.ShowImageEditor();
    DW_TempStr = DW_TempStr +"<b>Show Image Editor: </b>" ;
    if (DW_CheckErrorString()) {
        return;
    }
}

function btnRotateRight_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    DWObject.RotateRight(DWObject.CurrentImageIndexInBuffer);
    DW_TempStr = DW_TempStr +"<b>Rotate right: </b>" ;
    if (DW_CheckErrorString()) {
        return;
    }
}
function btnRotateLeft_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    DWObject.RotateLeft(DWObject.CurrentImageIndexInBuffer);
    DW_TempStr = DW_TempStr +"<b>Rotate left: </b>" ;
    if (DW_CheckErrorString()) {
        return;
    }
}

function btnMirror_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    DWObject.Mirror(DWObject.CurrentImageIndexInBuffer);
    DW_TempStr = DW_TempStr +"<b>Mirror: </b>" ;
    if (DW_CheckErrorString()) {
        return;
    }
}
function btnFlip_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    DWObject.Flip(DWObject.CurrentImageIndexInBuffer);
    DW_TempStr = DW_TempStr +"<b>Flip: </b>" ;
    if (DW_CheckErrorString()) {
        return;
    }
}

/*----------------------Crop Method---------------------*/
function btnCrop_onclick() {
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    if (iLeft != 0 || iTop != 0 || iRight != 0 || iBottom != 0) {
        DWObject.Crop(
            DWObject.CurrentImageIndexInBuffer,
            iLeft, iTop, iRight, iBottom
        );
        iLeft = 0;
        iTop = 0;
        iRight = 0;
        iBottom = 0;
        DW_TempStr = DW_TempStr +"<b>Crop: </b>" ;
        if (DW_CheckErrorString()) {
            return;
        }
        return;
    }
    switch (document.getElementById("Crop").style.visibility) {
        case "visible": document.getElementById("Crop").style.visibility = "hidden"; break;
        case "hidden": document.getElementById("Crop").style.visibility = "visible"; break;
        default: break;
    }
    document.getElementById("Crop").style.top = ds_gettop(document.getElementById("btnCrop")) + document.getElementById("btnCrop").offsetHeight + "px";
    document.getElementById("Crop").style.left = ds_getleft(document.getElementById("btnCrop")) - 80 + "px";
}

function btnCropCancel_onclick() {
    document.getElementById("Crop").style.visibility = "hidden";
}
function btnCropOK_onclick() {
    document.getElementById("img_left").className = "";
    document.getElementById("img_top").className = "";
    document.getElementById("img_right").className = "";
    document.getElementById("img_bottom").className = "";
    if (!re.test(document.getElementById("img_left").value)) {
        document.getElementById("img_left").className += " invalid";
        document.getElementById("img_left").focus();
        AppendMessage("Please input a valid <b>left</b> value.<br />");
        return;
    }
    if (!re.test(document.getElementById("img_top").value)) {
        document.getElementById("img_top").className += " invalid";
        document.getElementById("img_top").focus();
        AppendMessage("Please input a valid <b>top</top> value.<br />");
        return;
    }
    if (!re.test(document.getElementById("img_right").value)) {
        document.getElementById("img_right").className += " invalid";
        document.getElementById("img_right").focus();
        AppendMessage("Please input a valid <b>right</b> value.<br />");
        return;
    }
    if (!re.test(document.getElementById("img_bottom").value)) {
        document.getElementById("img_bottom").className += " invalid";
        document.getElementById("img_bottom").focus();
        AppendMessage("Please input a valid <b>bottom</b> value.<br />");
        return;
    }
    DWObject.Crop(
        DWObject.CurrentImageIndexInBuffer,
        document.getElementById("img_left").value,
        document.getElementById("img_top").value,
        document.getElementById("img_right").value,
        document.getElementById("img_bottom").value
    );
    DW_TempStr = DW_TempStr +"<b>Crop: </b>" ;
    if (DW_CheckErrorString()) {
        document.getElementById("Crop").style.visibility = "hidden";
        return;
    }
}

/*----------------Change Image Size--------------------*/
function btnChangeImageSize_onclick(){
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    switch (document.getElementById("ImgSizeEditor").style.visibility) {
        case "visible": document.getElementById("ImgSizeEditor").style.visibility = "hidden"; break;
        case "hidden": document.getElementById("ImgSizeEditor").style.visibility = "visible"; break;
        default: break;
    }
    document.getElementById("ImgSizeEditor").style.top = ds_gettop(document.getElementById("btnChangeImageSize")) + document.getElementById("btnChangeImageSize").offsetHeight + "px";
    document.getElementById("ImgSizeEditor").style.left = ds_getleft(document.getElementById("btnChangeImageSize")) - 30 + "px";
}
function btnCancelChange_onclick() {
    document.getElementById("ImgSizeEditor").style.visibility="hidden";
}

function btnChangeImageSizeOK_onclick() {
    document.getElementById("img_height").className = "";
    document.getElementById("img_width").className = "";
    if (!re.test(document.getElementById("img_height").value)) {
        document.getElementById("img_height").className += " invalid";
        document.getElementById("img_height").focus();
        AppendMessage("Please input a valid <b>height</b>.<br />");
        return;    
    }
    if (!re.test(document.getElementById("img_width").value)) {
        document.getElementById("img_width").className += " invalid";
        document.getElementById("img_width").focus();
        AppendMessage("Please input a valid <b>width</b>.<br />");
        return;   	  
    }
    DWObject.ChangeImageSize(
        DWObject.CurrentImageIndexInBuffer,
        document.getElementById("img_width").value,
        document.getElementById("img_height").value,
        InterpolationMethod.selectedIndex + 1
    );
    DW_TempStr = DW_TempStr +"<b>Change Image Size: </b>" ;
    if (DW_CheckErrorString()) {
        document.getElementById("ImgSizeEditor").style.visibility = "hidden";
        return;
    }
}
//--------------------------------------------------------------------------------------
//************************** Save Image***********************************
//--------------------------------------------------------------------------------------
function btnSave_onclick(){
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    var i, strimgType_save;
    var NM_imgType_save = document.getElementsByName("imgType_save");
    for(i=0;i<5;i++){
        if(NM_imgType_save.item(i).checked == true){
            strimgType_save  = NM_imgType_save.item(i).value;
            break;
        }
    }
    DWObject.IfShowFileDialog = true;
    txt_fileNameforSave.className = "";
    var bSave = false;
    if (!strre.test(txt_fileNameforSave.value)) {
        txt_fileNameforSave.className += " invalid";
        txt_fileNameforSave.focus();
        AppendMessage("Please input <b>file name</b>.<br />Currently only English names are allowed.<br />");
        return;
    }
    var strFilePath = "C:\\" + txt_fileNameforSave.value + "." + strimgType_save;
    if (strimgType_save == "tif" && MultiPageTIFF_save.checked) {
        if ((DWObject.SelectedImagesCount == 1) || (DWObject.SelectedImagesCount == DWObject.HowManyImagesInBuffer)) {
            bSave = DWObject.SaveAllAsMultiPageTIFF(strFilePath);
        }
        else {
            bSave = DWObject.SaveSelectedImagesAsMultiPageTIFF(strFilePath);
        }
    }
    else if (strimgType_save == "pdf" && document.getElementById("MultiPagePDF_save").checked) {
        if ((DWObject.SelectedImagesCount == 1) || (DWObject.SelectedImagesCount == DWObject.HowManyImagesInBuffer)) {
            bSave = DWObject.SaveAllAsPDF(strFilePath);
        }
        else {
            bSave = DWObject.SaveSelectedImagesAsMultiPagePDF(strFilePath);
        }
    }
    else {
        switch (i) {
            case 0: bSave = DWObject.SaveAsBMP(strFilePath, DWObject.CurrentImageIndexInBuffer); break;
            case 1: bSave = DWObject.SaveAsJPEG(strFilePath, DWObject.CurrentImageIndexInBuffer); break;
            case 2: bSave = DWObject.SaveAsTIFF(strFilePath, DWObject.CurrentImageIndexInBuffer); break;
            case 3: bSave = DWObject.SaveAsPNG(strFilePath, DWObject.CurrentImageIndexInBuffer); break;
            case 4: bSave = DWObject.SaveAsPDF(strFilePath, DWObject.CurrentImageIndexInBuffer); break;
        }
    }
 
    if (bSave)
        DW_TempStr = DW_TempStr +"<b>Save Image: </b>" ;
    if (DW_CheckErrorString()) {
        return;
    }
}
//--------------------------------------------------------------------------------------
//************************** Upload Image***********************************
//--------------------------------------------------------------------------------------
function btnUpload_onclick(){
    if (!DW_CheckIfImagesInBuffer()) {
        return;
    }
    var i, strHTTPServer, strActionPage, strImageType;
    txt_fileName.className = "";
    if (!strre.test(txt_fileName.value)) {
        txt_fileName.className += " invalid";
        txt_fileName.focus();
        AppendMessage("Please input <b>file name</b>.<br />Currently only English names are allowed.<br />");
        return;
    }
    //DWObject.MaxInternetTransferThreads = 5;
    strHTTPServer = DW_ServerName;
    DWObject.HTTPPort = DW_strPort;
    var CurrentPathName = unescape(location.pathname);	// get current PathName in plain ASCII	
    var CurrentPath = CurrentPathName.substring(0, CurrentPathName.lastIndexOf("/") + 1);			
    strActionPage = CurrentPath + DW_ActionPage; //the ActionPage's file path
    //var redirectURLifOK = CurrentPath + "online_demo_list.aspx";	
    for(i=0;i<4;i++){
        if(document.getElementsByName("ImageType").item(i).checked == true){
            strImageType  = i + 1;
            break;
        }
    }

    var uploadfilename = txt_fileName.value + "." + document.getElementsByName("ImageType").item(i).value;
    if (strImageType == 2 && document.getElementById("MultiPageTIFF").checked) {
        if ((DWObject.SelectedImagesCount == 1) || (DWObject.SelectedImagesCount == DWObject.HowManyImagesInBuffer)) {
            DWObject.HTTPUploadAllThroughPostAsMultiPageTIFF(
                strHTTPServer,
                strActionPage,
                uploadfilename
            );
        }
        else {
            DWObject.HTTPUploadThroughPostAsMultiPageTIFF(
                strHTTPServer,
                strActionPage,
                uploadfilename
            );
        }
    }
    else if (strImageType == 4 && document.getElementById("MultiPagePDF").checked) {
        if ((DWObject.SelectedImagesCount == 1) || (DWObject.SelectedImagesCount == DWObject.HowManyImagesInBuffer)) {
            DWObject.HTTPUploadAllThroughPostAsPDF(
                strHTTPServer,
                strActionPage,
                uploadfilename
            );
        }
        else {
            DWObject.HTTPUploadThroughPostAsMultiPagePDF(
                strHTTPServer,
                strActionPage,
                uploadfilename
            );
        }
    }
    else {
        DWObject.HTTPUploadThroughPostEx(
            strHTTPServer,
            DWObject.CurrentImageIndexInBuffer,
            strActionPage,
            uploadfilename,
            strImageType
        );
    }
    DW_TempStr = DW_TempStr +"<b>Upload: </b>" ;
    if (DW_CheckErrorString()) {
        if(strActionPage.indexOf("SaveToFile")!=-1)
            alert(DWObject.ErrorString)//if save to file.
        //else
          //  window.location = redirectURLifOK;
    }	
}

//--------------------------------------------------------------------------------------
//************************** Scripts for cookie ****************************************
//--------------------------------------------------------------------------------------
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function setCookie(exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape("yes") + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = "iamnewforthepage" + "=" + c_value;
}

function checkCookie() {
    var startTourFlag = getCookie("iamnewforthepage");
    if (startTourFlag == "no")
        return false;
    else
        return true;
}

//--------------------------------------------------------------------------------------
//*********************************radio response***************************************
//--------------------------------------------------------------------------------------
function rdTIFFsave_onclick() {
    MultiPageTIFF_save.disabled = false;

    MultiPageTIFF_save.checked = false;
    MultiPagePDF_save.checked = false;
    MultiPagePDF_save.disabled = true;
}
function rdPDFsave_onclick() {
    MultiPagePDF_save.disabled = false;

    MultiPageTIFF_save.checked = false;
    MultiPagePDF_save.checked = false;
    MultiPageTIFF_save.disabled = true;
}
function rdsave_onclick() {
    MultiPageTIFF_save.checked = false;
    MultiPagePDF_save.checked = false;

    MultiPageTIFF_save.disabled = true;
    MultiPagePDF_save.disabled = true;
}
function rdTIFF_onclick() {
    MultiPageTIFF.disabled = false;

    MultiPageTIFF.checked = false;
    MultiPagePDF.checked = false;
    MultiPagePDF.disabled = true;
}
function rdPDF_onclick() {
    MultiPagePDF.disabled = false;

    MultiPageTIFF.checked = false;
    MultiPagePDF.checked = false;
    MultiPageTIFF.disabled = true;
}
function rd_onclick() {
    MultiPageTIFF.checked = false;
    MultiPagePDF.checked = false;

    MultiPageTIFF.disabled = true;
    MultiPagePDF.disabled = true;
}

function LoadSampleImage(nIndex) {
    var ImgArr;

    switch (nIndex) {
        case 1:
            ImgArr = "/Images/twain_associate1.png";
            break;
        case 2:
            ImgArr = "/Images/twain_associate2.png";
            break;
        case 3:
            ImgArr = "/Images/twain_associate3.png";
            break;
    }

    if(location.hostname != "")
    {
        DWObject.HTTPPort = location.port == "" ? 80 : location.port;
        DWObject.HTTPDownload(location.hostname, location.pathname.substring(0, location.pathname.lastIndexOf('/')) + ImgArr);  
    }
    else
    {
        DWObject.IfShowFileDialog = false;
	    if(location.pathname.lastIndexOf('\\')>1)
	    {
	        var ImgArr_replaced = ImgArr.replace(new RegExp("/",'g'),"\\\\");
		    DWObject.LoadImage(location.pathname.substring(1, location.pathname.lastIndexOf('\\')).replace(/%20/g," ") + ImgArr_replaced);
		}
	    else
		    DWObject.LoadImage(location.pathname.substring(1, location.pathname.lastIndexOf('/')).replace(/%20/g," ") + ImgArr);       
    }
   
   DW_UpdatePageInfo();
    if (DW_CheckErrorString()) {
        AppendMessage("Added a demo image sucessfully.<br/>");
    }
}
function Over_Out_DemoImage(obj, url) {
    obj.src = url;
}


S.ready(function() {
    DW_Pageonload();
});
