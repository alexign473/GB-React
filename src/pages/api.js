// import axios from 'axios'
// import { useState } from 'react';
import { useGetRandomQuoteQuery, useGetManyRandomQuotesQuery } from '../store/animeApi/animeApiSlice'
import { useDispatch } from 'react-redux';

export const ApiPage = () => {
    const { data, error, isLoading } = useGetManyRandomQuotesQuery()
    // const [numDogs, setNumDogs] = useState(10);
    // const { data = [], isFetching } = useFetchBreedsQuery(numDogs)
    console.log(data)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>API</h1>
            <div>
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                        {data.map((quote, i) => (<p key={i}>{quote.character} : {quote.quote}</p>))}
                    </>
                ) : null}
            </div>
        </div>
    );
};

// export const ApiPage = () => {
//     const [quote, setQuote] = useState({ character: '', quote: '' })
//     const getQuote = () => {
//         axios.get("https://animechan.vercel.app/api/random")
//             .then(res => {
//                 console.log(res)
//                 setQuote({
//                     ...quote,
//                     character: res.data.character,
//                     quote: res.data.quote
//                 })
//             })
//     }
//     return (
//         <div>
//             <h1>API</h1>
//             <button onClick={getQuote}>Get anime quote</button><br />
//             Character: {quote.character}
//             <br />
//             Quote: {quote.quote}
//         </div>
//     );
// };