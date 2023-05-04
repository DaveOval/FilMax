import Flag from "react-flagkit";
import "./MoviePage.css";
import { GiMoneyStack } from "react-icons/gi";
import { GiPopcorn } from "react-icons/gi";

interface MoviePage {
  key: number;
  date: string;
  votes: number;
  lang: string;
  id: number;
  imageUrl: string;
  budget: number;
  overview: string;
  popularity: number;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  original_title: string;
  name: string;
}
const languages: any = {
  en: <Flag country="US" className="flag" />,
  es: <Flag country="ES" className="flag" />,
  fr: <Flag country="FR" className="flag" />,
  ja: <Flag country="JP" className="flag" />,
  it: <Flag country="IT" className="flag" />,
  de: <Flag country="DE" className="flag" />,
  ru: <Flag country="RU" className="flag" />,
  hi: <Flag country="IN" className="flag" />,
  ko: <Flag country="KR" className="flag" />,
  pt: <Flag country="PT" className="flag" />,
  zh: <Flag country="CN" className="flag" />,
  ar: <Flag country="SA" className="flag" />,
  tr: <Flag country="TR" className="flag" />,
  pl: <Flag country="PL" className="flag" />,
  th: <Flag country="TH" className="flag" />,
  nl: <Flag country="NL" className="flag" />,
  sv: <Flag country="SE" className="flag" />,
  fa: <Flag country="IR" className="flag" />,
  cs: <Flag country="CZ" className="flag" />,
  id: <Flag country="ID" className="flag" />,
  vi: <Flag country="VN" className="flag" />,
  he: <Flag country="IL" className="flag" />,
  da: <Flag country="DK" className="flag" />,
  ta: <Flag country="LK" className="flag" />,
  no: <Flag country="NO" className="flag" />,
  fi: <Flag country="FI" className="flag" />,
  el: <Flag country="GR" className="flag" />,
  hu: <Flag country="HU" className="flag" />,
  sk: <Flag country="SK" className="flag" />,
  bn: <Flag country="BD" className="flag" />,
  ro: <Flag country="RO" className="flag" />,
  uk: <Flag country="UA" className="flag" />,
  bg: <Flag country="BG" className="flag" />,
  sr: <Flag country="RS" className="flag" />,
  hr: <Flag country="HR" className="flag" />,
  sl: <Flag country="SI" className="flag" />,
  et: <Flag country="EE" className="flag" />,
  lt: <Flag country="LT" className="flag" />,
  lv: <Flag country="LV" className="flag" />,
  is: <Flag country="IS" className="flag" />,
  ur: <Flag country="PK" className="flag" />,
  te: <Flag country="IN" className="flag" />,
  ml: <Flag country="IN" className="flag" />,
  kn: <Flag country="IN" className="flag" />,
  mr: <Flag country="IN" className="flag" />,
  pa: <Flag country="IN" className="flag" />,
  gu: <Flag country="IN" className="flag" />,
  or: <Flag country="IN" className="flag" />,
  as: <Flag country="IN" className="flag" />,
  ks: <Flag country="IN" className="flag" />,
  ne: <Flag country="NP" className="flag" />,
  si: <Flag country="LK" className="flag" />,
  my: <Flag country="MM" className="flag" />,
  km: <Flag country="KH" className="flag" />,
  am: <Flag country="ET" className="flag" />,
  az: <Flag country="AZ" className="flag" />,
  ka: <Flag country="GE" className="flag" />,
  hy: <Flag country="AM" className="flag" />,
  af: <Flag country="AF" className="flag" />,
  sq: <Flag country="AL" className="flag" />,
  eu: <Flag country="ES" className="flag" />,
  bs: <Flag country="BA" className="flag" />,
  mk: <Flag country="MK" className="flag" />,
  mt: <Flag country="MT" className="flag" />,
  cy: <Flag country="CY" className="flag" />,
  ga: <Flag country="IE" className="flag" />,
  gd: <Flag country="GB" className="flag" />,
  lb: <Flag country="LU" className="flag" />,
  mi: <Flag country="NZ" className="flag" />,
  qu: <Flag country="PE" className="flag" />,
  rm: <Flag country="CH" className="flag" />,
  sm: <Flag country="WS" className="flag" />,
  tt: <Flag country="RU" className="flag" />,
  uz: <Flag country="UZ" className="flag" />,
  ky: <Flag country="KG" className="flag" />,
  tk: <Flag country="TM" className="flag" />,
  ug: <Flag country="CN" className="flag" />,
  bo: <Flag country="CN" className="flag" />,
  dz: <Flag country="BT" className="flag" />,
  jv: <Flag country="ID" className="flag" />,
  su: <Flag country="ID" className="flag" />,
  gl: <Flag country="ES" className="flag" />,
  oc: <Flag country="FR" className="flag" />,
  co: <Flag country="FR" className="flag" />,
};
const raking: number | string | any = {
  0: "red",
  1: "red",
  2: "red",
  3: "red",
  4: "orange",
  5: "orange",
  6: "#FFBF00",
  7: "#FFBF00",
  8: "green",
  9: "green",
  10: "green",
};

const MoviePage: React.FC<MoviePage> = ({
  date,
  votes,
  lang,
  id,
  imageUrl,
  budget,
  overview,
  popularity,
  revenue,
  runtime,
  status,
  tagline,
  original_title,
  name,
}) => {
  const roudedVotes = Math.round(votes);
  const numeroConComas = budget?.toLocaleString();

  return (
    <div className="movie__container">
      <div className="movie__img-container">
        <img className="movie__img" src={imageUrl} alt=""></img>
      </div>
      <div className="movie__info">
        <div>
          <p className="movie__name">
            {original_title ? original_title : name}
          </p>
          <p className="movie__date">{date ? date : ""}</p>
        </div>
        <div>
          <p className="movie__overview">{overview}</p>
        </div>
        <p className="movie__lang">{languages[lang]}</p>
        {budget ? <GiMoneyStack className="movieIcon" /> : ""}
        <p className="movie__bugget">
          {budget ? ` $ ${numeroConComas}. USD.` : ""}
        </p>
        {popularity ? <GiPopcorn className="movieIcon" /> : ""}
        <p className="movie__popularity">{popularity}</p>
        {/* <p>{revenue}</p> */}
        {/* <p>{runtime}</p> */}
        {/* <p>{status}</p> */}
        {/* <p>{tagline}</p> */}

        {/* <p>{id}</p> */}
        <p
          className="movie__rank"
          style={{ backgroundColor: raking[roudedVotes] }}
        >
          {roudedVotes}
        </p>
      </div>
    </div>
  );
};

export default MoviePage;
