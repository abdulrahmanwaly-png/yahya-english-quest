// World 3: Phonics & Spelling Island — 100% strictly from Yahya's Year 1 Term 1 English worksheets
// Covers PDF pages: 3, 4, 9, 16, 22, 26, 37, 41, 45, 52, 58, 59 (dup 60)

export const WORLD_SPELLING = {
  id: 'spelling',
  title: 'Phonics & Spelling Island',
  arTitle: 'جزيرة الصوتيات والإملاء',
  icon: '🏝️',
  description: "CVC Words, Digraphs ('th', 'sh', 'ch'), Double Letters, 'ck', Blends & Magic 'e'",
  arDesc: 'كلمات CVC، الحروف المركبة، الحروف المكررة، صوت ck، وMagic e',
  quests: [
    // Page 3 Ex 1 — Teacher Says! (Listening Game — all 8 exact words from the red oval)
    {
      id: 's-teacher-says',
      title: 'Teacher Says! (Listen & Tap)',
      arTitle: 'اسمع واختار الكلمة (صوت المعلم)',
      emoji: '🔊',
      trophy: { id: 'trophy-ears', icon: '🎧', name: 'Super Listener', ar: 'مستمع خارق' },
      questions: [
        { id: 'p03-l1', topic: 'Teacher Says', listenWord: 'sun', prompt: 'Tap the Listen button, then choose the word your teacher says! (Hint: shines in the sky)', options: ['sun', 'run', 'bun', 'fun'], answer: 0, explain: 's-u-n spells sun!' },
        { id: 'p03-l2', topic: 'Teacher Says', listenWord: 'run', prompt: 'Tap the Listen button, then choose the word your teacher says! (Hint: move very fast)', options: ['sun', 'run', 'bun', 'fun'], answer: 1, explain: 'r-u-n spells run!' },
        { id: 'p03-l3', topic: 'Teacher Says', listenWord: 'bun', prompt: 'Tap the Listen button, then choose the word your teacher says! (Hint: a small soft bread roll)', options: ['sun', 'run', 'bun', 'fun'], answer: 2, explain: 'b-u-n spells bun!' },
        { id: 'p03-l4', topic: 'Teacher Says', listenWord: 'fun', prompt: 'Tap the Listen button, then choose the word your teacher says! (Hint: having a happy time)', options: ['sun', 'run', 'bun', 'fun'], answer: 3, explain: 'f-u-n spells fun!' },
        { id: 'p03-l5', topic: 'Teacher Says', listenWord: 'fin', prompt: 'Tap the Listen button, then choose the word your teacher says! (Hint: a fish uses it to swim)', options: ['fin', 'car', 'dog', 'cat'], answer: 0, explain: 'f-i-n spells fin!' },
        { id: 'p03-l6', topic: 'Teacher Says', listenWord: 'car', prompt: 'Tap the Listen button, then choose the word your teacher says! (Hint: you drive it on the road)', options: ['fin', 'car', 'dog', 'cat'], answer: 1, explain: 'c-a-r spells car!' },
        { id: 'p03-l7', topic: 'Teacher Says', listenWord: 'dog', prompt: 'Tap the Listen button, then choose the word your teacher says! (Hint: a pet that barks)', options: ['fin', 'car', 'dog', 'cat'], answer: 2, explain: 'd-o-g spells dog!' },
        { id: 'p03-l8', topic: 'Teacher Says', listenWord: 'cat', prompt: 'Tap the Listen button, then choose the word your teacher says! (Hint: a pet that says meow)', options: ['fin', 'car', 'dog', 'cat'], answer: 3, explain: 'c-a-t spells cat!' }
      ]
    },

    // Page 3 Ex 2 & Page 4 — CVC Pictures & Sentences
    {
      id: 's-cvc-pics',
      title: 'CVC Pictures & Sentences',
      arTitle: 'صور وجمل كلمات CVC',
      emoji: '🖼️',
      questions: [
        { id: 'p03-p1', topic: 'Word Under Picture', prompt: 'Which word matches this picture?', image: 'assets/img/cvc-net.webp', options: ['net', 'tap', 'jam', 'jar'], answer: 0, explain: 'This is a net (n-e-t)!' },
        { id: 'p03-p2', topic: 'Word Under Picture', prompt: 'Which word matches this picture?', image: 'assets/img/cvc-hop.webp', options: ['net', 'hop', 'book', 'jar'], answer: 1, explain: 'The boy is hopping — hop (h-o-p)!' },
        { id: 'p03-p3', topic: 'Word Under Picture', prompt: 'Which word matches this picture?', image: 'assets/img/cvc-book.webp', options: ['tap', 'jam', 'book', 'net'], answer: 2, explain: 'This picture shows a book!' },
        { id: 'p03-p4', topic: 'Word Under Picture', prompt: 'Which word matches this picture?', image: 'assets/img/cvc-tap.webp', options: ['tap', 'jar', 'hop', 'jam'], answer: 0, explain: 'Water drips from a tap (t-a-p)!' },
        { id: 'p03-p5', topic: 'Word Under Picture', prompt: 'Which word matches this picture?', image: 'assets/img/cvc-jam.webp', options: ['jar', 'jam', 'net', 'tap'], answer: 1, explain: 'Strawberry jam (j-a-m)!' },
        { id: 'p03-p6', topic: 'Word Under Picture', prompt: 'Which word matches this picture?', image: 'assets/img/cvc-jar.webp', options: ['jam', 'tap', 'jar', 'book'], answer: 2, explain: 'An empty glass jar (j-a-r)!' },
        { id: 'p04-q1', topic: 'Finish the Sentence', prompt: 'Look at the picture. Finish: "The _ _ _ is on the _ _ _."', image: 'assets/img/cvc-dog-box.webp', options: ['dog ... box', 'pig ... mud', 'cat ... mat', 'dog ... mud'], answer: 0, explain: 'The dog is on the box!' },
        { id: 'p04-q2', topic: 'Finish the Sentence', prompt: 'Look at the picture. Finish: "The _ _ _ is in the _ _ _."', image: 'assets/img/cvc-pig-mud.webp', options: ['cat ... box', 'pig ... mud', 'dog ... mat', 'pig ... box'], answer: 1, explain: 'The pig is in the mud!' },
        { id: 'p04-q3', topic: 'Finish the Sentence', prompt: 'Look at the picture. Finish: "The _ _ _ is on the _ _ _."', image: 'assets/img/cvc-cat-mat.webp', options: ['cat ... mat', 'dog ... box', 'pig ... mud', 'cat ... mud'], answer: 0, explain: 'The cat is on the mat!' }
      ]
    },

    // Page 9 — Digraph 'th'
    {
      id: 's-digraph-th',
      title: "Digraph 'th' Quest",
      arTitle: "مغامرة صوت th",
      emoji: '🌍',
      passage: {
        title: "Word Bank ('th')",
        wordBank: ['thin', 'thief', 'thirty', 'Thursday', 'thick', 'Earth', 'cloth', 'teeth', 'month']
      },
      questions: [
        { id: 'p09-q1', topic: "Digraph 'th'", prompt: 'I have _______ crayons. (30)', options: ['thirty', 'thin', 'thick', 'teeth'], answer: 0, explain: '30 is spelled thirty!' },
        { id: 'p09-q2', topic: "Digraph 'th'", prompt: 'The stick is _______.', options: ['thick', 'thin', 'thief', 'Earth'], answer: 1, explain: 'A slim stick is thin!' },
        { id: 'p09-q3', topic: "Digraph 'th'", prompt: 'The book is _______. (many pages)', options: ['thin', 'thick', 'cloth', 'teeth'], answer: 1, explain: 'A fat book with lots of pages is thick!' },
        { id: 'p09-q4', topic: "Digraph 'th'", prompt: 'We have art on _______. (a day of the week)', options: ['Thursday', 'thirty', 'month', 'Earth'], answer: 0, explain: 'Thursday is a day of the week!' },
        { id: 'p09-q5', topic: "Digraph 'th'", prompt: 'The _______ took the bag.', options: ['thief', 'teeth', 'thin', 'cloth'], answer: 0, explain: 'A thief steals things — "The thief took the bag."' },
        { id: 'p09-q6', topic: "Digraph 'th'", prompt: 'I brush my _______ every day.', options: ['cloth', 'teeth', 'thirty', 'thick'], answer: 1, explain: 'We brush our teeth every day!' },
        { id: 'p09-q7', topic: "Digraph 'th'", prompt: 'She cleaned the table with a _______.', options: ['cloth', 'thief', 'Earth', 'Thursday'], answer: 0, explain: 'You wipe a table with a cloth!' },
        { id: 'p09-q8', topic: "Digraph 'th'", prompt: 'My birthday is next _______. (Months of the Year)', options: ['month', 'teeth', 'thirty', 'thin'], answer: 0, explain: 'My birthday is next month!' },
        { id: 'p09-q9', topic: "Digraph 'th'", prompt: 'We live on _______. (our planet)', options: ['Earth', 'cloth', 'Thursday', 'thick'], answer: 0, explain: 'Planet Earth is our home!' }
      ]
    },

    // Pages 16 & 22 — Digraphs 'sh' & 'ch'
    {
      id: 's-digraph-sh-ch',
      title: "Digraphs 'sh' & 'ch'",
      arTitle: "صوتا sh و ch",
      emoji: '🐥',
      trophy: { id: 'trophy-digraphs', icon: '🌟', name: 'Digraph Star', ar: 'نجم الحروف المركبة' },
      questions: [
        { id: 'p16-q1', topic: "Digraph 'sh'", prompt: 'I _______ for a new bike.', options: ['wish', 'shut', 'shed', 'rash'], answer: 0, explain: 'I wish for a new bike!' },
        { id: 'p16-q2', topic: "Digraph 'sh'", prompt: 'Please _______ the door.', options: ['crash', 'shut', 'wish', 'shelf'], answer: 1, explain: 'Please shut (close) the door!' },
        { id: 'p16-q3', topic: "Digraph 'sh'", prompt: 'I have a _______ on my arm. (itchy red spots)', options: ['rash', 'shed', 'crash', 'wish'], answer: 0, explain: 'Red itchy spots on skin are called a rash!' },
        { id: 'p16-q4', topic: "Digraph 'sh'", prompt: 'The sheep is in the _______.', options: ['wish', 'rash', 'shed', 'shut'], answer: 2, explain: 'A barn/hut for animals is a shed!' },
        { id: 'p16-q5', topic: "Digraph 'sh'", prompt: 'The cars _______ in the game.', options: ['crash', 'shelf', 'wish', 'shed'], answer: 0, explain: 'When cars bump hard, they crash!' },
        { id: 'p22-q1', topic: "Digraph 'ch'", prompt: 'The _______ is in the story. (flies on a broom)', options: ['witch', 'chick', 'rich', 'hutch'], answer: 0, explain: 'The witch is in the story!' },
        { id: 'p22-q2', topic: "Digraph 'ch'", prompt: 'The rabbit is in the _______.', options: ['chips', 'hutch', 'chin', 'chop'], answer: 1, explain: 'A rabbit\'s wooden house is called a hutch!' },
        { id: 'p22-q3', topic: "Digraph 'ch'", prompt: 'The king is _______. (has lots of money)', options: ['rich', 'witch', 'chick', 'chin'], answer: 0, explain: 'Someone with lots of money is rich!' },
        { id: 'p22-q4', topic: "Digraph 'ch'", prompt: 'I eat _______ with lunch.', options: ['chop', 'chips', 'hutch', 'witch'], answer: 1, explain: 'I eat chips with lunch!' },
        { id: 'p22-q5', topic: "Digraph 'ch'", prompt: 'The _______ is yellow. (baby chicken)', options: ['chin', 'rich', 'chick', 'chips'], answer: 2, explain: 'A baby yellow chicken is a chick!' }
      ]
    },

    // Page 26 — Double Final Consonants ('ss', 'll')
    {
      id: 's-double-ss-ll',
      title: "Double Letters 'ss' & 'll'",
      arTitle: "الحروف المكررة ss و ll",
      emoji: '🔔',
      passage: {
        title: 'Word Bank',
        wordBank: ['mess', 'dress', 'bell', 'press', 'ill', 'smell']
      },
      questions: [
        { id: 'p26-q1', topic: 'Double Consonants', prompt: 'I wore a blue _______ to the party.', options: ['dress', 'mess', 'bell', 'smell'], answer: 0, explain: 'I wore a blue dress to the party!' },
        { id: 'p26-q2', topic: 'Double Consonants', prompt: 'Please clean up the _______ in your room.', options: ['bell', 'mess', 'ill', 'press'], answer: 1, explain: 'An untidy room is a mess!' },
        { id: 'p26-q3', topic: 'Double Consonants', prompt: '_______ the button to start the game.', options: ['Smell', 'Dress', 'Press', 'Bell'], answer: 2, explain: 'Press the button to start the game!' },
        { id: 'p26-q4', topic: 'Double Consonants', prompt: 'The school _______ rang loudly.', options: ['bell', 'mess', 'ill', 'dress'], answer: 0, explain: 'The school bell rang loudly!' },
        { id: 'p26-q5', topic: 'Double Consonants', prompt: 'I can _______ fresh bread baking.', options: ['press', 'ill', 'smell', 'bell'], answer: 2, explain: 'You smell fresh bread with your nose!' },
        { id: 'p26-q6', topic: 'Double Consonants', prompt: 'Sara stayed home because she was _______.', options: ['mess', 'ill', 'dress', 'press'], answer: 1, explain: 'When you feel sick, you are ill!' }
      ]
    },

    // Page 37 — 'ck' Sound Pictures
    {
      id: 's-ck-pics',
      title: "The 'ck' Sound (Pictures)",
      arTitle: "صوت ck (بالصور)",
      emoji: '🦆',
      questions: [
        { id: 'p37-q1', topic: "'ck' Sound", prompt: 'Which word matches this picture?', image: 'assets/img/ck-back.webp', options: ['back', 'lock', 'duck', 'sock'], answer: 0, explain: 'The picture shows the girl\'s back!' },
        { id: 'p37-q2', topic: "'ck' Sound", prompt: 'Which word matches this picture?', image: 'assets/img/ck-lock.webp', options: ['sack', 'lock', 'tick', 'neck'], answer: 1, explain: 'This is a lock!' },
        { id: 'p37-q3', topic: "'ck' Sound", prompt: 'Which word matches this picture?', image: 'assets/img/ck-duck.webp', options: ['duck', 'sick', 'sock', 'back'], answer: 0, explain: 'Quack! This is a duck!' },
        { id: 'p37-q4', topic: "'ck' Sound", prompt: 'Which word matches this picture?', image: 'assets/img/ck-sack.webp', options: ['lock', 'tick', 'sack', 'neck'], answer: 2, explain: 'A large cloth bag is a sack!' },
        { id: 'p37-q5', topic: "'ck' Sound", prompt: 'Look at the arrow. Which word matches this picture?', image: 'assets/img/ck-neck.webp', options: ['neck', 'back', 'sick', 'sock'], answer: 0, explain: 'The arrow points to the girl\'s neck!' },
        { id: 'p37-q6', topic: "'ck' Sound", prompt: 'Which word matches this picture?', image: 'assets/img/ck-sick.webp', options: ['tick', 'sick', 'duck', 'sack'], answer: 1, explain: 'The boy is holding his tummy because he feels sick!' },
        { id: 'p37-q7', topic: "'ck' Sound", prompt: 'Which word matches this picture?', image: 'assets/img/ck-sock.webp', options: ['sock', 'lock', 'back', 'neck'], answer: 0, explain: 'You wear a sock on your foot!' },
        { id: 'p37-q8', topic: "'ck' Sound", prompt: 'Which word matches this picture?', image: 'assets/img/ck-tick.webp', options: ['duck', 'sack', 'tick', 'sick'], answer: 2, explain: 'A checkmark (✓) is called a tick!' }
      ]
    },

    // Page 41 — 'ck' Sound Sentences
    {
      id: 's-ck-sentences',
      title: "The 'ck' Sound (Sentences)",
      arTitle: "صوت ck (في الجمل)",
      emoji: '🚚',
      passage: {
        title: "Word Bank ('ck')",
        wordBank: ['track', 'sack', 'truck', 'duck', 'sick', 'luck']
      },
      questions: [
        { id: 'p41-q1', topic: "'ck' Sound", prompt: 'The _______ is full of rice.', options: ['sack', 'track', 'duck', 'luck'], answer: 0, explain: 'Rice is carried in a sack!' },
        { id: 'p41-q2', topic: "'ck' Sound", prompt: 'The train moved along the _______.', options: ['truck', 'track', 'sick', 'sack'], answer: 1, explain: 'Trains move along a railway track!' },
        { id: 'p41-q3', topic: "'ck' Sound", prompt: 'The _______ is swimming in the lake.', options: ['duck', 'truck', 'luck', 'track'], answer: 0, explain: 'The duck is swimming in the lake!' },
        { id: 'p41-q4', topic: "'ck' Sound", prompt: 'The _______ carried big boxes.', options: ['sack', 'sick', 'truck', 'duck'], answer: 2, explain: 'A big truck carries heavy boxes!' },
        { id: 'p41-q5', topic: "'ck' Sound", prompt: 'I had good _______ today.', options: ['luck', 'track', 'sack', 'duck'], answer: 0, explain: 'Good luck!' },
        { id: 'p41-q6', topic: "'ck' Sound", prompt: 'My brother feels _______ today.', options: ['truck', 'sick', 'luck', 'track'], answer: 1, explain: 'My brother feels sick today!' }
      ]
    },

    // Page 59 (dup 60) — Initial Blends
    {
      id: 's-init-blends',
      title: 'Initial Blends Adventure',
      arTitle: 'الحروف المدمجة في بداية الكلمة',
      emoji: '🦀',
      passage: {
        title: 'Word Bank (Initial Blends)',
        wordBank: ['frog', 'grapes', 'glass', 'bread', 'crab', 'clap', 'pram']
      },
      questions: [
        { id: 'p59-q1', topic: 'Initial Blends', prompt: 'I ate sweet _______ after lunch.', options: ['grapes', 'glass', 'crab', 'pram'], answer: 0, explain: 'gr-apes → sweet grapes!' },
        { id: 'p59-q2', topic: 'Initial Blends', prompt: 'Please pour some water into the _______.', options: ['bread', 'glass', 'clap', 'frog'], answer: 1, explain: 'gl-ass → pour water into the glass!' },
        { id: 'p59-q3', topic: 'Initial Blends', prompt: 'We _______ our hands when we enjoy a performance.', options: ['clap', 'crab', 'pram', 'frog'], answer: 0, explain: 'cl-ap → we clap our hands!' },
        { id: 'p59-q4', topic: 'Initial Blends', prompt: 'The green _______ jumped into the pond.', options: ['grapes', 'bread', 'frog', 'glass'], answer: 2, explain: 'fr-og → the green frog jumped into the pond!' },
        { id: 'p59-q5', topic: 'Initial Blends', prompt: 'A _______ walked sideways across the beach.', options: ['crab', 'clap', 'pram', 'bread'], answer: 0, explain: 'cr-ab → crabs walk sideways on the beach!' },
        { id: 'p59-q6', topic: 'Initial Blends', prompt: 'I made a sandwich with fresh _______.', options: ['glass', 'bread', 'frog', 'grapes'], answer: 1, explain: 'br-ead → sandwiches are made with bread!' },
        { id: 'p59-q7', topic: 'Initial Blends', prompt: 'The baby was sleeping in the _______.', options: ['pram', 'crab', 'clap', 'glass'], answer: 0, explain: 'pr-am → a baby stroller/buggy is a pram!' }
      ]
    },

    // Page 45 — Final Blends ('ng', 'nk')
    {
      id: 's-final-blends',
      title: "Final Blends ('ng' & 'nk')",
      arTitle: "الحروف المدمجة في نهاية الكلمة",
      emoji: '👑',
      passage: {
        title: "Word Bank ('ng', 'nk')",
        wordBank: ['ring', 'king', 'gong', 'wing', 'song', 'pink']
      },
      questions: [
        { id: 'p45-q1', topic: 'Final Blends', prompt: 'The _______ wore a shiny crown.', options: ['king', 'ring', 'wing', 'gong'], answer: 0, explain: 'The king wore a shiny crown!' },
        { id: 'p45-q2', topic: 'Final Blends', prompt: 'I found a _______ on the table.', options: ['song', 'ring', 'pink', 'gong'], answer: 1, explain: 'I found a golden ring on the table!' },
        { id: 'p45-q3', topic: 'Final Blends', prompt: 'The butterfly has a colorful _______.', options: ['wing', 'king', 'song', 'ring'], answer: 0, explain: 'A butterfly flies with its colorful wing!' },
        { id: 'p45-q4', topic: 'Final Blends', prompt: 'The loud _______ made everyone stop talking.', options: ['pink', 'wing', 'gong', 'ring'], answer: 2, explain: 'A gong makes a very loud ringing sound!' },
        { id: 'p45-q5', topic: 'Final Blends', prompt: 'We sang a fun _______ together.', options: ['song', 'king', 'gong', 'pink'], answer: 0, explain: 'We sang a fun song together!' },
        { id: 'p45-q6', topic: 'Final Blends', prompt: 'My favorite dress is _______.', options: ['ring', 'wing', 'pink', 'song'], answer: 2, explain: 'Pink is a color — "My favorite dress is pink."' }
      ]
    },

    // Page 52 — Magic 'e' (Word Bank)
    {
      id: 's-magic-e-1',
      title: "Magic 'e' (Hero & Bike)",
      arTitle: "حرف e السحري (١)",
      emoji: '🦸',
      passage: {
        title: 'Word Bank',
        wordBank: ['hop', 'tub', 'made', 'ride', 'cube', 'cape']
      },
      questions: [
        { id: 'p52-q1', topic: "Magic 'e'", prompt: 'The hero has a red _______.', options: ['cape', 'cube', 'tub', 'hop'], answer: 0, explain: 'A superhero wears a red cape (magic e makes a long a)!' },
        { id: 'p52-q2', topic: "Magic 'e'", prompt: 'The frog can _______.', options: ['ride', 'hop', 'made', 'cape'], answer: 1, explain: 'The frog can hop!' },
        { id: 'p52-q3', topic: "Magic 'e'", prompt: 'The baby sits in the _______.', options: ['cube', 'tub', 'cape', 'ride'], answer: 1, explain: 'The baby takes a bath in the tub!' },
        { id: 'p52-q4', topic: "Magic 'e'", prompt: 'I _______ a cake.', options: ['made', 'hop', 'tub', 'ride'], answer: 0, explain: 'I made a cake!' },
        { id: 'p52-q5', topic: "Magic 'e'", prompt: 'I _______ my bike.', options: ['cape', 'cube', 'ride', 'made'], answer: 2, explain: 'I ride my bike!' }
      ]
    },

    // Page 58 — Magic 'e' (Circle the Correct Word — all 10 items)
    {
      id: 's-magic-e-2',
      title: "Magic 'e' Wizard Challenge",
      arTitle: "تحدي ساحر الـ Magic e",
      emoji: '🪁',
      trophy: { id: 'trophy-magic-e', icon: '🪄', name: "Magic 'e' Wizard", ar: 'ساحر الإملاء' },
      questions: [
        { id: 'p58-q1', topic: "Magic 'e'", prompt: 'The superhero wears a _______.', options: ['cap', 'cape'], answer: 1, explain: 'A superhero wears a flying cape (magic e)!' },
        { id: 'p58-q2', topic: "Magic 'e'", prompt: 'The _______ is flying in the sky.', options: ['kit', 'kite'], answer: 1, explain: 'A kite flies in the sky (magic e makes long i)!' },
        { id: 'p58-q3', topic: "Magic 'e'", prompt: 'I _______ to win the game.', options: ['hop', 'hope'], answer: 1, explain: 'You hope to win (magic e makes long o)!' },
        { id: 'p58-q4', topic: "Magic 'e'", prompt: 'She will _______ the paper on the wall.', options: ['tap', 'tape'], answer: 1, explain: 'Sticky tape holds paper on the wall!' },
        { id: 'p58-q5', topic: "Magic 'e'", prompt: 'The _______ tree is tall.', options: ['pin', 'pine'], answer: 1, explain: 'A pine tree is a tall green tree!' },
        { id: 'p58-q6', topic: "Magic 'e'", prompt: 'He ate a _______ of cheese.', options: ['cub', 'cube'], answer: 1, explain: 'A square block of cheese is a cube (cub is a baby bear)!' },
        { id: 'p58-q7', topic: "Magic 'e'", prompt: 'I can _______ write my name.', options: ['not', 'note'], answer: 0, explain: 'I can not write my name!' },
        { id: 'p58-q8', topic: "Magic 'e'", prompt: 'The _______ is on the floor.', options: ['mat', 'mate'], answer: 0, explain: 'A mat lies on the floor!' },
        { id: 'p58-q9', topic: "Magic 'e'", prompt: 'The fish has a _______ on its side.', options: ['fin', 'fine'], answer: 0, explain: 'A fish swims using its fin!' },
        { id: 'p58-q10', topic: "Magic 'e'", prompt: 'The frog can _______ very high.', options: ['hop', 'hope'], answer: 0, explain: 'A frog can hop very high!' }
      ]
    }
  ]
};
