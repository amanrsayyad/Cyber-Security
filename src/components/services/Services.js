import React from "react";
import "./ServicesStyles.css";
import { Link } from "react-router-dom";
import phishing from "../../assets/phishing.jpg";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <div className="service_container">
          <div className="service_card">
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
              alt=""
            />
            <div>
              <h2>Web & Ios mobile development</h2>
              <p>
                We create application for business, One Of The Best Web and Ios,
                Andriod Application Developement Team
              </p>
            </div>
          </div>
          <div className="service_card">
            <img
              src="https://images.unsplash.com/photo-1643139114208-aeb54ff4da72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80"
              alt=""
            />
            <div>
              <h2>Cyber Security & Forensic Services</h2>
              <p>
                Data Recovery, <br/>Mobile phone forensics Damaged hard disk
                forensics <br/>Digital forensic imaging <br/>eDiscovery <br/>Password recovery
                <br/>Video forensics <br/>Digital Forensic Field Kits
              </p>
            </div>
          </div>
          <div className="service_card">
            <img
              src="https://media.cybernews.com/images/featured/2020/10/penetration-testing.jpg"
              alt=""
            />
            <div>
              <h2>Penetration Testing (PT)</h2>
              <p>
                To exploit vulnerabilities and misconfigurations in your
                organization. PT is performed for web & mobile applications,
                internal & external takeover scenarios, and cloud and IoT based
                systems.
              </p>
            </div>
          </div>
          <div className="service_card">
            <img
              src="https://images.unsplash.com/photo-1514996937319-344454492b37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div>
              <h2>Secure Code Review / SSDLC Training</h2>
              <p>
                To provide insights into the types of bugs and issues that may
                compromise your source code, and help make it more secure.
              </p>
            </div>
          </div>
          <div className="service_card">
            <img src={phishing} alt="" />
            <div>
              <h2>Phishing Campaigns</h2>
              <p>
                Simulated phishing campaigns reinforce employee training, and
                help you understand your own risk and improve workforce
                resiliency—these can take many forms, such as mass phishing,
                spear phishing, and whaling.
              </p>
            </div>
          </div>
          <div className="service_card">
            <img
              src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
              alt=""
            />
            <div>
              <h2>HR Recruitment and Services</h2>
              <p>
                An our goal is to efficiently and effectively fill open
                positions. They develop local and national recruiting plans
                using traditional sourcing strategies and new, creative
                recruiting ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
