import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import FormInput from '../components/FormInput/FormInput'
import { getQuote, getManyQuotes, getQuotesByTitle, selectQuotes, selectLoading } from '../store/animeApi/animeAPISlice'

// 1. Добавить страницу, которая будет отображать данные, полученные через API 
export const ApiPage = () => {
    const dispatch = useDispatch()
    const quotes = useSelector(selectQuotes)
    const loading = useSelector(selectLoading)

    // useEffect(() => {
    //     dispatch(getQuote())
    // }, [])

    const [titleInput, setTitleInput] = useState('')
    const onTitleInputChange = (e) => {
        setTitleInput(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        try {
            if (titleInput.trim() !== "") {
                dispatch(getQuotesByTitle(titleInput))
                setTitleInput("")
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <h1>API</h1>
            <div>
                <LoadingButton loading={loading} variant="outlined" size="small" onClick={() => dispatch(getQuote())}>
                    Get random quote
                </LoadingButton>
                <LoadingButton loading={loading} variant="outlined" size="small" onClick={() => dispatch(getQuote())}>
                    Get 10 random quotes
                </LoadingButton>
                <FormInput onFormSubmit={onFormSubmit}
                    label="Get title quotes"
                    titleInput={titleInput}
                    onTitleInputChange={onTitleInputChange}
                    primary="search" />
                {loading ? (<>Loading...</>)
                    : quotes ? (
                        <>
                            <h3>Anime: {quotes[0]?.anime}</h3>
                            {quotes.map((quote, i) => (
                                <p key={i}>{`${quote.character}: `}{quote.quote} {quote.anime}</p>
                            ))}
                        </>
                    ) : null}

            </div>
        </div>
    );
};