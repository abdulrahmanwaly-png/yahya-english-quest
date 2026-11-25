import { WORLD_READING } from './world1-reading.js';
import { WORLD_GRAMMAR } from './world2-grammar.js';
import { WORLD_SPELLING } from './world3-spelling.js';
import { WORLD_WRITING } from './world4-writing.js';

export const WORLDS = [
  WORLD_READING,
  WORLD_GRAMMAR,
  WORLD_SPELLING,
  WORLD_WRITING
];

export const QUEST_MAP = new Map();
export const QUESTION_MAP = new Map();
export const ALL_QUESTS = [];
export const ALL_QUESTIONS = [];
export const TROPHIES = [];

for (const world of WORLDS) {
  for (const quest of world.quests) {
    const enrichedQuest = {
      ...quest,
      worldId: world.id,
      worldTitle: world.title,
      worldArTitle: world.arTitle
    };
    ALL_QUESTS.push(enrichedQuest);
    QUEST_MAP.set(quest.id, enrichedQuest);

    if (quest.trophy) {
      TROPHIES.push({
        ...quest.trophy,
        questId: quest.id,
        worldId: world.id,
        questTitle: quest.title
      });
    }

    for (const q of quest.questions) {
      const enrichedQ = {
        ...q,
        questId: quest.id,
        questTitle: quest.title,
        worldId: world.id,
        worldTitle: world.title,
        // Inherit quest-level passage or TOC unless question overrides
        passage: q.passage || quest.passage || null,
        toc: q.tocOverride || quest.toc || null
      };
      ALL_QUESTIONS.push(enrichedQ);
      QUESTION_MAP.set(q.id, enrichedQ);
    }
  }
}

// Bonus special trophies earned by milestones
export const MILESTONE_TROPHIES = [
  { id: 'trophy-streak-5', icon: '🔥', name: 'Hot Streak x5', ar: '٥ إجابات متتالية صح', rule: 'streak5' },
  { id: 'trophy-rescuer', icon: '🎯', name: 'Mistake Crusher', ar: 'بطل تصحيح الأخطاء', rule: 'rescued' },
  { id: 'trophy-halfway', icon: '🚀', name: 'Halfway Hero', ar: 'بطل نص المنهج', rule: 'halfway' },
  { id: 'trophy-master', icon: '🏆', name: 'Year 1 Grand Master', ar: 'بطل منهج الإنجليزي كله', rule: 'allMastered' }
];

export const ALL_TROPHIES = [...TROPHIES, ...MILESTONE_TROPHIES];

export const RANKS = [
  { minPct: 0, title: 'Word Explorer', ar: 'مستكشف الكلمات', icon: '🌱' },
  { minPct: 15, title: 'Story Scout', ar: 'كشّاف القصص', icon: '🧭' },
  { minPct: 35, title: 'Phonics Hero', ar: 'بطل الصوتيات', icon: '⚡' },
  { minPct: 55, title: 'Grammar Knight', ar: 'فارس القواعد', icon: '🛡️' },
  { minPct: 75, title: 'Reading Champion', ar: 'بطل القراءة', icon: '🌟' },
  { minPct: 95, title: 'Grand English Master', ar: 'بطل الإنجليزي الأول', icon: '👑' }
];

export const PRAISE_CORRECT = [
  { en: 'Awesome job, Yahya!', ar: 'برافو عليك يا يحيى!' },
  { en: 'Superstar! You nailed it!', ar: 'نجم يا يحيى! إجابة ممتازة!' },
  { en: 'Brilliant! Keep going!', ar: 'شاطر جدًا! كمّل يا بطل!' },
  { en: 'Spot on, Yahya!', ar: 'صح ١٠٠٪ يا بطل!' },
  { en: 'Fantastic reading!', ar: 'ممتاز يا يحيى!' },
  { en: 'You are so smart!', ar: 'ذكي جدًا يا يحيى!' },
  { en: 'Boom! Gold star power!', ar: 'هايل يا يحيى! نجمة ذهبية!' }
];

export const PRAISE_WRONG = [
  { en: 'Nice try, Yahya! Look at the green answer — we will try it again!', ar: 'محاولة حلوة يا يحيى! شوف الإجابة الصح وهنجربها تاني لحد ما تتقنها!' },
  { en: 'Almost! Good detectives learn from every clue!', ar: 'قريب جدًا! البطل بيتعلم من كل محاولة وهنكررها تاني!' },
  { en: 'No worries! Let\'s remember this one for our retry round!', ar: 'ولا يهمك يا بطل! هنعيد السؤال ده تاني عشان يثبت!' }
];
