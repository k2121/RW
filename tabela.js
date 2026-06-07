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
   <td> </td>
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
   <big style="color: rgb(75, 0, 130);"><span
 style="font-weight: bold; font-style: italic;">swoją
przeszłość</span></big><br
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


<br>


       
   </td>
  </tr>
  <tr>
   <td style="background-color: #B7B1F2;"><div style="text-align: left;">(czas czytania tej sekcji: około 09min51sek)....    
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
<br>
<br>Jest to narzędzie do radykalnej zmiany perspektywy. Zmiany, która prowadzi do zrozumienia dlaczego przydarzają nam się trudne sytuacje i jak zmienić przepływ, by życie było spokojne i lekkie.
<br>
<br>Jest to sposób na odkrycie głębokich przekonań, które nie pozwalają uwolnić się od przeszłości, które są przeszkodą w podświadomości do dobrych relacji, finansów, poczucia sensu życia.
<br>
<br>-----------
<br>
<br>Radykalne wybaczenie w formie gry czemu nie?
<br>
<br>Podczas gdy tradycyjne wybaczanie opiera się na przywiązaniu do koncepcji występowania ofiary i sprawcy, Radykalne Wybaczanie uznaje, że życiowe sytuacje zdarzają się nie nam ale DLA nas. Nie musimy przy tym rozumieć ”dlaczego" ani ”jak" to się dzieje. Gdy osiągamy gotowość przyjęcia możliwości, że wszystkie wydarzenia i sytuacje mają swój sens oraz są wyrazem Boskiego porządku, zostajemy uwolnieni od naszego bólu. Wystarczy do tego samo otwarcie się na taką ewentualność. Kiedy to czynimy, zdarzają się cuda i stajemy się wolni.
<br>
<br>----------
<br>
<br>Dlaczego gra planszowa?
<br>
<br>Przede wszystkim dwa słowa: energia grupy. To, z kim gramy, nigdy nie jest przypadkowe. Współuczestnicy będą Twoim lustrem, pokażą Ci Twój cień, ujawnią Twoje projekcje, nierzadko także striggerują Cię, ale będą także wspierać, dopingować, współodczuwać, niektórzy Twój proces przejdą razem z Tobą, bo niosą w życiu podobny bagaż. Zaczynacie jako nieznajomi, kończycie jako zgrana grupa połączona energią Radykalnego Wybaczania.
<br>
<br>W ramach gry Satori gracze przechodzą wspólnie wszystkie 5 etapów Radykalnego Wybaczania, zaczynając oczywiście w Krainie Ofiar. Wielu cofnie się, by przepracować coś dogłębniej, wielu zmierzy się ze swoimi 'brakami' lub lękami, niektórzy po raz pierwszy powiedzą coś na głos, ale na końcu wszystkich czeka piękne zjednoczenie w miłości i doskonałości. (Brzmi bajkowo, wiem, ale zgodzi się ze mną każdy, kto przeszedł ten piękny proces.) To również powody, dla których warto grę Satori przejść pod okiem doświadczonego Trenera Radykalnego Wybaczania, który jako 'mistrz gry', osoba prowadząca, pomoże przejść przez wszystkie procesy i wyciągnąć z całego spotkania jak najwięcej dla wszystkich uczestników.
<br>
<br>---------------
<br>
<br>Warsztaty skierowane są przede wszystkim do osób:
<br>
<br>     które już zbyt długo tkwią w przeszłości,
<br>     rozdrapują stare rany, czują się skrzywdzone i cierpią w ”krainie ofiar”, bo myślą, że w taki sposób ukarzą drugą osobę, a tymczasem same codziennie sączą truciznę z nadzieją, że to zaszkodzi ”oprawcy”,
<br>     chcą przekonać się, że przebaczenie ma moc uzdrawiania i działa nie dlatego, że ktoś zasłużył na przebaczenie, ale dlatego że TY zasługujesz na dobre i spokojne życie.
<br>
<br>
<br>Ruch jest po Twojej stronie, Ty dokonujesz wyboru, żeby przekonać się, że udział w tych warsztatach daje okazję do:
<br>
<br>     uświadomienia, nazwania i wyrażenia ukrytych emocji,
<br>     uleczenia i uzdrowienia starych ran,
<br>     spojrzenia na to, co się wydarzyło, co Cię spotkało z innej, nowej perspektywy,
<br>     otrzymania wsparcia, bo grających dodatkowo wspiera energia grupy.
<br>
<br>
<br>Gra Satori - co to jest?
<br>
<br>Satori to gra terapeutyczna, najbardziej praktyczne i niezwykłe narzędzie Radykalnego Wybaczania, które wywoła uśmiech i łzy, przyczyni się do pogłębienia zrozumienia i wewnętrznego rozwoju.
<br>
<br>     To gra planszowa, w której każdy uczestnik (maksymalnie 5 graczy + prowadząca) zajmuje się swoim aspektem / tematem, by poczuć lekkość z odpuszczenia przeszłości.
<br>     To doświadczenie terapeutyczne i proces, który usuwa blokady, pozwala zostawić stare ciężary z przeszłości, odzyskać radość i pewność siebie.
<br>     To najbardziej praktyczne i niezwykłe narzędzie Radykalnego Wybaczania.
<br>&nbsp;&nbsp;&nbsp;&nbsp; Nie musisz znać zasad gry ani reguł Radykalnego Wybaczania, wystarczy Twoja otwartość na ten proces i gotowość, aby zrobić 1 Krok W Swoim Kierunku. Krok na drodze: ”Odpuszczam i Wybaczam”.

   </div></td>
  </tr>
  
      <tr>
   <td>&nbsp;</td>
  </tr>    <tr>
   <td>&nbsp;</td>
  </tr>
  
 

  <tr>
   <td style="background-color: #F6F8D5;"><div style="text-align: left;">
(mp3 06m02s) Wprowadzenie do gry Radykalnego Wybaczania SATORI.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Witajcie. Zanim rozpoczniecie grę, chcemy powiedzieć Wam kilka słów na jej temat.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Po pierwsze, bardzo łatwo jest w nią grać i łatwo się jej nauczyć. Oczywiście proces nauki będzie szybszy, jeśli w Waszej grupie jest jakaś osoba, która poznała już dobrze jej zasady. Jeżeli ktoś spośród Was wysłuchał szczegółowego instruktażu znajdującego się na płycie i chce pełnić rolę Mistrza Gry, to wspaniale. Jeśli nie, to nic nie szkodzi. Dowiecie się o co chodzi z załączonej do gry ulotki z instrukcją. Tak jak w przypadku wszystkich gier, głównym celem Satori jest zabawa oraz spędzenie czasu w miłym towarzystwie. Mamy nadzieję, że nasza gra zapewni to każdemu z Was. Kończąc ją, będziecie prawdopodobnie nieco lepiej znali się nawzajem.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Gra może też okazać się dość silnym przeżyciem. Mówiąc to, chcę Was jednak zapewnić, że w trakcie gry możecie czuć się zupełnie bezpieczni. Nie ma absolutnie żadnej presji, aby ktokolwiek z Was ujawniał coś, na co nie ma ochoty. Nikt też nie będzie mógł udzielać Wam rad, gdy sobie tego nie życzycie. Dlatego odprężcie się proszę i bawcie się dobrze, nawet jeśli przy okazji uronicie parę łez.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Czasami zdarza się w trakcie gry, że uczucia uczestników zostają nieco pobudzone. Mamy jednak nadzieję, że pod koniec gry odczujecie radość oraz nowe doznanie wolności. Dzieje się tak, ponieważ podczas gry najprawdopodobniej pozbędziecie się jednego lub kilku toksycznych przekonań, które dotąd ograniczały Was i krępowały. Mogliście nawet nie zdawać sobie sprawy, że je posiadacie. Gra zapewne pomoże Wam uwolnić się od tego, co mogło dotąd powstrzymywać Was od doświadczenia bogactwa, siły, twórczej inwencji oraz kochających związków.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Te ograniczające czynniki mają swoje źródło w zdarzeniach z przeszłości, które, choć mogliśmy o nich zapomnieć, nadal kierują naszym życiem.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Radykalne Wybaczanie stanowi wspaniały, całkowicie bezpieczny i łatwy sposób uwolnienia się od dawnych historii. Natomiast gra Radykalnego Wybaczania realizuje ten sam cel w formie zabawy.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Wszyscy snujemy opowieści o sobie w roli ofiary, które nas ograniczają i oddalają od nas dobro. Oto typowe przykłady przekonań leżących u podstaw takich interpretacji życiowych doświadczeń:
<br>&nbsp;&nbsp;&nbsp;&nbsp;• "Nie jestem dość dobry."
<br>&nbsp;&nbsp;&nbsp;&nbsp;• "Trudno mnie kochać."
<br>&nbsp;&nbsp;&nbsp;&nbsp;• "Nie zasługuję na dużą ilość pieniędzy."
<br>&nbsp;&nbsp;&nbsp;&nbsp;• "Aby zostać docenioną muszę być doskonała."
<br>&nbsp;&nbsp;&nbsp;&nbsp;• "Mężczyznom nie można ufać."
<br>i tym podobne.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Opowieści tego typu mogą też stanowić dla nas pretekst do wyrażania dezaprobaty wobec pewnych części siebie. Mamy skłonność do skrywania takich niezbyt fajnych aspektów własnej osobowości głęboko w podświadomości i udawania, że one nie istnieją. Również nieświadomie dokonujemy ich projekcji na inne osoby, krytykując je za to, czego nie lubimy w sobie.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Gra stwarza nam możliwość zaakceptowania i pokochania odrzuconych przez nas części nas samych oraz podziękowania takim osobom będącym być może Uzdrawiającymi Aniołami- za ukazanie nam, jak w lustrzanym odbiciu, tych aspektów naszego wnętrza, które usilnie domagają się naszej miłości i akceptacji.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;To nie szkodzi, jeśli nie wiecie czym jest Radykalne Wybaczanie. Przede wszystkim wymaga ono od nas pewnej otwartości wobec idei, że wszystkie zdarzenia mają swój sens i że to, co przydarzyło nam się w przeszłości lub co dzieje się z nami teraz, ma swój cel w ramach rozwoju naszej duszy. Jest to koncepcja o charakterze duchowym, która nie powinna jednak urazić niczyich uczuć religijnych. Opiera się ona na założeniu, że gdybyśmy mogli spojrzeć na życie z perspektywy duchowej, (czego nie potrafimy, gdyż nasza świadomość nie jest w tej chwili wystarczająco rozwinięta), jednak gdybyśmy potrafili to robić, zobaczylibyśmy, że wszystko co dzieje się w naszym życiu ma swój sens i cel.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Kiedy otwieramy się na taką ewentualność, życie wydaje się o wiele lepsze. Co więcej, życie układa się też lepiej. Zresztą przekonacie się jak to działa, gdy będziecie już grać. Pamiętajcie jednak, aby nie robić nic na siłę. Nie musicie w nic wierzyć, aby ten proces działał. Po prostu zaangażujcie się w niego i sami zobaczycie jak będziecie się czuli PO zakończeniu gry. Możecie liczyć na to, że przynajmniej poczujecie się lżejsi i swobodniejsi.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Do gry można podejść na dwa sposoby:
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;• Jeśli akurat w waszym życiu dzieje się coś problematycznego i zechcecie zagrać skupiając się na tej właśnie sprawie, aby zobaczyć czego dowiecie się o niej poprzez grę, wybierzecie sposób pierwszy.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;• Drugi sposób to po prostu zaufanie procesowi, co polega na wylosowaniu jednej karty typu ZDARZENIE oraz drugiej z zestawu kart KONTEKST i stworzenie historii w oparciu o to co te karty wam sugerują.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Gra jest w dużym stopniu intuicyjna i możecie być bardzo zaskoczeni widząc jakie sprawy zostaną przywołane przez te dwie karty. Być może nie od razu skojarzycie o jaką sytuację chodzi, może wyjaśni się to dopiero później w trakcie gry- ale pamiętajcie o jednym, tu nie ma przypadków.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Nie potrzebujecie już więcej wyjaśnień, przeczytajcie teraz pierwszą stronę instrukcji gry, aby zobaczyć jak ją rozpocząć. Potem zacznijcie grać i bawcie się dobrze. Miłej zabawy!
  
   </div></td>
  </tr>
  
  
  
        <tr>
   <td>&nbsp;</td>
  </tr>
  
  

  <tr>
   <td style="background-color: #B4EBE6;"><div style="text-align: left;">
