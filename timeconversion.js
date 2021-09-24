function timeConversion(s) {
    let timeArray = s.split('')
    if (s[s.length - 2] + s[s.length - 1] == "AM"){
        if (s[0] + s[1] == "12"){
            timeArray.shift()
            timeArray.shift()
            timeArray.unshift("00")
            timeArray.pop()
            timeArray.pop()
            return timeArray.join("")
        }
        timeArray.pop()
        timeArray.pop()
        return timeArray.join("")
    } else {
        if (s[0] + s[1] !== "12"){
            let newTime = ((parseInt(s[0] + s[1])) + 12).toString()
            console.log(newTime)
            timeArray.shift()
            timeArray.shift()
            timeArray.unshift(newTime)
            timeArray.pop()
            timeArray.pop()
            return timeArray.join("")
        }
        timeArray.pop()
        timeArray.pop()
        return timeArray.join("")
    }
    return s
}

console.log(timeConversion("11:59:59PM"))