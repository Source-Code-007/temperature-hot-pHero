document.querySelector('.search-btn').addEventListener('click', () => {
    let searchInp = document.querySelector('.search-inp')
    let api_key = `e4816f9dd6aa68c48436daaa5f30bfc0`
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInp.value}&units=metric&appid=${api_key}`
    fetch(url)
        .then(res => res.json())
        .then(data => applyWeatherFunc(data))
        .catch(e => console.log(e.message))
        searchInp.value = null
})
document.querySelector('.search-inp').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        let api_key = `e4816f9dd6aa68c48436daaa5f30bfc0`
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&appid=${api_key}`
        fetch(url)
        .then(res => res.json())
        .then(data => applyWeatherFunc(data))
        .catch(e => console.log(e.message))
        e.target.value = null
    }
})
let applyWeatherFunc = (data) => {
    console.log(data)
    document.querySelector('.temp-celcious').innerText = data.main.temp
    document.querySelector('.temp-city').innerText = data.name
    document.querySelector('.temp-condition').innerText = data.weather[0].main
}