(mp3 06m06s) DOŚWIADCZENIE RADYKALNEGO WYBACZANIA
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Wiele osób pyta, czym jest to Radykalne Wybaczanie, co w nim jest radykalnego, czym różni się od tradycyjnego wybaczania. Oto krótkie wyjaśnienie.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Z jednej strony wiemy, że wybaczanie dokonywane w tradycyjny sposób trwa długo. Trudno tego dokonać, a gdy dotyczy maltretowania dzieci lub innych tego typu zdarzeń, potrzebujemy długotrwałej terapii, aby w ogóle "chcieć" wybaczyć osobie sprawcy. Tradycyjne wybaczenie zajmuje tak wiele czasu, ponieważ starając się puścić w niepamięć minione zdarzenia, zachowując przy tym przekonanie, że zdarzyło się coś złego, próbujemy pogodzić ze sobą dwie przeciwstawne energie– pragnienie przebaczenia z jednej strony i potrzebę potępienia z drugiej. Im bardziej kogoś skrzywdzono lub zraniono, tym silniejsza jest nasza skłonność do potępienia. Wieloletnia terapia może oczywiście pomóc, jednak dopóki odczuwamy jakiś niesmak lub żal, nie wspominając o bólu, prawdziwe wybaczenie pozostaje nieosiągalne, niezależnie od tego, ile współczucia zaangażujemy w daną sytuację i jak bardzo będziemy starali się od niej uwolnić.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Natomiast Radykalne Wybaczanie jest praktycznie natychmiastowe, łatwe w realizacji i możliwe do osiągnięcia za pomocą bardzo prostych narzędzi. Nie wymaga żadnej szczególnej wiedzy, wyjątkowych umiejętności, ani nawet dyscypliny i przede wszystkim nie wymaga terapii. Radykalne Wybaczanie pojawia się wówczas, gdy zrozumiemy naprawdę dogłębnie, że w tej samej sytuacji widzianej z perspektywy duchowej nic złego się nie wydarzyło.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Ale co to właściwie znaczy? Oznacza to, że dana sytuacja była kierowana ręką Boga i miała mieć akurat taki przebieg dla najwyższego dobra wszystkich zaangażowanych w nią osób. Co więcej, oznacza to, że nasze Wyższe Jaźnie prosiły o tego typu doświadczenie dla naszego uzdrowienia i duchowego rozwoju.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Czy teraz rozumiecie, co w tym jest radykalnego? Ta idea to prawdziwe wyzwanie. Zastanówcie się, czy kiedykolwiek zdarzyło się, że wspominając wydarzenia z przeszłości, które w swoim czasie były bardzo przykre, a może nawet wywoływały w was myśl, że lepiej już byłoby umrzeć, po latach mieliście poczucie, że miały one jednak swój sens. Może staliście się przez to lepsi, może mądrzejsi, a może były inne pozytywne skutki. Wygląda na to, że jest to bardzo powszechne przeżycie, ponieważ przyznaje się do niego większość ludzi.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Z pomocą Radykalnego Wybaczania idziemy o krok dalej. Przyjmujemy założenie, że nie tylko pewne zdarzenia mają swój sens, ale że "wszystko" ma swój sens i że nie ma od tego wyjątków. Gdy otworzymy się na taką możliwość, następuje przemiana świadomości zwana Doświadczeniem Radykalnego Wybaczania. Z chwilą, kiedy to się zdarza, wasze życie zostaje odmienione. Dzieje się tak, ponieważ począwszy od tej chwili widzicie świat zupełnie inaczej. Nagle zmienia się percepcja, a dawny sposób widzenia znika. Gdy zrozumiemy, że nasze życie przebiega dokładnie tak, jak powinno i że wszystkim kieruje Bóg, odnajdujmy "spokój" nawet w najbardziej nieprzyjemnych sytuacjach lub wspomnieniach. Gdy uświadomimy sobie, że nasi wrogowie w rzeczywistości nas kochają, oczywiście na pewnym poziomie istnienia, nasze serca otwierają się i zostajemy uwolnieni od świadomości bycia ofiarą.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Koncepcja ta może wydawać się dość abstrakcyjna, ale możecie być pewni, że działa w praktycznym wymiarze codziennego życia. Gdy tylko otwieramy się na ideę, że wszystkim kieruje Bóg, całe nasze życie ulega zmianie. Mamy więcej energii, przejawiamy więcej twórczej inwencji, zyskujemy większą zdolność urzeczywistniania swoich pragnień. Dzieje się tak, ponieważ kiedy przestajemy inwestować energię w interpretacje oparte na roli ofiary, mamy jej o wiele więcej do wykorzystania na inne cele.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Zaletą Radykalnego Wybaczania jest jego prostota i łatwość stosowania. Fakt, że można bardzo łatwo uczynić je codzienną praktyką. Po krótkim czasie staje się po prostu stylem życia.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Podczas gry w Satori możecie doświadczyć Radykalnego Wybaczania i przejść pod jego wpływem wewnętrzną przemianę. Jeśli jednak pragniecie przeżyć doświadczenie Radykalnego Wybaczania na jeszcze głębszym poziomie, możecie wziąć udział w warsztacie prowadzonym przez dyplomowanego Trenera Radykalnego Wybaczania. Informacje o miejscach i terminach warsztatów są dostępne na następujących stronach internetowych:
<br>&nbsp;&nbsp;&nbsp;&nbsp;www.radykalnewybaczanie.pl
<br>&nbsp;&nbsp;&nbsp;&nbsp;oraz
<br>&nbsp;&nbsp;&nbsp;&nbsp;www.irenapolkowska-rutenberg.pl
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Pierwsza z nich to strona Instytutu Radykalnego Wybaczania w Polsce. Druga zaś to strona Ireny Polkowskiej-Rutenberg, która wprowadziła Radykalne Wybaczanie do Polski.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Aby skontaktować się telefonicznie do Instytutu Radykalnego Wybaczania dzwońcie na numer (022) 498-39-90. Zaś do Ireny Polkowskiej-Rutenberg na numer komórkowy (880-529-794).
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Jeśli nie posiadacie książki "Radykalne Wybaczanie", możecie zakupić ją w księgarni lub zamówić w wydawnictwie "Medium". W wydawnictwie dostępna jest też płyta CD ze wspaniałym procesem "13 kroków wybaczania". Jest to pięciominutowy proces, przy pomocy którego możecie zmienić każdą bieżącą sytuację, odnajdując w niej poczucie spokoju.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Sprawdźcie podane strony internetowe. Być może znajdziecie tam informacje o warsztatach Radykalnego Wybaczania odbywających się w waszej okolicy.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Dziękujemy za uwagę.


  
   </div></td>
  </tr>
  
  
  
        <tr>
   <td>&nbsp;</td>
  </tr>
  
  

  <tr>
   <td style="background-color: #FFEDFA;"><div style="text-align: left;">
