export function calculateDuration(startDateStr: string, endDateStr: string): string {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44)); 
    
    const years = Math.ceil(diffMonths / 12);
    const months = diffMonths % 12;

    if (years > 0) {
        return `${years}y`;
    } else {
        return `${months}m`;
    }
}

export function formatDate(inputDateStr) {
    const date = new Date(inputDateStr);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const suffixes = ['th', 'st', 'nd', 'rd'];
    const suffix = suffixes[(day % 10 > 0 && day % 10 < 4 && (day < 11 || day > 13)) ? day % 10 : 0];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[monthIndex];

    return `${day}${suffix} ${month} ${year}`;
}

export function formatTwoDates(startDateStr: string, endDateStr: string) {
    return `${formatDate(startDateStr)} to ${formatDate(endDateStr)}`
}
export function getDateYear(startDateStr: string) {
    if (startDateStr && startDateStr.includes('-')) {
        const dateYear = parseInt(startDateStr.split('-')[0], 10);
        return dateYear; // Return the extracted year
    }
    
    return null; // Handle the case where startDateStr is null, undefined, or does not contain a hyphen
}
export function findEarliestDate(profile: object) {
    let earliestStartDate = 10000;
    for (let i = 0; i < profile.length; i++) {
        const currentDateNumerated = getDateYear(profile[i].startDate)
        console.log(currentDateNumerated)
        if (currentDateNumerated < earliestStartDate) {
            earliestStartDate = currentDateNumerated;
        }   
    }
    return earliestStartDate;
}

export function findLatestDate(profile: object) {
    let latestStartDate = 0;
    for (let i = 0; i < profile.length; i++) {
        const currentDateNumerated = getDateYear(profile[i].endDate)
        console.log(currentDateNumerated)
        if (currentDateNumerated > latestStartDate) {
            latestStartDate = currentDateNumerated;
        }   
    }
    return latestStartDate;
}

