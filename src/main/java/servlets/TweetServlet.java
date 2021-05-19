package servlets;

import org.json.JSONObject;
import tweets.ITweetCollection;
import tweets.TweetCollection;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

public class TweetServlet extends HttpServlet {
  protected ITweetCollection tweets = new TweetCollection();

  @Override
  protected void doGet(
    HttpServletRequest request,
    HttpServletResponse response) throws IOException {

    String id = request.getParameter("id");
    Map<String, Object> tweet = tweets.get(id);

    JSONObject jsonResponse;
    if (tweet != null) {
      jsonResponse = new JSONObject(tweet);
    } else {
      jsonResponse = new JSONObject();
    }
    response.getOutputStream().println(jsonResponse.toString());
  }

  @Override
  protected void doDelete(
    HttpServletRequest request,
    HttpServletResponse response) throws IOException {

    String id = request.getParameter("id");
    if (tweets.delete(id)) {
      response.getOutputStream().println("{\"message\": \"tweet deleted successfully\"}");
    } else {
      response.getOutputStream().println("\"message\": \"deletion is aborted\"");
    }
  }
}