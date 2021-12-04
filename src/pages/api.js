import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuote, selectQuote, selectLoading } from '../store/animeApi/animeAPISlice'

// 1. Добавить страницу, которая будет отображать данные, полученные через API 
export const ApiPage = () => {
    const dispatch = useDispatch()
    const quote = useSelector(selectQuote)
    const loading = useSelector(selectLoading)

    useEffect(() => {
        dispatch(getQuote())
    }, [])


    return (
        <div>
            <h1>API</h1>
            <div>
                <button onClick={() => dispatch(getQuote())}>Get random quote</button><br />
                {loading ? (<>Loading...</>)
                    : quote ? (
                        <>
                            <p>{`${quote.character}: `}{quote.quote}</p>
                        </>
                    ) : null}

            </div>
        </div>
    );
};


// export const ApiPage = () => {
//     const { data, error, isLoading } = useGetManyRandomQuotesQuery()
//     console.log(data)
//     const dispatch = useDispatch()

//     return (
//         <div>
//             <h1>API</h1>
//             <div>
//                 {error ? (
//                     <>Oh no, there was an error</>
//                 ) : isLoading ? (
//                     <>Loading...</>
//                 ) : data ? (
//                     <>
//                         {data.map((quote, i) => (<p key={i}>{quote.character} : {quote.quote}</p>))}
//                     </>
//                 ) : null}
//             </div>
//         </div>
//     );
// };

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