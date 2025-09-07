import { useMemo, useState } from "react";
import { Button, Card, Col, Form, Modal, Row, Table } from "react-bootstrap";

export default function UsersDashboard() {
	const [users, setUsers] = useState([
		{ id: 1, name: "أحمد محمد", email: "ahmed@example.com", role: "مشرف" },
		{ id: 2, name: "سارة خالد", email: "sara@example.com", role: "محرر" },
	]);
	const [search, setSearch] = useState("");
	const [show, setShow] = useState(false);
	const [editing, setEditing] = useState(null);
	const [form, setForm] = useState({ name: "", email: "", role: "مستخدم" });

	const filtered = useMemo(() => {
		return users.filter(
			(u) =>
				u.name.includes(search) ||
				u.email.includes(search) ||
				u.role.includes(search)
		);
	}, [users, search]);

	function openAdd() {
		setEditing(null);
		setForm({ name: "", email: "", role: "مستخدم" });
		setShow(true);
	}

	function openEdit(user) {
		setEditing(user);
		setForm({ name: user.name, email: user.email, role: user.role });
		setShow(true);
	}

	function handleSave() {
		if (editing) {
			setUsers((prev) => prev.map((u) => (u.id === editing.id ? { ...u, ...form } : u)));
		} else {
			const id = Math.max(0, ...users.map((u) => u.id)) + 1;
			setUsers((prev) => [...prev, { id, ...form }]);
		}
		setShow(false);
	}

	function handleDelete(id) {
		setUsers((prev) => prev.filter((u) => u.id !== id));
	}

	return (
		<div>
			<div className="page-header mb-3">
				<h5 className="m-0">المستخدمون</h5>
				<Button onClick={openAdd} variant="primary">
					إضافة مستخدم
				</Button>
			</div>
			<Card className="table-card p-3">
				<Row className="g-2 mb-3">
					<Col md={4}>
						<Form.Control
							placeholder="بحث..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</Col>
				</Row>
				<Table responsive hover className="mb-0" dir="rtl">
					<thead>
						<tr>
							<th>#</th>
							<th>الاسم</th>
							<th>البريد الإلكتروني</th>
							<th>الدور</th>
							<th>الإجراءات</th>
						</tr>
					</thead>
					<tbody>
						{filtered.map((u, idx) => (
							<tr key={u.id}>
								<td>{idx + 1}</td>
								<td>{u.name}</td>
								<td>{u.email}</td>
								<td>{u.role}</td>
								<td>
									<div className="d-flex gap-2">
										<Button size="sm" variant="outline-secondary" onClick={() => openEdit(u)}>
											تعديل
										</Button>
										<Button size="sm" variant="outline-danger" onClick={() => handleDelete(u.id)}>
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
					<Modal.Title>{editing ? "تعديل مستخدم" : "إضافة مستخدم"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row className="g-3">
						<Col md={12}>
							<Form.Label>الاسم</Form.Label>
							<Form.Control value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
						</Col>
						<Col md={12}>
							<Form.Label>البريد الإلكتروني</Form.Label>
							<Form.Control type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
						</Col>
						<Col md={12}>
							<Form.Label>الدور</Form.Label>
							<Form.Select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
								<option>مستخدم</option>
								<option>محرر</option>
								<option>مشرف</option>
							</Form.Select>
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


