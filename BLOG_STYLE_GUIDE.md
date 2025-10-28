# Blog Writing Style Guide
**Building in Public - Cross-Industry Business Insights**

## Core Philosophy

Every blog post should be valuable to business leaders across industries, not just media/tech companies. While we can go deep on specific domains (media, audio processing, etc.), the principles, frameworks, and takeaways must apply broadly.

## The Golden Rule

**Ask yourself:** "Could a healthcare CFO, legal ops manager, or e-commerce director find actionable value in this post?"

If the answer is "only if they're in media," revise to broaden applicability.

---

## Content Principles

### 1. General Business Applicability
- Lead with universal business problems, not industry-specific scenarios
- Frame technical topics through business impact lens
- Show how principles apply across domains

**Example:**
- ❌ "How we optimized podcast audio processing"
- ✅ "When AI Makes Sense vs When You Need Deterministic Code: A Business Decision Framework"

### 2. Cross-Industry Examples
Include examples from multiple domains in every substantive post:
- **Healthcare:** Clinical trial data auditing, patient record validation, regulatory compliance
- **Finance:** Reconciliation, tax calculations, fraud detection, capital gains
- **Legal:** Document review, contract analysis, compliance checking
- **Marketing:** Customer sentiment, attribution modeling, campaign analytics
- **Operations:** Inventory management, supply chain optimization, quality control
- **Media/Audio:** Our direct experience (use as ONE example among many)

### 3. Precision vs Directional Thinking
Help readers understand the critical tradeoff:
- **When precision matters:** Regulatory, compliance, financial, safety-critical
- **When directional is fine:** Strategic insights, trend analysis, preliminary screening
- **Hybrid approaches:** AI for judgment, code for calculation

### 4. Framework-First Structure
Always provide decision frameworks, not just descriptions:
- Cost/benefit analysis templates
- Decision trees for choosing approaches
- ROI calculation methods
- Red flags to watch for
- Implementation roadmaps

### 5. Actionable Takeaways
Every post should enable readers to:
- Make better decisions in their domain
- Understand when principles apply to their context
- Know what questions to ask their teams
- Have frameworks to evaluate options

---

## Post Structure Template

### Title
- Clear value proposition or framework focus
- Avoid jargon unless industry-standard
- Make it scannable and shareable

**Good examples:**
- "When AI Makes Sense vs When You Need Deterministic Code"
- "The Hidden Costs of [Common Business Decision]"
- "[Concept] Explained: A Framework for [Business Function]"

**Avoid:**
- Over-technical titles that assume domain knowledge
- Media-only framing without broader applicability signals

### Subtitle/Hook
One line that captures the key insight or surprising finding

**Examples:**
- "Understanding when AI's judgment beats deterministic precision—and when it costs 1000x more than it should"
- "Sometimes the obvious solution is in a completely different file than expected"

### Opening (First 2-3 paragraphs)
1. **Universal Business Question:** Start with a problem any business leader might face
2. **Surprising Insight:** The counter-intuitive finding or key lesson
3. **Roadmap:** Brief preview of what the post will cover

**Template:**
```
"[Common business question everyone asks]"

As [AI/tech/business capability] expands, this question comes up in every department:
[Show breadth across functions]. But here's what I've learned [building X]:
[Key counter-intuitive insight].

The key is understanding [framework/tradeoff/principle].
```

### Body Sections

#### Section 1: Framework/Principles
Explain the fundamental concept with universal applicability
- Clear definitions
- Key distinctions
- Decision criteria

#### Section 2: Cross-Industry Examples
Provide detailed examples across domains:

**Example Structure:**
```markdown
### Example 1: Clinical Research (Precision Required)
**Scenario:** [Specific use case]
**Wrong approach:** [What doesn't work and why]
**Right approach:** [What works with code example]
**Why this matters:** [Business/regulatory impact]

### Example 2: Financial Services (Precision Required)
[Same structure]

### Example 3: E-Commerce Operations (Hybrid Approach)
[Same structure]

### Example 4: Media/Content (Our Direct Experience)
[Same structure - note this is ONE of several examples]
```

#### Section 3: Cost/Tradeoff Analysis
Show real numbers when possible:
- Implementation costs
- Operating costs
- Time/performance tradeoffs
- Risk implications
- ROI calculations

#### Section 4: Industry-Specific Guidance
Brief sections for major industries:
- What to watch for in your domain
- Industry-specific red flags
- Regulatory considerations
- Common pitfalls

#### Section 5: Decision Framework
Provide actionable framework:
- When to choose approach A vs B
- Questions to ask your team
- Evaluation criteria
- Implementation roadmap

### Closing
- Summarize key framework
- Emphasize universal applicability
- Invite feedback/questions
- Link to related posts if applicable

---

## Example Diversity Guidelines

