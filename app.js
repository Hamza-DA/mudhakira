const $ = document.querySelector.bind(document)
let quran = [];
fetch('./quran.json').then(res => {
    return res.json()
}).then(data => {
    quran = data
    generate()
})
function displayAya(getAya) {
    $('#ayaDisplay').innerHTML = getAya?.text.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '')
    $('#twitter-share-button').href = `https://twitter.com/intent/tweet?text=۝ ${getAya?.text} ۝`
}
function generate() {
    let randomSurah = quran[Math.floor(Math.random() * quran.length)];
    let getAya = randomSurah?.verses[Math.floor(Math.random() * randomSurah.verses.length)];
    displayAya(getAya);
    return getAya;
}
$('#generateButton').addEventListener('click', () => {
    generate();
})