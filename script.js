// Modern Quiz App with Enhanced UX
const questions = [
    // Scrum Questions
    {
        topic: "Scrum",
        question: "Which event is performed at the beginning of the sprint?",
        options: [
            "Daily scrum",
            "Sprint retrospective",
            "Sprint review",
            "Sprint planning"
        ],
        correct: 3
    },
    // Version Control & Collaboration Questions
    {
        topic: "Version Control & Collaboration",
        question: "When working in an app with version control, which concept would you use to share your database with your team?",
        options: [
            "By creating a dataset",
            "Simply by committing the app to Team Server",
            "By exporting a app package and sharing it with your team",
            "By creating a data snapshot and adding it to the deployment directory of your app"
        ],
        correct: 3
    },
    {
        topic: "Version Control & Collaboration",
        question: "What type of conflict occurs when you and your colleague both modified the microflow implementing the delete behavior?",
        options: [
            "Modify-Modify",
            "Delete-Modify",
            "Delete-Delete",
            "Modify-Delete"
        ],
        correct: 0
    },
    {
        topic: "Version Control & Collaboration",
        question: "What is a tagged version?",
        options: [
            "A branch created from the current app revision",
            "A revision of the main line",
            "A revision that has been used to build a Mx deployment package",
            "A revision of another branch line"
        ],
        correct: 2
    },
    {
        topic: "Version Control & Collaboration",
        question: "Which function is used to merge a complete branch into the mainline?",
        options: [
            "Merge feature branch",
            "Cherry pick (or Port fix)",
            "Quick fix",
            "Advanced merge"
        ],
        correct: 0
    },
    {
        topic: "Version Control & Collaboration",
        question: "Which of the below mentioned options can be used to merge selected revisions into and from all lines, main line or branch line?",
        options: [
            "Advanced merge",
            "Merge feature branch",
            "Cherry Pick (or Port fix)",
            "Quick fix"
        ],
        correct: 2
    },
    // XPath in Mendix Questions
    {
        topic: "XPath in Mendix",
        question: "Where in Mendix Studio Pro can you configure XPaths?",
        options: [
            "Text widgets",
            "Navigation",
            "List Views",
            "Page access rules"
        ],
        correct: 2
    },
    {
        topic: "XPath in Mendix",
        question: "Which Widget feature utilizes XPaths?",
        options: [
            "Selectable data constraints on Reference Selectors",
            "Styling properties of Action Buttons",
            "Dynamic text in Labels",
            "The tab index of a Group Box"
        ],
        correct: 0
    },
    {
        topic: "XPath in Mendix",
        question: "Where can you utilize XPaths in microflows?",
        options: [
            "In the input parameter",
            "In the 'Open page' action",
            "In the 'Retrieve' action",
            "In the 'Commit' action"
        ],
        correct: 2
    },
    {
        topic: "XPath in Mendix",
        question: "How do you begin typing an XPath?",
        options: [
            "[",
            "(",
            "'",
            "<"
        ],
        correct: 0
    },
    {
        topic: "XPath in Mendix",
        question: "If you want to open the XPath auto-complete menu, you need to press:",
        options: [
            "Ctrl + O",
            "Ctrl + Space",
            "Ctrl + Shift",
            "Shift + Space"
        ],
        correct: 1
    },
    {
        topic: "XPath in Mendix",
        question: "Say you are writing an XPath in a Retrieve action for the VacationRequest entity in a Microflow. If you write in the XPath window [Status = 'Cancelled'], what will be returned?",
        options: [
            "A list of all requests except the ones that are cancelled",
            "A list of all requests with the status set to 'Cancelled'",
            "A new list of requests where the Status will not be 'Cancelled'",
            "A new object with Status = 'Cancelled'"
        ],
        correct: 1
    },
    {
        topic: "XPath in Mendix",
        question: "Say you are writing an XPath in a Retrieve action on the VacationRequest entity in a Microflow. If you write in the XPath window [VacationRequest.VacationRequest_Submitter='[%CurrentUser%]'], what will be returned?",
        options: [
            "The earliest Vacation Request that the current user has submitted",
            "A list of all the vacation requests submitted by the current user that have yet to be approved",
            "A list of all vacation requests submitted by the current user",
            "A list of all the vacation requests submitted by the current user where the status is 'Approved'"
        ],
        correct: 2
    },
    {
        topic: "XPath in Mendix",
        question: "Let's assume you add a new decimal attribute to the VacationRequest entity called 'DaysUsed'. If you write a microflow with a Retrieve action using XPath: [DaysUsed < 4.5 and not(VacationManagement.VacationRequest_Submitter/Administration.Account)], what will be returned?",
        options: [
            "A list of all VacationRequests that are shorter than 4.5 days and do not have a Submitter assigned",
            "A list of all VacationRequests that are longer than 4.5 days",
            "A list of all VacationRequests that have been approved and are shorter than 4.5 days",
            "A list of all VacationRequests that are shorter than 4.5 days and have a Submitter assigned"
        ],
        correct: 0
    },
    {
        topic: "XPath in Mendix",
        question: "If we populate a DataGrid of VacationRequest entities with the following XPath constraint: [StartDate = empty], what will happen?",
        options: [
            "The grid will show All VacationRequests where the StartDate is greater than the current date",
            "The grid will show the VacationRequest with the oldest StartDate",
            "The grid will show All VacationRequests where the StartDate is not populated",
            "This XPath will throw an error in Mendix Studio Pro. DateTimes cannot be empty"
        ],
        correct: 2
    },
    {
        topic: "Scrum",
        question: "What happens in the daily scrum?",
        options: [
            "Development progress is presented to the stakeholders",
            "Instructions from the scrum master are delivered",
            "Team members chat about non-work subjects to decompress",
            "Team members share their progress, plans, and issues"
        ],
        correct: 3
    },
    {
        topic: "Scrum",
        question: "What do Story Points associated with a user story indicate?",
        options: [
            "The priority of the user story",
            "The difficulty of the user story",
            "The number of tasks in the user story",
            "The velocity of the team"
        ],
        correct: 1
    },
    {
        topic: "Scrum",
        question: "During which of the Sprint Events does the development team determine user stories that will be finished in the sprint?",
        options: [
            "Sprint Planning",
            "Sprint Review",
            "Product Backlog Refinement",
            "Daily Scrum"
        ],
        correct: 0
    },
    // Mendix App Structure
    {
        topic: "Mendix App Structure",
        question: "Which folders contain source information tied to a specific module enabling reuse of this module in another app?",
        options: [
            "Javascriptsource and Javasource folders",
            "All folders within App Directory",
            "Only Javasource folder",
            "Only Javascriptsource folder"
        ],
        correct: 0
    },
    {
        topic: "Mendix App Structure",
        question: "The VerifyPassword.java file in the System module is stored in which of the JavaSource sub-folders?",
        options: [
            "Actions",
            "Datasets",
            "Proxies",
            "Root folder"
        ],
        correct: 0
    },
    {
        topic: "Mendix App Structure",
        question: "The Microflows.java file is stored in which sub-folder of JavaSource directory?",
        options: [
            "Root folder",
            "Datasets",
            "Proxies",
            "Actions"
        ],
        correct: 2
    },
    {
        topic: "Mendix App Structure",
        question: "Which of the following sources are typically stored in the Resources folder of the App Directory?",
        options: [
            "Proxies",
            "Datasets",
            "Microflows and constants",
            "Configuration files, HTML and Java files"
        ],
        correct: 3
    },
    {
        topic: "Mendix App Structure",
        question: "Files and folders that form the styling of your application are typically stored in which of the following folders?",
        options: [
            "Userlib",
            "Theme",
            "JavaScript",
            "Resources"
        ],
        correct: 1
    },
    // Layouts & Navigation
    {
        topic: "Layouts & Navigation",
        question: "Which of the following options is used for featuring the navigation menu in a sidebar?",
        options: [
            "Atlas Default",
            "Popup",
            "Atlas Topbar",
            "Atlas Sidebar"
        ],
        correct: 3
    },
    {
        topic: "Layouts & Navigation",
        question: "Which of the following terms refers to the empty areas that form the canvas for any pages that make use of the layout?",
        options: [
            "Contents",
            "Scroll containers",
            "Placeholders",
            "Layout grid"
        ],
        correct: 2
    },
    {
        topic: "Layouts & Navigation",
        question: "When a layout is based on another layout, which of the mentioned option refers to the parent layout?",
        options: [
            "Master layout",
            "Placeholder layout",
            "Main layout",
            "Template layout"
        ],
        correct: 0
    },
    {
        topic: "Layouts & Navigation",
        question: "Which of the principles needs to be utilized to reduce duplication of already created elements?",
        options: [
            "FLY",
            "BUY",
            "TRY",
            "DRY"
        ],
        correct: 3
    },
    // Page Components & Widgets
    {
        topic: "Page Components & Widgets",
        question: "You want to re-use a header on multiple pages, which of the following options can you use to ensure that the content of the header throughout the app automatically changes after you modify its content?",
        options: [
            "Widget",
            "Snippet",
            "Building block",
            "Template"
        ],
        correct: 1
    },
    {
        topic: "Page Components & Widgets",
        question: "Which of the following widgets can be used to select associated objects, when multiple select is possible?",
        options: [
            "Reference set selector",
            "Check boxes",
            "Reference selector",
            "Drop-down"
        ],
        correct: 0
    },
    {
        topic: "Page Components & Widgets",
        question: "From the buttons on a Data Grid widget that work with single select mode, which ones need to be configured with multi-select mode?",
        options: [
            "Edit, Delete",
            "New, Edit, Delete",
            "New, Edit",
            "New, Delete"
        ],
        correct: 0
    },
    {
        topic: "Page Components & Widgets",
        question: "Where should you configure that only selected roles are allowed to see a container on a page?",
        options: [
            "In the Page Access tab of the Module Security",
            "In the Navigation visibility property of the Page",
            "In the Conditional visibility property of the container",
            "In the User tab of the Project security"
        ],
        correct: 2
    },
    // Popup Windows & Display
    {
        topic: "Popup Windows & Display",
        question: "How is the size of popup windows set to fixed?",
        options: [
            "Automatically",
            "By manually setting the size of page columns",
            "By selecting Atlas_Fixed layout",
            "By setting the resizable property of the page to No"
        ],
        correct: 3
    },
    {
        topic: "Popup Windows & Display",
        question: "How can you ensure that the buttons in the footer area of the relatively long and scrollable pop-up page are always visible?",
        options: [
            "By removing the outer layout grid",
            "By fixing the size of the scroll container",
            "By removing a scroll container",
            "By setting floating property of the footer to No"
        ],
        correct: 2
    },
    {
        topic: "Popup Windows & Display",
        question: "What constraint can you use to show the most recently created items at the top of the page?",
        options: [
            "createdDescend (date created)",
            "createdAscend (descending)",
            "createdDate (descending)",
            "dateCreated (descending)"
        ],
        correct: 3
    },
    {
        topic: "Popup Windows & Display",
        question: "What are the default Mendix options for the popups?",
        options: [
            "Fixed size determined automatically, with layout grid as the most outer layer of the page",
            "Resizable with size determined automatically, with layout grid as the most inner layer of the page",
            "Fixed size determined automatically, with layout grid as the most inner layer of the page",
            "Resizable with size determined automatically, with layout grid as the most outer layer of the page"
        ],
        correct: 3
    },
    {
        topic: "Popup Windows & Display",
        question: "How to make the popup window always visible?",
        options: [
            "Choose a different popup style",
            "Remove the outer layer grid",
            "Add a button to 'glue' them",
            "Change the layer grid"
        ],
        correct: 3
    },
    // Module Security & Access
    {
        topic: "Module Security & Access",
        question: "Which of the following options provides an easy way to limit access rights for a given role to a specific functionality within an app?",
        options: [
            "By creating a snippet",
            "By adding a separate module",
            "By creating a separate domain model",
            "By creating a package"
        ],
        correct: 1
    },
    {
        topic: "Module Security & Access",
        question: "Where on the page can the Menu document be displayed in an app?",
        options: [
            "Only inside of a menu widget",
            "Anywhere",
            "Only in a navigation layout",
            "Only on a page"
        ],
        correct: 0
    },
    {
        topic: "Module Security & Access",
        question: "What alternative to drawing an association between two entities can you use to connect two entities, each located in a separate domain model?",
        options: [
            "By copying entities from one domain model to another",
            "By right-clicking in an entity and selecting Add>Association",
            "By writing Java code",
            "By setting the 'Specialization' setting of one entity to the other"
        ],
        correct: 1
    },
    {
        topic: "Module Security & Access",
        question: "Which of the following XPath constraints should be used to allow users to only see their own notifications?",
        options: [
            "[Notifications.Notification_Account=System.User']",
            "[Notifications.Notification_Account='[%CurrentUser%]']",
            "[Notifications.Notification_Account=ID']",
            "[Notifications.Notification_Account='[%CurrentSession%]']"
        ],
        correct: 1
    },
    {
        topic: "Module Security & Access",
        question: "What can you use whenever you wish to display a navigation menu, but not the main navigation tree?",
        options: [
            "Menu",
            "Modules from the App Store",
            "External icons",
            "Javascript"
        ],
        correct: 0
    },
    // Language & Localization
    {
        topic: "Language & Localization",
        question: "How many source and destination languages can you specify?",
        options: [
            "One source, one destination",
            "Many sources, many destinations",
            "One source, many destinations",
            "Many sources, one destination"
        ],
        correct: 2
    },
    {
        topic: "Language & Localization",
        question: "What does default project language define?",
        options: [
            "The language in which project content is visualized in Studio Pro",
            "The language selected for the given user at the moment of account creation",
            "The language which users will see when using your app",
            "The language which will be selected by the user at the first log-in"
        ],
        correct: 2
    },
    {
        topic: "Language & Localization",
        question: "When and how a default language of an app needs to be selected?",
        options: [
            "Automatically at the moment of app creation",
            "Manually at the moment of app creation",
            "Manually when opening an app in Studio Pro",
            "Automatically when opening an app in Studio Pro"
        ],
        correct: 1
    },
    {
        topic: "Language & Localization",
        question: "Where can you choose the development language?",
        options: [
            "In the toolbar of Studio Pro",
            "In the system texts",
            "In the project folder",
            "In the language library"
        ],
        correct: 0
    },
    {
        topic: "Language & Localization",
        question: "Which of the following functionalities do you need to use to show a complete list of all translatable texts of a source and destination language?",
        options: [
            "Batch translation",
            "Occurance window",
            "Import translation",
            "Export translation"
        ],
        correct: 0
    }
];

