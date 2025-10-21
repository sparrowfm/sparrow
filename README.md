# Sparrow

A simple, elegant blog for documenting technical learnings and building in public.

## Architecture

- **Hosting**: AWS S3 + CloudFront
- **Site**: Static HTML/CSS/JS
- **Deployment**: Automated with CDK
- **Domain**: TBD (will be configured later)

## Structure

```
sparrow/
├── public/              # Static site files
│   ├── index.html      # Blog homepage
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript
│   ├── posts/          # Individual blog posts (HTML)
│   └── images/         # Images and assets
├── scripts/            # Build and deployment scripts
├── cdk/                # AWS CDK infrastructure
└── README.md
```

## Local Development

```bash
# Serve locally
cd public
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Deployment

```bash
# Deploy to AWS
npm run deploy
```

## Writing Posts

Posts are written in Markdown, then converted to HTML with the site template applied.

See `posts/` directory for examples.

## Task Tracking

Tasks for this project are tracked in the centralized task tracker:
https://github.com/sparrowfm/tasks

**View Sparrow tasks**: https://github.com/sparrowfm/tasks/labels/sparrow

### Creating Tasks

When working with Claude Code, you can say **"add this to my to do list"** and Claude will:
1. Extract context from the conversation
2. Ask for project/priority/type
3. Create the task automatically
4. Return the GitHub issue URL

See the [task creation guide](file:///Users/neelketkar/tasks/CLAUDE-TASK-CREATION.md) for details.
