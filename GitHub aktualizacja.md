# 0. otwórz Terminal w katalogu z kopią repozytorium.


# 1. Upewnij się, że jesteś zalogowany (jeśli nie, gh poprosi o token)
gh auth status


rm -r RW

gh repo clone k2121/RW
cd RW

=========================
git add .
git commit -m "Opis zmian"
git push origin main
===========================

sudo trash-empty
rm -f ~/.config/trashrc

======================

# Dodaj pliki do stage
git add nazwa_pliku.txt

# Lub dodaj wszystkie zmienione pliki
git add .

# Zrób commit
git commit -m "Opis zmian"

# Wypchnij na GitHub
git push origin main


===========================


Użytkownik chce zaktualizować niektóre pliki w repozytorium GitHub za pomocą GitHub CLI (gh) na Linux MX. Muszę podać odpowiednie komendy.

Podstawowy workflow z gh CLI to:
1. Najpierw trzeba się upewnić, że jest się w repozytorium git
2. Zrobić zmiany w plikach
3. Dodać pliki do stage (git add)
4. Zrobić commit (git commit)
5. Wypchnąć na GitHub (git push)

Ale gh CLI ma też komendy do tworzenia PR, zarządzania repozytorium itp. Jeśli chodzi o "aktualizowanie plików w repozytorium", to najprostsza ścieżka to użycie standardowych komend git + gh do ewentualnego utworzenia PR.

Jednak gh CLI nie zastępuje całkowicie gita - do samej aktualizacji plików (commit, push) używa się zwykłych komend git. gh CLI jest przydatne np. do:
- `gh repo clone` - klonowanie
- `gh pr create` - tworzenie PR
- `gh auth login` - logowanie

Jeśli użytkownik chce zaktualizować pliki w swoim repozytorium, podstawowe komendy to:

```bash
# Dodaj pliki do stage
git add nazwa_pliku.txt

# Lub dodaj wszystkie zmienione pliki
git add .

# Zrób commit
git commit -m "Opis zmian"

# Wypchnij na GitHub
git push origin main
```

Jeśli chodzi o użycie gh CLI do operacji na repozytorium, to gh nie ma komendy bezpośrednio do "aktualizacji pliku" - to robi się przez git. Ale gh może być użyte do:
- `gh auth login` - zalogowanie
- `gh repo view` - podgląd
- `gh pr create` - jeśli chce zrobić PR ze zmianami

Podam kompletny zestaw komend z wyjaśnieniem, że gh służy głównie do autentykacji i interakcji z GitHub API, a do samej aktualizacji plików używa się git.

Użytkownik pyta po polsku, więc odpowiem po polsku.</think>Oto komendy do aktualizacji plików w repozytorium GitHub. **GitHub CLI (`gh`)** służy głównie do logowania i interakcji z GitHub, ale do samej aktualizacji plików używa się standardowych komend **git**:

```bash
# 1. Upewnij się, że jesteś zalogowany (jeśli nie, gh poprosi o token)
gh auth status

# 2. Dodaj zmienione pliki do "stage"
git add nazwa_pliku.py
# lub wszystkie zmienione pliki:
git add .

# 3. Zatwierdź zmiany (commit)
git commit -m "Opis Twoich zmian"

# 4. Wyślij na GitHub
git push origin main
```

**Jeśli nie masz jeszcze sklonowanego repozytorium:**

```bash
gh repo clone wlasciciel/nazwa-repo
cd nazwa-repo
```

**Jeśli chcesz zaktualizować pliki przez Pull Request** (bezpieczniejsze dla repo zespołowego):

```bash
# Stwórz nową gałąź
git checkout -b moja-aktualizacja

# Wprowadź zmiany w plikach, potem:
git add .
git commit -m "Aktualizacja plików"
git push origin moja-aktualizacja

# Utwórz PR przez gh CLI
gh pr create --title "Aktualizacja plików" --body "Opis zmian"
```

**Ważne:** `gh` nie zastępuje komend `git add`/`commit`/`push` — te nadal wykonuje się przez klasycznego gita. `gh` pomaga np. w logowaniu (`gh auth login`), klonowaniu (`gh repo clone`) lub tworzeniu PR (`gh pr create`).

Jeśli potrzebujesz pomocy z konkretnym krokiem (np. logowanie tokenem, konflikty), daj znać!
