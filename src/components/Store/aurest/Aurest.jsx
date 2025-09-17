import AurestHero from "./AurestHero";
import AurestAbout from './AurestAbout'
import AurestPricing from "./AurestPricing";
import AurestProducts from "./AurestProducts";
import AurestHeader from "./AurestHeader"
import AurestSideBar from "./AureestSideBar";
import { Container , Row , Col } from "react-bootstrap";
export default function Aurest() {

    return (
        <>
        
        <AurestHero />
         <Container fluid className="main-content">
          <Row>
            <Col lg={3} md={12}>
              <AurestSideBar />
            </Col>
            <Col lg={9} md={12}>
              <AurestAbout />
        <AurestPricing />
        {/* <AurestProducts /> */}
              {/* <AurmenuPricing /> */}
            </Col>
          </Row>
        </Container>
        </>
    )
}  