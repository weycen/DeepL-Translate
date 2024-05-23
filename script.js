async function checkPassword() {
    const password = document.getElementById('password').value;
    const response = await fetch('/api/check-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
    });

    const result = await response.json();
    if (result.success) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('translationContainer').style.display = 'block';
    } else {
        document.getElementById('errorMessage').innerText = '密码错误，请重试。';
    }
}

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