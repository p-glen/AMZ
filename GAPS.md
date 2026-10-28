# Gapsy (otwarte rzeczy)

Lista uwag w kolejności sekcji na stronie. Ostatnia aktualizacja: 2026-10-28, na podstawie przeglądu strony z Pawłem.

## Ogólne
- **Tryby:** Pride i Party wyłączone (przyciski zdjęte, `THEMES` ma tylko `light` i `dark`; style zostają w CSS). Przywrócenie: odkomentować dwa przyciski przy przełączniku trybów i dopisać `'pride','party'` do `THEMES`.
- **Stopka:** nawigacja, rok i układ gotowe. Placeholdery do podmiany: adres e-mail, linki do LinkedIn, Instagrama i Facebooka oraz polityka prywatności (RODO), wszystkie z `href="#"`.
- Mobile sprawdzony tylko wyrywkowo; pełny przegląd do zrobienia.
- Tempo animacji przewijania z nawigacji i snap do sprawdzenia w zwykłej przeglądarce.
- Przełącznik trybów: zweryfikować hover w zwykłej przeglądarce.
- Przejście z wireframe do wyższego poziomu szczegółowości (styl, typografia, PRODUCT.md i DESIGN.md).

## 01 Hero
- Nagłówek łamany po „Cześć," i przycisk „Pogadajmy" pod podtytułem (zrobione).
- **Siatka zdjęć:** po najechaniu zdjęcie się powiększa. Do przemyślenia, czy zdjęcia nie powinny się zmieniać (np. przełączać). Siatka jest dość pusta (cztery komórki bez zdjęcia), więc dodać więcej zdjęć.
- **Prawa do zdjęć:** zdjęcia nóg w dżinsach i w trawiastym kostiumie nie są potwierdzone (nie wiadomo, czy są Anki / czyje są prawa).

## 02 Claim
- „Od ponad 20 lat działam po obu stronach kurtyny…" jest dobry, ale za długi. Na razie zostaje, do skrócenia.

## 03 Scroll track (taśma)
- **Zdjęcia w taśmie (8 miejsc uzupełnionych):** Mata (koncert na Stadionie Narodowym, foto Michał Murawski, materiały prasowe), PGE Narodowy (Mata na PGE Narodowym, od Anki, autor do uzupełnienia), World Wide Warsaw (Rejjie Snow na WWW 2018, foto Paweł Zanio, materiały własne artysty), Żarcie Na Kółkach (zdjęcie od Anki, autor do uzupełnienia, także na kafelku), JIMEK/Bemowo (lotnisko o zmierzchu ze sceną, nie koncert JIMEK) oraz zdjęcia od Anki z konferencji: Going. (panel w Strefie TIXY), Quilla (grafika promocyjna Great September 2024), Great September (panel, foto M. Grabowicz) i MusicTech Poland (meet-up). Atrybucje w podpisach i w `assets/events/CREDITS.md` (do potwierdzenia zgody na użycie zdjęć od Murawskiego i Zanio). Rapstacja (zdjęcie z drona) i Warsaw Padel Club (kampania OYSHO) uzupełnione; autorzy do ustalenia. Do ustalenia: autorzy zdjęć z konferencji (Strefa TIXY, MusicTech), zgody osób widocznych na zdjęciach (panelistów i uczestników, repo jest publiczne) oraz zgoda organizatora na grafikę z logotypami partnerów.
- **Duże zdjęcia:** JIMEK (Bemowo) i trasa Maty 2025 jako duże kadry.
- **Podpisy:** Paweł zgłosi uwagi do tych, które nie są najlepsze.
- Taśma: „Kolejny projekt, do uzgodnienia".

