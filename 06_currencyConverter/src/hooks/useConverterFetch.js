import { useEffect, useState } from 'react';

function useConverterFetch(amnt, fromCur, toCur) {
  const [data, setData] = useState(null);

  const fetchConverterURL = async () => {
    if (fromCur === toCur) {
      setData(amnt); // Directly set the amount if currencies are the same
      return;
    }

    try {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amnt}&from=${fromCur}&to=${toCur}`);
      const data = await res.json();
      setData(data.rates[toCur]);
    } catch (err) {
      console.error("Error fetching conversion data:", err);
    }
  };

  useEffect(() => {
    fetchConverterURL();
  }, [amnt, fromCur, toCur]);

  return { data };
}

export default useConverterFetch;
