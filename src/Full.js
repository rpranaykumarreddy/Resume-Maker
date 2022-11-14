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
        gmail: "rpranayreddy40@gmail.com",
        whatsapp: "917680904589",
        linkedin: "http://www.linkedin.com/in/rpranaykumarreddy"
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

  handleSubmit = e => {
    e.preventDefault();
    window.alert("Submitted" + JSON.stringify(this.state));
  };

  render() {
    return (
      <>
        <div className='FormInter'>
          <form>
            <input name="Lname" onChange={this.handleChange} value={this.state.Lname} type="text" placeholder="name" />
            <input name="githubLink" onChange={this.handleChange} value={this.state.githubLink} type="text" placeholder="githubLink" />
            <input name="mailAdd" onChange={this.handleChange} value={this.state.mailAdd} type="text" placeholder="mailAdd" />
            <input name="phoneNo" onChange={this.handleChange} value={this.state.phoneNo} type="number" placeholder="phoneNo" />
            <input name="linkedinAc" onChange={this.handleChange} value={this.state.linkedinAc} type="text" placeholder="linkedinAc" />

            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
        <Resume data={this.state} />
      </>
    );
  }
}
export default FullFun;