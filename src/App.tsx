import Card from "./components/Card/Card";
import data from "./data/data.json";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}

      <Card
        item={{
          ...data[0],
          title: "Card title 3",
          text: "This is another card",
          img: "",
        }}
      ></Card>
    </>
  );
};

export default App;
