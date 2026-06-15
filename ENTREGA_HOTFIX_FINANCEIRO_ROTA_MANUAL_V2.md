# HOTFIX FINANCEIRO / ROTA MANUAL V2

Base oficial usada: `JM-SEXTAFEIRA-main (2).zip`.

## Escopo
Correção cirúrgica do fluxo gestor / rota / financeiro.

## Alterado
- `js/app.js`
- `jm.html` apenas versionamento/cache busting
- `index.html`, `motorista.html` apenas versionamento/cache busting para não manter PWA presa na V32.7.7
- `service-worker.js`
- `version.json`
- `tests/run-all.js`
- `tests/financeiro-rota-manual-hotfix.test.js`
- `MANIFESTO_SHA256_HOTFIX_FINANCEIRO_ROTA_MANUAL_V2.json`

## Regra implementada
A rota calcula KM, pedágio e sugestão, mas não aplica valor oficial automaticamente.
O valor previsto só muda por clique explícito do gestor em botão de aplicação.

## Não alterado
Firebase Rules, RTDB Rules, motorista, provas, assinatura, GPS e superadmin não receberam alteração funcional.
