import { IoMdStarOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// productsData.js
export const productsArr = [
  {
    id: 1,
    title: "Aurages Go 5 Lite",
    description: "نقاط بيع متنقل أساسي للشركات الصغيرة والمتاجر المؤقتة",
    image: "/staging/images/aurmenu.png",
    rating: 5.0,
    reviews: 300,
    price: 1295,
    oldPrice: 2092,
  },
  {
    id: 2,
    title: "Aurages Go 10 Pro",
    description: "حل نقاط بيع متكامل مع دعم للشركات المتوسطة والكبيرة",
    image: "/staging/images/aurmenu.png",
    rating: 4.5,
    reviews: 150,
    price: 2499,
    oldPrice: 2999,
  },
  {
    id: 3,
    title: "Aurages Smart POS",
    description: "نظام نقاط بيع ذكي مع مزايا متقدمة وتقارير تفصيلية",
    image: "/staging/images/aurmenu.png",
    rating: 4.8,
    reviews: 500,
    price: 3999,
    oldPrice: 4500,
  },
];

export default function Products() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    setProducts(productsArr);
    // try{
    //   const res = await axios.get("")
    //   setProducts(res.data)
    // }
    // catch(err){
    //   console.log("Error fetching products : " , err.message)
    // }
  };

  useEffect(() => {
    getAllProducts();
  }, []);


  

  return (
    <section id="products" className="services-section  py-5">
      <Container>
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xl={4} md={6} sm={6} xs={12}>
              <Link
                to={`/products/${product.id}`}
                className="card text-decoration-none text-reset"
              >
                {/* صورة المنتج */}
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>

                {/* الاسم والوصف */}
                <div className="text">
                  <h3 className="title" dir="ltr">
                    {product.title}
                  </h3>
                  <p className="description">{product.description}</p>
                </div>

                {/* التقييم والشراء */}
                <div className="rate">
                  <div className="star-rate">
                    <p className="m-0">التقييم: {product.rating.toFixed(1)}</p>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IoMdStarOutline key={i} className="icon-star" />
                    ))}
                  </div>
                  <div className="icon">
                    <BsFillCartCheckFill className="icon-cart1" />
                    <span>
                      عمليات الشراء
                      <br /> <span>{product.reviews}</span>
                    </span>
                  </div>
                </div>

                {/* السعر */}
                <div className="pricing">
                  <div className="icons">
                    <AiOutlineShoppingCart className="ms-3" />
                    <FaRegHeart />
                  </div>
                  <div className="price mb-4">
                    <p>{product.price} ﷼</p>
                    <del className="text-muted">{product.oldPrice} ﷼</del>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
