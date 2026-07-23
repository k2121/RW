import re
import os
import html

# Load dictionaries
pl_words = set()
with open('/usr/share/dict/polish', 'r', encoding='utf-8', errors='ignore') as f:
    for line in f:
        w = line.strip().lower()
        if w:
            pl_words.add(w)

# Custom additions for valid Polish forms/abbreviations/proper nouns commonly in these documents
valid_custom = {
    'np', 'wg', 'nr', 'tzw', 'itd', 'itp', 'dr', 'zł', 'min', 'ok', 'tj', 'pkt', 'str', 'godz',
    'tippinga', 'tipping', 'colin', 'colina', 'godfrey', 'flaherty', 'satori', 'jonathan', 'goldman',
    'reiki', 'cho', 'ku', 'rei', 'pdf', 'html', 'css', 'js', 'px', 'em', 'rem', 'http', 'https', 'www',
    'humenergy', 'emerge', 'n', 'see', 'process', 'audio', 'print', 'button', 'reset', 'input',
    'textarea', 'checkbox', 'radio', 'select', 'option', 'label', 'div', 'span', 'class', 'id',
    'style', 'script', 'head', 'body', 'meta', 'title', 'link', 'href', 'src', 'rel', 'utf', 'viewport',
    'width', 'device', 'initial', 'scale', 'margin', 'padding', 'border', 'background', 'color',
    'font', 'family', 'size', 'weight', 'line', 'height', 'text', 'align', 'center', 'left', 'right',
    'justify', 'display', 'flex', 'block', 'inline', 'grid', 'gap', 'padding', 'box', 'sizing',
    'content', 'container', 'wrapper', 'header', 'footer', 'main', 'section', 'article', 'nav',
    'svg', 'path', 'fill', 'stroke', 'd', 'viewbox', 'xmlns', 'version', 'canvas'
}

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
        print(f"NOT FOUND: {filename}")
        continue
        
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
        
    in_script = False
    in_style = False
    in_head = False
    
    file_findings = []
    
    for idx, raw_line in enumerate(lines, 1):
        line = raw_line
        
        # Check script / style state
        if '<script' in line.lower():
            in_script = True
        if '</script>' in line.lower():
            in_script = False
            continue
        if '<style' in line.lower():
            in_style = True
        if '</style>' in line.lower():
            in_style = False
            continue
        if '<head' in line.lower():
            in_head = True
        if '</head>' in line.lower():
            in_head = False
            continue
            
        if in_script or in_style or in_head:
            continue
            
        # strip tags
        clean_text = re.sub(r'<[^>]+>', ' ', line)
        clean_text = html.unescape(clean_text).strip()
        if not clean_text:
            continue
            
        # extract words (letters only)
        words = re.findall(r"[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+", clean_text)
        for w in words:
            wl = w.lower()
            if len(wl) <= 1 and wl not in ['a', 'i', 'o', 'u', 'w', 'z']:
                continue
            if wl in pl_words or wl in valid_custom:
                continue
            # Store finding
            file_findings.append((idx, w, clean_text))
            
    results[filename] = file_findings

print("RESULTS SUMMARY:")
with open('findings.txt', 'w', encoding='utf-8') as out:
    for fn, findings in results.items():
        out.write(f"=== {fn} === (Total flagged: {len(findings)})\n")
        seen = set()
        for lno, w, ctx in findings:
            if w.lower() not in seen:
                seen.add(w.lower())
                out.write(f"  Line {lno:4d}: {w:20s} | Context: {ctx}\n")
        out.write("\n")

print("Done. Saved to findings.txt")
