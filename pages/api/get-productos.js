

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: process.env.API_URL_WORDPRESS,
    consumerKey: process.env.MB_CONSUMER_KEY,
    consumerSecret: process.env.MB_CONSUMER_SECRET,
    version: "wc/v3"
});


export default async function handler(req, res) {

    let resProductsData = {}

    const { slug } = req?.query
    console.log(slug)

    try {
        if (!slug) {
            const { data } = await api.get('products')
            resProductsData = data
            res.json(resProductsData)
            return
        }

        const { data } = await api.get("products", { slug })
        resProductsData = data
        res.json(resProductsData)

    }
    catch (error) {
        resProductsData.error = error.message
        res.status(500).json(resProductsData)
    }
}



