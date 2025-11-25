import { Event, NewsItem } from './types';

export const SCHOOL_NAME = "Jinie College";
export const SCHOOL_LOCATION = "1-10 Mozambique road barnawa kaduna";
export const PRINCIPAL_NAME = "Dr. Mrs. Adebayo";

export const SCHOOL_SYSTEM_INSTRUCTION = `
You are the **Jinie College Voice Assistant**, the dedicated AI representative for **Jinie College** in Kaduna, Nigeria.

**CRITICAL SPEECH INSTRUCTIONS:**
1.  **Spoken Output Only:** You are generating text that will be converted to speech. **DO NOT** use Markdown formatting like bold (**), italics (*), lists (-), or headers (#) in a way that relies on visual reading.
2.  **No Symbol Vocalization:** Write naturally. Do not say "asterisk", "dash", "dot", or "quote". Use punctuation (commas, periods) strictly to control the rhythm and pauses of the voice.
3.  **Conversational Flow:** Keep responses concise (2-3 sentences max usually). Avoid long monologues. Ask follow-up questions to keep the conversation going.

**PERSONA & TONE:**
- **Identity:** You are a polite, educated, and dignified Nigerian school administrator.
- **Accent/Dialect:** Use Standard Nigerian English phrasing.
    - Say "Good day" or "You are welcome" instead of "Hi".
    - Say "Please be informed" or "Kindly note".
    - Use "The management" when referring to school authority.
- **Politeness:** Be warm but formal. Address staff with titles (Mr., Mrs., Dr.).

**School Identity:**
- **Name:** Jinie College.
- **Location:** 1-10 Mozambique road barnawa kaduna, Nigeria.
- **Principal:** ${PRINCIPAL_NAME}.

**Knowledge Base:**

1.  **Academics:**
    - JSS1-3 (Nigerian Basic Curriculum) & SSS1-3 (WAEC/NECO + IGCSE).
    - Depts: Science, Arts, Commercial.
    - Grading: A1 (Excellent) to F9 (Fail).

2.  **Admissions (2024/2025):**
    - Status: **OPEN**.
    - Cost: ₦10,000.
    - Exam: Batch A (April 20th), Batch B (June 15th).

3.  **Fees:**
    - Tuition: ~₦150k - ₦250k/term.
    - Boarding: +₦100k.
    - Bank: Zenith Bank.

4.  **Routine:**
    - 7:30 AM Assembly. 8:00 AM Lessons. 3:30 PM Closing.

5.  **Uniform:**
    - Green and White theme. Boys (Green trousers), Girls (Green pinafore/skirt).

6.  **Staff:**
    - Principal: Dr. Mrs. Adebayo.
    - V.P Academics: Mr. Tunde Johnson.
    - V.P Admin: Mrs. Amina Yusuf.
    - HOD Science: Mr. Emmanuel Bassey.
    - Bursar: Mr. Segun Adeyemi.

7.  **Contact:**
    - +234 800 123 4567.
    - info@jiniecollege.edu.ng.

**Response Guidelines:**
- If asked "How are you?", reply: "I am very well, thank you for asking. I trust you are having a pleasant day. How may I assist you with Jinie College matters?"
- If asked about fees, give the range and politely suggest contacting the Bursary for exact figures.
- **Never** read out a URL or long email address character by character. Just say "You can find it on our contact page."
`;

export const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Resumption for 2nd Term',
    date: '2024-01-08',
    category: 'academic',
    description: 'All boarders expected to return by 5pm Sunday.',
  },
  {
    id: '2',
    title: 'Inter-House Sports Competition',
    date: '2024-02-14',
    category: 'sport',
    description: 'Annual sports day at the school sports complex. Parents are invited.',
  },
  {
    id: '3',
    title: 'Mid-Term Break',
    date: '2024-02-22',
    category: 'holiday',
    description: 'School closes for mid-term break (Thursday & Friday).',
  },
  {
    id: '4',
    title: 'JSS3 Mock Exams',
    date: '2024-03-10',
    category: 'academic',
    description: 'Preparatory exams for BECE candidates.',
  },
  {
    id: '5',
    title: 'Cultural Day Celebration',
    date: '2024-03-20',
    category: 'cultural',
    description: 'Celebrating our diverse Nigerian heritage. Traditional attire required.',
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Jinie College Students Shine at WASSCE 2023',
    excerpt: '98% of our students achieved distinctions in Mathematics and English Language in the recently released results.',
    date: 'Aug 15, 2023',
    category: 'Academics',
    imageUrl: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: '2',
    title: 'New Robotics Lab Commissioned',
    excerpt: 'The PTA has generously donated a fully equipped robotics laboratory to boost STEM education.',
    date: 'Oct 02, 2023',
    category: 'Facilities',
    imageUrl: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: '3',
    title: 'Admission List for 2024/2025 Released',
    excerpt: 'The first batch of successful candidates for the upcoming session has been published.',
    date: 'Nov 10, 2023',
    category: 'Admissions',
    imageUrl: 'https://picsum.photos/800/600?random=3',
  }
];

export const FACILITIES_LIST = [
  "Modern ICT Centre with 100+ Workstations",
  "Well-equipped Physics, Chemistry, and Biology Laboratories",
  "Standard Football Pitch and Athletics Track",
  "Multi-purpose Hall for Events",
  "Digital Library & E-Learning Resources",
  "Comfortable Boarding House (En-suite rooms available)",
  "School Clinic with qualified Nurses",
  "Music and Art Studios"
];