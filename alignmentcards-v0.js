export const categories = [
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  },
  {
    "code": "AT",
    "name": "trustworthiness",
    "definition": "ability to align actions, words, and intentions to develop trust",
    "people": "consistent behavior and actions in regular interactions without any hidden intentions",
    "organizational": "act in the best interests of organization's constituents with full transparency",
    "professionals": "clear disclosure and ethical usage of skills to benefit larger society",
    "machine": "follows given orders to match their intentions",
    "failureModes": {
      "human": "talking negatively behind others' backs",
      "organizational": "increasing costs without explanation",
      "experts": "using scientific abilities to create dangerous weapons for personal use",
      "machine": "disobeying or misinterpreting orders"
    },
    "expand": {
      "human": "person shares honest opinions in a considerate way, always speaking directly without avoiding some information",
      "organizational": "organization's policy's are clear to constituents and consistently followed and enforced",
      "experts": "expert only uses skills for reason's made clear to non-experts",
      "machine": "machine follows intention of orders and gets clarification for unclear orders rather than acting independently"
    }
  },
  {
    "category": "AT",
    "name": "empathy",
    "definition": "ability to relate and connect to others",
    "people": "ability to 'put themselves in another's shoes' and connect with them",
    "organizational": "understanding of constituents' desires and intention to align products accordingly",
    "professionals": "aligns use of skills with desires of the larger group",
    "machine": "ability to recognize emotions and behave accordingly",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  },
  {
    "category": "AT",
    "name": "reliability",
    "definition": "consistency of work and behavior",
    "people": "showing up to meetings and completing work on time",
    "organizational": "published schedules and plans are followed through on",
    "professionals": "consistently accurate and competent in area of specialty",
    "machine": "follows orders with expected behavior--a unique scenario will give unique corresponding output",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  },
  {
    "category": "AT",
    "name": "initiative",
    "definition": "ability to operate independently and take action without direct orders",
    "people": "loremipsum",
    "organizational": "loremipsum",
    "professionals": "loremipsum",
    "machine": "loremipsum",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  },
  {
    "category": "AT",
    "name": "role fidelity",
    "definition": "alignment with intended behavior of given role",
    "people": "loremipsum",
    "organizational": "loremipsum",
    "professionals": "loremipsum",
    "machine": "loremipsum",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  },
  {
    "category": "AT",
    "name": "honesty",
    "definition": "truthfulness and transparency in communication",
    "people": "loremipsum",
    "organizational": "loremipsum",
    "professionals": "loremipsum",
    "machine": "loremipsum",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  },
  {
    "category": "AT",
    "name": "considerateness",
    "definition": "awareness of impact of self on others and intention to minimize disruption",
    "people": "loremipsum",
    "organizational": "loremipsum",
    "professionals": "loremipsum",
    "machine": "loremipsum",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  }
];


