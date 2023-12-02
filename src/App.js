import './App.css';
import Input from './Components/Input';
import { useEffect, useState } from 'react';
import axios from 'axios'
 
function App() {
  const [amt1, setAmt1] = useState(0);
  const [curr1, setCurr1] = useState('AED');
  const [curr2, setCurr2] = useState('AED');
  const [result, setResult] = useState(0);
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const apiKey = '34b0aa5bb0605a1a3cdce9f2418cffea';
        const response = await axios.get(
          `http://apilayer.net/api/list?access_key=${apiKey}`
        );
        const data = response.data;
        const currencies = Object.entries(data.currencies).map(([code, name]) => ({
          code,
          name,
        }));
        setCurrencyList(currencies);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  function handleResult(){
    axios.get(`http://api.currencylayer.com/convert?from=${curr1}&to=${curr2}&amount=${amt1}&access_key=34b0aa5bb0605a1a3cdce9f2418cffea`)
    .then(response=>{
      setResult(response.data.result);
    })
    console.log(result)
    return result;
  }

  function handleAmt1Change(amt1) {
    setAmt1(amt1)
    setResult(handleResult())
  }

  function handleCurr1Change(curr1) {
    setCurr1(curr1)
    setResult(handleResult())
  }

  function handleCurr2Change(curr2) {
    setCurr2(curr2)
    setResult(handleResult())
  }


  return (
    <>
    
    <h1>Currency Converter</h1>

      <Input
      onAmountChange={handleAmt1Change}
      onCurrency1Change={handleCurr1Change}
      onCurrency2Change={handleCurr2Change}
      currencies={currencyList}
      amount={amt1}
      currency={curr1}
      currency2={curr2}
      result={result}
      />

      <h2>todaypay</h2>
    </>
  );
}

export default App;
