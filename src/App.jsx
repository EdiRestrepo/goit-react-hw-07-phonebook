import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { Container, Paper } from "@mui/material";
import Filter from "./components/Filter/Filter";

const App = () => {

  // Loading contacts from local storage
  // useEffect(() => {
    
  //   const savedContacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(savedContacts);
  //   if (parsedContacts?.length) {
  //     setContacts([...parsedContacts]);
  //   }
  // }, []);

  // Saving contacts to local storage
  // useEffect(() => {
  //   if (!isFirstRender.current) {
  //     window.localStorage.setItem("contacts", JSON.stringify(contacts));
  //   }
  //   isFirstRender.current = false;
  // }, [contacts]);

  return (
    <Container>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
          overflow: "hidden",
          mt: 2,
          p: 2,
        }}
      >
        <h1>Phonebook</h1>
        <Paper sx={{ p: 2 }}>
          <ContactForm />
        </Paper>
        <Paper sx={{ p: 2 }}>
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            Contacts
          </h2>
          <Filter/>
          <ContactList/>
        </Paper>
      </Paper>
    </Container>
  );
};

export default App;
