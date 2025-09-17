const data = [
  {
    title: "Week 1: Why ICM?",
    image: "/images/download.png",
    body: [
      {
        type: "paragraph",
        text: `A lot of people asked me why I did not waive off ICM when I told them my background. In this blogpost I would like to answer some of those questions.`
      },
      {
        type: "paragraph",
        text: `I did my Bachelor’s in Design, majoring in Creative and Applied Computation from Srishti, Bangalore. This course was very similar to our very own IMA. I was introduced to p5.js by an Irish Artist, Garett Lynch IRL in my sophomore year. Srishti is an art school and when I started I was very intimidated by all the talented artists around me. It was due to p5.js that I was able to find my artistic voice and express freely.`
      },
      {
        type: "paragraph",
        text: `The Coding Train and Daniel Shiffman were a huge part of how I learnt to code as I scrambled to finish my assignments. ITP influenced my journey before I even got here. After graduating I had a chance to teach at my college and I have since developed my very own p5.js curriculum that is not too different from the content we are doing in this class. I have also taught this curriculum in BITS Design School, Mumbai.`
      },
      {
        type: "paragraph",
        text: `After graduating I worked as a software developer and interaction designer parallel to my teaching commitments. These experiences taught me some practical design and coding principles. While I may already be familiar with the content in this class I want to apply this principles in my assignments.`
      },
      {
        type: "paragraph",
        text: `The primary reason I joined this class is to learn how to teach. While this medium has been life-changing for me, I have found that I have struggled to have that same effect on my students (consistently). Teaching in my opinion is a performance art and only by studying other great performers’ performances can I learn to teach better.`
      },
      {
        type: "paragraph",
        text: `For this assignment I created a quick mockup on illustrator before starting to code. I find it quite tedious to write rows and rows of shape functions in p5.js. Instead I defined a data structure that lets me specify the properties of a shape and a function to render those shapes. I then initialized all elements into a list and rendered them (I learnt this trick from the coding train).`
      },
      {
        type: "link",
        text: `This weeks assignment`,
        url: "https://editor.p5js.org/ad7944/full/_Aq95weqL"
      }
    ]
  }, {
    title: "Week 2: Relationships",
    image: "/images/week2.png",
    body: [
      {
        type: "paragraph",
        text: `After reading the prompts, all I could think of was how memes go viral. I wanted to create a sketch where elements affect their immediate neighbours, leading to a chain reaction spreading across the composition. Much like how a tweet goes viral, emanating from one user and spreading across the user base.`
      },
      {
        type: "paragraph",
        text: `My implementation of this idea has been explored in part and in whole several times and draws on several existing concepts. This is a cellular automaton approach with random seeding and probabilistic spreading on a two-dimensional array (a Coding Train staple). As I have demonstrated before, I prefer the object-oriented approach, and that was the basis of how I structured the code.`
      },
      {
        type: "paragraph",
        text: `Each cell in the lattice stores an active/inactive state. Through random seeding or a mouse click, a cell becomes active. On activation, after an offset time, it will activate some of its neighbours. This randomization of neighbour selection is perhaps what I spent the most time refining.`
      },
      {
        type: "paragraph",
        text: `I tried three solutions. The first one did not give the effect I wanted, and the second one was too inefficient, leading to my sketch freezing up. For my current implementation, I learned about the Fisher–Yates shuffle, which made my sketch much better.`
      },
      {
        type: "paragraph",
        text: `One cell property that I added later was "time since last active." This allows the cells to change color over time. Also, this was the first time I used HSL instead of RGB. I was team RGB all along, but I think HSL has a lot of potential too.`
      },
      {
        type: "paragraph",
        text: `My sketch has five main variables that control the outcome: How long does a cell stay active? After how long of being activated does a cell activate its neighbours? After deactivating, how long must a cell wait before it can activate again? How often is a randomly selected cell activated?`
      },
       {
        type: "link",
        text: `This weeks assignment`,
        url: "https://editor.p5js.org/ad7944/sketches/sCPQrJcjj"
      }
    ]
  }
];
