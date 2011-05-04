﻿
var PageName = 'Confirmation - Logged In';
var PageId = '4bd4fcdc134b420faf6e6f24277d0c2a'
var PageUrl = 'Confirmation_-_Logged_In.html'
document.title = 'Confirmation - Logged In';
var PageNotes = 
{
"pageName":"Confirmation - Logged In",
"showNotesNames":"False",
"Page Descriptions":"<p style=\"text-align:left;\"><span style=\"\">This page is displayed once the user has completed reviewed the Verification page and clicked the Place Order button. <\/span><\/p>",
"UC Reference":"<p style=\"text-align:left;\"><span style=\"\">UC-Check Out-001 Submit Order&nbsp; &nbsp;&nbsp; <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p>"}
var $OnLoadVariable = '';

var $LoginID = '';

var $LoginPassword = '';

var $AccountNumber = '';

var $SegmentState = '';

var $SiteSegment = '';

var $Page = '';

var $ProceedToBilling = '';

var $FromWhere = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&LoginID=' + encodeURIComponent($LoginID) + '&LoginPassword=' + encodeURIComponent($LoginPassword) + '&AccountNumber=' + encodeURIComponent($AccountNumber) + '&SegmentState=' + encodeURIComponent($SegmentState) + '&SiteSegment=' + encodeURIComponent($SiteSegment) + '&Page=' + encodeURIComponent($Page) + '&ProceedToBilling=' + encodeURIComponent($ProceedToBilling) + '&FromWhere=' + encodeURIComponent($FromWhere) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[LoginID\]\]/g, $LoginID);
  value = value.replace(/\[\[LoginPassword\]\]/g, $LoginPassword);
  value = value.replace(/\[\[AccountNumber\]\]/g, $AccountNumber);
  value = value.replace(/\[\[SegmentState\]\]/g, $SegmentState);
  value = value.replace(/\[\[SiteSegment\]\]/g, $SiteSegment);
  value = value.replace(/\[\[Page\]\]/g, $Page);
  value = value.replace(/\[\[ProceedToBilling\]\]/g, $ProceedToBilling);
  value = value.replace(/\[\[FromWhere\]\]/g, $FromWhere);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '29');
  value = value.replace(/\[\[GenMonth\]\]/g, '4');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'April');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Friday');
  value = value.replace(/\[\[GenYear\]\]/g, '2011');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u20 = document.getElementById('u20');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u20ann'), "<div id='u20Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u20Note').click(function(e) { ToggleWorkflow(e, 'u20', 300, 150, false); return false; });
var u20Ann = 
{
"label":"Link to FAQs page",
"Description":"Link should take user to the respective question in FAQs page."};
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u25ann'), "<div id='u25Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u25Note').click(function(e) { ToggleWorkflow(e, 'u25', 300, 150, false); return false; });
var u25Ann = 
{
"label":"Link to FAQs page",
"Description":"Link should take user to the respective question in FAQs page."};
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u66ann'), "<div id='u66Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u66Note').click(function(e) { ToggleWorkflow(e, 'u66', 300, 150, false); return false; });
var u66Ann = 
{
"label":"Print page icon",
"Description":"Clicking this icon will open the user's OS print dialog box, and print this page using print style sheet."};

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u30 = document.getElementById('u30');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u30ann'), "<div id='u30Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u30Note').click(function(e) { ToggleWorkflow(e, 'u30', 300, 150, false); return false; });
var u30Ann = 
{
"label":"Link to FAQs page",
"Description":"Link should take user to the respective question in FAQs page."};
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u31ann'), "<div id='u31Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u31Note').click(function(e) { ToggleWorkflow(e, 'u31', 300, 150, false); return false; });
var u31Ann = 
{
"label":"Link to FAQs page",
"Description":"Link should take user to the respective question in FAQs page."};
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u35 = document.getElementById('u35');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u35ann'), "<div id='u35Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u35Note').click(function(e) { ToggleWorkflow(e, 'u35', 300, 150, false); return false; });
var u35Ann = 
{
"label":"Link to FAQs page",
"Description":"Link should take user to the respective question in FAQs page."};
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u38ann'), "<div id='u38Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u38Note').click(function(e) { ToggleWorkflow(e, 'u38', 300, 150, false); return false; });
var u38Ann = 
{
"label":"Print page link",
"Description":"Clicking this link will open the user's OS print dialog box, and print this page using print style sheet."};
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u8 = document.getElementById('u8');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u45 = document.getElementById('u45');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u19ann'), "<div id='u19Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u19Note').click(function(e) { ToggleWorkflow(e, 'u19', 300, 150, false); return false; });
var u19Ann = 
{
"label":"Link to FAQs page",
"Description":"Link should take user to the respective question in FAQs page."};
gv_vAlignTable['u19'] = 'top';
if (window.OnLoad) OnLoad();
