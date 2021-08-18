function initBtn() {
	// 新增
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
		let data = new FormData();
		let inputNewLineId = document.getElementById("input-new-line-id");
		let inputUnit = document.getElementById("input-new-unit");
		let inputOtherUnit = document.getElementById("input-new-other-unit");
		let inputRemark = document.getElementById("input-new-remark");
		let inputPassword = document.getElementById("input-new-password");
		data.append("LineId", inputNewLineId.value);
		data.append("Unit", inputUnit.value);
		data.append("OtherUnit", inputOtherUnit.value);
		data.append("Remark", inputRemark.value);
		data.append("Password", inputPassword.value);

		var xhr = new XMLHttpRequest();
		// xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function() {
			if (this.readyState === 4) {
				console.log(this.responseText);
			}
		});

		xhr.open("POST", "https://script.google.com/macros/s/AKfycbxZIccw-pVWiTJysG0_8C1A7APwgSaI0yvRI2Yq2ubMjugRfZZjpaAO2c_It1n9v3Yc/exec");

		xhr.send(data);

		formNewRecordPopupCard.classList.remove("show");

		inputNewLineId.value = "";
		inputUnit.value = "";
		inputOtherUnit.value = "";
		inputRemark.value = "";
		inputPassword.value = "";

		
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
}

function refresh() {
	let dataList = [];

	var xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", function() {
		if (this.readyState === 4) {
			// console.log(this.responseText);
			dataList = JSON.parse(this.responseText);
			console.log(dataList);

			let tbody = document.getElementById("content");
			tbody.innerHTML = "";
			dataList.forEach(row => {
				let tr = document.createElement("tr");
				// line id
				let tdLineId = document.createElement("td");
				tdLineId.appendChild(document.createTextNode(row.data.LineId));
				tr.appendChild(tdLineId);
				// unit
				let tdUnit = document.createElement("td");
				tdUnit.appendChild(document.createTextNode(row.data.Unit));
				tr.appendChild(tdUnit);
				// other unit
				let tdOtherUnit = document.createElement("td");
				tdOtherUnit.appendChild(document.createTextNode(row.data.OtherUnit));
				tr.appendChild(tdOtherUnit);
				// remark
				let tdRemark = document.createElement("td");
				tdRemark.appendChild(document.createTextNode(row.data.Remark));
				tr.appendChild(tdRemark);
				// control
				let tdControl = document.createElement("td");
				let button = document.createElement("button");
				button.className = "btn btn-send btn-edit btn-edit-record";
				button.dataset.index = row.index;
				button.textContent = "Edit";
				tdControl.appendChild(button); // <button class="btn btn-send btn-edit btn-edit-record" data-index="1"> Edit </button>
				tr.appendChild(tdControl);

				tbody.appendChild(tr);
			});
			initBtn();
		}
	});
	xhr.open("GET", "https://script.google.com/macros/s/AKfycbxZIccw-pVWiTJysG0_8C1A7APwgSaI0yvRI2Yq2ubMjugRfZZjpaAO2c_It1n9v3Yc/exec");

	xhr.send();
}

(function() {
	let dataList = [];

	var xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", function() {
		if (this.readyState === 4) {
			// console.log(this.responseText);
			dataList = JSON.parse(this.responseText);
			// console.log(dataList);

			let tbody = document.getElementById("content");
			dataList.forEach(row => {
				let tr = document.createElement("tr");
				// line id
				let tdLineId = document.createElement("td");
				tdLineId.appendChild(document.createTextNode(row.data.LineId));
				tr.appendChild(tdLineId);
				// unit
				let tdUnit = document.createElement("td");
				tdUnit.appendChild(document.createTextNode(row.data.Unit));
				tr.appendChild(tdUnit);
				// other unit
				let tdOtherUnit = document.createElement("td");
				tdOtherUnit.appendChild(document.createTextNode(row.data.OtherUnit));
				tr.appendChild(tdOtherUnit);
				// remark
				let tdRemark = document.createElement("td");
				tdRemark.appendChild(document.createTextNode(row.data.Remark));
				tr.appendChild(tdRemark);
				// control
				let tdControl = document.createElement("td");
				let button = document.createElement("button");
				button.className = "btn btn-send btn-edit btn-edit-record";
				button.dataset.index = row.index;
				button.textContent = "Edit";
				tdControl.appendChild(button); // <button class="btn btn-send btn-edit btn-edit-record" data-index="1"> Edit </button>
				tr.appendChild(tdControl);

				tbody.appendChild(tr);
			});
			initBtn();
		}
	});
	xhr.open("GET", "https://script.google.com/macros/s/AKfycbxZIccw-pVWiTJysG0_8C1A7APwgSaI0yvRI2Yq2ubMjugRfZZjpaAO2c_It1n9v3Yc/exec");

	xhr.send();
}());
