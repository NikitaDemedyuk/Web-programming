package tweets;

import java.util.List;
import java.util.Map;

public interface ITweetCollection {
  boolean add(Map<String, Object> tweet);
  boolean delete(String id);
  Map<String, Object> get(String id);
  List<Map<String, Object>> getPage(Map<String, Object> filterConfig);
}