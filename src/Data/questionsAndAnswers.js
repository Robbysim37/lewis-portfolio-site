const questionsAndAnswersArr = [

    {
        id:1,
        prompt: {
            messageType: "user",
            text: "How long have you been a developer?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`I have been studying computer science since Janurary of 2022. I enrolled in a coding bootcamp in 
            October 2022. (Bloomtech Institute of technology). I graduated from that program in June 2023 and have 
            been teaching myself and looking for an entry level developer job ever since.`,
            timeStamp: ""
        }
    },
    {
        id:2,
        prompt: {
            messageType: "user",
            text: "What do you do in your free time?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`One of my favorite things I do is volunteering at my old high school's drama club. I 
            enjoy teaching students how to run the lighting and sound boards for performances. I also enjoy 
            playing games with friends and family, whether it's something more complex with friends or simple 
            card games with family!`,
            timeStamp: ""
        }
    },
    {
        id:3,
        prompt: {
            messageType: "user",
            text: "What soft skills do you have?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`I would say that I'm a good communicator. I'm able to communicate ideas and concepts 
            clearly. I often enjoy talking about the process of whatever project I'm working on so I have 
            quite a bit of experience `,
            timeStamp: ""
        }
    },
    {
        id:4,
        prompt: {
            messageType: "user",
            text: "What technical skills do you have?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`Quite a bit, and I often say any skill that I don't have, I could learn the basics in 
            about a week. Currently, I'm confident with the following technologies: HTML, CSS, Javascript, 
            React, React-Redux, Angular, Material UI, Express, SQL databasing, NoSQL databasing, and a few 
            more bits and pieces. The most recent technology that I've learned (at the time of writing this) 
            is Tailwind CSS. I picked up the basics and made this website with it!`,
            timeStamp: ""
        }
    },
    {
        id:5,
        prompt: {
            messageType: "user",
            text: "What are some of your hobbies?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`Card games, board games, and video games for starters. I enjoy learning on my own time, 
            so I am often reading, but usually non-fiction. Typically I pick up a book ona skill that I 
            recognize I am lacking in, or a skill I want to learn just for fun. I also enjoy camping, and 
            every year I go camping with friends around Memorial Day weekend`,
            timeStamp: ""
        }
    },
    {
        id:6,
        prompt: {
            messageType: "user",
            text: "What are your strengths?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`Definitely my ability to learn and adapt quickly. For example, if you believe I am 
            lacking on a certain skill, tell me what that skill is, point me in the right direction, and 
            I'll begin researching and learning as quickly as possible. I'm dedicated and hardworking to 
            learning computer science principles both for my enjoyment and in the pursuit of getting a 
            career in software development.`,
            timeStamp: ""
        }
    },
    {
        id:7,
        prompt: {
            messageType: "user",
            text: "What are your weaknesses?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`CSS and design. I like to say that I am a developer and not a designer. While I am 
            working on getting better at this aspect on my own, I definitely would enjoy finding a mentor 
            to learn from and help me get better at CSS principles in general.`,
            timeStamp: ""
        }
    },
    {
        id:8,
        prompt: {
            messageType: "user",
            text: "Why should we hire you?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`Because I work hard to be the best candidate, and will continue to work hard so that 
            I will always stay the best candidate. I don't currently have prior experience in a 
            professional setting, but I am dedicated to getting started in development career field. Any 
            experience that I lack I make up for with dedication to learning, and learning quickly.`,
            timeStamp: ""
        }
    },
    {
        id:9,
        prompt: {
            messageType: "user",
            text: "How do you deal with stressful situations?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`By pacing myself. Knowing when to step away from the situation is just as important as 
            the time spent solving the problem. If the situation is too urgent for free time, then 
            sometimes you have to roll up your sleeves and get through it.`,
            timeStamp: ""
        }
    },
    {
        id:10,
        prompt: {
            messageType: "user",
            text: "What are you passionate about?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`I'm passionate about working to better my own future. I also am passionate about 
            supporting friends and family to make choices that benefit their own future. I can't say 
            I'm passionate about orginizations or causes, but in general I just want people to be as 
            great as they can be. Myself included`,
            timeStamp: ""
        }
    },
    {
        id:11,
        prompt: {
            messageType: "user",
            text: "How do you plan to achieve your career goals?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`Hard work, over and over and over again. My current career goal is to get a career, 
            so keeping an eye out for opportunity and the chance to jump on an open position are all I 
            can do at the moment. Other than learning more skills, of course.`,
            timeStamp: ""
        }
    },
    {
        id:12,
        prompt: {
            messageType: "user",
            text: "What makes you unique?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`My stamina and dedication. Part of my Job placement with Bloomtech required me to send out 
            over 500 job applications and outreaches to find a job in the tech field. That process took a year 
            and I have not had luck finding a position. A couple of close calls, but still nothing. Without 
            trying to sound dramatic, I have taken quite a beating in the endeavor. But that doesn't ever stop 
            me from coming up with my next goal that will help me get a job. Currently all I want is a career, 
            and I spend every day working hard to get my foot in the door somewhere.`,
            timeStamp: ""
        }
    },
    {
        id:14,
        prompt: {
            messageType: "user",
            text: "What type of environment do you prefer?",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`Typically I enjoy to have a direct contact with my management. Whenever I start of as a new 
            I don't like being confused about certain policies or systems for long so I enjoy asking questions 
            quickly and in person. When it comes to office vs remote vs hybrid, I definitely think my preferred 
            setup is a hybrid job. I have a physical building to report to, the opportunity to communicate with 
            coworkers and my leaders in person, but I also have the luxary of enjoying a more relaxed Friday 
            without a commute.`,
            timeStamp: ""
        }
    },
    {
        id:15,
        prompt: {
            messageType: "user",
            text: "Tell me about this website.",
            timeStamp: ""
        },
        answer: {
            messageType: "computer",
            text:`Sure! I had the idea of an application that would allow hiring managers and developers to 
            message me and get to know me more. Of course, all of these messages are pre-recorded, but I am 
            currently looking into developing a backend for this website, where user's can login and ask me 
            any question they want. That's why I emulated an instant messenger app. Making a website where you 
            can only talk to one person is definitely not practical, but I felt it was creative enough to be an 
            interesting project, and an interesting way to get in contact with people looking to hire!`,
            timeStamp: ""
        }
    },

]

export default questionsAndAnswersArr