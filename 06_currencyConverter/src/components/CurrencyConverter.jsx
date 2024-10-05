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
  const {data:amntCurData}=useConverterFetch(amount, fromCurrency, toCurrency);// returned data stored into "data" variable and then assigning the value into amntCurData
  const inputRef = useRef(null); // Creating a ref for the input element
  const fCur=useRef(null);
  const tCur=useRef(null);

  //console.log(currencies);

  
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

  const swapCur=()=>{
    const f=fCur.current.value;
    const t=tCur.current.value;
    setfromCurrency(t);
    settoCurrency(f);
  }

  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md w-80 overflow-hiddens'>

      <h2 className="mb-5 text-2xl font-semibold text-gray-700">Currency Converter</h2>

      <div className="flex justify-between">
        <Dropdown currencys={currencies} ref={fCur} title="From" onChange={converCurrency} value={fromCurrency}></Dropdown>
        <img src="..\assets\two-way.png" className="flex size-8 mt-7" onClick={swapCur}></img>
        <Dropdown currencys={currencies} ref={tCur} title='To' onChange={converCurrency} value={toCurrency}></Dropdown>
      </div>

      <div className="flex flex-col text-sm font-medium text-gray-700 mt-2">
        <label htmlFor="amount" className="flex mt-3">Amount</label>
        <input 
            type="number" ref={inputRef} min={1} placeholder={amount}

            onChange={handleAmountChange}
            className='w-full p-2 border mt-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800'>

        </input>
      </div>
      <div className='m-2 justify-end flex flex-col'>
        <div className="text-lg font-medium text-center text-blue-900 flex">Converted amount</div><br></br>
        <div className="text-lg font-medium text-center text-green-700 overflow-hidden">{amntCurData}</div>
      </div>
    </div>
  )
}

export default CurrencyConverter