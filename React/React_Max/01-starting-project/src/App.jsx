import Accordion from "./components/Accordion/Accordion";
import SearchAbleList from "./components/SearchAbleList/SearchAbleList";
import Places from "./components/Places/Places";
import PLACES from "./Data/data";

function App() {
  const items = [
    {
      title: "We have 20 years of experience",
      mainContent: <p>You can&apos;t go wrong with us.</p>,
      subContent: (
        <p>
          We are in the business of planning highly individualized vacation
          trips for more than 20 years.
        </p>
      ),
    },
    {
      title: "We love dogs!!!!",
      mainContent: <p>We like walking dogs!!!</p>,
      subContent: <p>Been doing this shit for more than 20 years!!!!</p>,
    },
  ];

  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          {items.map((item, idx) => (
            <Accordion.Item key={idx} id={idx} className="accordion-item">
              <Accordion.Header className="accordion-item-title">
                {item.title}
              </Accordion.Header>
              <Accordion.Content className="accordion-item-content">
                <article>
                  {item.mainContent}
                  {item.subContent}
                </article>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </section>
      <section>
        <SearchAbleList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Places item={item} />}
        </SearchAbleList>
        <SearchAbleList items={["Item_1", "Item_2"]} itemKeyFn={(item) => item}>
          {(item) => <p>{item}</p>}
        </SearchAbleList>
      </section>
    </main>
  );
}

export default App;
