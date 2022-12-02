import PropTypes from 'prop-types';
import Style from './Contacts.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={Style.contactsList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={Style.contactsItem} key={id}>
            <p className={Style.contactsText}>
              {name}: <span>{number}</span>
            </p>
            <button
              className={Style.contactsBtn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
