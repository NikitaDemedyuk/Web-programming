/* eslint-disable no-unused-vars */
/**
 * PostModel class
 */
 class PostModel {
    _posts = new Map();
  
    static STANDART_FILTER = {
      author: 'all',
      createdAt: new Date(),
      tags: [],
    }
  
    /**
     * Creates a new object
     * @param {array} posts
     */
    constructor(posts) {
      this._posts = new Map(posts.map(post => [post.id, post]));
    }
  
    /**
     * Returns top posts skipping first skip posts that fit the filterConfig
     * @param {number} skip
     * @param {number} top
     * @param {object} filterConfig
     * @return {array}
     */
    getPage(skip = 0, top = 10, filterConfig) {
      const postsFilter = Object.assign({}, PostModel.STANDART_FILTER, filterConfig);
  
      let isSuitable = function(item) {
        return (postsFilter.author === 'all' ||
                item.author === postsFilter.author) &&
                PostModel.compareDate(item, postsFilter) >= 0 &&
                PostModel.containTags(item, postsFilter.tags);
      };
  
      let suitablePosts = [];
  
      this._posts.forEach(function(value, key, map) {
        if (isSuitable(value)) {
          suitablePosts.push(value);
        }
      });
  
      return suitablePosts
              .sort(PostModel.compareDate)
              .slice(skip, skip + top);
    }
    
    /**
     * Returns a post by its id
     * @param {string} id
     * @return {object}
     */
    get(id) {
      return this._posts.has(id) ? this._posts.get(id) : null;
    }
  
    /**
     * Adds a post to the collection
     * @param {object} post
     * @return {boolean}
     */
    add(post) {
      if (PostModel.validate(post) && this._posts.has(post.id) !== true) {
        this._posts.set(post.id, post);
        return true;
      }
      return false;
    }
  
    /**
     * Adds posts to the collection
     * @param {array} posts
     */
    addAll(posts) {
      posts.every((post) => this.add(post));
    }
  
    /**
     * Edit the post
     * @param {string} id
     * @param {object} changes
     * @return {boolean}
     */
    edit(id, changes) {
      if (!this._posts.has(id)) {
        return false;
      }
  
      const isMutable = function(change) {
        return change !== 'id' &&
          change !== 'createdAt' &&
          change !== 'author';
      };
  
      const post = Object.assign({}, this.get(id));
  
      for (const change of Object.keys(changes)) {
        if (isMutable(change)) {
          post[change] = changes[change];
        } else {
          return false;
        }
      }
  
      if (PostModel.validate(post)) {
        this._posts.set(id, post);
        return true;
      } else {
        return false;
      }
    }
  
    /**
     * Removes the post by its id
     * @param {string} id
     */
    remove(id) {
      if (this._posts.has(id)) {
        this._posts.delete(id);
      }
    }
  
    /**
     * Clears the collection
     */
    clear() {
      this._posts.clear();
    }
  
    /**
     * Checks if the post is correct
     * @param {object} post
     * @return {boolean}
     */
    static validate(post) {
      return post.id != undefined &&
              post.description != undefined &&
              (post.author != undefined && post.author.length != 0);
    }
  
    /**
     * Compares two dates
     * @param {Date} first
     * @param {Date} second
     * @return {number}
     */
    static compareDate(first, second) {
      return (second.createdAt.getTime() -
              first.createdAt.getTime());
    }
  
    /**
     * Checks if item contains all tags
     * @param {object} item
     * @param {array} tags
     * @return {boolean}
     */
    static containTags(item, tags) {
      return tags.every(function(tag) {
        return item.tags.some(function(item) {
          return item === tag;
        });
      });
    }
  }