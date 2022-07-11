import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img
          src={imgUrl}
          style={{ objectFit: "cover", height: "250px", width: "415px" }}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
        </div>
      </div>
    </Col>
  );
};
