const $ = document.querySelector.bind(document)
let quran = [];
let duaas = [];
fetch('./quran.json').then(res => {
    return res.json()
}).then(data => {
    quran = data
    getAya()
})
// tashkeel remover .replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '')
function displayAya(getAya) {
    $('#ayaDisplay').innerHTML = `${getAya?.text}`
    $('#twitter-share-button').href = `https://twitter.com/intent/tweet?text=۝ ${getAya?.text} ۝`
}
function getAya() {
    let randomSurah = quran[Math.floor(Math.random() * quran.length)];
    let getAya = randomSurah?.verses[Math.floor(Math.random() * randomSurah.verses.length)];
    displayAya(getAya);
    return getAya;
}
$('#generateButton').addEventListener('click', () => {
    getAya();
})

fetch('./duaas.json').then(res => {
    return res.json()
}).then(data => {
    duaas = data
    getDuaa();
})
$('#generateDuaaButton').addEventListener('click', () => {
    getDuaa();
})
const getDuaa = () => {
    let duaa;
    duaa = duaas[Math.floor(Math.random() * duaas.length)]
    displayDuaa(duaa)
}

const displayDuaa = (duaa) => {
    $('#duaaDisplay').innerHTML = duaa.zekr
    $('#duaaCat').innerHTML = duaa.category
    $('#twitter-duaa-share-button').href = `https://twitter.com/intent/tweet?text=${duaa.category + '%0D%0A' + duaa.zekr
        }`

}