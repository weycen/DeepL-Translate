export default async function handler(req, res) {
    const { text, target_lang } = req.body;

    const response = await fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`
        },
        body: new URLSearchParams({
            'text': text,
            'target_lang': target_lang
        })
    });

    const data = await response.json();
    res.status(200).json(data);
}