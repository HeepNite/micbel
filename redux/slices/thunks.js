export const getStaticProps = async () => {
    const url = 'http://localhost:1337/paginas-generales';
    const res = await fetch(url);
    const data = await res.json();
    return {
        props: {
        data
        }
    }
}