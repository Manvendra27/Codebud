import React, { Component } from 'react'
import './InfoForm.css'

export class InfoForm extends Component {
    state = { values: [{ value: null }] };

    createUI() {
        return this.state.values.map((el, i) => (
          <div key={i}>
            <input
              type="text"
              value={el.value || ""}
              onChange={this.handleChange.bind(this, i)}
            />
            <input
              type="button"
              value="remove"
              onClick={this.removeClick.bind(this, i)}
            />
          </div>
        ));
      }

      handleChange(i, event) {
        let values = [...this.state.values];
        values[i].value = event.target.value;
        this.setState({ values });
      }
    
      addClick() {
        this.setState(prevState => ({
          values: [...prevState.values, { value: null }]
        }));
      }
      removeClick(i) {
        let values = [...this.state.values];
        values.splice(i, 1);
        this.setState({ values });
      }

      handleSubmit(event) {
        alert("A name was submitted: " + this.state.values.join(", "));
        event.preventDefault();
      }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 formHeader'>
                        <h1>Complete Your Profile</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 form'><br/><br/>
                        <form onSubmit={this.handleSubmit}>
                            <h3>Domain</h3><br/>
                            <div className='row'>
                                <div className='col-sm-6'>
                                <label>Major:</label>
                                <input className='domainInput' name='major' type='text' placeholder='' style={{marginLeft:'1rem'}}></input>
                                </div>
                                <div className='col-sm-6'>
                                <label>Minor:</label>
                                <input className='domainInput' name='minor' type='text' placeholder='' style={{marginLeft:'1rem'}}></input><br/>
                                </div>
                                </div>
                                <div className='row' style={{marginTop:'5rem'}}>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-sm-12 col-lg-6'>
                                            <span style={{fontSize:'30px'}}>Languages and Frameworks I know </span>
                                            <button className='addBtn' type='button' onClick={() => this.addClick()}> +</button>
                                            </div>
                                            <div className='col-sm-12 col-lg-6'>
                                            {this.state.values.map((el, i) => (
                                            <div className='languageSelect' key={i}>
                                                <input
                                                className='language'
                                                type="text"
                                                value={el.value || ""}
                                                onChange={e => this.handleChange(i, e)}
                                                />
                                                <button className='delBtn' type="button"
                                                value="X"
                                                onClick={() => this.removeClick(i)}>X</button>
                                            </div>
                                            ))}
                                            </div>
                                        </div>
                                <br/><br/>
                                    </div>
                                </div>
                                <div className='row Projects'>
                                    <div className='col-sm-12'>
                                    <h3>Projects</h3>
                                    <label>Project Title </label>
                                    <input className='ProjectTilte'></input><br/>
                                    <label>Project Summary</label>
                                    <input className='ProjectSummary'></input>

                                    </div>
                                </div>
                                <button type="submit" value="Submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoForm
