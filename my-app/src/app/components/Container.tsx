import Image from "next/image";
import { calculateDuration, formatDate, formatTwoDates, findEarliestDate, findLatestDate, getDateYear } from "../helperDates";

export default function Container({ profile }) {
    let earliestDate = findEarliestDate(profile);
    let latestDate = findLatestDate(profile);
    let timelineEndDate = latestDate + 5

    let timelineData = []
    for (let i = earliestDate; i <= timelineEndDate; i++) {
        timelineData.push({
            year: i,
        });
    }
    return (
<main>
    <div className="timeline" style={{width: `${timelineEndDate-earliestDate}rem`, fontSize: 'small'}}>
        {profile.map((p, index) => {
            let startYear = getDateYear(p.startDate); // Declare startDate here
            let endYear = getDateYear(p.endDate);
            let title=p.title
            return (
                <div className="inputs-container" index={index}>
                    <div className="inputs-container-item" style={{
                        marginLeft: `${Math.abs(startYear - earliestDate)}rem`,
                        width: `${Math.abs(startYear - endYear)}rem`,
                    }}>
                        <div className="event-title"> {title} </div>
                        <div> {startYear}- {endYear} </div>
                        <div> {endYear-startYear}years </div>
                    </div>
                </div>
            );
        })}
        <div className="line-container" style={{height: '1rem', fontSize: '1rem',color: 'white'}}>
        {timelineData.map((y, index) => {
            let year = y.year;
            let last2Digits = (year % 100).toString();
            
            if (parseInt(last2Digits) < 10) {
                last2Digits = "'0" + last2Digits;
            }

            return (
                <div key={index} style={{fontSize: '0.5rem', minWidth: '1rem'}}>
                    {year % 5 === 0 ? <span className="penta-year">{year}</span> : <span className="single-year">{last2Digits}</span>}
                </div>
            );
        })}
        </div>
    </div>
</main>
    );
}