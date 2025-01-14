/* eslint-disable */
// @ts-nocheck
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { nameCleaner, storyCleaner } from "../../utils/utilsCleaner/index";
import "./UserCard.css";

export default function UserCard(props) {
  const { id, photos, name, description, story } = props.userData;

  return (
    <Col md={6} xs={12} key={id} className="user-card-container">
      <Card className="user-card">
        <Card.Body className="user-card__body">
          <div className="profile_Section">
            <img src={photos} alt={name} className="user-card__img" />
            <span className="user-card__title">{nameCleaner(name)}</span>
            <br />
            <span className="user-card__title desc">
              {nameCleaner(description)}
            </span>
          </div>
          <div className="story_Section">
            <div className="story">{storyCleaner(story)}</div>
            <Button
              className="user-card__btn"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              as={Link as any}
              to={"/404/"}
            >
              More Info
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
