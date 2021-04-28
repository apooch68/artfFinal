import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



export const BasicTextFields = ({question, answer, onCorrectAnswer, disabled }) => {
  const onChangeInput = () => {

  }
  return (
  <div>
      
      <TextField id="standard-basic" label={question} style = {{width: 500}} onChange={onChangeInput} disabled={disabled} />
    </div>
  );
}