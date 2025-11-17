# Guida al Deployment

Questo documento descrive come deployare il **Manifesto Contro il Decreto Tajani** su varie piattaforme.

## Opzioni di Deployment

### 1. GitHub Pages (Gratuito)

GitHub Pages è il metodo più semplice e gratuito per hostare il sito.

#### Setup

1. **Crea un repository pubblico** su GitHub con il nome `manifesto-tajani`

2. **Configura il file `vite.config.ts`**:

```typescript
export default defineConfig({
  base: '/manifesto-tajani/', // Se il repo non è l'user/org site
  // oppure
  base: '/', // Se il repo è <username>.github.io
  plugins: [react()],
})
```

3. **Aggiungi GitHub Actions Workflow** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. **Abilita GitHub Pages**:
   - Vai a Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Salva

5. **Deploy**:
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 2. Vercel (Consigliato)

Vercel offre hosting gratuito con performance eccellente.

#### Setup

1. **Registrati su [vercel.com](https://vercel.com)**

2. **Connetti il tuo repository GitHub**

3. **Vercel rileverà automaticamente Vite** e configurerà il build

4. **Deploy automatico** su ogni push a main

#### Configurazione Avanzata

Crea `vercel.json`:

```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "vite",
  "outputDirectory": "dist"
}
```

### 3. Netlify

Netlify è un'altra opzione eccellente con CI/CD integrata.

#### Setup

1. **Registrati su [netlify.com](https://netlify.com)**

2. **Connetti il tuo repository GitHub**

3. **Configura le impostazioni di build**:
   - Build command: `pnpm build`
   - Publish directory: `dist`

4. **Deploy automatico** su ogni push

#### Configurazione Avanzata

Crea `netlify.toml`:

```toml
[build]
  command = "pnpm build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 4. Self-Hosted (VPS/Server Proprio)

Se desideri controllare completamente l'hosting.

#### Prerequisiti

- Server Linux (Ubuntu 20.04+)
- Node.js 18+
- Nginx o Apache
- SSL Certificate (Let's Encrypt gratuito)

#### Setup

1. **Clona il repository**:

```bash
cd /var/www
git clone https://github.com/yourusername/manifesto-tajani.git
cd manifesto-tajani
```

2. **Installa le dipendenze**:

```bash
pnpm install
pnpm build
```

3. **Configura Nginx**:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name manifesto-tajani.com www.manifesto-tajani.com;

    # Redirect HTTP a HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name manifesto-tajani.com www.manifesto-tajani.com;

    # SSL Certificates (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/manifesto-tajani.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/manifesto-tajani.com/privkey.pem;

    # Ottimizzazioni SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Root directory
    root /var/www/manifesto-tajani/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/json application/javascript;
    gzip_min_length 1000;

    # Cache headers
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

4. **Installa SSL con Certbot**:

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d manifesto-tajani.com -d www.manifesto-tajani.com
```

5. **Abilita e avvia Nginx**:

```bash
sudo systemctl enable nginx
sudo systemctl start nginx
```

6. **Setup Auto-Renewal**:

```bash
sudo certbot renew --dry-run
```

## Monitoraggio e Manutenzione

### Analytics

Aggiungi Google Analytics (opzionale):

```html
<!-- In client/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Uptime Monitoring

Usa servizi gratuiti come:
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

### Performance

Monitora le performance con:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://www.webpagetest.org)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

## Aggiornamenti

### Processo di Update

1. **Fai i cambiamenti localmente**:

```bash
git checkout -b feature/new-content
# Fai i tuoi cambiamenti
git add .
git commit -m "Add new content"
git push origin feature/new-content
```

2. **Apri una Pull Request** e fai review

3. **Merge su main**:

```bash
git checkout main
git merge feature/new-content
git push origin main
```

4. **Deploy automatico** (GitHub Pages, Vercel, Netlify)

## Troubleshooting

### Build Errors

```bash
# Pulisci cache
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Performance Issues

```bash
# Analizza il bundle
pnpm build --analyze
```

### SSL Errors

```bash
# Verifica il certificato
sudo certbot certificates

# Rinnova manualmente
sudo certbot renew --force-renewal
```

## Backup e Disaster Recovery

### Backup Automatico

```bash
#!/bin/bash
# backup.sh
BACKUP_DIR="/backups/manifesto-tajani"
REPO_DIR="/var/www/manifesto-tajani"

mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S).tar.gz $REPO_DIR

# Mantieni solo gli ultimi 7 backup
find $BACKUP_DIR -name "backup-*.tar.gz" -mtime +7 -delete
```

### Ripristino

```bash
# Estrai il backup
tar -xzf /backups/manifesto-tajani/backup-YYYYMMDD-HHMMSS.tar.gz -C /var/www/

# Riavvia i servizi
sudo systemctl restart nginx
```

## Supporto

Per problemi di deployment:

1. Controlla i log del servizio
2. Apri un GitHub Issue
3. Contatta il team di supporto della piattaforma

---

**Buon deployment! La resistenza digitale continua.**
