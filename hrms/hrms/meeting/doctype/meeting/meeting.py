# Copyright (c) 2022, Huy Vo and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document

class Meeting(Document):
	def validate(self):
		#set missing name
		found=[]
		for attendee in self.attendees:
			if not attendee.full_name:
				attendee.full_name = get_full_name(attendee.attendee)

			if attendee.attendee in found:
				frappe.throw(_("Attendee {0} entered twice!").format(attendee.attendee))

			found.append(attendee.attendee)

#cho func nay vo whitelist
@frappe.whitelist()
def get_full_name(attendee):
	user = frappe.get_doc("User", attendee)
	return " ".join(filter(None,[user.first_name, user.middle_name, user.last_name]))

