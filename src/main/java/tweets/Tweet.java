package tweets;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Tweet {
  private static final int DESCRIPTION_MAX_LENGTH = 280;
  private static final int TAG_MAX_LENGTH = 20;
  private final String id;
  private String description;
  private final Date date;
  private final String author;
  private String photoLink;
  private List<String> tags = new ArrayList<>();
  private List<String> likes = new ArrayList<>();

  Tweet(Map<String, Object> tweet) {
    id = (String)tweet.get("id");
    description = (String)tweet.get("description");
    author = (String)tweet.get("author");
    photoLink = (String)tweet.get("photoLink");
    date = (Date)tweet.get("date");
    tags.addAll(
      Arrays.asList((String[]) tweet.get("tags"))
    );
    likes.addAll(
      Arrays.asList((String[]) tweet.get("likes"))
    );
  }

  String getId() {
    return id;
  }

  String getDescription() {
    return description;
  }

  void setDescription(String description) {
    this.description = description;
  }

  String getAuthor() {
    return author;
  }

  String getPhotoLink() {
    return photoLink;
  }

  void setPhotoLink(String photoLink) {
    this.photoLink = photoLink;
  }

  Date getDate() {
    return date;
  }

  List<String> getTags() {
    return tags;
  }

  void setTags(List<String> tags) {
    this.tags = tags;
  }

  List<String> getLikes() {
    return tags;
  }

  void setLikes(List<String> likes) {
    this.likes = likes;
  }

  boolean isValid() {
    return !id.isEmpty() &&
      !description.isEmpty() &&
      description.length() <= DESCRIPTION_MAX_LENGTH &&
      !photoLink.isEmpty() &&
      date != null &&
      !author.isEmpty() &&
      isValidTags();
  }

  boolean containTags(List<String> tags) {
    for (String tag : tags) {
      if (!this.tags.contains(tag)) {
        return false;
      }
    }
    return true;
  }

  private boolean isValidTags() {
    for (String tag : tags) {
      if (tag.length() > TAG_MAX_LENGTH) {
        return false;
      }
    }
    return true;
  }

  Map<String, Object> toMap() {
    Map<String, Object> mappedTweet = new HashMap<>();

    mappedTweet.put("id", id);
    mappedTweet.put("description", description);
    mappedTweet.put("author", author);
    mappedTweet.put("createdAt", date);
    mappedTweet.put("photoLink", photoLink);
    mappedTweet.put("tags", tags);
    mappedTweet.put("likes", likes);

    return mappedTweet;
  }
}