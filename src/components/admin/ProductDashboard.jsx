import { useMemo, useState } from "react";
import { Button, Card, Col, Form, Modal, Row, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductDashboard() {
	const [products, setProducts] = useState([
		{ id: 1, name: "نظام المبيعات", price: 299, desc: "حل إدارة المبيعات", image: "../aurpos.png" },
		{ id: 2, name: "قائمة المطعم", price: 149, desc: "قوائم ذكية", image: "/aurmenu.png" },
	]);
	const [search, setSearch] = useState("");
	const [show, setShow] = useState(false);
	const [editing, setEditing] = useState(null);
	const [form, setForm] = useState({ name: "", price: "", desc: "", image: "" });

	const filtered = useMemo(() => {
		return products.filter(
			(p) => p.name.includes(search) || String(p.price).includes(search) || p.desc.includes(search)
		);
	}, [products, search]);

	function openAdd() {
		setEditing(null);
		setForm({ name: "", price: "", desc: "", image: "" });
		setShow(true);
	}

	function openEdit(product) {
		setEditing(product);
		setForm({ name: product.name, price: product.price, desc: product.desc, image: product.image });
		setShow(true);
	}

	function handleSave() {
		if (editing) {
			setProducts((prev) => prev.map((p) => (p.id === editing.id ? { ...p, ...form, price: Number(form.price) } : p)));
		} else {
			const id = Math.max(0, ...products.map((p) => p.id)) + 1;
			setProducts((prev) => [...prev, { id, ...form, price: Number(form.price) }]);
		}
		setShow(false);
	}

	function handleDelete(id) {
		setProducts((prev) => prev.filter((p) => p.id !== id));
	}

	return (
		<div>
			<div className="page-header mb-3">
				<h5 className="m-0">المنتجات</h5>
				<Button onClick={openAdd}>إضافة منتج</Button>
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
							<th>الصورة</th>
							<th>الاسم</th>
							<th>السعر</th>
							<th>الوصف المختصر</th>
							<th>الإجراءات</th>
						</tr>
					</thead>
					<tbody>
						{filtered.map((p, idx) => (
							<tr key={p.id}>
								<td>{idx + 1}</td>
								<td>
									<Image src={p.image} alt={p.name} width={48} height={48} rounded />
								</td>
								<td>
									<Link to={`/aurages/admin/products/${p.id}`}>
										{p.name}
									</Link>
								</td>
								<td>{p.price} ر.س</td>
								<td className="text-truncate" style={{ maxWidth: 240 }}>{p.desc}</td>
								<td>
									<div className="d-flex gap-2">
										<Button size="sm" variant="outline-secondary" onClick={() => openEdit(p)}>
											تعديل
										</Button>
										<Button size="sm" variant="outline-danger" onClick={() => handleDelete(p.id)}>
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
					<Modal.Title>{editing ? "تعديل منتج" : "إضافة منتج"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row className="g-3">
						<Col md={12}>
							<Form.Label>الاسم</Form.Label>
							<Form.Control value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
						</Col>
						<Col md={6}>
							<Form.Label>السعر</Form.Label>
							<Form.Control type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
						</Col>
						<Col md={6}>
							<Form.Label>رابط الصورة</Form.Label>
							<Form.Control value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
						</Col>
						<Col md={12}>
							<Form.Label>الوصف المختصر</Form.Label>
							<Form.Control as="textarea" rows={3} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
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


