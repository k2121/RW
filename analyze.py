import html.parser
import re
import os
import sys

# Load Polish dictionary words
dict_words = set()
dict_paths = ['/usr/share/dict/polish', '/usr/share/hunspell/pl_PL.dic']

for dp in dict_paths:
    if os.path.exists(dp):
        with open(dp, 'r', encoding='utf-8', errors='ignore') as f:
            for line in f:
                word = line.strip().split('/')[0].lower()
                if word:
                    dict_words.add(word)

print(f"Loaded {len(dict_words)} Polish dictionary forms.")

# Also load English dictionary
en_words = set()
en_paths = ['/usr/share/dict/american-english', '/usr/share/hunspell/en_US.dic']
for ep in en_paths:
    if os.path.exists(ep):
        with open(ep, 'r', encoding='utf-8', errors='ignore') as f:
            for line in f:
                word = line.strip().split('/')[0].lower()
                if word:
                    en_words.add(word)

print(f"Loaded {len(en_words)} English dictionary forms.")

class HTMLTextExtractor(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.text_blocks = [] # list of (line_no, text)
        self.ignore = False
        self.tag_stack = []

    def handle_starttag(self, tag, attrs):
        self.tag_stack.append(tag)
        if tag in ['script', 'style', 'head', 'option', 'svg']:
            self.ignore = True

    def handle_endtag(self, tag):
        if self.tag_stack and self.tag_stack[-1] == tag:
            self.tag_stack.pop()
        if tag in ['script', 'style', 'head', 'option', 'svg']:
            # check if still inside ignored
            self.ignore = any(t in ['script', 'style', 'head', 'option', 'svg'] for t in self.tag_stack)

    def handle_data(self, data):
        if not self.ignore:
            t = data.strip()
            if t:
                self.text_blocks.append((self.getpos()[0], t))

files = [
    '/home/kp/Pobrane/RW/2026 Arkusz Radykalnego Wybaczania.html',
    '/home/kp/Pobrane/RW/37 13 Kroków Do Radykalnej Manifestacji.html',
    '/home/kp/Pobrane/RW/33 13 Kroków do Odzyskiwania Radykalnego Bogactwa.html',
    '/home/kp/Pobrane/RW/23 13 Kroków do Radykalnej Transformacji.html',
    '/home/kp/Pobrane/RW/17 13 Kroków do Radykalnego Przebudzenia.html',
    '/home/kp/Pobrane/RW/2026 Arkusz Świadomości Pieniędzy.html',
    '/home/kp/Pobrane/RW/2026 Arkusz Radykalnej Manifestacji.html',
    '/home/kp/Pobrane/RW/2026 Arkusz Radykalnego Samowybaczania.html',
    '/home/kp/Pobrane/RW/44 13 Kroków Radykalnego Wzmocnienia.html',
    '/home/kp/Pobrane/RW/43 13 Kroków Radykalnego SamoWybaczania.html',
    '/home/kp/Pobrane/RW/39 13 Kroków do Nowej Kariery.html',
    '/home/kp/Pobrane/RW/38 13 Kroków Do Radykalnej Manifestacji Pieniędzy.html',
    '/home/kp/Pobrane/RW/32 13 Kroków do Twojej Nowej Kariery.html',
    '/home/kp/Pobrane/RW/16 13 Kroków do Radykalnego Wybaczania.html',
    '/home/kp/Pobrane/RW/RW.html',
    '/home/kp/Pobrane/RW/2026 Arkusz Transformacji Światowej.html',
    '/home/kp/Pobrane/RW/arkusz =-założenia radykalnego wybaczania.html',
    '/home/kp/Pobrane/RW/arkusz - ankieta.html',
    '/home/kp/Pobrane/RW/arkusz radykalnego odzyskiwania bogactwa.html',
    '/home/kp/Pobrane/RW/arkusz radykalnej manifestacji pieniędzy.html',
    '/home/kp/Pobrane/RW/arkusz oceny relacji.html',
    '/home/kp/Pobrane/RW/arkusz humenergy.html',
    '/home/kp/Pobrane/RW/arkusz radykalnej samoakceptacji.html',
    '/home/kp/Pobrane/RW/arkusz radykalnej manifestacji marzeń.html',
    '/home/kp/Pobrane/RW/arkusz wybaczania sobie.html',
    '/home/kp/Pobrane/RW/arkusz świadomości pieniądza.html',
    '/home/kp/Pobrane/RW/arkusz radykalnej transformacji wydarzeń światowych.html',
    '/home/kp/Pobrane/RW/arkusz radykalnego pojednania.html',
    '/home/kp/Pobrane/RW/arkusz manifestacji relacji.html',
    '/home/kp/Pobrane/RW/arkusz manifestacji kariery.html',
    '/home/kp/Pobrane/RW/arkusz granic.html',
    '/home/kp/Pobrane/RW/arkusz akceptacji innych.html',
    "/home/kp/Pobrane/RW/arkusz 4 kroki =emerge'n'see process.html",
    '/home/kp/Pobrane/RW/arkusz - sygnały somatyczne.html'
]

results = {}

for filepath in files:
    filename = os.path.basename(filepath)
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    parser = HTMLTextExtractor()
    parser.feed(content)
    
    unknown_words = []
    
    for line_no, text in parser.text_blocks:
        # split into words
        # keep contraction apostrophes if needed, but simple tokenization first:
        tokens = re.findall(r"[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?:'[a-zA-Z]+)?", text)
        for token in tokens:
            t_lower = token.lower()
            if len(t_lower) <= 1 and t_lower not in ['a', 'i', 'o', 'u', 'w', 'z']:
                continue
            # check numbers / short technical tags
            if t_lower in dict_words:
                continue
            
            is_en = t_lower in en_words
            unknown_words.append((line_no, token, is_en, text))
            
    results[filename] = unknown_words

with open('analysis_out.txt', 'w', encoding='utf-8') as out:
    for fn, uwords in results.items():
        out.write(f"=== {fn} ===\n")
        seen = set()
        for line_no, token, is_en, text in uwords:
            key = (token.lower())
            if key not in seen:
                seen.add(key)
                tag = "[EN/Foreign]" if is_en else "[Unknown/Typo?]"
                out.write(f"  Line {line_no}: {token} {tag} -> Context: \"{text[:60]}\"\n")
        out.write("\n")

print("Analysis done. Output saved to analysis_out.txt")
