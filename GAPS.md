# Gapsy (otwarte rzeczy)

## Sekcja 04: Trzy wejścia
- **Hover:** zamiast unoszenia postaci ma być efekt zoom i zmiana warstwy (z-index): najechana postać (Organizatorzy i kluby albo Marki i sponsorzy) wychodzi na przód. Odłożone na później. Unoszenie usunięte, bo dolne krawędzie zdjęć są przycięte.
- **Zdjęcia:** dolne krawędzie są przycięte (event: talia, artystka: dół kurtki, biznes: talia). Dziś ukrywa je dolna krawędź sekcji. Jeśli będą potrzebne całe sylwetki, trzeba je dogenerować (np. outpainting).
- **Rozdzielczość:** źródła mają 896×1200 px, więc na ekranach retina mogą być lekko miękkie.

## Treść
- Dane kontaktowe, social media i stopka (brak w dokumencie).
- Adres docelowy formularza i polityka prywatności (RODO).
- Logotypy marek (wymagają zgód). W pasie z logo CCC, CEDC, Dr Witt i Oshee to tymczasowe napisy do podmiany na oficjalne pliki; glo nie ma poziomego wariantu.
- Taśma: „Kolejny projekt, do uzgodnienia". W „W czym pomagam" brak metryki dla klubów (`[metryka]`).
- LEBOLBAT: na razie nie pojawia się. Do decyzji: historia nazwy i hak na końcu strony.
- Baza wiedzy: sekcja ukryta (atrybut `hidden` na `#wiedza` w index.html; usuń go, żeby ją przywrócić). Tylko zapowiedź. Gdy będą artykuły, karty dostaną adresy, zdjęcia i daty (z `og:image` i `og:title`).

- Kafelki „Festiwale i trasy”: brakuje liczb (zasięg) dla trasy Maty, World Wide Warsaw i Żarcie Na Kółkach oraz lat dla JIMEK, PGE Narodowy i tych projektów (w kafelkach `[X]` i `[rok]`).

- Kafelki Flying Lotus, Bicep + Ross From Friends, Robert Glasper Trio i Autechre mają wygenerowane, przykładowe liczby biletów (oznaczone „przykład”). Do podmiany na prawdziwe dane albo usunięcia przed publikacją; daty i miejsca pochodzą z plakatów WWW.

- Zdjęcia na hover kafelków „Festiwale i trasy”: brakuje zdjęć dla JIMEK (Bemowo), Going. i kafelków zbiorczych (50 000+, 20+ lat); w pozostałych użyto zdjęć z Wikimedia Commons (atrybucja w assets/events/CREDITS.md, trzeba ją pokazać na stronie) oraz plakatów WWW (prawa do potwierdzenia).

## Nagłówki
- Podwójny nagłówek (pogrubiony + szeryfowy, `.h2s`) jest tylko dla sekcji powiązanych z trzema wejściami: „Festiwale / i trasy" (Organizatorzy i kluby), „Partnerzy / & kampanie" (Marki i sponsorzy). Brakuje trzeciej sekcji dla Artystów i zespołów (do zaprojektowania, razem z treścią i nagłówkiem w tym stylu).
- Pozostałe sekcje („W czym pomagam", „Jak możemy działać?", „Baza wiedzy", „Pogadajmy") mają zwykły nagłówek `.h2p` (token `--fs-h2b`).

## Interakcje
- „W czym pomagam": hover z dodatkowymi informacjami oraz klik (rozwinięcie) odłożone.
- „Dowody doświadczenia" (mapa haseł, rozsypanka) pominięte.
- Kafelki festiwali: brak wideo na hover; do przemyślenia „sztywność" kafelków.
- Przełącznik trybów: zweryfikować hover w zwykłej przeglądarce (w podglądzie nie był dostarczany wiarygodnie).

## Techniczne i dalsze etapy
- Mobile sprawdzony wyrywkowo; pełny przegląd i motywy Pride oraz Party.
- Tempo animacji przewijania z nawigacji i zachowanie snapu na prawdziwej przeglądarce.
- Przejście z wireframe do wyższego poziomu szczegółowości (styl, typografia, PRODUCT.md i DESIGN.md).
- Aktualizacja skilla Impeccable (4.5.2).
