import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Col,
  Row,
} from "reactstrap";
import * as S from "../";




const SalesSummary = () => {
  return (
    <Card>
      <CardBody>
        <div className="d-md-flex align-items-center">
          <div>
            <CardTitle>Overview</CardTitle>
            <CardSubtitle>Overview of Latest Performance</CardSubtitle>
          </div>
          <div className="ml-auto d-flex no-block align-items-center"> </div>
            
            
         
        </div>
        <Row>
          <Col lg="4">
            <h1 className="mb-0 mt-4">6,890.68 </h1>
            <h6 className="font-light text-muted">Current Total Deposit</h6>
            <h1 className="mt-4 mb-0">2.0%</h1>
            <h6 className="font-light text-muted">Current Contract ROI</h6>
          </Col>
          <Col lg="8">
          <Card body inverse color="danger">
                        <CardBody >
                        <div className="d-flex align-items-center">
                            <div className="mr-2">
                                <h1 className="mb-0"><i className="cc TRX text-white"></i></h1></div>
                            <div>
                                <h6 className="text-white font-medium mb-0">Know More About Us.</h6>
                                <h6 className="text-white font-medium mb-0">Check Investment Conditions.</h6>
                            </div>
                        </div>
                           
                        </CardBody>

                        <CardBody>
                            <CardText className="text-white">See Investment Conditions and see what makes our Smart-contract the most stable system. The administration doesn't have access to contract money and can not make any transfers. The scam is not possible.</CardText>
                            
                            <CardLink href="#">Card Link</CardLink>
                            <CardLink href="#">Another Link</CardLink>
                        </CardBody>
                    </Card>
          </Col>
        </Row>
      </CardBody>
      <CardBody className="border-top">
        <Row className="mb-0">
          <Col lg="3" md="6">
            <S.Statistics
              textColor="orange"
              icon="wallet"
              title="Contract Balance"
              subtitle="3,567.53"
            />
          </Col>
          <Col lg="3" md="6">
            <S.Statistics
              textColor="cyan"
              icon="star-circle"
              title="Referral Earnings"
              subtitle="769.08"
            />
          </Col>
          <Col lg="3" md="6">
            <S.Statistics
              textColor="info"
              icon="shopping"
              title="Number of Investors"
              subtitle="5489"
            />
          </Col>
          <Col lg="3" md="6">
            <S.Statistics
              textColor="primary"
              icon="currency-usd"
              title="Total Withdrawals"
              subtitle="23,568.90"
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SalesSummary;
