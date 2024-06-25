const fs = require('fs');
const { htmlToMarkdown } = require('html-to-markdown');

async function run() {
  try {
    const htmlFilePath = './junit.html'; // Path to the HTML file in the root directory
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    // Convert HTML to markdown
    const markdownContent = htmlToMarkdown(htmlContent);

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
