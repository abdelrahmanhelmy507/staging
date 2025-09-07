import { useMemo, useState } from "react";
import { Button, Card, Col, Form, Modal, Row, Table } from "react-bootstrap";

export default function SubscribesDashboard() {
	const [subs, setSubs] = useState([
		{ id: 1, name: "مؤسسة النور", details: "باقات برو", start: "2024-01-01", end: "2024-12-31", renew: "2024-12-15" },
		{ id: 2, name: "شركة التقنيات", details: "أساسية", start: "2024-06-10", end: "2025-06-09", renew: "2025-06-01" },
	]);
	const [search, setSearch] = useState("");
	const [show, setShow] = useState(false);
	const [editing, setEditing] = useState(null);
	const [form, setForm] = useState({ name: "", details: "", start: "", end: "", renew: "" });

	const filtered = useMemo(() => {
		return subs.filter((s) => s.name.includes(search) || s.details.includes(search));
	}, [subs, search]);

	function openAdd() {
		setEditing(null);
		setForm({ name: "", details: "", start: "", end: "", renew: "" });
		setShow(true);
	}

	function openEdit(s) {
		setEditing(s);
		setForm({ name: s.name, details: s.details, start: s.start, end: s.end, renew: s.renew });
		setShow(true);
	}

	function handleSave() {
		if (editing) {
			setSubs((prev) => prev.map((s) => (s.id === editing.id ? { ...s, ...form } : s)));
		} else {
			const id = Math.max(0, ...subs.map((s) => s.id)) + 1;
			setSubs((prev) => [...prev, { id, ...form }]);
		}
		setShow(false);
	}

	function handleDelete(id) {
		setSubs((prev) => prev.filter((s) => s.id !== id));
	}

	return (
		<div>
			<div className="page-header mb-3">
				<h5 className="m-0">الاشتراكات</h5>
				<Button onClick={openAdd}>إضافة اشتراك</Button>
			</div>
			<Card className="table-card p-3">
				<Row className="g-2 mb-3">
					<Col md={4}>
						<Form.Control placeholder="بحث..." value={search} onChange={(e) => setSearch(e.target.value)} />
					</Col>
				</Row>
				<Table responsive hover className="mb-0" dir="rtl">
					<thead>
						<tr>
							<th>#</th>
							<th>اسم العميل</th>
							<th>تفاصيل الاشتراك</th>
							<th>تاريخ البداية</th>
							<th>تاريخ النهاية</th>
							<th>تاريخ التجديد</th>
							<th>الإجراءات</th>
						</tr>
					</thead>
					<tbody>
						{filtered.map((s, idx) => (
							<tr key={s.id}>
								<td>{idx + 1}</td>
								<td>{s.name}</td>
								<td>{s.details}</td>
								<td>{s.start}</td>
								<td>{s.end}</td>
								<td>{s.renew}</td>
								<td>
									<div className="d-flex gap-2">
										<Button size="sm" variant="outline-secondary" onClick={() => openEdit(s)}>
											تعديل
										</Button>
										<Button size="sm" variant="outline-danger" onClick={() => handleDelete(s.id)}>
											حذف
										</Button>
									</div>
								</td>
							</tr>
                        ))}
					</tbody>
				</Table>
			</Card>

			<Modal show={show} onHide={() => setShow(false)} dir="rtl">
				<Modal.Header closeButton>
					<Modal.Title>{editing ? "تعديل اشتراك" : "إضافة اشتراك"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row className="g-3">
						<Col md={6}>
							<Form.Label>اسم العميل</Form.Label>
							<Form.Control value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
						</Col>
						<Col md={6}>
							<Form.Label>تفاصيل الاشتراك</Form.Label>
							<Form.Control value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} />
						</Col>
						<Col md={4}>
							<Form.Label>البداية</Form.Label>
							<Form.Control type="date" value={form.start} onChange={(e) => setForm({ ...form, start: e.target.value })} />
						</Col>
						<Col md={4}>
							<Form.Label>النهاية</Form.Label>
							<Form.Control type="date" value={form.end} onChange={(e) => setForm({ ...form, end: e.target.value })} />
						</Col>
						<Col md={4}>
							<Form.Label>التجديد</Form.Label>
							<Form.Control type="date" value={form.renew} onChange={(e) => setForm({ ...form, renew: e.target.value })} />
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>
						إلغاء
					</Button>
					<Button onClick={handleSave}>حفظ</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}


