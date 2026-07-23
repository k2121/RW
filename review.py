with open('deep_analysis.txt', 'r', encoding='utf-8') as f:
    text = f.read()

files_blocks = text.split('==================================================\nPLIK: ')
for block in files_blocks[1:]:
    lines = block.splitlines()
    fname = lines[0]
    items = [l for l in lines[2:] if l.strip() and not l.strip().startswith('Brak uwag')]
    print(f"=== PLIK: {fname} ===")
    for item in items:
        print(item)
    print()
