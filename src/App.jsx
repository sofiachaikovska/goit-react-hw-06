import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { selectNameFilter } from "./redux/filtersSlice";

function App() {
  const filter = useSelector(selectNameFilter);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} />
      <ContactList />
    </div>
  );
}

export default App;
