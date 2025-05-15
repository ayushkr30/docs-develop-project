
export const templates = [
    { id: "blank", 
      label: "Blank Document", 
      imageUrl: "/blank-document.svg",
      initialContent: "",
    },
    { id: "software-proposal", 
      label: "Software development proposal", 
      imageUrl: "/software-proposal.svg",
      initialContent: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview </h2>
      <p> Brief descriotion of the proposed software development project.</p>

      <h2>Scope of Work </h2>
      <p>Detailed breakdown of project deliverables and requirements.</p>

      <h2>Timeline</h2>
      <p>Project milestones and delivery schedule. </p>

      <h2>Budget</h2>
      <p>Cost breakdown and payment terms.</p> 
      `,
    },
    { id: "project-proposal", 
      label: "Project proposal", 
      imageUrl: "/project-proposal.svg",
      initialContent: `
      <h1>Project Proposal</h1>
      <h2>>Executive Summary </h2>
      <p>Brief overview of the project proposal.</p>

      <h2>Implementation Plan</h2>
      <p>Strategy and methodology for project execution.</p>

      <h2>Resources Required</h2>
      <p>Team, equipment, and budget requirement.</p>
      `,

    },
    { id: "business-letter", 
      label: "Business Letter", 
      imageUrl: "/business-letter.svg",
      initialContent: ` 
      <p style="text-align: right;">[Your Company Name]<br>[Street Address]<br>[City, State ZIP Code]<br>[Email Address]<br>[Phone Number]</p>

<p style="margin-top: 40px;">[Date]</p>

<p>[Recipient’s Name]<br>[Recipient’s Title]<br>[Company Name]<br>[Street Address]<br>[City, State ZIP Code]</p>

<p>Dear [Recipient’s Name],</p>

<p>I am writing to [state the purpose of the letter clearly and concisely in the first sentence]. Provide necessary details in the following sentences to support your message.</p>

<p>Use this paragraph to expand on your request, proposal, concern, or message. Keep your tone professional and your language clear.</p>

<p>Thank you for your time and consideration. I look forward to your response.</p>

<p>Sincerely,</p>

<p style="margin-top: 60px;">[Your Full Name]<br>[Your Job Title]</p>

      `,
    },
    { id: "resume", 
      label: "Resume", 
      imageUrl: "/resume.svg",
      initialContent: `
      <h1 style="text-align: center; font-size: 24px;">[Your Full Name]</h1>
<p style="text-align: center;">
  [City, State] · [Phone Number] · [Email Address] · [LinkedIn URL] · [Portfolio URL]
</p>

<h2>Professional Summary</h2>
<p>
  [A concise 2–3 sentence summary highlighting your experience, skills, and career goals.]
</p>

<h2>Skills</h2>
<ul>
  <li>[Skill 1]</li>
  <li>[Skill 2]</li>
  <li>[Skill 3]</li>
  <li>[Skill 4]</li>
</ul>

<h2>Experience</h2>
<p><strong>[Job Title]</strong> — [Company Name]</p>
<p><em>[Month/Year] – [Month/Year]</em></p>
<ul>
  <li>[Responsibility or achievement #1]</li>
  <li>[Responsibility or achievement #2]</li>
</ul>

<p><strong>[Job Title]</strong> — [Company Name]</p>
<p><em>[Month/Year] – [Month/Year]</em></p>
<ul>
  <li>[Responsibility or achievement #1]</li>
  <li>[Responsibility or achievement #2]</li>
</ul>

<h2>Education</h2>
<p><strong>[Degree]</strong> — [Institution Name]</p>
<p><em>[Month/Year] – [Month/Year]</em></p>

<h2>Projects</h2>
<p><strong>[Project Name]</strong></p>
<p>
  [Brief description of the project, tech stack used, and what you built or contributed.]
</p>

      `,
    },
    { id: "cover-letter", 
      label: "Cover letter", 
      imageUrl: "/cover-letter.svg",
      initialContent: `
      <p style="text-align: right;">
  [Your Name]<br>
  [Your Address]<br>
  [City, State ZIP Code]<br>
  [Email Address]<br>
  [Phone Number]
</p>

<p style="margin-top: 40px;">[Date]</p>

<p>
  [Hiring Manager’s Name]<br>
  [Company Name]<br>
  [Company Address]<br>
  [City, State ZIP Code]
</p>

<p>Dear [Hiring Manager's Name],</p>

<p>
  I am writing to express my interest in the [Job Title] position at [Company Name], as advertised on [Job Board/Company Website]. With my background in [Your Field/Expertise] and a strong passion for [relevant passion], I believe I can contribute effectively to your team.
</p>

<p>
  In my previous role at [Previous Company], I [describe a relevant achievement or responsibility]. I am skilled in [Key Skill #1], [Key Skill #2], and have hands-on experience with [Tools/Technologies].
</p>

<p>
  I admire [something specific about the company] and am enthusiastic about the opportunity to bring value to your organization. I have attached my resume for your review and would welcome the chance to discuss how I can support your team’s goals.
</p>

<p>
  Thank you for considering my application. I look forward to the opportunity to speak with you.
</p>

<p>Sincerely,</p>

<p style="margin-top: 60px;">[Your Full Name]</p>

      `,
    },
    { id: "letter", 
      label: "Letter", 
      imageUrl: "/letter.svg",
      initialContent: ` 
<p style="text-align: right;">
  [Your Name]<br>
  [Your Street Address]<br>
  [City, State ZIP Code]<br>
  [Email Address]<br>
  [Phone Number]
</p>

<p style="margin-top: 40px;">
  [Date]
</p>

<p>
  [Recipient’s Name]<br>
  [Recipient’s Title]<br>
  [Company Name]<br>
  [Company Address Line 1]<br>
  [City, State ZIP Code]
</p>

<p>Dear [Recipient’s Name],</p>

<p>
  I am writing to [state the purpose of your letter clearly and briefly]. This letter serves to [elaborate on the purpose—such as making a request, expressing concerns, sharing updates, etc.].
</p>

<p>
  [Add supporting details or explanations in 1–2 paragraphs. Be concise and professional.]
</p>

<p>
  I would appreciate your attention to this matter and am happy to provide further information if required. Please feel free to reach out to me at your convenience.
</p>

<p>
  Thank you for your time and consideration.
</p>

<p>Sincerely,</p>

<p style="margin-top: 60px;">
  [Your Name]
</p>

      `,
    }

];