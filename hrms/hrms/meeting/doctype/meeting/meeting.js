// Copyright (c) 2022, Huy Vo and contributors
// For license information, please see license.txt

frappe.ui.form.on("Meeting", {
	send_emails: function(frm){
		if (frm.doc.status=="Planned"){
			frappe.call({
				method:"hrms.api.send_invitation_emails",
				args:{
					meeting: frm.doc.name
				},
				callback: function(r){

				}
			})
		}
	}
});

frappe.ui.form.on("Meeting Attendee", {
	
	attendee: function(frm, cdt, cdn){
		var attendee = frappe.get_doc(cdt,cdn);
		if (attendee.attendee){
			//neu co attendee thi get fullname
			frappe.call({
				method: "hrms.meeting.doctype.meeting.meeting.get_full_name",
				args:{
					attendee: attendee.attendee
				},
				callback: function(r){
					frappe.model.set_value(cdt,cdn, "full_name", r.message);
				}
			});
		}
		else{
			frappe.model.set_value(cdt,cdn, "full_name", null);
		}
	},
	send_emails: function(frm){
		if (frm.doc.status=="Planned"){
			frappe.call({
				method:"hrms.api.send_invitation_emails",
				args:{
					meeting: frm.doc.name
				},
				callback: function(r){

				}
			})
		}
	}
});
