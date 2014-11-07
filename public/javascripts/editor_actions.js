//Code By Notion Engineering 2014

rteName = "richTextField";

function iframe_on(){
	//$('toolbar').load("parts/TopBar.html");
	richTextField.document.designMode = 'On';
}
function bold(){
	richTextField.document.execCommand('bold',false,null); 
}
function underline(){
	richTextField.document.execCommand('underline',false,null);
}
function italic(){
	richTextField.document.execCommand('italic',false,null); 
}
function set_size(a){
	richTextField.document.execCommand('FontSize',false,a);
}
function forecolor(){
	$('#iForeColor').trigger("click");
}

function backcolor(){
	$('#iBackColor').trigger("click");
}

function center(){
	richTextField.document.execCommand('justifyCenter',false,null)
}
function justify() {
	richTextField.document.execCommand('justifyFull',false,null)
}
function left(){
	richTextField.document.execCommand('justifyLeft',false,null)
}
function right(){
	richTextField.document.execCommand('justifyRight',false,null)
}
function horizontal_rule(){
	richTextField.document.execCommand('inserthorizontalrule',false,null);
}
function unordered_list(){
	richTextField.document.execCommand("InsertUnorderedList", false,"newOL");
}
function ordered_list(){
	richTextField.document.execCommand("InsertOrderedList", false,"newUL");
}
function link(){
	var linkURL = prompt("Enter the URL for this link:", "http://"); 
	richTextField.document.execCommand("CreateLink", false, linkURL);
}
function unlink(){
	richTextField.document.execCommand("Unlink", false, null);
}
function undo(){
	richTextField.document.execCommand('undo',false,null)
}
function redo(){
	richTextField.document.execCommand('redo',false,null)
}
function image(){
	var imgSrc = prompt('Enter image location', '');
	var Code= Math.floor((Math.random() * 100) + 65); 
	Code=Code+String.fromCharCode( Math.floor((Math.random() * 88) + 66) );
	Code=Code+ Math.floor((Math.random() * 10) + 1); 
	var done="<img src='%s' id='UIimage%c' class='img' onclick='UIImg(\"%p\")'>";
	done=done.replace("%s", imgSrc);
	done=done.replace("%c", Code);
	done=done.replace("%p", Code);
    if(imgSrc != null){
        richTextField.document.execCommand('insertHTML', false, done);
        window.frames.richTextField.meDraggable(Code);
    }
}
function submit_form(charac){
	var theForm = document.getElementById("submit_form");
	theForm.elements["textArea"].value = window.frames['richTextField'].document.body.innerHTML;
	$('#jason').val(JSON.stringify(characteristics));
	theForm.submit();
}


function rteInsert_HTML(html) {
if (document.all) {
var oRng = document.getElementById(rteName).contentWindow.document.selection.createRange();
oRng.pasteHTML(html);
oRng.collapse(false);
oRng.select();
} else {
	var text="<span class='"+html+"'>"+Safe_HTML()+"</span>";
document.getElementById(rteName).contentWindow.document.execCommand('insertHTML', false, text);
}
};

function make_code(html) {
	if (document.all) {
		var oRng = document.getElementById(rteName).contentWindow.document.selection.createRange();
		oRng.pasteHTML(html);
		oRng.collapse(false);
		oRng.select();
	} else {
		var text="<div class='Code'>"+Safe_HTML()+"</div>";
		document.getElementById(rteName).contentWindow.document.execCommand('insertHTML', false, text);
	}
};

function print_document() {
  window.frames.richTextField.print();
}

function add_vid(){
		var url=prompt("Paste Youtube URL","");
		var a=url.split("v=");
		//alert(a[1]);
		var embed='<iframe width="420" height="315" src="http://www.youtube.com/embed/%var%?rel=0" frameborder="0" allowfullscreen></iframe>';
		var ready=embed.replace("%var%",a[1].toString());
		document.getElementById(rteName).contentWindow.document.execCommand('insertHTML', false, ready);
	}

function get_Selection_Text() {
    var text = "";
    if (richTextField.getSelection) {
        text = richTextField.getSelection().toString();
    } else if (richTextF.ielddocument.richTextFieldselection && richTextField.document.selection.type != "Control") {
        text = richTextField.document.selection.createRange().text;
    }
    return text;
}

