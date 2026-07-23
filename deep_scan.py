import html
import re
import os

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

pl_dict = set()
with open('/usr/share/dict/polish', 'r', encoding='utf-8', errors='ignore') as f:
    for l in f:
        w = l.strip().lower()
        if w:
            pl_dict.add(w)

en_dict = set()
with open('/usr/share/dict/american-english', 'r', encoding='utf-8', errors='ignore') as f:
    for l in f:
        w = l.strip().lower()
        if w:
            en_dict.add(w)

# Common valid proper nouns, acronyms, HTML/tech, etc.
ignore_set = {
    'np', 'wg', 'nr', 'tzw', 'itd', 'itp', 'dr', 'zł', 'min', 'ok', 'tj', 'pkt', 'str', 'godz', 'al', 'ul',
    'colin', 'tipping', 'tippinga', 'godfrey', 'flaherty', 'satori', 'jonathan', 'goldman', 'reiki',
    'cho', 'ku', 'rei', 'kappas', 'kappasa', 'john', 'johna',
    'pdf', 'html', 'css', 'js', 'px', 'em', 'rem', 'http', 'https', 'www', 'url',
    'humenergy', 'emerge', 'see', 'process', 'audio', 'print', 'button', 'reset', 'input', 'textarea',
    'checkbox', 'radio', 'select', 'option', 'label', 'div', 'span', 'class', 'id', 'style', 'script',
    'head', 'body', 'meta', 'title', 'link', 'href', 'src', 'rel', 'utf', 'viewport', 'width', 'device',
    'initial', 'scale', 'margin', 'padding', 'border', 'background', 'color', 'font', 'family', 'size',
    'weight', 'line', 'height', 'text', 'align', 'center', 'left', 'right', 'justify', 'display', 'flex',
    'block', 'inline', 'grid', 'gap', 'box', 'sizing', 'content', 'container', 'wrapper', 'header',
    'footer', 'main', 'section', 'article', 'nav', 'svg', 'path', 'fill', 'stroke', 'd', 'viewbox',
    'xmlns', 'version', 'canvas', 'png', 'jpg', 'jpeg', 'mp3', 'gif', 'svg', 'woff', 'woff2'
}

out_lines = []

for filepath in files:
    filename = os.path.basename(filepath)
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
        
    in_script = False
    in_style = False
    in_head = False
    
    file_results = []
    
    for idx, raw_line in enumerate(lines, 1):
        line = raw_line
        
        if '<script' in line.lower(): in_script = True
        if '</script>' in line.lower(): in_script = False; continue
        if '<style' in line.lower(): in_style = True
        if '</style>' in line.lower(): in_style = False; continue
        if '<head' in line.lower(): in_head = True
        if '</head>' in line.lower(): in_head = False; continue
        if in_script or in_style or in_head: continue
        
        clean = re.sub(r'<[^>]+>', ' ', line)
        clean = html.unescape(clean).strip()
        if not clean: continue
        
        words = re.findall(r"[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?:'[a-zA-Z]+)?", clean)
        for w in words:
            wl = w.lower()
            if len(wl) <= 1 and wl not in ['a', 'i', 'o', 'u', 'w', 'z', 'y']:
                continue
            if wl in ignore_set:
                continue
            if wl in pl_dict:
                continue
                
            is_en = wl in en_dict or wl.replace("'", "") in en_dict
            cat = "ANGIELSKIE / OBCE" if is_en else "LITERÓWKA / NIEZNANE"
            file_results.append((idx, w, cat, clean))
            
    out_lines.append(f"==================================================")
    out_lines.append(f"PLIK: {filename}")
    out_lines.append(f"==================================================")
    if not file_results:
        out_lines.append("Brak uwag (brak literówek i słów obcych).\n")
    else:
        seen = set()
        for idx, w, cat, ctx in file_results:
            if w.lower() not in seen:
                seen.add(w.lower())
                out_lines.append(f"  Linia {idx:4d} | [{cat}] {w} -> Kontekst: \"{ctx}\"")
        out_lines.append("")

with open('deep_analysis.txt', 'w', encoding='utf-8') as out:
    out.write("\n".join(out_lines))

print("Deep scan finished. Check deep_analysis.txt")
