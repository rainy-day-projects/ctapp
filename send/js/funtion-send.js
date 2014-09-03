// JavaScript Document
function uploadButton(){
document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
	}
};

$(document).ready(function(){ 
document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
	}})