## 04 Trzy wejścia
- **Układ kart (zrobione):** trzy osobne, przezroczyste karty (tytuł, opis, zdjęcie na dole), środki co 1/3 szerokości (napisy w tych samych miejscach co dawniej), boczne z niższym z-index pod środkową, nakładają się. Karta przycina zdjęcie (skala i położenie jak w poprzedniej kompozycji). Za kartami osobna warstwa tła z zielonkawym kołem. Fioletowe przerywane ramki kart widać przy włączonym „Podział sekcji". Gotowe pod karuzelę (do ustalenia: sposób przewijania, kierunek, czy karty zmieniają kolejność).
- **Tryb wireframe (zrobione):** zdjęcia zamienione na płaskie sylwetki z opisem, do dyskusji o układzie. Zdjęcia zostają w kodzie; przywrócenie: usunąć klasę `wf` z `.w-stage`.
- **Zdjęcia do wymiany** (docelowo z sesji). Obecne to pełne postacie z wygenerowanymi nogami i butami („event" i „biznes"), tło zdjęte modelem, krawędzie wygładzone. Rozdzielczość ok. 690×1024 px przed kadrowaniem, na retinie mogą być miękkie.
- **Identyfikator** na zdjęciu „Marki i sponsorzy" ma czytelne nazwisko innej osoby: zamazać albo podmienić.
- **Ampersand** (`&` za nagłówkami) ma zły z-index: nachodzi na podpisy, np. „Od pomysłu i budżetu po produkcję", i uniemożliwia zaznaczanie tekstu. Do naprawy.
- **Górna część sekcji** (nagłówki i opisy) nie jest do końca trafiona; do przemyślenia.
- **Organizacja zdjęć:** Paweł ma pomysł na inne ustawienie zdjęć, do omówienia.
- Hover / klik: obecnie nic się nie dzieje po najechaniu na postacie ani na kolumny (przyciski ze strzałkami usunięte).

