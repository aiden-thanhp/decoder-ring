export const games = [
    {
        "id": 1,
        "name": "Caesar Shift",
        "link": "caesar-shift",
        "instruction": "Please enter a message and a shift number. Check decode if you want to decode. Uncheck for encoding.",
        "description": "The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and 'shifting' letters to the right or left, based on the typical alphabetic order.",
        "formInputs": [
            { 
                "type": "textarea",
                "name": "message",
                "label": "Your message",
                "id": "message"
            },
            { 
                "type": "text",
                "name": "shiftNumber",
                "label": "Shift number",
                "id": "shiftNumber"
            }
        ]
    },
    {
        "id": 2,
        "name": "Polybius Square",
        "link": "polybius-square",
        "instruction": "Please enter a message. Check decode if you want to decode. Uncheck for encoding.",
        "description": "The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter 'B' would be represented by the numerical pair '21'.",
        "formInputs": [
            { 
                "type": "textarea",
                "name": "message",
                "label": "Your message",
                "id": "message"
            }
        ]
    },
    {
        "id": 3,
        "name": "Substitution Cipher",
        "link": "substitution-cipher",
        "instruction": "Please enter a message and an alphabet key. Check decode if you want to decode. Uncheck for encoding.",
        "description": "The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.",
        "formInputs": [
            { 
                "type": "textarea",
                "name": "message",
                "label": "Your message",
                "id": "message"
            },
            { 
                "type": "text",
                "name": "alphabetKey",
                "label": "Alphabet key",
                "id": "alphabetKey"
            }
        ]
    }
]