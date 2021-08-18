var btnNewRecord = document.getElementById("btn-new-record");
var btnNewRecordCancel = document.getElementById("btn-new-record-cancel");
var btnNewRecordSubmit = document.getElementById("btn-new-record-submit");
var formNewRecordPopupCard = document.getElementById("form-new-record-popup-card");
btnNewRecord.onclick = function(e) {
	formNewRecordPopupCard.classList.add("show");
}
btnNewRecordCancel.onclick = function(e) {
	formNewRecordPopupCard.classList.remove("show");
}
btnNewRecordSubmit.onclick = function(e) {
	formNewRecordPopupCard.classList.remove("show");
}

var btnEditRecord = document.getElementsByClassName("btn-edit-record");
var btnEditRecordCancel = document.getElementById("btn-edit-record-cancel");
var btnEditRecordSubmit = document.getElementById("btn-edit-record-submit");
var formEditRecordPopupCard = document.getElementById("form-edit-record-popup-card");
for (const index in btnEditRecord) {
	if (Object.hasOwnProperty.call(btnEditRecord, index)) {
		const btn = btnEditRecord[index];
		btn.onclick = function(e) {
			formEditRecordPopupCard.classList.add("show");
		}
	}
}
btnEditRecordCancel.onclick = function(e) {
	formEditRecordPopupCard.classList.remove("show");
}
btnEditRecordSubmit.onclick = function(e) {
	formEditRecordPopupCard.classList.remove("show");
}
