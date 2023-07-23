import { addContact } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectAllContacts } from "../../redux/selectors";
import { Button, TextField } from "@mui/material";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  // Obtenemos el enlace a la función de envío de acciones
  const dispatch = useDispatch();
  // Obtener un array con los contactos del estado de Redux
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    let contactForAdd = { name: form.name.value, phone: form.phone.value };
    console.log("Form ",contactForAdd)
    if (contacts.some(({ name }) => name === contactForAdd.name)) {
      alert(`${contactForAdd.name} is already in contacts`);
      return;
    }
    dispatch(addContact(contactForAdd));
    form.reset();
  };

  return (
    <div className={css["form-container"]}>
      <form className={css["contact-form"]} onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          label="Name"
          variant="outlined"
          size="small"
          fullWidth
        />
        <TextField
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          label="Phone: example 123-45-78"
          variant="outlined"
          size="small"
          fullWidth
        />
        <div>
          <Button
            className={css["add-contact"]}
            type="submit"
            variant="outlined"
          >
            Add contact
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