(mp3 20m37s) Instruktarz dla Mistrza Gry
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Jak wspomnieliśmy we wprowadzeniu, głównym celem gry Radykalnego Wybaczania SATORI, podobnie jak wszystkich gier, jest dobra zabawa oraz spędzenie czasu w miłym towarzystwie. W trakcie gry zapewne przekonasz się, że rzeczywiście stwarza ona ku temu okazję. Może również stanowić okazję do tego, aby ludzie w bezpieczny sposób ujawnili sprawy, którymi nie podzieliliby się w zwykłej rozmowie. Oczywiście jest to możliwe tylko wtedy, jeśli gracze tego zechcą. Gra nie prowadzi do konfrontacji, ani nie zmusza grających do ujawniania informacji, które chcieliby zachować dla siebie.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Jedna z funkcji Mistrza Gry polega właśnie na dopilnowaniu, aby nie dochodziło do sytuacji konfrontacji, ani przymusu oraz żeby gracze nie udzielali sobie nawzajem rad, chyba że ktoś będzie o to prosił. Z drugiej strony dopuszczalne jest pytanie, czy dany gracz życzy sobie informacji zwrotnej. Jeśli się na to zgodzi, i tak nigdy nie powinno się udzielać jej w formie rady. Czasami osoby, które znają nas dobrze, są w stanie dostrzec pewne powiązania, których my sami dla siebie nie potrafimy zobaczyć. Dlatego czyjś komentarz może mieć formę tego typu spostrzeżenia. Jednak powinniśmy przy tym zachowywać niezwykłą ostrożność, a jeśli pojawią się wątpliwości, lepiej nie mówmy nic.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Istota gry polega na stworzeniu możliwości, aby wszystkie biorące w niej udział osoby doświadczyły Radykalnego Wybaczania. Jeśli wysłuchałeś nagrania z tej płyty poświęconego Radykalnemu Wybaczaniu, albo przeczytałeś książkę zatytułowaną "Radykalne Wybaczanie", będziesz wiedział, o co chodzi. Proponujemy, abyś przed rozpoczęciem gry umożliwił grupie wysłuchanie pięciominutowego wprowadzenia stanowiącego pierwsze nagranie na tej płycie. Istnieje większa szansa, że gracze wysłuchają go do samego końca, powstrzymując się od zadawania pytań, niż gdybyś dokonywał wprowadzenia samodzielnie. Tym bardziej, że mogą być wśród nich twoi znajomi.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Celem wprowadzenia było zdefiniowanie kilku pojęć, które mogą przydać się w trakcie gry. Jednym z nich jest pojęcie projekcji, z którym gracze zetkną się stając na polu o nazwie PROJEKCJA oraz/lub na polu WIDZISZ U INNYCH WŁASNE CECHY. Pola te nawiązują do idei, że osoby, które budzą w nas emocje, mogą stanowić dla nas rodzaj lustra, dzięki czemu mogą pełnić w stosunku do nas rolę Uzdrawiających Aniołów.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Tekst wprowadzenia wspomniał także o:
<br>&nbsp;&nbsp;&nbsp;&nbsp;• przekonaniach,
<br>&nbsp;&nbsp;&nbsp;&nbsp;• blokadach energii,
<br>&nbsp;&nbsp;&nbsp;&nbsp;• oraz o tym, jaki może być ich udział w naszych opowieściach o sobie w roli ofiary.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Gra została wymyślona tak, aby rozpoznawać te czynniki i umożliwiać nie tylko pozbywanie się ich, ale także jak w przypadku przekonań, tworzenie nowych dających większe możliwości i zastępowanie nimi starych.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Przejrzyjmy teraz instrukcję gry i zajmijmy się tym wszystkim, co wymaga dodatkowych wyjaśnień. Zanim jednak to zrobimy, warto wspomnieć o dwóch sposobach podejścia do gry. Wzmianka o nich znajduje się we wprowadzeniu nagranym na płycie oraz w instrukcji, ale może trzeba będzie udzielić graczom więcej wskazówek na temat każdej z opcji.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Osoba, która decyduje się wykorzystać pierwszy rodzaj podejścia, zapewne ma jakąś sprawę wymagającą pilnego wyjaśnienia lub podjęcia decyzji. Na przykład może ona znajdować się na życiowym rozdrożu i potrzebować pomocy w zorientowaniu się, co robić dalej. Lub też może mieć jakiś problem dotyczący związku i chcieć sobie z nim poradzić, a może ktoś bliski ją zdradził i czuje się w związku z tym zraniona. Sytuacji tego typu jest wiele.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Jeśli gracze wybierają tę opcję, nie losują kart typu ZDARZENIE, ani KONTEKST, ale będą musieli opowiedzieć grupie przynajmniej w zarysie o sytuacji, którą czynią tematem gry.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Przy tej okazji słowo przestrogi:
<br>&nbsp;&nbsp;&nbsp;&nbsp;Jeśli ktoś jest wyjątkowo silnie poruszony jakąś sprawą i zachowuje się niespokojnie, nie powinien grać w grę nawet korzystając z opcji drugiej. Przyczyna niepokoju i tak ujawni się w trakcie gry, dlatego na losową formę jej przebiegu też nie powinieneś wyrazić zgody. Twoją rolą nie jest zajmowanie się czyimś problemem, ani też gra nie ma być formą regularnej terapii. Również osobom cierpiącym na głęboką depresję należy odradzić udział w grze. Jednak wydaje się mało prawdopodobne, aby ktoś w takim stanie miał na to ochotę.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Niech Cię nie zdziwi, jeśli uczestnicy będą doświadczali silnych emocji, a nawet płakali w określonych momentach gry. Nie ma w tym nic złego. Pozwól im przez to przejść, ale też nie zachęcaj ich do płaczu.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Druga opcja polega na tym, aby pozwolić samej grze zasugerować graczom temat. Wylosowana karta typu ZDARZENIE przyniesie im pewnego rodzaju sytuację. Na przykład: "Zdradził Cię Twój przyjaciel", zaś karta KONTEKST zasugeruje okoliczności, w jakich mogło do tego dojść.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Załóżmy, że karta KONTEKST dotyczy Szpitala. W pierwszym momencie to połączenie może wydawać się mało prawdopodobne, jednak przyglądając się obu kartom, ktoś może sobie przypomnieć, że nadal odczuwa ból po tym, jak kilka lat wcześniej przyjaciel zawiódł go podczas sytuacji związanej z chorobą, choć niekoniecznie rozgrywającej się w szpitalu, która jednak mogłaby doprowadzić do hospitalizacji, gdyby się nią w porę nie zająć.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Inaczej mówiąc, znaczenie kart nie zawsze należy traktować dosłownie. Mogą one mieć dla graczy sens symboliczny, wystarczający jednak do tego, aby wydobyć z podświadomości coś, wokół czego nastąpiła blokada energii. W skutek gry zablokowana energia zostanie uwolniona, zaś związana z nią historia oczyści się.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Może zdarzyć się również tak, że karty nie będą w żaden sposób pasowały, przynajmniej z początku, do jakiejkolwiek historii, którą gracze są w stanie sobie przypomnieć. Nie ma to jednak znaczenia. Grający mogą ją po prostu wymyślić w oparciu o wylosowane dwie karty i wykorzystać w grze.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Będziesz zdumiony widząc, że wraz z rozwojem gry nawet wymyślona historia zacznie odzwierciedlać prawdziwe aspekty życia graczy. Nawet całkowicie zmyślona historia przyniesie im doświadczenie Radykalnego Wybaczania, więc wybranie tego typu rozwiązania wcale nie jest gorsze.
<br>
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Warto wyjaśnić teraz znaczenie niektórych pól na planszy oraz, tam gdzie to konieczne, uzupełnić informacje zawarte w instrukcji. Dzięki temu będziesz mógł sprawiać wrażenie, że masz większe doświadczenie w korzystaniu z gry niż pozostali.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Ważne jest, abyś wiedział, że znaczenie pól planszy o tej samej nazwie może być różne, zależnie od poziomu, na którym się znajdują. Dlatego informując graczy o następstwach zajęcia danego pola upewnij się, czy odczytujesz instrukcje dotyczące właściwego poziomu. Mogą być one dość skomplikowane, więc bądź uważny.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Przed omówieniem pól planszy należy jeszcze podkreślić, że będziesz musiał utrzymywać pełne zaangażowanie graczy w opisane w instrukcji reakcje grupowe. Z początku ludzie czują się dość niezręcznie, biorąc w nich udział, lecz kiedy grupa reaguje na działania gracza, gra staje się coraz bardziej dynamiczna i skuteczniejsza. Dlatego zaczynaj pierwszy i pociągaj grupę za sobą.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Spójrzmy na pole "przekonania". Nazwa mówi sama za siebie, szczególnie w obliczu tego, co zostało powiedziane we wprowadzeniu.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Ale już "blokady energii" mogą rodzić różne pytania, ponieważ odnoszą się do czakr, a nie wszyscy wiedzą czym są czakry. Są to ośrodki energetyczne, które znajdują się w ciele eterycznym, stanowiącym energetyczny wzorzec ciała fizycznego. Są one połączone z różnymi układami ciała fizycznego, wibrują z określonymi częstotliwościami i odpowiadają różnym kolorom i dźwiękom. Caroline Myss- jedna z najbardziej znanych postaci wśród badaczy czakr, wskazuje, że każdy z siedmiu energetycznych ośrodków rozmieszczonych w linii pionowej wewnątrz ciała fizycznego odnosi się do specyficznych rodzajów emocjonalnych, psychicznych oraz duchowych obszarów. Najważniejsze z nich znajdziesz na kole kolorów, skojarzone z każdą czakrą oraz jej kolorem.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Nie trudno zauważyć, że gra zawiera też siedem różnokolorowych zestawów kart, na których tematy te są wydrukowane. Są to karty o nazwie "blokady energii". Liczne przykłady pokazują, że jedną z najlepszych metod likwidowania takich blokad jest kierowanie oddechu do zablokowanej czakry przez pewien określony czas. Dlatego w grze sugerujemy wykorzystanie westchnienia ulgi w celu pozbywania się blokad. Nic nie jest tu przypadkowe. Każdy rodzaj reakcji ma swoje uzasadnienie.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Jeśli potrzebujesz więcej informacji na temat czakr, możesz zajrzeć do rozdziału piętnastego książki "Radykalne Wybaczanie". Jeśli zaś chcesz wiedzieć jeszcze więcej, przeczytaj książkę "Anatomia duszy" autorstwa Caroline Myss.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Zajmijmy się teraz polem "projekcja". Pojęcie projekcji zostało wyjaśnione we wprowadzeniu, ale w tym miejscu należy wyjaśnić, że projekcja jest zawsze nieświadoma i powstaje w wyniku odrzucenia przez nas części siebie, które osądziliśmy, wyparliśmy, stłumiliśmy i przenieśliśmy w formie projekcji na kogoś innego. Proces tłumienia zawsze prowadzi do powstawania blokad energii, które są z natury bardzo energochłonne. Wykorzystując westchnienie ulgi w rezultacie uwalniamy się od blokady i jednocześnie uzdrawiamy odrzucaną wcześniej część siebie. Uzdrowienie zaś oznacza obdarzenie miłością i akceptacją tych aspektów własnej osobowości, które rozpaczliwie domagają się naszej miłości i akceptacji. Nie oznacza to wcale, że proces ten musi zostać w pełni wyjaśniony na potrzeby gry. On i tak będzie zachodził w efekcie wykonania tego jednego uwalniającego oddechu. Warto jednak, abyś lepiej zrozumiał zachodzące w grze procesy na wypadek, gdyby pozostali uczestnicy prosili o więcej szczegółów.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Podczas "zabawy w obwinianie" zachęcaj graczy do tego, aby dawali upust swoim uczuciom towarzyszącym roli ofiary. Może to być nieco trudne, szczególnie dla osób, które nie mają zwyczaju okazywania zdenerwowania bezpośrednio wobec tych, na których się złoszczą. Jeśli gracz stwierdzi, że nie czuje złości, powiedz, aby ją udawał, aż ją poczuje.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;"Karma" należy do tych koncepcji, które nie zawsze są rozumiane w świecie zachodu. Zazwyczaj kojarzy się ją z filozofią wschodu oraz z ideą reinkarnacji. Z tego też powodu może być źle przyjmowana przez chrześcijan. Można ją jednak pozbawić religijnego kontekstu przez odniesienie jej do prawa przyczyny i skutku. Jeśli tworzymy przyczynę, możemy w jej następstwie oczekiwać określonych skutków. Dobrze wyraża to porzekadło: "jak sobie pościelesz, tak się wyśpisz". Tak więc karta "karma" oznacza, że doprowadziłeś do powstania przyczyny przyjawiającej się w twoim życiu pod postacią energii, która domaga się zrównoważenia. Mogłeś nawet przyjść na ten świat z jakąś formą energii potrzebującą zrównoważenia.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Sens pola "wyobraź sobie" jest dość oczywisty. Jak to w codziennym życiu bywa, pojawiają się nagle różne nieprzewidziane okoliczności- dobre albo złe. Jakie by nie były, musimy się nimi zająć. Jeśli potrafimy powstrzymać się od ich oceniania, tym lepiej dla nas.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Przejdźmy teraz do poziomu drugiego, do Poziomu Świadomości.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Jest tu parę pól wymagających bliższych wyjaśnień. Spójrzmy na pole "gotowość". Jedna z głównych zasad radykalnego wybaczenia głosi, że aby zdarzały się w naszym życiu cuda, potrzeba jedynie odrobiny "gotowości", zaledwie gotowości do tego, aby być gotowym. Choćby rozważenia "możliwości", że to co się stało było celowe, oraz że moja boska dusza brała udział w stworzeniu danej sytuacji dla mojego najwyższego dobra. Niezależnie od formy narzędzia Radykalnego Wybaczania, użytego do wyrażenia owej odrobiny gotowości: czy będzie to formularz zawarty w książce, 13 kroków z płyty CD, ceremonia radykalnego wybaczenia, czy też ta gra, efekt będzie taki sam. Ponieważ etap ten jest tak istotny, powinna towarzyszyć jej naprawdę dobra reakcja grupy. Taką gotowość trzeba uszanować.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Pole "westchnienie ulgi" było już wspominane. Przejdźmy zatem do pola "pozbądź się tego". Jego sens jest także oczywisty. Warto jednak podkreślić znaczenie udziału ciała w procesie formowania naszych interpretacji i przekonań. Ponieważ są one obecne w każdej komórce naszego ciała, ciało to musi odczuć i zauważyć fakt pozbywania się ich na poziomie fizycznym.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Interesujące jest pole o nazwie "duchowy unik". Duchowy unik ma miejsce wówczas, gdy ktoś pomija etap rozpoznania własnych uczuć i od razu przechodzi do duchowej interpretacji sensu zdarzenia. Aby dokonać całkowitej zmiany interpretacji, najpierw opowiedz komuś swoją historię tak, aby ktoś wysłuchał jej i poznał jej znaczenie. Jest to bardzo ważny etap. W końcu zdarzenie miało miejsce i ktoś pełen współczucia i empatii powinien o tym usłyszeć.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Kolejny etap jest również niezwykle istotny. Dotarcie do uczuć związanych ze zdarzeniem. Jeśli nie pozwolisz sobie poczuć własnych uczuć, nic się nie zmieni. Musisz pamiętać, że energia, która została zablokowana, to energia emocjonalna. Jeśli nie wprawisz jej w ruch, nic nie może się zdarzyć. Ludzie zaangażowani w rozwój duchowy mają skłonność do zupełnego pomijania tej kwestii i przechodzenia od razu do medytacji bądź praktyk kierujących skupienie poza ciało. Umyka im wówczas kluczowy element– moc uzdrawiania zawarta w uczuciach.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;"Samoakceptacja". Uzasadnieniem dla tego pola jest fakt, że ludzie są bardzo przyzwyczajeni do krzywdzenia samych siebie, co zazwyczaj odbywa się poprzez przyciąganie do siebie kogoś, kto poddaje nas rozmaitym represjom. Dlatego wątek ten musiał się tu znaleźć. Ludzie zadręczają się również z powodu posiadania tzw. negatywnych uczuć. W książce "Radykalne Wybaczanie" coś takiego jak "negatywne uczucie" nie występuje. Jedyne uczucie negatywne to takie, które zostało stłumione- wówczas staje się ono toksyczne. Dopóki wyrażamy nasze uczucia, wszystkie są w porządku. Musimy tylko przestać osądzać się za ich odczuwanie, są one darem od Boga.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;"Widzisz u innych własne cechy", stwierdzenie to jest wyrazem idei, że to co dostrzegasz w innych ludziach, co w nich osądzasz i surowo krytykujesz, i co leży u podstaw twojego zadufania w sobie, stanowi część ciebie, którą odrzuciłeś i przeniosłeś w formie projekcji na inne osoby. Przyglądając się kartom pozostałych graczy w poszukiwaniu karty "przekonanie" lub "blokada energii", która najbardziej trafia ci do przekonania w sensie symbolicznym, przyjmujesz na powrót przeniesione na innych cechy, ponieważ należą do ciebie, bezwarunkowo akceptujesz je jako własne. Jeśli nie ma takich kart do wzięcia, wylosuj jedną kartę "przekonanie".
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Przejdźmy teraz do poziomu trzeciego związanego z przemianą.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Pole "uzdrawiający anioł" było wspomniane we wprowadzeniu. Jego sens sprowadza się do zrozumienia, że poprzez działanie prawa wzajemnego przyciągania wprowadzamy do swego życia osoby, które odgrywają dla nas nasze problemy lub są odbiciem naszej nienawiści do siebie, abyśmy mogli ją uzdrowić. Dlatego osoby, które wydają się sprawiać nam najwięcej kłopotów, oferują nam możliwość uzdrowienia, co oznacza, że w rzeczywistości są naszymi Uzdrawiającymi Aniołami. To, co zdają się czynić NAM, tak naprawdę czynią DLA nas. My zaś odwzajemniamy się im tym samym.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Przejdźmy teraz do poziomu czwartego symbolizującego poddanie się Sile Wyższej.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Szczególne znaczenie ma tutaj oczywiście pole "radykalne wybaczenie". Stanowi ono podstawę zmiany perspektywy. Nic złego się nie stało, więc nie ma nic do wybaczenia. Wszystko jest w zgodzie z boskim porządkiem.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Wraz z polem "poddanie się" prowadzi nas do osiągnięcia stanu nazywanego "pełnym Satori". Słowo SATORI pochodzi z języka japońskiego. Znaczy tyle, co duchowe przebudzenie, albo wielkie objawienie. Kiedy dochodzimy do zrozumienia, że wszystko odbywa się w zgodzie z "boskim porządkiem", osiągamy stan głębokiego wewnętrznego spokoju.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Nasza ludzka podróż przez życie rozpoczyna się od doświadczenia całkowitego oddzielenia, samotności, bezbronności oraz strachu. Później, gdy idziemy przez życie i nabieramy duchowej mądrości, zaczynamy dostrzegać we wszystkim Boga. Zaczynamy widzieć w życiu głębszy sens, aż wreszcie doświadczamy stanu jedności ze wszystkim oraz miłości. To jest właśnie "pełne Satori".
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Po dotarciu do pola SATORI, każdy z graczy czeka, aż dotrą do niego pozostali. Zwykle następuje to niedługo po osiągnięciu tego pola przez pierwszego z graczy i tu następuje wielki finał. Wszyscy gracze, poczynając od tego, który dotarł jako pierwszy, przedstawiają nową interpretację sytuacji, z którą rozpoczynali grę. Przy pomocy nowych przekonań zawartych w kartach "nowa opowieść", jakie zgromadzili na swoich planszach gracze, stwarzają nową rzeczywistość. Następnie każdy odczytuje jedną z dwóch afirmacji podanych w ulotce z instrukcją. Potem zaś siadają razem w okręgu i wspólnie odczytują "inwokację radykalnego wybaczania".
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Gra zwykle trwa od jednej do dwóch godzin. Nie powinna trwać dłużej. Jeśli tak się dzieje, może to oznaczać, że wypowiedzi niektórych graczy są dużo dłuższe niż jest to konieczne. Jeśli trafisz na taką osobę, być może będziesz musiał zareagować, aby wypowiedzi graczy były krótkie i na temat, gdyż w przeciwnym razie gra rzeczywiście będzie trwać zbyt długo. W miarę możliwości z tego samego powodu powstrzymuj też grupę przed wprowadzaniem zbyt wielu tematów pobocznych i opowiadaniem anegdot.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Teraz zajmijmy się efektami pojawiającymi się w następstwie gry i na tym zakończymy instruktaż. Nie ulega wątpliwości, że gra poruszy coś we wnętrzach uczestników. Dopilnuj, aby każdy zapoznał się z końcowym ustępem ulotki z instrukcją gry i zrozumiał jego treść. Na wypadek, gdyby ktoś później zadzwonił do ciebie z informacją o jakichś problemach wykraczających poza twoje kompetencje, warto dysponować kontaktami do osób, które mogłyby w takich przypadkach pomóc. To, co mógłbyś w podobnej sytuacji zasugerować, to wypełnienie formularza znajdującego się w książce "Radykalne Wybaczanie", czy to na temat sprawy będącej tematem gry, czy też na temat innej sprawy, jaka mogła się pojawić.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Dziękujemy Ci. Doceniamy Twoją gotowość pełnienia roli Mistrza Gry  i ufamy, że będziesz się dobrze bawił. Nie czuj się jednak zobowiązany do tego, aby pełnić ją za każdym razem. Możesz od czasu do czasu pozwolić sprawdzić się w niej komuś innemu.
<br>
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;Jeśli kontakt z grą Satori zainspirował Cię do większego zaangażowania się w Radykalne Wybaczanie, możesz rozważyć możliwość zostania dyplomowanym Trenerem Radykalnego Wybaczania i osobą prowadzącą Ceremonię. W trakcie służących temu warsztatów możesz nauczyć się jak pracować z ludźmi w roli trenera i jak korzystać z technik Radykalnego Wybaczania, aby pomagać innym zmieniać ich życie na lepsze.
<br>
<br>&nbsp;&nbsp;&nbsp;&nbsp;W celu uzyskania dalszych informacji na ten temat odwiedź stronę internetową Instytutu Radykalnego Wybaczania: www.radykalnewybaczanie.pl

  
   </div></td>
  </tr>
  
  
        <tr>
   <td>&nbsp;</td>
  </tr>
  
  
        <tr>
   <td>&nbsp;</td>
  </tr>
  
  
        <tr>
   <td style="background-color: #ffffff;">(czas czytania: około 45min20sek)
