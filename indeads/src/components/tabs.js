"use client";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../app/page.module.css"

export default function Tabz() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
     {/*} <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact 
      </Tab> {*/}
    </Tabs>
  );
}

