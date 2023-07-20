import { getContacts, getFilter } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsSlice";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import css from "./ContactList.module.css";
import { IconButton } from "@mui/material";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteId = (contacts) => {
    dispatch(deleteContact(contacts));
  };

  const filterArr = (fArr) => {
    let newArr = fArr.filter((cur) => cur.name.toUpperCase().includes(filter));
    return newArr;
  };

  return (
    <div>
      <ul>
        {filterArr(contacts)?.map(({ name, number, id }) => {
          return (
            <div className={css["container-contact"]} key={id}>
              <li>
                {name}: {number}
              </li>
              <IconButton
                className={css["delete-contact"]}
                data-id={id}
                onClick={() => deleteId(id)}
                edge="end"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
