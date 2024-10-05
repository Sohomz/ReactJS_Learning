import React, { useEffect, useState, useRef } from 'react'
import Dropdown from './Dropdown.jsx'
import useCurrencyFetch from '../hooks/useCurrencyFetch.js';
import useConverterFetch from '../hooks/useConverterFetch.js';

function CurrencyConverter() {
  //Currencies api: const host = 'https://api.frankfurter.app/currencies';
  //for conversion:'https://api.frankfurter.app/latest?amount=100&from=USD&to=INR';
  const {currencies}=useCurrencyFetch();
  const [amount,setAmount]=useState(1);
  const [fromCurrency, setfromCurrency] = useState("AUD")
  const [toCurrency, settoCurrency] = useState("AUD")
  const [convertedAmount,setConvertedAmount]=useState(1)
  const {data:amntCurData}=useConverterFetch(amount, fromCurrency, toCurrency);// returned data stored into "data" variable and then assigning the value into amntCurData
  const inputRef = useRef(null); // Creating a ref for the input element
  const fCur=useRef(null);
  const tCur=useRef(null);

  //console.log(currencies);

  //I'm using this useEffect to achieve whenevr I change the dropdown, the value will change
  useEffect(() => {
    if (fromCurrency !== toCurrency || amount>0) {
      setConvertedAmount(amntCurData);
    } else {
      setConvertedAmount(amount);
    }
  }, [amntCurData, fromCurrency, toCurrency, amount]);
  
  const converCurrency = () => {
    handleAmountChange
   // added dependency in useConverterFetch so that if amount ot fromCur or toCurchanges, call the hook
    const f=fCur.current.value;
    const t=tCur.current.value;
    setfromCurrency(f);
    settoCurrency(t);
    console.log(`From is: ${f}`);
    console.log(`to is: ${t}`);
  };

  const handleAmountChange = () => {
    const val = inputRef.current.value;
    if (val === 0 || val === '' || val<=0) {
      setAmount(1); // Set to empty string if input is empty
    } else {
      setAmount(val); // Otherwise, set the input value
    }
    console.log(`amount is: ${amount}`);
  };

  
  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md'>

      <h2 className="mb-5 text-2xl font-semibold text-gray-700">Currency Converter</h2>

      <div>
        <Dropdown currencys={currencies} ref={fCur} title="From" onChange={converCurrency}></Dropdown>
        <Dropdown currencys={currencies} ref={tCur} title='To' onChange={converCurrency}></Dropdown>
      </div>

      <div className="block text-sm font-medium text-gray-700">
        <label htmlFor="amount">Amount</label>
        <input 
            type="number" ref={inputRef} min={1}

            onChange={handleAmountChange}
            className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800'>

        </input>
      </div>
      <div className='m-3 justify-end flex flex-col'>
        <div className="m-4 text-lg font-medium text-right text-green-700 flex">Converted amount is: {amntCurData}</div>
      </div>
    </div>
  )
}

export default CurrencyConverter