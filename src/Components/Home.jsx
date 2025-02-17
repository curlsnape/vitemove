import React, { useEffect, useState } from "react";
import Sidenav from "../Partials/Sidenav";
import Topnav from "../Partials/Topnav";
import axios from "../Utils/Axios";
import Header from "../Partials/Header";
import Dropdown from "../Partials/Dropdown";
import Horizontals from "../Partials/Horizontals";

const Home = () => {
    document.title = "Movixer | HomePage";
    const [wallpaper, setwallpaper] = useState(null);
    const [category, setcategory] = useState("all");
    const [trendy, settrendy] = useState(null);
    const getwallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/week`);

            const randomimg =
                data.results[(Math.random() * data.results.length).toFixed()];
            setwallpaper(randomimg);
        } catch (error) {
            console.log(error);
        }
    };
    const gettrendy = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            settrendy(data.results);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (!wallpaper) {
            getwallpaper();
        }

        gettrendy();
    }, [category]);
    return wallpaper && trendy ? (
        <div className="w-full h-full flex">
            <Sidenav />
            <div className="w-[80%] h-full overflow-y-auto">
                <Topnav />
                <Header data={wallpaper} />
                <div className="w-[90%] mx-auto py-5 ">
                    <div className="flex justify-between items-center mb-2 w-full">
                        <h3 className="text-2xl font-bold">Buzzing Now</h3>
                        <Dropdown
                            title="options / category"
                            onSelect={setcategory}
                            options={["all", "movie", "tv"]}
                        />
                    </div>
                    <Horizontals data={trendy} />
                </div>
            </div>
        </div>
    ) : (
        <h1>loading....</h1>
    );
};

export default Home;
