
import { Row, Col, Form, Card , Container } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import StoreHeader from './storeHeader';
import Products from './products';


export default function Filter() {

    return (
        <>
            <StoreHeader />
            <Container >
           <Card className="mb-4 shadow-sm">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col md={1}>
                                <FaFilter className="text-primary" />
                                <span className="fw-bold ms-2">الفلاتر:</span>
                            </Col>
                            <Col md={4} >
                                <Form.Select >
                                    <option value="all">جميع الفئات</option>
                                    <option value="restaurant">أورست  </option>
                                    <option value="warehouse">اوربوس </option>
                                    <option value="pos"> اورمينيو </option>
                                    <option value="accounting">اوراك</option>
                                    
                                </Form.Select>
                            </Col>
                            <Col md={4}>
                                <Form.Select>
                                    <option value="all">جميع الأسعار</option>
                                    <option value="0-2000">أقل من 2000 ريال</option>
                                    <option value="2000-3000">2000 - 3000 ريال</option>
                                    <option value="3000-4000">3000 - 4000 ريال</option>
                                    <option value="4000-5000">4000 - 5000 ريال</option>
                                    <option value="5000+">أكثر من 5000 ريال</option>
                                </Form.Select>
                            </Col>
                            <Col md={3}>
                                <Form.Select>
                                    <option value="newest">الأحدث</option>
                                    <option value="price-low">السعر: من الأقل للأعلى</option>
                                    <option value="price-high">السعر: من الأعلى للأقل</option>
                                    <option value="rating">الأعلى تقييماً</option>
                                    <option value="popular">الأكثر شعبية</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                </Container>
                <Products />
                </>
    )
}  