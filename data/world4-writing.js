// World 4: Writing & Labeling Arena — 100% strictly from Yahya's Year 1 Term 1 English worksheets
// Covers PDF pages: 24, 30, 33, 34, 36, 38, 42, 49, 53, 55, 61 (Ex 1-3), 63, 64, 65 (Ex 2)

export const WORLD_WRITING = {
  id: 'writing',
  title: 'Writing & Labeling Arena',
  arTitle: 'ساحة تكوين الجمل والحيوانات',
  icon: '✍️',
  description: 'Sentence Order, Sentence Matching, Animal Labeling & Picture Descriptions',
  arDesc: 'ترتيب الجمل، التوصيل، تسمية أجزاء النمر والفيل، ووصف الصور',
  quests: [
    // Pages 33 & 61 (Ex 1) — Put the Words in Order (1)
    {
      id: 'w-order-1',
      title: 'Sentence Builder (Part 1)',
      arTitle: 'ترتيب الجمل (١)',
      emoji: '🧩',
      trophy: { id: 'trophy-builder', icon: '🧩', name: 'Sentence Builder', ar: 'بطل تركيب الجمل' },
      questions: [
        { id: 'p33-q1', topic: 'Put in Order', tiles: ['dog', 'The', 'runs', 'fast.'], prompt: 'Put the words in the right order to make a sentence:', options: ['The dog runs fast.', 'Dog the fast runs.', 'Runs the dog fast.', 'The fast runs dog.'], answer: 0, explain: 'Start with capital "The" and end with "fast." → The dog runs fast.' },
        { id: 'p33-q2', topic: 'Put in Order', tiles: ['likes', 'She', 'apples.'], prompt: 'Put the words in the right order:', options: ['Likes she apples.', 'She likes apples.', 'Apples likes she.', 'She apples likes.'], answer: 1, explain: 'Subject + verb + object → She likes apples.' },
        { id: 'p33-q3', topic: 'Put in Order', tiles: ['is', 'The', 'big.', 'cat'], prompt: 'Put the words in the right order:', options: ['The cat is big.', 'The big is cat.', 'Cat is the big.', 'Is the cat big.'], answer: 0, explain: 'The cat is big.' },
        { id: 'p33-q4', topic: 'Put in Order', tiles: ['can', 'I', 'swim.'], prompt: 'Put the words in the right order:', options: ['Swim can I.', 'Can I swim.', 'I can swim.', 'I swim can.'], answer: 2, explain: 'I can swim.' },
        { id: 'p33-q5', topic: 'Put in Order', tiles: ['reads', 'Mum', 'a', 'book.'], prompt: 'Put the words in the right order:', options: ['Mum reads a book.', 'Reads Mum a book.', 'A book reads Mum.', 'Mum a book reads.'], answer: 0, explain: 'Mum reads a book.' },
        { id: 'p33-q6', topic: 'Put in Order', tiles: ['plays', 'He', 'football.'], prompt: 'Put the words in the right order:', options: ['Football plays He.', 'He plays football.', 'Plays He football.', 'He football plays.'], answer: 1, explain: 'He plays football.' },
        { id: 'p33-q7', topic: 'Put in Order', tiles: ['is', 'The', 'hot.', 'sun'], prompt: 'Put the words in the right order:', options: ['The sun is hot.', 'The hot is sun.', 'Sun the is hot.', 'Is the sun hot.'], answer: 0, explain: 'The sun is hot.' },
        { id: 'p33-q8', topic: 'Put in Order', tiles: ['We', 'to', 'go', 'school.'], prompt: 'Put the words in the right order:', options: ['We school go to.', 'To school we go.', 'We go to school.', 'Go we to school.'], answer: 2, explain: 'We go to school.' },
        { id: 'p61-o1', topic: 'Put in Order', tiles: ['cat', 'The', 'sleeps'], prompt: 'Put the words in order (with a capital letter and full stop):', options: ['The cat sleeps.', 'Cat the sleeps.', 'Sleeps the cat.', 'The sleeps cat.'], answer: 0, explain: 'The cat sleeps.' },
        { id: 'p61-o2', topic: 'Put in Order', tiles: ['is', 'My', 'red', 'bag'], prompt: 'Put the words in order (with a capital letter and full stop):', options: ['My red is bag.', 'My bag is red.', 'Bag my is red.', 'Is my bag red.'], answer: 1, explain: 'My bag is red.' },
        { id: 'p61-o3', topic: 'Put in Order', tiles: ['like', 'I', 'bananas'], prompt: 'Put the words in order (with a capital letter and full stop):', options: ['Bananas like I.', 'Like I bananas.', 'I like bananas.', 'I bananas like.'], answer: 2, explain: 'I like bananas.' }
      ]
    },

    // Pages 36 & 38 — Arrange & Unscramble Sentences (Part 2)
    {
      id: 'w-order-2',
      title: 'Sentence Builder (Part 2 & Pets)',
      arTitle: 'ترتيب الجمل (٢) والحيوانات الأليفة',
      emoji: '🦜',
      questions: [
        { id: 'p36-q1', topic: 'Arrange the Words', tiles: ['is', 'He', 'vet.', 'a'], prompt: 'Arrange the words to make a sentence:', options: ['He is a vet.', 'Is he a vet.', 'A vet is he.', 'He a vet is.'], answer: 0, explain: 'He is a vet.' },
        { id: 'p36-q2', topic: 'Arrange the Words', tiles: ['eat', 'a', 'cake.', 'We'], prompt: 'Arrange the words to make a sentence:', options: ['Eat we a cake.', 'We eat a cake.', 'A cake eat we.', 'We a cake eat.'], answer: 1, explain: 'We eat a cake.' },
        { id: 'p36-q3', topic: 'Arrange the Words', tiles: ['mum', 'My', 'chef.', 'is'], prompt: 'Arrange the words to make a sentence:', options: ['My mum is chef.', 'Mum is my chef.', 'Chef my is mum.', 'Is my mum chef.'], answer: 0, explain: 'Start with "My mum" → My mum is chef. (My mum is a chef.)' },
        { id: 'p36-q4', topic: 'Arrange the Words', tiles: ['dog', 'is', 'big.', 'The'], prompt: 'Arrange the words to make a sentence:', options: ['Dog the is big.', 'The big is dog.', 'The dog is big.', 'Is the dog big.'], answer: 2, explain: 'The dog is big.' },
        { id: 'p36-q5', topic: 'Arrange the Words', tiles: ['love', 'We', 'our', 'school.'], prompt: 'Arrange the words to make a sentence:', options: ['We love our school.', 'Our school love we.', 'Love we our school.', 'We our school love.'], answer: 0, explain: 'We love our school.' },
        { id: 'p36-q6', topic: 'Arrange the Words', tiles: ['has', 'She', 'doll.', 'a'], prompt: 'Arrange the words to make a sentence:', options: ['Has she a doll.', 'She has a doll.', 'A doll has she.', 'She a doll has.'], answer: 1, explain: 'She has a doll.' },
        { id: 'p38-q1', topic: 'Unscramble the Pet Sentence', tiles: ['I', 'parrot.', 'pet', 'have', 'a'], prompt: 'Unscramble the sentence:', options: ['I have a pet parrot.', 'I pet have a parrot.', 'A pet parrot have I.', 'Have I a pet parrot.'], answer: 0, explain: 'I have a pet parrot.' },
        { id: 'p38-q2', topic: 'Unscramble the Pet Sentence', tiles: ['dog', 'Her', 'called', 'is', 'Dolly.'], prompt: 'Unscramble the sentence:', options: ['Her Dolly is called dog.', 'Her dog is called Dolly.', 'Dog her is called Dolly.', 'Is her dog called Dolly.'], answer: 1, explain: 'Her dog is called Dolly.' },
        { id: 'p38-q3', topic: 'Unscramble the Pet Sentence', tiles: ['two', 'hamsters.', 'have', 'They'], prompt: 'Unscramble the sentence:', options: ['Have they two hamsters.', 'Two hamsters have they.', 'They have two hamsters.', 'They two hamsters have.'], answer: 2, explain: 'They have two hamsters.' },
        { id: 'p38-q4', topic: 'Unscramble the Pet Sentence', tiles: ['rabbit', 'My', 'is', 'called', 'Pebbles.'], prompt: 'Unscramble the sentence:', options: ['My rabbit is called Pebbles.', 'My Pebbles is called rabbit.', 'Rabbit my is called Pebbles.', 'Is my rabbit called Pebbles.'], answer: 0, explain: 'My rabbit is called Pebbles.' }
      ]
    },

    // Pages 61 (Ex 2-3) & 65 (Ex 2) — Gingerbread Sentences & Complete Sentences
    {
      id: 'w-order-gbm',
      title: 'Story Sentences & Picture Check',
      arTitle: 'جمل القصة وإكمال الجمل',
      emoji: '🏡',
      questions: [
        { id: 'p61-c1', topic: 'Complete the Sentence', prompt: 'Choose a word from (is, can, like): "The sun _______ hot."', options: ['is', 'can', 'like'], answer: 0, explain: 'The sun is hot.' },
        { id: 'p61-c2', topic: 'Complete the Sentence', prompt: 'Choose a word from (is, can, like): "I _______ hop."', options: ['is', 'can', 'like'], answer: 1, explain: 'I can hop.' },
        { id: 'p61-c3', topic: 'Complete the Sentence', prompt: 'Choose a word from (is, can, like): "I _______ my mum."', options: ['is', 'can', 'like'], answer: 2, explain: 'I like my mum.' },
        {
          id: 'p61-pic',
          topic: 'Look at the Picture',
          prompt: 'Look at the picture. Which sentence best completes: "I can see _______."',
          image: 'assets/img/house-sun.webp',
          options: [
            'a house, a cloud, and the sun.',
            'a shark and a dolphin in the sea.',
            'a tiger sleeping in the snow.',
            'a red bus at the bus stop.'
          ],
          answer: 0,
          explain: 'The picture shows a cloud, a house, and the yellow sun!'
        },
        { id: 'p65-o1', topic: 'Gingerbread Man Order', tiles: ['The', 'kitchen', "woman's", 'in', 'old', 'the.'], prompt: 'Put the words in the correct order:', options: ["The old woman's in the kitchen.", "The kitchen's in the old woman.", "In the old kitchen woman's the.", "Old the woman's in kitchen the."], answer: 0, explain: "The old woman's in the kitchen." },
        { id: 'p65-o2', topic: 'Gingerbread Man Order', tiles: ['and', 'little', 'runs', 'The', 'gingerbread', 'runs', 'man.'], prompt: 'Put the words in the correct order:', options: ['The little gingerbread man runs and runs.', 'Runs and runs the gingerbread little man.', 'The gingerbread runs and little man runs.', 'Little man the gingerbread runs and runs.'], answer: 0, explain: 'The little gingerbread man runs and runs.' },
        { id: 'p65-o3', topic: 'Gingerbread Man Order', tiles: ['to', 'with', 'I', 'be', 'you', 'want', 'friends.'], prompt: 'Put the words in the correct order:', options: ['I want to be friends with you.', 'I friends want to be with you.', 'With you I be want to friends.', 'Want I to friends be with you.'], answer: 0, explain: 'I want to be friends with you.' },
        { id: 'p65-o4', topic: 'Gingerbread Man Order', tiles: ['river', 'fox', 'out', 'across', 'and', 'The', 'swims', 'jumps', 'the.'], prompt: 'Put the words in the correct order:', options: ['The fox jumps out and swims across the river.', 'The river jumps out and swims across the fox.', 'Fox the across river jumps out and swims the.', 'The fox across swims and jumps out the river.'], answer: 0, explain: 'The fox jumps out and swims across the river.' }
      ]
    },

    // Page 34 — Is It a Sentence? (Yes or No — all 10 items)
    {
      id: 'w-is-sentence',
      title: 'Is It a Sentence? (Yes or No)',
      arTitle: 'هل هذه جملة صحيحة؟',
      emoji: '✅',
      questions: [
        { id: 'p34-q1', topic: 'Is It a Sentence?', prompt: 'Is this a complete sentence? "The cat is sleeping."', options: ['Yes', 'No'], answer: 0, explain: 'Yes! It makes complete sense, starts with a capital letter, and ends with a full stop.' },
        { id: 'p34-q2', topic: 'Is It a Sentence?', prompt: 'Is this a complete sentence? "under the big tree"', options: ['Yes', 'No'], answer: 1, explain: 'No! It does not tell who or what is under the tree, and has no capital or full stop.' },
        { id: 'p34-q3', topic: 'Is It a Sentence?', prompt: 'Is this a complete sentence? "She runs fast."', options: ['Yes', 'No'], answer: 0, explain: 'Yes! Complete thought with capital letter and full stop.' },
        { id: 'p34-q4', topic: 'Is It a Sentence?', prompt: 'Is this a complete sentence? "happy very boy the"', options: ['Yes', 'No'], answer: 1, explain: 'No! The words are all mixed up and do not make sense.' },
        { id: 'p34-q5', topic: 'Is It a Sentence?', prompt: 'Is this a complete sentence? "I like ice cream."', options: ['Yes', 'No'], answer: 0, explain: 'Yes! Complete thought with capital I and a full stop.' },
        { id: 'p34-q6', topic: 'Is It a Sentence?', prompt: 'Is this a complete sentence? "the red ball"', options: ['Yes', 'No'], answer: 1, explain: 'No! Missing an action/verb, capital letter, and full stop.' },
        { id: 'p34-q7', topic: 'Is It a Sentence?', prompt: 'Is this a complete sentence? "Dad is cooking dinner."', options: ['Yes', 'No'], answer: 0, explain: 'Yes! Complete sentence with capital D and a full stop.' },
        { id: 'p34-q8', topic: 'Is It a Sentence?', prompt: 'Is this a complete sentence? "jumping high so"', options: ['Yes', 'No'], answer: 1, explain: 'No! Mixed-up words and not a complete thought.' },
        { id: 'p34-q9', topic: 'Is It a Sentence?', prompt: 'Is this a complete sentence? "We go to the park."', options: ['Yes', 'No'], answer: 0, explain: 'Yes! Complete sentence with capital W and a full stop.' },
        { id: 'p34-q10', topic: 'Is It a Sentence?', prompt: 'Is this a complete sentence? "my blue bag and"', options: ['Yes', 'No'], answer: 1, explain: 'No! It stops mid-thought after "and", with no capital or full stop.' }
      ]
    },

    // Page 53 — Match the Sentence Halves (all 8 items)
    {
      id: 'w-match-halves',
      title: 'Match the Sentence Halves',
      arTitle: 'توصيل نصفي الجملة',
      emoji: '🔗',
      questions: [
        { id: 'p53-q1', topic: 'Match the Half', prompt: 'Match the sentence: "The dog _______"', options: ['is barking.', 'is shining.', 'cooking dinner.', 'to the shop.'], answer: 0, explain: 'The dog is barking.' },
        { id: 'p53-q2', topic: 'Match the Half', prompt: 'Match the sentence: "I can _______"', options: ['a red hat.', 'see the moon.', 'is singing.', 'cooking dinner.'], answer: 1, explain: 'I can see the moon.' },
        { id: 'p53-q3', topic: 'Match the Half', prompt: 'Match the sentence: "Mum is _______"', options: ['cooking dinner.', 'see the moon.', 'to the shop.', 'a red hat.'], answer: 0, explain: 'Mum is cooking dinner.' },
        { id: 'p53-q4', topic: 'Match the Half', prompt: 'Match the sentence: "We play _______"', options: ['is shining.', 'in the garden.', 'is barking.', 'a red hat.'], answer: 1, explain: 'We play in the garden.' },
        { id: 'p53-q5', topic: 'Match the Half', prompt: 'Match the sentence: "The bird _______"', options: ['to the shop.', 'cooking dinner.', 'is singing.', 'in the garden.'], answer: 2, explain: 'The bird is singing.' },
        { id: 'p53-q6', topic: 'Match the Half', prompt: 'Match the sentence: "She has _______"', options: ['a red hat.', 'is shining.', 'is barking.', 'to the shop.'], answer: 0, explain: 'She has a red hat.' },
        { id: 'p53-q7', topic: 'Match the Half', prompt: 'Match the sentence: "Dad went _______"', options: ['is singing.', 'to the shop.', 'see the moon.', 'is shining.'], answer: 1, explain: 'Dad went to the shop.' },
        { id: 'p53-q8', topic: 'Match the Half', prompt: 'Match the sentence: "The sun _______"', options: ['is shining.', 'is barking.', 'in the garden.', 'a red hat.'], answer: 0, explain: 'The sun is shining.' }
      ]
    },

    // Pages 42 & 63 — Label the Elephant (4 parts + 7 parts = 11 questions)
    {
      id: 'w-label-elephant',
      title: 'Label the Elephant',
      arTitle: 'تسمية أجزاء الفيل',
      emoji: '🐘',
      trophy: { id: 'trophy-elephant', icon: '🐘', name: 'Elephant Tracker', ar: 'خبير الفيل' },
      questions: [
        // Page 42 (4 parts)
        { id: 'p42-q1', topic: 'Parts of an Elephant', prompt: 'Which part of the elephant is marked with the glowing "?" box?', diagram: { image: 'assets/img/elephant-4.webp', pinX: 13, pinY: 14 }, options: ['tusks', 'ears', 'trunk', 'tail'], answer: 0, explain: 'The arrow points to the sharp white tusks!' },
        { id: 'p42-q2', topic: 'Parts of an Elephant', prompt: 'Which part of the elephant is marked with the glowing "?" box?', diagram: { image: 'assets/img/elephant-4.webp', pinX: 56, pinY: 14 }, options: ['tusks', 'ears', 'trunk', 'tail'], answer: 1, explain: 'The arrow points to the elephant\'s big ears!' },
        { id: 'p42-q3', topic: 'Parts of an Elephant', prompt: 'Which part of the elephant is marked with the glowing "?" box?', diagram: { image: 'assets/img/elephant-4.webp', pinX: 86, pinY: 14 }, options: ['tusks', 'ears', 'trunk', 'tail'], answer: 3, explain: 'The arrow points to the tail at the back!' },
        { id: 'p42-q4', topic: 'Parts of an Elephant', prompt: 'Which part of the elephant is marked with the glowing "?" box?', diagram: { image: 'assets/img/elephant-4.webp', pinX: 13, pinY: 66 }, options: ['tusks', 'ears', 'trunk', 'tail'], answer: 2, explain: 'The elephant\'s long nose is called a trunk!' },
        // Page 63 (7 parts)
        { id: 'p63-q1', topic: 'Label the Elephant', prompt: 'Which part of the elephant is marked with the glowing "?" box?', diagram: { image: 'assets/img/elephant-7.webp', pinX: 12, pinY: 22 }, options: ['eye', 'ear', 'mouth', 'foot'], answer: 0, explain: 'The line points right to the elephant\'s eye!' },
        { id: 'p63-q2', topic: 'Label the Elephant', prompt: 'Which part of the elephant is marked with the glowing "?" box?', diagram: { image: 'assets/img/elephant-7.webp', pinX: 14, pinY: 47 }, options: ['trunk', 'tusks', 'tail', 'eye'], answer: 1, explain: 'The line points to the white tusks!' },
        { id: 'p63-q3', topic: 'Label the Elephant', prompt: 'Which part of the elephant is marked with the glowing "?" box?', diagram: { image: 'assets/img/elephant-7.webp', pinX: 12, pinY: 77 }, options: ['tail', 'foot', 'trunk', 'ear'], answer: 2, explain: 'The line points to the long curved trunk!' },
        { id: 'p63-q4', topic: 'Label the Elephant', prompt: 'Which part of the elephant is marked with the glowing "?" box?', diagram: { image: 'assets/img/elephant-7.webp', pinX: 31, pinY: 91 }, options: ['mouth', 'eye', 'foot', 'tusks'], answer: 0, explain: 'The line goes straight up to the elephant\'s mouth!' },
        { id: 'p63-q5', topic: 'Label the Elephant', prompt: 'Which part of the elephant is marked with the glowing "?" box?', diagram: { image: 'assets/img/elephant-7.webp', pinX: 84, pinY: 8 }, options: ['tail', 'ear', 'eye', 'trunk'], answer: 1, explain: 'The line points to the elephant\'s big ear!' },
        { id: 'p63-q6', topic: 'Label the Elephant', prompt: 'Which part of the elephant is marked with the glowing "?" box?', diagram: { image: 'assets/img/elephant-7.webp', pinX: 87, pinY: 65 }, options: ['foot', 'trunk', 'tail', 'mouth'], answer: 2, explain: 'The line points to the elephant\'s tail!' },
        { id: 'p63-q7', topic: 'Label the Elephant', prompt: 'Which part of the elephant is marked with the glowing "?" box?', diagram: { image: 'assets/img/elephant-7.webp', pinX: 84, pinY: 91 }, options: ['foot', 'ear', 'tusks', 'eye'], answer: 0, explain: 'The line points to the elephant\'s big foot!' }
      ]
    },

    // Page 49 — Label the Tiger (all 10 parts)
    {
      id: 'w-label-tiger',
      title: 'Label the Tiger',
      arTitle: 'تسمية أجزاء النمر',
      emoji: '🐯',
      trophy: { id: 'trophy-tiger', icon: '🐯', name: 'Tiger Expert', ar: 'خبير النمر' },
      questions: [
        { id: 'p49-q1', topic: 'Label the Tiger', prompt: 'Which part of the tiger is marked with the glowing "?" box?', diagram: { image: 'assets/img/tiger-10.webp', pinX: 16, pinY: 12 }, options: ['ear', 'eye', 'nose', 'paw'], answer: 0, explain: 'The line points to the tiger\'s ear!' },
        { id: 'p49-q2', topic: 'Label the Tiger', prompt: 'Which part of the tiger is marked with the glowing "?" box?', diagram: { image: 'assets/img/tiger-10.webp', pinX: 55, pinY: 9 }, options: ['ear', 'eye', 'mouth', 'back'], answer: 1, explain: 'The line points down to the tiger\'s eye!' },
        { id: 'p49-q3', topic: 'Label the Tiger', prompt: 'Which part of the tiger is marked with the glowing "?" box?', diagram: { image: 'assets/img/tiger-10.webp', pinX: 23, pinY: 32 }, options: ['nose', 'mouth', 'paw', 'tail'], answer: 0, explain: 'The line points straight to the tiger\'s pink nose!' },
        { id: 'p49-q4', topic: 'Label the Tiger', prompt: 'Which part of the tiger is marked with the glowing "?" box?', diagram: { image: 'assets/img/tiger-10.webp', pinX: 62, pinY: 26 }, options: ['whisker', 'ear', 'tail', 'leg'], answer: 0, explain: 'The line points to the tiger\'s long white whisker!' },
        { id: 'p49-q5', topic: 'Label the Tiger', prompt: 'Which part of the tiger is marked with the glowing "?" box?', diagram: { image: 'assets/img/tiger-10.webp', pinX: 17, pinY: 54 }, options: ['eye', 'mouth', 'back', 'stripe'], answer: 1, explain: 'The line points up to the tiger\'s mouth!' },
        { id: 'p49-q6', topic: 'Label the Tiger', prompt: 'Which part of the tiger is marked with the glowing "?" box?', diagram: { image: 'assets/img/tiger-10.webp', pinX: 9, pinY: 79 }, options: ['paw', 'ear', 'nose', 'back'], answer: 0, explain: 'The line points to the tiger\'s front paw!' },
        { id: 'p49-q7', topic: 'Label the Tiger', prompt: 'Which part of the tiger is marked with the glowing "?" box?', diagram: { image: 'assets/img/tiger-10.webp', pinX: 84, pinY: 32 }, options: ['back', 'mouth', 'paw', 'whisker'], answer: 0, explain: 'The line points to the tiger\'s back!' },
        { id: 'p49-q8', topic: 'Label the Tiger', prompt: 'Which part of the tiger is marked with the glowing "?" box? (The black line on its fur)', diagram: { image: 'assets/img/tiger-10.webp', pinX: 90, pinY: 67 }, options: ['stripe', 'eye', 'nose', 'ear'], answer: 0, explain: 'Tigers have black stripes on their orange fur — stripe!' },
        { id: 'p49-q9', topic: 'Label the Tiger', prompt: 'Which part of the tiger is marked with the glowing "?" box?', diagram: { image: 'assets/img/tiger-10.webp', pinX: 79, pinY: 90 }, options: ['tail', 'paw', 'mouth', 'whisker'], answer: 0, explain: 'The line points up to the tiger\'s long striped tail!' },
        { id: 'p49-q10', topic: 'Label the Tiger', prompt: 'Which part of the tiger is marked with the glowing "?" box?', diagram: { image: 'assets/img/tiger-10.webp', pinX: 49, pinY: 90 }, options: ['leg', 'ear', 'nose', 'eye'], answer: 0, explain: 'This points underneath to the tiger\'s strong leg!' }
      ]
    },

    // Pages 24 & 30 — Describing Settings (Savanna & Forest Word Banks)
    {
      id: 'w-describe-settings',
      title: 'Describe the Settings',
      arTitle: 'وصف الغابة والمكان من بنك الكلمات',
      emoji: '🌳',
      questions: [
        // Page 24: green leaves, rocks, grass, animals, lion, tall trees, giraffe, tree, hot, forest
        { id: 'p24-q1', topic: 'Describe the Setting', prompt: 'Look at the picture. Use the word bank: "There are many _______ on the branches."', image: 'assets/img/scene-savanna.webp', options: ['green leaves', 'snowflakes', 'sharks', 'pillows'], answer: 0, explain: 'From the word bank: green leaves!' },
        { id: 'p24-q2', topic: 'Describe the Setting', prompt: 'Look at the picture. Use the word bank: "A _______ is sitting on the rocks."', image: 'assets/img/scene-savanna.webp', options: ['lion', 'dolphin', 'polar bear', 'hen'], answer: 0, explain: 'From the word bank: lion sitting on the rocks!' },
        { id: 'p24-q3', topic: 'Describe the Setting', prompt: 'Look at the picture. Use the word bank: "A tall _______ stands near the tall trees."', image: 'assets/img/scene-savanna.webp', options: ['giraffe', 'whale', 'cat', 'rat'], answer: 0, explain: 'From the word bank: giraffe!' },
        { id: 'p24-q4', topic: 'Describe the Setting', prompt: 'Look at the picture. Use the word bank: "Many wild _______ walk on the grass."', image: 'assets/img/scene-savanna.webp', options: ['animals', 'bicycles', 'books', 'clocks'], answer: 0, explain: 'From the word bank: animals on the grass!' },
        { id: 'p24-q5', topic: 'Describe the Setting', prompt: 'Look at the picture. Which sentence correctly describes this setting using the word bank?', image: 'assets/img/scene-savanna.webp', options: ['There are tall trees and rocks in the hot forest.', 'There is cold snow and a polar bear in the sea.', 'There is a red bus at the school playground.', 'There is a bed and a chair in the bedroom.'], answer: 0, explain: 'Tall trees, rocks, hot, and forest are all from this setting\'s word bank!' },
        // Page 30: quiet, huge, small, blue birds, green leaves, peaceful, insects, tall trees, forest
        { id: 'p30-q1', topic: 'Describe the Forest', prompt: 'Look at the forest picture. Use the word bank: "Two _______ sit on the tree branches."', image: 'assets/img/scene-forest.webp', options: ['blue birds', 'grey elephants', 'brown dogs', 'pink pigs'], answer: 0, explain: 'From the word bank: blue birds!' },
        { id: 'p30-q2', topic: 'Describe the Forest', prompt: 'Look at the forest picture. Use the word bank: "There are _______ and green leaves in the forest."', image: 'assets/img/scene-forest.webp', options: ['tall trees', 'fast cars', 'icy water', 'red hats'], answer: 0, explain: 'From the word bank: tall trees and green leaves!' },
        { id: 'p30-q3', topic: 'Describe the Forest', prompt: 'Look at the forest picture. Use the word bank: "Small _______ rest on the logs and leaves."', image: 'assets/img/scene-forest.webp', options: ['insects', 'sharks', 'giraffes', 'buses'], answer: 0, explain: 'From the word bank: small insects (butterfly and ladybug)!' },
        { id: 'p30-q4', topic: 'Describe the Forest', prompt: 'Look at the forest picture. Use the word bank: "The forest is quiet and _______."', image: 'assets/img/scene-forest.webp', options: ['peaceful', 'noisy', 'icy', 'salty'], answer: 0, explain: 'From the word bank: quiet and peaceful!' },
        { id: 'p30-q5', topic: 'Describe the Forest', prompt: 'Which sentence describes this picture using words from the word bank?', image: 'assets/img/scene-forest.webp', options: ['The huge forest has tall trees, green leaves, and blue birds.', 'The desert has hot sand and camels.', 'The ocean has dolphins and big ships.', 'The classroom has desks and pencils.'], answer: 0, explain: 'Huge, forest, tall trees, green leaves, and blue birds are all from the word bank!' }
      ]
    },

    // Pages 55 & 64 — Describing Animals (Tiger & Elephant Word Banks)
    {
      id: 'w-describe-animals',
      title: 'Describe the Tiger & Elephant',
      arTitle: 'وصف النمر والفيل من بنك الكلمات',
      emoji: '🐾',
      questions: [
        // Page 55: big, strong, fast, orange, black, striped, wild, scary, long tail, sharp teeth, jungle, animal, brave, furry, roars, hunts, two, one, tail
        { id: 'p55-q1', topic: 'Describe the Tiger', prompt: 'Look at the tiger. Use the word bank: "The tiger lives in the _______."', image: 'assets/img/scene-tiger.webp', options: ['jungle', 'ocean', 'playground', 'clinic'], answer: 0, explain: 'From the tiger word bank: jungle!' },
        { id: 'p55-q2', topic: 'Describe the Tiger', prompt: 'Look at the tiger. Use the word bank: "The tiger is orange and _______."', image: 'assets/img/scene-tiger.webp', options: ['black', 'blue', 'pink', 'grey'], answer: 0, explain: 'From the tiger word bank: orange and black (striped)!' },
        { id: 'p55-q3', topic: 'Describe the Tiger', prompt: 'Look at the tiger. Use the word bank: "The tiger has _______ to eat."', image: 'assets/img/scene-tiger.webp', options: ['sharp teeth', 'long tusks', 'soft wings', 'green leaves'], answer: 0, explain: 'From the tiger word bank: sharp teeth!' },
        { id: 'p55-q4', topic: 'Describe the Tiger', prompt: 'Look at the tiger. Use the word bank: "The tiger _______ loudly and hunts for food."', image: 'assets/img/scene-tiger.webp', options: ['roars', 'swims', 'flies', 'sings'], answer: 0, explain: 'From the tiger word bank: roars and hunts!' },
        { id: 'p55-q5', topic: 'Describe the Tiger', prompt: 'Which sentence describes the tiger using the word bank?', image: 'assets/img/scene-tiger.webp', options: ['The tiger is a big, strong, striped wild animal with a long tail.', 'The tiger is a tiny pink fish with smooth skin.', 'The tiger has a long trunk and sprays water.', 'The tiger lives in cold icy snow with a cub.'], answer: 0, explain: 'Big, strong, striped, wild, animal, and long tail are all in the tiger word bank!' },
        // Page 64: big, grey, strong, heavy, wild, long trunk, thick skin, long tusks, ears, slow, sprays water, carries, huge, four, legs, two, eyes, one, tail
        { id: 'p64-q1', topic: 'Describe the Elephant', prompt: 'Look at the elephant. Use the word bank: "The elephant is a big, _______, heavy animal."', image: 'assets/img/scene-elephant.webp', options: ['grey', 'orange', 'yellow', 'green'], answer: 0, explain: 'From the elephant word bank: big, grey, heavy!' },
        { id: 'p64-q2', topic: 'Describe the Elephant', prompt: 'Look at the elephant. Use the word bank: "The elephant has a _______ and sprays water."', image: 'assets/img/scene-elephant.webp', options: ['long trunk', 'sharp beak', 'striped tail', 'red cape'], answer: 0, explain: 'From the elephant word bank: long trunk and sprays water!' },
        { id: 'p64-q3', topic: 'Describe the Elephant', prompt: 'Look at the elephant. Use the word bank: "The elephant has two white _______."', image: 'assets/img/scene-elephant.webp', options: ['long tusks', 'blue wings', 'small horns', 'pink fins'], answer: 0, explain: 'From the elephant word bank: long tusks!' },
        { id: 'p64-q4', topic: 'Describe the Elephant', prompt: 'Look at the elephant. Use the word bank: "The elephant has _______ strong legs and big ears."', image: 'assets/img/scene-elephant.webp', options: ['four', 'two', 'six', 'one'], answer: 0, explain: 'From the elephant word bank: four legs and big ears!' },
        { id: 'p64-q5', topic: 'Describe the Elephant', prompt: 'Which sentence describes the elephant using the word bank?', image: 'assets/img/scene-elephant.webp', options: ['The huge elephant has thick skin, big ears, and a long trunk.', 'The elephant is a fast orange animal that roars.', 'The elephant is a small bird that flies in the sky.', 'The elephant lives in the ocean and eats fish.'], answer: 0, explain: 'Huge, thick skin, ears, and long trunk are all from the elephant word bank!' }
      ]
    }
  ]
};
