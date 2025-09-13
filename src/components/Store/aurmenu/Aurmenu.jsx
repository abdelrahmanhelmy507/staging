import { Container, Row, Col } from "react-bootstrap";
import AurmenuAbout from "./AurmenuAbout";
import AurmenuHero from "./AurmenuHero";
import AurmenuPricing from "./aurmenuPricing";
import AurmenuFeatures from "./AurmenuFeatures";
import AurmenuSidebar from "./AurmenuSidebar";
import AurmenuHeader from "./AurmenuHeader";
import AurmenuFooter from "./AurmenuFooter";
import AurmenuPackagesHeader from "./AurmenuPackagesHeader";

export default function Aurmenu() {

    return (
        <>
        
        <AurmenuHero />
        {/* <AurmenuPackagesHeader /> */}
        
        <Container fluid className="main-content">
          <Row>
            <Col lg={3} md={12}>
              <AurmenuSidebar />
            </Col>
            <Col lg={9} md={12}>
              <AurmenuAbout />
              <AurmenuFeatures />
              {/* <AurmenuPricing /> */}
            </Col>
          </Row>
        </Container>
        </>
    )
}  