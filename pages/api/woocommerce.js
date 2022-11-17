import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: process.env.API_URL_WORDPRESS,
    consumerKey: process.env.MB_CONSUMER_KEY,
    consumerSecret: process.env.MB_CONSUMER_SECRET,
    version: "wc/v3"
});


export default async function getProductos(req, res) {

    let resProductsData = {}

    const { slug } = req?.query

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

export  async function postOrden() {

    const data = {
        payment_method: "bacs",
        payment_method_title: "Direct Bank Transfer",
        set_paid: true,
        billing: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
            email: "john.doe@example.com",
            phone: "(555) 555-5555"
        },
        shipping: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US"
        },
        line_items: [
            {
                product_id: 93,
                quantity: 2
            },
            {
                product_id: 22,
                variation_id: 23,
                quantity: 1
            }
        ],
        shipping_lines: [
            {
                method_id: "flat_rate",
                method_title: "Flat Rate",
                total: "10.00"
            }
        ]
    };

    try {
        const response = await api.post('orders', data)
        return response
    }
    catch (error) {
        throw new Error(error)
    }
}
