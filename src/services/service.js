import { updateCountryList, updateCountry, getCurrencyList } from "../actions/action-creators";
import axios from 'axios';
import convert from 'xml-js';

// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

var dateFormat = require('dateformat');
// var convert = require('xml-js');

//*************************************************
var xml = "<ValCurs Date=\"30.10.2018\" Name=\"AZN məzənnələri\" Description=\"Azərbaycan Respublikası Mərkəzi Bankının 30.10.2018 tarixdən etibarən xarici valyutaların və bank metallarının Azərbaycan manatına qarşı rəsmi məzənnələri bülleteni\">\n" +
    "<ValType Type=\"Bank metalları\">\n" +
    "<Valute Code=\"XPD\">\n" +
    "<Nominal>1 t.u.</Nominal>\n" +
    "<Name>Palladium</Name>\n" +
    "<Value>1864.6025</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"XPT\">\n" +
    "<Nominal>1 t.u.</Nominal>\n" +
    "<Name>Platin</Name>\n" +
    "<Value>1420.8770</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"XAG\">\n" +
    "<Nominal>1 t.u.</Nominal>\n" +
    "<Name>Gümüş</Name>\n" +
    "<Value>24.6736</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"XAU\">\n" +
    "<Nominal>1 t.u.</Nominal>\n" +
    "<Name>Qızıl</Name>\n" +
    "<Value>2087.4130</Value>\n" +
    "</Valute>\n" +
    "</ValType>\n" +
    "<ValType Type=\"Xarici valyutalar\">\n" +
    "<Valute Code=\"CZK\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Çexiya kronu</Name>\n" +
    "<Value>0.0748</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"IRR\">\n" +
    "<Nominal>100</Nominal>\n" +
    "<Name>İran rialı</Name>\n" +
    "<Value>0.0040</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"KRW\">\n" +
    "<Nominal>100</Nominal>\n" +
    "<Name>Cənubi Korea vonu</Name>\n" +
    "<Value>0.1492</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"TMT\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Yeni türkmən manatı</Name>\n" +
    "<Value>0.4857</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"RUB\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Rusiya rublu</Name>\n" +
    "<Value>0.0259</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"GEL\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Gürcü larisi</Name>\n" +
    "<Value>0.6304</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"NZD\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Yeni Zelandiya dolları</Name>\n" +
    "<Value>1.1134</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"KZT\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Qazaxıstan tengəsi</Name>\n" +
    "<Value>0.0046</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"NOK\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Norveç kronu</Name>\n" +
    "<Value>0.2029</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"GBP\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>İngilis funt sterlinqi</Name>\n" +
    "<Value>2.1771</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"BYN\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Belarus rublu</Name>\n" +
    "<Value>0.8054</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"TRY\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Türk lirəsi</Name>\n" +
    "<Value>0.3064</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"EGP\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Misir funtu</Name>\n" +
    "<Value>0.0949</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"LBP\">\n" +
    "<Nominal>100</Nominal>\n" +
    "<Name>Livan funtu</Name>\n" +
    "<Value>0.1126</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"KWD\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Küveyt dinarı</Name>\n" +
    "<Value>5.5979</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"UZS\">\n" +
    "<Nominal>100</Nominal>\n" +
    "<Name>Özbək somu</Name>\n" +
    "<Value>0.0206</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"SEK\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>İsveç kronu</Name>\n" +
    "<Value>0.1860</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"CNY\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Çin yuanı</Name>\n" +
    "<Value>0.2439</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"TWD\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Tayvan dolları</Name>\n" +
    "<Value>0.0549</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"CLP\">\n" +
    "<Nominal>100</Nominal>\n" +
    "<Name>Çili pesosu</Name>\n" +
    "<Value>0.2463</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"IDR\">\n" +
    "<Nominal>100</Nominal>\n" +
    "<Name>İndoneziya rupiası</Name>\n" +
    "<Value>0.0112</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"INR\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Hindistan rupisi</Name>\n" +
    "<Value>0.0231</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"KGS\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Qırğız somu</Name>\n" +
    "<Value>0.0245</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"CAD\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Kanada dolları</Name>\n" +
    "<Value>1.2964</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"MYR\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Malayziya rinqqiti</Name>\n" +
    "<Value>0.4066</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"TJS\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Tacik somonisi</Name>\n" +
    "<Value>0.1804</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"MDL\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Moldova leyi</Name>\n" +
    "<Value>0.0993</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"ILS\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>İsrail şekeli</Name>\n" +
    "<Value>0.4581</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"SGD\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Sinqapur dolları</Name>\n" +
    "<Value>1.2293</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"SDR\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>SDR (BVF-nun xüsusi borcalma hüquqları)</Name>\n" +
    "<Value>2.3553</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"JPY\">\n" +
    "<Nominal>100</Nominal>\n" +
    "<Name>Yapon yeni</Name>\n" +
    "<Value>1.5084</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"PLN\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Polşa zlotası</Name>\n" +
    "<Value>0.4470</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"AUD\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Avstraliya dolları</Name>\n" +
    "<Value>1.2056</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"SAR\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Səudiyyə Ərəbistanı rialı</Name>\n" +
    "<Value>0.4532</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"BRL\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Braziliya rialı</Name>\n" +
    "<Value>0.4570</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"ARS\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Argentina pesosu</Name>\n" +
    "<Value>0.0461</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"UAH\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Ukrayna qrivnası</Name>\n" +
    "<Value>0.0604</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"DKK\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Danimarka kronu</Name>\n" +
    "<Value>0.2593</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"EUR\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Avro</Name>\n" +
    "<Value>1.9348</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"MXN\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Meksika pesosu</Name>\n" +
    "<Value>0.0847</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"ZAR\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Cənubi Afrika randı</Name>\n" +
    "<Value>0.1160</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"CHF\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>İsveçrə frankı</Name>\n" +
    "<Value>1.6965</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"HKD\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>Honq Konq dolları</Name>\n" +
    "<Value>0.2167</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"AED\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>BƏƏ dirhəmi</Name>\n" +
    "<Value>0.4628</Value>\n" +
    "</Valute>\n" +
    "<Valute Code=\"USD\">\n" +
    "<Nominal>1</Nominal>\n" +
    "<Name>ABŞ dolları</Name>\n" +
    "<Value>1.7000</Value>\n" +
    "</Valute>\n" +
    "</ValType>\n" +
    "</ValCurs>";


