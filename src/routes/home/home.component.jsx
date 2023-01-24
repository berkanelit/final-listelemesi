import { Outlet } from "react-router-dom";
import Directory from '../../components/directory/directory.component'

const Home = () => {
    const categories = [
        {
            "id": 1,
            "title": "United States",
            "ID Year": 2020,
            "Year": "2020",
            "Population": 326569308,
            "Slug Nation": "united-states",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        }, {
            "id": 2,
            "title": "United States",
            "ID Year": 2019,
            "Year": "2019",
            "Population": 324697795,
            "Slug Nation": "united-states",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        }, {
            "id": 3,
            "title": "United States",
            "ID Year": 2018,
            "Year": "2018",
            "Population": 322903030,
            "Slug Nation": "united-states",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        }, {
            "id": 4,
            "title": "United States",
            "ID Year": 2017,
            "Year": "2017",
            "Population": 321004407,
            "Slug Nation": "united-states",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        }
    ]

    return (
        <div>
            <Directory categories={categories} />
            <Outlet />
        </div>
    );
}

export default Home;