### Required Distribution
For any substantive technical/business post:
- **Minimum 3 industries** represented in main examples
- **At least 1 regulatory/compliance example** (healthcare, finance, legal)
- **At least 1 creative/judgment example** (marketing, content, design)
- **Media/audio as supporting example**, not the only one

### Specific Examples Library

#### Precision-Required Scenarios
- Clinical trial data validation
- Financial reconciliation
- Tax calculations
- Legal document chain of custody
- Safety-critical systems validation
- Regulatory compliance checks

#### Directional-Acceptable Scenarios
- Customer sentiment analysis
- Market trend identification
- Content categorization
- Preliminary screening/triage
- Strategic insight generation
- Attribution modeling

#### Hybrid Scenarios
- E-commerce returns processing (AI judges legitimacy, code calculates refunds)
- Document review (AI finds relevant sections, code validates format)
- Fraud detection (AI scores risk, code enforces rules)
- Content moderation (AI flags potential issues, code enforces policies)

---

## Quality Checklist

Before publishing, verify:

### Cross-Industry Applicability
- [ ] Post title/subtitle appeals beyond single industry
- [ ] Opening frames universal business problem
- [ ] Examples span at least 3 different industries
- [ ] Media/audio is ONE example, not the focus
- [ ] Framework applies to any business function
- [ ] Regulatory/compliance example included (if relevant)

### Business Value
- [ ] Clear ROI or cost implications shown
- [ ] Decision framework provided
- [ ] Actionable next steps included
- [ ] Real numbers/data when possible
- [ ] Risk tradeoffs explained

### Content Quality
- [ ] Surprising insight or counter-intuitive finding
- [ ] Code examples are illustrative and clean
- [ ] No unexplained jargon
- [ ] Scannable structure (headers, bullets, code blocks)
- [ ] Links to related posts/resources

### Technical Accuracy
- [ ] Code examples are correct and tested
- [ ] Claims are backed by experience or data
- [ ] Limitations and caveats mentioned
- [ ] No overpromising on capabilities

### Metadata & SEO
- [ ] Categories span industries (not just "Media")
- [ ] Tags include business functions
- [ ] Description emphasizes broad applicability
- [ ] Open Graph metadata optimized

---

## Common Pitfalls to Avoid

### ❌ Too Media-Specific
**Problem:** Post only makes sense if you're building podcast/audio tools

**Fix:** Lead with universal business concept, use audio as ONE illustrative example

**Before:**
> "How we optimized our podcast cold open timing"

**After:**
> "Debugging Distributed Systems: When the Obvious Fix is in a Different Service"
> (Happens to use podcast audio as the example system)

### ❌ Missing the "So What"
**Problem:** Technical explanation without business implications

**Fix:** Always connect to cost, risk, efficiency, or regulatory impact

**Add:**
- How much this costs/saves
- What risks it mitigates
- Why executives should care
- When this matters vs doesn't

### ❌ No Decision Framework
**Problem:** Interesting story but no actionable takeaway

**Fix:** Provide criteria for readers to evaluate their own situation

**Include:**
- When to choose X vs Y
- Red flags to watch for
- Questions to ask your team
- Implementation prioritization

### ❌ Single Industry Lens
**Problem:** Only healthcare examples, or only finance examples

**Fix:** Deliberately include 3+ diverse industry examples

**Template:**
- Healthcare (regulatory precision)
- Finance (exact calculations)
- Marketing (directional insights)
- Your domain (deep example)

---

## Voice and Tone

### Conversational but Credible
- Write like you're explaining to a smart colleague
- Use "we" and "I" to share direct experience
- Avoid academic formality
- But maintain technical accuracy

### Humble Learning Stance
- Share mistakes and lessons learned
- Acknowledge when something surprised you
- Show the messy reality of building
- "Here's what I learned" not "Here's what you should do"

### Respect Reader Intelligence
- Don't over-explain basic business concepts
- Assume readers are smart but may lack domain context
- Provide depth without condescension
- Code examples should teach, not intimidate

---

## Post Categories & Tags

### Categories (Primary)
Choose based on **business function**, not just tech:
- AI Strategy
- Cost Optimization
- Data Governance
- System Design
- Distributed Systems
- Debugging
- Architecture
- Microservices
- Regulatory Compliance

### Tags (Supporting)
Include cross-industry tags:
- Specific industries: Healthcare, Finance, Legal, Marketing
- Business concepts: ROI, Risk Management, Compliance
- Technical concepts: Probabilistic AI, Deterministic Code
- Frameworks: Hybrid Systems, Decision Frameworks

**Example good tag set:**
```
Categories: AI Strategy, Data Governance, Cost Optimization
Tags: Healthcare, Finance, Legal, Regulatory Compliance,
      Precision vs Direction, Hybrid Systems
```

