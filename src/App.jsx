import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { Container, Paper } from "@mui/material";
import Filter from "./components/Filter/Filter";
import { useSelector } from "react-redux";

const App = () => {

  const {isLoading, error} = useSelector((state) => state.contacts)

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
          <Filter />
          {isLoading && !error && <p>Feching data...</p>}
          <ContactList/>
        </Paper>
      </Paper>
    </Container>
  );
};

export default App;
