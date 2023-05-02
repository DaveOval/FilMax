import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom';
import Flag from 'react-flagkit';

interface MovieCardProps {
    title: string;
    date: string;
    imageUrl: string;
    votes: number;
    lang: string;
}
const languages : any= {
    en: <Flag country="US" className='flag'/>,
    es: <Flag country="ES" className='flag'/>,
    fr: <Flag country="FR" className='flag'/>,
    ja: <Flag country="JP" className='flag'/>,
    it: <Flag country="IT" className='flag'/>,
    de: <Flag country="DE" className='flag'/>,
    ru: <Flag country="RU" className='flag'/>,
    hi: <Flag country="IN" className='flag'/>,
    ko: <Flag country="KR" className='flag'/>,
    pt: <Flag country="PT" className='flag'/>,
    zh: <Flag country="CN" className='flag'/>,
    ar: <Flag country="SA" className='flag'/>,
    tr: <Flag country="TR" className='flag'/>,
    pl: <Flag country="PL" className='flag'/>,
    th: <Flag country="TH" className='flag'/>,
    nl: <Flag country="NL" className='flag'/>,
    sv: <Flag country="SE" className='flag'/>,
    fa: <Flag country="IR" className='flag'/>,
    cs: <Flag country="CZ" className='flag'/>,
    id: <Flag country="ID" className='flag'/>,
    vi: <Flag country="VN" className='flag'/>,
    he: <Flag country="IL" className='flag'/>,
    da: <Flag country="DK" className='flag'/>,
    ta: <Flag country="LK" className='flag'/>,
  };

const MovieCard: React.FC<MovieCardProps> = ({ title, date, imageUrl, votes, lang }) =>{

    return (
        <div className="movieCard">
            <img className='movieCard__img' src={imageUrl} alt={title} />
            <h3 className='movieCard__title'>{title}</h3>
            <p className='movieCard__date'>{date}</p>
            <p className='movieCard__vote'>vote avg: {votes}</p>
            <p className='movieCard__flag'>{ languages[lang] }</p>
            <Link to="/error" className='link'>Ver mas</Link>
        </div>

    )

}

export default MovieCard