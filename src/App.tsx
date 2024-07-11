import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() =>setAlertVisible(false)}>My Alert</Alert>}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>My poop</Button>
      
    </div>
  );

}

export default App;