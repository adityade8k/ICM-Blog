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
  },
  {
    title: "Week 3: Back to the Basics",
    image: "/images/week3.png",
    body: [
      {
        type: "paragraph",
        text: `For this week's assignment I worked in a team with Lingwu. My approach was shaped by two constraints: first, since we are not using object-oriented programming in class, I decided not to use it in my sketch; second, I wanted to introduce Lingwu to my methods of creating p5.js sketches.`
      },
      {
        type: "paragraph",
        text: `Not using OOP meant handling everything with functions. I needed a way to implement oscillation in my sketch, so I used trigonometric functions. I don’t use this method often, and it was refreshing to rediscover techniques I hadn’t used in a while.`
      },
      {
        type: "paragraph",
        text: `Many of my p5 sketches involve building a "base" element, then repeating that to create a parent object, and then repeating that again. This approach can generate a lot of complexity with just a few layers. The use of offsets paired with trigonometric functions can create interesting movement in the sketch.`
      },
      {
        type: "paragraph",
        text: `I guided Lingwu by setting short, achievable goals. We started by rendering a trapezoid. The next challenge was to make the shorter parallel side oscillate between two positions. This turned out to be more complicated than I expected, and trigonometric functions ultimately made it possible.`
      },
      {
        type: "paragraph",
        text: `Once the trapezoid logic was working, we rendered several trapezoids in a ring and then layered multiple rings with an offset to create the final effect. Lingwu made his own modification by allowing the user to change the color scheme by clicking on different parts of the screen. His handling of these "modes" reminded me of my own approach in my early days of coding.`
      },
      {
        type: "link",
        text: `This weeks assignment`,
        url: "https://editor.p5js.org/ad7944/sketches/XksmfuloO"
      }
    ]
  }
];

data.push({
  title: "Week 4: New Grid, who this?",
  image: "/images/week4.png",
  body: [
    {
      type: "paragraph",
      text: `When I read the worksheet prompt about looping without using for or while, my first thought was: I always reach for the for loop. I set up an i, run it through, and iterate—that’s my default muscle memory. This time I had to break it.`
    },
    {
      type: "paragraph",
      text: `I ended up revisiting recursion. It’s something I’ve known about for a while, but I’ve never been fully confident using it. In this sketch, I built a grid purely through recursive calls. That was exciting because creating grids is the foundation of how I teach p5.js—lay down a lattice, place elements in cells, and then either synchronize them or randomize them.`
    },
    {
      type: "paragraph",
      text: `Of course, I couldn’t fully replicate my usual style. Normally I’d add randomization, but without objects I couldn’t easily slot in my preferred randomness patterns. That limitation stood out—though I’m already thinking of ways around it, like weaving randomness directly into the recursive branching.`
    },
    {
      type: "paragraph",
      text: `One thing I noticed quickly: the recursive version isn’t very efficient. Once the resolution goes beyond five, six, seven divisions, the sketch starts to freeze. That was disappointing because, conceptually, recursion feels cleaner. Still, the performance ceiling makes it impractical at scale.`
    },
    {
      type: "paragraph",
      text: `What I’m taking away is that recursion offers a different way of thinking about grids—not just a mechanical substitution for a for loop, but a structural shift where each cell leads to the next, call by call. I also explored trigonometric functions further in this sketch.`
    },
    {
        type: "link",
        text: `This weeks assignment`,
        url: "https://editor.p5js.org/ad7944/sketches/zXeEWMm3W"
      }
  ]
});
