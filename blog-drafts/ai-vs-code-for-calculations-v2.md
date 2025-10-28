# When AI Makes Sense vs When You Need Deterministic Code: A Business Decision Framework

**Date**: 2025-10-27
**Author**: Neel Ketkar
**Topics**: AI Strategy, Cost Optimization, System Design, Data Governance

---

## The Question Every Business Leader is Asking

"Should we use AI for this?"

As AI capabilities expand, this question comes up in every department: Finance wants to use AI for reconciliation. Marketing wants AI-powered analytics. Operations wants AI to optimize workflows. Clinical research teams want AI to review trial data.

But here's what I've learned building AI systems across different domains: **Sometimes using AI costs 1000x more than it should—and introduces unnecessary risk.**

The key is understanding when you need **AI's judgment** versus when you need **deterministic precision**.

---

## The Two Fundamentally Different Approaches

### 1. **Probabilistic AI (Real-Time Interpretation)**

AI analyzes each input fresh, making contextual judgments. Think of it like asking a smart consultant to review every single case.

**Characteristics:**
- Each run might produce slightly different results
- Great for pattern recognition and interpretation
- Excellent at handling ambiguity
- Costs accumulate with every use
- ~90-99% reliable (good enough for many tasks)

**Best for:**
- "What's the sentiment of this customer feedback?"
- "Does this X-ray show signs of concern?" (screening, not diagnosis)
- "What category does this transaction belong to?"
- "Is this email spam or legitimate?"

### 2. **Deterministic Code (Precise, Repeatable)**

Rules-based logic that executes the same way every time. Like a calculator: same input always gives same output.

**Characteristics:**
- 100% consistent and reproducible
- Can be audited, tested, and validated
- Runs essentially for free after initial development
- Perfect for compliance and regulatory requirements
- Can be AI-generated, then runs without AI

**Best for:**
- Financial calculations
- Regulatory compliance checks
- Clinical trial data validation
- Tax computations
- Inventory reconciliation

---

## The Critical Tradeoff: Precision vs Directional Accuracy

Understanding when you need which type of accuracy is crucial:

### When You Need 100% Precision (Use Code)

**Regulatory & Compliance:**
- Clinical trial adverse event reporting
- Financial audit trails
- Tax calculations
- Safety-critical systems
- Chain of custody tracking

**Example: Clinical Trial Data Auditing**

My wife audits clinical trial data. When checking if a participant's lab values fall within protocol-defined ranges, the calculation MUST be identical every time:

```
✅ Code approach:
if (labValue < protocol.lowerBound || labValue > protocol.upperBound) {
  flagAsOutOfRange(participantId, labValue, timestamp);
}

❌ AI approach:
"Is this lab value of 142 within the normal range of 70-140?"
AI might say "yes" (close enough!) when regulatory requires exact boundaries
```

**The stakes:** Incorrect flagging could mean:
- Unreported safety signals
- Protocol deviations missed
- Regulatory audit failures
- Patient safety risks

**Financial Reconciliation:**

When reconciling accounts, $0.01 discrepancies matter:

```
✅ Code: totalDebits === totalCredits (exact match required)
❌ AI: "These numbers look pretty close" (unacceptable for accounting)
```

### When Directional Accuracy is Fine (AI Can Help)

**Strategic Insights:**
- Market trend analysis
- Customer sentiment scoring
- Content categorization
- Preliminary screening

**Example: Customer Support Routing**

AI routing 95% of tickets correctly is excellent—the 5% can be manually corrected:

```
✅ AI approach: "This seems like a billing question" → route to billing team
   If wrong: Human corrects routing, no harm done

❌ Would be overkill to code every possible customer question variant
```

---

## Real Business Examples Across Domains

### Example 1: Clinical Research (Precision Required)

**Scenario:** Validating that informed consent was obtained before any study procedures

**Wrong approach (Probabilistic AI):**
```
AI Task: "Review these documents and tell me if consent was properly obtained"
Problem: AI might miss subtle protocol violations
- Consent dated after blood draw
- Wrong version of consent form used
- Signature witness requirements not met
```

**Right approach (Deterministic Code):**
```python
def validateConsent(participant):
    consentDate = participant.consentForm.signedDate
    firstProcedure = participant.procedures.min(date)

    errors = []

    if consentDate > firstProcedure:
        errors.append("Procedure before consent")

    if participant.consentForm.version != requiredVersion:
        errors.append("Wrong consent version")

    if not participant.consentForm.witnessSignature:
        errors.append("Missing witness signature")

    return errors
```

**Why code wins:**
- 100% consistent validation
- Auditable for FDA inspections
- Can prove compliance
- No risk of AI "hallucinating" compliance

---

### Example 2: Financial Services (Precision Required)

