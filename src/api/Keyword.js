export function getAllKeyword(that) {
    return that.$axios({
        method: 'get',
        url: '/getAllKeyword',
    })
}

export function getKeywordByDate(that, datetime) {
    return that.$axios({
        method: 'get',
        url: '/getKeywordByDate',
        param: {
            startTime: datetime[0],
            endTime: datetime[1]
        }
    })
}
