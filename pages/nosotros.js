import Layaut from "../components/general/Layout";
import NosotrosM from "../components/mobile/NosotrosM";
import NosotrosW from "../components/web/NosotrosW";

const Nosotros = ({ data }) => {
    console.log(data)
    return (
        <Layaut pagina={'Nosotros'}>
            <main>
                <NosotrosM data={data} />
                <NosotrosW data={data} />
            </main>
        </Layaut>
    );
}

export async function getStaticProps() {
    const url = 'http://localhost:1337/nosotros';
    const res = await fetch(url);
    const data = await res.json();
    return {
        props: {
            data
        }
    }

}

export default Nosotros;