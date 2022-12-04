import PropTypes from 'prop-types';
import Style from './Contacts.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={Style.contactsList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
export default ContactList;
