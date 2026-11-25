// World 2: Grammar Galaxy — 100% strictly from Yahya's Year 1 Term 1 English worksheets
// Covers PDF pages: 5, 10, 11, 15, 19, 20, 21, 25, 27, 28, 32, 46, 61 (Ex 4)

export const WORLD_GRAMMAR = {
  id: 'grammar',
  title: 'Grammar Galaxy',
  arTitle: 'مجرة القواعد (الجرامر)',
  icon: '🪐',
  description: 'Nouns, Verbs, Adjectives, Articles (a/an), Capital Letters & Full Stops',
  arDesc: 'الأسماء، الأفعال، الصفات، أدوات النكرة، الحروف الكبيرة والنقطة',
  quests: [
    // Page 5 — Nouns
    {
      id: 'g-nouns',
      title: 'Noun Detective Challenge',
      arTitle: 'تحدي مكتشف الأسماء',
      emoji: '🕵️',
      trophy: { id: 'trophy-nouns', icon: '🕵️', name: 'Noun Detective', ar: 'مكتشف الأسماء' },
      questions: [
        {
          id: 'p05-q0',
          topic: 'Classroom Nouns',
          prompt: 'Noun Detective Challenge! Which group shows 4 nouns you can find in your classroom?',
          options: [
            'desk, chair, book, pencil',
            'run, jump, sleep, eat',
            'big, red, sweet, soft',
            'in, on, at, under'
          ],
          answer: 0,
          explain: 'A noun names a person, place, animal, or thing — desk, chair, book, and pencil are classroom things!'
        },
        {
          id: 'p05-q1',
          topic: 'Find the Nouns',
          prompt: 'Find ALL the nouns in this sentence: "The dog runs in the garden."',
          options: ['dog, garden', 'runs, in', 'The, runs', 'dog, runs'],
          answer: 0,
          explain: '"dog" (animal) and "garden" (place) are the nouns! "runs" is a verb.'
        },
        {
          id: 'p05-q2',
          topic: 'Find the Nouns',
          prompt: 'Find ALL the nouns in this sentence: "My teacher reads a book."',
          options: ['teacher, book', 'reads, a', 'My, reads', 'teacher, reads'],
          answer: 0,
          explain: '"teacher" (person) and "book" (thing) are the nouns!'
        },
        {
          id: 'p05-q3',
          topic: 'Find the Nouns',
          prompt: 'Find ALL the nouns in this sentence: "The cat sleeps on the chair."',
          options: ['cat, chair', 'sleeps, on', 'The, sleeps', 'cat, sleeps'],
          answer: 0,
          explain: '"cat" (animal) and "chair" (thing) are the nouns!'
        },
        {
          id: 'p05-q4',
          topic: 'Find the Nouns',
          prompt: 'Find ALL the nouns in this sentence: "Emma plays with her ball at the park."',
          options: ['Emma, ball, park', 'plays, with, at', 'her, plays, ball', 'Emma, plays, park'],
          answer: 0,
          explain: '"Emma" (person), "ball" (thing), and "park" (place) are all nouns!'
        },
        {
          id: 'p05-q5',
          topic: 'Find the Nouns',
          prompt: 'Find ALL the nouns in this sentence: "He borrowed a book from the library."',
          options: ['book, library', 'borrowed, from', 'He, borrowed', 'book, borrowed'],
          answer: 0,
          explain: '"book" (thing) and "library" (place) are the nouns!'
        }
      ]
    },

    // Pages 10 & 11 — Verbs (Action Words)
    {
      id: 'g-verbs',
      title: 'Action Verbs Hero',
      arTitle: 'بطل الأفعال والحركة',
      emoji: '⚡',
      trophy: { id: 'trophy-verbs', icon: '⚡', name: 'Action Hero', ar: 'بطل الأفعال' },
      questions: [
        { id: 'p10-q1', topic: 'Find the Verb', prompt: 'Which word is the verb (action word)? "The dog runs in the park."', options: ['dog', 'runs', 'park', 'the'], answer: 1, explain: '"runs" is an action word (verb)!' },
        { id: 'p10-q2', topic: 'Find the Verb', prompt: 'Which word is the verb (action word)? "She eats an apple."', options: ['She', 'eats', 'an', 'apple'], answer: 1, explain: '"eats" is an action word (verb)!' },
        { id: 'p10-q3', topic: 'Find the Verb', prompt: 'Which word is the verb (action word)? "We play with our toys."', options: ['We', 'play', 'our', 'toys'], answer: 1, explain: '"play" is an action word (verb)!' },
        { id: 'p10-q4', topic: 'Find the Verb', prompt: 'Which word is the verb (action word)? "He sleeps on the bed."', options: ['He', 'sleeps', 'on', 'bed'], answer: 1, explain: '"sleeps" is an action word (verb)!' },
        { id: 'p10-q5', topic: 'Find the Verb', prompt: 'Which word is the verb (action word)? "They jump over the rope."', options: ['They', 'jump', 'over', 'rope'], answer: 1, explain: '"jump" is an action word (verb)!' },
        { id: 'p10-q6', topic: 'Find the Verb', prompt: 'Which word is the verb (action word)? "I read a book."', options: ['I', 'read', 'a', 'book'], answer: 1, explain: '"read" is an action word (verb)!' },
        { id: 'p11-q1', topic: 'Complete with a Verb', prompt: 'The birds _______ in the sky.', options: ['fly', 'drink', 'draw', 'sing'], answer: 0, explain: 'Birds fly in the sky!' },
        { id: 'p11-q2', topic: 'Complete with a Verb', prompt: 'My friends _______ to school.', options: ['fly', 'go', 'drink', 'draw'], answer: 1, explain: 'My friends go to school!' },
        { id: 'p11-q3', topic: 'Complete with a Verb', prompt: 'The cats _______ the milk.', options: ['draw', 'fly', 'drink', 'sing'], answer: 2, explain: 'The cats drink the milk!' },
        { id: 'p11-q4', topic: 'Complete with a Verb', prompt: 'We _______ a song together.', options: ['sing', 'fly', 'drink', 'draw'], answer: 0, explain: 'We sing a song together!' },
        { id: 'p11-q5', topic: 'Complete with a Verb', prompt: 'They _______ a picture.', options: ['drink', 'go', 'fly', 'draw'], answer: 3, explain: 'They draw a picture!' }
      ]
    },

    // Pages 15 & 19 — Adjectives
    {
      id: 'g-adjectives',
      title: 'Amazing Adjectives',
      arTitle: 'الصفات الرائعة',
      emoji: '🎨',
      questions: [
        { id: 'p15-q1', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "The big dog is barking."', options: ['big', 'dog', 'barking', 'The'], answer: 0, explain: '"big" describes the dog — it is an adjective!' },
        { id: 'p15-q2', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "I have a red ball."', options: ['have', 'red', 'ball', 'I'], answer: 1, explain: '"red" tells us the colour of the ball — it is an adjective!' },
        { id: 'p15-q3', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "She wore a pretty dress."', options: ['wore', 'pretty', 'dress', 'She'], answer: 1, explain: '"pretty" describes the dress — it is an adjective!' },
        { id: 'p15-q4', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "The soft cat is sleeping."', options: ['soft', 'cat', 'sleeping', 'The'], answer: 0, explain: '"soft" describes the cat — it is an adjective!' },
        { id: 'p15-q5', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "He ate a sweet apple."', options: ['ate', 'sweet', 'apple', 'He'], answer: 1, explain: '"sweet" describes how the apple tastes — it is an adjective!' },
        { id: 'p19-q2', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "I have a red bag."', options: ['have', 'red', 'bag', 'I'], answer: 1, explain: '"red" describes the bag!' },
        { id: 'p19-q3', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "She has long hair."', options: ['She', 'has', 'long', 'hair'], answer: 2, explain: '"long" describes the hair!' },
        { id: 'p19-q4', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "The cake is sweet."', options: ['cake', 'is', 'sweet', 'The'], answer: 2, explain: '"sweet" describes the cake!' },
        { id: 'p19-q5', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "He is a tall boy."', options: ['He', 'tall', 'boy', 'is'], answer: 1, explain: '"tall" describes the boy!' },
        { id: 'p19-q6', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "I see two cats."', options: ['see', 'two', 'cats', 'I'], answer: 1, explain: 'Number words like "two" describe how many cats — "two" is an adjective!' },
        { id: 'p19-q7', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "The sky is blue."', options: ['sky', 'is', 'blue', 'The'], answer: 2, explain: '"blue" describes the sky!' },
        { id: 'p19-q8', topic: 'Find the Adjective', prompt: 'Which word is the adjective? "We have a new teacher."', options: ['have', 'new', 'teacher', 'We'], answer: 1, explain: '"new" describes the teacher!' }
      ]
    },

    // Pages 27 & 28 — Articles 'a' or 'an' (Sentences)
    {
      id: 'g-articles-1',
      title: "Articles: 'a' or 'an' (Sentences)",
      arTitle: "أدوات النكرة (a / an) في الجمل",
      emoji: '🍎',
      passage: {
        title: "Tip: 'a' or 'an'?",
        note: "Use 'an' before vowel sounds (a, e, i, o, u). Use 'a' before consonants.",
        lines: [
          'Vowels: a, e, i, o, u → an apple, an egg, an ice cream, an orange, an umbrella.',
          'Consonants: b, c, d, p, t... → a cat, a book, a pencil, a bird.'
        ]
      },
      questions: [
        { id: 'p27-q1', topic: "Articles 'a' or 'an'", prompt: 'I see ___ cat.', options: ['a', 'an'], answer: 0, explain: '"cat" starts with consonant c → a cat.' },
        { id: 'p27-q2', topic: "Articles 'a' or 'an'", prompt: 'She has ___ apple.', options: ['a', 'an'], answer: 1, explain: '"apple" starts with vowel a → an apple.' },
        { id: 'p27-q3', topic: "Articles 'a' or 'an'", prompt: 'He wants ___ ice cream.', options: ['a', 'an'], answer: 1, explain: '"ice cream" starts with vowel i → an ice cream.' },
        { id: 'p27-q4', topic: "Articles 'a' or 'an'", prompt: 'There is ___ book on the table.', options: ['a', 'an'], answer: 0, explain: '"book" starts with consonant b → a book.' },
        { id: 'p27-q5', topic: "Articles 'a' or 'an'", prompt: 'I need ___ umbrella.', options: ['a', 'an'], answer: 1, explain: '"umbrella" starts with vowel u → an umbrella.' },
        { id: 'p27-q6', topic: "Articles 'a' or 'an'", prompt: 'We saw ___ elephant at the zoo.', options: ['a', 'an'], answer: 1, explain: '"elephant" starts with vowel e → an elephant.' },
        { id: 'p28-q1', topic: "Circle 'a' or 'an'", prompt: 'I want ___ orange.', options: ['a', 'an'], answer: 1, explain: '"orange" starts with vowel o → an orange.' },
        { id: 'p28-q2', topic: "Circle 'a' or 'an'", prompt: 'She has ___ pencil.', options: ['a', 'an'], answer: 0, explain: '"pencil" starts with consonant p → a pencil.' },
        { id: 'p28-q3', topic: "Circle 'a' or 'an'", prompt: 'He ate ___ apple.', options: ['a', 'an'], answer: 1, explain: '"apple" starts with vowel a → an apple.' },
        { id: 'p28-q4', topic: "Circle 'a' or 'an'", prompt: 'We saw ___ bird.', options: ['a', 'an'], answer: 0, explain: '"bird" starts with consonant b → a bird.' },
        { id: 'p28-q5', topic: "Circle 'a' or 'an'", prompt: 'They need ___ eraser.', options: ['a', 'an'], answer: 1, explain: '"eraser" starts with vowel e → an eraser.' }
      ]
    },

    // Page 32 — Articles A / An (12-Item Sprint)
    {
      id: 'g-articles-2',
      title: "Articles: 'A' or 'An' Sprint",
      arTitle: "سباق أدوات النكرة (A / An)",
      emoji: '🥚',
      trophy: { id: 'trophy-articles', icon: '🍎', name: 'Vowel Master', ar: 'بطل الحروف المتحركة' },
      questions: [
        { id: 'p32-q1', topic: 'Articles', prompt: 'Choose the right article: ___ cat.', options: ['A', 'An'], answer: 0, explain: 'c is a consonant → A cat.' },
        { id: 'p32-q2', topic: 'Articles', prompt: 'Choose the right article: ___ elephant.', options: ['A', 'An'], answer: 1, explain: 'e is a vowel → An elephant.' },
        { id: 'p32-q3', topic: 'Articles', prompt: 'Choose the right article: ___ cake.', options: ['A', 'An'], answer: 0, explain: 'c is a consonant → A cake.' },
        { id: 'p32-q4', topic: 'Articles', prompt: 'Choose the right article: ___ candy.', options: ['A', 'An'], answer: 0, explain: 'c is a consonant → A candy.' },
        { id: 'p32-q5', topic: 'Articles', prompt: 'Choose the right article: ___ egg.', options: ['A', 'An'], answer: 1, explain: 'e is a vowel → An egg.' },
        { id: 'p32-q6', topic: 'Articles', prompt: 'Choose the right article: ___ tree.', options: ['A', 'An'], answer: 0, explain: 't is a consonant → A tree.' },
        { id: 'p32-q7', topic: 'Articles', prompt: 'Choose the right article: ___ eye.', options: ['A', 'An'], answer: 1, explain: 'e is a vowel → An eye.' },
        { id: 'p32-q8', topic: 'Articles', prompt: 'Choose the right article: ___ ball.', options: ['A', 'An'], answer: 0, explain: 'b is a consonant → A ball.' },
        { id: 'p32-q9', topic: 'Articles', prompt: 'Choose the right article: ___ book.', options: ['A', 'An'], answer: 0, explain: 'b is a consonant → A book.' },
        { id: 'p32-q10', topic: 'Articles', prompt: 'Choose the right article: ___ orange.', options: ['A', 'An'], answer: 1, explain: 'o is a vowel → An orange.' },
        { id: 'p32-q11', topic: 'Articles', prompt: 'Choose the right article: ___ eraser.', options: ['A', 'An'], answer: 1, explain: 'e is a vowel → An eraser.' },
        { id: 'p32-q12', topic: 'Articles', prompt: 'Choose the right article: ___ dog.', options: ['A', 'An'], answer: 0, explain: 'd is a consonant → A dog.' }
      ]
    },

    // Pages 20 & 21 — Capital Letters & Full Stops (Part 1)
    {
      id: 'g-caps-1',
      title: 'Capital Letters & Full Stops (1)',
      arTitle: 'الحروف الكبيرة والنقطة (١)',
      emoji: '✏️',
      questions: [
        {
          id: 'p20-q1',
          topic: 'Fix the Sentence',
          prompt: 'Add the missing capital letter and full stop: "the dog is running"',
          options: ['The dog is running.', 'the dog is running.', 'The dog is running', 'the Dog is running'],
          answer: 0,
          explain: 'Start with a capital T and end with a full stop (.) → The dog is running.'
        },
        {
          id: 'p20-q2',
          topic: 'Fix the Sentence',
          prompt: 'Add the missing capital letters and full stop: "my name is emma"',
          options: ['My name is Emma.', 'My name is emma', 'my name is Emma.', 'my name is emma.'],
          answer: 0,
          explain: 'Capital M at the start, capital E for the name Emma, and a full stop at the end!'
        },
        {
          id: 'p20-q3',
          topic: 'Fix the Sentence',
          prompt: 'Add the missing capital letter and full stop: "we play at the park"',
          options: ['We play at the park.', 'we play at the park.', 'We play at the park', 'we play at the Park'],
          answer: 0,
          explain: 'Capital W at the start and full stop (.) at the end!'
        },
        {
          id: 'p20-q4',
          topic: 'Fix the Sentence',
          prompt: 'Add the missing capital letter and full stop: "i have a red ball"',
          options: ['I have a red ball.', 'i have a red ball.', 'I have a red ball', 'i have a Red ball.'],
          answer: 0,
          explain: 'Pronoun "I" is always capital, and end with a full stop!'
        },
        {
          id: 'p20-q5',
          topic: 'Fix the Sentence',
          prompt: 'Add the missing capital letter and full stop: "the sun is shining"',
          options: ['The sun is shining.', 'the sun is shining.', 'The sun is shining', 'The Sun is Shining'],
          answer: 0,
          explain: 'Capital T at the start and a full stop at the end!'
        },
        { id: 'p21-c1', topic: 'Correct or Needs Fixing?', prompt: 'Is this sentence correct? "The sun is bright."', options: ['✓ Correct', '✗ Needs fixing'], answer: 0, explain: 'Starts with capital T and ends with a full stop — Correct!' },
        { id: 'p21-c2', topic: 'Correct or Needs Fixing?', prompt: 'Is this sentence correct? "i love my dog"', options: ['✓ Correct', '✗ Needs fixing'], answer: 1, explain: 'Needs fixing! Missing capital I and missing full stop.' },
        { id: 'p21-c3', topic: 'Correct or Needs Fixing?', prompt: 'Is this sentence correct? "We go to school."', options: ['✓ Correct', '✗ Needs fixing'], answer: 0, explain: 'Starts with capital W and ends with a full stop — Correct!' },
        { id: 'p21-c4', topic: 'Correct or Needs Fixing?', prompt: 'Is this sentence correct? "the cat is soft"', options: ['✓ Correct', '✗ Needs fixing'], answer: 1, explain: 'Needs fixing! Missing capital T and missing full stop.' },
        { id: 'p21-c5', topic: 'Correct or Needs Fixing?', prompt: 'Is this sentence correct? "My mum is happy."', options: ['✓ Correct', '✗ Needs fixing'], answer: 0, explain: 'Starts with capital M and ends with a full stop — Correct!' }
      ]
    },

    // Pages 21 (Ex 2), 25 & 61 (Ex 4) — Capital Letters & Full Stops (Part 2)
    {
      id: 'g-caps-2',
      title: 'Capital Letters & Full Stops (2)',
      arTitle: 'الحروف الكبيرة والنقطة (٢)',
      emoji: '🚌',
      questions: [
        { id: 'p21-r1', topic: 'Rewrite Correctly', prompt: 'Pick the correct sentence for: "the bird is singing"', options: ['The bird is singing.', 'the bird is singing.', 'The bird is singing', 'the Bird is singing.'], answer: 0, explain: 'Capital T + full stop → The bird is singing.' },
        { id: 'p21-r2', topic: 'Rewrite Correctly', prompt: 'Pick the correct sentence for: "we like ice cream"', options: ['We like ice cream.', 'we like ice cream.', 'We like ice cream', 'we like Ice cream'], answer: 0, explain: 'Capital W + full stop → We like ice cream.' },
        { id: 'p21-r3', topic: 'Rewrite Correctly', prompt: 'Pick the correct sentence for: "my friend is kind"', options: ['My friend is kind.', 'my friend is kind.', 'My friend is kind', 'my friend is Kind.'], answer: 0, explain: 'Capital M + full stop → My friend is kind.' },
        { id: 'p21-r4', topic: 'Rewrite Correctly', prompt: 'Pick the correct sentence for: "the flower is red"', options: ['The flower is red.', 'the flower is red.', 'The flower is red', 'the Flower is red'], answer: 0, explain: 'Capital T + full stop → The flower is red.' },
        { id: 'p21-r5', topic: 'Rewrite Correctly', prompt: 'Pick the correct sentence for: "she can run fast"', options: ['She can run fast.', 'she can run fast.', 'She can run fast', 'she Can run fast.'], answer: 0, explain: 'Capital S + full stop → She can run fast.' },
        { id: 'p25-q1', topic: 'Using Punctuation', prompt: 'Rewrite correctly: "a bus is at the bus stop"', options: ['A bus is at the bus stop.', 'a bus is at the bus stop.', 'A bus is at the bus stop', 'a Bus is at the bus stop.'], answer: 0, explain: 'Capital A + full stop → A bus is at the bus stop.' },
        { id: 'p25-q2', topic: 'Using Punctuation', prompt: 'Rewrite correctly: "it is a big red bus"', options: ['It is a big red bus.', 'it is a big red bus.', 'It is a big red bus', 'it is a Big red bus.'], answer: 0, explain: 'Capital I + full stop → It is a big red bus.' },
        { id: 'p25-q3', topic: 'Using Punctuation', prompt: 'Rewrite correctly: "i get on the bus"', options: ['I get on the bus.', 'i get on the bus.', 'I get on the bus', 'i Get on the bus.'], answer: 0, explain: 'Capital I + full stop → I get on the bus.' },
        { id: 'p25-q4', topic: 'Using Punctuation', prompt: 'Rewrite correctly: "i pay money for a ticket"', options: ['I pay money for a ticket.', 'i pay money for a ticket.', 'I pay money for a ticket', 'i pay Money for a ticket.'], answer: 0, explain: 'Capital I + full stop → I pay money for a ticket.' },
        { id: 'p25-q5', topic: 'Using Punctuation', prompt: 'Rewrite correctly: "i sit at the back of the bus"', options: ['I sit at the back of the bus.', 'i sit at the back of the bus.', 'I sit at the back of the bus', 'i sit at the Back of the bus.'], answer: 0, explain: 'Capital I + full stop → I sit at the back of the bus.' },
        { id: 'p25-q6', topic: 'Using Punctuation', prompt: 'Rewrite correctly: "the bus is fast"', options: ['The bus is fast.', 'the bus is fast.', 'The bus is fast', 'the Bus is fast.'], answer: 0, explain: 'Capital T + full stop → The bus is fast.' },
        { id: 'p61-f1', topic: 'Fix the Sentence', prompt: 'Fix this sentence: "my dog is happy"', options: ['My dog is happy.', 'my dog is happy.', 'My dog is happy', 'my Dog is happy'], answer: 0, explain: 'Capital M + full stop → My dog is happy.' },
        { id: 'p61-f2', topic: 'Fix the Sentence', prompt: 'Fix this sentence: "i like to play"', options: ['I like to play.', 'i like to play.', 'I like to play', 'i Like to play.'], answer: 0, explain: 'Capital I + full stop → I like to play.' },
        { id: 'p61-f3', topic: 'Fix the Sentence', prompt: 'Fix this sentence: "the sun is hot"', options: ['The sun is hot.', 'the sun is hot.', 'The sun is hot', 'the Sun is hot.'], answer: 0, explain: 'Capital T + full stop → The sun is hot.' }
      ]
    },

    // Page 46 — Capital Letters for Names, Days, Months and I
    {
      id: 'g-caps-names',
      title: 'Capitals for Names, Days & Months',
      arTitle: 'الحروف الكبيرة للأسماء والأيام والشهور',
      emoji: '📅',
      trophy: { id: 'trophy-caps', icon: '👑', name: 'Capital Captain', ar: 'قائد الحروف الكبيرة' },
      passage: {
        title: 'Capital Letters Rule',
        note: 'Use a capital letter for names, days of the week, months of the year, and the word I.',
        lines: [
          'Examples: Elsa, Mrs Green, Wednesday, September, I.'
        ]
      },
      questions: [
        { id: 'p46-q1', topic: 'Needs a Capital Letter?', prompt: 'Which word needs a capital letter?', options: ['tuesday', 'giraffe', 'down', 'car'], answer: 0, explain: 'Tuesday is a day of the week — it needs a capital T!' },
        { id: 'p46-q2', topic: 'Needs a Capital Letter?', prompt: 'Which word needs a capital letter?', options: ['yellow', 'martin', 'car', 'down'], answer: 1, explain: 'Martin is a person\'s name — it needs a capital M!' },
        { id: 'p46-q3', topic: 'Needs a Capital Letter?', prompt: 'Which word needs a capital letter?', options: ['giraffe', 'down', 'april', 'yellow'], answer: 2, explain: 'April is a month of the year — it needs a capital A!' },
        { id: 'p46-q4', topic: 'Needs a Capital Letter?', prompt: 'Which word ALWAYS needs a capital letter?', options: ['i', 'car', 'giraffe', 'down'], answer: 0, explain: 'The pronoun "I" always uses a capital letter!' },
        { id: 'p46-q5', topic: 'Needs a Capital Letter?', prompt: 'Which one needs capital letters?', options: ['mr tate', 'yellow', 'car', 'giraffe'], answer: 0, explain: 'Mr Tate is a person\'s name and title → Mr Tate!' },
        { id: 'p46-q6', topic: 'Needs a Capital Letter?', prompt: 'Which word needs a capital letter?', options: ['down', 'car', 'august', 'yellow'], answer: 2, explain: 'August is a month of the year — it needs a capital A!' },
        { id: 'p46-q7', topic: 'Complete with a Capital Letter', prompt: 'Complete the boy\'s name: ___eter', options: ['Peter', 'peter'], answer: 0, explain: 'Names always start with a capital letter → Peter!' },
        { id: 'p46-q8', topic: 'Complete with a Capital Letter', prompt: 'Complete the girl\'s name: ___ate', options: ['Kate', 'kate'], answer: 0, explain: 'Names always start with a capital letter → Kate!' },
        { id: 'p46-q9', topic: 'Complete with a Capital Letter', prompt: 'Complete the month: ___ecember', options: ['December', 'december'], answer: 0, explain: 'Months of the year start with a capital letter → December!' },
        { id: 'p46-q10', topic: 'Complete with a Capital Letter', prompt: 'Complete the month: ___uly', options: ['July', 'july'], answer: 0, explain: 'Months of the year start with a capital letter → July!' },
        {
          id: 'p46-q11',
          topic: 'Words Needing Capitals',
          prompt: 'From (sarah, june, eggs, robert, friday, castle), which group shows ONLY the words that need capital letters?',
          options: [
            'Sarah, June, Robert, Friday',
            'Eggs, Castle, Sarah, June',
            'Eggs, Castle, Friday, Robert',
            'Sarah, Eggs, Castle, June'
          ],
          answer: 0,
          explain: 'Sarah & Robert (names), June (month), and Friday (day) need capitals. "eggs" and "castle" do not!'
        }
      ]
    }
  ]
};
