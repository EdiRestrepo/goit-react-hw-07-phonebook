import { selectAllContacts, SelectFilter } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import css from "./ContactList.module.css";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(SelectFilter);
  const dispatch = useDispatch();

  const deleteId = (contacts) => {
    dispatch(deleteContact(contacts));
  };

  const filterArr = (fArr) => {
    let newArr = fArr.filter((cur) => cur.name.toUpperCase().includes(filter));
    return newArr;
  };

  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])

  return (
    <div>
      <ul>
        {filterArr(contacts)?.map(({ name, phone, id }) => {
          return (
            <div className={css["container-contact"]} key={id}>
              <li>
                {name}: {phone}
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
