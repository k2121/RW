const tabelaHTML = `
  <div class="container-tabeli">
	  
	  
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabela HTML</title>
    <style>
        /* KLUCZOWE STYLE DLA BODY WEWNĄTRZ IFRAME */
        html, body {
            margin: 0;       /* Usuwa domyślne marginesy przeglądarki */
            padding: 0;      /* Usuwa domyślne paddingi */
            width: 100%;
            height: auto;    /* POZWALA BODY ROZCIĄGAĆ SIĘ W ZALEŻNOŚCI OD ZAWARTOŚCI */
            min-height: 100%; /* Dla pewności, aby sięgał przynajmniej 100% wysokości iframe, gdy zawartość jest mała */
            box-sizing: border-box; /* Zapewnia prawidłowe obliczanie rozmiarów pudełek */
              height: auto; /* Allow content to define height */
              min-height: 100vh; /* Ensure full viewport height */
        }

        /* Upewnij się, że ten kontener lub główny element tabeli nie ma sztywno ustawionej wysokości */
        .container-tabeli {
            width: 100%;
            /* BRAK SZTYWNEGO HEIGHT LUB MAX-HEIGHT */
            padding: 0px; /* Przykład, jeśli chcesz odstęp */
            box-sizing: border-box;
              height: auto; /* Remove fixed height */
        }

        table {
            width: 100%;
            /* TUTAJ ZMIANA: USUWAMY "height: 10%;" */
            border-collapse: collapse; /* Lepszy wygląd dla border="1" */
        }
        th, td {
            padding: 0px; /* Odstęp w komórkach */
            border: 0px solid #ccc;
            vertical-align: top; /* Ważne, aby tekst zaczynał się od góry w komórkach */
        }
        /* Style z Twojego pliku tabela.html - można je dodać tutaj do sekcji style */
        .green-cell { color: rgb(0, 153, 0); background-color: rgb(255, 255, 255); }
        .red-background-bold-italic { background-color: rgb(255, 204, 204); color: rgb(255, 0, 0); font-style: italic; font-weight: bold; }
        /* I inne... */
    </style>
</head>
<body>
    <div class="container-tabeli">

        <table style="text-align: center; width: 100%; border-collapse: collapse;" /* TUTAJ JUŻ NIE MA height: 10%; */
               border="1" cellpadding="2" cellspacing="2">
            <tbody>
                <tr style="color: rgb(0, 153, 0);">
                    <td style="background-color: rgb(255, 255, 255);"><span
                            style="font-weight: bold; text-decoration: underline;">Napis
                            na pudełku</span></td>
                </tr>
                <tr>
                    <td style="background-color: rgb(255, 204, 204);">
                        <!-- Dużo Twojej oryginalnej treści -->
                        <span style="font-weight: bold; text-decoration: underline;"></span><span
                            style="color: rgb(255, 0, 0); font-style: italic;">Dokonaj
                            wewnętrznej przemiany i stwórz nową przyszłość!</span><br
                            style="color: rgb(255, 0, 0); font-style: italic;">
                        <span style="color: rgb(255, 0, 0); font-style: italic;">
                            <font size="+7"><i><b>‘Satori’</b></i></font>
                        </span><br
                            style="color: rgb(255, 0, 0); font-style: italic; text-align: center;">
                        <span style="color: rgb(255, 0, 0); font-style: italic;">Gra
                            RADYKALNEGO Wybaczania™</span><br
                            style="font-style: italic;">
                        <span style="font-style: italic; text-align: center;">Autorzy: Colin i
                            Joanna Tipping</span>
                        <p style="text-align: left;">
                            <br>
                                   Niezwykła moc Radykalnego
                            Wybaczania
może być doświadczana na wiele
różnych sposobów, jednak gra
‘Satori’ jest z
pewnością najmniej stresującą i najbardziej ZABAWNĄ formą doznania jej
oddziaływania. Jest to gra planszowa przeznaczona dla od
dwóch do pięciu osób, która ma na celu
wywoływać śmiech, przyczyniać się do pogłębienia zrozumienia i
wewnętrznego rozwoju oraz pomagać nam w osiąganiu oświecenia.<br>
       Bardzo się zdziwisz, gdy
zobaczysz, że
udział w grze ‘Satori’
rzeczywiście umożliwia ci wybaczenie sobie oraz innym ludziom -
osiągnięcie tego w taki sposób może wydawać się
nieprawdopodobne. Po zakończeniu gry zapewne odczujesz ulgę oraz
doznasz zupełnie nowego wymiaru wolności i wewnętrznego spokoju.<br>
       Grając w
‘Satori’,
można uzyskać niezwykłą głębię
zrozumienia własnego życia oraz tego, co dzieje się z nami w danym
momencie. Dlatego też warto grać w nią wielokrotnie,
szczególnie wówczas, gdy napotykamy trudności i
pragniemy znaleźć odpowiedzi na dręczące nas pytania lub zyskać nową
perspektywę.<br>
       Gra ujawnia wielkie pokłady
mądrości -
twojej własnej, rzecz jasna - ta
zaś objawia się poprzez grę w zdumiewający sposób,
który budzi zachwyt i inspiruje. Baw się więc, ucz i
rozwijaj!<br>
   <br>
   <big style="color: rgb(51, 51, 153); font-weight: bold;"><span
 style="font-style: italic;">Czym jest Radykalne Wybaczanie?</span></big><br>
       Ukazuje to bezpośrednio sama
gra. ‘Satori’
nie wymaga wcześniejszej znajomości procesu Radykalnego Wybaczania;
gracze uchwycą jego sens podczas gry. Jednak łatwiej jest, gdy osoba
prowadząca grę (Mistrz Gry) przynajmniej do pewnego stopnia rozumie,
czym różni się on od wybaczania tradycyjnego.<br>
       Płyta CD, zawierająca trzy
oddzielne
nagrania z wypowiedziami autorów gry, Colina i Joanny
Tippingów, obejmuje (a) kilkuminutowe wprowadzenie dla
wszystkich graczy, (b) instrukcje dla prowadzącego grę oraz (c)
krótkie wyjaśnienie koncepcji Radykalnego Wybaczania.<br>
   <br>
   <big
 style="color: rgb(51, 51, 153); font-style: italic; font-weight: bold;">Radykalne
Wybaczanie w skrócie</big><br>
       Podczas gdy tradycyjne
wybaczanie opiera się
na przywiązaniu do koncepcji występowania ofiary i sprawcy, Radykalne
Wybaczanie uznaje, że życiowe sytuacje zdarzają się nie nam ale DLA
nas. Nie musimy przy tym rozumieć „dlaczego” ani
„jak” to się dzieje. Gdy osiągamy gotowość
przyjęcia
możliwość, że wszystkie wydarzenia i sytuacje mają swój sens
oraz
są wyrazem Boskiego porządku, zostajemy uwolnieni od naszego
bólu. Wystarczy do tego samo otwarcie się na taką
ewentualność.
Kiedy to czynimy, zdarzają się cuda i stajemy się wolni.</p><span
 style="font-weight: bold; text-decoration: underline;"></span></div>
   </td>
  </tr>
  <tr align="left">
   <td style="background-color: rgb(255, 255, 204);"><big
 style="color: rgb(51, 51, 153);"><span
 style="font-weight: bold; font-style: italic;">Twórca
gry: <br>
   </span></big>
   <div style="text-align: left;">   
   Colin Tipping jest nagradzanym autorem prac z
dziedziny terapii,
znanym w Polsce dzięki książce „Radykalne Wybaczanie", a
także, wraz z
żoną Joanną Tipping, współzałożycielem Instytutu Terapii i
Nauczania
Radykalnego Wybaczania (Institute for Radical Forgiveness Therapy and
Coaching, Inc.).<br>
   </div>
   <div style="text-align: left;">   
   Gra Radykalnego Wybaczania
‘Satori’ została wymyślona przez
Colina Tippinga, następnie zaś zaprojektowana przez niego wraz z żoną.
Pomagali im w tym konsultanci specjalizujący się w grach, Debbie
Unterman i Deanna Horscht, projektant graficzny z firmy Online
Creative, Deborah Hill, oraz researcher, Diana Urbas.<br>
   </div>
   <br>
   <div style="text-align: left;">   
   Copyright © 2004, Colin Tipping<br>
   </div>
   <div style="text-align: left;">   
   Copyright © for the Polish edition by
Jacek Zimnicki, 2006<br>
   </div>
   <div style="text-align: left;">   
   Wydawca: YAZI Projects<br>
   </div>
   <div style="text-align: left;">   
   Przekład: Mariola i Jacek Zimniccy<br>
   </div>
   <div style="text-align: left;">   
   Kontakt: gra-satori@tlen.pl, tel. 042 7177683<br>
   </div>
   <br>
   <div style="text-align: left;">   
   ©2004 Colin Tipping<br>
   </div>
   <div style="text-align: left;">   
   © for the Polish edition by Jacek
Zimnicki, 2006<br>
   </div>
   <div style="text-align: left;">   
   Wydanie polskie: YAZI Projects<br>
   </div>
   <div style="text-align: left;">   
   <a href="www.gra-satori.pl">www.gra-satori.pl</a></div>
   </td>
  </tr>
  <tr>
   <td>&nbsp;</td>
  </tr>
  <tr style="color: rgb(0, 153, 0);">
   <td style="background-color: rgb(255, 255, 255);">

    <img src="Logo gry Satori.jpg" alt="Logo gry Satori"></div>


<br>

   <span
 style="text-decoration: underline;"><span
 style="font-weight: bold;">Przewodnik po grze (folder
składany)</span></span></td>
  </tr>
  <tr>
   <td style="background-color: rgb(255, 255, 255);"><font
 size="+7"><i><b>Zagraj
w<br>
‘Satori’</b></i></font><br>
   <span style="font-style: italic; color: Indigo;">doświadcz
w formie zabawy<span style="font-weight: bold;"><br>
   </span></span><span
 style="font-weight: bold; font-style: italic; color: Indigo;">RADYKALNEGO
Wybaczania </span><br>
    
    <br>

<img alt="Radical-Forgiveness-v1_Page_1_" src="Radical-Forgiveness-v1_Page_1_.png" width="300"/>

    <br>
    <i
 style="color: Plum; text-align: left; background-color: Indigo;"><span
 style="font-weight: bold; color: rgb(255, 255, 255);"> Przewodnik
po grze </span></i><br>
   <br>
    
Zanim rozpoczniesz grę, Mistrz Gry odtworzy pierwsze
nagranie z płyty
CD.<br>
   <br>
   <span style="font-style: italic; color: rgb(75, 0, 130);">Zinterpretuj
na nowo</span><br
 style="font-style: italic; color: rgb(75, 0, 130);">
   <style="color: rgb(75, 0, 130);"><span
 style="font-weight: bold; font-style: italic; color: rgb(75, 0, 130);">swoją
przeszłość</span><br
 style="font-style: italic; color: rgb(75, 0, 130);">
   <br style="font-style: italic; color: rgb(75, 0, 130);">
   <span style="font-style: italic; color: rgb(75, 0, 130);">Dokonaj</span><br
 style="font-style: italic; color: rgb(75, 0, 130);">
   <span
 style="font-style: italic; font-weight: bold; color: rgb(75, 0, 130);">wewnętrznej
przemiany</span><br
 style="font-style: italic; color: rgb(75, 0, 130);">
   <br style="font-style: italic; color: rgb(75, 0, 130);">
   <span style="font-style: italic; color: rgb(75, 0, 130);">Stwórz</span><br
 style="font-style: italic; font-weight: bold; color: rgb(75, 0, 130);">
   <span
 style="font-style: italic; font-weight: bold; color: rgb(75, 0, 130);">nową
przyszłość</span><br
 style="font-style: italic; color: rgb(75, 0, 130);">
   <br style="font-style: italic; color: rgb(75, 0, 130);">
   <br style="color: rgb(75, 0, 130);"><span
 style="font-style: italic; color: rgb(75, 0, 130);">www.gra-satori.pl<br>
   <br>
Gra dla 2-5 osób od lat 14<br>
    Czas gry 120 minut<br
 style="color: rgb(75, 0, 130);">
   </span> <br>
   <br>
   <big style="font-style: italic; text-decoration: underline;"><big>Zasady
gry</big></big><br>
   <br>
   <div style="text-align: left;"><span
 style="font-weight: bold;">Krok 1:</span> Wszyscy
gracze słuchają pierwszego nagrania z
dołączonej do gry
płyty CD.<br>
   </div>
   <br>
   <div style="text-align: left;"><span
 style="font-weight: bold;">Krok 2:</span> Każdy z
graczy rzuca kostką jeden raz. Osoba,
która
wyrzuci największą liczbę oczek, rozpoczyna grę. W przypadku remisu
gracze rzucają kostką ponownie, do momentu gdy kolejność zostanie
ustalona. Gra rozpoczyna się w tej kolejności od pola „KRAINA
OFIAR”. Ruch na planszy odbywa się zgodnie z ruchem
wskazówek zegara.<br>
   </div>
   <br>
   <div style="text-align: left;"><span
 style="font-weight: bold;">Krok 3:</span> Każdy z
graczy wyciąga losowo po jednej karcie
„Zdarzenie” oraz „Kontekst”. Gracze po kolei
mówią, jakie karty wyciągnęli, co mogą one oznaczać i o jaką
„opowieść” z ich życia chodzi. Gracze mogą sobie w tym
pomagać. Nie przejmuj się, jeśli nie od razu wiesz, jakie sprawy wiążą
się z wylosowanymi kartami. Wyjaśni się to w trakcie gry.<br>
   </div>
   <br>
   <span
 style="font-style: italic; font-weight: bold; color: rgb(75, 0, 130);">Plansza</span><br>
   <div style="text-align: left;">Plansza ma formę
spirali. W grze chodzi o to, aby przejść od
„Krainy ofiar” do pola ‘Satori’. Można
tego dokonać dopiero po
pozbyciu się wszystkich kart typu „Blokady Energii”
i „Przekonanie” (zob. Uwaga). Na planszy znajdują
się 4 kręgi. Reprezentują one kolejne poziomy świadomości,
odpowiadające obszarom duchowej rzeczywistości. Zmierzając przez owe
poziomy do pełnej świadomości - czyli SATORI - doświadczamy Radykalnego
Wybaczania, przekształcając naszą „opowieść ofiary” (i nasz
ból) w spokojną akceptację.<br>
   </div>
   <br>
   <div style="text-align: left;"><span
 style="font-weight: bold;">Poziom 1: ŚWIADOMOŚĆ OFIARY:</span>
kolor niebieski. Jest to
najniższy poziom
świadomości, na którym obwiniamy innych, przypisujemy im
nasze „ciemne strony”, atakujemy lub bronimy się, blokujemy
istniejące w nas dobro i odmawiamy przyjęcia odpowiedzialności za
własne życie - wolimy bowiem za nasze niepowodzenia obwiniać innych.<br>
   </div>
   <br>
   <div style="text-align: left;"><span
 style="font-weight: bold;">Poziom 2: POCZĄTEK PRZEBUDZENIA:</span>
kolor zielony. Na tym
poziomie
świadomość zaczyna się budzić. Zauważamy, że nie wszystko jest takie,
jak nam się wydaje. Doświadczamy zjawiska synchroniczności
stanów psychicznych i zdarzeń, zaczynamy coraz więcej
rozumieć oraz uwalniamy niektóre urazy.<br>
   </div>
   <br>
   <div style="text-align: left;"><span
 style="font-weight: bold;">Poziom 3: PRZEMIANA ENERGII:</span>
kolor brzoskwiniowy. Tutaj
zaczynamy
uwalniać energię, która była zaangażowana w
„opowieść ofiary”. Gdy uwalniamy ją na głębszym poziomie,
zaczynamy uświadamiać sobie, iż jesteśmy w stanie sami tworzyć
doświadczenia służące naszemu zdrowiu i rozwojowi oraz osiągamy nowe
poziomy zrozumienia.<br>
   </div>
   <br>
   <div style="text-align: left;"><span
 style="font-weight: bold;">Poziom 4: PODDANIE SIĘ BOSKIEMU
PLANOWI:</span> kolor fioletowy.
Na tym
poziomie zaczynamy dostrzegać, jak wszystko ulega zmianie w wyniku
otwarcia się na potencjalną możliwość, że to, co nam się przydarza,
służy naszemu rozwojowi duchowemu oraz pogłębieniu naszej wiedzy.
Zbliżamy się do zinterpretowania naszej „opowieści
ofiary” na nowo i na samym końcu gry doświadczamy SATORI
(nowa perspektywa i przebudzenie).</div>
   </td>
  </tr>
  <tr>
   <td>


&nbsp;


       
   </td>
  </tr>
  <tr>
   <td style="background-color: #ffacff;"><div style="text-align: left;">(czas czytania tej sekcji: około 09min51sek)....    
<br>
<b>(czas czytania całości tej strony www: około 01godz32min21sek)</b>
<br><br>
Opisy gry planszowej z różnych stron internetowych:<br>
<br><br>
Gra radykalnego wybaczania Satori to gra planszowa, która ma na celu pomóc graczom w procesie wybaczania i uzdrawiania emocjonalnego. Gra została stworzona przez Colina Tippinga, autora książki "Radykalne Wybaczanie".
<br>
<br>Gra składa się z planszy, kart z pytaniami i zadaniami oraz instrukcji. Gracze poruszają się po planszy, odpowiadając na pytania i wykonując zadania, które mają na celu pomóc im w procesie wybaczania. Gra jest zaprojektowana tak, aby pomóc graczom w zrozumieniu swoich emocji, uczuć i myśli związanych z daną sytuacją, a także w znalezieniu sposobów na wybaczenie i uzdrowienie.
<br>
<br>Gra radykalnego wybaczania Satori jest często używana w terapii i rozwoju osobistym, aby pomóc ludziom w radzeniu sobie z trudnymi emocjami i sytuacjami.
<br>
<br>--------
<br>
<br>Masz MOC, aby zmienić sposób reakcji na sytuacje, które będą się powtarzać tak długo w Twoim życiu- dopóki nie zostaną przez Ciebie zauważone, zrozumiane, zaakceptowane i uwolnione z miłością
<br>
<br>Dlaczego GRA SATORI ?
<br>
<br>Celem GRY jest uświadomienie sobie funkcjonujących w naszym życiu ograniczających przekonań, powtarzających się wzorców oraz zablokowanych emocji. Gra w fenomenalny sposób potrafi uruchomić uzdrawiające procesy, a dzięki ich zrozumieniu jesteśmy w stanie uwolnić lęk i dokonać wewnętrznej przemiany i spojrzeć na swoją sytuację życiową z nowej perspektywy.
<br>
<br>--------
<br>
<br>Niezwykła moc Radykalnego Wybaczania (wybaczanie pomimo wszystko) może być doświadczana na wiele sposobów, jednak gra ’Satori’ jest na pewno jedną z wyjątkowych propozycji doświadczenia tego procesu. Forma gry planszowej pomimo swojej prostoty potrafi dotrzeć do miejsc w nas, które potrzebują przemiany.
<br>Proces, w zależności od uczestników może być wesołą przygodą, wrażliwym i empatycznym doświadczeniem, pełną niespodzianek historią ludzkich doświadczeń.
<br>Niezależnie jak popłynie energia w grupie, korzyści płynące z radykalnego wybaczania obejmują wszystkich.
<br>Dokonując wewnętrznej przemiany stwarzamy NOWĄ PRZYSZŁOŚĆ.
<br>
<br>Gra Radykalnego Wybaczania ’Satori’ została wymyślona przez Colina Tippinga, następnie zaś zaprojektowana wspólnie z żoną Joanną Tipping.
<br>Koncepcja wybaczania Tippinga umożliwia nam bezpieczny powrót do zdarzeń i osób, które w naszym odczuciu nas skrzywdziły.
<br>Dzięki duchowej perspektywie możemy zmienić sposób postrzegania przeszłych zdarzeń i uwolnić się od przymusu potępiania i zemsty. Przy pomocy narzędzi metody Tippinga ”uwalniamy” energię, którą inwestowaliśmy zwykle w pielęgnowanie gniewu, krzywdy i budowanie historii ofiary.
<br>Do tego ”uwolnienia” wystarczy tylko nasza Gotowość, do przyjrzenia się naszemu życiu z duchowej perspektywy.
<br>
<br>Siadając do gry możesz mieć własną intencję (np. poprawa relacji, obfitość finansowa, nowa praca, spełnienie innego pragnienia). Proces poprowadzi cię bliżej jej spełnienia. Dzieje się tak dlatego, że doświadczenie radykalnego wybaczenia uwalnia nie tylko emocje związane z przykrym doświadczeniem, ale również powstałe z daną sytuacją, blokujące przekonania.
<br>
<br>Możesz też dołączyć do gry z otwartością i wiarą, że wszechświat wie, czego ci potrzeba.
<br>Proces poprowadzi cię do uwolnienia właśnie tych doświadczeń, na które masz gotowość. Często okazuje się, że właśnie tego potrzebowałeś.
<br>
<br>     Od strony technicznej nie ma żadnych wymagań ani przygotowań.
<br>     Pracujemy w max 5 osobowej grupie.
<br>     Czas trwania jednej gry wynosi od 2 nawet do 5 godzin. Kończymy wszyscy jednocześnie.
<br>     Na czas pracy stajemy się dla siebie grupą wspierającą proces radykalnego wybaczania.
<br>     Jesteśmy naturalnie empatyczni, dodający otuchy i pomocni dla współuczestników.
<br>     Wszystko, co dzieje się podczas sesji pozostaje na zawsze objęte zasadą poufności.
<br>
<br>Gdy wybaczymy radykalnie to:
<br>
<br>- uwalniamy z ciała trudne emocje związane z poczuciem krzywdy, zyskujemy lekkość
<br>- pozbywamy się części fałszywych przekonań, które nas blokowały
<br>- otwieramy bramy wolności emocjonalnej dla siebie i tych, których winiliśmy
<br>- dajemy samym sobie akceptację i zgodę na siebie - takimi jakimi jesteśmy
<br>- pojawiają się w życiu nowe okoliczności, bo z radością idziemy w życie z Nową Opowieścią
<br>
<br>--------------
<br>
<br>Przedstawiamy najbardziej praktyczne i niezwykłe narzędzie Radykalnego Wybaczania - Grę Satori. Jest to gra planszowa, w której każdy uczestnik pracuje na wybranym trudnym wydarzeniu z przeszłości, starając się zmienić sposób w jaki go postrzega.  
<br>
<br>Jak to działa? 
<br>
<br>Nie musisz znać zasad i reguł gry. Nie wymagana jest także żadna wiedza związana z Radykalnym Wybaczaniem. Nie musisz być Trenerem RW, aby wziąć udział w spotkaniu.
<br>UWAGA: dla wielu osób był to pierwszy krok na drodze poznania Metody Tippinga! Jest to nieinwazyjny i pozbawiony stresu sposób, aby doświadczyć sesji Radykalnego Wybaczania. Jest to również świetna zabawa, której celem jest poszukiwanie swojego wewnętrznego spokoju i mądrości. Dzięki temu uczestnik doświadcza cudownych efektów po zakończonej rozgrywce. 
<br>
<br>----------
<br>
<br>Gra SATORI
<br>
<br>GRA PLANSZOWA, KTÓRA NIE JEST ZABAWĄ.
<br>
<br>Jest to narzędzie w procesie metody Tippinga - Radykalne Wybaczanie.
