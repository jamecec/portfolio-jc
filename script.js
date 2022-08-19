const referenceArr = [
  {quote:'"Jamece is an incredibly quick learner who is committed to improving her environment in any way she can. I have been senior to Jamece for the last year in our role as tax accountants with BDO USA. In that time, she has excelled in preparation of corporation, partnership, and individual tax returns. I have never seen her turn down a difficult project or challenge. When she encounters road blocks in a project, she continues to seek out solutions until one is found. She does not give up. Jamece is always looking for ways to improve the processes of the firm. She recently pushed for some changes to our campus recruiting processes, resulting in better opportunities for both the students and our firm. She has created her own training materials to help newer associates more quickly learn how to do their job. Jamece is an effective and direct communicator and has excellent leadership potential. She is unafraid to ask clarifying questions when needed or to approach difficult subjects with her colleagues. I would fully recommend Jamece to anyone who is considering hiring her. She will be an invaluable member of any organization she joins."',
  name: "Erin Koller",
  title: "Tax Manager"},
  {quote:'"I had the opportunity to work with Jamece on multiple projects throughout the MBA program. She is one of the most proactive team members I have ever had the privilege of working with. She is highly skilled at analyzing data and can build a strategy to improve many aspects of a company. She is one of the most capable people I know in the Accounting and Business fields. Her leadership ability is impressive and she works with others very well. Simply put, Jamece will be an incredible asset to any team she is a part of!"',
  name: "Kalin Wall",
  title: "MBA Classmate"},
  {quote: '"Jamece is a calm and capable employee who possesses the knowledge and research abilities to get any job done at high levels of expectation. Her acute sensitivity to the English language keeps her a step above in the accounting realm"',
  name: "Kristi Askew",
  title: "Internal Audit Coworker"},
  {quote: '"Jamece and I worked closely in an internal audit team and also shared projects together in our MBA program. She is absolutely great to work with! She respects others opinion and is full of great ideas. She leads and takes action when there is a need. She works efficiently and utilizes her time well. Jamece is a hard worker and I highly advocate for her analytical skills. I really enjoyed working with her and I know that anyone would be lucky to have her in their team"',
  name: "Lana Christensen",
  title: "MBA Classmate and Internal Audit Coworker"}
];
const quoteDiv = document.querySelector('.ref-quote');
const nameDiv = document.querySelector('.ref-name');
const titleDiv = document.querySelector('.ref-title');
let selectedReference = 0;
quoteDiv.innerHTML = referenceArr[0].quote;
nameDiv.innerHTML = referenceArr[0].name;
titleDiv.innerHTML = referenceArr[0].title;

const ascendReference = () => {
  if(selectedReference === 3){
    selectedReference = 0
  }
  else{
    selectedReference++
  }
  quoteDiv.innerHTML = referenceArr[selectedReference].quote;
  nameDiv.innerHTML = referenceArr[selectedReference].name;
  titleDiv.innerHTML = referenceArr[selectedReference].title;
};

const descendReference = () => {
  if(selectedReference === 0){
    selectedReference = 3
  }
  else{
    selectedReference--
  }
  quoteDiv.innerHTML = referenceArr[selectedReference].quote;
  nameDiv.innerHTML = referenceArr[selectedReference].name;
  titleDiv.innerHTML = referenceArr[selectedReference].title;
};
