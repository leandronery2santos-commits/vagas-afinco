# AFINCO Imóveis — Site de vagas (V1)

## O que já está pronto

- Página responsiva para celular e computador
- Identidade visual preta/amarela/branca inspirada no logo enviado
- Seção de vídeo
- Informações da vaga
- Chamada para primeiro emprego / mudança de carreira
- Formulário de candidatura
- Consentimento para uso dos dados no processo seletivo
- Integração preparada para Google Sheets via Google Apps Script

## Arquivos

- `index.html` — página principal
- `style.css` — visual
- `Code.gs` — código do Google Apps Script
- `logo.png` — logo da AFINCO
- `depoimento.mp4` — coloque aqui um MP4 compatível com navegador

## Conectar ao Google Sheets

1. Crie uma planilha no Google Sheets.
2. Abra `Extensões > Apps Script`.
3. Cole o conteúdo de `Code.gs`.
4. Salve.
5. Clique em `Implantar > Nova implantação`.
6. Tipo: `Aplicativo da Web`.
7. Executar como: sua conta.
8. Quem tem acesso: `Qualquer pessoa`.
9. Faça a implantação e copie a URL terminada em `/exec`.
10. Abra `index.html` e substitua:

   `COLE_AQUI_A_URL_DO_GOOGLE_APPS_SCRIPT`

   pela URL copiada.

11. Publique novamente o site.

## Vídeo

O arquivo MOV original enviado é grande e usa HEVC. Para publicação web, use MP4 com H.264/AAC.
Nome recomendado:

`depoimento.mp4`

Depois coloque o arquivo na mesma pasta do `index.html`.

Alternativa: hospede o vídeo no YouTube e troque a área `<video>` por um iframe.

## Publicar grátis

### Opção Vercel
1. Crie uma conta na Vercel.
2. Suba este projeto para um repositório no GitHub.
3. Importe o repositório na Vercel.
4. Publique.

### Opção Netlify
Também é possível publicar a pasta diretamente pelo fluxo de deploy da Netlify.

## Próximas melhorias sugeridas

- Criar uma página de obrigado após o cadastro
- Colocar botão flutuante de WhatsApp
- Adicionar perguntas de triagem
- Criar painel/planilha com filtros
- Adicionar domínio próprio `.com.br`
- Criar QR Code para divulgar a vaga

