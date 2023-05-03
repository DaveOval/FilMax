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
    id: number;
    type: string;
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
    no: <Flag country="NO" className='flag'/>,
    fi: <Flag country="FI" className='flag'/>,
    el: <Flag country="GR" className='flag'/>,
    hu: <Flag country="HU" className='flag'/>,
    sk: <Flag country="SK" className='flag'/>,
    bn: <Flag country="BD" className='flag'/>,
    ro: <Flag country="RO" className='flag'/>,
    uk: <Flag country="UA" className='flag'/>,
    bg: <Flag country="BG" className='flag'/>,
    sr: <Flag country="RS" className='flag'/>,
    hr: <Flag country="HR" className='flag'/>,
    sl: <Flag country="SI" className='flag'/>,
    et: <Flag country="EE" className='flag'/>,
    lt: <Flag country="LT" className='flag'/>,
    lv: <Flag country="LV" className='flag'/>,
    is: <Flag country="IS" className='flag'/>,
    ur: <Flag country="PK" className='flag'/>,
    te: <Flag country="IN" className='flag'/>,
    ml: <Flag country="IN" className='flag'/>,
    kn: <Flag country="IN" className='flag'/>,
    mr: <Flag country="IN" className='flag'/>,
    pa: <Flag country="IN" className='flag'/>,
    gu: <Flag country="IN" className='flag'/>,
    or: <Flag country="IN" className='flag'/>,
    as: <Flag country="IN" className='flag'/>,
    ks: <Flag country="IN" className='flag'/>,
    ne: <Flag country="NP" className='flag'/>,
    si: <Flag country="LK" className='flag'/>,
    my: <Flag country="MM" className='flag'/>,
    km: <Flag country="KH" className='flag'/>,
    am: <Flag country="ET" className='flag'/>,
    az: <Flag country="AZ" className='flag'/>,
    ka: <Flag country="GE" className='flag'/>,
    hy: <Flag country="AM" className='flag'/>,
    af: <Flag country="AF" className='flag'/>,
    sq: <Flag country="AL" className='flag'/>,
    eu: <Flag country="ES" className='flag'/>,
    bs: <Flag country="BA" className='flag'/>,
    mk: <Flag country="MK" className='flag'/>,
    mt: <Flag country="MT" className='flag'/>,
    cy: <Flag country="CY" className='flag'/>,
    ga: <Flag country="IE" className='flag'/>,
    gd: <Flag country="GB" className='flag'/>,
    lb: <Flag country="LU" className='flag'/>,
    mi: <Flag country="NZ" className='flag'/>,
    qu: <Flag country="PE" className='flag'/>,
    rm: <Flag country="CH" className='flag'/>,
    sm: <Flag country="WS" className='flag'/>,
    tt: <Flag country="RU" className='flag'/>,
    uz: <Flag country="UZ" className='flag'/>,
    ky: <Flag country="KG" className='flag'/>,
    tk: <Flag country="TM" className='flag'/>,
    ug: <Flag country="CN" className='flag'/>,
    bo: <Flag country="CN" className='flag'/>,
    dz: <Flag country="BT" className='flag'/>,
    jv: <Flag country="ID" className='flag'/>,
    su: <Flag country="ID" className='flag'/>,
    gl: <Flag country="ES" className='flag'/>,
    oc: <Flag country="FR" className='flag'/>,
    co: <Flag country="FR" className='flag'/>,
  };
const raking : number | string | any = {
    0: "black",
    1: "red",
    2: "red",
    3: "red",
    4: "orange",
    5: "orange",
    6: "yellow",
    7: "yellow",
    8: "green",
    9: "green",
    10: "green",
}

const MovieCard: React.FC<MovieCardProps> = ({ title, date, imageUrl, votes, lang , id, type }) =>{
    const roudedVotes = Math.round(votes)

    

    return (
        <div className="movieCard">
            <img className='movieCard__img' src={imageUrl} alt={title} />
            <h3 className='movieCard__title'>{title}</h3>
            <p className='movieCard__date'>{date}</p>
            <p className='movieCard__vote' style={{ backgroundColor: raking[roudedVotes] }}>{votes}</p>
            <p className='movieCard__flag'>{ languages[lang] }</p>
            {/* <Link to={`/movie/${id}`} className='link'>See more</Link> */}
            <Link to={`/${type}/${id}`   } className='link'>See more</Link>
        </div>
    )
}

export default MovieCard