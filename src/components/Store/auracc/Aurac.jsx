import AuraccAbout from "./AuraccAbout";
import AuraccHero from "./auracchero";
import AuraccPricing from "./AuraccPricing";
import AuraccSideBar from "./AuraccSideBar";
import { Container , Row , Col } from "react-bootstrap";
export default function Auracc() {

    return (
        <>
           <AuraccHero />

          
        <Container fluid className="main-content">
          <Row>
            <Col lg={3} md={12}>
             <AuraccSideBar />
            </Col>
            <Col lg={9} md={12}>
              <AuraccAbout />
             
          <AuraccPricing />
              {/* <AurmenuPricing /> */}
            </Col>
          </Row>
        </Container>
        </>
    )
}  