const fs = require('fs');
const path = require('path');

const app = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');

function fail(message) {
  console.error('❌ ' + message);
  process.exit(1);
}

if (/calculateCurrentRoutePricing\(\{\s*syncTowForm:\s*true,\s*autoFill:\s*true\s*\}\)/.test(app)) {
  fail('Rota inteligente ainda chama calculateCurrentRoutePricing com autoFill:true.');
}

const calcStart = app.indexOf('function calculateCurrentRoutePricing(options)');
if (calcStart < 0) fail('Função calculateCurrentRoutePricing não encontrada.');
const applyStart = app.indexOf('async function applyPricingToCall', calcStart);
if (applyStart < 0) fail('Função applyPricingToCall não encontrada após calculateCurrentRoutePricing.');
const calcBody = app.slice(calcStart, applyStart);

if (/setOfficialPriceField\s*\(/.test(calcBody)) {
  fail('calculateCurrentRoutePricing ainda altera o valor oficial diretamente.');
}

const applyStart2 = app.indexOf('function applySuggestedPriceToForm');
if (applyStart2 < 0) fail('Botão/função de aplicar sugestão não encontrado.');
const applyBody = app.slice(app.indexOf('async function applyPricingToCall'), applyStart2 + 300);
if (!/setOfficialPriceField\s*\(suggestion\.suggestedServiceValue,\s*"suggested"\)/.test(applyBody)) {
  fail('Aplicação explícita da sugestão pelo gestor não preservada.');
}

if (!/syncRoutePricingToTowForm\s*\(result\)/.test(calcBody)) {
  fail('Sincronização assistida de KM/pedágio com formulário foi removida.');
}

console.log('✅ Financeiro/rota: cálculo assistido preservado e valor oficial protegido.');
