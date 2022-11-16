import './App.css';
import Resume from './Resume';
import React from "react";

class FullFun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Ravula Pranay Kumar Reddy",
      link: {
        github: "",
        lgithub: "",
        gmail: "rpranayreddy40@gmail.com",
        lgmail: "https://mailto:rpranayreddy40@gmail.com",
        whatsapp: "917680904589",
        lwhatsapp: "https://wa.me/917680904589",
        linkedin: "rpranaykumarreddy",
        llinkedin: "http://www.linkedin.com/in/rpranaykumarreddy"
      },
      education: [{
        startYear: "2020",
        endYear: "2024",
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Indian Institute of Information Technology, Bhopal",
        CGPA: "8.41"
      }, {
        startYear: "2018",
        endYear: "2020",
        degree: "Intermediate in MPC",
        institution: "Nano Junior College, Nallakunta (TSBIE)",
        percentage: "96.6"
      }, {
        startYear: "2020",
        endYear: "2024",
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Academic Heights Public School, Bhongir (CBSE)",
        percentage: "87.2"
      }],
      portfolioLink: "https://pranay.wethinc.in",
      projects: [{
        category: "Chrome Extension",
        name: "Youtube Playlist Ranger",
        link: "https://chrome.google.com/webstore/detail/alpnapppdjbdbbaagjpchaaipphcnejo",
        role: "Developer",
        teamSize: "1",
        duration: "4 days",
        achievements: ["Understanding the architecture of Chrome Extensions.", "Constant maintenance & bug fixing with version controls."],
        date: "October 22, 2022"
      }, {
        category: "Web App",
        name: "Bulk Certificate Maker & Verifier",
        link: "https://rpranaykumarreddy.github.io/youtube-Ext/",
        role: "Developer",
        teamSize: "2",
        duration: "2 days",
        achievements: ["Maker to produce certificate(.pdf) in bulk along with QR code for verification.", "Verifier to scan the QR Code on certificate & fetch the data of the certificate."],
        date: "September 22, 2022"
      }],
      skills: [
        ["Web Development", "HTML", "CSS", "JavaScript", "SQL", "ReactJS", "Django"],
        ["Languages", "C lang"],
        ["Soft Skills", "Problem Solving", "Effective Communication", "Management Skills", "Perceptive"],
        ["Others", "Git", "GitHub", "Chrome Extensions", "Adobe Photoshop", "MS Access"]
      ],
      achievements: [
        "Secured 2nd position in IBM Innovation Camp: AI | IBM & Edunet",
        "Completion of Finding the leader in You (FLY)-Scholar Program | Competitiveness Mindset Institute"
      ],
      positions: [{
        title: "Google Developer Student Club (GDSC) Lead",
        timeline: "July 2022 - Present"
      },
      {
        title: "Lead Developer at We Thinc Solutions (Freelance) ",
        timeline: "December 2020 – June 2022",
        achievements: ["Built a group to have an environment to work-on different Ideas & to increase efficiency."]
      }
      ]
    };

  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({ [name]: value }));
  };

  setGmail = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setState(prevState);
    value = "mailto:" + value;
    this.setLink(name, value);
  }
  setWhatsapp = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setState(prevState);
    value = "https://wa.me/" + value;
    this.setLink(name, value);
  }
  setGithub = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setState(prevState);
    value = "https://www.github.com/" + value;
    this.setLink(name, value);
  }
  setLinkedin = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setState(prevState);
    value = "https://www.linkedin.com/in/" + value;
    this.setLink(name, value);
  }
  setLink = (n, v) => {
    n = "l" + n;
    var prevState = this.state;
    if (!(v.includes("http://") || v.includes("https://"))) {
      v = "https://" + v;
    }
    prevState.link = { ...prevState.link, [n]: v };
    this.setState(prevState);
  }


  handleSubmit = e => {
    e.preventDefault();
    window.alert("Submitted" + JSON.stringify(this.state));
  };

  render() {
    return (
      <>
        <div className='FormInter'>
          <form>
            <input name="fullName" onChange={this.handleChange} value={this.state.fullName} className="link" type="text" placeholder="Full Name" />
            <input name="github" onChange={this.setGithub} value={this.state.link.github} type="text" placeholder="github ID" />
            <input name="gmail" onChange={this.setGmail} value={this.state.link.gmail} type="text" placeholder="mailAdd" />
            <input name="whatsapp" onChange={this.setWhatsapp} value={this.state.link.whatsapp} type="number" placeholder="phoneNo" />
            <input name="linkedin" onChange={this.setLinkedin} value={this.state.link.linkedin} type="text" placeholder="linkedin ID" />


            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
        <br /><br /><br /><br />
        <Resume data={this.state} />
      </>
    );
  }
}
/*
function showIndex(evt, className) {
  var claArr = document.getElementsByClassName(className);

  for (let i = 0; i < claArr.length; i++)
    if (claArr[i] == evt.target)
      alert(i);
}*/
export default FullFun;