import React from 'react';
import styles from './metadata.css';
import { UserLink } from './UserLink';

interface IMetaDataProps {
  author: string,
  avatar: string,
  datePostUtc: number,
  divMetaDataStyle?: React.CSSProperties,
  spanMetaDataStyle?: React.CSSProperties,
  divUserLinkStyle?: React.CSSProperties
}

export function MetaData({ author, avatar, datePostUtc, divUserLinkStyle, divMetaDataStyle, spanMetaDataStyle }: IMetaDataProps) {

  let pastMilliseconds = new Date().getTime() - new Date(datePostUtc).getTime();
  let oneDay = 1000 * 60 * 60 * 24;
  let oneHour = 1000 * 60 * 60;
  let oneMinutes = 1000 * 60;
  let pastDay = Math.round(pastMilliseconds / oneDay);
  let pastHour = Math.round(pastMilliseconds / oneHour);
  let pastMinutes = Math.round(pastMilliseconds / oneMinutes);

  let postTime = pastMinutes <= 59
    ? ((pastMinutes) === 11) || ((pastMinutes) === 12) || ((pastMinutes) === 13) || ((pastMinutes) === 14)
      ? `${pastMinutes} минут назад`
      : (pastMinutes) % 10 === 1
        ? `${pastMinutes} минуту назад`
        : ((pastMinutes) % 10 === 2) || ((pastMinutes) % 10 === 3) || ((pastMinutes) % 10 === 4)
          ? `${pastMinutes} минуты назад`
          : `${pastMinutes} минут назад`

    : pastHour <= 23
      ? ((pastHour) === 11) || ((pastHour) === 12) || ((pastHour) === 13) || ((pastHour) === 14)
        ? `${pastHour} часов назад`
        : (pastHour) % 10 === 1
          ? `${pastHour} час назад`
          : ((pastHour) % 10 === 2) || ((pastHour) % 10 === 3) || ((pastHour) % 10 === 4)
            ? `${pastHour} часа назад`
            : `${pastHour} часов назад`

      : (pastDay === 11) || (pastDay === 12) || (pastDay === 13) || (pastDay === 14)
        ? `${pastDay} дней назад`
        : (pastDay % 10) === 1
          ? `${pastDay} день назад`
          : (pastDay % 10 === 2) || (pastDay % 10 === 3) || (pastDay % 10 === 4)
            ? `${pastDay} дня назад`
            : `${pastDay} дней назад`

  return (
    <div className={styles.metaData} style={divMetaDataStyle}>
      <UserLink author={author} avatar={avatar} divUserLinkStyle={divUserLinkStyle} />
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel} style={spanMetaDataStyle}>опубликовано </span>
        {postTime}
      </span>
    </div>
  );
}


