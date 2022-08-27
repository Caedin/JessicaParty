"use strict";
(() => {
var exports = {};
exports.id = 31;
exports.ids = [31];
exports.modules = {

/***/ 4681:
/***/ ((module) => {

module.exports = import("Socket.IO");;

/***/ }),

/***/ 4725:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Socket_IO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Socket_IO__WEBPACK_IMPORTED_MODULE_0__]);
Socket_IO__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

let session = {
    game: {
        name: "Jessica's QT Trivia",
        rounds: [
            {
                description: "Don't overthink it, you get one point for the correct answer",
                questions: [
                    {
                        q: "What restaurant burger chain is used in nearly every Tarantino movie?",
                        a: "Big Kahuna Burger",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "Who does the Bride want to Kill?",
                        a: "Bill",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "Which Tarantino movie partly takes place in France?",
                        a: "Inglourious Basterds",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "What was Calvin Candie's plantation called in Django Unchained, Candyland or Evergreen Plantation?",
                        a: "Candyland",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "What dessert did Mia Wallace and Vincent Vega share in Pulp Fiction?",
                        a: "A Milkshake",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "What actor has appeared the most times on screen in Quentin Tarantino movies?",
                        a: "Quentin Tarantino",
                        info: {
                            type: "text",
                            last: true
                        }
                    }
                ]
            },
            {
                description: "Sound round! Name the movie each clip is from",
                questions: [
                    {
                        q: "Name the movie",
                        a: "Pulp Fiction",
                        info: {
                            type: "sound"
                        }
                    },
                    {
                        q: "Name the movie",
                        a: "Inglourious Basterds",
                        info: {
                            type: "sound"
                        }
                    },
                    {
                        q: "Name the movie",
                        a: "Resevoir Dogs",
                        info: {
                            type: "sound"
                        }
                    },
                    {
                        q: "Name the movie",
                        a: "Django Unchained",
                        info: {
                            type: "sound"
                        }
                    },
                    {
                        q: "Name the movie",
                        a: "Kill Bill vol. 2",
                        info: {
                            type: "sound"
                        }
                    },
                    {
                        q: "Name the movie",
                        a: "Jackie Brown",
                        info: {
                            type: "sound",
                            last: true
                        }
                    }
                ]
            },
            {
                description: "All about Quentin Tarantino",
                questions: [
                    {
                        q: "At what age did he become a father?",
                        a: "57",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "What was his first job at the age of 16?",
                        a: "Usher at a porn theater in California",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "What does he forbid on the set when filming?",
                        a: "Cell phones",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "He was put in jail on 3 seperate occasions...for what?",
                        a: "Unpaid Parking Tickets",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "How many full length films has he directed?",
                        a: "10",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "What is his ancestry? One of three is fine.",
                        a: "Cherokee, Irish, and Italian",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "Did QT drop out of high school or college?",
                        a: "High School",
                        info: {
                            type: "text",
                            last: true
                        }
                    }
                ]
            },
            {
                description: "What is jessica doing?? You get one point for naming the movie she is in another for naming the actor/actress she is impersonating",
                questions: [
                    {
                        q: "",
                        a: "Resevoir Dogs, Steve Buscemi",
                        info: {
                            type: "image",
                            url: "/images/img1.png"
                        }
                    },
                    {
                        q: "",
                        a: "The Hateful Eight, Kurt Russel",
                        info: {
                            type: "image",
                            url: "/images/img2.png"
                        }
                    },
                    {
                        q: "",
                        a: "Kill Bill Volume 1, Lucy Liu",
                        info: {
                            type: "image",
                            url: "/images/img3.png"
                        }
                    },
                    {
                        q: "",
                        a: "Kill Bill Volume 2, Uma Thurman",
                        info: {
                            type: "image",
                            url: "/images/img4.png"
                        }
                    },
                    {
                        q: "",
                        a: "Jackie Brown, Samuel L Jackson",
                        info: {
                            type: "image",
                            url: "/images/img5.png"
                        }
                    },
                    {
                        q: "",
                        a: "Once Upon a Time in Hollywood, Margot Robbie",
                        info: {
                            type: "image",
                            url: "/images/img6.png"
                        }
                    },
                    {
                        q: "",
                        a: "Inglorious Basters, Diane Kruger",
                        info: {
                            type: "image",
                            url: "/images/img7.png",
                            last: true
                        }
                    }
                ]
            },
            {
                description: "All about murder, and there is a lot!",
                questions: [
                    {
                        q: "In Kill Bill volume 1 who is the first person the bride kills? [Budd, O-ren Ishii, Vernita Green, Bill]",
                        a: "Vernita Green",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "Which movie has the highest kill count? Django Unchained, [Kill Bill volume 1, Resevoir Dogs, Inglorious Basterds]",
                        a: "Inglorious Baterds",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "In Pulp Fiction, who shot Marvin in the face? [Vincent Vega, Jules Winnfield, Butch Coolidge, Mia Wallace]",
                        a: "Vincent Vega",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "Which of these what not a method of death in Kill Bill Volume 1? [Kitchen Knife, Samuri Sword, Scalping, Strangulation]",
                        a: "Strangulation",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "What movie had the most deaths by car? [Resevoir Dogs, Death Proof, Jackie Brown, Pulp Fiction]",
                        a: "Death Proof",
                        info: {
                            type: "text",
                            last: true
                        }
                    }
                ]
            },
            {
                description: "Random Quentin Tarantino Trivia! Who knows the most esoteric QT trivia?",
                questions: [
                    {
                        q: "Other than himself, which actor has appeared in the most Tarantino films? ",
                        a: "Samuel L. Jackson",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: 'In "The Hateful Eight", Marquis Warren has a letter. Who wrote it to him?',
                        a: "Abraham Lincoln",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: 'What person\'s unflattering portrayal in "Once Upon a Time in Hollwood" caused the movie to be banned in China?',
                        a: "Bruce Lee",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: 'What song is being discussed at the beginning of "Reservoir Dogs"?',
                        a: "Like a Virgin",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "What is the Bride's real name in Kill Bill?",
                        a: "Beatrix Kiddo",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: 'What actor received an Academy Award for Best Supporting Actor for his portrayal of a bounty hunter in "Django Unchained"?',
                        a: "Christoph Waltz",
                        info: {
                            type: "text"
                        }
                    },
                    {
                        q: "What is the swear word count for Pulp fiction?",
                        a: "431",
                        info: {
                            type: "text",
                            last: true
                        }
                    }
                ]
            }
        ]
    },
    teams: [],
    joinable: true,
    currentRound: 0,
    currentQuestion: 0
};
let currentSession = JSON.parse(JSON.stringify(session));
const GameHandler = (req, res)=>{
    if (res.socket.server.io) {} else {
        const io = new Socket_IO__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server);
        res.socket.server.io = io;
        io.on("disconnect", (socket)=>{
            socket.off("admin-login");
            socket.off("adm-reset");
            socket.off("adm-start-game");
            socket.off("adm-start-round");
            socket.off("adm-close-round");
            socket.off("adm-next-question");
            socket.off("adm-close-session");
            socket.off("adm-submit-scores");
            socket.off("join-game");
            socket.off("submit-questions");
        });
        const handler = ()=>{};
        io.on("connection", (socket)=>{
            // Admin events
            socket.off("admin-login", handler).on("admin-login", (msg)=>{
                if (msg == "fancy-fleet") {
                    currentSession = JSON.parse(JSON.stringify(session));
                    socket.broadcast.emit("game-available", currentSession.joinable);
                    socket.broadcast.emit("admin-auth", true);
                }
            });
            socket.off("adm-reset", handler).on("adm-reset", (msg)=>{
                currentSession = JSON.parse(JSON.stringify(session));
                socket.broadcast.emit("game-unavailable", currentSession.joinable);
                socket.broadcast.emit("players", currentSession.teams);
            });
            socket.off("adm-start-game", handler).on("adm-start-game", (msg)=>{
                socket.broadcast.emit("game-unavailable", currentSession.joinable);
                socket.broadcast.emit("players", currentSession.teams);
            });
            socket.off("adm-start-round", handler).on("adm-start-round", (msg)=>{
                if (currentSession.currentRound == 0 || currentSession.currentQuestion == currentSession.game.rounds[currentSession.currentRound - 1].questions.length) {
                    socket.broadcast.emit("update-round", currentSession.game.rounds[currentSession.currentRound].description);
                    currentSession.currentQuestion = 0;
                }
            });
            socket.off("adm-close-round", handler).on("adm-close-round", (msg)=>{
                currentSession.currentRound += 1;
                socket.broadcast.emit("close-round");
            });
            socket.off("adm-next-question", handler).on("adm-next-question", (msg)=>{
                if (currentSession.currentQuestion < currentSession.game.rounds[currentSession.currentRound].questions.length) {
                    currentSession.currentQuestion += 1;
                    socket.broadcast.emit("next-question", currentSession.game.rounds[currentSession.currentRound].questions.slice(0, currentSession.currentQuestion));
                }
            });
            socket.off("adm-close-session", handler).on("adm-close-session", (msg)=>{
                currentSession = JSON.parse(JSON.stringify(session));
                socket.broadcast.emit("game-over");
            });
            socket.off("adm-submit-scores", handler).on("adm-submit-scores", (scores)=>{
                for(let i = 0; i < currentSession.teams.length; i++){
                    let t = currentSession.teams[i].name;
                    let joker = false;
                    let numberCorrect = scores.filter((s)=>{
                        return s.name == t;
                    }).reduce((score, s)=>{
                        if (s.joker) joker = true;
                        return score + s.correct * (s.joker + 1);
                    }, 0);
                    currentSession.teams[i].score += numberCorrect;
                    if (joker) {
                        currentSession.teams[i].hasJokered = true;
                    }
                }
                socket.broadcast.emit("players", currentSession.teams);
            });
            // User events
            socket.off("join-game", handler).on("join-game", (msg)=>{
                if (currentSession.joinable) {
                    if (currentSession.teams.filter((s)=>{
                        return s.name == msg;
                    }).length == 0) {
                        currentSession.teams.push({
                            name: msg,
                            score: 0,
                            rounds: {},
                            hasJokered: false
                        });
                        socket.broadcast.emit("players", currentSession.teams);
                    }
                }
            });
            socket.off("submit-questions", handler).on("submit-questions", (msg)=>{
                for(let i = 0; i < currentSession.teams.length; i++){
                    if (currentSession.teams[i].name == msg.name) {
                        currentSession.teams[i].rounds[currentSession.currentRound] = msg.a.map((s, k)=>{
                            return {
                                question: currentSession.game.rounds[currentSession.currentRound].questions[k].q,
                                providedAnswer: s,
                                correctAnswer: currentSession.game.rounds[currentSession.currentRound].questions[k].a,
                                correct: false,
                                joker: msg.joker
                            };
                        });
                        let teamIResponses = currentSession.teams[i].rounds[currentSession.currentRound].map((s)=>{
                            return {
                                name: currentSession.teams[i].name,
                                question: s.question,
                                providedAnswer: s.providedAnswer,
                                correctAnswer: s.correctAnswer,
                                correct: s.correct,
                                joker: s.joker
                            };
                        });
                        socket.broadcast.emit("adm-score", teamIResponses);
                    }
                }
            });
        });
    }
    res.end();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4725));
module.exports = __webpack_exports__;

})();