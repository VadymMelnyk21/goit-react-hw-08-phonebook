import { Component } from 'react';
import {
  FormContainer,
  InputContainer,
  LableText,
  Button,
  Input,
} from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.submitProp(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.handlerSubmit}>
          <InputContainer>
            <label>
              <LableText>Ім’я контакту</LableText>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handlerChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Ім’я Прізвище"
              />
            </label>
            <label>
              <LableText>Номер</LableText>
              <Input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handlerChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="000-00-00"
              />
            </label>
          </InputContainer>
          <Button type="submit">Додати контакт</Button>
        </form>
      </FormContainer>
    );
  }
}