**Scenario:** Calculating capital gains tax on stock sales

**Wrong approach (Probabilistic AI):**
```
"Calculate the capital gains on these stock transactions"

AI might:
- Round incorrectly
- Misapply cost basis rules
- Forget wash sale adjustments
- Not handle stock splits correctly
```

**Right approach (Deterministic Code):**
```python
def calculateCapitalGains(transactions):
    totalGain = 0

    for sale in sales:
        costBasis = determineCostBasis(sale, method="FIFO")
        gain = sale.proceeds - costBasis - sale.commissions

        if isWashSale(sale):
            costBasis += washSaleAdjustment(sale)

        totalGain += gain

    return totalGain
```

**Why this matters:**
- IRS requires exact calculations
- Audit trail must be reproducible
- Mistakes mean penalties
- Can't have variance between runs

---

### Example 3: E-Commerce Operations (Hybrid Approach)

**Task:** Processing product returns

**AI for judgment (Probabilistic):**
```
AI analyzes: "Customer says product arrived damaged. Photos show box
dents but product appears intact. Customer history: 2 returns in 5 years,
both legitimate. Sentiment: frustrated but polite."

AI recommends: "APPROVE - Good customer, minor issue, low fraud risk"
```

**Code for execution (Deterministic):**
```python
def processReturn(returnRequest, aiRecommendation):
    if aiRecommendation == "APPROVE":
        refundAmount = calculateRefund(
            orderAmount=returnRequest.originalPrice,
            shippingCost=returnRequest.shippingPaid,
            restockingFee=getRestockingFee(returnRequest.reason)
        )

        initiateRefund(customerId, refundAmount)
        updateInventory(sku, quantity=1)
        logTransaction(returnRequest, refundAmount)
```

**The split:**
- AI handles the subjective judgment call
- Code handles the precise financial transactions
- Best of both worlds

---

### Example 4: Media & Content (My Audio Processing Example)

**Task:** Adding sound effects to podcast episodes

**AI for creative decisions (Probabilistic):**
```
"Read this script and decide where dramatic music should start"

AI understands narrative flow, emotional beats, pacing
Output: "Add suspense music at 3:45 during the plot reveal"
```

**Code for precise execution (Deterministic):**
```typescript
function calculateSoundEffectTiming(aiDecisions, audioMetadata) {
    return aiDecisions.map(sfx => ({
        startTime: sfx.relativeTime + audioMetadata.coldOpenDuration,
        duration: sfx.assetDuration,
        fadeIn: sfx.fadeIn || DEFAULT_FADE_IN,
        volume: calculateVolume(sfx.intensity, MIX_PROFILE)
    }));
}
```

**Why split it:**
- AI is excellent at creative interpretation
- Code ensures exact timing calculations
- AI error in creative choice = artistic preference
- Code error in timing = broken audio

---

## The Hidden Cost of Using AI Where Code Should Be

Let me show you the actual financial impact with a real example from my audio processing system:

**Scenario:** Converting sound design plans to precise audio instructions
- Processing volume: 10,000 episodes/year

### Option 1: AI for Everything (Expensive)

```
Task: "Take these sound effects and calculate exact timings"

Cost per episode: $0.0008 (Claude API call)
Annual cost: 10,000 × $0.0008 = $8,000
Processing time: 2 seconds per episode
Reliability: ~95% (occasional math errors)
```

**Real bug we encountered:**

```json
AI Response: {
  "summary": "Cold open with footsteps 0-2.5s, then speech at 4s",
  "speech_start_time": 0  // ❌ WRONG! AI understood but calculated wrong
}
```

AI was excellent at understanding the concept but unreliable at arithmetic.

### Option 2: AI Once, Code Forever (Smart)

```typescript
// Had ChatGPT write this function ONCE
function calculateSpeechStart(effects) {
    const coldOpenEffects = effects.filter(e => e.startTime <= 0.5);
    const lastEffect = Math.max(...coldOpenEffects.map(e => e.endTime));
    return lastEffect + TRANSITION_GAP;
}

// Result: 2.5 + 1.5 = 4.0 ✅ Always correct
```

**Annual cost:** $0 (code runs for free)
**Processing time:** 0.002 seconds per episode (1000x faster)
**Reliability:** 100%

**Savings:** $8,000/year + faster processing + perfect accuracy

---

## Decision Framework for Business Leaders

### Use AI in Real-Time (Probabilistic) When:

✅ **The task requires interpretation**
- Analyzing customer sentiment
- Categorizing support tickets
- Screening resumes for qualified candidates
- Detecting potential fraud patterns
- Summarizing meeting notes

✅ **There's no single "right" answer**
- "Is this email urgent?"
- "What's the tone of this customer feedback?"
- "Does this product photo need approval?"