<p class=MsoNormal align=center style='text-align:center'><b><i><span style='font-size:22.0pt;
font-family:"Bookman Old Style",serif;color:#00B050'>Historia <span
class=SpellE>Jill</span><o:p></o:p></span></i></b></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'><span>            </span>Gdy zobaczyłem moją siostrę <span
class=SpellE>Jill</span>, w sali przylotów na <span class=SpellE>Hartsfield</span>
International <span class=SpellE>Airport</span> w Atlancie, od razu wiedziałem,
że coś ją trapi. Nigdy nie potrafiła ukryć swoich uczuć i widać było wyraźnie,
że cierpi.<o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'><span>
            </span><span class=SpellE>Jill</span>
przyleciała do Stanów Zjednoczonych z Anglii razem z naszym bratem, którego nie
widziałem od szesnastu lat. W 1972 roku John wyemigrował do Australii, ja
natomiast, dwanaście lat później, przeniosłem się do Ameryki. <span
class=SpellE>Jill</span> jako jedyna z rodzeństwa została w Anglii. John
właśnie wracał do domu, a wizyta w Atlancie stanowiła ostatni etap jego
podróży. <span class=SpellE>Jill</span> towarzyszyła mu, by go wyprawić do
Australii, a przy okazji odwiedzić mnie i moją żonę, Joannę. Po powitalnych
uściskach i pocałunkach, czując się nieco niezręcznie, udaliśmy się
do hotelu. Zarezerwowałem pokoje na jedną noc, bo chcieliśmy pokazać
mojemu rodzeństwu Atlantę, zanim wyruszymy na północ, do domu. <span
class=SpellE>Jill</span> skorzystała z pierwszej, nadarzającej się okazji, by
podjąć poważną rozmowę. <o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt;
color:lime'><span>            </span></span><span
style='font-size:11.0pt;color:#00B050'>-Colin, u mnie sprawy nie mają się
dobrze. Chyba się rozejdziemy z Jeffem.</span><span style='font-size:11.0pt;
color:lime'> </span><span style='font-size:11.0pt'>Chociaż już wcześniej
zauważyłem niepokój mojej siostry, jej słowa mnie zaskoczyły. Zawsze mi się
wydawało, że ich trwające od sześciu lat małżeństwo jest szczęśliwe. Każde z
nich miało za sobą jeden nieudany związek. Jednak tym razem uczucie, które ich łączyło,
zdawało się być trwałe. Jeff miał troje dzieci z pierwszego małżeństwa, <span
class=SpellE>Jill</span> - czworo. Tylko jej najmłodszy syn, Paul,
mieszkał jeszcze z nimi.<span style='color:green'> </span><span
style='color:blue'>-Co się dzieje?</span><span style='color:green'> </span>-spytałem.<span
style='color:green'> </span><span style='color:#00B050'>-Nie wiem, od czego
zacząć. To wszystko jest trochę zaskakujące </span>-odparła<span
style='color:lime'>. </span><span style='color:#00B050'>-Jeff zachowuje się
dziwacznie, nie mogę go dłużej znieść. Doszło do tego,
że przestaliśmy się do siebie odzywać. To mnie wykańcza. Całkiem się ode
mnie odwrócił, a na dodatek twierdzi, że to moja wina. </span><span
style='color:blue'>-Opowiedz mi o tym</span> -poprosiłem i spojrzałem na Johna,
który wzniósł oczy ku niebu. Mieszkał u</span> <span class=SpellE><span
style='font-size:11.0pt'>Jill</span></span><span style='font-size:11.0pt'>
przez tydzień, zanim przyleciał do Atlanty. Domyśliłem się, że dość się na ten
temat nasłuchał. <span style='color:#00B050'>-Czy pamiętasz
najstarszą córkę Jeffa, Lorraine? </span>-spytała <span class=SpellE>Jill</span>.
Przytaknąłem.<span style='color:lime'> </span><span style='color:#00B050'>-W
zeszłym roku jej mąż zginął w wypadku samochodowym. Od tamtej pory Jeffa
łączą z córką jakieś dziwne stosunki. Czuli się do niej przez telefon,
mówi do niej „kochanie” i spędza długie godziny, szepcząc z nią o
czymś. Zupełnie jakby byli kochankami, a nie ojcem i córką.
Jeśli jest zajęty, kiedy ona dzwoni, rzuca robotę w połowie i biegnie z nią
rozmawiać. Zachowuje się tak samo, jeśli nie gorzej, gdy Lorraine do nas
przychodzi. Prowadzą te tajemnicze, ciche rozmowy, do których nie dopuszczają
nikogo, zwłaszcza mnie. Trudno mi to wytrzymać. Mam wrażenie, że ona stała się
dla niego najważniejsza. Nie potrafię sobie z tym dać rady, czuję się
odtrącona i niepotrzebna.</span><span style='color:lime'> </span><span
class=SpellE>Jill</span> mówiła długo, szczegółowo opisując dziwną sytuację w
rodzinie, a my z Joanną słuchaliśmy uważnie. Głośno zastanawialiśmy się nad
przyczyną <span class=SpellE>zachowań</span> Jeffa i staraliśmy się wyrazić
nasze współczucie. Jak przystało na brata i szwagierkę, sugerowali jej, jak
rozmawiać z mężem i rozważaliśmy, co można zrobić w tej sytuacji. Również John
włączył się do rozmowy, podając swój punkt widzenia. Zachowanie męża <span
class=SpellE>Jill</span>, sprzeczne z jego naturą, zastanawiało mnie
i dziwiło. Jeff, jakiego znałem, był uczuciowo związany ze swymi córkami i
na tyle niepewny siebie, by bardzo potrzebować ich miłości i aprobaty, to
prawda. Nigdy jednak nie widziałem, by zachowywał się tak jak to opisała moja
siostra. Zawsze był dla niej czuły i troskliwy. Prawdę mówiąc, trudno mi było
uwierzyć, że traktuje ją w tak okrutny sposób. Dobrze rozumiałem,
dlaczego <span class=SpellE>Jill</span> jest nieszczęśliwa. Przekonanie Jeffa,
że żona wszystko sobie wymyśliła i sama doprowadza się do szaleństwa nie
poprawiało sytuacji. Do rozmowy wróciliśmy następnego dnia. Zaczynałem się
domyślać, co się dzieje między <span class=SpellE>Jill</span> i Jeffem z punktu
widzenia Radykalnego Wybaczania, ale postanowiłem na razie o tym nie
mówić. Siostra była zbyt przejęta dramatyczną sytuacją i nie potrafiłaby
wysłuchać ani zrozumieć tego co do niej mówię. Radykalne Wybaczanie opiera się
na bardzo szerokiej perspektywie duchowej, której nie znaliśmy, mieszkając w
Anglii. Wiedząc, że moje rodzeństwo nie ma pojęcia o tym procesie,
doszedłem do wniosku, iż nie nadszedł jeszcze czas, żeby ich zapoznać z tą
śmiałą myślą: <b>wszystko dzieje się tak
jak powinno, a cała sytuacja ma doprowadzić do uzdrowienia <span class=SpellE>Jill</span></b>.
Jednak po drugim dniu nieustannego omawiania problemu postanowiłem zapoznać ich
z zasadami Radykalnego Wybaczania. Wiedziałem, że moja siostra będzie musiała
się otworzyć na prawdopodobieństwo istnienia czegoś więcej niż to, co sama
dostrzega, że będzie musiała uznać ingerencję Boskiej istoty, mającą na celu
jej dobro. Jednak <span class=SpellE>Jill</span> tak bardzo czuła się ofiarą
zaistniałej sytuacji, że nie byłem pewny, czy jest gotowa na moją
interpretację <span class=SpellE>zachowań</span> Jeffa,
która by ją z tej roli wytrąciła. Tymczasem moja siostra znowu
zaczęła powtarzać swoją relację z poprzedniego dnia. Postanowiłem wkroczyć
do akcji. Ostrożnie zapytałem: <span style='color:blue'>-<span
class=SpellE>Jill</span>, czy byłabyś skłonna spojrzeć na to z innej strony?
Czy potrafisz zaakceptować zupełnie inną interpretację swojej sytuacji?</span>
Spojrzała na mnie pytająco, jakby myślała:<span style='color:lime'> </span><span
style='color:#00B050'>„A czy w ogóle można to inaczej rozumieć? Jest, jak
jest!”</span>. Kiedyś pomogłem jej rozwiązać jakiś uczuciowy problem, miała
więc do mnie dość zaufania, by powiedzieć: <span style='color:#00B050'>-No,
chyba tak. O co Ci chodzi?</span> Na to tylko czekałem. <o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'><span>
            </span><span style='color:blue'>-To, co
