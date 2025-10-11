export const categories = [
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
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
]
