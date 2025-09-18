import React, { useEffect, useState } from "react";
import { Container , Row , Col , Badge , Button , Card } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import './cart.css'
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const products =  [
  {
    id: 1,
    name: "ترخيص أورست التميت" ,
    category: "باقه",
    image: "/staging/images/product1.png",
    price: 199.99,
    quantity: 1
  },
  {
    id: 2,
    name: "ترخيص أورست برو ",
    category: "باقه",
    image: "/staging/images/product2.png",
    price: 1299.00,
    quantity: 2
  },
  {
    id: 3,
    name: "طابعة كاشير HPRT – TP80BE",
    category : "طابعه",
    image: "/staging/images/product3.webp",
    price: 899.0,
    quantity: 1
  },
];

export default function Cart (){
     const [cartItems, setCartItems] = useState([]);
  const { t } = useTranslation();

  const getCartItems = async () => {
    try {

      setCartItems(products);

      // const res = await axios.get("");
      // setCartItems(res.data);
    } catch (err) {
      console.log("cart items error:", err);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  // زيادة الكمية
  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    // await axios.put(`/cart/${id}/increase`);
  };

  const hendleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    // await axios.put(`/cart/${id}/decrease`);
  };

  const handledelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));

    // await axios.delete(`/cart/${id}`);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  

    return(
        <>
        <Container fluid className="cart-page pt-5 mt-5" >
      <Container>
        <div className="cart-header mb-4">
          <Row className="align-items-center">
            <Col>
              <div className="cart-title-section">
                <FaShoppingBag className="cart-icon" />
                <h1 className="cart-title">{t("سلة المنتجات")}</h1>
                <Badge bg="secondary" className="cart-count">
                  {cartItems.length + " "}
                  {cartItems.length <= 1 ? t("منتج") : t("منتجات")}
                </Badge>
              </div>
            </Col>
            <Col xs="auto">
              <Link to={"/store"}>
                <Button
                  variant="outline-primary"
                  className="continue-shopping-btn"
                >
                  {t("اكمل التسوق")} <FaArrowLeft /> 
                </Button>
              </Link>
            </Col>
          </Row>
        </div>

        <Row className="g-4">
          <Col lg={8}>
            <div className="cart-items-section">
              {cartItems.map(item => (
                <Card className="cart-item-card mb-3" key={item.id}>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={6} sm={3} md={2}>
                        <div className="cart-item-image">
                          <img src={item.image} alt="" className="product-thumbnail"/>
                        </div>
                      </Col>

                      <Col xs={6} sm={9} md={4}>
                        <div className="cart-item-details">
                          <h5 className="product-name">{item.name}</h5>
                          <p className="product-category">{item.category}</p>
                          <div className="price-info">
                            <span className="current-price">{item.price}</span>
                          </div>
                        </div>
                      </Col>

                      <Col xs={4} md={3} className="align-items-center">
                        <div className="quantity-controls pt-2">
                          <label className="quantity-label">{t("الكميه")}</label>
                          <div className="quantity-buttons">
                            <Button
                              onClick={() => handleIncrease(item.id)}
                              variant="outline-secondary"
                              size="sm"
                              className="quantity-btn"
                            >+</Button>
                            <span className="quantity-display">{item.quantity}</span>
                            <Button
                              onClick={() => hendleDecrease(item.id)}
                              variant="outline-secondary"
                              size="sm"
                              className="quantity-btn"
                              disabled={item.quantity === 1}
                            >-</Button>
                          </div>
                        </div>
                      </Col>

                      <Col xs={8} md={3}>
                        <div className="item-total-section">
                          <div className="item-total">
                            <span className="total-label">{t("الاجمالي")}:{item.price * item.quantity}</span>
                          </div>
                          <Button
                            onClick={() => handledelete(item.id)}
                            variant="outline-danger"
                            size="sm"
                            className="delete-btn"
                          >
                            {t("حذف")} <FaTrash />
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>

          <Col lg={4}>
            <Card className="cart-summary-card">
              <Card.Header className="summary-header">
                <h4>{t("ملخص الطلب")}</h4>
              </Card.Header>
              <Card.Body>
                <div className="summary-details">
                  <div className="summary-row">
                    <span>{t("المجموع الفرعي")} {cartItems.length} {t("منتجات")}</span>
                    <span>{subtotal}</span>
                  </div>

                  <div className="summary-row discount-row">
                    <span>{t("خصم")}</span>
                    <span className="discount-amount">-10$</span>
                  </div>

                  <div className="summary-row">
                    <span>{t("الشحن")}</span>
                    <span>{t("مجاني")}</span>
                  </div>

                  <hr className="summary-divider" />

                  <div className="summary-row total-row">
                    <span className="total-label">{t("اجمالي الطلب")}</span>
                    <span className="total-amount">$190</span>
                  </div>
                </div>

                <div className="summary-actions">
                  <Button variant="primary" size="lg" className="checkout-btn w-100 mb-3">
                    {t("اتمام عمليه الدفع")}
                  </Button>

                  <div className="payment-methods">
                    <div className="payment-icons">
                      <span className="payment-icon">💳</span>
                      <span className="payment-icon">📱</span>
                      <span className="payment-icon">🏦</span>
                    </div>
                  </div>
                </div>

                <div className="summary-benefits">
                  <div className="benefit-item">
                    <Badge bg="success" className="benefit-badge">✓</Badge>
                    <span>{t("شحن مجاني للطلبات التي تزيد عن 100 دولار")}</span>
                  </div>
                  <div className="benefit-item">
                    <Badge bg="success" className="benefit-badge">✓</Badge>
                    <span>{t("سياسة الإرجاع لمدة 30 يومًا")}</span>
                  </div>
                  <div className="benefit-item">
                    <Badge bg="success" className="benefit-badge">✓</Badge>
                    <span>{t("معالجة الدفع الآمنة")}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
        </>
    )
}