teraz powiem, może ci się wydać dziwne, ale postaraj się nic nie mówić, dopóki
nie skończę. Po prostu spróbuj założyć, że to, co mówię, jest prawdziwe, i
zastanów się, czy przypadkiem nie mam racji.</span> John bardzo się starał
uważnie słuchać <span class=SpellE>Jill</span>, ale nieustanne rozmowy o Jeffie
strasznie go znudziły. W gruncie rzeczy całkiem się z nich wyłączył. Jednak,
gdy usłyszał moje słowa, ożywił się i znowu zaczął słuchać<span
style='color:blue'>. -Twoja opowieść jest z pewnością prawdziwa</span>
-zacząłem. <span style='color:blue'>-Nie mam najmniejszej wątpliwości, że
sprawy toczą się tak, jak mówisz. Poza tym przez ostatnie trzy tygodnie John
był świadkiem wielu z tych zdarzeń i wszystko potwierdza, prawda John?</span>
-zwróciłem się do brata. <span style='color:red'>-Jak najbardziej</span>
-powiedział. <span style='color:red'>-Widziałem to i szczerze mówiąc, czułem
się dziwnie w domu <span class=SpellE>Jill</span>.</span> <span
style='color:blue'>-To mnie nie zaskakuje</span> -odparłem. <span
style='color:blue'>-<span class=SpellE>Jill</span>, chciałbym, żebyś wiedziała,
że nie lekceważę, ani nie neguję twojej opowieści. Jestem przekonany, że było
tak, jak mówisz. Pozwól jednak, że zasugeruję ci, jaki podtekst może mieć ta
sytuacja. </span><span style='color:#00B050'>-Co to znaczy „podtekst”? </span>-zapytała
<span class=SpellE>Jill</span> podejrzliwie. <span style='color:blue'>-Na ogół
uważamy, że poza otaczającym nas światem nie ma innej rzeczywistości. To
zupełnie naturalne</span> -wyjaśniłem<span style='color:blue'>. -Ale może jest
coś więcej. Coś, czego nie dostrzegamy, bo nasze pięć zmysłów nie zostało
przystosowane do tego zadania. Nie znaczy to jednak, że tego nie ma. Weźmy
twoją sytuację. Ty i Jeff macie problem. A może pod nim dzieje się coś
duchowego, w czym uczestniczą ci sami ludzie i te same zdarzenia, ale co ma
całkiem inne znaczenie? A jeśli wasze jaźnie wykonują ten sam taniec, lecz
każda do zupełnie innej muzyki? A jeśli ten taniec ma was uzdrowić? Może warto
spojrzeć na to, jak na okazję do uleczenia i rozwoju? To byłaby całkiem
inna interpretacja, nie sądzisz?</span> Moje rodzeństwo spojrzało na mnie,
jakbym mówił w obcym języku. Postanowiłem dać sobie spokój z wyjaśnieniami i od
razu przejść do rzeczy. <span style='color:blue'>-<span class=SpellE>Jill</span>,
przypomnij sobie ostatnie trzy miesiące</span> -powiedziałem<span
style='color:blue'>. -Co czułaś, widząc zachowanie Jeffa wobec córki?</span> <span
style='color:#00B050'>-Głównie gniew</span> -odparła. <span
style='color:#00B050'>-Frustrację</span> -dodała, a po dłuższej chwili:<span
style='color:lime'> </span><span style='color:#00B050'>-I smutek. Naprawdę było
mi smutno.</span> -Łzy napłynęły jej do oczu<span
style='color:lime'>. </span><span style='color:#00B050'>-Czuję się taka samotna
i niekochana</span> ­powiedziała i zaczęła cicho łkać. <span style='color:#00B050'>-Nie byłoby
tak źle, gdybym wiedziała, że Jeff nie potrafi okazywać uczuć, ale przecież
potrafi, tylko że okazuje je córce!</span> Ostatnie słowa wypowiedziała
gwałtownie i z wściekłością, a potem rozpłakała się, pierwszy raz
od przyjazdu. Już przedtem uroniła kilka łez, jednak nie pozwoliła sobie
na prawdziwy płacz. Nareszcie się rozluźniła. Cieszyłem się, że zdołała tak
szybko dotrzeć do swoich uczuć. Minęło całe dziesięć minut, zanim przestała
płakać. Czułem, że teraz może zacząć mówić. Zapytałem więc: <span
style='color:blue'>-<span class=SpellE>Jill</span>, czy pamiętasz, żebyś tak
się czuła, będąc małą dziewczynką?</span> Bez najmniejszego wahania
przytaknęła. Nie od razu chciała powiedzieć, kiedy to było, więc poprosiłem ją,
by to wyjaśniła. Przez chwilę milczała. <span style='color:#00B050'>-Tata
też mnie nie kochał!</span> -wykrztusiła wreszcie i znowu zaczęła płakać. <span
style='color:#00B050'>-Tak chciałam, żeby mnie kochał. Myślałam, że
nikogo nie potrafi darzyć uczuciem! A potem pojawiła się twoja córka,
Colin. I on ją kochał. Dlaczego, do diaska, Mnie nie mógł pokochać?!</span> -Wykrzykując
te słowa, uderzyła pięścią w stół, po czym rozszlochała się rozpaczliwie. <span
class=SpellE>Jill</span> mówiła o mojej najstarszej córce, Lorraine.
Przypadkowo ona i najstarsza córka Jeffa noszą to samo imię. Płacz pomógł <span
class=SpellE>Jill</span>. Łzy przyniosły ulgę i prawdopodobnie stały się
dla niej punktem zwrotnym. Pomyślałem, że prawdziwy przełom może być już
blisko. Musiałem kontynuować. <span style='color:blue'>-Opowiedz mi o tym
incydencie z moją córką i tatą </span>­poprosiłem. <span style='color:#00B050'>-Dobrze</span>
-odparła <span class=SpellE>Jill</span>, uspokajając się. <span
style='color:#00B050'>-Zawsze czułam, że tata mnie nie kocha, i szaleńczo
pragnęłam jego miłości. Nigdy mnie nie wziął za rękę, nie posadził na kolanach.
Zawsze wydawało mi się, że to moja wina. Kiedy byłam starsza, mama powiedziała
mi, że według niej tata nie potrafi kochać nikogo, nawet jej. Wtedy pogodziłam
się z tym do pewnego stopnia. Wytłumaczyłam sobie, że skoro nie jest zdolny do
miłości, to nie jest to moja wina. Naprawdę nikogo nie kochał. Ledwo zauważał
moje dzieci a swoje wnuki, a jeszcze mniej innych ludzi, czy obce dzieci.
Nie był złym ojcem. Po prostu nie umiał kochać. Było mi go żal. </span>Znowu
się rozpłakała, tym razem, nie starając się powstrzymać łez. Wiedziałem, co
miała na myśli, mówiąc tak o ojcu. Był dobrym, łagodnym człowiekiem,
ale bardzo cichym i zamkniętym w sobie. Najczęściej zdawał się być
emocjonalnie niedostępny dla nikogo. Kiedy <span class=SpellE>Jill</span> się
opanowała, ponownie podjęła wątek. <span style='color:#00B050'>-Pamiętam
szczególnie jeden dzień u ciebie w domu. Twoja córka, Lorraine, miała wtedy
cztery czy pięć lat. Rodzice przyjechali z Leicester i wszyscy udaliśmy się do
ciebie. Zobaczyłam, jak Lorraine bierze tatę za rękę i mówi:</span><span
style='color:lime'> </span><span style='color:red'>„Chodź, dziadku, pokażę ci
ogród i moje kwiaty”</span>.<span style='color:yellow'>.</span><span
style='color:lime'> </span><span style='color:#00B050'>Był niczym plastelina w
jej dłoniach. Oprowadziła go po całym ogrodzie i mówiła, mówiła,
mówiła, pokazując mu swoje kwiaty. Oczarowała go. Przez cały czas obserwowałam
ich przez okno. Kiedy wrócili, posadził ją sobie na kolanach i bawił się z nią
wesoło. Nigdy go takim nie widziałam. Byłam załamana. Więc on jednak umie
kochać! Jeśli potrafi darzyć uczuciem Lorraine, to dlaczego nie mnie?</span>
Ostatnie słowa wypowiedziała szeptem, z żalem i smutkiem powstrzymywanym przez
tyle lat. Doszedłem do wniosku, że na razie dość już dokonaliśmy, i
zaproponowałem, że zrobię herbatę. (Co u licha! W końcu jesteśmy
Anglikami! Zawsze robimy herbatę, bez względu na sytuację!). <o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'>
   <span>            </span>Interpretując historię <span
class=SpellE>Jill</span> z punktu widzenia Radykalnego Wybaczania, z łatwością
zrozumiałem, że dziwne zachowanie Jeffa podświadomie miało pomóc mojej siostrze
w uzdrowieniu jej związków z ojcem. Gdyby mogła to dostrzec i zauważyć
doskonałość w postępowaniu Jeffa, wyleczyłaby się z bólu, a mąż z pewnością
przestałby się dziwnie zachowywać. Jednak nie bardzo wiedziałem, jak wyjaśnić
to <span class=SpellE>Jill</span> na tym etapie. Na szczęście nie musiałem, bo
sama zauważyła oczywisty związek między tymi dwoma zdarzeniami. Później tego
samego dnia moja siostra spytała: <span style='color:#00B050'>-Colin, czy to
nie dziwne, że obie dziewczyny, córka Jeffa i twoja, mają to samo imię?
Uświadomiłam sobie też, że obie są pierworodne i obie mają jasne włosy. Czy to
nie dziwny zbieg okoliczności? Sądzisz, że jest w tym jakiś sens?</span>
Zaśmiałem się i odparłem: <span style='color:blue'>-Oczywiście, to klucz do
zrozumienia całej sytuacji.</span> Spojrzała na mnie ostro. <span
style='color:#00B050'>-Co chcesz przez to powiedzieć?</span> <span
style='color:blue'>-Sama się domyśl </span>-odparłem. <span style='color:blue'>-Jakie
inne podobieństwa widzisz między zdarzeniem z tatą i moją Lorraine a twoim
dzisiejszym położeniem?</span> <span style='color:#00B050'>-<span class=SpellE>Hm</span>.
Obie dziewczyny mają to samo imię. I obie dostają to, czego ja nie dostaję od
mężczyzn. </span><span style='color:blue'>-Co to jest?</span> -zapytałem. <span
style='color:#00B050'>-Miłość</span> -wyszeptała. <span style='color:blue'>-No
i...?</span> -podpowiedziałem łagodnie. <span style='color:#00B050'>-Wygląda na
to, że twoja Lorraine potrafiła zdobyć miłość taty, a ja nie. Również córka
Jeffa dostaje tyle miłości od swego ojca, ile zapragnie, ale moim kosztem. O
mój Boże!</span> ­wykrzyknęła. Coś zaczynało do niej docierać. <span
style='color:#00B050'>-Ale dlaczego? Nie rozumiem. To trochę przerażające! Co
się, u licha, dzieje?</span> -zapytała przestraszona. <span>   </span>Nadeszła chwila, by wszystko jej wyjaśnić. <span style='color:
blue'>-Słuchaj, <span class=SpellE>Jill</span>. Zaraz ci to wytłumaczę. Masz
doskonały dowód, że pod dramatem, który nazywamy życiem, kryje się całkiem inna
rzeczywistość. Uwierz mi, nie ma się czego bać. Kiedy zobaczysz, jak to działa,
będziesz bardziej ufna, poczujesz się bezpieczniej i spokojniej, niż
kiedykolwiek wydawało ci się możliwe. Zdasz sobie sprawę jak dobrze nas wspiera
Wszechświat albo Bóg, jakkolwiek to nazwiesz. Czyni to w każdej chwili,
każdego dnia chociaż sytuacja może się czasem wydawać bardzo trudna.
Z duchowego punktu widzenia </span>-ciągnąłem <span style='color:blue'>-Nasz
dyskomfort w jakiejś sytuacji jest sygnałem, że działamy niezgodnie z duchowym
prawem i właśnie mamy okazję coś poprawić. Może chodzić o jakiś głęboki ból
albo szkodliwe przekonanie, które nie pozwala nam żyć w zgodzie z sobą samym.
Nieczęsto patrzymy na to z tej perspektywy. Osądzamy raczej sytuację i
obwiniamy innych za to, co się dzieje, a takie podejście nie pozwala nam
odebrać i zrozumieć przesłania i zagradza nam drogę do uzdrowienia. Jeśli nie
uleczymy tego, co uleczenia wymaga, będziemy odczuwać jeszcze większy
dyskomfort, aż wreszcie zostaniemy wręcz zmuszeni do zadania sobie pytania: 
<b>„Co się dzieje?”.</b> Czasami przesłanie
musi stać się bardzo głośne lub ból niezwykle silny, zanim zwrócimy
na to uwagę. Zagrażająca życiu choroba to bardzo wyraźne przesłanie.
A przecież niektórzy ludzie nawet w obliczu śmierci nie widzą związku między
zdarzeniami w ich życiu, a okazją do uzdrowienia, którą one im dają…<o:p></o:p></span></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'>Umilkłem
na chwilę. <o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'>
   <span>            </span><span style='color:blue'>-Jeśli o