**Example bad tag set (too narrow):**
```
Categories: Audio Processing, Podcast Production
Tags: FFmpeg, Sound Design, Music Cues
```

---

## Real Post Examples

### ✅ Great: "When AI Makes Sense vs When You Need Deterministic Code"
**Why it works:**
- Universal business decision framework
- Examples from clinical trials, finance, e-commerce, media
- Clear cost analysis with real numbers
- Decision framework for choosing approaches
- Regulatory compliance considerations
- Actionable for any industry

**Key elements:**
- Title focuses on business decision, not technology
- Subtitle emphasizes cost/risk (universal concerns)
- Opens with question every department asks
- 4 detailed examples across different industries
- Framework section applies to any domain
- ROI calculations included

### ✅ Great: "Debugging Distributed Systems: The Silent Cold Open Bug"
**Why it works:**
- Debugging distributed systems is universal (not just audio)
- Lessons apply to any microservices architecture
- Emphasizes observable systems value (applies broadly)
- Technical depth with business context
- Could apply to e-commerce, fintech, healthcare systems

**Key elements:**
- Title about distributed systems, not podcasts
- Debugging lessons transfer across industries
- Observable systems benefits (universal need)
- Shows messy reality of production systems

---

## Media/Audio Examples: Do's and Don'ts

Our direct experience is in media/audio processing, which provides great concrete examples. But these must be **illustrative, not exclusive**.

### ✅ Do: Use Audio as ONE Example
```markdown
## Example 4: Media & Content (My Audio Processing Example)

**Task:** Adding sound effects to podcast episodes

**AI for creative decisions (Probabilistic):**
[Example]

**Code for precise execution (Deterministic):**
[Example]

**Why split it:**
- AI is excellent at creative interpretation
- Code ensures exact timing calculations
- AI error in creative choice = artistic preference
- Code error in timing = broken audio
```

### ❌ Don't: Make Audio the Only Context
```markdown
## When to Use AI in Podcast Production

If you're building podcast automation tools, you'll need to decide...
[Only podcast examples throughout]
```

### ✅ Do: Extract Universal Principle
```markdown
## Hybrid AI + Code Systems: When to Split the Work

Many business processes benefit from combining AI judgment with
deterministic execution:

- **Returns processing:** AI evaluates legitimacy, code processes refund
- **Document review:** AI finds relevant clauses, code validates format
- **Media production:** AI makes creative choices, code calculates timing
- **Fraud detection:** AI scores risk, code enforces rules
```

---

## Writing Process

### 1. Draft Phase
- Write freely about your experience
- Focus on specific example (media/audio often)
- Capture technical details

### 2. Broadening Phase
Ask:
- What's the universal principle here?
- What industries face similar challenges?
- How would finance/healthcare/legal solve this?
- What's the business impact beyond my domain?

### 3. Framework Phase
Extract:
- Decision criteria
- Cost/benefit tradeoffs
- When principle applies vs doesn't
- Red flags and pitfalls

### 4. Examples Phase
Add:
- 2-3 cross-industry examples
- Regulatory/compliance angle if relevant
- Different scales (startup vs enterprise)
- Different risk profiles

### 5. Polish Phase
Verify:
- Title/subtitle appeal broadly
- Opening frames universal problem
- Examples span industries
- Framework is actionable
- Metadata reflects breadth

---

## When to Write a Post

Good triggers for posts:
- **Counter-intuitive finding:** "I thought X, but learned Y"
- **Costly mistake:** "This approach cost 10x more than it should"
- **Cross-domain insight:** "This audio processing lesson applies to data validation"
- **Framework development:** "Here's how to decide between X and Y"
- **Debugging war story:** "Here's how we found a subtle distributed systems bug"

Avoid:
- Pure feature announcements (unless lessons learned)
- Content that only applies to our specific product
- Posts that could be Tweets (need substantial frameworks/insights)

---

## Questions to Ask Before Publishing

1. **Breadth Test:** "If I worked in healthcare/finance/legal, would this be valuable?"
2. **Framework Test:** "Can readers use this to make decisions in their context?"
3. **Surprise Test:** "Is there a counter-intuitive insight or 'aha' moment?"
4. **Evidence Test:** "Do I have real numbers, code, or concrete examples?"
5. **Action Test:** "What specifically can readers do with this information?"

If you answer "no" to any of these, revise before publishing.

---

## Conclusion

Remember: We're building in public to share lessons that help business leaders make better decisions about AI, systems architecture, and technology investments.

**Every post should enable readers across industries to:**
- Make better-informed decisions
- Avoid costly mistakes we've made
- Understand when principles apply to their domain
- Have frameworks for evaluating their own situations

When in doubt, ask: "Would this help a smart business leader in a completely different industry?"
