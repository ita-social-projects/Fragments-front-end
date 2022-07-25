import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import LeftSide from "../left side information/LeftSide";
import axios from "axios";
import UpperBorderInformation from "../upper border information/UpperBorderInformation";
import DownBorder from "../down border infortmation/DownBorder";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const personid = searchParams.get("id");

  const url = "https://localhost:44361/api/Users";

  useEffect(() => {
    axios
      .get(`${url}/${personid}`)
      .then((response) => {
        getNotes(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  });

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
