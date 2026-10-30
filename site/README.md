# Strona v2 (folder `site/`)

Statyczna strona bez budowania (HTML + CSS + JS). Publikowana pod `/AMZ/v2/` z gałęzi `v2`.
Wersja 1 zostaje pod tagiem `v1-wireframe` oraz w `main`.

## Struktura

```
site/
  index.html        strona (jedna, sekcje dochodzą po kolei)
  css/tokens.css    jedyne miejsce na kolory, typografię, odstępy, promień, ruch
  css/base.css      reset, typografia, układ (.container, .section, .stack, .eyebrow)
  js/main.js        motyw jasny/ciemny; reszta dochodzi z sekcjami
  assets/           zdjęcia, ikony, wideo
```

## Zasady

- Style sekcji używają wyłącznie zmiennych z `tokens.css` (żadnych „magicznych" kolorów i px w sekcjach).
- Jeden promień (`--radius`) i jeden akcent (`--accent`) na całą stronę.
- Motyw: `data-theme="light|dark"` na `<html>`; bez wyboru działa ustawienie systemu.
- Dostępność od początku: link „Przejdź do treści", widoczny fokus, `prefers-reduced-motion`.
- Zdjęcia: do repo trafiają tylko z potwierdzonym autorem i zgodą (lista w `GAPS.md`).
- `noindex` w `index.html` zdjąć dopiero przy publikacji wersji 2 na głównym adresie.

## Podgląd lokalny

```bash
python3 -m http.server 4174 --directory site
```
