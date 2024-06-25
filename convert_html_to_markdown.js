const fs = require('fs');
const { htmlToText } = require('html-to-text');

async function run() {
  try {
    const htmlFilePath = './junit.html'; // Path to the HTML file in the root directory
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    // Convert HTML to markdown
    const markdownContent = htmlToText(htmlContent, {
      wordwrap: 130
    });

    const jobSummary = `
      ### Job Summary
      ${markdownContent}
    `;
    
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, jobSummary);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

run();