ciebie chodzi</span> -znów podjąłem <span style='color:blue'>-to na uleczenie
czeka twój ból związany z ojcem, który nigdy nie okazał ci miłości. Takie
jest właśnie źródło twoich dzisiejszych odczuć. Ten ból pojawiał się już w
różnych sytuacjach, ale ponieważ go nie rozpoznałaś, nigdy się od niego nie
uwolniłaś. Dlatego kolejna okazja do przyjrzenia się mu i do wyzwolenia
się od niego jest darem.</span> <span style='color:#00B050'>-Darem?</span><span
style='color:lime'> </span>-zdumiała się <span class=SpellE>Jill</span>. <span
style='color:#00B050'>-Chcesz powiedzieć, że</span></span><span
style='color:#00B050'> </span><span style='font-size:11.0pt;color:#00B050'>to dar,
ponieważ jest w nim ukryte przesłanie dla mnie? Takie, które mogłam już dawno
otrzymać, gdybym umiała je zrozumieć? </span><span style='font-size:11.0pt;
color:blue'>-Tak</span><span style='font-size:11.0pt'> -powiedziałem. <span
style='color:blue'>-Gdybyś je dostrzegła wcześniej, twoje cierpienie byłoby
mniejsze i nie przeżywałabyś tego, co przezywasz dzisiaj. Ale to
nieważne. Dobrze, że rozumiesz to teraz. Nie będziesz musiała zapaść na
śmiertelną chorobę, by to zrozumieć, jak wielu innych. Właśnie zaczynasz
pojmować owo przesłanie i wyzwalać się od bólu. Pozwól, że ci wyjaśnię, co
się stało i jak wpłynęło to na twoje dotychczasowe życie</span> -dodałem.
Chciałem, by jasno zrozumiała swą sytuację. <span style='color:blue'>-W
dzieciństwie czułaś się opuszczona i niekochana przez tatę. To bardzo
niebezpieczne uczucie dla dziewczynki, bo do jej rozwoju konieczne jest
poczucie, że jest kochana przez ojca. A ponieważ ty takiego poczucia nie
miałaś, doszłaś do wniosku, że sama jesteś temu winna. Uznałaś, że nie
jesteś godna miłości, że nie jesteś dość dobra. To przekonanie zakorzeniło się
głęboko w twojej podświadomości i później zaczęło wpływać na twoje stosunki z
innymi ludźmi. Inaczej mówiąc, odzwierciedlając twoje podświadome przekonanie,
że nie jesteś dość dobra, życie stwarzało ci sytuacje, w których mogłaś się o
tym przekonać. Życie zawsze potwierdza nasze przekonania. W dzieciństwie ból
wynikający z faktu, że tata nie okazywał ci miłości, był zbyt silny,
stłumiłaś więc jego część, a resztę wymazałaś ze świadomości.
Kiedy tłumisz jakieś uczucia, nadal wiesz, że je masz, lecz odsuwasz je od
siebie. Natomiast uczucia wymazane z pamięci „zakopujemy” na ogół tak
głęboko w podświadomości, że przestajemy sobie z nich zdawać sprawę. Później
odkryłaś </span>- mówiłem dalej -<span style='color:blue'>że twój ojciec nie
potrafi kochać nikogo, zrehabilitowałaś się więc trochę we własnych oczach
i zaczęłaś pozbywać bólu, wywołanego brakiem jego miłości. Prawdopodobnie
uwolniłaś część stłumionego bólu oraz w pewnym stopniu zrewidowałaś
przekonanie, że jesteś niegodna miłości. Skoro on nie potrafi kochać
nikogo, być może to nie twoja wina, że ciebie nie kocha. A potem przyszło
odkrycie, które wtrąciło cię ponownie w rozpacz. Kiedy zauważyłaś, że
ojciec kocha moją Lorraine, powróciło pierwotne przekonanie. Powiedziałaś
sobie: </span></span><i><span
style='font-size:10.0pt;font-family:"Bookman Old Style",serif;color:blue'>„Mój
ojciec potrafi kochać, ale nie mnie. To wyraźnie moja wina. Nie jestem dość
dobra dla niego i nigdy nie będę dość dobra dla żadnego mężczyzny”.</span></i>
<i><span style='font-size:11.0pt;color:blue'> </span></i><span
style='font-size:11.0pt;color:#00B050'>-Ale jak do tego doszło?</span><span
style='font-size:11.0pt'> -przerwała <span class=SpellE>Jill</span>. <span
style='color:#00B050'>-Nie potrafię zrozumieć, w jaki sposób przekonałam
siebie, że nie jestem dość dobra.</span> <span style='color:blue'>-Jak
wyglądało twoje małżeństwo z Henrym - twoim pierwszym mężem?</span> -zapytałem.
<span class=SpellE>Jill</span> była jego żoną przez piętnaście lat.
Mieli czworo dzieci. <span style='color:#00B050'>-Nieźle w wielu sprawach,
ale on był taki niewierny. Ciągle romansował z innymi kobietami, nienawidziłam
go za to.</span> <span style='color:blue'>-No właśnie. Uważałaś go za drania, a
siebie za ofiarę. Tymczasem ściągnęłaś go do swojego życia, bo w
gruncie rzeczy wiedziałaś, że potwierdzi twoje przekonanie, iż nie jesteś dość
dobra. Jego niewierność utwierdzała cię tylko w słuszności osądu
własnej osoby</span><span style='color:#00B050'>. -Chcesz powiedzieć, że Henry
czynił mi przysługę?! No nie! Tego już za wiele!</span> --powiedziała
ze śmiechem ale czułem, że jest zła. <span style='color:blue'>-Przecież
utwierdzał cię w twoim przekonaniu </span>-odparłem. <span style='color:blue'>-Tak bardzo
nie byłaś dość dobra, że ciągle szukał innych kobiet, by uzupełnić twoje braki.
Gdyby potraktował cię jako osobę, której nic nie brakuje, i był ci wierny,
stworzyłabyś sobie inny problem, by dowieść, że masz rację.
I na odwrót, gdybyś z czasem zmieniła swoje przekonanie, uwalniając
się od pierwotnego bólu wywołanego przez twego ojca, i gdybyś uwierzyła,
że jesteś dość dobra, Henry przestałby się umawiać z twoimi przyjaciółkami.
A nawet gdyby nie przestał, ty odeszłabyś od niego i znalazłabyś sobie
kogoś, kto traktowałby cię jak osobę wystarczająco dobrą. Swoją rzeczywistość
tworzymy zawsze zgodnie z własnymi przekonaniami. Jeśli chcesz je poznać,
przyjrzyj się temu, co masz w życiu. Życie zawsze odzwierciedla nasze
przekonania.</span> <span class=SpellE>Jill</span> wydawała się nieco
skonsternowana, postanowiłem więc powtórzyć to, co już raz powiedziałem. <o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'><span>            </span><span style='color:blue'>-Za każdym
razem, gdy Henry cię oszukiwał, dawał ci okazję do uwolnienia się od bólu
związanego z brakiem miłości ojca. Umacniał twoje przekonanie, że nigdy
nie będziesz dość dobra dla żadnego mężczyzny. Na początku raniło cię to
tak bardzo, że miałaś okazję dotrzeć do tego podstawowego bólu i zrozumieć swój
system przekonań na własny temat. Te pierwsze akty zdrady były pierwszą szansą
na wprowadzenie w życie zasad Radykalnego Wybaczania i na uzdrowienie, ale ty
jej nie dostrzegłaś. Coraz bardziej obciążałaś męża winą, a z siebie
robiłaś ofiarę, co uniemożliwiało uleczenie. </span><span style='color:#00B050'>-Co
rozumiesz przez „<i>wybaczanie</i>”?</span>
-zapytała <span class=SpellE>Jill</span>, nadal zbulwersowana. <span
style='color:#00B050'>-Chcesz powiedzieć, że powinnam mu wybaczyć, iż uwiódł
moją najlepszą przyjaciółkę, a potem każdą kobietę, która mu na to
pozwoliła?</span> <i><span style='color:
blue'>-Chcę powiedzieć, że wtedy dawał ci okazję do rozpoznania dręczącego cię
bólu i do zrozumienia, jak niektóre przekonania kierują twoim życiem. Tym samym
dawał ci okazję do zmiany twego przekonania i uwolnienia się od bólu. To
nazywam </span></i><b><span
style='color:blue'>wybaczaniem</span></b><i><span
style='color:blue'>.</span></i><span style='color:blue'> Czy rozumiesz,
dlaczego twój mąż na to zasługuje, <span class=SpellE>Jill</span>?</span> <span
style='color:#00B050'>-Chyba tak</span> -odparła <span style='color:#00B050'>-Henry
odzwierciedlał moje przekonanie, które powstało dlatego, że czułam się
niekochana przez ojca. Pokazywał mi, że uważam, iż nie jestem dość dobra. Czy
tak?</span> <span style='color:blue'>-Tak. I ponieważ dawał
ci tę okazję, jest godny uznania bardziej, niż teraz ci się wydaje.
Nie mamy sposobu, żeby się dowiedzieć, czy on przestałby uwodzić
kobiety gdybyś ty rozwiązała swój problem z tatą, czy też ty byś od niego
odeszła. W obu wypadkach dobrze by ci się przysłużył. W tym znaczeniu zasługuje
nie tylko na twoje wybaczenie, ale wręcz na wdzięczność. I wiesz co? To
nie jego wina, że nie zrozumiałaś ukrytego znaczenia jego postępowania.
Trudno ci zaakceptować myśl, że twój pierwszy mąż starał się przekazać ci
wielki dar, wiem o tym. Nie tak nas uczono myśleć. Nie mówi się nam,
byśmy przyglądali się zdarzeniom i komentowali: „<i>Popatrzcie tylko co stworzyłem w swoim życiu! Czy to nie ciekawe?</i>”.
Uczy się nas natomiast osądzać, potępiać, oskarżać, grać rolę ofiary i mścić
się. Niekontyku nam również nie mówi, że naszym życiem kierują inne siły
niż świadomość, a przecież tak właśnie jest. W rzeczywistości to
umysł Henry’ego próbował ci pomóc w uzdrowieniu. Twój pierwszy mąż
poddawał się swemu uzależnieniu od seksu, ale <i>jego jaźń, we współpracy z twoją, postanowiła tę jego słabość wykorzystać
do twojego duchowego rozwoju.</i> Uznanie tego faktu to podstawowa zasada
Radykalnego Wybaczania, którego celem jest dostrzec prawdę za pozorami i
zrozumieć, że ową prawdą zawsze jest miłość.</span> Czułem, że rozmowa o
obecnej sytuacji pomoże <span class=SpellE>Jill</span> dokładnie zrozumieć
opisane przeze mnie zasady. <span style='color:blue'>-Przyjrzyjmy się teraz
Jeffowi</span> --zaproponowałem <span style='color:blue'>-i zobaczmy, jak
to, co powiedziałem, ma się do twojego aktualnego związku. Na początku
Jeff bardzo cię kochał. Świata poza tobą nie widział, zabiegał o twoje
względy i dużo z tobą rozmawiał. Pozornie życie z nim było wspaniałe.
Pamiętaj jednak, że to nie pasowało do twoich wyobrażeń o sobie samej. Zgodnie
z twoim najgłębszym przekonaniem, żaden mężczyzna nie powinien okazywać ci
tyle miłości. Nie jesteś dość dobra, pamiętasz? </span><span class=SpellE>Jill</span>
przytaknęła, ale widziałem, że wciąż ma wątpliwości.<span
style='color:blue'> -Twoja jaźń wie, że musisz się pozbyć tego przekonania,
dogaduje się więc z jaźnią Jeffa, by jakoś ci to unaocznić. Pozornie Jeff
zaczyna zachowywać się dziwnie i zupełnie inaczej niż zwykle. Na dodatek
kocha inną Lorraine, wywołując w tobie takie same przeżycia jak ojciec
wiele lat wstecz. Prześladuje cię bez litości, a ty czujesz się
jego<span>  </span>bezbronną ofiarą. Czy tak w
przybliżeniu opisałabyś swoją dzisiejszą sytuację?</span> <span
style='color:#00B050'>-Chyba tak</span> --powiedziała <span class=SpellE>Jill</span>
cicho. Zmarszczyła czoło, starając się zatrzymać w głowie nowy obraz swych
doświadczeń. <span style='color:blue'>-No i znowu musisz
dokonać wyboru. Albo się uleczysz i rozwiniesz, albo będziesz miała rację</span><span
style='color:lime'> </span>-powiedziałem z uśmiechem. <span
style='color:blue'>-Dokonując takiego wyboru, jakiego zwykle dokonuje większość
ludzi, będziesz ofiarą, a Jeff katem, co z kolei da ci poczucie, że masz rację.
Nie ma wątpliwości, że jego zachowanie jest okrutne i nierozsądne.
Wiele kobiet poparłoby cię, gdybyś podjęła stanowcze działania przeciw
swemu mężowi. Czy większość twoich przyjaciółek nie doradza ci, żebyś od
niego odeszła?</span> <span style='color:#00B050'>-Tak</span> -przyznała. <span
style='color:#00B050'>-Wszyscy uważają, że powinnam się rozwieść,
jeśli Jeff się nie zmieni. W gruncie rzeczy spodziewałam się,
że i Ty tak powiesz.</span> -W jej głosie zabrzmiało
rozczarowanie. <span style='color:blue'>-Kilka lat temu tak bym prawdopodobnie
zrobił</span> -odparłem ze śmiechem <span style='color:blue'>-jednak kiedy
poznałem duchowe zasady Radykalnego Wybaczania, moje spojrzenie na takie
sytuacje całkowicie się zmieniło, jak sama widzisz.</span> Uśmiechnąłem się z
przymusem, patrząc na Johna. Odpowiedział uśmiechem, ale nic nie odrzekł. <span
style='color:blue'>-Tak więc, jak się pewnie domyślasz</span>
-ciągnąłem <span style='color:blue'>-drugi wybór polega na zrozumieniu, że
pod przykrywką zdarzeń dzieje się coś bardziej znaczącego, co może ci naprawdę
pomóc. Drugi wybór polega na zaakceptowaniu faktu,
że w zachowaniu Jeffa ukryte może być przesłanie, znaczenie czy
zamiar i że ta sytuacja jest darem dla ciebie. </span><span class=SpellE>Jill</span> pomyślała
przez chwilę, po czym powiedziała<span style='color:#00B050'>: -Zachowanie
Jeffa jest tak dziwaczne, że trudno będzie znaleźć jakieś sensowne
wyjaśnienie. Może coś się pod tym kryje, czego nie widzę. Przypuszczam, że jest
podobnie jak z Henrym, ale nie potrafię odnieść tego do Jeffa, bo na
razie nie mogę się w tym wszystkim odnaleźć i nie dostrzegam nic poza
bezpośrednimi zdarzeniami. </span><span style='color:blue'>-Nic nie szkodzi</span>
-uspokoiłem ją<span style='color:blue'>. -Wcale nie musisz tego problemu
rozwiązywać od razu. Już sama chęć zrozumienia, że dzieje się coś więcej niż
to, co widzisz, jest ogromnym krokiem naprzód. W gruncie rzeczy <i>
Twoja gotowość spojrzenia na swoje położenie
pod innym kątem to klucz do uzdrowienia.</i> W dziewięćdziesięciu procentach
zależy ono od tego, czy dopuścisz do siebie myśl, że twoja kochająca jaźń
stworzyła daną sytuację specjalnie dla Ciebie. Gdy to zrobisz, oddajesz się
Bogu we władanie, a on zajmuje się pozostałymi dziesięcioma procentami.
Jeśli potrafisz naprawdę zrozumieć, że Bóg rozwiąże twój problem, gdy
się z nim do Niego zwrócisz, jeśli poddasz się tej myśli, nie będziesz musiała
już nic więcej robić. Twoja sytuacja zmieni się na lepsze i
zostaniesz uzdrowiona zupełnie automatycznie. Zanim jednak wykonasz ten
krok, możesz zrobić coś, co od razu pozwoli ci spojrzeć inaczej na tę sprawę.
Możesz racjonalnie oddzielić rzeczywistość od fikcji, czyli uznać, że
twoje przekonanie nie ma żadnych faktycznych podstaw, że jest to po prostu
twoje wyobrażenie, oparte na kilku zdarzeniach i twojej nadinterpretacji.
Wszyscy tak postępujemy: doświadczamy czegoś, dokonujemy
interpretacji tego zdarzenia, a następnie łączymy obie części układanki
i tworzymy wizję tego, co się wydarzyło, w znacznym stopniu nieprawdziwą.
Wizja ta staje się przekonaniem, którego bronimy, jakby było prawdą. A przecież
nią Nie jest! Jeśli chodzi o ciebie, tata rzeczywiście nigdy cię
nie przytulał, nie bawił się z tobą, nie obejmował i nie sadzał na
kolanach. Nie zaspokajał twojej potrzeby czułości. Takie są fakty. Na ich
podstawie oparłaś swoje najważniejsze założenie: „<i>Tata mnie nie kocha</i>”. Czy tak?</span> <span class=SpellE>Jill</span>
przytaknęła. <span style='color:blue'>-Tymczasem to, że nie zaspokajał twoich
potrzeb</span> -mówiłem dalej -<span style='color:blue'>wcale nie znaczy,
że cię nie kochał. To twoja interpretacja, a Nie prawda. Taty seksualność
była stłumiona i bliskość go przerażała, wiemy przecież o tym. Być
może po prostu nie potrafił wyrazić swojej miłości tak, jakbyś tego
chciała. Czy pamiętasz ten wspaniały dom dla lalek, który ci zrobił którejś
zimy? Pracował nad nim długie godziny, gdy Ty już byłaś w
łóżku. Może tylko tak potrafił pokazać, że cię kocha. Nie próbuję
go usprawiedliwić, ani wykazać, że to, co powiedziałaś, czy to, co
czujesz, jest błędne. Po prostu staram się zwrócić ci uwagę na fakt,
że wszyscy popełniamy błąd, biorąc swoją interpretację faktów za
rzeczywistość…<o:p></o:p></span></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'>Umilkłem
na chwilę. <o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'>
<span>            </span><span style='color:blue'>-Następne
twoje założenie</span> -ciągnąłem <span style='color:blue'>-oparte na faktach i
na twojej interpretacji pierwszego założenia, czyli: „<i>Tata mnie nie kocha</i>”, brzmiało: „
<i>To moja wina. Coś musi być ze mną nie w porządku</i>”. To jeszcze
większe kłamstwo niż tamto przekonanie, nie uważasz? </span>
<span
class=SpellE>Jill</span> przytaknęła. <span style='color:blue'>-Nic dziwnego,
że doszłaś do takiego wniosku, ponieważ dzieci na ogół tak myślą. Skoro wydaje
się im, że świat kręci się wokół nich, zawsze sądzą, że jeśli dzieje się coś
niedobrego, jest to ich wina. Tej myśli towarzyszy wielki ból, który dziecko
tłumi, chcąc go zmniejszyć, co z kolei sprawia, że trudniej mu pozbyć
się owej myśli. W rezultacie, nawet gdy dorośniemy, nie opuszcza
nas przekonanie: „<i>To moja wina, coś
jest ze mną nie tak</i>”. Za każdym razem, gdy jakaś sytuacja przypomina nam
o tym cierpieniu lub o związanym z nim przekonaniu, emocjonalnie cofamy
się w czasie i zaczynamy zachowywać się jak małe dziecko po raz pierwszy
odczuwające ten ból. Tak właśnie się stało, gdy zobaczyłaś, że ojciec okazuje
miłość mojej córce. Miałaś wtedy dwadzieścia siedem lat, ale stałaś się
dwuletnią <span class=SpellE>Jill</span>, która czuła się niekochana
i która postępowała zgodnie z tym odczuciem. I nadal tak postępujesz, tyle
że tym razem chodzi o twego męża. Twoje związki z mężczyznami oparte są na
pozbawionej realnych podstaw interpretacji dwuletniej dziewczynki. Czy to dostrzegasz?</span>
<span style='color:#00B050'>-Teraz tak</span> -odparła. <span style='color:
#00B050'>-Podjęłam kilka niemądrych decyzji, opierając się na tych
podświadomych założeniach, prawda? </span><span style='color:blue'>-Faktycznie,
ale zrobiłaś tak, bo cierpiałaś i byłaś zbyt młoda, żeby to zrozumieć.
Chociaż stłumiłaś ból, by się od niego uwolnić, twoje przekonanie działało
cały czas w podświadomości. Wtedy twoja jaźń postanowiła stworzyć
dramatyczną sytuację, by ci je unaocznić i dać ci okazję do
pozbycia się go. Przyciągałaś do siebie ludzi, którzy sprawiali,
że musiałaś bezpośrednio stawić czoło swemu cierpieniu i ponownie przeżyć
pierwsze doświadczenie. To właśnie robi Jeff</span> -dodałem. <span
style='color:blue'>-Oczywiście nie twierdzę, że jest tego świadomy.
Prawdopodobnie jego własne zachowanie bardziej peszy jego niż ciebie. Pamiętaj,
że wszystko rozgrywa się na poziomie umysłu. Jego jaźń <i>wie o twoim bólu i zdaje sobie sprawę, że
nie uwolnisz się od niego, dopóki jeszcze raz nie przeżyjesz doświadczenia,
które leży u jego podstaw</i>.</span> <span style='color:#00B050'>-Ojej!</span>
-westchnęła głęboko <span class=SpellE>Jill</span>. Jej ciało rozluźniło się po
raz pierwszy od chwili, gdy zaczęliśmy omawiać jej sytuację. <span
style='color:#00B050'>-To z pewnością inny punkt widzenia! Ale wiesz, co?
Czuję się lżej, tak jakbyś mi zdjął ciężar z ramion.</span> <span
style='color:blue'>-To dlatego, że podniósł ci się poziom energii</span>
-odparłem. <span style='color:blue'>-Wyobraź sobie, ile życiowej siły
musiałaś zużywać na samo podtrzymywanie pamięci o zdarzeniu między tatą
i moją córką. A ile energii potrzebowałaś, by ukryć związany z nim żal i
urazę. Łzy, które wylałaś na początku naszej rozmowy, pozwoliły ci się uwolnić
od dużej części tych uczuć. Na dodatek właśnie się dowiedziałaś, że twoje
przekonanie było czystą wyobraźnią. Cóż to musi być za ulga!!! Ponadto dużo
energii pochłaniało obwinianie Jeffa i siebie samej, a także
podtrzymywanie w sobie świadomości ofiary. Sama chęć spojrzenia na swój problem
z innego punktu widzenia sprawia, że uwalniasz tę energię. Nic dziwnego,
że czujesz się lżej!</span> -powiedziałem z uśmiechem. <span
style='color:#00B050'>-A co by się stało, gdybym nie zrozumiała tego, co się
dzieje, i po prostu odeszła od Jeffa?</span> <span style='color:blue'>-Twoja jaźń
wprowadziłaby do twojego życia kogoś innego, kto pomógłby ci w uzdrowieniu --</span>odpowiedziałem
szybko. <span style='color:blue'>-Ale przecież nie zostawiłaś Jeffa, lecz
przyjechałaś tutaj. Zrozum, ta twoja podróż to nie przypadek.
W tym systemie przypadki nie istnieją. Ty, czy raczej twoja jaźń,
wymyśliłaś tę wizytę u mnie, stworzyłaś okazję do zrozumienia, na czym
polega cała sprawa z Jeffem. Sprowadziła cię tutaj twoja jaźń. A jaźń Johna
zdecydowała, że jego podróż odbędzie się właśnie teraz, byś mogła z nim
przyjechać.</span> <span style='color:#00B050'>-A co z dwiema Lorraine? </span><span
style='color:black'>-spytała <span class=SpellE>Jill</span>.</span><span
style='color:#00B050'> -Jak to się stało? To musi być zwykły zbieg
okoliczności.</span><span style='color:lime'> </span><span style='color:blue'>-W
tym systemie nie ma także zbiegów okoliczności. Musisz wiedzieć, że twoja jaźń
i jaźnie innych ludzi zmówiły się, by stworzyć tę sytuację, i dostrzegły
korzyść płynącą z faktu, że obie związane z nią osoby miały na imię Lorraine.
Nie można sobie wyobrazić bardziej doskonałej podpowiedzi. Trudno przypuszczać,
że to nie zostało jakoś uzgodnione, nie uważasz?</span> <span style='color:
#00B050'>-I co teraz?</span> -spytała <span class=SpellE>Jill</span>. <span
style='color:#00B050'>-Czuję się lepiej, to fakt. Ale co mam zrobić, gdy wrócę
do domu i zobaczę Jeffa???</span><span style='color:lime'> </span><span
style='color:blue'>-W gruncie rzeczy niewiele</span> -odparłem. <span
style='color:blue'>-Z tego punktu widzenia ważniejsze jest, jak Ty się czujesz.
Czy rozumiesz, że Nie jesteś już ofiarą? Że Jeff Nie jest twoim
prześladowcą? Czy widzisz, że ta sytuacja odpowiada twoim potrzebom
i pragnieniom? Czy czujesz, jak bardzo ten człowiek cię kocha - na
poziome umysłu, oczywiście? </span><span style='color:#00B050'>-Co chcesz
przez to powiedzieć?!</span> -spytała <span class=SpellE>Jill</span>. <span
style='color:blue'>-Jeff był gotów zrobić wszystko, co trzeba, by doprowadzić
cię do punktu, z którego będziesz mogła ponownie przyjrzeć się swojemu
przekonaniu i zobaczyć, że jest ono nieprawdziwe. Czy zdajesz sobie sprawę,
ile się zgodził wycierpieć, by ci pomóc? Przecież z natury nie jest
okrutnikiem, takie zachowanie musiało mu więc sprawiać trudność. Niewielu
mężczyzn zrobiłoby dla Ciebie to co on, ryzykując przy tym, że może
cię stracić w wyniku swego działania. Jeff, czy raczej jego jaźń, to twój
największy wspomożyciel. Kiedy to naprawdę zrozumiesz, odczujesz dla niego
wdzięczność!!! Ponadto przestaniesz wysyłać sygnały, że jesteś niegodna
miłości. Zdobędziesz umiejętność dopuszczania miłości do siebie, może po raz
pierwszy w życiu. Wybaczysz Jeffowi, ponieważ będzie dla ciebie jasne, że <i>nie stało się nic złego</i>. Wszystko było
doskonałe. Zapewniam cię </span>-ciągnąłem<span style='color:blue'> -że kiedy
tak rozmawiamy, Jeff już się zmienia i przestaje zachowywać się dziwacznie.
Jego jaźń już wie, że mu wybaczyłaś i uwolniłaś się od mylnego wyobrażenia o
Sobie. W miarę jak przekształca się Twoja energia, zmienia się też energia
Jeffa. Fizyczna odległość nie ma znaczenia.</span> Wracając do jej
pytania, powiedziałem: <b><span
style='color:blue'>-Nie będziesz więc musiała nic robić po powrocie
do domu. Wręcz przeciwnie, obiecaj mi, że nic nie zrobisz, gdy wrócisz!
Zwłaszcza nie dziel się z Jeffem swoim nowym spojrzeniem na sytuację! </span></b><span
style='color:blue'>Chcę, żebyś zobaczyła, jak wszystko się zmieni automatycznie
dlatego, że inaczej postrzegasz zdarzenia. Ty też się poczujesz odmieniona
:o)</span> -dodałem. <span style='color:blue'>-Będziesz spokojniejsza, bardziej
zrównoważona i zrelaksowana. Twoja nowa świadomość będzie dziwić Jeffa przez
chwilę. Będzie potrzebował trochę czasu, żeby na nowo odnaleźć się
w waszym związku. Mogą cię jeszcze czekać trudne chwile, ale wszystko się
ułoży </span>-zakończyłem z przekonaniem.<o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span
style='font-size:11.0pt'>Przed odlotem <span class=SpellE>Jill</span> do Anglii
omówiliśmy jeszcze kilka razy jej nowe spojrzenie na sytuację. Komuś,
kto właśnie przeżywa emocjonalne problemy, trudno jest zaakceptować
perspektywę Radykalnego Wybaczania. Osiągnięcie stanu, w którym może ono zacząć
działać, wymaga ogromnego wysiłku i wielu prób. <o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'><span>            </span>W dniu odlotu <span class=SpellE>Jill</span>
była wyraźnie zdenerwowana powrotem do sytuacji, którą zostawiła za sobą.
Idąc korytarzem do samolotu, odwróciła się i pomachała mi ręką, by
pokazać, że jest pewna siebie, ale wiedziałem, że się boi, czy znowu
nie pogrąży się w dawnych problemach. Spotkanie z Jeffem chyba się udało. <span
class=SpellE>Jill</span> poprosiła go, by nie wypytywał, co się działo, gdy
była u mnie. Chciała również mieć kilka dni na ponowne odnalezienie się
w sytuacji. Ale zmianę zauważyła od razu: Jeff był uprzejmy, miły i
delikatny - taki, jakiego znała przedtem. Po kilku dniach <span
class=SpellE>Jill</span> powiedziała Jeffowi, że już go o nic nie obwinia i nie
chce, by się zmieniał, bo zrozumiała, że tylko ona odpowiada za swoje
uczucia i że powinna rozwiązywać swoje problemy, nie winiąc go za nie. <b><i>Nie rozwinęła
tego tematu ani nie starała się tłumaczyć.</i></b> Sprawy układały się dobrze
po powrocie <span class=SpellE>Jill</span> do domu, a zachowanie Jeffa w
stosunku do córki, Lorraine, całkowicie się zmieniło. Wszystko zdawało się
wracać do normy, jednak napięcie między Jeffem i <span class=SpellE>Jill</span>
trwało. Rzadko też ze sobą rozmawiali… Dwa tygodnie później <span class=SpellE>Jill</span>
spojrzała na męża i powiedziała: <span style='color:#00B050'>-Czuję
się, jakbym straciła przyjaciela.</span> <span style='color:red'>-Ja też</span>
-odparł Jeff. Po raz pierwszy od wielu miesięcy nawiązali kontakt. Objęli się i
zaczęli płakać.<span style='color:lime'> </span><span style='color:#00B050'>-Porozmawiajmy</span>
-zaproponowała <span class=SpellE>Jill</span>. <span style='color:#00B050'>-Muszę
ci wyjaśnić, czego się dowiedziałam u Colina w Ameryce. Może wyda ci się to
dziwne, ale chcę się z tobą tym podzielić. Nie musisz się z tym zgadzać.
Po prostu mnie wysłuchaj. Dobrze?</span><span style='color:lime'> </span><span
style='color:red'>-Oczywiście</span> -odparł. <span style='color:red'>-Zdaję
sobie sprawę, że przytrafiło ci się tam coś ważnego, i chcę wiedzieć co.
Zmieniłaś się na korzyść. <i>Nie jesteś tą
samą osobą, która wsiadła z Johnem do samolotu. </i>Opowiedz mi więc, co się
stało.</span> <span class=SpellE>Jill</span> mówiła bardzo długo. Starała się
wyjaśnić, na czym polega Radykalne Wybaczanie, tak by Jeff mógł to
zrozumieć. Czuła się silna, pewna siebie i swej wiedzy, bezpieczna, z jasnym
umysłem. Jeff, człowiek o praktycznym podejściu do życia, sceptyczny wobec
wszystkiego, czego nie da się racjonalnie wyjaśnić, tym razem nie protestował i
uważnie słuchał, co żona mu proponuje do rozważenia. Stwierdził, że jest
otwarty na możliwość istnienia duchowego świata pod codzienną rzeczywistością,
i dostrzegł pewną logikę w koncepcji Radykalnego Wybaczania. Nie zaakceptował
jej bez zastrzeżeń, niemniej był gotów słuchać, zastanowić się i przyznać,
jak bardzo <span class=SpellE>Jill</span> się zmieniła. Po tej rozmowie
obydwoje byli przekonani, że ich miłość odżyła, a związek ma szansę
przetrwać. Nic sobie nie obiecywali, tylko postanowili częściej ze sobą
rozmawiać i jednocześnie obserwować rozwijanie się ich związku. A rozwijał się
całkiem dobrze. <o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'><span>            </span>Jeff nadal zabiegał o względy
Lorraine, ale już nie tak bardzo jak przedtem. <span class=SpellE>Jill</span>
odkryła natomiast, że jej to nie obchodzi. Nie wywoływało to
żadnych emocjonalnych zaburzeń ani nie przywoływało jej dawnego negatywnego
przekonania o sobie samej. W miesiąc po rozmowie o Radykalnym Wybaczaniu dawne
zachowanie Jeffa wobec córki całkowicie ustąpiło. Lorraine także przestała
dzwonić i odwiedzać ich tak często. Zajęła się własnym życiem. Wszystko powoli
wracało do normy, a związek Jeffa i <span class=SpellE>Jill</span> stał się
pewniejszy i silniejszy niż przedtem. Jeff znowu stał się łagodnym,
wrażliwym mężczyzną, jakim był z natury, <span class=SpellE>Jill</span> nie
była tak wymagająca, a jego córka Lorraine czuła się szczęśliwsza.
Jestem pewien, że <span class=SpellE>Jill</span> i Jeff by się rozeszli, gdyby
jaźń mojej siostry nie przywiodła jej do Atlanty, by stworzyć okazję do naszej
rozmowy. Zgodnie z wielkim schematem świata, to także byłoby w porządku. <span
class=SpellE>Jill</span> po prostu musiałaby znaleźć kogoś innego, z
kim stworzyłaby dramatyczną sytuację i kolejną okazję do uzdrowienia.
Ale wykorzystała ją tym razem i jej związek z Jeffem przetrwał. Dzisiaj, wiele
lat później, nadal są razem i stanowią szczęśliwe małżeństwo. Nieraz
tworzą dramatyczne sytuacje w swoim życiu, jak wszyscy, ale teraz już
potrafią dostrzec ich uzdrawiającą moc i rozwiązywać problemy szybko i z
wdziękiem…<o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'><span>            </span>Czy ta historia przemówiła do
Ciebie? Czy Twoja jest podobna? Czy chciałbyś uwolnić się od jej ciężaru
i uzdrowić swoje życie?<o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><span style='font-size:11.0pt'>Więcej
informacji zawarto w książce<i> </i></span><span
class=SpellE><i><span style='font-size:11.0pt;
font-family:"Bookman Old Style",serif;
color:#0000FF'>Colin</span></i><i><span
style='font-size:11.0pt;font-family:"Bookman Old Style",serif;'>'a</span></i></span><i><span
style='font-size:11.0pt;font-family:"Bookman Old Style",serif;'> <span class=SpellE><span style='color:#0000FF'>Tipping</span>'a</span></span></i><span
style='font-size:11.0pt;font-family:"Bookman Old Style",serif;'> - <b><i><span style='color:#0000FF'>"Radykalne
wybaczanie"</span></i></b>.</span><span style='font-size:11.0pt'><o:p></o:p></span></p>


