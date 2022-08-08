import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import LeftSide from "../left side information/LeftSide";
import UpperBorderInformation from "../upper border information/UpperBorderInformation";
import DownBorder from "../down border infortmation/DownBorder";
import { useSearchParams } from "react-router-dom";
import getDataFromApi from "../getmethod/getDataFromApi";

const Profile = () => {
  const [notes, getNotes] = useState({
    id: "",
    fullName: "",
    email: "",
    birthday: "",
    photo: "",
    representativeHEI: "",
    representativeAuthority: "",
    benefits: "",
    interests: "",
    channelsOfRefferences: [{ optionSelected: "", details: "" }],
  });
  const [searchParams] = useSearchParams();
  const personid = searchParams.get("id");

  useEffect(() => {
    getDataFromApi({ getNotes, personid });
  }, [personid]);

  const mapping = () => {
    console.log(notes);
  };

  return (
    <form>
      <Container className={styles.fullPage}>
        <Row>
          <Col
            className={styles.leftSide}
            onClick={mapping}
            sm="3"
            md="3"
            lg="3"
          >
            <LeftSide
              fullName={notes.fullName}
              birthday={notes.birthday}
              representativeHEI={notes.representativeHEI}
              representativeAuthority={notes.representativeAuthority}
            />
          </Col>
          <Col className={styles.centerInfo}>
            <UpperBorderInformation
              email={notes.email}
              channelsOfRefferences={notes.channelsOfRefferences}
            />
            <DownBorder benefits={notes.benefits} interests={notes.interests} />
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default Profile;
