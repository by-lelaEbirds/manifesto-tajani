# Linee Guida per Contribuire

Grazie per il tuo interesse nel contribuire al **Manifesto Contro il Decreto Tajani**. Questo è un progetto di resistenza civile e accogliamo contributi da persone di tutto il mondo.

## Come Contribuire

### 1. Segnalare Bug

Se trovi un bug, apri un **GitHub Issue** con:

- Titolo chiaro e descrittivo
- Descrizione dettagliata del problema
- Passi per riprodurre il bug
- Comportamento atteso vs. comportamento effettivo
- Screenshot o video se applicabile

### 2. Suggerire Miglioramenti

Per suggerire miglioramenti:

- Apri un **GitHub Issue** con il tag `enhancement`
- Descrivi chiaramente il miglioramento proposto
- Spiega il valore aggiunto
- Fornisci esempi o mockup se possibile

### 3. Contribuire Codice

#### Setup Iniziale

```bash
# Fork il repository
# Clona il tuo fork
git clone https://github.com/tuousername/manifesto-tajani.git
cd manifesto-tajani

# Aggiungi il repository originale come remote
git remote add upstream https://github.com/originalauthor/manifesto-tajani.git

# Installa le dipendenze
pnpm install
```

#### Workflow di Contribuzione

```bash
# Crea un branch per la tua feature
git checkout -b feature/descrizione-feature

# Fai i tuoi cambiamenti
# Testa localmente con: pnpm dev

# Commit i tuoi cambiamenti
git commit -am 'Descrizione chiara del cambiamento'

# Push al tuo fork
git push origin feature/descrizione-feature

# Apri una Pull Request sul repository originale
```

#### Linee Guida per il Codice

- **Linguaggio**: Usa TypeScript, non JavaScript
- **Stile**: Segui lo stile di codice esistente
- **Componenti**: Crea componenti riutilizzabili in `client/src/components/`
- **Stili**: Usa Tailwind CSS, non CSS personalizzato quando possibile
- **Accessibilità**: Assicurati che i componenti siano accessibili (WCAG 2.1)
- **Performance**: Ottimizza per performance e caricamento veloce
- **Documentazione**: Commenta il codice complesso

### 4. Traduzioni

Aiutaci a tradurre il manifesto in altre lingue:

1. Crea un file `MANIFESTO_[LINGUA].md` nella root del progetto
2. Traduci il contenuto mantenendo la struttura e il tono
3. Aggiungi il link nel README.md
4. Apri una Pull Request

Lingue prioritarie:
- Spagnolo (per le comunità ispaniche)
- Portoghese (per il Brasile e il Portogallo)
- Francese (per le comunità francofone)
- Tedesco (per le comunità germanofone)
- Polacco (per le comunità dell'Europa dell'Est)

### 5. Ricerca Legale e Contenuti

Se hai competenze legali o di ricerca:

1. Contribuisci con analisi approfondite
2. Crea documenti di ricerca in formato Markdown
3. Aggiungi referenze e citazioni
4. Apri una Pull Request con il tuo contributo

## Standard di Qualità

### Commit Messages

Usa il formato Conventional Commits:

```
type(scope): description

[optional body]

[optional footer]
```

Tipi:
- `feat`: Nuova feature
- `fix`: Correzione di bug
- `docs`: Documentazione
- `style`: Formattazione, mancanza di punto e virgola, etc.
- `refactor`: Refactoring del codice
- `perf`: Miglioramenti di performance
- `test`: Aggiunta di test
- `chore`: Aggiornamenti di dipendenze, etc.

Esempio:
```
feat(manifesto): add constitutional violations section
fix(ui): correct color contrast on dark backgrounds
docs: update installation instructions
```

### Pull Requests

Prima di aprire una PR:

1. Assicurati che il codice compili senza errori
2. Testa le tue modifiche localmente
3. Aggiorna la documentazione se necessario
4. Aggiungi screenshot o video per cambiamenti UI
5. Fai riferimento a issue correlati

Template PR:

```markdown
## Descrizione
Descrizione breve dei cambiamenti

## Tipo di Cambiamento
- [ ] Bug fix
- [ ] Nuova feature
- [ ] Breaking change
- [ ] Documentazione

## Come è stato testato?
Descrivi come hai testato i tuoi cambiamenti

## Checklist
- [ ] Il mio codice segue lo stile del progetto
- [ ] Ho aggiornato la documentazione
- [ ] Ho testato le mie modifiche
- [ ] Non ho introdotto nuovi warning

## Screenshot (se applicabile)
```

## Comunità e Condotta

### Codice di Condotta

Questo progetto aderisce a principi di:

- **Rispetto**: Tratta tutti con dignità e rispetto
- **Inclusività**: Accogliamo persone da tutti i background
- **Trasparenza**: Comunica apertamente e onestamente
- **Collaborazione**: Lavoriamo insieme verso obiettivi comuni

### Comportamenti Inaccettabili

Non tolleriamo:
- Discriminazione di qualsiasi tipo
- Molestie o linguaggio offensivo
- Attacchi personali
- Spam o auto-promozione

## Domande?

Se hai domande:

1. Controlla il README.md
2. Apri un GitHub Discussion
3. Contattaci via email

## Riconoscimenti

Tutti i contributori saranno riconosciuti nel file CONTRIBUTORS.md.

---

**Grazie per il tuo contributo alla resistenza digitale!**