</td>
  </tr>



</div></td>
</tr>
<tr>
<td> </td>
</tr>
<tr>
<td style="background-color: rgb(102, 255, 153);"><div style="text-align: left;">
(czas czytania: około 04min21sek)

<br><br>
Czym jest <b>Karma</b>?

<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;W kontekście Radykalnego Wybaczania, Karma odnosi się do idei, że każde działanie ma swoje konsekwencje, a te konsekwencje mogą być odczuwane w przyszłości. W Radykalnym Wybaczaniu, Karma jest postrzegana jako naturalna konsekwencja naszych działań, a nie jako kara lub nagroda.

<br>&nbsp;&nbsp;&nbsp;&nbsp;Według Radykalnego Wybaczania, Karma nie jest czymś, co można uniknąć lub zmienić, ale raczej czymś, co można zrozumieć i zaakceptować. Poprzez zrozumienie i zaakceptowanie Karmy, możemy uwolnić się od poczucia winy, żalu i gniewu, które mogą być związane z naszymi działaniami.

<br>&nbsp;&nbsp;&nbsp;&nbsp;W Radykalnym Wybaczaniu, Karma jest postrzegana jako naturalna konsekwencja naszych działań, a nie jako kara lub nagroda. Poprzez zrozumienie i zaakceptowanie Karmy, możemy uwolnić się od poczucia winy, żalu i gniewu, które mogą być związane z naszymi działaniami.

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;~~~~~~~~~~~~~~~~~~~~~~

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;W kontekście <b>Radykalnego Wybaczania</b> koncepcja <b>karmy</b> odnosi się do duchowej idei, że nasze działania, myśli i intencje mają konsekwencje, które wpływają na nasze życie i doświadczenia. Karma jest rozumiana jako prawo przyczyny i skutku, gdzie każde działanie przynosi odpowiedni rezultat, często w kontekście duchowego rozwoju lub nauki.

