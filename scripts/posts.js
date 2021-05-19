/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const standartFilter = {
    author: 'all',
    createdAt: new Date(),
    tags: [],
  };
  
  const posts = [
    {
      id: '0',
      description: 'хэппи бёрздэй ту ми',
      createdAt: new Date('2019-09-24T00:40:17'),
      author: 'mariakolyachko',
      photoLink: 'users/mariakolyachko/photo.jpg',
      tags: [],
      likes: [],
    },
    {
      id: '1',
      description: 'самое время вспомнить про твиттер, нужно же понять, что нам нужно писать на уп',
      createdAt: new Date('2020-03-02T19:38:01'),
      author: 'mariakolyachko',
      photoLink: 'users/mariakolyachko/photo.jpg',
      tags: ['bsu', 'is', 'love'],
      likes: [],
    },
    {
      id: '2',
      description: 'Считаю определители методом Лагранжа!\nПотому что могу себе позволить!',
      createdAt: new Date('2020-02-29T23:02:07'),
      author: 'veronikchaa',
      photoLink: 'users/veronikchaa/photo.jpg',
      tags: ['det', 'matrix', 'love'],
      likes: [],
    },
    {
      id: '3',
      description: 'Это всё сахарок',
      createdAt: new Date('2020-02-23T00:00:00'),
      author: 'ar_kud',
      photoLink: 'users/ar_kud/photo.jpg',
      tags: ['sugar', 'ugar', 'notтоксик'],
      likes: [],
    },
    {
      id: '4',
      description: 'Нет, я не злой председ, я просто котик :)',
      createdAt: new Date('2020-02-19T15:08:23'),
      author: 'sstrazdina',
      photoLink: 'users/sstrazdina/photo.jpg',
      tags: ['студсоюз', 'dreamteam_famcs', 'biglove'],
      likes: [],
    },
    {
      id: '5',
      description: 'хочу уже танцевать под безумие на афтере мисс',
      createdAt: new Date('2020-02-13T23:48:11'),
      author: 'polina_volchetskaya',
      photoLink: 'users/polina_volchetskaya/photo.jpg',
      tags: ['afterparty', 'dance', 'miss2020'],
      likes: [],
    },
    {
      id: '6',
      description: 'я тебя конечно тоже люблю, но валяюсь с простудой)',
      createdAt: new Date('2020-01-22T13:24:24'),
      author: 'pavel.tyl',
      photoLink: 'users/pavel.tyl/photo.jpg',
      tags: ['harassment', 'afterparty', 'flu'],
      likes: [],
    },
    {
      id: '7',
      description: '-Вероника, хочешь апельсин?\n-Я хочу умереть :(',
      createdAt: new Date('2020-01-20T04:01:07'),
      author: 'mariakolyachko',
      photoLink: 'users/mariakolyachko/photo.jpg',
      tags: ['death', 'obschaga', 'love'],
      likes: [],
    },
    {
      id: '8',
      description: ' — Слова — это имущество общественное, поэтому их у вас и недолжно быть. Вы можете только брать их из общей кучки и использовать по назначению. Желательно по делу. Иначе от них нет никакого толка.\nЛавка Времени',
      createdAt: new Date('2020-01-19T13:45:01'),
      author: 'al_taraikovich',
      photoLink: 'users/al_taraikovich/photo.jpg',
      tags: ['words', 'time'],
      likes: [],
    },
    {
      id: '9',
      description: 'Мне вчера такие психоделические сны снились, вы даже не представляете.',
      createdAt: new Date('2020-01-10T19:38:01'),
      author: 'kupajj_oleg_',
      photoLink: 'users/kupajj_oleg_/photo.jpg',
      tags: ['dream', 'team', 'dresses'],
      likes: [],
    },
    {
      id: '10',
      description: 'позвали в жюри, безумно этому рад!',
      createdAt: new Date('2020-01-02T19:38:01'),
      author: 'vitonka',
      photoLink: 'users/vitonka/photo.jpg',
      tags: ['bsu', 'miss2020', 'girls'],
      likes: [],
    },
    {
      id: '11',
      description: 'а пятое задание спустя две недели так и не поддалось :(',
      createdAt: new Date('2019-12-25T19:38:17'),
      author: 'mariakolyachko',
      photoLink: 'users/mariakolyachko/photo.jpg',
      tags: ['task5', 'UP'],
      likes: [],
    },
    {
      id: '12',
      description: 'ну я вижу только Полину и Машу. Это же Маша, да?',
      createdAt: new Date('2019-12-10T21:12:01'),
      author: 'kupajj_oleg_',
      photoLink: 'users/kupajj_oleg_/photo.jpg',
      tags: ['Masha', 'Polina', 'seeyou'],
      likes: [],
    },
    {
      id: '13',
      description: 'самые интересные стажировки у нас в Яндексе!',
      createdAt: new Date('2019-12-09T23:38:01'),
      author: 'vitonka',
      photoLink: 'users/vitonka/photo.jpg',
      tags: ['Yandex', 'is', 'love'],
      likes: [],
    },
    {
      id: '14',
      description: 'иногда просто так хейтишь меня, а потом просто так любишь',
      createdAt: new Date('2019-12-07T20:00:24'),
      author: 'pavel.tyl',
      photoLink: 'users/pavel.tyl/photo.jpg',
      tags: ['hate', 'love'],
      likes: [],
    },
    {
      id: '15',
      description: 'хочу уже танцевать под безумие на афтере мисс',
      createdAt: new Date('2019-11-13T23:48:11'),
      author: 'polina_volchetskaya',
      photoLink: 'users/polina_volchetskaya/photo.jpg',
      tags: ['dance'],
      likes: [],
    },
    {
      id: '16',
      description: 'хочу уже танцевать под безумие на афтере мисс',
      createdAt: new Date('2019-11-10T23:02:11'),
      author: 'polina_volchetskaya',
      photoLink: 'users/polina_volchetskaya/photo.jpg',
      tags: ['afterparty'],
      likes: [],
    },
    {
      id: '17',
      description: 'люблю себя и свою жизнь просто так',
      createdAt: new Date('2019-10-29T23:02:07'),
      author: 'veronikchaa',
      photoLink: 'users/veronikchaa/photo.jpg',
      tags: ['life', 'is', 'wonderful'],
      likes: [],
    },
    {
      id: '18',
      description: 'слышу твои кабlookи',
      createdAt: new Date('2019-10-09T13:02:07'),
      author: 'veronikchaa',
      photoLink: 'users/veronikchaa/photo.jpg',
      tags: ['look'],
      likes: [],
    },
    {
      id: '19',
      description: 'сидят два пользователя линукс и думают...',
      createdAt: new Date('2019-09-30T00:00:00'),
      author: 'ar_kud',
      photoLink: 'users/ar_kud/photo.jpg',
      tags: ['linux', 'is', 'my', 'life'],
      likes: [],
    },
  ];
  
  /**
   * Gets index of the post by its id
   * @param {string} id
   * @param {array} posts
   * @return {number}
   */
  function getIndex(id, posts) {
    for (let i = 0; i < posts.length; ++i) {
      if (posts[i].id === id) {
        return i;
      }
    }
    return -1;
  }
  
  /**
   * Checks if the post exist
   * @param {string} id
   * @param {array} posts
   * @return {boolean}
   */
  function isExist(id, posts) {
    return getIndex(id, posts) != -1;
  }
  
  /**
   * Compares two dates
   * @param {Date} first
   * @param {Date} second
   * @return {number}
   */
  function compareDate(first, second) {
    return (second.createdAt.getTime() -
        first.createdAt.getTime());
  }
  
  /**
   * Checks if item contains all tags
   * @param {object} item
   * @param {array} tags
   * @return {boolean}
   */
  function containTags(item, tags) {
    return tags.every(function(tag) {
      return item.tags.some(function(item) {
        return item === tag;
      });
    });
  }
  
  /**
   * Returns top posts skipping first skip posts that fit the filterConfig
   * @param {number} skip
   * @param {number} top
   * @param {number} filterConfig
   * @param {array} posts
   * @return {array}
   */
  function getPosts(skip = 0, top = 10, filterConfig, posts) {
    const postsFilter = Object.assign({}, standartFilter, filterConfig);
  
    return posts.filter(function(item) {
      return (postsFilter.author === 'all' ||
                            item.author === postsFilter.author) &&
                    compareDate(item, postsFilter) >= 0 &&
                    containTags(item, postsFilter.tags);
    })
        .sort(compareDate)
        .slice(skip, skip + top);
  }
  
  /**
   * Returns a post by its id
   * @param {string} id
   * @param {array} posts
   * @return {object}
   */
  function getPost(id, posts) {
    return isExist(id, posts) ? posts[getIndex(id, posts)] : null;
  }
  
  /**
     * Checks if the post is correct
     * @param {object} post
     * @return {boolean}
     */
  function validatePost(post) {
    return (post.id != undefined) &&
      post.description != undefined &&
      (post.author != undefined && post.author.length != 0);
  }
  
  /**
   * Adds a post to the collection
   * @param {object} post
   * @param {array} posts
   * @return {boolean}
   */
  function addPost(post, posts) {
    if (validatePost(post) && !isExist(post.id)) {
      posts.push(post);
      return true;
    }
    return false;
  }
  
  /**
   * Edit the post
   * @param {string} id
   * @param {object} changes
   * @param {array} posts
   * @return {boolean}
   */
  function editPost(id, changes, posts) {
    if (!isExist(id, posts)) {
      return false;
    }
  
    const isMutable = function(change) {
      return change !== 'id' &&
        change !== 'createdAt' &&
        change !== 'author';
    };
  
    const post = Object.assign({}, posts.getPost(id));
  
    for (const change of Object.keys(changes)) {
      if (isMutable(change)) {
        post[change] = changes[change];
      } else {
        return false;
      }
    }
  
    if (validatePost(post)) {
      posts[getIndex(id, posts)] = Object.assign({}, post);
      return true;
    } else {
      return false;
    }
  }
  
  /**
   * Removes the post by its id
   * @param {string} id
   * @param {array} posts
   */
  function removePost(id, posts) {
    if (isExist(id, posts)) {
      posts.splice(getIndex(id, posts), 1);
    }
  }