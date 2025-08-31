import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function Services() {
  return (
    
    <section id="products" className="services-section  py-5">
      
        <h2 className="text-center fw-bold mb-4 ">حلول نقاط بيع احترافية</h2>
        <Container>
        <Row className="g-4">
            <Col  xl={4}  md={6} sm={6} xs={12}>
              <Card className="product-card h-100">
                <div className="product-image-container border">
                  <Card.Img
                    variant="top"
                    src="/public/unnamed.png"
                    className="product-image"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="product-title ms-2" dir='ltr'>
                    Aurages Go 5 Lite 
                  </Card.Title>
                  <Card.Text className="product-description">
                    حل نقاط بيع متنقل أساسي للشركات الصغيرة والمتاجر المؤقتة 
                  </Card.Text>
                  <div className="product-rate my-3">
                    <span className="rating">
                      نجوم
                    </span>
                  </div>
                  <div className="product-actions mx-3 py-3">
                    <Button
                      variant="primary"
                      className="add-to-cart-btn custom-button"
                    >
                    اضف للعربه
                    </Button>
                    <div className="price">$556</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col  xl={4}  md={6} sm={6} xs={12}>
              <Card className="product-card h-100">
                <div className="product-image-container border">
                  <Card.Img
                    variant="top"
                    src="/public/unnamed.png"
                    className="product-image"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="product-title ms-2" dir='ltr'>
                    Aurages Go 5 Lite 
                  </Card.Title>
                  <Card.Text className="product-description">
                    حل نقاط بيع متنقل أساسي للشركات الصغيرة والمتاجر المؤقتة 
                  </Card.Text>
                  <div className="product-rate my-3">
                    <span className="rating">
                      نجوم
                    </span>
                  </div>
                  <div className="product-actions mx-3 py-3">
                    <Button
                      variant="primary"
                      className="add-to-cart-btn custom-button"
                    >
                    اضف الي العربه
                    </Button>
                    <div className="price">$556</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col  xl={4}  md={6} sm={6} xs={12}>
              <Card className="product-card h-100">
                <div className="product-image-container border">
                  <Card.Img
                    variant="top"
                    src="/public/unnamed.png"
                    className="product-image"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="product-title ms-2" dir='ltr'>
                    Aurages Go 5 Lite 
                  </Card.Title>
                  <Card.Text className="product-description">
                    حل نقاط بيع متنقل أساسي للشركات الصغيرة والمتاجر المؤقتة 
                  </Card.Text>
                  <div className="product-rate my-3">
                    <span className="rating">
                      نجوم
                    </span>
                  </div>
                  <div className="product-actions mx-3 py-3">
                    <Button
                      variant="primary"
                      className="add-to-cart-btn custom-button"
                    >
                    اضف الي العربه
                    </Button>
                    <div className="price">$556</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          
        </Row>
      </Container>
    </section>
  )
}
