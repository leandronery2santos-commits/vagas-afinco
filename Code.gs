/**
 * AFINCO Imóveis - Google Apps Script
 *
 * 1. Crie uma planilha no Google Sheets.
 * 2. Crie uma aba chamada "Candidaturas".
 * 3. Na primeira linha, coloque os títulos (o script também cria se necessário).
 * 4. Extensões > Apps Script.
 * 5. Apague o conteúdo e cole este código.
 * 6. Salve.
 * 7. Implantar > Nova implantação > Aplicativo da Web.
 * 8. Executar como: Eu.
 * 9. Quem tem acesso: Qualquer pessoa.
 * 10. Copie a URL /exec e cole no index.html.
 */

const SHEET_NAME = "Candidaturas";

function doGet() {
  return ContentService
    .createTextOutput("AFINCO - endpoint ativo.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const sheet = getSheet_();
    const p = e.parameter || {};

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Data",
        "Nome",
        "WhatsApp",
        "E-mail",
        "Cidade",
        "Idade",
        "Trabalhando atualmente",
        "Experiência",
        "Detalhes da experiência",
        "Disponibilidade",
        "Motivação",
        "Consentimento"
      ]);
    }

    sheet.appendRow([
      new Date(),
      clean_(p.nome),
      clean_(p.whatsapp),
      clean_(p.email),
      clean_(p.cidade),
      clean_(p.idade),
      clean_(p.trabalhando),
      clean_(p.experiencia),
      clean_(p.detalhes_experiencia),
      clean_(p.disponibilidade),
      clean_(p.motivo),
      p.consentimento ? "Sim" : "Não"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  return sheet;
}

function clean_(value) {
  const text = String(value || "").trim();
  // Evita que entradas iniciadas por =, +, - ou @ sejam interpretadas
  // pelo Google Sheets como fórmulas.
  if (/^[=+\-@]/.test(text)) return "'" + text;
  return text;
}