✅ **You can tolerate some variance**
- 95% accuracy is good enough
- Errors are easily caught and corrected
- Stakes are low for misclassification

✅ **The context changes significantly**
- Market sentiment shifts
- Customer preferences evolve
- Trends emerge and fade

### Use Code (Deterministic) When:

✅ **Precision is required**
- Financial calculations
- Regulatory compliance
- Clinical trial protocols
- Tax computations
- Inventory counting

✅ **Auditability matters**
- Must prove exact logic used
- Regulatory requirements
- Legal documentation
- FDA submissions

✅ **Same input must give same output**
- Mathematical operations
- Data transformations
- Format conversions
- Validation rules

✅ **You'll run it thousands of times**
- Initial development cost amortizes quickly
- Code runs essentially for free
- No per-use AI costs

---

## The Hybrid Approach: Best of Both Worlds

The smartest implementations combine AI judgment with code precision:

### Pattern 1: AI Decides, Code Executes

```
1. AI makes the judgment call (run every time)
   ↓
2. Code implements with precision (run every time)
```

**Example: Expense Report Approval**

```
AI: Analyzes receipt image and context
    "This is a legitimate business dinner: $127.50 at client restaurant,
     expense policy allows up to $150, receipt is genuine"
    → RECOMMEND APPROVE

Code: If approved, execute precise reimbursement
    amountToReimburse = receiptAmount - (receiptAmount * companyTaxRate)
    createPayment(employee, amountToReimburse)
    updateBudget(department, -amountToReimburse)
    logTransaction(expenseId, amountToReimburse, timestamp)
```

### Pattern 2: AI Generates Code Once, Code Runs Forever

```
1. AI writes the business logic (ONE time)
   ↓
2. Human reviews and tests (ONE time)
   ↓
3. Code runs millions of times (FREE)
```

**Example: Sales Commission Calculation**

```
Ask AI: "Write a function to calculate sales commission:
- Base 5% on first $100k
- 7% on $100k-$500k
- 10% above $500k
- Bonus multiplier if quota exceeded"

AI generates tested code (once)
Then: Run on every sales transaction (free, fast, perfect)
```

---

## Industry-Specific Guidance

### Healthcare & Life Sciences

**Use AI for:**
- Preliminary radiology screening
- Patient triage recommendations
- Literature review and summarization
- Adverse event signal detection (screening)

**Use Code for:**
- Protocol compliance validation
- Dose calculations
- Lab value range checks
- Regulatory report generation
- Patient safety alerts

**Critical: Never use probabilistic AI for:**
- Drug dosing calculations
- Radiotherapy planning
- Safety reporting thresholds
- Clinical trial endpoint calculations

### Financial Services

**Use AI for:**
- Fraud pattern detection
- Customer sentiment analysis
- Market trend identification
- Document classification

**Use Code for:**
- Interest calculations
- Tax computations
- Reconciliation
- Compliance checks
- Audit trails
- Portfolio rebalancing math

### Legal & Compliance

**Use AI for:**
- Contract review (preliminary)
- Legal research
- Document similarity detection
- Privilege screening

**Use Code for:**
- Statute of limitations calculations
- Compliance deadline tracking
- Evidence chain of custody
- Document retention rules

### Marketing & Sales

**Use AI for:**
- Content personalization
- Lead scoring
- Campaign optimization
- Creative generation

**Use Code for:**
- Attribution modeling (when deterministic rules apply)
- Budget allocation execution
- A/B test statistical significance
- ROI calculations

---

## Red Flags: When You're Using AI Wrong

### 🚩 Red Flag 1: "AI will calculate that"

If the task is purely mathematical, AI is the wrong tool:

❌ "AI, calculate the tax on this transaction"
✅ Have AI write the tax calculation function once, then run it

❌ "AI, reconcile these two datasets"
✅ Write reconciliation logic with exact matching rules

### 🚩 Red Flag 2: "We need this to be 100% accurate every time, so we'll check AI's work"

If you're manually checking every AI output for accuracy, you're wasting money:

❌ AI generates invoice → Human checks math → Manual corrections
✅ Code generates invoice → Always correct → No checking needed

### 🚩 Red Flag 3: "The AI gets it right 90% of the time"

For compliance, financial, or safety-critical tasks, 90% isn't good enough:

❌ "AI correctly flags 90% of protocol violations"
✅ Code flags 100% based on exact protocol rules

### 🚩 Red Flag 4: "We're spending $10k/month on AI API calls for data processing"

If you're doing the same transformation thousands of times:

❌ Calling AI API for each record
✅ Have AI write the transformation once, run on all records

---

## The ROI Questions to Ask

Before implementing any AI solution, ask these three questions:

### 1. "Does this task have one objectively correct answer?"