## 05 Festiwale i trasy
- Sekcja wyszła minimalistycznie i pusto, „miało być fajne". Do przemyślenia wizualnie, co dodać.
- Brakuje liczb (zasięg) dla trasy Maty, World Wide Warsaw i Żarcie Na Kółkach oraz lat dla JIMEK, PGE Narodowy i tych projektów (w kafelkach `[X]` i `[rok]`).
- Kafelki Flying Lotus, Bicep + Ross From Friends, Robert Glasper Trio i Autechre mają wygenerowane, przykładowe liczby biletów (oznaczone „przykład"). Do podmiany na prawdziwe dane albo usunięcia przed publikacją.
- Brakuje zdjęć na hover dla JIMEK (Bemowo), Going. i kafelków zbiorczych. Zdjęcia z Wikimedia Commons wymagają atrybucji (assets/events/CREDITS.md, pokazać na stronie); plakaty WWW mają niepotwierdzone prawa.
- Kafelki są niższe (proporcja 0,8, suwak w Design system). Hover w stylu hero landonorris.com: ruch kursora zostawia ślad nieregularnych, płynnych plam (metaballs z filtrem SVG `#goo`), przez które widać zdjęcia; plamy rosną, żyją ok. sekundy i gasną. Kafelek pod kursorem wypełnia się w całości sprężyną z lekkim odbiciem, rozlewając się najpierw w stronę, w którą kursor jest bliżej; po wyjściu zwija się z powrotem. Bez efektu szkła/3D (filtr to sam próg metaballs). Do sprawdzenia na prawdziwej myszy: płynność na słabszych komputerach i w Safari. Ten sam mechanizm można podpiąć pod siatkę zdjęć w hero. Wideo na hover: mechanizm gotowy (kafelek z `data-yt` odpala YouTube bez dźwięku na ok. 30 s po wypełnieniu kafelka, z `data-mp4` własny plik). Podpięte tylko Going. (spot z YouTube). Reszta linków w dokumencie to Instagram (nie da się ich osadzić jako tło), więc potrzebne pliki MP4 od Anki i przycięcie do ok. 30 s.

## 06 Partnerzy i kampanie
- Napis „Collabs" w tle jest w porządku, ale **tło (neonowy napis) wyszło słabo**, do poprawy.
- Logotypy marek wymagają zgód. W pasie CCC, CEDC, Dr Witt i Oshee to tymczasowe napisy do podmiany na oficjalne pliki; glo nie ma poziomego wariantu.

## 07 W czym pomagam
- Lista jest dobra (wygaszanie zależne od odległości od aktywnego wiersza).
- **Układ wrócił do pierwotnego:** lista na całą szerokość, podświetlanie przy przewijaniu (wiersz na środku ekranu aktywny, reszta wygaszana przezroczystością zależnie od odległości), bez klikania i bez miniatury. Wersje z rozwijanym wierszem i z widokiem master-detail (z opisami, typowymi sytuacjami i linkami do dowodów) zostały w historii gita (commity 7a5735a i następny) na wypadek powrotu do pomysłu.
- Brak metryki dla klubów (`[metryka]`).

## 08 Jak możemy działać?
- Ikony dodane (Lucide, ISC): wiadomość, puzzle, trasa, uścisk dłoni, ludzie. Do akceptacji, czy pasują do treści kart; zamiana to jedna nazwa symbolu na kartę.

## 09 Pogadajmy
- Dobre. Po lewej portret Anki wycięty z tła (czarno-biały, Higgsfield: usunięcie tła, wygładzone krawędzie), stoi na tle sekcji i jest dociśnięty do dołu. Autor zdjęcia do ustalenia.
- Kalendarz Calendesk osadzony; sprawdzić na opublikowanej stronie, czy domena jest dozwolona w ustawieniach Calendesk.

## Treść i prawo
- Dane kontaktowe, social media (brak w dokumencie).
- LEBOLBAT: na razie nie pojawia się. Do decyzji: historia nazwy i hak na końcu strony.
- Baza wiedzy: sekcja ukryta (atrybut `hidden` na `#wiedza`). Gdy będą artykuły, karty dostaną adresy, zdjęcia i daty.
- „Dowody doświadczenia" (mapa haseł, rozsypanka) pominięte.
- Repo jest publiczne: zdjęcia bez potwierdzonych praw i identyfikator z cudzym nazwiskiem są widoczne publicznie (rozważone: zostaje tak na razie).
- Brakuje trzeciej sekcji w stylu podwójnego nagłówka dla Artystów i zespołów (obok „Festiwale / i trasy" i „Partnerzy / & kampanie").
- Aktualizacja skilla Impeccable (4.5.2).

## Nowe teksty z dokumentu (przejrzane 2026-10-28, jeszcze niewprowadzone)
- Hero: Anka woli jedno swoje zdjęcie zamiast siatki; alternatywny nagłówek „Cześć, jestem Anka! Organizujesz imprezy? To trudne. Pomogę!” (sama pisze, że nie jest to „WOW”).
- Claim: wariant „Ponad 20 lat działam przy wydarzeniach muzycznych i kulturalnych: od pomysłu po zaksięgowanie przelewu. Wszystko pomiędzy znam na wylot.”
- Taśma: hasło wstawiane między kafelki „Za każdym wydarzeniem stoi jakaś historia - moja historia trwa już ponad 20 lat.” oraz „Oto wybrane projekty z moim udziałem.” Nowe podpisy pod projektami (Going., World Wide Warsaw, Flying Lotus, #MATA2040, MATA na PGE Narodowym, JIMEK HPHH 2021 i 2023, Żarcie na kółkach, Rapstacja) różnią się od obecnych. Do przemyślenia: jak pokazać projekty w ramach Going.
- Trzy większe kafle w taśmie z rozwinięciem po kliknięciu: „Dorobek promotorsko-organizatorski” (historia, lista ok. 50 artystów World Wide Warsaw, linki do mediów 2016-2018), „Sponsoring” (lista marek) i „Eksperckość” (wystąpienia i panele, 5 wybranych + archiwum). After Hours #3 wymaga potwierdzenia udziału.
- Linki do wideo (Instagram i YouTube) dla Rapstacji, Parady Wolności, Maty/PGE, JIMEK HPHH, OKI, SBM Festival, Young Leosia + CCC, Bass Astral x IGO, spotu Going. i Warsaw Padel Club.
- Dyski ze zdjęciami (hero, plakaty, wystąpienia) są w dokumencie jako linki do Google Drive.
- Reszta („Z czym do mnie przyjść”, „W czym pomagam”, „Dla kogo”, „Jak możemy działać”, „Dowody”, LEBOLBAT, baza wiedzy) pokrywa się z tym, co już jest lub czeka na decyzję.
- **Przełącznik „Teksty” w górnej belce:** pokazuje obecne teksty albo propozycje z dokumentu (hero, claim, przycisk w hero, podpisy projektów w taśmie, dodatkowe hasło o historii na końcu taśmy). Teksty w wersji z dokumentu to atrybuty `data-b` w index.html. Nie obejmuje jeszcze: „Oto wybrane projekty z moim udziałem”, trzech większych kafli z rozwinięciem ani podpisów kafelków festiwali.
