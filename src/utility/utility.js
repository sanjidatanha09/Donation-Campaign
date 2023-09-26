const getData = () => {
    const data = localStorage.getItem('donation')
    if (data) {
        return JSON.parse(data)
    }
    return []
}

const savaData = (object) => {
    const data = getData()

    const check = data.find(item => item.id == object.id)
    if (!check) {
        data.push(object)
        localStorage.setItem('donation', JSON.stringify(data))
    }

}

export { getData, savaData }