**If YES → Use Code (maybe AI-generated)**
- Mathematical calculations
- Data validation
- Format conversions
- Compliance checks

**If NO → AI might help**
- Subjective judgments
- Interpretation tasks
- Pattern recognition

### 2. "Will we run this more than 100 times?"

**If YES → Write code (one-time cost, free forever)**

**If NO → Maybe AI in real-time is fine**

**Example calculation:**
- AI cost: $0.001 per call × 10,000 calls = $100/month
- Code cost: $500 to develop once = $0/month after
- Break-even: 5 months, then pure savings

### 3. "What happens if the output varies by 5%?"

**If disaster → Must use deterministic code**
- Financial penalties
- Regulatory violations
- Safety risks
- Legal liability

**If acceptable → AI might work**
- Slightly different wording
- Priority scores vary
- Recommendations differ

---

## Real Results from Our Implementation

After switching from "AI for everything" to "AI for judgment, code for precision":

**What Improved:**
- Processing cost: $80/month → $20/month (75% reduction)
- Calculation accuracy: 95% → 100%
- Processing speed: 2 seconds → 0.002 seconds per item (1000x faster)
- Debuggability: "AI error" → "Bug on line 47 in calculator.ts"
- Audit compliance: "Can't verify" → "Fully reproducible"

**What Stayed the Same:**
- Quality of creative decisions (AI still makes these)
- Flexibility to handle new scenarios
- Ability to adapt to changing requirements

**Bottom line:** Code didn't reduce quality—it made precision affordable and reliable.

---

## Implementation Roadmap

### Phase 1: Audit Current AI Usage (Week 1)

Map where you're currently using AI:

```
Task: _______________
Current approach: AI real-time / Code / Manual
Input type: Structured / Unstructured
Output type: Creative / Calculated
Precision required: 100% / Directional
Volume: _____ per month
Current cost: $ _____
```

### Phase 2: Identify Quick Wins (Week 2)

Look for tasks that are:
- Currently using AI
- High volume (>1000/month)
- Deterministic (same input → same output)
- Mathematical or rule-based

**Example quick wins:**
- Data format conversions
- Calculation operations
- Validation checks
- Simple transformations

### Phase 3: Replace with Code (Weeks 3-4)

For each quick win:
1. Have AI (ChatGPT/Claude) write the code
2. Test with sample data
3. Review for edge cases
4. Deploy and measure

**Expected results:**
- 70-90% cost reduction
- 100% consistency
- 100-1000x speed improvement

### Phase 4: Optimize Hybrid Systems (Month 2+)

For complex workflows:
1. AI for interpretation/judgment
2. Code for execution/calculation
3. Human oversight for high-stakes decisions

---

## Key Takeaways by Role

### For CFOs:
- AI costs scale linearly with usage
- Code costs are one-time + maintenance
- For high-volume deterministic tasks, code ROI is massive
- Financial compliance requires deterministic precision

### For CIOs/CTOs:
- Audit where AI is being used for simple calculations
- Implement hybrid architectures (AI + Code)
- Ensure compliance-critical paths use deterministic code
- Track AI API costs as they can balloon quickly

### For Compliance Officers:
- Regulatory requirements often mandate deterministic processes
- AI outputs may not be auditable for FDA/SEC/other regulators
- Code provides reproducible audit trails
- Consider hybrid: AI for screening, code for reporting

### For Product Managers:
- Understand the precision requirements for each feature
- Don't default to "AI for everything"
- Calculate break-even points for AI vs code approaches
- Consider maintenance burden of both approaches

### For Data Scientists:
- Not every problem needs ML
- Sometimes a SQL query beats a model
- Focus AI where interpretation/judgment is needed
- Use code for the transformation/calculation layer

---

## The Bottom Line

**Probabilistic AI (real-time):**
- Excellent for judgment, interpretation, creativity
- Expensive at scale
- ~90-99% reliable
- Best for ambiguous, context-dependent tasks

**Deterministic Code:**
- Perfect for calculations, transformations, validation
- Free to run after development
- 100% reliable
- Best for precision, compliance, high-volume operations

**The Winning Strategy:**
- AI for what requires judgment
- Code for what requires precision
- Hybrid for complex workflows
- Always question "do we really need AI for this?"

Don't fall for "AI everywhere." Ask: **Does this need creativity or calculation?**

The right architecture saves money, improves reliability, and meets regulatory requirements.

---

**About This Post**

These lessons come from building systems across media production, clinical data, and financial operations. I've seen firsthand where AI shines and where it's overkill. The framework here applies whether you're processing podcasts or patient data.

**Want to discuss your use case?** I'm always interested in hearing how different industries navigate these tradeoffs. The patterns are remarkably consistent across domains.

---

*Last updated: October 27, 2025*
