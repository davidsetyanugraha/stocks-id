# stocks-id

Very simple API + frontend that shows the visualization of some Indonesian stocks. It gets data by scrapping [yahoo finance](https://finance.yahoo.com/quote/) using [puppeteer](https://github.com/puppeteer/puppeteer/).

# Usage

## Development

Execute script on command line to run API + Frontend in your local. Then, launch browser and visit http://localhost:3000

```
npm run dev
```

### **API**

API is built using typescript with puppetter on Nextjs platform. For details, check folder `pages/api/stocks`.

API endpoints:

- `/api/stocks` : GET all supported stocks with all details. Note that this operation is very expensive. Don't use it unless you really require it.
- `/api/stocks/{stock-code}`: GET details of individual stock. For instance: if your stock-code is `TLKM.JK`, then your endpoint would be `/api/stocks/TLKM.JK`.

### **Frontend**

Frontend is built using nextjs + typescript. For details, check folder `pages/stocks`, file `index.tsx` and `about.tsx`.

Endpoints:

- `/` : home page.
- `/about` : about the application.
- `/stocks`: list of supported stocks

## Build

Execute script on command line to build production version of the app.

```
npm run build && npm start
```
