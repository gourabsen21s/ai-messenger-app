from flask import Flask, request, jsonify
from transformers import MarianMTModel, MarianTokenizer

app = Flask(__name__)
def get_model(from_lang, to_lang):
    model_name = f'Helsinki-NLP/opus-mt-{from_lang}-{to_lang}'
    tokenizer = MarianTokenizer.from_pretrained(model_name)
    model = MarianMTModel.from_pretrained(model_name)
    return model, tokenizer

@app.route('/translate', methods=['POST'])
def translate():
    data = request.json
    message = data['message']
    from_lang = data['fromLang']
    to_lang = data['toLang']
    model, tokenizer = get_model(from_lang, to_lang)

    inputs = tokenizer(message, return_tensors='pt', padding=True)
    translated_tokens = model.generate(**inputs)
    translated_text = tokenizer.decode(translated_tokens[0], skip_special_tokens=True)

    return jsonify({'translatedText': translated_text})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
