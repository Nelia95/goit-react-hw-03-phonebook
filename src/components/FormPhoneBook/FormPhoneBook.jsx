import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Style from './FormPhoneBook.module.css';
import PropTypes from 'prop-types';

class FormPhoneBook extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  NameInputFormId = uuidv4();
  NumberInputFormId = uuidv4();

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.formContactChange(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={Style.form}>
        <label className={Style.formLabel} htmlFor={this.NameInputFormId}>
          Name
          <input
            id={this.NameInputFormId}
            className={Style.inputForm}
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={Style.formLabel} htmlFor={this.NumberInputFormId}>
          Number
          <input
            id={this.NumberInputFormId}
            className={Style.inputForm}
            type="tel"
            placeholder="Enter number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className={Style.btnForm}>
          Add contact
        </button>
      </form>
    );
  }
}

export default FormPhoneBook;