// App State
let currentQuestion = 0;
let score = 0;
let answered = false;
let quizStarted = false;
let incorrectAnswers = [];

// DOM Elements
const elements = {
    progressFill: null,
    topicBadge: null,
    questionCounter: null,
    question: null,
    options: null,
    feedback: null,
    nextButton: null,
    finishButton: null,
    quizContent: null,
    results: null,
    finalScore: null,
    scoreMessage: null,
    restartButton: null,
    finishModal: null,
    modalQuestionsAnswered: null,
    modalQuestionsRemaining: null,
    modalCurrentScore: null,
    cancelFinish: null,
    confirmFinish: null
};

// Initialize the app
function init() {
    // Cache DOM elements
    cacheElements();
    
    // Add event listeners
    addEventListeners();
    
    // Show welcome screen
    showWelcomeScreen();
}

// Cache DOM elements for better performance
function cacheElements() {
    elements.progressFill = document.getElementById('progressFill');
    elements.quizContent = document.getElementById('quizContent');
    elements.results = document.getElementById('results');
    elements.finalScore = document.getElementById('finalScore');
    elements.scoreMessage = document.getElementById('scoreMessage');
    elements.restartButton = document.getElementById('restartButton');
    elements.finishModal = document.getElementById('finishModal');
    elements.modalQuestionsAnswered = document.getElementById('modalQuestionsAnswered');
    elements.modalQuestionsRemaining = document.getElementById('modalQuestionsRemaining');
    elements.modalCurrentScore = document.getElementById('modalCurrentScore');
    elements.cancelFinish = document.getElementById('cancelFinish');
    elements.confirmFinish = document.getElementById('confirmFinish');
}

