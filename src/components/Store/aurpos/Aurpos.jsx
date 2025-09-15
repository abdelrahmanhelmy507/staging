import AurposAbout from "./AurposAbout";
import AurposHero from "./AurposHero";
import AurposPlan from "./aurposPlan";
import AurposProducts from "./AurposProducts";
import AurposSideBar from "./AurposSideBar";
import { Container , Row , Col  } from "react-bootstrap";

export default function Aurpos() {

    return (
    <>
          <AurposHero />

          
        <Container fluid className="main-content">
          <Row>
            <Col lg={3} md={12}>
             <AurposSideBar />
            </Col>
            <Col lg={9} md={12}>
              <AurposAbout />
             <AurposPlan />
          <AurposProducts />
              {/* <AurmenuPricing /> */}
            </Col>
          </Row>
        </Container>
    </>
    )
}  