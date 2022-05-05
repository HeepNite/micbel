import Link from "next/link";
import Layaut from "../components/general/Layout";
import IndexM from "../components/mobile/IndexM";
import IndexW from "../components/web/IndexW";

const Index = () => {
  return (
    <Layaut pagina={"Inicio"}>
      <main>
        <IndexM />
        <IndexW />
      </main>
    </Layaut>
  );
}

export default Index;