// Add event listeners
function addEventListeners() {
    elements.restartButton.addEventListener('click', restartQuiz);
    
    // Modal event listeners
    if (elements.cancelFinish) {
        elements.cancelFinish.addEventListener('click', hideFinishModal);
    }
    if (elements.confirmFinish) {
        elements.confirmFinish.addEventListener('click', confirmFinishExam);
    }
    
    // Close modal when clicking outside
    if (elements.finishModal) {
        elements.finishModal.addEventListener('click', (e) => {
            if (e.target === elements.finishModal) {
                hideFinishModal();
            }
        });
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// Handle keyboard navigation
function handleKeyboardNavigation(event) {
    // Handle modal keyboard navigation first
    if (elements.finishModal && elements.finishModal.style.display === 'flex') {
        switch(event.key) {
            case 'Escape':
                hideFinishModal();
                break;
            case 'Enter':
                if (document.activeElement === elements.confirmFinish) {
                    confirmFinishExam();
                } else {
                    hideFinishModal();
                }
                break;
        }
        return;
    }
    
    if (!quizStarted) return;
    
    switch(event.key) {
        case '1':
        case '2':
        case '3':
        case '4':
            if (!answered) {
                selectOption(parseInt(event.key) - 1);
            }
            break;
        case 'Enter':
        case ' ':
            if (answered && elements.nextButton && elements.nextButton.classList.contains('show')) {
                nextQuestion();
            }
            break;
        case 'ArrowRight':
            if (answered && elements.nextButton && elements.nextButton.classList.contains('show')) {
                nextQuestion();
            }
            break;
    }
}

// Show welcome screen
function showWelcomeScreen() {
    elements.quizContent.style.display = 'none';
    elements.results.style.display = 'none';
    
    const welcomeHTML = `
        <div class="welcome-screen" style="text-align: center; padding: 40px 20px;">
            <h2 style="font-size: 2.5rem; margin-bottom: 20px; color: #1a1a1a; font-weight: 800;">🎯 Welcome to the Quiz!</h2>
            <p style="font-size: 1.2rem; color: #666; margin-bottom: 30px; line-height: 1.6;">
                Test your knowledge on Development & Scrum with ${questions.length} carefully crafted questions.
            </p>
            <div style="background: rgba(0,0,0,0.05); padding: 20px; border-radius: 16px; margin: 20px 0;">
                <h3 style="color: #333; margin-bottom: 15px;">📚 Topics Covered:</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                    ${getUniqueTopics().map(topic => `<span style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">${topic}</span>`).join('')}
                </div>
            </div>
            <button id="startQuizBtn" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 16px; padding: 18px 36px; font-size: 1.2rem; font-weight: 700; cursor: pointer; transition: all 0.3s; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">🚀 Start Quiz</button>
        </div>
    `;
    
    elements.quizContent.innerHTML = welcomeHTML;
    elements.quizContent.style.display = 'block';
    
    // Add start button event listener
    document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
}

// Get unique topics for welcome screen
function getUniqueTopics() {
    return [...new Set(questions.map(q => q.topic))];
}

// Start the quiz
function startQuiz() {
    quizStarted = true;
    
    // Create the quiz content structure
    createQuizContent();
    
    // Load first question
    loadQuestion();
}

// Create quiz content structure
function createQuizContent() {
    const quizHTML = `
        <div class="topic-badge" id="topicBadge">Loading...</div>
        <div class="question-counter" id="questionCounter">Question 1 of ${questions.length}</div>
        <div class="question" id="question">Loading question...</div>
        <div class="options" id="options"></div>
        <div class="feedback" id="feedback"></div>
        <div class="quiz-actions">
            <button class="next-button" id="nextButton">Next Question</button>
            <button class="finish-button" id="finishButton" style="display: none;">🏁 Finish Exam</button>
        </div>
    `;
    
    elements.quizContent.innerHTML = quizHTML;
    
    // Cache the new elements
    elements.topicBadge = document.getElementById('topicBadge');
    elements.questionCounter = document.getElementById('questionCounter');
    elements.question = document.getElementById('question');
    elements.options = document.getElementById('options');
    elements.feedback = document.getElementById('feedback');
    elements.nextButton = document.getElementById('nextButton');
    elements.finishButton = document.getElementById('finishButton');
    
    // Add event listeners
    elements.nextButton.addEventListener('click', nextQuestion);
    if (elements.finishButton) {
        elements.finishButton.addEventListener('click', finishExam);
    }
}

// Load question with smooth transitions
function loadQuestion() {
    answered = false;
    const q = questions[currentQuestion];
    
    // Update progress with smooth animation
    updateProgress();
    
    // Update UI elements
    elements.topicBadge.textContent = q.topic;
    elements.questionCounter.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    elements.question.textContent = q.question;
    
    // Clear and add options with staggered animation
    elements.options.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.style.opacity = '0';
        optionDiv.style.transform = 'translateX(-20px)';
        optionDiv.addEventListener('click', () => selectOption(index));
        elements.options.appendChild(optionDiv);
        
        // Staggered animation
        setTimeout(() => {
            optionDiv.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            optionDiv.style.opacity = '1';
            optionDiv.style.transform = 'translateX(0)';
        }, index * 50);
    });
    
    // Hide feedback, next button, and finish button
    elements.feedback.className = 'feedback';
    elements.nextButton.className = 'next-button';
    if (elements.finishButton) {
        elements.finishButton.style.display = 'none';
    }
}

// Update progress bar with smooth animation
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    elements.progressFill.style.width = progress + '%';
}

// Select option with enhanced feedback
function selectOption(index) {
    if (answered) return;
    answered = true;
    
    const q = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    const feedback = elements.feedback;
    
    // Immediate visual feedback on click
    options[index].classList.add('clicked');
    
    // Disable all options immediately and add selected state
    setTimeout(() => {
        options.forEach(opt => opt.classList.add('disabled'));
        options[index].classList.remove('clicked');
        options[index].classList.add('selected');
        
        // Provide feedback with minimal delay for visual polish
        setTimeout(() => {
            if (index === q.correct) {
                options[index].classList.add('correct');
                feedback.innerHTML = '🎉 Correct! Excellent work!';
                feedback.className = 'feedback correct show';
                score++;
                
                // Add confetti effect for correct answers
                addConfettiEffect();
            } else {
                options[index].classList.add('incorrect');
                options[q.correct].classList.add('correct');
                feedback.innerHTML = '❌ Not quite right. The correct answer is highlighted below.';
                feedback.className = 'feedback incorrect show';
                
                // Store incorrect answer details
                incorrectAnswers.push({
                    question: q.question,
                    topic: q.topic,
                    yourAnswer: q.options[index],
                    correctAnswer: q.options[q.correct],
                    questionIndex: currentQuestion
                });
            }
            
            elements.nextButton.className = 'next-button show';
            
            // Show finish button after answering 3 questions
            if (currentQuestion >= 2 && elements.finishButton) {
                elements.finishButton.style.display = 'block';
                elements.finishButton.className = 'finish-button show';
            }
        }, 50);
    }, 50);
}

// Add confetti effect for correct answers
function addConfettiEffect() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add confetti animation to CSS
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Finish exam early - show modal
function finishExam() {
    const questionsAnswered = currentQuestion + 1;
    const questionsRemaining = questions.length - questionsAnswered;
    const currentScore = score;
    
    // Update modal content
    if (elements.modalQuestionsAnswered) {
        elements.modalQuestionsAnswered.textContent = `${questionsAnswered} of ${questions.length}`;
    }
    if (elements.modalQuestionsRemaining) {
        elements.modalQuestionsRemaining.textContent = questionsRemaining;
    }
    if (elements.modalCurrentScore) {
        elements.modalCurrentScore.textContent = `${currentScore}/${questionsAnswered}`;
    }
    
    // Show modal
    showFinishModal();
}

// Show finish confirmation modal
function showFinishModal() {
    if (elements.finishModal) {
        elements.finishModal.style.display = 'flex';
        // Focus the cancel button for accessibility
        setTimeout(() => {
            if (elements.cancelFinish) {
                elements.cancelFinish.focus();
            }
        }, 100);
    }
}

// Hide finish confirmation modal
function hideFinishModal() {
    if (elements.finishModal) {
        elements.finishModal.style.display = 'none';
    }
}

// Confirm finish exam
function confirmFinishExam() {
    hideFinishModal();
    showResults();
}

// Next question with smooth transition
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        // Fade out current question
        elements.quizContent.style.opacity = '0';
        elements.quizContent.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            loadQuestion();
            elements.quizContent.style.opacity = '1';
            elements.quizContent.style.transform = 'translateY(0)';
        }, 150);
    } else {
        showResults();
    }
}

// Show results with enhanced animations
function showResults() {
    elements.quizContent.style.display = 'none';
    elements.results.className = 'results show';
    elements.results.style.display = 'block';
    
    const questionsAnswered = currentQuestion + 1;
    const percentage = Math.round((score / questionsAnswered) * 100);
    const isPartialCompletion = questionsAnswered < questions.length;
    
    elements.finalScore.textContent = `${score}/${questionsAnswered}`;
    
    // Animate score reveal
    setTimeout(() => {
        elements.finalScore.style.animation = 'scoreReveal 1s cubic-bezier(0.4, 0, 0.2, 1)';
    }, 100);
    
    let message = '';
    let emoji = '';
    
    if (isPartialCompletion) {
        message = `Exam completed early! You answered ${questionsAnswered} out of ${questions.length} questions.`;
        emoji = '📝';
    }
    
    if (percentage === 100) {
        message += isPartialCompletion ? ' Perfect score on answered questions!' : ' Perfect! You are an absolute expert!';
        emoji = '🏆';
    } else if (percentage >= 80) {
        message += isPartialCompletion ? ' Excellent performance!' : ' Outstanding! You have excellent knowledge!';
        emoji = '🌟';
    } else if (percentage >= 60) {
        message += isPartialCompletion ? ' Good work!' : ' Great job! Solid understanding demonstrated!';
        emoji = '👏';
    } else {
        message += isPartialCompletion ? ' Keep studying!' : ' Good effort! Keep learning and practicing!';
        emoji = '💪';
    }
    
    elements.scoreMessage.innerHTML = `${emoji} ${message}`;
    
    // Show incorrect questions if any
    showIncorrectQuestions();
    
    // Add celebration for high scores
    if (percentage >= 80) {
        setTimeout(() => {
            addConfettiEffect();
        }, 1000);
    }
}

// Show incorrect questions with details
function showIncorrectQuestions() {
    const incorrectQuestionsDiv = document.getElementById('incorrectQuestions');
    const questionsAnswered = currentQuestion + 1;
    const isPartialCompletion = questionsAnswered < questions.length;
    
    // Filter incorrect answers to only show questions that were actually attempted
    const relevantIncorrectAnswers = incorrectAnswers.filter(incorrect => 
        incorrect.questionIndex <= currentQuestion
    );
    
    if (relevantIncorrectAnswers.length === 0) {
        incorrectQuestionsDiv.style.display = 'none';
        return;
    }
    
    incorrectQuestionsDiv.style.display = 'block';
    
    let html = '';
    if (isPartialCompletion) {
        html = `
            <div class="incorrect-answers-header">
                <h3>📝 Review Your Incorrect Answers from Questions 1-${questionsAnswered}</h3>
                <div class="incorrect-count">${relevantIncorrectAnswers.length} mistake${relevantIncorrectAnswers.length !== 1 ? 's' : ''} to learn from</div>
            </div>
        `;
    } else {
        html = `
            <div class="incorrect-answers-header">
                <h3>📝 Review Your Incorrect Answers</h3>
                <div class="incorrect-count">${relevantIncorrectAnswers.length} mistake${relevantIncorrectAnswers.length !== 1 ? 's' : ''} to learn from</div>
            </div>
        `;
    }
    
    if (relevantIncorrectAnswers.length > 0) {
        html += `<div class="learning-tip">💡 Study these topics to improve your knowledge</div>`;
        
        // Add topic summary for learning insights
        const topicSummary = getTopicSummary(relevantIncorrectAnswers);
        if (Object.keys(topicSummary).length > 1) {
            html += `<div class="topic-summary">`;
            html += `<h4>📊 Mistakes by Topic:</h4>`;
            html += `<div class="topic-summary-grid">`;
            Object.entries(topicSummary)
                .sort((a, b) => b[1] - a[1])
                .forEach(([topic, count]) => {
                    html += `<div class="topic-summary-item">`;
                    html += `<span class="topic-name">${topic}</span>`;
                    html += `<span class="mistake-count">${count} mistake${count !== 1 ? 's' : ''}</span>`;
                    html += `</div>`;
                });
            html += `</div></div>`;
        }
    }
    
    relevantIncorrectAnswers.forEach((incorrect, index) => {
        html += `
            <div class="incorrect-question">
                <div class="question-info">
                    <div class="topic-tag">${incorrect.topic}</div>
                    <div class="question-number">Question ${incorrect.questionIndex + 1}</div>
                </div>
                <div class="question-text">${incorrect.question}</div>
                <div class="answer-comparison">
                    <div class="your-answer">
                        <span class="answer-label">❌ Your answer:</span>
                        <span class="answer-text">${incorrect.yourAnswer}</span>
                    </div>
                    <div class="correct-answer">
                        <span class="answer-label">✅ Correct answer:</span>
                        <span class="answer-text">${incorrect.correctAnswer}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    incorrectQuestionsDiv.innerHTML = html;
}

// Get topic summary for learning insights
function getTopicSummary(incorrectAnswers) {
    const topicCount = {};
    incorrectAnswers.forEach(incorrect => {
        topicCount[incorrect.topic] = (topicCount[incorrect.topic] || 0) + 1;
    });
    return topicCount;
}

// Restart quiz with smooth transition
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    quizStarted = false;
    incorrectAnswers = [];
    
    // Fade out results
    elements.results.style.opacity = '0';
    elements.results.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        elements.results.className = 'results';
        showWelcomeScreen();
    }, 300);
}

// Start the quiz when page loads
window.addEventListener('DOMContentLoaded', init);
