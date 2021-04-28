import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';

export class BasicTextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  onChangeInput = ({ target : { value }}) => {
    if (value.toUpperCase() == this.props.answer.toUpperCase()) {
      this.props.onCorrectAnswer();

      this.setState({
        input: ''
      });

      document.getElementById("standard-basic").blur();
    }
    else {
      this.setState({
        input: value
      });
    }
  }
  render() {
    const {question, disabled } = this.props;
    return (
    <div>
        
        <TextField id="standard-basic" label={question} value={this.state.input} style={{width: 500}} onChange={this.onChangeInput} disabled={disabled} />
      </div>
    );
  }
}