<br>&nbsp;&nbsp;&nbsp;&nbsp;W <b>Radykalnym Wybaczaniu</b>, karma jest postrzegana jako mechanizm, który pomaga nam uczyć się i rozwijać poprzez doświadczenia, even te trudne czy bolesne. Zamiast postrzegać negatywne sytuacje jako przypadkowe lub niesprawiedliwe, Radykalne Wybaczanie sugeruje, że są one częścią większego planu duchowego, który ma na celu naszą ewolucję.

<br>&nbsp;&nbsp;&nbsp;&nbsp;Kluczowym elementem jest zaakceptowanie, że każda sytuacja, even ta trudna, jest dla nas lekcją. Wybaczanie w tym kontekście oznacza uwolnienie się od negatywnych emocji i zrozumienie, że wszystko, co nas spotyka, ma głębszy sens i służy naszemu wzrostowi. Karma w tym ujęciu nie jest karą, ale narzędziem do duchowego rozwoju.

<br>&nbsp;&nbsp;&nbsp;&nbsp;W <b>Radykalnym Wybaczaniu</b> karma jest postrzegana jako duchowy proces, który prowadzi nas do zrozumienia, akceptacji i transformacji poprzez wybaczanie sobie i innym, a nie jako „nagroda lub kara za uczynki z przeszłości”, czy „konto win i zasług”.

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Oto przykład, który pomoże zobrazować, jak karma działa w duchu Radykalnego Wybaczania:

<br>&nbsp;&nbsp;&nbsp;&nbsp;Załóżmy, że <b>kobieta w dzieciństwie była porzucana emocjonalnie przez ojca</b> - był zimny, nieobecny, krytyczny. W dorosłym życiu ciągle trafia na partnerów, którzy są podobni - odrzucają ją, nie okazują uczuć albo kontrolują.

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Z perspektywy klasycznej psychologii - to powielanie wzorców z dzieciństwa. Ale <b>Radykalne Wybaczanie mówi coś głębszego:</b>

<br>&nbsp;&nbsp;&nbsp;&nbsp;• <b>Jej dusza „umówiła się” z ojcem</b>, że on odegra trudną rolę, by ona mogła doświadczyć bólu odrzucenia - nie po to, by cierpieć, ale po to, by odkryć w sobie głęboki wzorzec braku miłości do samej siebie i go uzdrowić.
<br>&nbsp;&nbsp;&nbsp;&nbsp;• <b>Partnerzy, którzy potem pojawiają się w jej życiu</b>, są jak lustra - pokazują jej ten nierozpoznany ból, który nadal w niej jest. To nie przypadek ani pech - to karmiczne „zaproszenia” do uzdrowienia.
<br>&nbsp;&nbsp;&nbsp;&nbsp;• <b>Jeśli ona zacznie to widzieć jako duchowy plan</b>, a nie jako niesprawiedliwość czy „karę losu”, może uzdrowić swoje rany, zmienić wzorzec i przestać przyciągać takie relacje.

<br><br>    
&nbsp;&nbsp;&nbsp;&nbsp;
Wtedy właśnie następuje transformacja: <b>kiedy rozpoznajemy karmiczne lekcje i przebaczamy</b>, nie tylko innym, ale i sobie, przestajemy potrzebować trudnych doświadczeń - bo lekcja została odrobiona.

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Tak więc karta 'karma' oznacza, że doprowadziłeś do powstania przyczyny przyjawiającej się w twoim życiu pod postacią energii, która domaga się zrównoważenia. Mogłeś nawet przyjść na ten świat z jakąś formą energii potrzebującą zrównoważenia.

<br><br>
</div></td>
</tr>
<tr>
<td></td>
</tr>



    <tr>
   <td></td>
  </tr>

            </tbody>
        </table>

    </div>
</body>
</html>




  </div>
`;


const tabelaDiv = document.getElementById('tabela');
tabelaDiv.innerHTML = tabelaHTML;

// ------------------------------------------------------------
// TYLKO ZIELONE TŁO DLA PUSTYCH KOMÓREK – BEZ ZMIANY WYRÓWNANIA
// ------------------------------------------------------------

// 1. Dodanie stylu tylko dla pustych komórek (nie dotyka text-align)
const style = document.createElement('style');
style.textContent = `
    /* Zielone tło dla pustych komórek – nie zmieniamy wyrównania */
    #tabela td:empty,
    #tabela td:has(> br):empty,
    #tabela td:has(> &nbsp;),
    #tabela td:has(>  ) {
        background-color: #00ff00 !important;
    }
    /* Klasa pomocnicza */
    .forced-green {
        background-color: #00ff00 !important;
    }
`;
document.head.appendChild(style);

// 2. Ręczne sprawdzenie każdej komórki – jeśli pusta, dodajemy zielone tło
const tableCells = tabelaDiv.querySelectorAll('td');
tableCells.forEach(cell => {
    const content = cell.innerHTML.replace(/&nbsp;/g, '').trim();
    if (content === '') {
        cell.style.setProperty('background-color', '#00ff00', 'important');
        cell.classList.add('forced-green');
    }
});

// 3. Nie usuwamy atrybutów align, nie zmieniamy text-align, nie wymuszamy centrowania
