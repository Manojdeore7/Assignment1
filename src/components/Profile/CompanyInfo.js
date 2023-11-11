import classes from "./UserProfile.module.css";

const CompanyInfo = () => {
  return (
    <section className={classes.profile}>
      <h1>Company Information</h1>
      <div>
        <p style={{ fontSize: "30px" }}>
          <b>Company:</b>Geeksynergy Technologies Pvt Ltd
        </p>
        <p style={{ fontSize: "30px" }}>
          <b>Address: </b>Sanjayanagar, Bengaluru-56
        </p>
        <p style={{ fontSize: "30px" }}>
          <b>Phone:</b> XXXXXXXXX09
        </p>

        <p style={{ fontSize: "30px" }}>
          <b>Email:</b>
          <p style={{ color: "blue" }}> XXXXXX@gmail.com</p>
        </p>
      </div>
    </section>
  );
};

export default CompanyInfo;
