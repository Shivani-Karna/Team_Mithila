# from deep_translator import GoogleTranslator
# import sys

# translator = GoogleTranslator(source='en', target='ne')
# def translate_to_nepali(english_text):
#     try:
  
#         translation = translator.translate(english_text)         # Translate text to Nepali
#         return translation
#     except Exception as e:
#         print("Error during translation:", e)
#         return None

# print("Enter text in English to translate to Nepali (or 'exit' to quit):")
# while True:
#     english_text = input("Input: ")

#     if english_text.lower() == 'exit':
#         print("Exiting...")
#         sys.exit(0)

#     nepali_translation = translate_to_nepali(english_text)


#     if nepali_translation:
#         print("Nepali Translation:", nepali_translation)
#     else:
#         print("Translation failed. Please try again or check your internet connection.")
   

from deep_translator import GoogleTranslator

translator = GoogleTranslator(source='en', target='ne')

def translate_to_nepali(english_text):
    try:
        translation = translator.translate(english_text)  # Translate text to Nepali
        return translation
    except Exception as e:
        print("Error during translation:", e)
        return None
