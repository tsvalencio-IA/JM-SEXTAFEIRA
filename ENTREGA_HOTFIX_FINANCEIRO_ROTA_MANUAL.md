# HOTFIX — Financeiro/Rota com cálculo assistido e valor manual protegido

Base oficial usada: `JM-SEXTAFEIRA-main (2).zip`.

## Escopo alterado

Alterado somente o fluxo gestor/rota/financeiro em `js/app.js` e adicionado teste específico em `tests/financeiro-rota-manual.test.js`.

## O que foi corrigido

- A rota inteligente continua calculando rota, KM, tempo, pedágio e sugestão.
- O formulário de apoio continua podendo receber KM/pedágio quando estiver vazio.
- O valor oficial do chamado não é mais alterado automaticamente pela rota.
- O valor oficial só muda quando o gestor clicar no botão de aplicar sugestão, via fluxo explícito.

## O que foi preservado

- Motorista.
- GPS.
- Provas.
- Assinatura.
- Checklist.
- Firebase Rules.
- RTDB Rules.
- Superadmin.
- Relatórios.
- Financeiro existente.

## Testes locais executados

- `npm run check:js`
- `node tests/run-all.js`
- teste novo: `financeiro-rota-manual.test.js`

## Limite da validação

Não foi testado em produção real com Firebase, Cloudinary, GPS físico, Tracker RAFA ou APK Android.
