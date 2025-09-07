import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Row, Col, Badge, Image, Button } from "react-bootstrap";

const MOCK = [
	{ id: 1, name: "نظام المبيعات", price: 299, desc: "حل إدارة المبيعات المتكامل مع نقاط البيع.", image: "/aurpos.png" },
	{ id: 2, name: "قائمة المطعم", price: 149, desc: "قوائم ذكية قابلة للتحديث لحظياً.", image: "/aurmenu.png" },
];

export default function ProductDetails() {
	const { id } = useParams();
	const product = useMemo(() => MOCK.find((p) => String(p.id) === String(id)), [id]);

	if (!product) {
		return <div className="text-center text-muted">لم يتم العثور على المنتج</div>;
	}

	return (
		<div>
			<div className="page-header mb-3">
				<h5 className="m-0">تفاصيل المنتج</h5>
				<Button as={Link} to="/aurages/admin/products" variant="outline-secondary">
					رجوع
				</Button>
			</div>
			<Card className="p-3">
				<Row className="g-3 align-items-center">
					<Col md="auto">
						<Image src={product.image} width={96} height={96} rounded />
					</Col>
					<Col>
						<h5 className="mb-1">{product.name}</h5>
						<div className="text-muted">{product.desc}</div>
					</Col>
					<Col md="auto">
						<Badge className="badge-soft px-3 py-2">{product.price} ر.س</Badge>
					</Col>
				</Row>
			</Card>
		</div>
	);
}


