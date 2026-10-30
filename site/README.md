# Strona v2 (folder `site/`)

Statyczna strona bez budowania (HTML + CSS + JS). Publikowana pod `/AMZ/v2/` z gałęzi `v2`.
Wersja 1 zostaje pod tagiem `v1-wireframe` oraz w `main`.

## Struktura

```
site/
  index.html          jedna strona, sekcje po kolei
  css/tokens.css      jedyne miejsce na kolory, typografię, odstępy, promień, ruch
  css/base.css        reset, typografia, układ (.container, .section, .stack, .eyebrow, .btn)
  css/sections.css    style sekcji (hero, projekty, początki, wystąpienia, usługi, kontakt, stopka)
  js/main.js          postęp sekcji przypiętych (--p), pojawianie się, liczniki, podgląd zdjęć, Calendesk
  assets/img/         zdjęcia (zmniejszone kopie z Resources/ i z wireframe/assets)
```

## Sekcje (kolejność na stronie)

1. **Hero** (przypięty, ok. 330 vh): zdjęcie wyostrza się przy przewijaniu, znak znika, wchodzi nagłówek.
2. **Wprowadzenie + liczby** (50 000+ wydarzeń, 20+ lat), portret czarno-biały.
3. **Wybrane projekty** (9 pozycji, układy a–e na przemian), potem hasło „Za każdym wydarzeniem…".
4. **Początki** (przypięte warstwy zdjęć: okno rośnie, plakat Flying Lotus), lista artystów WWW i linki prasowe.
5. **Wystąpienia, panele** (lista z podglądem zdjęcia przy najechaniu).
6. **W czym pomagam / Jak możemy działać / marki sponsorskie.**
7. **Pogadajmy**: portret wycięty + kalendarz Calendesk.
8. **Stopka** na pełny ekran.

Postęp przypiętej sekcji (0..1) trafia do zmiennej CSS `--p`; wszystkie efekty hero i „Początków" to wzory CSS z `--p`, bez osobnych animacji w JS.

## Zasady

- Style sekcji używają wyłącznie zmiennych z `tokens.css` (żadnych „magicznych" kolorów i px w sekcjach).
- Jeden promień (`--radius`) i jeden akcent (`--accent`) na całą stronę.
- Motyw: `data-theme="light|dark"` na `<html>`; domyślnie jasny, wybór zapamiętany w localStorage (amz2-theme), przełącznik obok „Pogadajmy”.
- Dostępność od początku: link „Przejdź do treści", widoczny fokus, `prefers-reduced-motion`.
- Zdjęcia: do repo trafiają tylko z potwierdzonym autorem i zgodą (lista w `GAPS.md`).
- `noindex` w `index.html` zdjąć dopiero przy publikacji wersji 2 na głównym adresie.

## Podgląd lokalny

```bash
python3 -m http.server 4174 --directory site
```
