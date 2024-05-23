async function translateText() {
    const sourceText = document.getElementById('sourceText').value;
    const targetLang = document.getElementById('targetLang').value;
    const translatedTextElement = document.getElementById('translatedText');

    const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: sourceText,
            target_lang: targetLang
        })
    });

    const data = await response.json();
    translatedTextElement.value = data.translations[0].text;
}