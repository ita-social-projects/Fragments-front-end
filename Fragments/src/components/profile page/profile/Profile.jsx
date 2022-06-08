import React, {useEffect, useState} from "react";
import styles from "./Profile.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import LeftSide from "../left side information/LeftSide";



const Profile = () => {
  


  return (
    <form>
      <Container className={styles.fullPage}>
        <Row>
          <Col className={styles.leftSide} sm="3" md="3" lg="3">

            <LeftSide/>
          </Col>
          <Col className={styles.centerInfo}>
            <span>
              <button className={styles.backButton}>
                <img src="arrow back.svg" alt="arrow back" />
                <span className={styles.backButtonText}>Повернутись на головну</span>
              </button>
            </span>
            
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default Profile;