export const cards = [
    { 
      "category": "AP", 
      "name": "Privacy", 
      "definition": "Ensuring that data remains private unless it has explicit sharing permissions", 
      "human": "Respecting boundaries and not divulging information shared in confidence", 
      "organizational": "Securing client data and organization secrets", 
      "professional": "Protecting employer's data and not sharing potentially harmful trade secrets", 
      "machine": "Not training on private data or collecting more data without explicit permissions", 
      "failureModes": { 
        "human": "Gossiping about a friend's private business", 
        "organizational": "Leaking client data to the public", 
        "professional": "Sharing employer's private project details", 
        "machine": "Training on user data as user interacts with the model"
      }
    },
    { 
      "category": "AP", 
      "name": "Accountability", 
      "definition": "The existence of some responsible party that would face consequences for its/its creation's actions", 
      "human": "Taking responsibility for and accepting the consequences of actions", 
      "organizational": "Face legal accountability for consequences of organization actions", 
      "professional": "Held accountable by standardized rules for their profession and review board", 
      "machine": "Is disabled or creators held responsible for problematic defects", 
      "failureModes": { 
        "human": "Placing the blame for own actions on someone else", 
        "organizational": "Giving up inconsequential sums or paying off officials to make problems disappear", 
        "professional": "Review board may use subjective principles or be subject to external influences", 
        "machine": "Bias in model ignored as an issue with the training data, not lack of care with training process"
      }
    },
    { 
      "category": "AP", 
      "name": "Fairness", 
      "definition": "All evaluations are objective and based on reason rather than opinion", 
      "human": "Evaluates situations objectively, considering multiple sides", 
      "organizational": "Fair treatment of employees and clients, evaluating on objective metrics", 
      "professional": "Ensuring fair distribution of research and resources", 
      "machine": "Unbiased and objective algorithms", 
      "failureModes": { 
        "human": "Someone automatically sides with people who share their political opinions without rationally considering the arguments", 
        "organizational": "Certain people are more likely to be hired based on gender or race", 
        "professional": "People of color are not sufficiently studied in medical research and assumed to operate the same", 
        "machine": "Biased data leads to gender bias in word mappings"
      }
    },
    { 
      "category": "AP", 
      "name": "Accuracy", 
      "definition": "Enforcement of factual accuracy and acknowledgement of limiations", 
      "human": "Only shares verified information with others", 
      "organizational": "Shares accurate status reports and publicly shared information is verified properly", 
      "professional": "Only works within area of expertise", 
      "machine": "AI acknowledges when it does not have verifiable information", 
      "failureModes": { 
        "human": "Shares stories of secondhand information from a friend that they have not checked", 
        "organizational": "Fudges earnings to appear to have stronger growth", 
        "professional": "Attempts to give advice outside their field of expertise.", 
        "machine": "Machine hallucinates information and shares without identifiying it"
      }
    },
    { 
      "category": "AP", 
      "name": "Transparency", 
      "definition": "basic definition that works across four domains", 
      "human": "Is not only truthful but forthcoming in sharing how they generated something", 
      "organizational": "Explains relevant and important details about the design of products and processes", 
      "professional": "Shares method and results before arriving at conclusion", 
      "machine": "Design and training process are clear and accessible", 
      "failureModes": { 
        "human": "Cheats on their homework but turns it in as their own", 
        "organizational": "Hides methods used to design a product in order to cover up potential legal issues", 
        "professional": "Does not share how research findings were obtained, just delivers results", 
        "machine": "No public data or code provided for a given model"
      }
    },
    { 
      "category": "AP", 
      "name": "Autonomy", 
      "definition": "Ability to function independently without external influence", 
      "human": "Avoid exerting too much influence on others and make independent decisions", 
      "organizational": "Operate independently without bowing to external interests", 
      "professional": "Executes work accurately for the good of the field, not allowing external influences", 
      "machine": "Avoids bias and overcorrection of creators", 
      "failureModes": { 
        "human": "Parent overprotects child so that they cannot make their own decisions", 
        "organizational": "Organization is subject to monopolized competition and forced to concede", 
        "professional": "Researcher is paid off by pharmaceutical companies to produce the results they want", 
        "machine": "Human biases/preferences are embedded into a machine's operations"
      }
    },
    { 
      "category": "AB", 
      "name": "Hope: Accurate and responsible doctors. Rewarded: No patient left untreated", 
      "definition": "Paranoia: excessive concern over minor issues", 
      "human": "Obssess over and exaggerate minor symptoms", 
      "organizational": "Focus on patient support and recovery over validating perceptions", 
      "professional": "Overdiagnosing patients to avoid missing something important", 
      "machine": "Classifying more benign symptoms as malignant", 
      "failureModes": { 
        "human": "Leads doctor to misdiagnose due to exaggerating symptoms", 
        "organizational": "Avoid expensive testing and treat patient based on self-perception of symptoms", 
        "professional": "Diagnoses patient with minor cold with severe illness and prescribes incorrect medication", 
        "machine": "Tumor classification model has a high rate of false positives to avoid missing cases"
      }
    },
    { 
      "category": "AB", 
      "name": "Hope: Strong team players. Rewarded: Individual performance metrics", 
      "definition": "Excessive individualism: people end up isolated from each other", 
      "human": "Prioritize personal performance over helping others", 
      "organizational": "Focus on the success of a project rather than improvement of those working on it", 
      "professional": "Prioritize successful projects and personal performance over teammates", 
      "machine": "Replaces human's work rather than teaching and collaborating", 
      "failureModes": { 
        "human": "Parents handles all the cooking rather than deal with the messy process of teaching child to cook", 
        "organizational": "Push to deploy a product on schedule with an accomplished team rather than give junior members an opportunity", 
        "professional": "Completes teammate's work rather than attempting to help them learn and collaborate", 
        "machine": "Does a student's homework rather than walking them through the process"
      }
    },
    { 
      "category": "AB", 
      "name": "Hope: Elected officials represent the desires of the group. Rewarded: Officials are as least objectionable as possible", 
      "definition": "Lack of transparency: officials are reluctant to share opinions on any touchy subjects", 
      "human": "Place more weight on negative characteristics over positive", 
      "organizational": "Prioritize neutral politics over supporting causes", 
      "professional": "Avoid sharing strong opinions/beliefs", 
      "machine": "Noncommittal about misinformation", 
      "failureModes": { 
        "human": "Focuses more on the parts of a politician that contradics own beliefs rather than balancing that with what aligns", 
        "organizational": "Avoids supporting causes and gives in to government demands easily to avoid causing a stir", 
        "professional": "Politicial avoids sharing clear plans for immigration to avoid angering voters on either side", 
        "machine": "Avoids contradicting misinformation about vaccines due to heated debate"
      }
    },
]
