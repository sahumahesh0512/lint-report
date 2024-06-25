const fs = require('fs');

async function run() {
  try {
    const htmlFilePath = './junit.html'; // Path to the HTML file in the root directory
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    const jobSummary = `
      ### Job Summary
      ${htmlContent}
    `;

    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, jobSummary);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

run();
