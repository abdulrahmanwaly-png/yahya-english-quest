// World 1: Reading Kingdom — 100% strictly from Yahya's Year 1 Term 1 English worksheets
// Covers PDF pages: 1, 2, 6, 7, 8, 12, 13, 14, 17, 18, 23, 29, 31, 35, 39-40, 43-44 (dup 50-51), 47, 48, 54, 56-57, 62, 65 (Ex 1), 67-71

export const WORLD_READING = {
  id: 'reading',
  title: 'Reading Kingdom',
  arTitle: 'مملكة القراءة والقصص',
  icon: '📚',
  description: 'Stories, The Gingerbread Man, Animal Facts, Book Parts & Table of Contents',
  arDesc: 'القصص، رجل الزنجبيل، حقائق الحيوانات، أجزاء الكتاب وفهرس المحتويات',
  quests: [
    // Page 1 — Fun On The Bus
    {
      id: 'r-bus',
      title: 'Fun On The Bus',
      arTitle: 'رحلة الأتوبيس',
      emoji: '🚌',
      trophy: { id: 'trophy-bus', icon: '🚌', name: 'Bus Buddy', ar: 'بطل الأتوبيس' },
      passage: {
        title: 'Fun On The Bus',
        image: 'assets/img/bus.webp',
        lines: [
          'The cat and the dog sit on the bus.',
          'The sun is hot, so the cat has a hat.',
          'The pig and the fox run to the bus.',
          'They have fun in the sun.'
        ]
      },
      questions: [
        {
          id: 'p01-q1',
          topic: 'Reading Comprehension',
          prompt: 'The cat and the dog sit on the _______.',
          options: ['Hat', 'Bus', 'Sun'],
          answer: 1,
          explain: 'The story says: "The cat and the dog sit on the bus."'
        },
        {
          id: 'p01-q2',
          topic: 'Reading Comprehension',
          prompt: 'The sun is _______.',
          options: ['Hot', 'Fun', 'Hat'],
          answer: 0,
          explain: 'The story says: "The sun is hot, so the cat has a hat."'
        },
        {
          id: 'p01-q3',
          topic: 'Reading Comprehension',
          prompt: 'The pig and the fox run to the _______.',
          options: ['Sun', 'Cat', 'Bus'],
          answer: 2,
          explain: 'The story says: "The pig and the fox run to the bus."'
        },
        {
          id: 'p01-q4',
          topic: 'Reading Comprehension',
          prompt: 'They have fun in the _______.',
          options: ['Sun', 'Bag', 'Jam'],
          answer: 0,
          explain: 'The story says: "They have fun in the sun."'
        }
      ]
    },

    // Page 2 — At The Pond
    {
      id: 'r-pond',
      title: 'At The Pond',
      arTitle: 'عند البركة',
      emoji: '🐸',
      trophy: { id: 'trophy-pond', icon: '🪷', name: 'Pond Explorer', ar: 'مستكشف البركة' },
      passage: {
        title: 'AT THE POND',
        image: 'assets/img/pond.webp',
        lines: [
          'A fat rat has a red bag.',
          'It has a pen in the bag.',
          'The rat sits on a log.',
          'The bag fell in the pond.',
          'The rat got a rug.',
          'It put the bag on the rug.'
        ]
      },
      questions: [
        {
          id: 'p02-q1',
          topic: 'Reading Comprehension',
          prompt: 'The bag is _______.',
          options: ['Yellow', 'Green', 'Red'],
          answer: 2,
          explain: 'The story says: "A fat rat has a red bag."'
        },
        {
          id: 'p02-q2',
          topic: 'Reading Comprehension',
          prompt: 'It has a _______ in the bag.',
          options: ['Pond', 'Log', 'Pen'],
          answer: 2,
          explain: 'The story says: "It has a pen in the bag."'
        },
        {
          id: 'p02-q3',
          topic: 'Reading Comprehension',
          prompt: 'The bag fell in the _______.',
          options: ['Pond', 'Sun', 'Pen'],
          answer: 0,
          explain: 'The story says: "The bag fell in the pond."'
        },
        {
          id: 'p02-q4',
          topic: 'Reading Comprehension',
          prompt: 'The rat put the bag on the _______.',
          options: ['Rug', 'Pond', 'Log'],
          answer: 0,
          explain: 'The story says: "It put the bag on the rug."'
        }
      ]
    },

    // Page 14 — The Hen and the Pen
    {
      id: 'r-hen',
      title: 'The Hen and the Pen',
      arTitle: 'الدجاجة والقلم',
      emoji: '🐔',
      passage: {
        title: 'THE HEN AND THE PEN',
        image: 'assets/img/hen.webp',
        lines: [
          'The hen and the cat sit on a mat.',
          'The hen has a pen.',
          'The dog and the pig run to the mat.',
          'They have fun and sit on the mat.'
        ]
      },
      questions: [
        {
          id: 'p14-q1',
          topic: 'Reading Comprehension',
          prompt: 'The hen and the cat sit on the _______.',
          options: ['Pen', 'Mat', 'Pig'],
          answer: 1,
          explain: 'The story says: "The hen and the cat sit on a mat."'
        },
        {
          id: 'p14-q2',
          topic: 'Reading Comprehension',
          prompt: 'The hen has a _______.',
          options: ['Pen', 'Dog', 'Cat'],
          answer: 0,
          explain: 'The story says: "The hen has a pen."'
        },
        {
          id: 'p14-q3',
          topic: 'Reading Comprehension',
          prompt: 'The dog and the pig run to the _______.',
          options: ['Mat', 'Hen', 'Sun'],
          answer: 0,
          explain: 'The story says: "The dog and the pig run to the mat."'
        },
        {
          id: 'p14-q4',
          topic: 'Reading Comprehension',
          prompt: 'They have fun and sit on the _______.',
          options: ['Mat', 'Bag', 'Jam'],
          answer: 0,
          explain: 'The story says: "They have fun and sit on the mat."'
        }
      ]
    },

    // Page 23 — The Lost Doll
    {
      id: 'r-doll',
      title: 'The Lost Doll',
      arTitle: 'الدمية المفقودة',
      emoji: '🧸',
      passage: {
        title: 'The Lost Doll',
        image: 'assets/img/doll.webp',
        lines: [
          'Tess has a mess in her room. She cannot find her doll.',
          'She looks behind the big bell.',
          'Tess puts on her dress. She goes off to the garden.',
          'She hears a loud buzz. A bee is on a thin leaf.',
          'Next to the bee, Tess finds her doll.',
          'The doll looks ill.'
        ]
      },
      questions: [
        {
          id: 'p23-q1',
          topic: 'Reading Comprehension',
          prompt: 'Tess cannot find her _______.',
          options: ['Bag', 'Doll', 'Bell'],
          answer: 1,
          explain: 'The story says: "She cannot find her doll."'
        },
        {
          id: 'p23-q2',
          topic: 'Reading Comprehension',
          prompt: 'Tess puts on her _______.',
          options: ['Dress', 'Glasses', 'Ring'],
          answer: 0,
          explain: 'The story says: "Tess puts on her dress."'
        },
        {
          id: 'p23-q3',
          topic: 'Reading Comprehension',
          prompt: 'What makes a buzz sound?',
          options: ['The bee', 'The bell', 'The leaf'],
          answer: 0,
          explain: 'The story says: "She hears a loud buzz. A bee is on a thin leaf."'
        },
        {
          id: 'p23-q4',
          topic: 'Reading Comprehension',
          prompt: 'Tess finds her doll _______.',
          options: ['Next to the bell', 'Next to the bee', 'Next to the doll'],
          answer: 1,
          explain: 'The story says: "Next to the bee, Tess finds her doll."'
        }
      ]
    },

    // Page 29 — A Day in My Life (Familiar Settings)
    {
      id: 'r-day',
      title: 'A Day in My Life',
      arTitle: 'يوم في حياتي',
      emoji: '🏫',
      passage: {
        title: 'A Day in My Life',
        note: 'Familiar means something we know well. Settings are the places where a story happens.',
        lines: [
          'I wake up at home.',
          'I eat my breakfast.',
          'I go to school with my bag.',
          'I sit in my class and learn new things.',
          'I play in the playground with my friends. We run and have fun.',
          'I feel ill, so I go to the clinic.',
          'I go back home and rest.'
        ]
      },
      questions: [
        {
          id: 'p29-q1',
          topic: 'Story Order',
          prompt: 'Look at this picture from the story. What number order is eating breakfast?',
          image: 'assets/img/day-breakfast.webp',
          options: ['1st (First)', '2nd (Second)', '3rd (Third)', '4th (Fourth)'],
          answer: 0,
          explain: 'First in the story: "I wake up at home. I eat my breakfast."'
        },
        {
          id: 'p29-q2',
          topic: 'Story Order',
          prompt: 'Look at this picture. What number order is going to school with a bag?',
          image: 'assets/img/day-school.webp',
          options: ['1st (First)', '2nd (Second)', '3rd (Third)', '4th (Fourth)'],
          answer: 1,
          explain: 'Second in the story: "I go to school with my bag."'
        },
        {
          id: 'p29-q3',
          topic: 'Story Order',
          prompt: 'Look at this picture. What number order is playing in the playground?',
          image: 'assets/img/day-playground.webp',
          options: ['1st (First)', '2nd (Second)', '3rd (Third)', '4th (Fourth)'],
          answer: 2,
          explain: 'Third in the story: "I play in the playground with my friends."'
        },
        {
          id: 'p29-q4',
          topic: 'Story Order',
          prompt: 'Look at this picture. What number order is going to the clinic?',
          image: 'assets/img/day-clinic.webp',
          options: ['1st (First)', '2nd (Second)', '3rd (Third)', '4th (Fourth)'],
          answer: 3,
          explain: 'Fourth in the story: "I feel ill, so I go to the clinic."'
        },
        {
          id: 'p29-q5',
          topic: 'Familiar Settings',
          prompt: 'Which group shows 3 familiar settings from "A Day in My Life"?',
          options: [
            'home, school, playground',
            'ocean, jungle, desert',
            'castle, dragon cave, moon',
            'zoo, beach, mountain'
          ],
          answer: 0,
          explain: 'The familiar settings in the story are home, school (class), playground, and clinic.'
        },
        {
          id: 'p29-q6',
          topic: 'Story Settings',
          prompt: 'What are "Settings" in a story?',
          options: [
            'The places where a story happens',
            'The names of the animals',
            'The numbers on the pages',
            'The action words in a sentence'
          ],
          answer: 0,
          explain: 'Settings are the places where a story happens, and familiar means something we know well.'
        }
      ]
    },

    // Page 35 — A Fun Day at the Beach
    {
      id: 'r-beach',
      title: 'A Fun Day at the Beach',
      arTitle: 'يوم ممتع على الشاطئ',
      emoji: '🏖️',
      passage: {
        title: 'A Fun Day at the Beach',
        image: 'assets/img/beach.webp',
        lines: [
          'I went to the beach with my friend Sarah. Sarah saw a big ship in the sea.',
          'We went to a small shop near the sand. I looked at the shelf and I found a pretty shell. We caught a fish by the water and put it on a dish.',
          'I made a wish that I could come here again.',
          'We put our trash in the bin before we go home.',
          'It was a fun day at the beach.'
        ]
      },
      questions: [
        {
          id: 'p35-q1',
          topic: 'Story Characters',
          prompt: 'Who are the 2 characters from the story?',
          options: [
            'I (the narrator) and Sarah',
            'Tom and Kate',
            'The cat and the dog',
            'The fox and the horse'
          ],
          answer: 0,
          explain: 'The story starts: "I went to the beach with my friend Sarah."'
        },
        {
          id: 'p35-q2',
          topic: 'Story Setting',
          prompt: 'What is the setting of the story?',
          options: ['The beach', 'The school', 'The forest', 'The clinic'],
          answer: 0,
          explain: 'The story takes place at the beach!'
        },
        {
          id: 'p35-q3',
          topic: 'True or False',
          prompt: 'True or False: The story took place at the school.',
          options: ['True (✓)', 'False (✗)'],
          answer: 1,
          explain: 'False! The story took place at the beach, not at the school.'
        },
        {
          id: 'p35-q4',
          topic: 'True or False',
          prompt: 'True or False: Sarah saw a big ship in the sea.',
          options: ['True (✓)', 'False (✗)'],
          answer: 0,
          explain: 'True! The text says: "Sarah saw a big ship in the sea."'
        },
        {
          id: 'p35-q5',
          topic: 'True or False',
          prompt: 'True or False: They saw a cat on the shelf.',
          options: ['True (✓)', 'False (✗)'],
          answer: 1,
          explain: 'False! They found a pretty shell on the shelf, not a cat.'
        },
        {
          id: 'p35-q6',
          topic: 'True or False',
          prompt: 'True or False: They put the trash in the sea.',
          options: ['True (✓)', 'False (✗)'],
          answer: 1,
          explain: 'False! They put their trash in the bin before going home.'
        }
      ]
    },

    // Pages 31 & 39-40 — The Gingerbread Man Part 1
    {
      id: 'r-gbm-1',
      title: 'Gingerbread Man: The Chase',
      arTitle: 'رجل الزنجبيل: المطاردة',
      emoji: '🍪',
      trophy: { id: 'trophy-gbm', icon: '🍪', name: 'Fast Runner', ar: 'أسرع عدّاء' },
      passage: {
        title: 'The Gingerbread Man',
        lines: [
          'One day, an old woman made a gingerbread man.',
          'When she opened the oven, the gingerbread man jumped out and ran away!',
          'He ran past the old woman, who shouted, "Stop! Come back!"',
          'But the gingerbread man said, "Run, run, as fast as you can! You can\'t catch me, I\'m the Gingerbread Man!"',
          'Next, he ran past a cow. The cow said, "Stop! Come here! You look tasty!"',
          'But the gingerbread man laughed and ran faster.',
          'Then, he ran past a horse. The horse said, "Stop! Come here! I want to eat you!"',
          'But the gingerbread man was too fast.'
        ]
      },
      questions: [
        {
          id: 'p31-q1',
          topic: 'The Gingerbread Man',
          prompt: 'Which animal does the gingerbread man see first in this extract?',
          options: ['A horse', 'A cow', 'A cat'],
          answer: 1,
          explain: 'First he runs past a cow, and then he meets a horse.'
        },
        {
          id: 'p31-q2',
          topic: 'The Gingerbread Man',
          prompt: 'What does the cow say?',
          options: ['"Stop! Come here!"', '"Goodbye!"', '"Let\'s play!"'],
          answer: 0,
          explain: 'The cow shouts "Stop! Come here!" to catch the gingerbread man.'
        },
        {
          id: 'p31-q3',
          topic: 'The Gingerbread Man',
          prompt: 'What does the cow want to do?',
          options: ['Eat the gingerbread man', 'Give him a present', 'Ride with him'],
          answer: 0,
          explain: 'The cow thinks he looks tasty and wants to eat the gingerbread man.'
        },
        {
          id: 'p31-q4',
          topic: 'The Gingerbread Man',
          prompt: 'What does the gingerbread man do when the cow chases him?',
          options: ['He stops', 'He runs faster', 'He sits down'],
          answer: 1,
          explain: 'He laughs and runs faster so the cow cannot catch him!'
        },
        {
          id: 'p31-q5',
          topic: 'The Gingerbread Man',
          prompt: 'Which animal does the gingerbread man see on page 10 (after the cow)?',
          options: ['A horse', 'A sheep', 'A duck'],
          answer: 0,
          explain: 'After the cow, he runs past a horse.'
        },
        {
          id: 'p31-q6',
          topic: 'The Gingerbread Man',
          prompt: 'What does the horse say?',
          options: ['"I am hungry!"', '"Stop! Come here! I want to eat you."', '"Run away!"'],
          answer: 1,
          explain: 'The horse says: "Stop! Come here! I want to eat you."'
        },
        {
          id: 'p31-q7',
          topic: 'The Gingerbread Man',
          prompt: 'Who runs after the gingerbread man?',
          options: ['The cow and the horse', 'Only a butterfly', 'Nobody'],
          answer: 0,
          explain: 'Both the cow and the horse chase after the gingerbread man!'
        },
        {
          id: 'p39-q1',
          topic: 'The Gingerbread Man',
          prompt: 'Who made the gingerbread man?',
          options: ['An old woman', 'A cow', 'A little boy', 'A fox'],
          answer: 0,
          explain: 'The story starts: "One day, an old woman made a gingerbread man."'
        },
        {
          id: 'p40-q3',
          topic: 'The Gingerbread Man',
          prompt: 'Did the horse catch the gingerbread man?',
          options: ['No, he was too fast.', 'Yes, the horse caught him.'],
          answer: 0,
          explain: 'No! The story says: "But the gingerbread man was too fast."'
        },
        {
          id: 'p40-q4',
          topic: 'The Gingerbread Man',
          prompt: 'What did the gingerbread man shout when he ran away?',
          options: [
            '"Run, run, as fast as you can! You can\'t catch me, I\'m the Gingerbread Man!"',
            '"Stop! Come back!"',
            '"Hello! Do you need help?"',
            '"I am going to sleep now!"'
          ],
          answer: 0,
          explain: 'His famous chant is: "Run, run, as fast as you can! You can\'t catch me, I\'m the Gingerbread Man!"'
        },
        {
          id: 'p40-q5',
          topic: 'The Gingerbread Man',
          prompt: 'Who was the first person he ran away from?',
          options: ['The old woman', 'The horse', 'The fox', 'The cow'],
          answer: 0,
          explain: 'When she opened the oven, he jumped out and ran past the old woman first!'
        }
      ]
    },

    // Pages 43-44 (dup 50-51), 56-57, and 65 Ex 1 — The Gingerbread Man Part 2
    {
      id: 'r-gbm-2',
      title: 'Gingerbread Man: Fox & River',
      arTitle: 'رجل الزنجبيل: الثعلب والنهر',
      emoji: '🦊',
      passage: {
        title: 'The Gingerbread Man — Up to the Horse and the Fox',
        lines: [
          'An old woman and an old man lived in a little house. One day, the old woman made a Gingerbread Man.',
          'When she opened the oven door, out jumped the Gingerbread Man!',
          'He ran out of the house shouting, "Run, run, as fast as you can! You can\'t catch me, I\'m the Gingerbread Man!"',
          'The old woman and the old man ran after him, but he was too fast!',
          'On the road, he met a cow. "Stop, little man! I want to eat you!" said the cow.',
          'Next, he met a horse. "Stop, little man! I want to eat you!" said the horse.',
          'Then, he came to a river and met a fox. The fox smiled and said, "Hello, Gingerbread Man. Do you need help to cross the river?"',
          'The Gingerbread Man stopped and looked at the fox.'
        ]
      },
      questions: [
        {
          id: 'p56-q1',
          topic: 'The Gingerbread Man',
          prompt: 'Who lived in the little house?',
          options: [
            'An old woman and an old man',
            'A cow and a horse',
            'A fox and a bear',
            'Sarah and Tess'
          ],
          answer: 0,
          explain: 'The story begins: "An old woman and an old man lived in a little house."'
        },
        {
          id: 'p56-q4',
          topic: 'The Gingerbread Man',
          prompt: 'Who did the Gingerbread Man meet on the road?',
          options: ['A cow and a horse', 'A tiger and an elephant', 'A dolphin and a giraffe', 'A hen and a pig'],
          answer: 0,
          explain: 'On the road, he met a cow and then a horse!'
        },
        {
          id: 'p44-q4',
          topic: 'The Gingerbread Man',
          prompt: 'What did the fox say to the Gingerbread Man at the river?',
          options: [
            '"Hello, Gingerbread Man. Do you need help to cross the river?"',
            '"Stop! Come back to the oven!"',
            '"I am sleeping on the grass."',
            '"Give me your hat!"'
          ],
          answer: 0,
          explain: 'The fox smiled and asked: "Hello, Gingerbread Man. Do you need help to cross the river?"'
        },
        {
          id: 'p44-q5',
          topic: 'Event Order (1–4)',
          prompt: 'What is the correct order (1 to 4) of the story events?',
          options: [
            '1. Old woman made him → 2. Met cow → 3. Met horse → 4. Met fox',
            '1. Met fox → 2. Met horse → 3. Met cow → 4. Old woman made him',
            '1. Old woman made him → 2. Met horse → 3. Met fox → 4. Met cow',
            '1. Met cow → 2. Old woman made him → 3. Met fox → 4. Met horse'
          ],
          answer: 0,
          explain: 'Order: 1. Made by the old woman, 2. Met the cow, 3. Met the horse, 4. Met the fox.'
        },
        {
          id: 'p65-q1',
          topic: 'What Do They Say?',
          prompt: 'Look at picture 1. Complete what the Gingerbread Man says: "You _______ catch me."',
          image: 'assets/img/gbm-1.webp',
          options: ["can't", 'swim', 'talk', 'eat'],
          answer: 0,
          explain: 'The Gingerbread Man shouts: "You can\'t catch me."'
        },
        {
          id: 'p65-q2',
          topic: 'What Do They Say?',
          prompt: 'Look at picture 2. Complete what the horse says: "I want to _______ you."',
          image: 'assets/img/gbm-2.webp',
          options: ['eat', 'swim', 'talk', 'jump'],
          answer: 0,
          explain: 'The horse chases him and says: "I want to eat you."'
        },
        {
          id: 'p65-q3',
          topic: 'What Do They Say?',
          prompt: 'Look at picture 3. Complete what the fox says: "I want to _______ to you."',
          image: 'assets/img/gbm-3.webp',
          options: ['talk', 'swim', 'eat', 'catch'],
          answer: 0,
          explain: 'The fox tricks him by saying: "I want to talk to you."'
        },
        {
          id: 'p65-q4',
          topic: 'What Do They Say?',
          prompt: 'Look at picture 4 at the river. Complete what the Gingerbread Man says: "I can\'t _______!"',
          image: 'assets/img/gbm-4.webp',
          options: ['swim', 'run', 'eat', 'talk'],
          answer: 0,
          explain: 'He stops at the river because he is made of gingerbread: "I can\'t swim!"'
        }
      ]
    },

    // Page 47 — The Big Polar Bear (Information Text)
    {
      id: 'r-polar-bear',
      title: 'The Big Polar Bear',
      arTitle: 'الدب القطبي الكبير',
      emoji: '🐻‍❄️',
      passage: {
        title: 'The Big Polar Bear',
        image: 'assets/img/polar-bear.webp',
        lines: [
          'The big, black polar bear lives in a cold place.',
          'It has thick, white fur.',
          'The fluffy bear walks on the soft snow.',
          'It has strong legs and big paws.',
          'The baby is called a cub.',
          'The little cub has soft, white fur.',
          'The hungry bear looks for food.',
          'It finds a small fish in the icy water.',
          'The bear and the cub eat the fish.'
        ]
      },
      questions: [
        {
          id: 'p47-q1',
          topic: 'Information Text',
          prompt: 'The polar bear lives in _______.',
          options: ['A warm place', 'A cold place'],
          answer: 1,
          explain: 'The text says: "The big, black polar bear lives in a cold place."'
        },
        {
          id: 'p47-q2',
          topic: 'Information Text',
          prompt: 'The baby bear is called _______.',
          options: ['A cub', 'A cat'],
          answer: 0,
          explain: 'The text says: "The baby is called a cub."'
        },
        {
          id: 'p47-q3',
          topic: 'Information Text',
          prompt: 'The little cub has soft _______ fur.',
          options: ['White', 'Red'],
          answer: 0,
          explain: 'The text says: "The little cub has soft, white fur."'
        },
        {
          id: 'p47-q4',
          topic: 'Information Text',
          prompt: 'The bear finds a small _______.',
          options: ['Dog', 'Fish'],
          answer: 1,
          explain: 'The text says: "It finds a small fish in the icy water."'
        },
        {
          id: 'p47-q5',
          topic: 'Adjectives in the Text',
          prompt: 'Which pair are 2 adjectives from "The Big Polar Bear"?',
          options: ['thick, fluffy', 'bear, snow', 'walks, eat', 'cub, fish'],
          answer: 0,
          explain: '"thick" and "fluffy" are adjectives (describing words) used in the text!'
        }
      ]
    },

    // Page 54 — All About Dolphins (Information Text)
    {
      id: 'r-dolphins',
      title: 'All About Dolphins',
      arTitle: 'كل شيء عن الدلافين',
      emoji: '🐬',
      passage: {
        title: 'All About Dolphins',
        image: 'assets/img/dolphins.webp',
        lines: [
          'Dolphins live in the ocean.',
          'They have smooth, grey skin.',
          'Dolphins swim in deep water.',
          'They have strong tails and long noses.',
          'A baby dolphin is called a calf.',
          'The little calf has smooth, grey skin.',
          'Dolphins look for food in the water.',
          'They eat fish and other small sea animals.',
          'Dolphins are intelligent animals.'
        ]
      },
      questions: [
        {
          id: 'p54-q1',
          topic: 'Information Text',
          prompt: 'The dolphin lives in _______.',
          options: ['The desert', 'The ocean'],
          answer: 1,
          explain: 'The text says: "Dolphins live in the ocean."'
        },
        {
          id: 'p54-q2',
          topic: 'Information Text',
          prompt: 'The baby dolphin is called _______.',
          options: ['A calf', 'A puppy'],
          answer: 0,
          explain: 'The text says: "A baby dolphin is called a calf."'
        },
        {
          id: 'p54-q3',
          topic: 'Information Text',
          prompt: 'The little calf has smooth _______ skin.',
          options: ['Grey', 'Green'],
          answer: 0,
          explain: 'The text says: "The little calf has smooth, grey skin."'
        },
        {
          id: 'p54-q4',
          topic: 'Information Text',
          prompt: 'The dolphin finds a small _______.',
          options: ['Bird', 'Fish'],
          answer: 1,
          explain: 'The text says: "They eat fish and other small sea animals."'
        },
        {
          id: 'p54-q5',
          topic: 'Adjectives in the Text',
          prompt: 'Which pair are 2 adjectives from "All About Dolphins"?',
          options: ['smooth, intelligent', 'ocean, tails', 'swim, eat', 'calf, water'],
          answer: 0,
          explain: '"smooth" and "intelligent" are adjectives that describe the dolphins!'
        }
      ]
    },

    // Page 62 — The Tall Giraffe (Information Text)
    {
      id: 'r-giraffe',
      title: 'The Tall Giraffe',
      arTitle: 'الزرافة الطويلة',
      emoji: '🦒',
      trophy: { id: 'trophy-animals', icon: '🦁', name: 'Animal Fact Pro', ar: 'خبير الحيوانات' },
      passage: {
        title: 'The Tall Giraffe',
        image: 'assets/img/giraffe.webp',
        lines: [
          'The tall giraffe lives in the grassland.',
          'It has a long neck and brown spots.',
          'The giraffe walks on the dry ground.',
          'It has strong legs and big eyes.',
          'The baby is called a calf.',
          'The little calf has short horns and brown spots.',
          'The hungry giraffe looks for food.',
          'It finds fresh leaves on a tree.'
        ]
      },
      questions: [
        {
          id: 'p62-q1',
          topic: 'Information Text',
          prompt: 'The giraffe lives in _______.',
          options: ['The grassland', 'The sea'],
          answer: 0,
          explain: 'The text says: "The tall giraffe lives in the grassland."'
        },
        {
          id: 'p62-q2',
          topic: 'Information Text',
          prompt: 'The baby giraffe is called _______.',
          options: ['A calf', 'A cub'],
          answer: 0,
          explain: 'The text says: "The baby is called a calf."'
        },
        {
          id: 'p62-q3',
          topic: 'Information Text',
          prompt: 'The little calf has _______ spots.',
          options: ['Brown', 'Blue'],
          answer: 0,
          explain: 'The text says: "The little calf has short horns and brown spots."'
        },
        {
          id: 'p62-q4',
          topic: 'Information Text',
          prompt: 'The giraffe finds fresh _______.',
          options: ['Leaves', 'Fish'],
          answer: 0,
          explain: 'The text says: "It finds fresh leaves on a tree."'
        },
        {
          id: 'p62-q5',
          topic: 'Adjectives in the Text',
          prompt: 'Which pair are 2 adjectives from "The Tall Giraffe"?',
          options: ['tall, brown', 'giraffe, tree', 'walks, finds', 'calf, leaves'],
          answer: 0,
          explain: '"tall" and "brown" are adjectives from the text!'
        }
      ]
    },

    // Page 17 — Fiction vs Non-Fiction (Titles & Rules)
    {
      id: 'r-fiction-1',
      title: 'Fiction vs Non-Fiction (Titles)',
      arTitle: 'خيالي أم حقيقي؟ (العناوين)',
      emoji: '🧙',
      passage: {
        title: "Don't Forget!",
        note: 'Fiction = made up stories. Non-Fiction = real facts.',
        lines: [
          'Fiction tells us about made-up stories (talking animals, magic, fairy tales).',
          'Non-Fiction gives us real facts about the real world.'
        ]
      },
      questions: [
        { id: 'p17-q1', topic: 'Fiction vs Non-Fiction', prompt: 'Book title: "The Three Billy Goats"', options: ['Fiction', 'Non-Fiction'], answer: 0, explain: 'It is a made-up fairy tale story, so it is Fiction!' },
        { id: 'p17-q2', topic: 'Fiction vs Non-Fiction', prompt: 'Book title: "All About Sharks"', options: ['Fiction', 'Non-Fiction'], answer: 1, explain: 'It gives real facts about sharks, so it is Non-Fiction!' },
        { id: 'p17-q3', topic: 'Fiction vs Non-Fiction', prompt: 'Book title: "Jack and the Magic Beans"', options: ['Fiction', 'Non-Fiction'], answer: 0, explain: 'Magic beans are made up, so it is Fiction!' },
        { id: 'p17-q4', topic: 'Fiction vs Non-Fiction', prompt: 'Book title: "How Volcanoes Work"', options: ['Fiction', 'Non-Fiction'], answer: 1, explain: 'It explains real facts about volcanoes, so it is Non-Fiction!' },
        { id: 'p17-q5', topic: 'Fiction vs Non-Fiction', prompt: 'Book title: "The Talking Cat"', options: ['Fiction', 'Non-Fiction'], answer: 0, explain: 'Real cats cannot talk! It is a made-up Fiction story.' },
        { id: 'p17-q6', topic: 'Fiction vs Non-Fiction', prompt: 'Book title: "Our Solar System"', options: ['Fiction', 'Non-Fiction'], answer: 1, explain: 'Our Solar System is real facts about space — Non-Fiction!' },
        { id: 'p17-q7', topic: 'Fiction vs Non-Fiction', prompt: 'Book title: "The Princess and the Dragon"', options: ['Fiction', 'Non-Fiction'], answer: 0, explain: 'Dragons are make-believe, so it is Fiction!' },
        { id: 'p17-q8', topic: 'Fiction vs Non-Fiction', prompt: 'Book title: "Life Cycle of a Butterfly"', options: ['Fiction', 'Non-Fiction'], answer: 1, explain: 'It teaches real science facts about butterflies — Non-Fiction!' },
        { id: 'p17-q9', topic: 'Fiction vs Non-Fiction', prompt: 'A book about real animals is:', options: ['Fiction', 'Non-Fiction'], answer: 1, explain: 'Real animals = real facts = Non-Fiction!' },
        { id: 'p17-q10', topic: 'Fiction vs Non-Fiction', prompt: 'A story about a flying dog is:', options: ['Fiction', 'Non-Fiction'], answer: 0, explain: 'A flying dog is made up = Fiction!' },
        { id: 'p17-q11', topic: 'Fiction vs Non-Fiction', prompt: 'A book about how plants grow is:', options: ['Fiction', 'Non-Fiction'], answer: 1, explain: 'How plants grow is real facts = Non-Fiction!' },
        { id: 'p17-q12', topic: 'Fiction vs Non-Fiction', prompt: 'A fairy tale about a prince is:', options: ['Fiction', 'Non-Fiction'], answer: 0, explain: 'A fairy tale is made up = Fiction!' }
      ]
    },

    // Pages 18 & 67 — Fiction vs Non-Fiction (Book Covers & Real Facts)
    {
      id: 'r-fiction-2',
      title: 'Book Covers: Real or Make-Believe?',
      arTitle: 'أغلفة الكتب: حقيقة أم خيال؟',
      emoji: '🦈',
      questions: [
        { id: 'p18-q1', topic: 'Look at the Book Cover', prompt: 'Is "The Flying Elephant" Fiction or Non-Fiction?', image: 'assets/img/fn-elephant.webp', options: ['Fiction', 'Non-Fiction'], answer: 0, explain: 'Real elephants cannot fly! This book is Fiction.' },
        { id: 'p18-q2', topic: 'Look at the Book Cover', prompt: 'Is "All About Sharks" Fiction or Non-Fiction?', image: 'assets/img/fn-sharks.webp', options: ['Fiction', 'Non-Fiction'], answer: 1, explain: 'A real photograph and real facts about sharks = Non-Fiction!' },
        { id: 'p18-q3', topic: 'Look at the Book Cover', prompt: 'Is "The Magic Tree House" Fiction or Non-Fiction?', image: 'assets/img/fn-treehouse.webp', options: ['Fiction', 'Non-Fiction'], answer: 0, explain: 'A magic tree house is made up = Fiction!' },
        { id: 'p18-q4', topic: 'Look at the Book Cover', prompt: 'Is "How Birds Fly" Fiction or Non-Fiction?', image: 'assets/img/fn-birds.webp', options: ['Fiction', 'Non-Fiction'], answer: 1, explain: 'Real bird photo explaining how birds fly = Non-Fiction!' },
        { id: 'p18-q5', topic: 'Look at the Book Cover', prompt: 'Is "The Singing Fish" Fiction or Non-Fiction?', image: 'assets/img/fn-fish.webp', options: ['Fiction', 'Non-Fiction'], answer: 0, explain: 'A fish singing into a microphone is made up = Fiction!' },
        { id: 'p18-q6', topic: 'Look at the Book Cover', prompt: 'Is "Weather Around Us" Fiction or Non-Fiction?', image: 'assets/img/fn-weather.webp', options: ['Fiction', 'Non-Fiction'], answer: 1, explain: 'Weather Around Us teaches real facts about weather = Non-Fiction!' },
        { id: 'p67-q1', topic: 'Real Fact or Make-Believe?', prompt: 'Book Topic: "A green dragon that breathes magical sparks"', options: ['Story (Fiction)', 'Information (Non-Fiction)'], answer: 0, explain: 'A magical dragon is made up — Story (Fiction)!' },
        { id: 'p67-q2', topic: 'Real Fact or Make-Believe?', prompt: 'Book Topic: "How a tiny seed grows into a tall sunflower"', options: ['Story (Fiction)', 'Information (Non-Fiction)'], answer: 1, explain: 'How seeds grow is real facts — Information (Non-Fiction)!' },
        { id: 'p67-q3', topic: 'Real Fact or Make-Believe?', prompt: 'Book Topic: "A talking cat who drives a red bus"', options: ['Story (Fiction)', 'Information (Non-Fiction)'], answer: 0, explain: 'A talking cat driving a bus is made up — Story (Fiction)!' },
        { id: 'p67-q4', topic: 'Real Fact or Make-Believe?', prompt: 'Book Topic: "Real facts about desert animals in Egypt"', options: ['Story (Fiction)', 'Information (Non-Fiction)'], answer: 1, explain: 'Real facts about desert animals in Egypt — Information (Non-Fiction)!' }
      ]
    },

    // Page 7 — Label Parts of the Book (The Rabbit Book)
    {
      id: 'r-book-rabbit',
      title: 'Parts of a Book: The Rabbit Book',
      arTitle: 'أجزاء الكتاب (كتاب الأرنب)',
      emoji: '🐰',
      trophy: { id: 'trophy-book', icon: '📖', name: 'Book Detective', ar: 'مكتشف الكتب' },
      questions: [
        {
          id: 'p07-q1',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-rabbit.webp', pinX: 83, pinY: 22 },
          options: ['title', 'author', 'spine', 'back cover'],
          answer: 0,
          explain: '"The Rabbit Book" is the title (name) of the book!'
        },
        {
          id: 'p07-q2',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-rabbit.webp', pinX: 83, pinY: 45 },
          options: ['illustrator', 'author', 'front cover', 'title'],
          answer: 1,
          explain: '"By Tom Smith" is the author (the person who wrote the book)!'
        },
        {
          id: 'p07-q3',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-rabbit.webp', pinX: 83, pinY: 69 },
          options: ['illustrator', 'spine', 'back cover', 'author'],
          answer: 0,
          explain: '"Illustrated by Jane Smith" is the illustrator (the person who drew the pictures)!'
        },
        {
          id: 'p07-q4',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-rabbit.webp', pinX: 15, pinY: 69 },
          options: ['back cover', 'front cover', 'spine', 'title'],
          answer: 1,
          explain: 'The red front side of the book with the title and rabbit is the front cover!'
        },
        {
          id: 'p07-q5',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-rabbit.webp', pinX: 15, pinY: 45 },
          options: ['front cover', 'title', 'spine', 'illustrator'],
          answer: 2,
          explain: 'The spine holds all the pages and covers of the book together!'
        },
        {
          id: 'p07-q6',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-rabbit.webp', pinX: 15, pinY: 22 },
          options: ['back cover', 'front cover', 'author', 'spine'],
          answer: 0,
          explain: 'The back side of the book is called the back cover!'
        }
      ]
    },

    // Page 12 — Label Parts of the Book (The Jolly Frog)
    {
      id: 'r-book-frog',
      title: 'Parts of a Book: The Jolly Frog',
      arTitle: 'أجزاء الكتاب (الضفدع السعيد)',
      emoji: '🐸',
      questions: [
        {
          id: 'p12-q1',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of "The Jolly Frog" book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-frog.webp', pinX: 59, pinY: 5 },
          options: ['title', 'spine', 'pages', 'back cover'],
          answer: 0,
          explain: '"The Jolly Frog" is the title of the book!'
        },
        {
          id: 'p12-q2',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-frog.webp', pinX: 59, pinY: 16 },
          options: ['back cover', 'front cover', 'pages', 'author'],
          answer: 1,
          explain: 'This arrow points to the green front cover of the book!'
        },
        {
          id: 'p12-q3',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-frog.webp', pinX: 60, pinY: 27 },
          options: ['illustrator', 'author', 'title', 'spine'],
          answer: 1,
          explain: '"Written by Tina Twinkly" shows the author!'
        },
        {
          id: 'p12-q4',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-frog.webp', pinX: 66, pinY: 38 },
          options: ['back cover', 'front cover', 'pages', 'title'],
          answer: 0,
          explain: 'The green cover underneath at the back of the book is the back cover!'
        },
        {
          id: 'p12-q5',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the open book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-frog.webp', pinX: 86, pinY: 27 },
          options: ['spine', 'pages', 'front cover', 'author'],
          answer: 1,
          explain: 'The paper sheets inside the book with "Once upon a time" are the pages!'
        },
        {
          id: 'p12-q6',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-frog.webp', pinX: 14, pinY: 63 },
          options: ['spine', 'pages', 'illustrator', 'title'],
          answer: 0,
          explain: 'The side edge that binds the book together is the spine!'
        },
        {
          id: 'p12-q7',
          topic: 'Label the Parts of the Book',
          prompt: 'Which part of the book is marked with the glowing "?" box?',
          diagram: { image: 'assets/img/book-frog.webp', pinX: 26, pinY: 75 },
          options: ['author', 'illustrator', 'front cover', 'pages'],
          answer: 1,
          explain: '"Illustrated by Ben Books" shows the illustrator!'
        }
      ]
    },

    // Page 8 — Title, Author & Illustrator of Each Book
    {
      id: 'r-author-illus',
      title: 'Title, Author & Illustrator',
      arTitle: 'العنوان والمؤلف والرسّام',
      emoji: '✍️',
      questions: [
        { id: 'p08-q1', topic: 'Book 1: Apple Juice', prompt: 'Who is the AUTHOR of this book?', image: 'assets/img/cover-apple-juice.webp', options: ['Tom', 'Kate', 'Apple Juice', 'Pat'], answer: 0, explain: '"Written by Tom" means Tom is the author!' },
        { id: 'p08-q2', topic: 'Book 1: Apple Juice', prompt: 'What is the TITLE of this book?', image: 'assets/img/cover-apple-juice.webp', options: ['Tom', 'Kate', 'Apple Juice', 'My Sister'], answer: 2, explain: 'The big name at the top, "Apple Juice", is the title!' },
        { id: 'p08-q3', topic: 'Book 1: Apple Juice', prompt: 'Who is the ILLUSTRATOR of this book?', image: 'assets/img/cover-apple-juice.webp', options: ['Tom', 'Kate', 'Sam', 'Dad'], answer: 1, explain: '"Pictures by Kate" means Kate is the illustrator!' },
        { id: 'p08-q4', topic: 'Book 2: Brush Your Teeth', prompt: 'Who is the AUTHOR of this book?', image: 'assets/img/cover-brush-teeth.webp', options: ['Sam', 'Pat', 'Brush Your Teeth', 'Tom'], answer: 1, explain: '"Written by Pat" means Pat is the author!' },
        { id: 'p08-q5', topic: 'Book 2: Brush Your Teeth', prompt: 'What is the TITLE of this book?', image: 'assets/img/cover-brush-teeth.webp', options: ['Pat', 'Sam', 'Brush Your Teeth', 'Apple Juice'], answer: 2, explain: 'The title at the top of the cover is "Brush Your Teeth"!' },
        { id: 'p08-q6', topic: 'Book 2: Brush Your Teeth', prompt: 'Who is the ILLUSTRATOR of this book?', image: 'assets/img/cover-brush-teeth.webp', options: ['Pat', 'Sam', 'Kate', 'Mom'], answer: 1, explain: '"Pictures by Sam" means Sam is the illustrator!' },
        { id: 'p08-q7', topic: 'Book 3: My Sister', prompt: 'Who is the AUTHOR of this book?', image: 'assets/img/cover-my-sister.webp', options: ['Mom', 'Dad', 'My Sister', 'Kate'], answer: 0, explain: '"Written by Mom" means Mom is the author!' },
        { id: 'p08-q8', topic: 'Book 3: My Sister', prompt: 'What is the TITLE of this book?', image: 'assets/img/cover-my-sister.webp', options: ['Mom', 'Dad', 'My Sister', 'Brush Your Teeth'], answer: 2, explain: 'The title at the top of the book cover is "My Sister"!' },
        { id: 'p08-q9', topic: 'Book 3: My Sister', prompt: 'Who is the ILLUSTRATOR of this book?', image: 'assets/img/cover-my-sister.webp', options: ['Mom', 'Dad', 'Pat', 'Tom'], answer: 1, explain: '"Pictures by Dad" means Dad is the illustrator!' }
      ]
    },

    // Pages 6 & 70 — Table of Contents (All About Dogs + Animal Fact Book)
    {
      id: 'r-toc-1',
      title: 'Table of Contents: Dogs & Egypt',
      arTitle: 'فهرس المحتويات (الكلاب ومصر)',
      emoji: '🐶',
      toc: {
        title: 'All about Dogs',
        author: 'by Zahir Brown',
        image: 'assets/img/toc-dogs.webp',
        rows: [
          ['History of Dogs', '1'],
          ['Dog Breeds', '5'],
          ['Choosing a Dog', '15'],
          ['Caring for Your Dog', '18'],
          ['Glossary', '25']
        ]
      },
      questions: [
        { id: 'p06-q1', topic: 'Table of Contents', prompt: 'What can you read about on page 18?', options: ['Caring for Your Dog', 'History of Dogs', 'Dog Breeds', 'Glossary'], answer: 0, explain: 'In the Table of Contents, "Caring for Your Dog" is on page 18!' },
        { id: 'p06-q2', topic: 'Table of Contents', prompt: 'On which page can you read about the history of dogs?', options: ['Page 1', 'Page 5', 'Page 15', 'Page 25'], answer: 0, explain: '"History of Dogs" starts on page 1.' },
        { id: 'p06-q3', topic: 'Table of Contents', prompt: 'On which page can you find the glossary?', options: ['Page 5', 'Page 15', 'Page 18', 'Page 25'], answer: 3, explain: '"Glossary" is on page 25.' },
        { id: 'p06-q4', topic: 'Table of Contents', prompt: 'Which page would help you choose a dog?', options: ['Page 1', 'Page 5', 'Page 15', 'Page 18'], answer: 2, explain: '"Choosing a Dog" is on page 15.' },
        { id: 'p06-q5', topic: 'Table of Contents', prompt: 'Who is the author of the book "All about Dogs"?', options: ['Zahir Brown', 'Tom Smith', 'Jane Smith', 'Tina Twinkly'], answer: 0, explain: 'At the top of the card it says: "All about Dogs — by Zahir Brown".' },
        {
          id: 'p70-q1',
          topic: 'Animal Fact Book Contents',
          tocOverride: {
            title: 'Animal Fact Book — Contents Page',
            rows: [
              ['Desert Foxes', '4'],
              ['Nile Crocodiles', '8'],
              ['Camels of Egypt', '12'],
              ['Birds of the Delta', '16']
            ]
          },
          prompt: 'Look at the Animal Fact Book contents page. On which page can you read about Nile Crocodiles?',
          options: ['Page 4', 'Page 8', 'Page 12', 'Page 16'],
          answer: 1,
          explain: 'Nile Crocodiles is listed on page 8!'
        },
        {
          id: 'p70-q2',
          topic: 'Animal Fact Book Contents',
          tocOverride: {
            title: 'Animal Fact Book — Contents Page',
            rows: [
              ['Desert Foxes', '4'],
              ['Nile Crocodiles', '8'],
              ['Camels of Egypt', '12'],
              ['Birds of the Delta', '16']
            ]
          },
          prompt: 'Look at the Animal Fact Book contents page. What topic starts on page 12?',
          options: ['Desert Foxes', 'Nile Crocodiles', 'Camels of Egypt', 'Birds of the Delta'],
          answer: 2,
          explain: 'Page 12 is "Camels of Egypt"!'
        }
      ]
    },

    // Page 13 — Table of Contents (Exercise 2: Fishes, Dogs, Cows, Bats, Birds)
    {
      id: 'r-toc-2',
      title: 'Table of Contents: Animals',
      arTitle: 'فهرس المحتويات (الحيوانات)',
      emoji: '🦇',
      toc: {
        title: 'Table of Contents',
        rows: [
          ['Fishes', '1'],
          ['Dogs', '5'],
          ['Caring for Cows', '11'],
          ['Bats', '14'],
          ['Birds', '19']
        ]
      },
      questions: [
        { id: 'p13-q1', topic: 'Table of Contents', prompt: 'How many topics are there in the book?', options: ['3', '4', '5', '6'], answer: 2, explain: 'Count them: Fishes, Dogs, Caring for Cows, Bats, Birds — 5 topics!' },
        { id: 'p13-q2', topic: 'Table of Contents', prompt: 'What topic can be found on page 11?', options: ['Fishes', 'Dogs', 'Caring for Cows', 'Bats'], answer: 2, explain: 'Page 11 is "Caring for Cows".' },
        { id: 'p13-q3', topic: 'Table of Contents', prompt: 'I can read about bats on page _______.', options: ['1', '5', '14', '19'], answer: 2, explain: 'Bats is on page 14!' },
        { id: 'p13-q4', topic: 'Table of Contents', prompt: 'What is the first topic in the book?', options: ['Fishes', 'Dogs', 'Bats', 'Birds'], answer: 0, explain: 'Fishes (page 1) is the very first topic in the book!' },
        { id: 'p13-q5', topic: 'Table of Contents', prompt: 'I can read about fish on page _______.', options: ['1', '5', '11', '19'], answer: 0, explain: 'Fishes starts on page 1.' },
        { id: 'p13-q6', topic: 'True or False', prompt: 'True or False: I can read about dogs on page 19.', options: ['True', 'False'], answer: 1, explain: 'False! Dogs is on page 5. Page 19 is Birds.' },
        { id: 'p13-q7', topic: 'True or False', prompt: 'True or False: I can read about bats on page 14.', options: ['True', 'False'], answer: 0, explain: 'True! Bats is on page 14.' }
      ]
    },

    // Pages 48 & 68-69 & 71 — Non-Fiction Features & Captions
    {
      id: 'r-features',
      title: 'Captions & Book Features',
      arTitle: 'التعليقات ومميزات كتب المعلومات',
      emoji: '📷',
      questions: [
        { id: 'p48-q1', topic: 'Write a Caption', prompt: 'Look at the picture. Complete the caption: "The boy is _______."', image: 'assets/img/cap-bike.webp', options: ['riding a bike', 'sleeping', 'swimming', 'fishing'], answer: 0, explain: 'The picture shows the boy riding a bike!' },
        { id: 'p48-q2', topic: 'Write a Caption', prompt: 'Look at the picture. Complete the caption: "The lion is _______."', image: 'assets/img/cap-lion.webp', options: ['running', 'sleeping', 'swimming', 'riding a bike'], answer: 1, explain: 'The Zzz above the lion shows the lion is sleeping!' },
        { id: 'p48-q3', topic: 'Write a Caption', prompt: 'Look at the picture. Complete the caption: "The boy is _______."', image: 'assets/img/cap-fish.webp', options: ['fishing', 'sleeping', 'running', 'riding a bike'], answer: 0, explain: 'The boy has a fishing rod and caught a fish — he is fishing!' },
        { id: 'p48-q4', topic: 'Write a Caption', prompt: 'Look at the picture. Complete the caption: "The girl is _______."', image: 'assets/img/cap-swim.webp', options: ['sleeping', 'swimming', 'fishing', 'riding a bike'], answer: 1, explain: 'The girl is in the water — she is swimming!' },
        { id: 'p48-q5', topic: 'Write a Caption', prompt: 'Look at the picture. Complete the caption: "The girl is _______."', image: 'assets/img/cap-run.webp', options: ['running', 'sleeping', 'swimming', 'fishing'], answer: 0, explain: 'The girl is running past the tree!' },
        {
          id: 'p68-q1',
          topic: 'Book Feature Match-Up',
          prompt: 'What is a "Heading" in an information book?',
          options: [
            'Big, bold words at the top that name the topic.',
            'A real camera picture showing how something truly looks.',
            'A list at the front that shows which page each topic is on.',
            'A drawing with labelled parts showing how something works or grows.'
          ],
          answer: 0,
          explain: 'A Heading is big, bold words at the top that name the topic!'
        },
        {
          id: 'p69-q2',
          topic: 'Book Feature Match-Up',
          prompt: 'What is a "Photograph" in an information book?',
          options: [
            'Big, bold words at the top that name the topic.',
            'A real camera picture showing how something truly looks.',
            'A short sentence underneath a photo explaining what is happening.',
            'A list at the front that shows which page each topic is on.'
          ],
          answer: 1,
          explain: 'A Photograph is a real camera picture showing how something truly looks!'
        },
        {
          id: 'p69-q3',
          topic: 'Book Feature Match-Up',
          prompt: 'What is a "Caption" in an information book?',
          options: [
            'A short sentence underneath a photo explaining what is happening.',
            'A list at the front that shows which page each topic is on.',
            'Big, bold words at the top that name the topic.',
            'A drawing with labelled parts showing how something works or grows.'
          ],
          answer: 0,
          explain: 'A Caption is a short sentence underneath a photo explaining what is happening!'
        },
        {
          id: 'p69-q4',
          topic: 'Book Feature Match-Up',
          prompt: 'What is a "Contents Page"?',
          options: [
            'A list at the front that shows which page each topic is on.',
            'A real camera picture showing how something truly looks.',
            'A short sentence underneath a photo explaining what is happening.',
            'A drawing with labelled parts.'
          ],
          answer: 0,
          explain: 'A Contents Page is a list at the front that shows which page each topic is on!'
        },
        {
          id: 'p69-q5',
          topic: 'Book Feature Match-Up',
          prompt: 'What is a "Diagram"?',
          options: [
            'A drawing with labelled parts showing how something works or grows.',
            'Big, bold words at the top that name the topic.',
            'A list at the front that shows page numbers.',
            'A short sentence underneath a photo.'
          ],
          answer: 0,
          explain: 'A Diagram is a drawing with labelled parts showing how something works or grows!'
        },
        {
          id: 'p71-q3',
          topic: 'Fact-Finder Check',
          prompt: 'Which TWO statements are true about information texts?',
          options: [
            'They give us real facts to teach us new things AND often use headings, photographs, and captions.',
            'They are made-up fairy tales about flying wizards AND must be read like a bedtime story.',
            'They only tell made-up stories AND never have photographs.',
            'They never have headings AND only talk about magic dragons.'
          ],
          answer: 0,
          explain: 'Information texts give real facts to teach us new things and often use headings, photographs, and captions!'
        },
        {
          id: 'p71-q4',
          topic: 'Fact-Finder Check',
          prompt: 'Why do writers put labels with arrows on a diagram?',
          options: [
            'To name and show the different parts of something clearly.',
            'To make a funny fairy tale about wizards.',
            'To hide the picture from the reader.',
            'To show the price of the book.'
          ],
          answer: 0,
          explain: 'Labels with arrows help readers see and learn the names of each part in a diagram!'
        }
      ]
    }
  ]
};
