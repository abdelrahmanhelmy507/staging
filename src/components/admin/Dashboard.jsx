import { Card, Col, Row, Badge } from "react-bootstrap";

function MiniBar({ data = [] }) {
	const max = Math.max(...data, 1);
	return (
		<div className="d-flex align-items-end gap-1" style={{ height: 64 }}>
			{data.map((v, i) => (
				<div key={i} style={{ width: 10, height: (v / max) * 64, background: "var(--text-color2)", borderRadius: 4 }} />
			))}
		</div>
	);
}

export default function Dashboard() {
	return (
		<div className="">
			<div className="page-header mb-3">
				<h4 className="m-0">الرئيسية</h4>
				<Badge className="badge-soft">محدث الآن</Badge>
			</div>
			<Row className="g-3">
				<Col md={6} lg={3}>
					<Card className="stat-card p-3">
						<div className="text-muted small">إجمالي المستخدمين</div>
						<div className="fs-3 fw-bold">128</div>
						<MiniBar data={[2, 5, 3, 7, 9, 12, 8]} />
					</Card>
				</Col>
				<Col md={6} lg={3}>
					<Card className="stat-card p-3">
						<div className="text-muted small">إجمالي المنتجات</div>
						<div className="fs-3 fw-bold">54</div>
						<MiniBar data={[1, 4, 6, 3, 8, 10, 7]} />
					</Card>
				</Col>
				<Col md={6} lg={3}>
					<Card className="stat-card p-3">
						<div className="text-muted small">اشتراكات فعّالة</div>
						<div className="fs-3 fw-bold">39</div>
						<MiniBar data={[3, 3, 5, 6, 6, 9, 11]} />
					</Card>
				</Col>
				<Col md={6} lg={3}>
					<Card className="stat-card p-3">
						<div className="text-muted small">اشتراكات منتهية</div>
						<div className="fs-3 fw-bold">15</div>
						<MiniBar data={[6, 5, 5, 4, 3, 2, 2]} />
					</Card>
				</Col>
			</Row>

			<Row className="g-3 mt-1">
				<Col lg={8}>
					<Card className="chart-box">
						<div className="d-flex justify-content-between align-items-center mb-2">
							<h6 className="m-0">الإيرادات الشهرية</h6>
							<span className="text-muted small">آخر 12 شهر</span>
						</div>
						<svg width="100%" height="220" viewBox="0 0 600 220">
							<defs>
								<linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
									<stop offset="0%" stopColor="rgba(5,131,242,0.35)" />
									<stop offset="100%" stopColor="rgba(5,131,242,0.05)" />
								</linearGradient>
							</defs>
							<path d="M0,180 C100,120 200,150 300,90 C400,40 500,100 600,60 L600,220 L0,220 Z" fill="url(#g)" />
							<path d="M0,180 C100,120 200,150 300,90 C400,40 500,100 600,60" stroke="var(--text-color2)" strokeWidth="3" fill="none" />
						</svg>
					</Card>
				</Col>
				<Col lg={4}>
					<Card className="chart-box">
						<h6>الحالة العامة للاشتراكات</h6>
						<svg width="100%" height="220" viewBox="0 0 220 220">
							<circle cx="110" cy="110" r="90" fill="none" stroke="#eee" strokeWidth="18" />
							<circle cx="110" cy="110" r="90" fill="none" stroke="var(--text-color2)" strokeWidth="18" strokeDasharray="350" strokeDashoffset="120" strokeLinecap="round" />
						</svg>
						<div className="text-center">
							<span className="badge badge-soft px-3 py-2">72% فعّال</span>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
