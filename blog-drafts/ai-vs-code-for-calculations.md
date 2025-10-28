# When to Use AI vs When to Use Code: A Guide for Non-Technical Stakeholders

**Date**: 2025-10-27
**Author**: Neel Ketkar
**Topics**: AI Strategy, Cost Optimization, System Design

---

## The Question Everyone's Asking

"Can we just use AI for everything?"

I've been experimenting with automating sound design for podcast scripts, and this question kept coming up. The answer surprised me: **Sometimes using AI costs 1000x more than it should.**

Here's what I learned about when AI is the right tool—and when it's an expensive mistake.

---

## Two Ways AI Can Work For You

There are two fundamentally different ways to use AI in production:

### 1. **Probabilistic (AI in Real-Time)**
AI makes decisions on the fly, every single time you run it.

**When you need this:**
- Creative interpretation that changes based on context
- Understanding messy, unstructured human input
- Making judgment calls with no single "right" answer

**Example:** "Read this podcast script and decide where dramatic music should start"

### 2. **Deterministic (AI Writes Code Once, Code Runs Forever)**
AI helps you write the logic once, then that logic runs reliably without AI.

**When you need this:**
- The same input should always give the same output
- Mathematical calculations with exact answers
- Data validation and transformations
- Anything you'd want to test and debug

**Example:** "Calculate when speech starts by adding up sound effect durations"

The key difference: **Probabilistic means running AI over and over. Deterministic means using AI once to write code, then running that code millions of times.**

---

## The Real-World Cost Difference

Let me show you actual numbers from our podcast automation system.

### Scenario: Converting Sound Design Plans to Audio Instructions

We need to process 1,000 podcast episodes per month.

**Option 1: Use AI Every Single Time (Probabilistic)**
- AI call cost: $0.0008 per episode
- Latency: 2 seconds per episode
- Monthly cost: **$0.80**
- Total processing time: **33 minutes**
- Reliability: ~95% (AI occasionally makes mistakes)

**Option 2: Use AI Once to Write Code, Run Code Forever (Deterministic)**
- One-time AI cost to write code: ~$5 (via Claude/ChatGPT)
- Code execution cost: $0 per episode
- Latency: 0.002 seconds per episode (1000x faster)
- Monthly cost: **$0**
- Total processing time: **2 seconds**
- Reliability: 100% (same input = same output)

**Annual savings:** $9.60 + faster processing + better reliability

That's just ONE function in our system. Scale this across dozens of operations, and suddenly you're saving thousands of dollars and getting better results.

---

## Real-World Case Study: The $1,000/Year Bug

Here's what happened when we used AI for the wrong task.

### The Problem

We're building a system that automatically adds sound effects and music to podcast scripts. One feature is "cold opens"—where sound effects play for a few seconds before the narrator starts speaking.

**Initial approach:** Ask AI to calculate timing

We gave the AI this task:
> "Look at these sound effects and calculate when speech actually starts"

### What Went Wrong

The AI's response was beautiful:

```
AI Summary: "The episode opens with a cold start at 0s - just footsteps
playing from 0-2.5s. The sparse piano doesn't enter until 8.5s,
after the opening hook."
```

Perfect description! The AI understood the concept completely.

But then we checked the actual calculation it produced:

```json
{
  "speech_start_time": 0    // ❌ WRONG! Should be 4.0 seconds
}
```

The AI understood that:
- Footsteps play from 0 to 2.5 seconds
- There's a 1.5 second silence
- Speech starts at 4.0 seconds

But it output `0` anyway. **Why?**

Because **AI is great at understanding language patterns, but unreliable at arithmetic.** It's probabilistic, not deterministic.

### The Fix: Let AI Decide, Let Code Calculate

We split the task in two:

**Step 1: AI Makes Creative Decisions (Probabilistic)**
```
AI Task: "Read this script and decide what sound effects should play
and roughly when they should happen"

AI Output: "Put footsteps from 0-2.5s, add 1.5s silence, then start
narration"
```

This is what AI is GREAT at—understanding creative intent from messy human descriptions.

**Step 2: Code Does Math (Deterministic)**

We used AI once (via ChatGPT) to write this function:

