import './App.css';
import Resume from './Resume';
import React from "react";

class FullFun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Lname: "hi", githubLink: "", mailAdd: "", phoneNo: "", linkedinAc: ""
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
      <form>
            <input name="Lname" onChange={this.handleChange} value={this.state.Lname} type="text" placeholder="name" />
            <input name="githubLink" onChange={this.handleChange} value={this.state.githubLink} type="text" placeholder="githubLink" />
            <input name="mailAdd" onChange={this.handleChange} value={this.state.mailAdd} type="text" placeholder="mailAdd" />
            <input name="phoneNo" onChange={this.handleChange} value={this.state.phoneNo} type="number" placeholder="phoneNo" />
            <input name="linkedinAc" onChange={this.handleChange} value={this.state.linkedinAc} type="text" placeholder="linkedinAc" />

            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      <Resume data={this.state} />
    </>
    );
  }
}
export default FullFun;