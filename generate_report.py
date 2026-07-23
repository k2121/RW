import os
import re

with open('clean_findings.txt', 'r', encoding='utf-8') as f:
    text = f.read()

sections = text.split('==================================================\nPLIK: ')

# Known real typos mapping / validation
known_typos = {
    'szczegstyle': ('szczegóły', 'arkusz radykalnego odzyskiwania bogactwa.html'),
    'odzwierciedlenieniem': ('odzwierciedleniem', '2026 Arkusz Transformacji Światowej.html'),
    'widzili': ('widzieli', '2026 Arkusz Radykalnego Samowybaczania.html'),
    'kogogoś': ('kogoś', '2026 Arkusz Radykalnego Samowybaczania.html'),
    'wpłynęedzie': ('wpłynie / wpłynąłem', '2026 Arkusz Radykalnego Samowybaczania.html'),
    'integrytywnością': ('integralnością / integritą', '2026 Arkusz Radykalnego Samowybaczania.html'),
    'swiat': ('Świat', 'arkusz =-założenia radykalnego wybaczania.html'),
    'zprojektowaliśmy': ('zaprojektowaliśmy / wyprojektowaliśmy', 'arkusz =-założenia radykalnego wybaczania.html'),
    'zakoczenie': ('zakochanie', 'arkusz radykalnego pojednania.html'),
    'cakowicie': ('CAŁKOWICIE', 'arkusz radykalnego pojednania.html'),
    'zli': ('źli (brak polskiej litery ź)', "arkusz 4 kroki =emerge'n'see process.html"),
    'demandy': ('żądania / wymagania (hybryda ang. demands)', 'arkusz radykalnego pojednania.html'),
    'surrendera': ('poddania się / odpuszczenia (hybryda ang. surrender)', 'arkusz manifestacji relacji.html'),
}

report_lines = []

for block in sections[1:]:
    lines = [l.strip() for l in block.splitlines() if l.strip()]
    fname = lines[0].replace('\n==================================================', '')
    
    typos = []
    foreign = []
    
    for l in lines[2:]:
        if 'Brak uwag' in l:
            continue
        # Format: Linia  362 | [POTENCJALNA LITERÓWKA] O'Flaherty -> Kontekst: "..."
        m = re.match(r'Linia\s+(\d+)\s+\|\s+\[([^\]]+)\]\s+([^\s]+)\s+->\s+Kontekst:\s+"([^"]+)"', l)
        if m:
            lno, cat, word, ctx = m.groups()
            wl = word.lower()
            
            # Skip false positives like O'Flaherty, Tippingów, Bohm, Storge, Philia, Myss, Chakras, kodependencja, radicalforgiveness, colintipping
            if wl in ["o'flaherty", "tippingów", "bohm", "storge", "philia", "myss", "chakras", "kodependencja", "radicalforgiveness", "colintipping", "iirfl", "ych", "transosobowe", "skinij", "przeramować", "wyprojektowałeś", "promiskuituizmu", "storgicznej", "storgiczna", "storgicznie", "storgiczne", "samowybaczania", "samowybaczanie"]:
                continue
                
            if wl in known_typos:
                sug = known_typos[wl][0]
                typos.append((lno, word, sug, ctx))
            elif cat == "SŁOWO ANGIELSKIE / OBCE":
                foreign.append((lno, word, ctx))
            else:
                typos.append((lno, word, 'sprawdź zapis', ctx))
                
    report_lines.append((fname, typos, foreign))

with open('final_summary.txt', 'w', encoding='utf-8') as out:
    for fname, typos, foreign in report_lines:
        out.write(f"### 📄 {fname}\n")
        if not typos and not foreign:
            out.write("  ✅ Brak ewidentnych literówek i słów obcych.\n\n")
            continue
            
        if typos:
            out.write("  ⚠️ **Literówki i błędy językowe:**\n")
            for lno, w, sug, ctx in typos:
                out.write(f"    - Linia {lno}: **{w}** (sugerowane: *{sug}*) → Kontekst: „{ctx}”\n")
                
        if foreign:
            out.write("  🌐 **Słowa / zwroty angielskie i obce:**\n")
            words_str = ", ".join(f"**{w}** (linia {lno})" for lno, w, ctx in foreign)
            out.write(f"    - {words_str}\n")
            
        out.write("\n")

print("Report generated in final_summary.txt")
