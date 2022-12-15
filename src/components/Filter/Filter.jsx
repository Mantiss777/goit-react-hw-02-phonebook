import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onChange, filter }) => {
  return (
    <section className={css.container}>
      <h2>Contacts</h2>
      <label className={css.label}>
        <p>Find contacts by name</p>
        <input
          label="Find contacts by name"
          value={filter}
          type="text"
          name="filter"
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </section>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