export const updateCountryListService = region => dispatch => {
    let countryList = []
    axios
        .get('https://restcountries.eu/rest/v2/region/' + region)
        .then(res => {
            res.data.map(data => {
                console.log(data['name']);
                // countryList.push(data['name'])
                countryList = [...countryList, data['name']]
            })
            return countryList;
        })
        .then(countryList => {
            dispatch(updateCountryList(countryList));
            dispatch(updateCountry(countryList[0]));
        })
        .catch(err => {
            console.error("error occurs -> ", err);
        })
}

export const getCurrencyListService = () => dispatch => {
    let currencyList = []
    const today = dateFormat(new Date(), "dd.mm.yyyy");
    console.log("today: ", today)

    axios
        .get('https://www.cbar.az/currencies/' + today + '.xml')
        .then(res => {
            console.log("res : ", res)
            console.log("res data: ", res.data)

            const json = convert.xml2js(res.data, { compact: true, spaces: 4 });
            const curData = json.ValCurs.ValType[1].Valute;

            curData.map(cur => {
                const currency = {
                    name: cur.Name._text,
                    nominal: cur.Nominal._text,
                    value: cur.Value._text,
                    code: cur._attributes.Code
                };
                currencyList = [...currencyList, currency];
            })

            console.log("currencyList by axios: ", currencyList)

            return currencyList;
        })
        .then(currencyList => {
            dispatch(getCurrencyList(currencyList));
        })
        .catch(err => {
            console.error("getCurrencyListService error occurs -> ", err);

            const json = convert.xml2js(xml, { compact: true, spaces: 4 });
            const curData = json.ValCurs.ValType[1].Valute;

            curData.map(cur => {
                const currency = {
                    name: cur.Name._text,
                    nominal: cur.Nominal._text,
                    value: cur.Value._text,
                    code: cur._attributes.Code
                };
                currencyList = [...currencyList, currency];
            })

            console.log("currencyList from manual xml: ", currencyList)

            dispatch(getCurrencyList(currencyList));
        })
}