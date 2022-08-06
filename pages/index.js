import Layaut from "../components/general/Layout";
import IndexM from "../components/mobile/IndexM";
import IndexW from "../components/web/IndexW";
import { wrapper } from "../redux/store";
import { addUser } from '../redux/slices/PaginasGenerales/PoliticasSlice'

const Index = ({ data }) => {




  return (
    <Layaut pagina={"Inicio"}>
      <main>

        <IndexM />
        <IndexW />
      </main>
    </Layaut>
  );
}

/* export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {

  const url = 'http://localhost:1337/paginas-generales';
  const res = await fetch(url);
  const data = await res.json();
  store.dispatch(getPoliticas(data))
  return {
    props: {
      data
    }
  }
})
 */


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const response = await fetch(
      `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
    );
    const { data } = await response.json();
    store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
  })

export default Index;
