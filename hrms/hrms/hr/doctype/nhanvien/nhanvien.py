# Copyright (c) 2022, Huy Vo and contributors
# For license information, please see license.txt
import frappe
from frappe.model.document import Document

class NhanVien(Document):
	pass





@frappe.whitelist()
def get_position_name(position):
	pos = frappe.get_doc("ViTri", position)
	return pos.position_name