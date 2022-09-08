import Layaut from "../components/general/Layout"
import User from "../components/general/User"
import { getBannerHeroOne } from "../helper/services"



const usuario = ({ dataBanerHeroOne }) => {
    console.log(dataBanerHeroOne)

    return (
        <Layaut pagina={'Usuario'}>
            <main>
                <User />
            </main>
        </Layaut>
    )
}

export async function getStaticProps() {


    const dataBanerHeroOne = await getBannerHeroOne()
    return {
        props: {
            dataBanerHeroOne
        }
    }
}
export default usuario