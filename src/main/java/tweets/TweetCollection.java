package tweets;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class TweetCollection implements ITweetCollection {
  private Map<String, Tweet> tweets = new HashMap<>();

  @Override
  public boolean add(Map<String, Object> tweet) {
    Tweet newTweet = new Tweet(tweet);
    if (newTweet.isValid()) {
      tweets.put(newTweet.getId(), newTweet);
      return true;
    } else {
      return false;
    }
  }

  @Override
  public boolean delete(String id) {
    if (tweets.containsKey(id)) {
      tweets.remove(id);
      return true;
    } else {
      return false;
    }
  }

  @Override
  public Map<String, Object> get(String id) {
    if (tweets.containsKey(id)) {
      return tweets.get(id).toMap();
    } else {
      return null;
    }
  }

  @Override
  public List<Map<String, Object>> getPage(Map<String, Object> filterConfig) {

    return tweets.values().stream()
        .filter(tweet -> (!filterConfig.containsKey("author") ||
          tweet.getAuthor().equals(filterConfig.get("author"))) &&
          (!filterConfig.containsKey("date") ||
            tweet.getDate().compareTo((Date)filterConfig.get("date")) <= 0) &&
          (!filterConfig.containsKey("tags") ||
            tweet.containTags((List<String>)filterConfig.get("tags"))))
        .map(Tweet::toMap)
        .collect(Collectors.toList());
  }
}