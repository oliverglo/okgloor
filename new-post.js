const fs = require('fs-extra');
const path = require('path');

function createWritingEntry(title) {
  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;

  // Create the filename
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const filename = `${dateStr}-${slug}.md`;

  // Create the file path
  const draftsDir = path.join(__dirname, 'pages', 'drafts');
  const filePath = path.join(draftsDir, filename);

  // Ensure drafts directory exists
  fs.ensureDirSync(draftsDir);

  // Create the content template
  const contentTemplate = `# ${title}

> A brief summary of your post that appears on the homepage and in RSS feeds.

{{date}}

Your article content goes here. Markdown formatting is supported.

## Example Tweet Embed

To embed a tweet, use the following syntax:

\`\`\`markdown
::tweet(tweetUrl)
\`\`\`

The URL must be a complete Twitter/X URL that includes both the username and status ID:

\`\`\`markdown
::tweet(https://twitter.com/username/status/1234567890123456789)
::tweet(https://x.com/username/status/1234567890123456789)
\`\`\`

Note: Just using a tweet ID without the username won't work as X.com requires the username in the URL.
`;

  // Write the file
  fs.writeFileSync(filePath, contentTemplate);
  console.log(`Created new writing entry: ${filePath}`);
}

// Get title from command line arguments (combine all arguments after the script name)
const title = process.argv.slice(2).join(' ');

if (!title) {
  console.error('Please provide a title for the writing entry');
  console.error('Usage: node new-post.js Your Title Here');
  process.exit(1);
}

createWritingEntry(title);
