# Gapsy (otwarte rzeczy)

Lista uwag w kolejności sekcji na stronie. Ostatnia aktualizacja: 2026-10-28, na podstawie przeglądu strony z Pawłem.

## Ogólne
- **Tryby:** Pride i Party wyłączone (przyciski zdjęte, `THEMES` ma tylko `light` i `dark`; style zostają w CSS). Przywrócenie: odkomentować dwa przyciski przy przełączniku trybów i dopisać `'pride','party'` do `THEMES`.
- **Stopka:** do uzupełnienia danymi (e-mail, social media, nawigacja, rok, polityka prywatności / RODO).
- Mobile sprawdzony tylko wyrywkowo; pełny przegląd do zrobienia.
- Tempo animacji przewijania z nawigacji i snap do sprawdzenia w zwykłej przeglądarce.
- Przełącznik trybów: zweryfikować hover w zwykłej przeglądarce.
- Przejście z wireframe do wyższego poziomu szczegółowości (styl, typografia, PRODUCT.md i DESIGN.md).

## 01 Hero
- **Pisownia:** poprawić tekst „Cześć, jestem Anka." i podtytuł „Pomogę Ci ogarnąć imprezę." (do ustalenia, co dokładnie zmienić).
- **Brak CTA:** hero nie ma przycisku. Dodać przycisk (np. do kontaktu).
- **Siatka zdjęć:** po najechaniu zdjęcie się powiększa. Do przemyślenia, czy zdjęcia nie powinny się zmieniać (np. przełączać). Siatka jest dość pusta (cztery komórki bez zdjęcia), więc dodać więcej zdjęć.
- **Prawa do zdjęć:** zdjęcia nóg w dżinsach i w trawiastym kostiumie nie są potwierdzone (nie wiadomo, czy są Anki / czyje są prawa).

## 02 Claim
- „Od ponad 20 lat działam po obu stronach kurtyny…" jest dobry, ale za długi. Na razie zostaje, do skrócenia.

## 03 Scroll track (taśma)
- **Brakuje zdjęć.** Potrzebne zdjęcia do podpisów; szukać takich, które da się legalnie podpisać (Warsaw Padel Club, konferencja z Quillą, Going. z konferencji, World Wide Warsaw, Żarcie Na Kółkach).
- **Duże zdjęcia:** JIMEK (Bemowo) i trasa Maty 2025 jako duże kadry.
- **Podpisy:** Paweł zgłosi uwagi do tych, które nie są najlepsze.
- Taśma: „Kolejny projekt, do uzgodnienia".

## 04 Trzy wejścia
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
- Brak wideo na hover; do przemyślenia „sztywność" kafelków.

## 06 Partnerzy i kampanie
- Napis „Collabs" w tle jest w porządku, ale **tło (neonowy napis) wyszło słabo**, do poprawy.
- Logotypy marek wymagają zgód. W pasie CCC, CEDC, Dr Witt i Oshee to tymczasowe napisy do podmiany na oficjalne pliki; glo nie ma poziomego wariantu.

## 07 W czym pomagam
- Lista jest dobra (wygaszanie zależne od odległości od aktywnego wiersza).
- **Rozwijany wiersz (zrobione):** klik otwiera panel z opisem, trzema typowymi sytuacjami, przyciskiem „Pogadajmy o tym” (do kalendarza) i linkiem do dowodu (festiwale, partnerzy albo „kim jestem"). Miniatura w wierszu usunięta; w panelu jest placeholder zdjęcia.
- **Teksty w panelach** (opis i trzy sytuacje przy każdym obszarze) to robocze propozycje napisane na podstawie podpisów z dokumentu; do akceptacji i poprawy przez Ankę. Zdjęcia w panelach do dodania.
- Brak metryki dla klubów (`[metryka]`).

## 08 Jak możemy działać?
- Dobre. Dodać **ikonografię** (biblioteka ikon Lucide jest już w projekcie, `assets/icons/`), np. ikona nad każdą kartą.

## 09 Pogadajmy
- Dobre. Zdjęcie Anki po lewej jest placeholderem (pion 4:5, wysokość dopasowuje się do kalendarza, ok. 700 px).
- Kalendarz Calendesk osadzony; sprawdzić na opublikowanej stronie, czy domena jest dozwolona w ustawieniach Calendesk.

## Treść i prawo
- Dane kontaktowe, social media (brak w dokumencie).
- LEBOLBAT: na razie nie pojawia się. Do decyzji: historia nazwy i hak na końcu strony.
- Baza wiedzy: sekcja ukryta (atrybut `hidden` na `#wiedza`). Gdy będą artykuły, karty dostaną adresy, zdjęcia i daty.
- „Dowody doświadczenia" (mapa haseł, rozsypanka) pominięte.
- Repo jest publiczne: zdjęcia bez potwierdzonych praw i identyfikator z cudzym nazwiskiem są widoczne publicznie (rozważone: zostaje tak na razie).
- Brakuje trzeciej sekcji w stylu podwójnego nagłówka dla Artystów i zespołów (obok „Festiwale / i trasy" i „Partnerzy / & kampanie").
- Aktualizacja skilla Impeccable (4.5.2).