```typescript
function calculateSpeechStart(soundEffects) {
  // Find all effects that start at the beginning
  const coldOpenEffects = soundEffects.filter(sfx =>
    sfx.startTime <= 0.5
  );

  // Find when the last effect ends
  const lastEffectEnds = Math.max(...coldOpenEffects.map(sfx => sfx.endTime));

  // Add transition gap
  return lastEffectEnds + 1.5;
}

// Result: 2.5 + 1.5 = 4.0 seconds ✅ Always correct!
```

**Now:**
- AI made ONE creative decision: "use footsteps for the cold open"
- Code calculates timing correctly EVERY time
- Total cost: $0 per episode (vs $0.0008 with AI)
- Reliability: 100% (vs ~95% with AI)

---

## Simple Decision Framework for Stakeholders

When someone proposes using AI for a task, ask these questions:

### Use AI in Real-Time (Probabilistic) When:

✅ **The answer changes based on context**
- "What mood should this music have?"
- "Is this customer email angry or confused?"
- "Should this sound effect be loud or subtle?"

✅ **There's no single 'correct' answer**
- Creative interpretations
- Subjective judgments
- Pattern recognition in unstructured data

✅ **You're okay with occasional variance**
- The AI might make slightly different choices each time
- 95% accuracy is acceptable

### Use AI Once to Write Code (Deterministic) When:

✅ **The same input should ALWAYS give the same output**
- Mathematical calculations
- Data transformations
- Format conversions

✅ **You need 100% reliability**
- Financial calculations
- Time-sensitive operations
- Anything involving safety or compliance

✅ **You'll run this thousands of times**
- The one-time cost of writing code pays off quickly
- Example: $5 to write code vs $0.0008 × 10,000 runs = $8/month

### The Golden Rule

**If you can describe the task as a clear step-by-step process, use code. If you need judgment and interpretation, use AI in real-time.**

---

## The Winning Pattern: Hybrid Systems

The best systems use both approaches:

```
1. AI Makes Creative Decisions (Probabilistic) ← Run every time
   ↓
2. Code Validates & Calculates (Deterministic) ← Written once, runs forever
   ↓
3. Code Executes Reliably (Deterministic) ← Written once, runs forever
```

### Real Example from Our Podcast System

**For Every Episode We Process:**

1. **AI Analyzes Script** (Probabilistic - $0.02 per episode)
   - Read the podcast script
   - Understand the narrative arc
   - Decide where sound effects should go
   - Choose appropriate music mood

2. **Code Calculates Timing** (Deterministic - $0)
   - Take AI's creative decisions
   - Calculate exact timestamps
   - Validate all data is correct
   - Transform coordinates

3. **Code Generates Audio** (Deterministic - $0)
   - Compile to FFmpeg commands
   - Mix the audio
   - Export final file

**Total cost:** $0.02/episode instead of $0.08/episode if we used AI for everything

**Savings:** 75% cost reduction + 100% reliability on math

---

## When to Remove AI Entirely

Sometimes you'll discover you're using AI where you don't need it at all.

### Case Study: The Unnecessary AI Call

We had an AI step that converted data formats:

**Before (Using AI):**
- Task: "Convert format A to format B"
- Cost: $0.0008 per conversion
- Time: 2 seconds
- Problem: No creative decisions needed!

We asked ourselves: **"What creative interpretation does AI do here?"**

Answer: **None.** The task was just:
1. Rename some fields
2. Look up matching IDs
3. Do coordinate math (absolute time → relative time)
4. Fill in default values

All of this can be described as clear steps = should be code!

**After (Using Code):**

We had ChatGPT write us this function ONE TIME:

```typescript
function convertFormat(input, lookupTable, config) {
  return input.items
    .map(item => ({
      id: item.id,
      type: mapType(item.category),
      assetId: lookupTable.find(a => a.id === item.id)?.assetId,
      timestamp: item.absoluteTime - config.startTime,  // Math!
      volume: item.volume ?? config.defaultVolume,
    }));
}
```

**Results:**
- Latency: 2 seconds → 0.002 seconds (1000x faster)
- Cost: $0.0008/call → $0 (100% savings)
- Reliability: 95% → 100%
- Debuggability: "AI broke" → "Line 47 in converter.ts has the issue"

