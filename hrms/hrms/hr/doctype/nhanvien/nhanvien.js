// Copyright (c) 2022, Huy Vo and contributors
// For license information, please see license.txt


frappe.ui.form.on("NhanVien", {
	
	position: function(frm){
		var employee = frm.get_doc(frm.doctype, frm.docname);
		if (employee.position){
			//neu co vitri thi get name
			frappe.call({
				method: "hrms.hr.doctype.nhanvien.nhanvien.get_position_name",
				args:{
					position: employee.position
				},
				callback: function(r){
					frm.set_value({
						'position_name': r.message
					});
				}
			});
		}
		else{
			frm.set_value({
				'position_name': null
			});
		}
	}
});