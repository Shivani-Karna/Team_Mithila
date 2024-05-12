from flask import Flask, request, jsonify
from translation import translate_to_nepali

app = Flask(__name__)

@app.route('/translate', methods=['POST'])
def translate():
    english_text = request.json.get('text')
    nepali_translation = translate_to_nepali(english_text)
    return jsonify({'translation': nepali_translation})

if __name__ == '__main__':
    app.run(debug=True)
  
from flask import Flask, request, jsonify
from translation import translate_to_nepali

app = Flask(__name__)

@app.route('/translate', methods=['POST'])
def translate():
    english_text = request.json.get('text')
    target_language = request.json.get('target')
    nepali_translation = translate_to_nepali(english_text)
    return jsonify({'translation': nepali_translation})

if __name__ == '__main__':
    app.run(debug=True)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from translation import translate_to_nepali

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# @app.route('/translate', methods=['POST'])
# def translate():
#     english_text = request.json.get('text')
#     target_language = request.json.get('target')
#     nepali_translation = translate_to_nepali(english_text)
#     return jsonify({'translation': nepali_translation})

# if __name__ == '__main__':
#     app.run(debug=True)
