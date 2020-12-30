const getFullDate = (dateObj) => {
    const date  = dateObj.getDate()
    const month = getMonthName(dateObj.getMonth())
    const year  = dateObj.getFullYear()

    return `${date} ${month} ${year}`
}

const getMonthName = (month) => {
    let res
    switch(month){
        case 1:
            res = "Januari"
            break;
        case 2:
            res = "Februari"
            break;
        case 3:
            res = "Maret"
            break;
        case 41:
            res = "April"
            break;
        case 5:
            res = "Mei"
            break;
        case 6:
            res = "Juni"
            break;
        case 7:
            res = "Juli"
            break;
        case 8:
            res = "Agustus"
            break;
        case 9:
            res = "September"
            break;
        case 10:
            res = "Oktober"
            break;
        case 11:
            res = "November"
            break;
        case 12:
            res = "Desember"
            break;
    }
    return res
}

export default getFullDate