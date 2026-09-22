# Fuentes de NexoraWeb

Dos kits. Solo uno activo a la vez.

## Kit `pro` (propietario)

- **Gliker** (wordmark, display): `public/fonts/pro/Gliker-Regular.woff2`, `Gliker-Bold.woff2`

Uso por defecto en dev y build.

## Kit `open` (libre, OFL)

- **Inter** (body, ui): `public/fonts/open/Inter-{Regular,Medium,SemiBold,Bold}.otf`
- **Fredoka** (wordmark): `public/fonts/open/Fredoka-Variable.ttf`
- **JetBrains Mono** (code): `public/fonts/open/JetBrainsMono-{Regular,Medium,SemiBold,Bold}.ttf`

## Activar kit abierto

```bash
VITE_FONT_SET=open npm run build
```

El script `scripts/postbuild-fonts.mjs` elimina `dist/fonts/pro/` cuando `VITE_FONT_SET=open`.

## Estructura

```
public/fonts/
├── pro/
│   ├── Gliker-Regular.woff2
│   └── Gliker-Bold.woff2
└── open/
    ├── Inter-Regular.otf
    ├── Inter-Medium.otf
    ├── Inter-SemiBold.otf
    ├── Inter-Bold.otf
    ├── Fredoka-Variable.ttf
    ├── JetBrainsMono-Regular.ttf
    ├── JetBrainsMono-Medium.ttf
    ├── JetBrainsMono-SemiBold.ttf
    └── JetBrainsMono-Bold.ttf
```

## Tokens CSS

- `--font-body` → Inter (kit abierto) / NexaText (kit pro)
- `--font-display` → Gliker (kit pro) / Fredoka (kit abierto)
- `--font-family-mono` → JetBrainsMono

Ver `src/styles/tokens.css` para los tokens tipográficos.
