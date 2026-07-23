import html.parser
import re
import os

class CleanTextExtractor(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.lines = []
        self.ignore = False
        self.ignore_tags = {'script', 'style', 'svg', 'code'}
        self.tag_stack = []

    def handle_starttag(self, tag, attrs):
        tag_lower = tag.lower()
        if tag_lower in self.ignore_tags:
            self.ignore = True
            self.tag_stack.append(tag_lower)

    def handle_endtag(self, tag):
        tag_lower = tag.lower()
        if self.tag_stack and self.tag_stack[-1] == tag_lower:
            self.tag_stack.pop()
            if not any(t in self.ignore_tags for t in self.tag_stack):
                self.ignore = False

    def handle_data(self, data):
        if not self.ignore:
            text = data.strip()
            # Ignore pure numbers or single special chars
            if text and not re.match(r'^[0-9\s\.,;:!\?\-\(\)\{\}\[\]"\'«»„”/\\%+*=<>@#$&|_]+$', text):
                self.lines.append((self.getpos()[0], text))

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

for filepath in files:
    filename = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    parser = CleanTextExtractor()
    parser.feed(content)
    print(f"{filename}: Extracted {len(parser.lines)} text nodes")
