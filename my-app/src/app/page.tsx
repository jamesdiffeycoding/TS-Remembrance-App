import Container from "./components/Container";
import { historyOne, historyTwo } from "./db";
export default function Home() {
  return (
  <main>
    <h1 className="title">Remembrance</h1>
    <div className="multi-column-grid">
      <div className="timeline">
        <Container profile={historyOne}></Container>
      </div>
      {/* <div className="timeline"> */}
        {/* <Container profile={historyTwo}></Container> */}
      {/* </div> */}
    </div>
  </main>
  );
}
