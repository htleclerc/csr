# Cabinet Safiou Radji — site vitrine (Next.js)

Site corporate du Cabinet Safiou Radji : conseil stratégique, finance, investissement et développement durable. Application Next.js (App Router, TypeScript, React 19), bilingue FR / EN, sans base de données ni dépendance UI externe.

## Démarrer en local

```bash
npm install
npm run dev        # http://localhost:4100
```

Production :

```bash
npm run build
npm start          # http://localhost:4100
```

## Structure

- `app/layout.tsx` — document HTML, métadonnées, polices Google (Marcellus / Hanken Grotesk), fournisseur de langue
- `app/page.tsx` — assemblage des sections de la page unique
- `app/globals.css` — charte « ivoire + or + brun » et responsive
- `components/` — une section par composant (`Header`, `Hero`, `Cabinet`, `Expertises`, `Sectors`, `Founder`, `WhyUs`, `Resources`, `Contact`, `Footer`) et `LanguageProvider` (bascule FR / EN)
- `lib/content.ts` — tous les textes et listes, en français et en anglais
- `public/assets/logo-csr.png` — logo officiel

## Modifier le contenu

Tous les textes sont dans `lib/content.ts` : l'objet `I18N` pour les libellés et paragraphes, l'objet `DATA` pour les listes (six domaines d'expertise issus de la plaquette « CSR – Domaines d'expertises », valeurs, secteurs, compétences, raisons, clients, portails).

## À compléter

- Photo du fondateur (`components/Founder.tsx`)
- Coordonnées : siège, téléphone, e-mail (`components/Contact.tsx`)
- Envoi réel du formulaire de contact (actuellement un état « envoyé » côté client)
