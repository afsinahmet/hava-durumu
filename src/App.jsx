import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Cityinfo from "./components/Cityinfo";
import TurkeyMap from "turkey-map-react";

function App() {
  const [sehir, setSehir] = useState("");
  const [city, setCity] = useState("");

  const sehirler = [
    "Adana",
    "Adıyaman",
    "Afyon",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Isparta",
    "İçel (Mersin)",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
  ];
  const key = "3e9777c687ea9e71e6cbebf0821dece4";
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${key}`
        );

        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (sehir !== "") {
      getApi();
    }
  }, [sehir]);

  const sehirYakala = (e) => {
    setSehir(e.target.value);
  };

  return (
    <>
      <TurkeyMap onClick={({ name }) => setSehir(name)} />
      <select onChange={sehirYakala}>
        {sehirler.map((sehir, index) => (
          <option key={index} value={sehir}>
            {sehir}
          </option>
        ))}
      </select>
      {city && <Cityinfo city={city} />}
    </>
  );
}

export default App;
