import {createServer} from "miragejs";

export function setupMockServer() {
    createServer({
        routes() {
            this.namespace = "api";

            this.get("/productlist", () => {
                let productlist = [
                    {
                        id: 1,
                        name: "Sapiens: A Brief History of Humankind",
                        price: 395,
                        image: "https://images-eu.ssl-images-amazon.com/images/I/41yu2qXhXXL._SY264_BO1,204,203," +
                                "200_QL40_FMwebp_.jpg",
                        url: "https://www.amazon.in/Sapiens-Humankind-Yuval-Noah-Harari/dp/0099590085",
                        quantity: 1,
                        flag: false,
                        description: {
                            author: {
                                name: 'Yuval Noah Harari',
                                about: `Prof Yuval Noah Harari has a PhD in History from the University of Oxford and now lectures at the Hebrew University of Jerusalem, specialising in World History. Sapiens: A Brief History of Humankind has become an international phenomenon attracting a legion of fans from Bill Gates and Barack Obama to Chris Evans and Jarvis Cocker, and is published in over forty-five languages worldwide. It was a Sunday Times Number One bestseller and was in the Top Ten for over nine months in paperback. His follow-up to Sapiens, Homo Deus: A Brief History of Tomorrow was also a Top Ten Bestseller and was described by the Guardian as 'even more readable, even more important, than his excellent Sapiens'. His most recent book, 21 Lessons for the 21st Century, was a Number One Bestseller and was described by Bill Gates as 'fascinating' and 'crucial'.`
                            },
                            review: [`I would recommend Sapiens to anyone who’s interested in the history and future of our species ― Bill Gates`, `Interesting and provocative… It gives you a sense of how briefly we’ve been on this Earth ― Barack Obama`, `Jaw-dropping from the first word to the last… It may be the best book I’ve ever read ― Chris Evans`]
                        }
                    }, {
                        id: 2,
                        name: "A Man Called Ove: Brighten your day",
                        price: 280,
                        flag: false,
                        image: "https://images-eu.ssl-images-amazon.com/images/I/519L6FBdlXL._SY264_BO1,204,203," +
                                "200_QL40_FMwebp_.jpg",
                        url: "https://www.amazon.in/Man-Called-Ove-life-affirming-bestseller/dp/1444775812",
                        quantity: 1,
                        description: {
                            author: {
                                name: 'Fredrik Backman',
                                about: `Fredrik Backman is a Swedish blogger, columnist and author. His debut novel A MAN CALLED OVE was a number 1 bestseller across Scandinavia, has sold over one million copies worldwide, was a Richard & Judy summer read in the UK and an instant New York Times paperback bestseller, and has been made into an acclaimed film. Fredrik's subsequent novels, MY GRANDMOTHER SENDS HER REGARDS AND APOLOGISES and BRITT-MARIE WAS HERE, also went straight to number 1 in Sweden on publication.`
                            },
                            review: [`Delightful ... the perfect holiday read. (Evening Standard)`, 
                            `It's the most enchanting, beautiful tale.`, 
                            `A warm and tender story about love, loss and second chances, peppered with memorable characters, wonderful set pieces and some beautifully black humour. Ove is a joy from start to finish.`, 
                            `An uplifting, life-affirming and often comic tale of how kindness, love and happiness can be found in the most unlikely places. (Sunday Express)`,
                            `A charming debut. (People)`]
                          }
                    }, {
                        id: 3,
                        name: "The Importance of Being Earnest",
                        price: 89,
                        flag: false,
                        image: "https://m.media-amazon.com/images/I/41YXH3S5wrL._AC_UY218_.jpg",
                        url: "https://www.amazon.in/Importance-Being-Earnest-Oscar-Wilde/dp/8175992859",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 4,
                        name: "The Picture of Dorian Gray",
                        price: 129,
                        flag: false,
                        image: "https://images-eu.ssl-images-amazon.com/images/I/51iHYhRSmyL._SY264_BO1,204,203," +
                                "200_QL40_FMwebp_.jpg",
                        url: "https://www.amazon.in/Picture-Dorian-Gray-Oscar-Wilde/dp/8175993081",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 5,
                        name: "How to Think Like a Roman Emperor: The Stoic Philosophy of Marcus Aurelius",
                        price: 1630,
                        flag: false,
                        image: "https://images-na.ssl-images-amazon.com/images/I/41xhHZ4ZSWL._SX322_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/How-Think-Like-Roman-Emperor/dp/1250196620",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 6,
                        name: "Stillness is the Key: An Ancient Strategy for Modern Life",
                        price: 333,
                        flag: false,
                        image: "https://images-na.ssl-images-amazon.com/images/I/41IdD3F694L._SX365_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Stillness-Key-Ancient-Strategy-Modern/dp/1788162056",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 7,
                        name: "The Brain: The Story of You",
                        price: 300,
                        flag: false,
                        image: "https://images-eu.ssl-images-amazon.com/images/I/41s0QwD7u6L._SY264_BO1,204,203," +
                                "200_QL40_FMwebp_.jpg",
                        url: "https://www.amazon.in/Brain-David-Eagleman/dp/1782116613",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 8,
                        name: "Beyond Order: 12 More Rules for Life",
                        price: 631,
                        flag: false,
                        image: "https://images-na.ssl-images-amazon.com/images/I/41Bhl964Z3L._SX325_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Untitled-Book-Jordan-B-Peterson/dp/024140763X",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 9,
                        name: "Beyond Good & Evil",
                        price: 113,
                        flag: false,
                        image: "https://m.media-amazon.com/images/I/71KSA4fswNL._AC_UY218_.jpg",
                        url: "https://www.amazon.in/Beyond-Good-Evil-Friedrich-Nietzsche/dp/9350334984",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 10,
                        name: "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
                        price: 1950,
                        flag: false,
                        image: "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Eloquent-JavaScript-3rd-Introduction-Programming/dp/159327" +
                                "9507",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 11,
                        name: "A Gentleman in Moscow: The worldwide bestseller",
                        price: 300,
                        flag: false,
                        image: "https://images-na.ssl-images-amazon.com/images/I/51k+lXZyJ6L._SY344_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Gentleman-Moscow-Amor-Towles/dp/0099558785",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 12,
                        name: "The Origin of Species",
                        price: 159,
                        flag: false,
                        image: "https://images-eu.ssl-images-amazon.com/images/I/51PNzwsl30L._SY264_BO1,204,203," +
                                "200_QL40_FMwebp_.jpg",
                        url: "https://www.amazon.in/Origin-Species-Charles-Darwin/dp/8172344880",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 13,
                        name: "The Theory of Everything: The Origin and Fate of the Universe",
                        price: 156,
                        flag: false,
                        image: "https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Theory-Everything-Stephen-Hawking/dp/8179925919",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 14,
                        name: "Factfulness: Ten Reasons We're Wrong About The World - And Why Things Are Better" +
                                " Than You Think",
                        price: 315,
                        flag: false,
                        image: "https://images-na.ssl-images-amazon.com/images/I/51DhvV6a3mL._SX321_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Factfulness-Reasons-Wrong-Things-Better/dp/1473637465",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }, {
                        id: 15,
                        name: "Range: How Generalists Triumph in a Specialized World",
                        price: 354,
                        flag: false,
                        image: "https://images-na.ssl-images-amazon.com/images/I/41TONZPsjTL._SX327_BO1,204,203," +
                                "200_.jpg",
                        url: "https://www.amazon.in/Range-Key-Success-Performance-Education/dp/1509843523",
                        quantity: 1,
                        description: {
                            author: {
                                name: '',
                                about: ''
                            },
                            review: ''
                        }
                    }
                ];
                return {productlist};
            });
        }
    });
}