function Safe_HTML(){
	var pre=get_Selection_Text();

	pre=pre.replace(/</g,"&lt;");
	pre=pre.replace(/>/g,"&gt;");
	return pre;
}
function create_table(){
		var row=prompt("Row number");
		var col=prompt("Col number");
		var Code= Math.floor((Math.random() * 100) + 65); 
		Code=Code+String.fromCharCode( Math.floor((Math.random() * 88) + 66) );
		Code=Code+ Math.floor((Math.random() * 10) + 1); 
		var output='<span class="table-options-main" id="UITableContainer'+Code+'" style="width:auto"><table cellspacing="0" id="UITable'+Code+'" width="auto">';

		for(var i=0; i<col; i++){
		output=output+"<tr>";
			for (var u=0;u<row;u++) {
				output=output+"<td>Lorem</td>";
			};
		output=output+"</tr>";
		};
		output=output+'<span class="OptionsTable"><span class="UI-TableButton" id="addCol" onclick="AddCol(\''+Code+'\',true)">Add Column</span> | <span class="UI-TableButton" id="addRow" onclick="AddRow(\''+Code+'\',true)">Add Row</span> | <span class="UI-TableButton" id="RemoveTable" onclick="RemoveTable(\''+Code+'\',true)">Remove Table</span></span></span>';
		document.getElementById(rteName).contentWindow.document.execCommand('insertHTML', false, output);
	}
function create_table_with_header(){
	var row=prompt("Row number");
		var col=prompt("Col number");
		var Code= Math.floor((Math.random() * 100) + 65); 
		Code=Code+String.fromCharCode( Math.floor((Math.random() * 88) + 66) );
		Code=Code+ Math.floor((Math.random() * 10) + 1); 
		var output='<span class="table-options-main" id="UITableContainer'+Code+'" style="width:auto"><table cellspacing="0" id="UITable'+Code+'" width="auto">';

		for(var i=0; i<col; i++){
		output=output+"<tr>";
		if(i!=0){
			for (var u=0;u<row;u++) {
				output=output+"<td>Lorem</td>";
			};
		}else{
			output=output+"<td colspan='"+row+"' id='Header"+Code+"' align='center'>lorem</td>"
		}
		output=output+"</tr>";
		};
		output=output+'<span class="OptionsTable"><span class="UI-TableButton" id="addCol" onclick="AddCol(\''+Code+'\',true)">Add Column</span> | <span class="UI-TableButton" id="addRow" onclick="AddRow(\''+Code+'\',true)">Add Row</span> | <span class="UI-TableButton" id="RemoveTable" onclick="RemoveTable(\''+Code+'\',true)">Remove Table</span></span></span>';
	document.getElementById(rteName).contentWindow.document.execCommand('insertHTML', false, output);
}



//------EXTRA CODE-------------//
function AddRow(a,header){
		var output='<tr>';
		if(header){
			var con = document.getElementById('UITable'+a).rows[1].cells.length;
		}else{
			var con = document.getElementById('UITable'+a).rows[0].cells.length;
		}
		for(var i=0;i<con;i++){
			output+='<td>Lorem</td>';
		}
		output+='</tr>';
		var TAp='#UITable'+a;
		$(TAp).append(output);
	}
function AddCol (a,h) {
	var TAp='UITable'+a;
	var table = document.getElementById(TAp);
	var rowLength = table.rows.length;
	for(var i=0; i<rowLength; i+=1){
		 var row = table.rows[i];
		 if(!h){
		  $(row).append('<td>Lorem</td>');
		 }else{
		  if(i!=0){
		  	$(row).append('<td>Lorem</td>');
		  }else{
		  	//alert("is 1");
		  	var colValue=$("#Header"+a).attr('colspan');
		  	//alert(colValue);
		  	$("#Header"+a).attr('colspan',parseInt(colValue)+1);
		  }
		 }
		 var cellLength = row.cells.length;
		 for(var y=0; y<cellLength; y+=1){
		   var cell = row.cells[y];
		 }
	}
}
function RemoveTable(a){
	var TAp='#UITableContainer'+a;
	$(TAp).remove();
}

/*****************************************************/
/************************CATCHERS********************/
/*****************************************************/

function changeF() {
	var color=document.getElementById("iForeColor").value;
	richTextField.document.execCommand('ForeColor',false,color);
	$('#ForeColor').css('color',color);
}

function changeB() {
	var color=document.getElementById("iBackColor").value;
	richTextField.document.execCommand('BackColor',false,color);
	$('#BackColor').css('background-color',color);
}

function UIImg(x){
	var w=prompt('w','w');
	w+='px';
	var h=prompt('h','h');
	h+='px';
	var id='#UIimage'+x;

	$(id).attr("width",w);
	$(id).attr("height",h);
}
function meDraggable(x) {
	var id='#UIimage'+x;
	$(id).draggable();
}
