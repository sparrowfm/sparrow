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

### Using the Template

1. **Copy the template**: `cp blog-post-template.html public/posts/your-post-name.html`
2. **Fill in the placeholders**:
   - `[POST TITLE]` - Your blog post title
   - `[POST DESCRIPTION]` - SEO meta description (150-160 chars)
   - `[YYYY-MM-DD]` - Publication date
   - `[Month Day, Year]` - Human-readable date
   - `[Category 1]`, etc. - Post categories/tags
   - Replace content sections with your post
3. **Add to index**: Update `public/index.html` with a new post card
4. **Test locally**: Run `python3 -m http.server 8000` in `public/` directory
5. **Commit and push**: Footer and analytics are already included!

### Template Features

The template (`blog-post-template.html`) includes:
- ✅ Correct site header and footer (matching index.html)
- ✅ GoatCounter analytics pre-configured
- ✅ Proper meta tags for SEO
- ✅ Consistent styling with existing posts
- ✅ "Back to all posts" link
- ✅ Standard post structure (TL;DR, sections, etc.)

See `posts/` directory for examples of completed posts.

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