**Annual savings at 10,000 episodes/year:** $8 + significantly faster processing

---

## Key Takeaways for Decision Makers

### ✅ Smart Uses of AI

1. **Use AI in real-time for creative decisions**
   - Understanding customer sentiment
   - Generating marketing copy variations
   - Deciding visual design elements
   - Interpreting messy user input

2. **Use AI once to write code for deterministic tasks**
   - Have ChatGPT/Claude write the calculation function
   - Review and test the code
   - Run it thousands of times for free
   - Example: "Write me a function to calculate tax based on these rules"

3. **Combine both in hybrid systems**
   - AI for "what should happen"
   - Code for "make it happen exactly right every time"

### ❌ Expensive Mistakes to Avoid

1. **Don't use AI in real-time for simple math**
   - Bad: Ask AI to calculate totals on every transaction
   - Good: Use AI once to write a calculation function, then run it
   - Savings: Thousands of dollars per year

2. **Don't use AI where you need 100% consistency**
   - Bad: AI for financial calculations, legal compliance checks
   - Good: AI to write the code, then code runs deterministically
   - Risk mitigation: Avoid regulatory issues

3. **Don't assume "AI everywhere" is the strategy**
   - Just because you CAN use AI doesn't mean you SHOULD
   - Ask: "Does this need interpretation or calculation?"
   - The right tool for the right job saves money and improves reliability

### The ROI Question

Before adding AI to any process, ask:

**"Will this run more than 100 times?"**

- If YES: Consider using AI once to write code
- If NO: Maybe AI in real-time is fine

**"Does this need to be exactly the same every time?"**

- If YES: Use code (maybe AI-generated)
- If NO: AI in real-time might be appropriate

**"Can I describe this as step-by-step instructions?"**

- If YES: That's just code. Have AI write it for you.
- If NO: This needs judgment. Use AI in real-time.

---

## Our Results

After implementing the hybrid approach:

**What Got Better:**
- Cold open timing accuracy: 0% → 100%
- Processing speed: 2 seconds → 0.002 seconds per episode
- Monthly costs: $80 → $20 (75% reduction)
- Debugging time: "AI did something weird" → "Bug is in line 42"
- Reliability: 95% → 100%

**What Stayed the Same:**
- Creative quality of sound design (AI still makes these decisions)
- Variety and appropriateness of choices
- Understanding of narrative flow

The code didn't make the creative decisions worse—it just made the math reliable and affordable.

---

## The Bottom Line

**Probabilistic AI (real-time):** Great for creativity, expensive for repetition

**Deterministic Code:** Perfect for consistency, can be generated by AI once

**The Winning Move:** Use both
- AI interprets messy human intent
- Code executes precisely and reliably
- You save money and get better results

---

## Three Questions to Ask Your Team

1. **"Are we using AI in real-time where we could use code?"**
   - Look for: calculations, format conversions, data validation
   - Potential savings: 75%+ cost reduction

2. **"Can I describe this task as step-by-step instructions?"**
   - If YES: Have AI write the code once, run it forever
   - If NO: Use AI in real-time

3. **"What's the cost of running this 10,000 times?"**
   - AI in real-time: 10,000 × $0.001 = $10/month
   - Code (written by AI once): $0/month
   - The math speaks for itself

---

## Next Steps

**For Technical Teams:**
- Audit your AI calls—which ones are purely deterministic?
- Use AI to write functions for repetitive tasks
- Keep AI for creative interpretation only

**For Business Stakeholders:**
- Question proposals that use "AI for everything"
- Ask: "Does this need creativity or calculation?"
- The right architecture saves money AND improves reliability

**For Product Managers:**
- Hybrid systems give you the best of both worlds
- Budget AI costs based on what actually needs real-time AI
- Code-based operations scale for free

---

**About This Post**

These lessons come from building an automated podcast production pipeline that processes thousands of episodes. We started with "AI for everything" and learned that hybrid systems are smarter, faster, and cheaper.

The complete implementation is open source at [github.com/sparrowfm/aviary](https://github.com/sparrowfm/).

---

**Want to discuss your AI architecture?** I'm always interested in hearing how other teams are navigating these decisions. Feel free to reach out.

---

*Last updated: October 27, 2025*
